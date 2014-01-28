var method;

function openWin() {
	var win = window.open("about:blank");
	//Opera cheats with popupwindows, and may return an object in any case, but e.g. .opener is missing on a fake object
	//Set passed at first as if the window was supposed to be opened
	if (win && win.opener) {
		win.close()
		passed = expectedToOpen
	} else {
		passed = !expectedToOpen
	}
	//If the window wasn't supposed to be opened, flip the pass condition
	if (!expectedToOpen()) passed = !passed;
	top.document.getElementById("result").innerHTML = passed?"PASS":"FAIL";
	try{top.opener.rr(passed);}catch(e){}
}

function writeExpectation() {
	method = "interaction";
	if (location.search.indexOf("blocked") > 0) method = "blocked";
	if (location.search.indexOf("allowed") > 0) method = "allowed";
	var url = location.href.substring(0, location.href.length-location.search.length);
	
	document.write("<table border=1><tr><td>Test setup<td>");
	if (method == "interaction") document.write("Interactive with unrequested popups blocked");
	else if (method == "blocked") document.write("Automatic with popups blocked");
	else document.write("Automatic with popups allowed");
	document.write("<tr><td>Expected result<td>Popup should be ");
	if (expectedToOpen()) document.write("opened");
	else document.write("blocked");
	document.write("</table>");
	
	document.write("<p>Result: <span id='result'></span></p>");
	document.write("<p><small>Setup variants:<br>");
	if (method != "interaction") document.write("<a href='"+url+"'>Interactive with unrequested popups blocked</a><br>");
	if (method != "blocked") document.write("<a href='"+url+"?blocked'>Automatic with popups blocked</a><br>");
	if (method != "allowed") document.write("<a href='"+url+"?allowed'>Automatic with popups allowed</a><br>");
	document.write("</small></p>");

}

function expectedToOpen() {
	if (method == "allowed" || (method == "interaction" && openOnUserInteraction)) return true;
	else return false;
}