* Need more dynamic testcases
* Also, see below:

Look into http://whatwg.org/specs/web-forms/current-work/#selectSeeding

How does:

 var select = document.createElementNS('http://www.w3.org/1999/xhtml', 'select');
 select.data = 'data:application/xml,%3Cselect%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20type%3D%22incremental%22%3E%3Coption%3Eb%3C%2Foption%3E%3C%2Fselect%3E';
 // at this point, select.length == 0 is guaranteed
 var option = document.createElementNS('http://www.w3.org/1999/xhtml', 'option');
 option.appendChild(document.createTextNode('a'));
 select.appendChild(option);
 // at this point, select.length == 1 is guaranteed
 document.documentElement.appendChild(select);
 
Result in "a", "b", "b". Is that a combination of the first and last paragraph
of that section?