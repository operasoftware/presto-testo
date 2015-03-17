<?php
header('Set-Cookie2: 309-20-1=x; Version=1, 309-20-2=x; Version=1', false);
header('Set-Cookie2: 309-21-1=x; Version=1, 309-21-2=x,309-21-3; Version=1', false);
header('Set-Cookie2: 309-22-1=x,309-22-2=x; Version=1, 309-22-3=x; Version=1', false);
header("Location: 309b-1.php");
?>