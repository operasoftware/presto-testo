from glob import glob
import os
from getpass import getpass

import oursql

import opjsunit


def getLocalTestSet(spartan_base_url):
    paths = glob(os.path.join(opjsunit.base_path, "spartan", "*", "*.htm"))
    paths = map(lambda x: spartan_base_url + os.path.relpath(x, opjsunit.base_path).replace(os.sep, "/"), paths)
    paths = map(lambda x: x.decode("ascii"), paths)
    return frozenset(paths)

def getSPARTANTestSet(cursor, spartan_base_url):
    cursor.execute('SELECT url FROM tests WHERE url LIKE CONCAT(?, "%") AND active = 1 AND test_type = 9',
                   (spartan_base_url,))
    rows = cursor.fetchall()
    return frozenset(x[0] for x in rows)

def makeTestTitle(url):
    split = url.split(u"/")
    file = split[-2]
    name = split[-1].split(u".", 2)[0]
    return u"".join([file, "#", name])

def doInsertion(cursor, urls):
    cursor.executemany("INSERT INTO tests (title, url, test_type) VALUES (?, ?, 9)",
                       ((makeTestTitle(url), url) for url in urls))

def doDisable(cursor, urls):
    cursor.executemany('UPDATE tests SET active = 0, comment = "Disabled having been removed" WHERE url = ? AND active = 1 AND test_type = 9',
                       urls)

def run(cursor, spartan_base_url, noisy=True):
    local = getLocalTestSet(spartan_base_url)
    SPARTAN = getSPARTANTestSet(cursor, spartan_base_url)
    insert = local - SPARTAN
    disable = SPARTAN - local
    doInsertion(cursor, insert)
    doDisable(cursor, disable)

    if noisy:
        print "Inserted:"
        print u"\n".join(insert)
        print
        print
        print "Disabled:"
        print u"\n".join(disable)
        print u"Total: %u inserted, %u disabled" % (len(insert), len(disable))


def main():
    print "Please insert SPARTAN DB credentials:"
    username = raw_input("Username: ")
    password = getpass()
    conn = oursql.connect("spartan-db.oslo.osa", username, password, db="spartan")
    cursor = conn.cursor()
    run(cursor, "http://t/core/standards/scripts/opjsunit/", True)

if __name__ == "__main__":
    main()
