// Pass condition for automation frame work
// The data is based on 4257/core-2.4 build
var currentHighScore = {
        "ISO-8859-1": 192,
        "ISO-8859-2": 224, 
        "ISO-8859-3": 217, 
        "ISO-8859-4": 224, 
        "ISO-8859-5": 224, 
        "ISO-8859-6": 179, 
        "ISO-8859-7": 221, 
        "ISO-8859-8": 188, 
        "ISO-8859-9": 224, 
        "ISO-8859-10": 224, 
        "ISO-8859-11": 184, 
        "ISO-8859-13": 224, 
        "ISO-8859-14": 224, 
        "ISO-8859-15": 224, 
        "ISO-8859-16": 224, 
        "windows-1250": 219, 
        "windows-1251": 223, 
        "windows-1252": 219, 
        "windows-1253": 207, 
        "windows-1254": 217, 
        "windows-1255": 201, 
        "windows-1256": 224, 
        "windows-1257": 212, 
        "windows-1258": 215, 
        "KOI8-R": 224, 
        "KOI8-U": 128, 
        "VISCII": 224, 
        "VPS": 224, 
        "IBM866": 224, 
        "Shift_JIS": 7882, 
        "EUC-JP": 13095, 
        "EUC-KR": 17144, 
        "EUC-TW": 19472,
        "GBK": 21886, 
        "GB18030": 28757, 
        "Big5-HKSCS": 16608, 
        "Big5": 13599, 
        "HZ-GB-2312": 7536, 
        "ISO-2022-JP": 6968, 
        "ISO-2022-KR": 8224, 
        "ISO-2022-CN": 20839
        /* , "windows-sami-2",  */
};

function getPreferredMimeName(charset)
{
  var script = "";

  switch(charset) 
  {
    case "US-ASCII":
    case "ISO-IR-6":
    case "ANSI_X3.4-1986":
    case "ISO_646.IRV:1991":
    case "ASCII":
    case "ISO646-US":
    case "US":
    case "IBM367":
    case "CP367":
    case "CSASCII":
    case "ANSI_X3.4-1968":
      script = "ASCII";
      break;
    case "ISO-8859-1":
    case "ISO-IR-100":
    case "ISO_8859-1":
    case "LATIN1":
    case "L1":
    case "IBM819":
    case "CP819":
    case "CSISOLATIN1":
    case "ISO_8859-1:1987":
      script = "ISO-8859-1";
      break;
    case "ISO-8859-2":
    case "ISO-IR-101":
    case "ISO_8859-2":
    case "LATIN2":
    case "L2":
    case "CSISOLATIN2":
    case "ISO_8859-2:1987":
      script = "ISO-8859-2";
      break;
    case "ISO-8859-3":
    case "ISO-IR-109":
    case "ISO_8859-3":
    case "LATIN3":
    case "L3":
    case "CSISOLATIN3":
    case "ISO_8859-3:1988":
      script = "ISO-8859-3";
      break;
    case "ISO-8859-4":
    case "ISO-IR-110":
    case "ISO_8859-4":
    case "LATIN4":
    case "L4":
    case "CSISOLATIN4":
    case "ISO_8859-4:1988":
      script = "ISO-8859-4";
      break;
    case "ISO-8859-5":
    case "ISO-IR-144":
    case "ISO_8859-5":
    case "CYRILLIC":
    case "CSISOLATINCYRILLIC":
    case "ISO_8859-5:1988":
      script = "ISO-8859-5";
      break;
    case "ISO-8859-6":
    case "ISO-IR-127":
    case "ISO_8859-6":
    case "ECMA-114":
    case "ASMO-708":
    case "ARABIC":
    case "CSISOLATINARABIC":
    case "ISO_8859-6:1987":
      script = "ISO-8859-6";
      break;
    case "ISO-8859-7":
    case "ISO-IR-126":
    case "ISO_8859-7":
    case "ELOT_928":
    case "ECMA-118":
    case "GREEK":
    case "GREEK8":
    case "CSISOLATINGREEK":
    case "ISO_8859-7:1987":
      script = "ISO-8859-7";
      break;
    case "ISO-8859-8":
    case "ISO-IR-138":
    case "ISO_8859-8":
    case "HEBREW":
    case "CSISOLATINHEBREW":
    case "ISO_8859-8:1988":
      script = "ISO-8859-8";
      break;
    case "ISO-8859-9":
    case "ISO-IR-148":
    case "ISO_8859-9":
    case "LATIN5":
    case "L5":
    case "CSISOATIN5":
    case "ISO_8859-9:1989":
      script = "ISO-8859-9";
      break;
    case "ISO-8859-10":
    case "ISO-IR-157":
    case "L6":
    case "ISO_8859-10:1992":
    case "CSISOLATIN6":
    case "LATIN6":
      script = "ISO-8859-10";
      break;
    case "SHIFT_JIS":
    case "MS_KANJI":
    case "CSSHIFTJIS":
    case "WINDOWS-31J":
    case "CSWINDOWS31J":
      script ="Shift_JIS";
      break;
    case "EUC-JP":
    case "CSEUCPKDFMTJAPANESE":
    case "EXTENDED_UNIX_CODE_PACKED_FORMAT_FOR_JAPANESE":
      script = "EUC-JP";
      break;
    case "ISO-2022-KR":
    case "CSISO2022KR":
      script = "ISO-2022-KR";
      break;
    case "EUC-KR":
    case "CSEUCKR":
      script = "EUC-KR";
      break;
    case "ISO-2022-JP":
    case "CSISO2022JP":
      script = "ISO-2022-JP";
      break;
    case "ISO-8859-8-I":
    case "CSISO88598I":
    case "ISO_8859-8-I":
      script = "ISO-8859-8";
      break;
    case "ISO-2022-CN":
      script = "ISO-2022-CN";
      break;
    case "UTF-8":
      script = "UTF-8";
      break;
    case "ISO-8859-13":
      script = "ISO-8859-13";
      break;
    case "ISO-8859-14":
    case "ISO-IR-199":
    case "ISO_8859-14:1998":
    case "ISO_8859-14":
    case "LATIN8":
    case "ISO-CELTIC":
    case "L8":
      script = "ISO-8859-14";
      break;
    case "ISO-8859-15":
    case "ISO_8859-15":
    case "LATIN-9":
      script = "ISO-8859-15";
      break;
    case "ISO-8859-16":
    case "ISO-IR-226":
    case "ISO_8859-16:2001":
    case "ISO_8859-16":
    case "LATIN10":
    case "L10":
      script = "ISO-8859-16";
      break;
    case "GBK":
    case "CP936":
    case "MS936":
    case "WINDOWS-936":
    case "GB2312":
    case "CSGB2312":
      script = "GBK";
      break;
    case "GB18030":
      script = "GB18030";
      break;
    case "UTF-16":
      script = "UTF-16";
      break;
    case "BIG5":
    case "CSBIG5":
      script = "Big5";
      break;
    case "VISCII":
    case "CSVISCII":
      script = "VISCII";
      break;
    case "KOI8-R":
    case "CSKOI8R":
      script = "KOI8-R";
      break;
    case "HZ-GB-2312":
      script = "HZ-GB-2312";
      break;
    case "IBM866":
    case "CP866":
    case "866":
    case "CSIBM866":
      script = "IBM866";
      break;
    case "KOI8-U":
      script = "KOI8-U";
      break;
    case "BIG5-HKSCS":
      script = "Big5-HKSCS";
      break;
    case "WINDOWS-1250":
      script = "windows-1250";
      break;
    case "WINDOWS-1251":
      script = "windows-1251";
      break;
    case "WINDOWS-1252":
      script = "windows-1252";
      break;
    case "WINDOWS-1253":
      script = "windows-1253";
      break;
    case "WINDOWS-1254":
      script = "windows-1254";
      break;
    case "WINDOWS-1255":
      script = "windows-1255";
      break;
    case "WINDOWS-1256":
      script = "windows-1256";
      break;
    case "WINDOWS-1257":
      script = "windows-1257";
      break;
    case "WINDOWS-1258":
      script = "windows-1258";
      break;
    case "WINDOWS-874":
    case "ISO-8859-11":
    case "TIS-620":
      script = "ISO-8859-11";
      break;
    case "VPS":
    case "X-VPS":
      script = "VPS";
      break;
    case "EUC-TW":
      script = "EUC-TW";
      break;
    default:
      script = "unknown";
  }
  return script;
}

function testLegacy()
{
  var pass = 0;
  var total = data.raw.length;
  var result = document.getElementById("score");
  var charset = "";

  if (document.characterSet) 
  {
    charset = getPreferredMimeName(document.characterSet.toUpperCase());
  }
  else
  {
    charset = getPreferredMimeName(document.charset.toUpperCase());
  }

  
  for (var i=0; i< total; i++)
  {
    if (data.raw[i] == data.unicode[i])
    {
      pass += 1;
    }
    else
    {
      // comment out the following if not wish to see any failed characters
      var div = document.createElement("div");
      var detail = data.raw[i] + ' != ' + data.unicode[i] + ' (U+' + data.unicode[i].charCodeAt(0).toString(16) + ')';
      div.appendChild(document.createTextNode(detail));
      document.getElementById("diff").appendChild(div);
    }
    result.setAttribute("class", (pass == total) ? "p" : "f");
    result.childNodes[0].nodeValue = String(pass) + '/' + String(total);
  }

  // The reference pass count is used for verdict for the JS automation framework, 
  // instead of the total character counts. It only picks regression. Any subtle 
  // changes by improvements(?) on one version of conversion table won't be 
  // reported for further analysis.

  try{top.opener.rr(pass >= currentHighScore[charset]);}catch(e){}
}