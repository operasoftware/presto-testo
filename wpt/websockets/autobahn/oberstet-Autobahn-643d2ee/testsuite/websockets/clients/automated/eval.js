 function evaluate(target){
 
 document.domain = "oslo.osa";  
 alert('test');
 file_loc="http://certo2.oslo.osa/websockets/autobahn/autobahn/oberstet-Autobahn-643d2ee/testsuite/websockets/reports/clients/" + target;
  xmlhttp=null;
    if (window.XMLHttpRequest)
    {// code for Firefox, Mozilla, IE7, etc.
    xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp!=null)
  {
  xmlhttp.onreadystatechange = function()
    {
    if(xmlhttp.readyState == 4)
      {
        var x = document.createElement('el');
        x.innerHTML=xmlhttp.responseText;
        alert(x.innerHTML); 
	if(x.getElementsByClassName('case case_ok')[0]){
                alert('pass'); 
		try{top.opener.rr(true)}catch(e){}
	}
	else{
		alert('fail');
             try{top.opener.rr(false)}catch(e){}
        }  
       }
    }
  xmlhttp.open("GET", file_loc, true);
  xmlhttp.send();
  }
else
  {
  alert("Your browser does not support XMLHTTP.");
  }
}
  
