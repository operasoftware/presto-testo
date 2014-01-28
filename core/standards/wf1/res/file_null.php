<?php

  if(!isset($_FILES['test_file']) || $_FILES['test_file']['name'] == '') {
    echo '<p>PASS</p>';
  } else {
    echo '<p>FAIL</p>';
  }
?>
