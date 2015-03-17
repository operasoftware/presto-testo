<?php
header('Set-Cookie: 014-01='.$_COOKIE['014-01'].'; Path=/', false);
header('Set-Cookie: 014-20=1; Path=/', false);
header("Location: 014/014-2.php");
?>