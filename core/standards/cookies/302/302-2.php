<?php include '302-8.php'; ?>
<!doctype html>
<html>
 <head>
  <title>Various Paths</title>
  <link href="<?php echo $path ?>/302/302.css" rel="stylesheet" type="text/css"/>
 </head>
 <body>
  <p>&nbsp;</p>
  <table>
   <tr><th>ID</th><th>Path</th></tr>
   <?php
foreach ($cookies as $cookie => $data) {
 echo "<tr><td>$cookie</td><td>";
 if (strlen($data) < 50)
  echo $data;
 else
  echo "[".strlen($data)." bytes of data]";
 echo "</td></tr>\n";
} ?>  </table>
 </body>
</html>