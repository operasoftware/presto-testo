<?php
  function check_files() {
    foreach($_POST as $key => $value) {
      if(strncmp($key, "md5_", 4) == 0) {
        $field_name = substr($key, 4);
        
        if(!isset($_FILES[$field_name])) return false;
        if(!isset($_FILES[$field_name]["tmp_name"])) return false;
        if($_FILES[$field_name]["tmp_name"] == "") return false;
        
        $md5_real = md5(file_get_contents($_FILES[$field_name]["tmp_name"]));
        $md5_ref = $value;
        
        if($md5_real != $md5_ref) return false;
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
