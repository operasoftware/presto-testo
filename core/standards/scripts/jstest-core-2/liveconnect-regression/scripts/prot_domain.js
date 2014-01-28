var cvs = "$Id: prot_domain.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule("String conversion", cvs);

try {

testcase("Test whether javascript: URLs get correct protection domain")

	win = window.open("javascript:document.open(); document.write('<h2>Java version string: '+java.lang.System.getProperty('java.version')+'</h2>'); document.close();");
	conf("getProperty access", "Is Java version string different from null?");

} catch (e) { exception( e ); }

testmodule_finished();
