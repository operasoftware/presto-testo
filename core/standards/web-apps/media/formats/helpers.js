function processPixels(imageData, refImageData, diffImageData, pixelDataTolerance, expectedWidth) {
  var pixelData = imageData.data;
  var refPixelData = refImageData.data;
  var diffPixelData = diffImageData.data;
  var failed = false;
  for (var i = 0; i < pixelData.length; i = i+4) {
    diffPixelData[i] = 128 + ((pixelData[i]-refPixelData[i]) * (64/pixelDataTolerance));
    diffPixelData[i+1] = 128 + ((pixelData[i+1]-refPixelData[i+1]) * (64/pixelDataTolerance));
    diffPixelData[i+2] = 128 + ((pixelData[i+2]-refPixelData[i+2]) * (64/pixelDataTolerance));
    diffPixelData[i+3] = 255;
    if (failed)
      continue;
    if (Math.abs(pixelData[i]-refPixelData[i]) > pixelDataTolerance ||
        Math.abs(pixelData[i+1]-refPixelData[i+1]) > pixelDataTolerance ||
        Math.abs(pixelData[i+2]-refPixelData[i+2]) > pixelDataTolerance) {
      var y = Math.floor((i/4)/expectedWidth);
      var x = (i/4)-(y*expectedWidth);
      log('Pixel at ('+x+','+y+') differed too much (video rgb('+pixelData[i]+','+pixelData[i+1]+','+pixelData[i+2]+'), image rgb('+refPixelData[i]+','+refPixelData[i+1]+','+refPixelData[i+2]+'), tolerance: '+pixelDataTolerance+')');
      failed = true;
    }
  }
  return diffImageData;
}

