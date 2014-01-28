var base_port;

onconnect = function(event) {
  //Compat with implementaions before the spec change to put the port in event.source
  var source = event.source ? event.source : event.ports[0];

  source.onmessage = function(e) {
    if (e.data == "base") {
      base_port = source;
    } else if(e.data == "child") {
      source.postMessage("", [base_port]);      
    }
  }
}