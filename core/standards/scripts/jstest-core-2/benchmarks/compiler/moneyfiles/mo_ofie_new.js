// Browser Detection
var TICM_na = parseFloat(navigator.appVersion);	
var TICM_napN = navigator.appName.toLowerCase();
var TICM_nu = navigator.userAgent.toLowerCase();

var TICM_isIE=((document.all)&&(TICM_nu.indexOf('opera')==-1))?true:false;
var TICM_isNN4=((document.layers)&&(TICM_na >= 4.03))?true:false;
var TICM_isOpera5up=(TICM_nu.indexOf('opera 5')!=-1)?true:false;
var TICM_isGecko=(TICM_nu.indexOf('gecko')!=-1)?true:false;
var TICM_isDom = document.getElementById?true:false;

var TICM_GeckoMinor=TICM_isGecko?TICM_nu.slice(TICM_nu.indexOf('rv:')+3,TICM_nu.indexOf('rv:')+8):0;
var TICM_isNS62up=(TICM_GeckoMinor>='0.9.4')?true:false;
var TICM_ieMajor=TICM_isIE?parseInt(TICM_nu.slice(TICM_nu.indexOf('msie')+4)):0;
var TICM_isIE4up=TICM_ieMajor >= 4;
var TICM_isIE5up=TICM_ieMajor >= 5;

var TICM_isWin=(TICM_nu.indexOf('win')!=-1)?true:false;
var TICM_isWin98=(TICM_nu.indexOf('windows nt')!=-1)?true:false;
var TICM_isWinNT=(TICM_nu.indexOf('windows 98')!=-1)?true:false;
var TICM_isMac=(TICM_nu.indexOf('mac')!=-1)?true:false;

var TICM_goodClient = (TICM_isNN4 || TICM_isIE4up || TICM_isOpera5up || TICM_isNS62up || TICM_isDom);

// Form field sizing
var TICM_rows=4;
var TICM_cols=13;
var TICM_inpWidthLg=10; 

if (TICM_isWin) {
  if (TICM_isIE4up||TICM_isOpera5up) {TICM_cols=22; TICM_inpWidthLg=14;}
  if (TICM_isGecko){TICM_cols=12; TICM_inpWidthLg=13;}
  if (TICM_isNS62up){TICM_cols=21; TICM_inpWidthLg=14;}
}
else if (TICM_isMac) {
  if (TICM_isIE4up) {TICM_rows=6; TICM_cols=14; TICM_inpWidthLg=21;}
  if (TICM_isIE5up||TICM_isOpera5up) {TICM_cols=19; TICM_inpWidthLg=19;}
  if (TICM_isNN4){TICM_cols=15; TICM_inpWidthLg=19;}
  if (TICM_isGecko){TICM_cols=12; TICM_inpWidthLg=13;}
  if (TICM_isNS62up){TICM_cols=12; TICM_inpWidthLg=14;}
}

// Error checking
function TICM_check(){
  var f = document.mo_ofie0104Form;
  var states = f.state;
  var state;
  var canstates = ['AB','BC','MB','NB','NF','NS','NT','ON','PE','QC','SK','YT']
  var t, msg, good;

  msg = "";
  state = states.options[states.selectedIndex].value;
  
  if ((f.elements["name"].value == null) || (f.elements["name"].value == '') || isblank(f.elements["name"].value)) {msg += "Please enter your Name.\n";}
  else if (f.elements["name"].value.search(/^[\S]+([ ]{1}[\S]+)+$/) == -1) msg += "Please enter your First and Last Name. \n";
  if ((f.address1.value == null) || (f.address1.value == '') || isblank(f.address1.value)) {msg += "Please enter your Address.\n";}
  if ((f.city.value == null) || (f.city.value == '') || isblank(f.city.value)) {msg += "Please enter your City.\n";}
  if (state=='')msg+="Please enter your State/Province.\n"
    
  good=1;
  t=f.email.value;
  if (t==null || t=='' || isblank(t)) good=1;
  else good = (t.search(/^(\w|-)+(\.(\w|-)+)?@((\w|-)+\.){1,}[a-zA-Z]{2,3}$/)==-1)?0:1;
    
  if(!good){msg+="Your E-mail address is incorrect.\n\n";}
    
  good=1; t = f.zipCode.value;
  if (t==null || t=='' || isblank(t) || t.length<5 || t.length>6 )good=0;
  else {
    if (f.state.value!='') {
      if (t.length==5 && (t.search(/^\d{5}$/) != -1)) {
        for (d = 0; d<canstates.length;d++){
          if (f.state.value==canstates[d]) good=0;
        }
      }
      else good=0;
      if (t.length==6 && t.search(/^([a-zA-Z]\d){3}$/)!=-1){
        good=0;
        for (d = 0; d<canstates.length;d++){
          if (f.state.value == canstates[d]) good=1;
        }
      }
    }
  }
   
  if (!good){msg+="Zip/Postal code is blank or incorrect,\nor it doesn't match the State/Province you selected.\n";}

  if (msg.length) {
    alert ("The form was not submitted because of the following error(s):\n\n" + msg +
      "\n\nPlease correct these error(s) and resubmit your form.\n\nThank you,\nTime Inc. Consumer Services");
    return false;
  }
  return true;
}
  
function isblank(s){
  for(var i = 0; i < s.length; i++){
    var c = s.charAt(i);
    if ((c != ' ') && (c != '\n') && (c != '\t')) return false;
  }
  return true;
}

function submitContinue() {
  if (TICM_check()) {
    var ofieWin = window.open('','mo_ofiepen','width=390,height=500,scrollbars,status');
    document.mo_ofie0104Form.target = 'mo_ofiepen';
    return true;
  }
  else return false;
}

//Form HTML
var ofieForm = '<form name="mo_ofie0104Form" method="post" action="https://subs.timeinc.net/MO/mo_ofie0104.jhtml" onsubmit="return submitContinue();"><input type="hidden" name="passVariables" value="MSCSIGTP_E">' +
'<table border="0" cellspacing="0" cellpadding="0" width="130" bgcolor="#CCCCCC">' +
'<tr>' +
'<td valign="top" align="center"><img src="http://i.timeinc.net/subs2/images/mo/mo_ofie0503_header.gif" width="130" height="130"></td>' +
'</tr>' +
'<tr>' +
'<td valign="top" align="center">' +
'<table border="0" cellspacing="1" cellpadding="1" width="120" bgcolor="#CCCCCC">' +
'<tr>' +
'<td style="font-family:Verdana,Arial,sans-serif; font-size:11px;">' +
'Name<br>' +
'<input type="text" name="name" maxlength="30" size="15" style="font-family:Verdana,Arial,sans-serif; font-size:10px;">' +
'</td>' +
'</tr>' +
'<tr>' +
'<td style="font-family:Verdana,Arial,sans-serif; font-size:11px;">' +
'Address 1<br>' +
'<input type="text" name="address1" class="name" maxlength="30" size="15" style="font-family:Verdana,Arial,sans-serif; font-size:10px;"><br>' +
'Address 2<br>' +
'<input type="text" name="address2" class="name" maxlength="30" size="15" style="font-family:Verdana,Arial,sans-serif; font-size:10px;">' +
'</td>' +
'</tr>' +
'<tr>' +
'<td style="font-family:Verdana,Arial,sans-serif; font-size:11px;">' +
'City<br>' +
'<input type="text" name="city" class="name" maxlength="20" size="15" style="font-family:Verdana,Arial,sans-serif; font-size:10px;">' +
'</td>' +
'</tr>' +
'<tr>' +
'<td style="font-family:Verdana,Arial,sans-serif; font-size:11px;">' +
'State/Province<br>' +
'<select name="state" size="1" style="font-size:11px;">' +
'<option value="">--</option>' +
'<option value="AA">AA </option>' +
'<option value="AB">AB </option>' +
'<option value="AE">AE </option>' +
'<option value="AK">AK </option>' +
'<option value="AL">AL </option>' +
'<option value="AP">AP </option>' +
'<option value="AR">AR </option>' +
'<option value="AS">AS </option>' +
'<option value="AZ">AZ </option>' +
'<option value="BC">BC </option>' +
'<option value="CA">CA </option>' +
'<option value="CO">CO </option>' +
'<option value="CT">CT </option>' +
'<option value="DC">DC </option>' +
'<option value="DE">DE </option>' +
'<option value="FL">FL </option>' +
'<option value="GA">GA </option>' +
'<option value="HI">HI </option>' +
'<option value="IA">IA </option>' +
'<option value="ID">ID </option>' +
'<option value="IL">IL </option>' +
'<option value="IN">IN </option>' +
'<option value="KS">KS </option>' +
'<option value="KY">KY </option>' +
'<option value="LA">LA </option>' +
'<option value="MA">MA </option>' +
'<option value="MB">MB </option>' +
'<option value="MD">MD </option>' +
'<option value="ME">ME </option>' +
'<option value="MI">MI </option>' +
'<option value="MN">MN </option>' +
'<option value="MO">MO </option>' +
'<option value="MP">MP </option>' +
'<option value="MS">MS </option>' +
'<option value="MT">MT </option>' +
'<option value="NB">NB </option>' +
'<option value="NC">NC </option>' +
'<option value="ND">ND </option>' +
'<option value="NE">NE </option>' +
'<option value="NF">NF </option>' +
'<option value="NH">NH </option>' +
'<option value="NJ">NJ </option>' +
'<option value="NM">NM </option>' +
'<option value="NV">NV </option>' +
'<option value="NS">NS </option>' +
'<option value="NT">NT </option>' +
'<option value="NY">NY </option>' +
'<option value="ON">ON </option>' +
'<option value="OH">OH </option>' +
'<option value="OK">OK </option>' +
'<option value="OR">OR </option>' +
'<option value="PA">PA </option>' +
'<option value="PE">PE </option>' +
'<option value="PR">PR </option>' +
'<option value="QC">QC </option>' +
'<option value="RI">RI </option>' +
'<option value="SC">SC </option>' +
'<option value="SD">SD </option>' +
'<option value="SK">SK </option>' +
'<option value="TN">TN </option>' +
'<option value="TX">TX </option>' +
'<option value="UT">UT </option>' +
'<option value="VA">VA </option>' +
'<option value="VI">VI </option>' +
'<option value="VT">VT </option>' +
'<option value="WA">WA </option>' +
'<option value="WI">WI </option>' +
'<option value="WV">WV </option>' +
'<option value="WY">WY </option>' +
'<option value="YT">YT </option>' +
'</select>' +
'</td>' +
'</tr>' +
'<tr>' +
'<td style="font-family:Verdana,Arial,sans-serif; font-size:11px;">' +
'Zip/Postal<br>' +
'<input type="text" name="zipCode" class="name" maxlength="6" size="8" style="font-family:Verdana,Arial,sans-serif; font-size:10px;">' +
'</td>' +
'</tr>' +
'<tr>' +
'<td style="font-family:Verdana,Arial,sans-serif; font-size:11px;">' +
'E-mail<br>' +
'<input type="text" name="email" class="name" maxlength="50" size="15" style="font-family:Verdana,Arial,sans-serif; font-size:10px;">' +
'</td>' +
'</tr>' +
'<tr>' +
'<td align="center"><input type="image" src="http://i.timeinc.net/subs2/images/mo/mo_ofie0503_continue.gif" width="112" height="36" border="0"></td>' +
'</tr>' +
'</table>' +
'</td>' +
'</tr>' +
'<tr>' +
'<td valign="top" align="center" style="font-family:Verdana,Arial,sans-serif; font-size:9px;">' +
'<p>' +
'<a href="http://cgi.timeinc.net/cgi-bin/mail/dnp/privacy_centralized.cgi/money?dnp_source=I" target="_blank" style="color:#000000;">Privacy Policy</a><br>' +
'<img src="http://i.timeinc.net/subs2/images/shared/spacer.gif" width="100" height="5">' +
'</p>' +
'</td>' +
'</tr>' +
'</table>' +
'</form>';
// Write out the OFIE
if (TICM_goodClient) document.write(ofieForm);