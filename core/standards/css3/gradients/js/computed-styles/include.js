var test_arr = [
    ['linear-gradient(green, green)', 'linear-gradient($color, $color)']
    ,['linear-gradient(green, transparent, green)', 'linear-gradient($color, transparent, $color)']
    ,['linear-gradient(green 0, green)', 'linear-gradient($color 0px, $color)']
    ,['linear-gradient(#aaa 10%, #0000aa 20%, rgb(0,255,0) 30%, rgba(0, 255, 0, .4) 40%)', 'linear-gradient($color 10%, $color 20%, $color 30%, $color 40%)']
    ,['linear-gradient(rgb(0,255,0) -10px, #0000aa)', 'linear-gradient($color -10px, $color)']
    ,['linear-gradient(rgba(0, 255, 0, .4) 150%, rgba(0, 155, 0, 0.9))', 'linear-gradient($color 150%, $color)']

  // With starting-point...
    ,['linear-gradient(top, green, green)', 'none']
    ,['linear-gradient(top, green,green)', 'none']
    ,['linear-gradient(top right, green, green)', 'none']
    ,['linear-gradient(to right top, green, green)', 'linear-gradient(to right top, $color, $color)']
    ,['linear-gradient(to left, green, green)', 'linear-gradient(to left, $color, $color)']

    /* Serialize "in the order its grammar is written in" */
    ,['linear-gradient(to top right, green, green)', 'linear-gradient(to right top, $color, $color)']

  // Multiple...
    ,['linear-gradient(green, green), linear-gradient(green, green)', 'linear-gradient($color, $color), linear-gradient($color, $color)']
    ,['linear-gradient(green, green), repeating-linear-gradient(green, green)', 'linear-gradient($color, $color), repeating-linear-gradient($color, $color)']

  // Repeating
    ,['repeating-linear-gradient(red, green 0)', 'repeating-linear-gradient($color, $color 0px)']
    ,['repeating-linear-gradient(lime, green 25%)', 'repeating-linear-gradient($color, $color 25%)']
    ,['repeating-linear-gradient(lime, blue 25%, green 25%)', 'repeating-linear-gradient($color, $color 25%, $color 25%)']
    ,['repeating-linear-gradient(lime 0, green 30px)', 'repeating-linear-gradient($color 0px, $color 30px)']
    ,['repeating-linear-gradient(lime -30%, green 30%)', 'repeating-linear-gradient($color -30%, $color 30%)']
    ,['repeating-linear-gradient(left, lime, blue 25%)', 'none']
    ,['repeating-linear-gradient(top left, lime 0, green 30px)', 'none']
    ,['repeating-linear-gradient(left top, lime 0, green 30px)', 'none']
    ,['repeating-linear-gradient(to top left, lime 0, green 30px)', 'repeating-linear-gradient(to left top, $color 0px, $color 30px)']
    ,['repeating-linear-gradient(to bottom, lime 0, green 30px)', 'repeating-linear-gradient(to bottom, $color 0px, $color 30px)']
    ,['repeating-linear-gradient(to right top, lime 0, green 30px)', 'repeating-linear-gradient(to right top, $color 0px, $color 30px)']

  // Angle
    ,['linear-gradient(0, lime, green)', 'none']
    ,['linear-gradient(10deg, lime, green)', 'linear-gradient(10deg, $color, $color)']
    ,['linear-gradient(410deg, lime, green)', 'linear-gradient(410deg, $color, $color)']
    ,['linear-gradient(100grad, lime, green)', 'linear-gradient(90deg, $color, $color)']
    ,['linear-gradient(0.25turn, lime, green)', 'linear-gradient(90deg, $color, $color)']
    ,['linear-gradient(' + Math.PI / 2 + 'rad, lime, green)', 'linear-gradient(90deg, $color, $color)']

  // Invalid...
    ,['linear-gradient(top)', 'none']
    ,['linear-gradient(red)', 'none']
    /* T-356 - not invalid as parser closes parenthesis. */
    ,['linear-gradient(red, red', 'linear-gradient($color, $color)']
    ,['linear-gradient(center, red, red)', 'none']
    ,['linear-gradient(top bottom, red, red)', 'none']
    ,['linear-gradient(red, 10px)', 'none']
    ,['linear-gradient(red, 0)', 'none']

    // Mixing position and angle
    ,['linear-gradient(40deg top, red, red)', 'none']
    ,['linear-gradient(top 40deg, red, red)', 'none']
    ,['linear-gradient(top right 40deg, red, red)', 'none']
    ,['linear-gradient(top right 1rad, red, red)', 'none']

  // Radial
    // simple
    ,['radial-gradient(green, green)', 'radial-gradient($color, $color)']
    // position keyword
    ,['radial-gradient(right, green, green)', 'none']
    ,['radial-gradient(at right, green, green)', 'radial-gradient(at 100% 50%, $color, $color)']
    // horizontal position
    ,['radial-gradient(10%, green, green)', 'none']
    ,['radial-gradient(at 10%, green, green)', 'radial-gradient(at 10% 50%, $color, $color)']
    // horizontal and vertical position
    ,['radial-gradient(10% 20%, green, green)', 'none']
    ,['radial-gradient(at 10% 20%, green, green)', 'radial-gradient(at 10% 20%, $color, $color)']
    // shape
    ,['radial-gradient(circle, green, green)', 'radial-gradient(circle, $color, $color)']
    // size
    ,['radial-gradient(closest-side, green, green)', 'radial-gradient(closest-side, $color, $color)']
    // shape and size
    ,['radial-gradient(circle closest-side, green, green)', 'radial-gradient(circle closest-side, $color, $color)']
    // position and shape
    ,['radial-gradient(10px, ellipse, green, green)', 'none']
    ,['radial-gradient(ellipse at 10px, green, green)', 'radial-gradient(ellipse at 10px 50%, $color, $color)']
    // position and size
    ,['radial-gradient(10px, farthest-side, green, green)', 'none']
    ,['radial-gradient(farthest-side at 10px, green, green)', 'radial-gradient(farthest-side at 10px 50%, $color, $color)']
    // position and shape/size specified explicitly
    ,['radial-gradient(10px 20px, 30px 40px, green, green)', 'none']
    ,['radial-gradient(30px 40px at 10px 20px, green, green)', 'radial-gradient(30px 40px at 10px 20px, $color, $color)']
    // all specified
    ,['radial-gradient(left top, circle cover, green, green)', 'none']
    ,['radial-gradient(circle cover at left top, green, green)', 'none']
    ,['radial-gradient(circle farthest-corner at left top, green, green)', 'radial-gradient(circle at 0% 0%, $color, $color)']

  // Repeating radial
    ,['repeating-radial-gradient(green, green)', 'repeating-radial-gradient($color, $color)']
    ,['repeating-radial-gradient(green -10%, green 10%)', 'repeating-radial-gradient($color -10%, $color 10%)']
    ,['repeating-radial-gradient(green 50%, green 40%)', 'repeating-radial-gradient($color 50%, $color 40%)']

  // Invalid
    ,['radial-gradient(red)', 'none']
    ,['radial-gradient(top)', 'none']
    ,['radial-gradient(top, red)', 'none']
    ,['radial-gradient(top center, red)', 'none']
    ,['radial-gradient(left right, red)', 'none']
    ,['radial-gradient(omnom, red)', 'none']
    ,['radial-gradient(left, omnom, red)', 'none']
    ,['radial-gradient(red, red),', 'none']
];

var gradient_elm;

window.addEventListener('load', function()
{
  gradient_elm = document.getElementById('g');
  var computed = window.getComputedStyle(gradient_elm, null);
  var i = 0;

  // Match colors in formats: hex, rgb(a), color keyword (not checked if valid keyword).
  var reColor = '([a-z]+|#[a-f0-9]{6}|rgba?\\([^\\)]+\\))';

  for (var test; test = test_arr[i]; i++)
  {
    // Test is an array.
    // test[0] = rule to test
    // test[1] = expected computed value (needs to be preprocessed)

    // Create final regexp that we will be matched against.
    var reRule = new RegExp('^' + test[1].replace(/([\(\)\.])/g, '\\$1').replace(/\$color/g, reColor) + '$');

    // Apply rule.
    gradient_elm.style[g_property_set] = 'none';
    gradient_elm.style[g_property_set] = test[0];

    // Get computed value.
    var value = computed[g_property_get];

    var passed = testRule(test[0], reRule, value, test[1]);

    addResult(test[0], passed);
  }

  // Submit form to Spartan.
  document.getElementById('results').submit();
}, false);

function testRule(tested, reRule, got, expected)
{
  var el = document.createElement('li');
  var condition = got.match(reRule);

  el.textContent = '    TEST : ' + tested;
  el.textContent += '\nEXPECTED : ' + expected + '\n';
  if (!condition)
    el.textContent += '     GOT : ' + got + '\n'

  el.style.color = condition ? '#0a0' : '#a00';

  document.getElementById('log').appendChild(el);
  document.getElementById('log').appendChild(document.createElement('hr'));

  return condition;
}

function addResult(name, passed)
{
  var inp = document.createElement('input');
  inp.setAttribute('type', 'hidden');
  inp.setAttribute('name', 'jstests[]');
  inp.setAttribute('value', name + '\t' + (passed ? 'PASSED' : 'FAILED'));

  document.getElementById('results').appendChild(inp);
}
