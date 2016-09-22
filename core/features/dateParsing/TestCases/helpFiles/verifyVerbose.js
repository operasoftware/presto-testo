var passed_count = 0;
var failed_count = 0;
var ie_ok_count = 0;
var dst_patched_count = 0;
var wrong_get_year_cout=0;

var group_desc = "";

function print_group_desc()
{
	if ( group_desc != "" )
	{
		document.write("<h2>In group '" + group_desc + "':\r\n</h2>");
		group_desc = "";
	}
}

// Arguments to the 'test_date' function:
//
// datestr     - Date string to be parsed
// exp_date    - The resulting date, e.g. "Thu Dec 24" or "NaN"
// exp_year    - The four digit year of the resulting date, e.g. "1970"
// exp_time    - The time of the resulting date, e.g. "00:00:00 GMT+0100"
// exp_getyear - The expected result of getYear(), e.g. "70" or "NaN"
//
// All of the above arguments must be strings

function test_date(datestr, exp_date, exp_year, exp_time, exp_getyear)
{
    var date = new Date(datestr);
    var got_date = "" + date;
    var got_year = "" + date.getYear();

    // FF/Safari returns 'Invalid Date'
    if ( got_date == "Invalid Date" )
	got_date = "NaN";
    if ( got_year == "Invalid Date" )
	got_year = "NaN";

    // IE returns UTC, we expect GMT so change it so IE passes this test:
    var ie_date = got_date.replace("UTC", "GMT");

    // IE returns single digit day of month, we expect two digits
    if ( ie_date.substr(9,1) == " " )
	ie_date = ie_date.substr(0,8) + "0" + ie_date.substr(8);

    // IE will return two digits year for y >= 10 && y <= 99, so add "0"
    var len = ie_date.length;
    if ( ie_date.substr(len - 3, 1) == " " )
	ie_date = ie_date.substr(0, len - 2) + "0" + ie_date.substr(len -2);

    // IE will return three digit year for y >= 100 && y <= 999, so add "0"
    len = ie_date.length;
    if ( ie_date.substr(len - 4, 1) == " " )
	ie_date = ie_date.substr(0, len - 3) + "0" + ie_date.substr(len - 3);

    // Safari will return verbose timezone info, remove that
    got_date = got_date.replace(" (W. Europe Standard Time)", "");
	got_date = got_date.replace(" (W. Europe Daylight Time)", "");

    var passed = false;
    var ie_expect;
    var op_expect;
	var ff_expect;
	
    if ( exp_date == "NaN" )
    {
		ie_expect = "NaN";
		op_expect = "NaN";
		ff_expect = "Invalid Date";
    } else {
		ie_expect = exp_date + " " + exp_time + " " + exp_year;
		op_expect = exp_date + " " + exp_year + " " + exp_time;
		ff_expect = exp_date + " " + exp_year + " " + exp_time;
    }

    if ( got_date == op_expect )
    {
		passed = true;
    }
	if ( got_date == ff_expect )
	{
		passed = true;
	}
    else if ( ie_date == ie_expect )
    {
		passed = true;
		ie_ok_count++;
    }
    // else
    if ( 0 )
    {
		op_expect = op_expect.replace("GMT+0200", "GMT+0100");
	if ( got_date == op_expect )
	{
	    passed = true;
	    dst_patched_count++;
	}
    }

	if ( !passed )
	{
		print_group_desc();
		document.write("<font color=red>Failed: '" + datestr + "' (Got '" + got_date + "', expected '");
		document.write(op_expect + "' / '" + ie_expect + "')\r\n</font>");
	}
	if ( passed )
	{
		passed_count++;
		print_group_desc();
		document.write("<font color=green>Pass: '" + datestr + "' (Got '" + got_date + "', expected '");
		document.write(op_expect + "' / '" + ie_expect + "')\r\n</font>");
	}	
	else
		failed_count++;

	if ( got_year != exp_getyear )
	{	
		print_group_desc();
		document.write("<font color='#B94600'>Wrong get year: '"+ datestr + "' (Got year '" + got_year + "', expected '" + exp_getyear + "')\r\n</font>");
		//passed = false; //Only for FF
		wrong_get_year_cout++;
	}
	
}

function start_group(desc)
{
    group_desc = desc;
}							

function test_summary()
{
document.write("\r\n");

if ( failed_count > 0 )
	document.write("<font color=red>Failed tests: " + failed_count + "\r\n</font>");

document.write("<font color=green>Passed tests: " + passed_count + "\r\n</font>");

if(wrong_get_year_cout>0)

	document.write("<font color='#B94600'>Wrong get year: " + wrong_get_year_cout + "\r\n</font>");

if ( failed_count == 0 )
	document.write("\r\nPASS\r\n\r\n");

if ( ie_ok_count > 0 )
	document.write("IE matches: " + ie_ok_count + "\r\n");
	
}
