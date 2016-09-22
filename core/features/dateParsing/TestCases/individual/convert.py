# -*- coding: utf-8 -*-
import sys
import re
import html5lib
from collections import defaultdict
import genshi
from genshi.template import  MarkupTemplate
import os

test_script_template = """test_date("%(input)s", %(year)s, %(month)s, %(day)s, %(hour)s, %(minute)s, %(second)s)"""

def get_script(tree):
    #should really get the first script with no src attribute
    rv = tree.xpath("//h:script[1]//text()", namespaces={"h":"http://www.w3.org/1999/xhtml"})
    return "".join(rv)

def parse_line(line):
    patterns = [
        (re.compile("start_group\s*\((.*)\)"), start_group),
        (re.compile("test_date\s*\((.*)\)"), test),
        ]
    for pattern, func in patterns:
        match = pattern.match(line)
        if match is not None:
            return func(match)
    return None


def start_group(match):
    return "group", match.groups()[0].strip().strip("\"'")

def test(match):
    args_string = match.groups()[0]
    args = split_args(args_string)
    return "test", (args[0], timestamp(args))

def split_args(args):
    in_quote = False
    quote_char = None
    last_was_escape = False
    rv = []
    quote_chars = ("'", '"')
    new_arg = True
    for char in args:
        if not in_quote and char in quote_chars and not last_was_escape:
            in_quote = True
            quote_char = char
        elif char == quote_char and in_quote and not last_was_escape:
            in_quote = False
        elif not in_quote and char == ",":
            new_arg = True
        elif not char == "\\":
            if new_arg:
                new_arg = False
                rv.append("")
            rv[-1] += char
        elif char == "\\":
            last_was_escape = True    

        if not char == "\\":
            last_was_escape = False
    return [item.strip() for item in rv]

def timestamp(function_args):
    if function_args[1] == "NaN":
        return "Invalid Date"
    else:
        month, day = day_month_from_arg(function_args[1])
        year = int(function_args[2])
        hour, minute, second, tz_offset = hour_minute_second_from_arg(function_args[3])
        (utc_year, utc_month, utc_day, 
         utc_hour, utc_minute, utc_second) = local_time_to_utc(
            year, month, day, hour, minute, second, tz_offset)
        return {"year":utc_year, "month":utc_month, "day":utc_day, 
                "hour":utc_hour, "minute":utc_minute, "second":utc_second}

def day_month_from_arg(arg):
    months = dict((item, x) for item, x in 
                  zip(("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
                       "Aug", "Sep", "Oct", "Nov", "Dec"), xrange(12)))
    week, month_str, day_str = arg.split()
    #Note that javascript months start from 0
    return months[month_str], int(day_str)

def hour_minute_second_from_arg(arg):
    time, tz = arg.split()[:2]
    hour, minute, second = tuple(int(item) for item in time.split(":"))
    assert tz.startswith("GMT")
    tz_offset = tz[3:]
    tz_direction = tz_offset[0] == "+" and -1 or 1
    tz_hours = int(tz_offset[1:3])
    tz_minutes = int(tz_offset[3:])
    
    return hour, minute, second, (tz_direction, tz_hours, tz_minutes)

def local_time_to_utc(year, month, day, hour, minute, second, tz_offset):
    tz_sign, tz_hour, tz_minute = tz_offset
    utc_second = second
    utc_minute = minute
    if tz_minute:
        utc_minute += (tz_sign * tz_minute)
        if utc_minute < 0:
            hour -= 1
            utc_minute = 60 + utc_minute
        elif utc_minute > 59:
            hour += 1
            utc_minute = utc_minute%60
    utc_hour = hour
    utc_day = day
    utc_month = month
    utc_year = year
    if tz_hour:
        utc_hour += (tz_sign * tz_hour)
        if utc_hour < 0:
            utc_day -= 1
            utc_hour += 24
        elif utc_hour > 23:
            utc_day += 1
            utc_hour = utc_hour%24

        if utc_day < 1:
            utc_month -= 1
            if utc_month < 0:
                utc_year -= 1
                utc_month = 11
            utc_day = days_in_month(utc_month, utc_year)
        elif utc_day > days_in_month(utc_month, utc_year):
            utc_day = 0
            if utc_month > 11:
                utc_year += 1

    return utc_year, utc_month, utc_day, utc_hour, utc_minute, utc_second

def days_in_month(month, year):
    month_days = {0:31, 1:28, 2:31, 3:30, 4:31, 5:30, 6:31, 7:31, 
                  8:30, 9:31, 10:30, 11:31}
    days = month_days[month]
    if month == 2 and year%4 == 0 and (year%100 != 0 or year%400 == 0):
        days = 29

    return days

def parse_tests(text):
    tests = defaultdict(list)
    current_group = None
    count = 0
    for line in text.split("\n"):
        count += 1
        result = parse_line(line)
        if result is not None:
            if result[0] == "group":
                current_group = result[1]
            elif result[0] == "test":
                tests[current_group].append(result[1])
    return tests

def write_tests(tests, out_dir):
    if not os.path.exists(out_dir):
        os.mkdir(out_dir)
    count = 0
    for group, test_list in tests.iteritems():
        for test in test_list:
            count += 1
            write_test(group, count, test, out_dir)

def write_test(group, index, test, out_dir):
    filename = str(index).rjust(3, "0") + ".html"
    title = u"Date parser test — %s — %s"%(group, test[0])
    if test[1] == "Invalid Date":
        test_function = """test_date_invalid("%s", "Invalid Date")"""%test[0]
    else:
        params = {"input":test[0]}
        params.update(test[1])
        test_function = test_script_template%params
        
    #Now write the actual tests out here

    out_f = open(os.path.join(out_dir, filename), "w")
    template = MarkupTemplate(open('test.xml'))
    
    stream = template.generate(title=title,
                               test_function=test_function)
    out_f.write(stream.render('html', doctype='html5', 
                              encoding="utf-8"))
    
    out_f.close()

def get_input(path):
    tree = html5lib.parse(open(path), treebuilder="lxml")
    return get_script(tree)

def main(input_files, out_dir):
    for fn in input_files:
        out_subdir = os.path.splitext(os.path.split(fn)[1])[0]
        test_input = get_input(fn)
        tests = parse_tests(test_input)
        write_tests(tests, os.path.join(out_dir, out_subdir))

if __name__ == "__main__":
    main(sys.argv[2:], sys.argv[1])
