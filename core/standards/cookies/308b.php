<?php
header('Set-Cookie2: 308-05=1; Version=1, 308-06=1; Version=1, 308-07=1, Version=1', false);
header('Set-Cookie2: 308-08=1; Version=1; Max-Age="-1"; Max-Age="1"', false);
header('Set-Cookie2: 308-09=1; Version=1; Max-Age="1"; Max-Age="-1"', false);
header('Set-Cookie2: 308-14=1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;', false);
header('Set-Cookie2: 308-15=1, Version=1, Max-Age=1, Path=/, Domain=opera.com,', false);
header('Set-Cookie2: 308-16=1; Version=1; Max-Age="x"; Max-Age="1"', false);
header('Set-Cookie2: 308-17=1; Comment="," Version=1;', false);
header('Set-Cookie2: 308-20=1; Version=1; x', false);
header('Set-Cookie2: 308-22=1; Version=1; Domein="blah"; Pith="yada"; HttpOunly; Non-Secure', false);
header('Set-Cookie2: 308-25=1; Comment=","; Version=1;', false);
header("Location: 308b-1.php");
?>