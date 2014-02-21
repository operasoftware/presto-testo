<?php

$type = $_GET['type'];
if ($type) {
  header('Content-Type: ' . $type);
  readfile('../../../../../resources/media/misc/bbb_256kbps.ogg');
} else {
  header('Content-Type: text/html; charset=utf-8');
  echo <<<END
<!doctype html>
<title>ogg file with specified MIME type</title>
<form>
<p><label>Specify a MIME type: <input name=type value="video/ogg; codecs=&quot;theora, vorbis&quot;" size="40"></label></p>
<p><input type=submit value="Navigate to the resulting URL"></p>
<p><input type=button value="Try the resulting URL in <video> below" onclick="tryVideo()"></p>
<p><video controls>&lt;video> not supported</video></p>
<p><input type=button value="Try the resulting URL in <audio> below" onclick="tryAudio()"></p>
<p><audio controls>&lt;audio> not supported</audio></p>
<script>
var video = document.getElementsByTagName('video')[0];
var audio = document.getElementsByTagName('audio')[0];
function tryVideo() {
  video.src = '?type=' + encodeURIComponent(document.forms[0].type.value);
  video.load();
}
function tryAudio() {
  audio.src = '?type=' + encodeURIComponent(document.forms[0].type.value);
  audio.load();
}
</script>
</form>
END;

}

?>