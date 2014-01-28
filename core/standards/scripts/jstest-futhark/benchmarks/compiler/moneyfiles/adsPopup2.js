var adsPF,adsC,adsD1=adsD.getTime(),adsCS=1,adsPm=new Array(),adsPN6=adsUA.indexOf("Netscape6")!=-1,adsN6O=0,adsP1=new Array(),adsAO=1
var adsW,adsH,adsWin=new Array(),adsA7=adsUA.indexOf("AOL 7")!=-1,adsA8=adsUA.indexOf("AOL 8")!=-1,adsC2=adsUA.indexOf("CS 2000")!=-1||adsUA.indexOf("CS2000")!=-1,adsInt,adsDm=""
function adSetPopDm(v){adsDm=escape(v)} 
function adSetPopN6(v){if (adsPN6){adsN6O=escape(v)}}
function adSetAOLOff(v){adsAO=escape(v)}
function adSetPopupWH(m,w,h,f,p,x,y,c){
var t=7,d=0,k,z=1,wi=window,adsAOL=adsUA.indexOf('AOL')!=-1
if (adsAO==0&&c!=-1&&adsUA.indexOf("AOL 6")==-1)adsAOL=0
if (!adsOld&&!adsOp&&!(adsUA.indexOf('NT')!=-1&&!adsA7&&adsUA.indexOf('Gecko')==-1&&(adsC2||adsAOL))&&(c!=-1||(!adsAOL&&!adsC2&&!(adsPN6&&adsN6O==0)))&&!(adsAO==1&&adsAOL)){adsPF=f
adsW=w
adsH=h
if (c){(c!=-1)?adsCS=c:z=0}
adsP1[z]=0
if (p){p=p.toString();if (p.indexOf('P')!=-1){adsP1[z]=1;p=p.substring(1,p.length)}
t=parseInt(p)
if (adsP1[z]){adsP1[z]=t*3600000}}
if (!x){x=0}
if (!y){y=0}
if (adsIE){x=parseInt(x)+wi.screenLeft;y=parseInt(y)+wi.screenTop}else{x=parseInt(x)+wi.screenX;y=parseInt(y)+wi.screenY}
k=adsCG("adsPopup"+z)
if (!k){d=1}
else if (t!=0){var g=t*60000;if (adsP1[z])g=t*3600000; if ((parseInt(k)+g)<=adsD1){d=1}}
if (d){adsSF()
if (!adsNMSG){if (!adsNG){adsCkPlg();adsNG=adsNMSG}else{adsNMSG=adsNG}}
var a="height="+h+",width="+w+",screenX="+x+",screenY="+y+",left="+x+",top="+y+",resizable"
adsPm[z]=a
if (adsHt.indexOf('http')==-1){adsHt1='http://'+adsHt}else{adsHt1=adsHt}
var dc=document
dc.write(adsSL+adsHt1+"/html/"+m+"/"+adsScr+"/"+adsExt+"?"+adsNMSG+"&height="+h+"&width="+w+"&target=_blank&CT=J"+adsTz)
if (z==0){dc.write("&hw=popunder")}else{dc.write("&hw=popup")}
dc.write(adsScS+adsSr+adsSN+adsWM+adsOt+"'>")
dc.write("</"+"SCRIPT>")}}}
function adsCV(o){var e=adsC.indexOf(";",o)
if (e==-1)e=adsC.length
return unescape(adsC.substring(o,e))}
function adsCG(n){adsC=document.cookie
var i=0,j,a=n+"=",al=a.length,cl=adsC.length
while (i<cl){j=i+al
if (adsC.substring(i,j)==a)return adsCV(j)
i=adsC.indexOf(" ",i)+1
if (i==0){break}}
return null}
function adsPopup(x){var w=window;o=(x)?w.adsObj1:w.adsObj0
o=o.toLowerCase()
var n,a=adsD1,u=adsPF+"?"+x,b=parseInt(x),h=location.hostname,q=h.lastIndexOf('.'),ld=h.substring(q+1,h.length),y=h.lastIndexOf('.',q-1),sd=h.substring(y+1,q),dm=''
if (adsDm==""){if (ld.indexOf("com")!=-1){dm="."+sd+"."+ld}
else{var z=h.lastIndexOf('.',y-1),td=h.substring(z+1,y)
dm=td+"."+sd+"."+ld}}else{dm=adsDm}
var exp=""
if (adsP1[b]){d1=new Date()
d1.setTime(d1.getTime()+adsP1[b])
exp="; expires="+d1.toGMTString()}
if (x==0){document.cookie="adsPopup"+x+"="+escape(adsD1)+"; path=/; domain="+dm+exp}
if (o.indexOf('no_ad')==-1&&o.indexOf('no content')==-1){
if (x==1){document.cookie="adsPopup"+x+"="+escape(adsD1)+"; path=/; domain="+dm+exp}
if (o.indexOf('ads scroll')!=-1){adsPm[b]+=",scrollbars"}
if (!adsA7&&!adsA8){if (b){a++}
n="adsWin"
if (!(adsN4&&x)){n+=a}
adsWin[b]=w.open(u,n,adsPm[b])
if (!adsWin[b].opener){adsWin[b].opener=w}
adsWin[b].opener.name="opener"
if (b){adsWin[b].focus()}
else{if (adsPN6){setTimeout('adsN6F()',1000)}else
if (!adsPN6){adsWin[b].blur()
if (!adsWin[1]){window.focus()}
}}}else {adsWin[1]=w.open("",'adsWin'+a,adsPm[b])
adsInt=setInterval('adsPWr(1)', 100)}}}
var adsInt1,adsInt0
function adsPWr(x){var d=0,w=window
if (!adsInt1&&x==1&&!adsWin[1]){adsInt1=setInterval('adsPWr(1)',100);return}
if (!adsInt0&&x==0&&!adsWin[0]){adsInt0=setInterval('adsPWr(0)',100);return}
if (adsWin[1]&&adsInt1){clearInterval(adsInt1)}
if (adsWin[0]&&adsInt0){clearInterval(adsInt0)}
if (adsA7||adsA8){if (adsWin[1]){clearInterval(adsInt);d=1}}else{d=1}
if (d){x=parseInt(x)
if ((x&&adsWin[1])||(!x&&adsWin[0])){if (adsN4&&x){adsWin[x].resizeTo(adsW,adsH)}
var q="<HTML><HEAD><TITLE>Advertisement</TITLE>"
var o=(x)?w.adsObj1:w.adsObj0,b="<BODY MARGINHEIGHT=0 MARGINWIDTH=0 TOPMARGIN=0 LEFTMARGIN=0 ",l=o.toLowerCase()
if (l.indexOf("<SCRIPT")==-1){
q+="<SCRIPT LANGUAGE='JavaScript1.2'>\n"
q+="function adsCl(){self.close();return false}\nfunction adsClk(e){\n"
if (adsIE){q+="e=window.event;\n"}
q+="var t=document.all?event.srcElement:e.target;var x;\n"
q+="if (t.href){x=setTimeout('adsCl()',1000)}\n"
if (adsNS){q+="else if (document.getElementById){if (e.target.parentNode.tagName.indexOf('A')!=-1){x=setTimeout('adsCl()',1000);}}\nrouteEvent(e)\n"}
q+="return true}\n"
q+="if (document.layers){\ndocument.captureEvents(Event.CLICK);\n}\nif (document.layers || document.all){document.onclick=adsClk;\n}\n"
q+="if (document.addEventListener){\ndocument.addEventListener('click',adsClk, false)}\n"
q+="</SCRIPT>\n"}
if (!adsN4&&x){q+="<SCRIPT LANGUAGE=JavaScript1.1>var bl=0;\n"
q+="function adsBlu(){bl=1}\n"
q+="function adsFocIE(){if (document.all){for (var e=0;e<document.body.all.length;e++){document.body.all[e].onfocus=adsFoc}}}\n"
q+="function adsFoc(){bl=0}"
var s=parseInt(adsCS)*60000
q+="function adsClF(){if (bl!=0){self.close()}else{setTimeout('adsClF()',"+s+")}}\n"
q+="var z=setTimeout('adsClF()',"+s+")\n"
q+="</"+"SCRIPT></HEAD>\n"
q+=b+"onBlur=adsBlu() onFocus=adsFoc() onLoad=adsFocIE()>\n"
}else{
if (adsPN6){b+="onLoad=adsN6L() "
q+="<SCRIPT LANGUAGE='JavaScript1.1'>function adsN6L(){setTimeout('adsFocN6()',1)};function adsFocN6(){if (x){self.focus()}else{window.opener.focus()}</"+"SCRIPT>"
}
q+="</HEAD>"+b+">\n"}
q+=o
q+="</BODY></HTML>"
if (adsWin[x]&&adsWin[x].document){adsWin[x].document.write(q)
adsWin[x].document.close()
if (x){if (adsWin[0]){w.focus();setTimeout('adsN4F()',10)}w.adsObj1=''}else{
if (adsPN6){setTimeout('adsN6F()',1000)}else
if (!adsPN6){adsWin[x].blur()}
w.adsObj0=''}}}}}
function adsN4F(){adsWin[1].focus()}
function adsN6F(){window.focus()
if (adsWin[1]){adsWin[1].focus()}}