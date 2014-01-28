<?php
  if(isset($_FILES['test_file'], $_FILES['test_file']['name'])) {
    echo '<p>file name : [' . $_FILES['test_file']['name'] . ']</p>';
  } else {
    echo '<p>FAIL</p>';
  }
?>
