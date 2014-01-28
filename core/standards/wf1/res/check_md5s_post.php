<?php
  function check_files() {
    foreach($_POST as $key => $value) {
      if(strncmp($key, "md5_", 4) == 0) {
        $field_name = substr($key, 4);

        if(isset($_POST[$field_name]) && md5($_POST[$field_name]) == $value) {
          return true;
        } else {
          return false;
        }
      }
    }
    
    return true;
  }

  if(check_files()) {
    echo '<p>PASS</p>';
  } else {
    echo '<p>FAIL</p>';
  }
?>
