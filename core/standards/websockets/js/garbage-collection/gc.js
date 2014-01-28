function gc(successCallback, timeoutCallback) {
  var i = 0;
  var startDate = new Date();
  var interval = setInterval(function() {
    debug(i++);
    var tmp = [];
    for (var j = 0; j < 10000; ++j) {
      tmp.push(new String('abc'));
    }
    if (new Date()-startDate > 1000) {
      clearInterval(interval);
      timeoutCallback();
    }
    if (opera.uncollectedWebSockets() == 0) {
      clearInterval(interval);
      successCallback();
    }
  }, 10);
}
