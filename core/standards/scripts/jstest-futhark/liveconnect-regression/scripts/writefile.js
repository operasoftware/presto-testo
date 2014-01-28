/*
  Test for bug #72439. Local file access through LiveConnect.
*/

var cvs = "$Id: writefile.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule("Local file access through LiveConnect", cvs);

try {

testcase("Create a new file.")

  var file_open = false;

  try {
    var fil = new java.io.File('c:/security.txt');
    var writer = new java.io.FileWriter(fil);
    file_open = true;
    writer.write('Security Hole\n');
    writer.close();
  } catch (e1) { }

  test("writer should not be created", file_open, false);

} catch (e) { exception( e ); }

testmodule_finished();
