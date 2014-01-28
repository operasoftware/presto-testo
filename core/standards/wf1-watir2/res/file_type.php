<?php
  if(isset($_FILES['test_file'], $_FILES['test_file']['type'])) {
    echo '<p>file type : [' . $_FILES['test_file']['type'] . ']</p>';
  } else {
    echo '<p>FAIL</p>';
  }
?>
