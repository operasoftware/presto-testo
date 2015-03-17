<?php
header('Set-Cookie: 013-1=1; Expires='.gmdate('D, d-M-Y H:i:s', time() + 100000));
header('Set-Cookie: 013-2=1;', false);
header("Location: 013-1.html");
?>