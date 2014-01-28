<?php
  function check_files() {
    if(isset($_POST["test"]) && md5($_POST["test"]) == $_POST["md5_test"]) {
      return true;
    } else {
      return false;
    }
  }

  if(check_files()) {
    echo '<p>Result: PASS</p>';
  } else {
    echo '<p>Result: FAIL</p>';
  }
?>
