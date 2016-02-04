/* Utility methods */
var reported = false;

var timer = setTimeout(function()
{
   	if (!reported)
	{
		setResult(0, "Test timed out.");
	}
}, 20000);

function setResult(status, details)
{
	var msg = "";
	if(status === 1) msg = "PASS";
	else if(status === 0) msg = "FAIL";
	else if (status === -1) msg = "UNDEF";
	var msgCont = document.createElement("div");
	msgCont.className = status ? "pass" : "fail";
	if(status === -1) msgCont.className = "unknown";
	msgCont.appendChild(document.createTextNode(msg  + (details ? ", " + details : "")));
	document.body.appendChild(msgCont);
	reported = true;
	try{top.opener.rr(status)}catch(e){}
}

/*
# function getProperties( object, depth, prefix )
# {
# 	prefix = prefix||"";
# 	depth = depth || 5;
# 	var t = "";
# 	for( key in object )
# 	{
# 		t += prefix + "" + "[" + key  + "] " + typeof(object[key]) + " " + object[key] + "\n";
# 		if( typeof(object[key]) == "object" && depth>0 )
# 		{
# 			t += getProperties( object[key], depth-1, "[" + key  + "]" );
# 		}
# 		if( depth==0 ){
# 			t += "------------ 5 \n";
# 		}
# 	}
# 	return t;
# }
*/
