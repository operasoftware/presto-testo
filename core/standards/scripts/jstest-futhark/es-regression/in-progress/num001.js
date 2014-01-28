/* Origin: Deutsche Bank, www.epost.de
  * 
  *  IN PROGRESS -- trying to convert this to a standalone test.  See bottom.
  *
  */

// Simulate the form structure.

var form = { 
  NEWPWD: {}
  OLDPWD: {}
  UNAME: {}
  AUTH: {}
  DELTA: {}
  SID: {}
  submit: function () {}
};

function HexWord(n)
  {
  var ret="";
  for (s=28;s>=0;s-=4)
  {
    ret+="0123456789ABCDEF".charAt((n>>>s)&15);
  }
  return ret;
  }

function Add32(a,b,c)
  {
  var l=0,h=0;
  l=(a&65535)+(b&65535)+(c&65535);
  h=(a>>>16)+(b>>>16)+(c>>>16)+(l>>>16);
  return( ((h&65535)<<16)|(l&65535) );
  }

function CharFromCode(x)
  {
  var esc;
  if ((x>255)||(x==0))
    {
    x=0;
    }
  esc="%"+"0123456789ABCDEF".charAt((x>>4)&15);
  esc=esc+"0123456789ABCDEF".charAt(x&15);
  return(unescape(esc));
  }
var strton=new Object();
function setupstrton()
  {
  var i;
  for (i=1;i<256;i++)
    strton[CharFromCode(i)]=i;
  }
setupstrton();

function CodeAt(s,i)
  {
  var ret=strton[s.charAt(i)];
  if (ret==null)
    {
    ret=0;
    }
  return(ret);
  }


var URI32DIGS="ABCDEFGHIJKLMNOPQRSTUVWXYZ012345";

function URI32H(h,n)
  {
  var bits1=0,r=0,bits2=32,i=0;
  var ret="";
  while(n>0)
    {
    n-=5;
    if (bits1<5)
      {
      bits2-=16;
      r=(r<<16)|((h[i]>>>bits2)&65535);
      if (bits2<16)
        {
        i++;
        bits2=32;
        }
      bits1+=16;
      }
    bits1-=5;
    ret+=URI32DIGS.charAt((r>>>bits1)&31);
    }
  return(ret);
  }

function URI32Int(n)
  {
  var ret="";
  n|=0;
  while(n)
    {
    ret+=URI32DIGS.charAt(n&31);
    n=n>>>5;
    }
  return(ret);
  }

function SHAReset()
  {
  this.N=0;
  this.bitlen=0;
  this.shift=32;
  this.H[0]=0x67452301|0;
  this.H[1]=0xEFCDAB89|0;
  this.H[2]=0x98BADCFE|0;
  this.H[3]=0x10325476|0;
  this.H[4]=0xC3D2E1F0|0;
  }
function SHAPut(b)
  {
  this.shift-=8;
  this.bitlen+=8;
  b&=255;
  if (this.shift>0)
    {
    if (this.shift>=24)
      {
      this.W[this.N]=0;
      }
    this.W[this.N]|=(b<<(this.shift));
    }
  else
    {
    this.W[this.N]|=b;
    this.N++;this.shift=32;
    if (this.N==16)
      {
      this.Compress();
      this.N=0;
      }
    }
  }

function SHAPutString(s)
  {
  var i,l=s.length,c,ret=true;
  for (i=0;i<l;i++)
    {
    c=CodeAt(s,i);
    if (c!=13 && c!=10)
      this.Put(c);
    if (c==0)
      ret=false;
    }
  return (ret);
  }

function SHAEnd()
  {
  var len=this.bitlen;
  this.Put(128);
  while((this.N!=14)||(this.shift!=32))
    this.Put(0);
  this.W[14]=0;
  this.W[15]=len;
  this.Compress();
  this.N=0;
  this.bitlen=0;
  this.shift=32;
  return(this.H);
  }

function SHACompress()
  {
  var A=this.H[0];
  var B=this.H[1];
  var C=this.H[2];
  var D=this.H[3];
  var E=this.H[4];
  var i,s,t;
  for (i=0;i<80;i++)
    {
    s=i&15;
    if (i>=16)
      {
      t=this.W[s]|0;
      t^=this.W[(s+13)&15];
      t^=this.W[(s+8)&15];
      t^=this.W[(s+2)&15];
      this.W[s]=(t<<1)|(t>>>31);
      }
    t=Add32( ((A<<5)|(A>>>27)), E, this.W[s]);
    if (i<40)
      {
      if (i<20)
        {
        t=Add32(t,(B&C)|((~B)&D),0x5A827999);
        }
      else
        {
        t=Add32(t,B^C^D,0x6ED9EBA1);
        }
      }
    else
      {
      if (i<60)
        {
        t=Add32(t,(B&C)|(B&D)|(C&D),0x8F1BBCDC);
        }
      else
        {
        t=Add32(t,B^C^D,0xCA62C1D6);
        }
      }
    E=D;D=C;
    C=(B<<30)|(B>>>2);
    B=A;
    A=t;
    }
  this.H[0]=Add32(this.H[0],A,0);
  this.H[1]=Add32(this.H[1],B,0);
  this.H[2]=Add32(this.H[2],C,0);
  this.H[3]=Add32(this.H[3],D,0);
  this.H[4]=Add32(this.H[4],E,0);
  }

function HMACReset(key)
  {
  var i;
  if (this.mkey==null)
    this.mkey = new Array();
  for (i=0;i<5;i++)
    {
    this.mkey[i]=key[i];
    }
  this.Reset();
  for (i=0;i<5;i++)
    {
    this.W[i]=this.mkey[i]^0x36363636;
    }
  for (i=5;i<16;i++)
    {
    this.W[i]=0x36363636;
    }
  this.Compress()
  this.N=0;
  this.shift=32;
  this.bitlen=512;
  }


function HMACEnd()
  {
  var i,t;
  this.End();
  for (i=0;i<5;i++)
    {
    this.W[i]=this.mkey[i]^0x5C5C5C5C;
    this.mkey[i]=this.H[i];
    }
  for (i=5;i<16;i++)
    this.W[i]=0x5C5C5C5C;
  this.Reset();
  this.Compress();
  for (i=0;i<5;i++)
    {
    this.W[i]=this.mkey[i];
    }
  this.N=5;
  this.shift=32;
  this.bitlen=672;
  return(this.End());
  }

function SHALoop()
  {
  var i,t;
  this.End();
  for (i=0;i<5;i++)
    {
    this.W[i]=this.H[i];
    }
  this.Reset();
  this.N=5;
  this.shift=32;
  this.bitlen=160;
  }

function SHAEnc(text)
  {
  var ret,i;
  ret="";
  this.W[0]=this.H[0];
  this.W[1]=this.H[1]&0xFF000000;
  for (i=2;i<5;i++)
    {
    this.W[i]=0;
    }
  this.Reset();
  this.N=1;
  this.shift=24;
  this.bitlen=40;
  this.End();
  while(text.length>20)
    {
    this.PutString(text.substring(0,20));
    text=text.substring(20,text.length);
    for(i=0;i<5;i++)
      {
      this.W[i]=this.W[i]^this.H[i];
      }
    ret+=URI32H(this.W,160);
    for(i=0;i<5;i++)
      {
      this.W[i]=this.H[i];
      }
    this.Reset();
    this.N=5;
    this.shift=32;
    this.bitlen=160;
    this.End();
    }
  this.PutString(text);
  while(this.N<5)
    {
    this.Put(0);
    }
  for(i=0;i<5;i++)
    {
    this.W[i]=this.W[i]^this.H[i];
    }
  ret+=URI32H(this.W,160);
  return(ret);
  }


function SHASink()
  {
  var i=1;
  this.Reset=SHAReset;
  this.Put=SHAPut;
  this.PutString=SHAPutString;
  this.Compress=SHACompress;
  this.End=SHAEnd;
  this.ResetHMAC=HMACReset;
  this.EndHMAC=HMACEnd;
  this.Loop=SHALoop;
  this.Enc=SHAEnc;
  this.H=new Array();
  this.W=new Array();
  for (i=0;i<16;i++)
    this.W[i]=0;
  this.Reset();
  }


function SplitString(str,sep)
  {
  var i,ret,s,pos;
  ret=new Array();
  i=0;
  s=str;
  pos=s.indexOf(sep);
  while(pos>=0)
    {
    ret[i++]=s.substring(0,pos);
    s=s.substring(pos+sep.length,s.length);
    pos=s.indexOf(sep);
    }
  ret[i]=s;
  return(ret);
  }

function UnsplitString(ar,sep)
  {
  var i,j=ar.length;
  var ret=ar[0];
  for (i=1;i<j;i++)
    {
    ret+=sep+ar[i];
    }
  return(ret);
  }

function SessionLogin(name,pwd,sid,salt)
  {
  this.hash.Reset();
  this.hash.PutString("Phoenix:");
  this.hash.PutString(pwd);
  this.hash.Loop();
  this.hash.PutString(salt);
  this.hash.End();
  for (i=0;i<5;i++)
    this.spwd[i]=this.hash.H[i];
  this.sid=sid;
  this.seq=1;
  this.uname=name;
  this.salt=salt;
  this.restored=true;
  this.Save();
  }

function SessionChangePwd(form,salt)
  {
  var i,delta,newpwd;
  delta=new Array();
  this.hash.Reset();
  this.hash.PutString("Phoenix:");
  this.hash.PutString(""+form.NEWPWD.value);
  this.hash.Loop();
  this.hash.PutString(salt);
  this.hash.End();
  for (i=0;i<5;i++)
    this.spwd[i]=this.hash.H[i];

  for (i=0;i<5;i++)
    delta[i]=this.hash.W[i];
  this.hash.Reset();
  this.hash.PutString("Phoenix:");
  this.hash.PutString(""+form.OLDPWD.value);
  this.hash.Loop();
  for (i=0;i<5;i++)
    delta[i]^=this.hash.W[i];
  this.hash.PutString(salt);
  this.hash.End();

  this.hash.ResetHMAC(this.hash.H);
  delta=URI32H(delta,160);
  this.hash.PutString("Pwd:");
  this.hash.PutString(""+form.UNAME.value);
  this.hash.PutString(delta);
  form.AUTH.value=URI32H(this.hash.EndHMAC(),80);
  form.DELTA.value=delta;
  
  this.sid=""+form.SID.value;
  this.seq=2;
  this.uname=""+form.UNAME.value;
  this.salt=salt;
  this.restored=true;
  this.Save();
  
  form.submit()
  }

function SessionSave()
  {
  sdoc=this.win.frames["SessionFrame"].document;
  if (document.images)
    {
    sdoc.open("text/html","replace");
    }
  else
    {
    sdoc.clear();
    }
  sdoc.write("<FORM>");
  sdoc.write("<INPUT type='HIDDEN' name='PSSID' value='"+this.sid+"'></INPUT>");
  sdoc.write("<INPUT type='HIDDEN' name='PSSEQ' value='0x"+HexWord(this.seq)+"'></INPUT>");
  sdoc.write("<INPUT type='HIDDEN' name='PSNAM' value='"+this.uname+"'></INPUT>");
  sdoc.write("<INPUT type='HIDDEN' name='PSALT' value='"+this.salt+"'></INPUT>");
  sdoc.write("<INPUT type='HIDDEN' name='PSPWD' value='");
  var i;
  for (i=0;i<5;i++)
    sdoc.write("0x"+HexWord(this.spwd[i])+":");
  sdoc.write("'></INPUT>");
  sdoc.write("</FORM>");
  sdoc.close();
  }

function SessionRestore()
  {
  var i,ps,sf,sdoc;
  this.restored=true;
  sdoc=this.win.frames["SessionFrame"].document;
  if (sdoc.forms.length)
    {
    sf=sdoc.forms[0];
    this.sid=""+sf.PSSID.value;
    this.seq=parseInt(""+sf.PSSEQ.value);
    this.uname=""+sf.PSNAM.value;
    this.salt=""+sf.PSALT.value;
    ps=SplitString(""+sf.PSPWD.value,":");
    for (i=0;i<5;i++)
      {
      this.spwd[i]=parseInt(ps[i]);
      }
    }
  else
    {
    this.sid="";
    this.seq=0;
    this.uname="nouser";
    this.salt="";
    for (i=0;i<5;i++)
      {
      this.spwd[i]=0;
      }
    }
  }

function FixURI(basewin,uri)
  {
  var base,i,ar;
  if (uri.charAt(0)!="/")
    {
    i=uri.indexOf(":");
    if ((i<0)||(i>uri.indexOf("/")))
      {
      ar=SplitString(""+basewin.location,"/");
      ar[ar.length-1]=uri;
      uri=UnsplitString(ar,"/");
      }
    }
  i=uri.indexOf("//");
  if (i>=0)
    {
    uri=uri.substring(i+2,uri.length);
    }
  i=uri.indexOf("/");
  if (i>=0)
    {
    uri=uri.substring(i,uri.length);
    }
  return(uri);
  }

function SessionNavURL(basewin,uri)
  {
  var i,ar;
  if (!this.restored)
    {
    this.Restore();
    }
  uri=FixURI(basewin,uri);
  uri=UnsplitString(SplitString(uri,"+S"),this.sid);
  ar=SplitString(uri,"+Q");
  if (ar.length>1)
    {
    uri=UnsplitString(ar,URI32Int(this.seq));
    }
  uri=UnsplitString(SplitString(uri,"+U"),this.uname);

  ar=SplitString(uri,"+A");
  if (ar.length>1)
    {
    this.hash.ResetHMAC(this.spwd);
    this.hash.PutString(unescape(uri));
    uri=UnsplitString(ar,URI32H(this.hash.EndHMAC(),80));
    }

  uri=UnsplitString(SplitString(uri,"+P"),"+");
  uri=UnsplitString(SplitString(uri,"#"),"%23");
  uri=UnsplitString(SplitString(uri," "),"%20");
  return(uri);
  }

function SessionNav(basewin,uri)
  {
  basewin.location=this.NavURL(basewin,uri);
  }

function SessionSubmit(window,form)
  {
  var i,j,flist,s,d;
  if (form.AUTH)
    {
    if (!this.restored)
      {
      this.Restore();
      }
    this.seq++;
    this.Save();
    flist=SplitString(""+form.FLIST.value,",");
    this.hash.ResetHMAC(this.spwd);

    i=FixURI(window,""+form.action);
    this.hash.PutString(i);
    if (form.ACT) {form.ACT.value=i;}

    i=URI32Int(this.seq);
    this.hash.Put(0);this.hash.PutString(i);form.SEQ.value=i;
    i=this.sid;
    this.hash.Put(0);this.hash.PutString(i);form.SID.value=i;
    for (i=0;i<flist.length;i++)
      {
      this.hash.Put(0);
      s=flist[i];this.hash.PutString(s+"=");
      v=s.charAt(0);
      while (v<=" ")
        {
        s=s.substring(1,s.length);
        v=s.charAt(0);
        }
      if (v=="?")
        {
        if (form.elements[s.substring(1,s.length)].checked)
          {this.hash.PutString("1");}
        else
          {this.hash.PutString("0");}
        }
      else if (v=="@")
        {
        s=form.elements[s.substring(1,s.length)];
        d="";
        for (j=0;j<s.length;j++)
          {
          if (s.options[j].selected)
            {
            if (d.length>0)
              {d=d+","+s.options[j].value;}
            else
              {d=d+s.options[j].value;}
            }
          }
        this.hash.PutString(d);
        }
      else if (v=="!")
        {
        s=s.substring(1,s.length);
        d="";
        for (var j=0; j<form.elements.length; j++)
          {
          if ((form.elements[j].name==s)&&(form.elements[j].checked))
            {
            if (d.length>0)
              {d=d+","+form.elements[j].value;}
            else
              {d=d+form.elements[j].value;}
            }
          }
        this.hash.PutString(d);
        }
      else if (this.hash.PutString(""+form.elements[s].value)==false)
        {        
        return(this.LongSubmit());
        }        
      }
    form.AUTH.value=URI32H(this.hash.EndHMAC(),80);
    }
  form.submit();
  return(true);
  }

function SessionLongSubmit(window,form)
  {
  var i;
  if (form.AUTH)
    {
    if (!this.restored)
      {
      this.Restore();
      }
    this.hash.ResetHMAC(this.spwd);

    i=FixURI(window,""+form.action);
    this.hash.PutString(i);
    if (form.ACT) {form.ACT.value=i;}
    if (form.SEQ) {form.SEQ.value="!LONG!";}
    if (form.SID) {form.SID.value=this.sid;}
    form.AUTH.value=URI32H(this.hash.EndHMAC(),80);
    }
  form.submit();
  return(true);
  }


function SessionEnc(str,text)
  {
  var ret;
  if (!this.restored)
    {
    this.Restore();
    }
  if (this.salt=="")
    {return("");}
  this.seq++;
  this.Save();
  this.hash.ResetHMAC(this.spwd);
  ret=URI32Int(this.seq);
  this.hash.PutString(ret);
  this.hash.PutString(str);
  this.hash.EndHMAC();
  ret=ret+":"+this.hash.Enc(text);
  return(ret);
  }

function PhoenixSession()
  {
  var i;
  this.win=window;
  this.hash=new SHASink();
 
  this.restored=false;

  this.sid="";
  this.seq=1;
  this.uname="nouser";
  this.salt="";
  this.spwd=new Array();
  for (i=0;i<5;i++)
    this.spwd[i]=0;
 
  this.Login=SessionLogin;
  this.Save=SessionSave;
  this.Restore=SessionRestore;
  this.Nav=SessionNav;
  this.NavURL=SessionNavURL;
  this.Submit=SessionSubmit;
  this.LongSubmit=SessionLongSubmit;
  this.ChangePwd=SessionChangePwd;
  this.Enc=SessionEnc;
  }

var phsession=new PhoenixSession();

function OnPhoenixLogin()
  {
  var sid="C124BB6CC8027A46F33FBE900F4E673C645AFA41";
  var salt="A39BB554A2DDAFA571BD77C1DDFBFF0D67F84451";
  var uname="ole.brum";
  var pwd="100meterskogen";
  phsession.Login(uname,pwd,sid,salt);
  SPost(window,document.login);
  }

function SPost(w,form)
  {
  phsession.Submit(w,form);
  }

testmodule( "Deutsche Bank" );

testcase( "Password encryption." );
test( "ole.brum", OnPhoenixLogin(), "???" );
