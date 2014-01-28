/* Utility methods */
var reported = false;

var timer = setTimeout(function()
{
   	if (!reported)
	{
		setResult(0, "Test timed out.");
	}
}, 10000);

function setResult(status, details)
{
	var msg = "";
	if(status === 1) msg = "PASS";
	else if(status === 0) msg = "FAIL";
	else if (status === -1) msg = "UNDEF";
	else if (status === -2) msg = "Test initiated.";
	var msgCont = document.createElement("div");
	msgCont.className = status ? "pass" : "fail";
	if(status === -1) msgCont.className = "unknown";
	if(status === -2) msgCont.className = "info";
	msgCont.appendChild(document.createTextNode(msg  + (details ? ", " + details : "")));
	var ph = document.body ? document.body : document.documentElement;
	ph.appendChild(msgCont);
	if(status === 1 || !status || status === -1)
		reported = true;
}

function getProperties( object, depth, prefix )
{
	var blacklist = {"window":1, "document":1};
//	alert("window" in blacklist);
	prefix = prefix||"";
	depth = depth || 5;
	var t = "";
	for( key in object )
	{
		t += prefix + "" + "[" + key  + "] " + typeof(object[key]) + " " + object[key] + "\n";
		if( typeof(object[key]) == "object" && depth>0 )
		{
			if (!key in blacklist)
			t += getProperties( object[key], depth-1, "[" + key  + "]" );
		}
		if( depth==0 ){
			t += "------------ 5 \n";
		}
	}
	return t;
}

window.addEventListener("DOMContentLoaded", function()
						{
							setResult(-2,"");
						},
						false);
