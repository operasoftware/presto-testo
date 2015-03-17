<?php
header('Set-Cookie: 312-1=x, 312-2=x;', false);
header('Set-Cookie: 312-3=x; 312-4=x;', false);
header("Location: 312-1.php");
?>
