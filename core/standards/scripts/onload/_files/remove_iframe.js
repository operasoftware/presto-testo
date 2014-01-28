var t = async_test(undefined, {timeout:4000});
t.step(function() {
    var iframe = document.getElementsByTagName("iframe")[0];
    onload = function() {events.push("load")};
    iframe.parentNode.removeChild(iframe);
    
    events = [];
    
    var img2 = document.createElement("img");
    img2.onerror = function() {events.push("error")};
    img2.src = "#abc"
    document.body.appendChild(img2);
    
    setTimeout(t.step_func(function() {assert_array_equals(events, ["load", "error"]); t.done()}), 3000);
});