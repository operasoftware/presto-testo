function extract_query() {
  var query = {};
  var query_components = window.location.search.slice(1).split("&");
  for (var i=0; i < query_components.length; i++) {
    var components = query_components[i].split("=");
    query[decodeURIComponent(components[0])] = decodeURIComponent(components[1]);
  }
  return query;
}

function run_test() {
  var query = extract_query();

  if ('testfunc' in query) {
    var function_name = query['testfunc'];
  } else {
    return;
  }

  var passed = null;
  var exception = null;
  var f = new Function(function_name + "()");

  try {
    f();
    passed = true;
  } catch (e) {
    passed = false;
    exception = e;
  }

  var message = exception?exception.message:"";
  try {
    top.opener.rr(passed, message);
  } catch(e) {
    //pass
  }
  document.body.textContent = passed?"PASS":"FAIL";
}
log = top.log;
window.addEventListener("load", function() {run_test();}, true);