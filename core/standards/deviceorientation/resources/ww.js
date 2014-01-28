if (typeof DeviceOrientationEvent == "object" && DeviceOrientationEvent.toString() === "[object DeviceOrientationEvent]")
    postMessage({"global_do": true});
else
    postMessage({"global_do": false});

if (typeof DeviceMotionEvent == "object" && DeviceMotionEvent.toString() === "[object DeviceMotionEvent]")
    postMessage({"global_dm": true});
else
    postMessage({"global_dm": false});

