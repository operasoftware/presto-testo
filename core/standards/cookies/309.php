<?php
header('Set-Cookie: 309-01=""";', false);
header('Set-Cookie: 309-02="\'";', false);
header('Set-Cookie: 309-03="\'"\'";', false);
header('Set-Cookie: 309-04="/"";', false);
header('Set-Cookie: 309-05="\"";', false);
header("Set-Cookie: 309-06='x;", false);
header("Set-Cookie: 309-07=''';", false);
header("Set-Cookie: 309-08='\"';", false);
header('Set-Cookie: 309-09="xx"xx";', false);
header('Set-Cookie: 309-10="xx"xx"xx";', false);
header('Set-Cookie: 309-11=xx"xx"xx";', false);
header('Set-Cookie: 309-12="xx"xx;', false);
header('Set-Cookie: 309-13=\";', false);
header('Set-Cookie: 309-14=xx xx;', false);
header('Set-Cookie: 309-15=xx xx', false);
header('Set-Cookie: 309-16=xx;', false);
header('Set-Cookie: 309-17=",;";', false);
header('Set-Cookie: 309-18=,;;', false);
header('Set-Cookie: 309-19=x,x;', false);
header("Location: 309-1.php");
?>