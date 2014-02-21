var log = postMessage;
importScripts('helpers.js');
onmessage = function(e) {
  var result = processPixels(e.data[0], e.data[1], e.data[2], e.data[3], e.data[4]);
  postMessage(result);
}
