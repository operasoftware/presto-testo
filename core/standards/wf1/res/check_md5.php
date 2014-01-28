<?php
  function test() {
    if(isset($_FILES['test_file'], $_FILES['test_file']['tmp_name'], $_POST['md5'])) {
      if($_FILES['test_file']['tmp_name']) {
        if(md5(file_get_contents($_FILES['test_file']['tmp_name'])) == $_POST['md5']) {
          return true;
        }
      }
    }
    
    return false;
  }

  if(test()) {
    echo '<p>PASS</p>';
  } else {
    echo '<p>FAIL</p>';
  }
?>
