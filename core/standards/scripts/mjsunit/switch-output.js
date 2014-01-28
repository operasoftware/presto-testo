function a() {
  var res = 0;
  for (var i = 0; i <= 1000; i++) {
    switch(i) {
    case 0: res += 2; break;
    default: res += 1;
    }
  }
  return res;
}

