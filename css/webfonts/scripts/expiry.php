<?php
$text = '';

if ( isset($_GET['control']) ) {
  header("Cache-Control: ".$_GET['control']);

  if ($_GET['control'] == 'no-cache')
    $text = 'The following should alternate a black rect and text &quot;PASS&quot;, and the time-stamp should also update on each visit.';
}

header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GMT");
header("Date: ".gmdate("D, d M Y H:i:s")." GMT");


if ( isset($_GET['expires']) ) {
  if ($_GET['expires'] == 'past')
    header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");
  else {
    header("Expires: ".gmdate("D, d M Y H:i:s", time() + intval($_GET['expires']))." GMT");
    if ( isset($_GET['control']) == false )
      $text = "Revisting this document in less than ".$_GET['expires']." seconds should only alternate a black rect and text &quot;PASS&quot;.";
  }
}



$date = gmdate("D, d M Y H:i:s")." GMT";

$html =<<<HTML
<html>
<head>
  <title>Remote font with expiry</title>
  <style type="text/css">
    @font-face {
      font-family: "TestFont";
      src: url("togglefonts.php?font1=Ahem.woff&font2=VeraBd.woff");
    }
    div { font-family: TestFont; }
  </style>
</head>
<body>
  <p>Click <a href="expiry.php?{$_SERVER['QUERY_STRING']}">here</a> to visit this content again. {$text}</p>
  <div id="result">PASS</div>
  <p>Accessed: {$date} </p>
</body>
</html>
HTML;

header("Content-Length: ".strlen($html) );

print $html;

?>
