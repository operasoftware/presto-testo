function spartan_report(results)
{
  // For keeping track of test names as there can be duplicated names.
  var names = {}, passed, title;

  // Add form and iframe that will be used for reporting.
  addForm();

  for (var i = 0; i < results.length; i++ )
  {
    passed = results[i][0] == 'PASS';
    title = results[i][1];

    // Generate new name if there is test with identical name already.
    if (names[title])
      title = generateNewName(names, title);

    names[title] = true;

    addResult(title, passed);
  }

  submitResults();
}

function generateNewName(names, title)
{
  var new_title = title, nr = 1;

  while(names[new_title])
    new_title =  title + '_' + nr++;

  return new_title;
}

function addForm()
{
  var form = document.createElement('form');
  form.setAttribute('id', 'spartan_results');
  form.setAttribute('action', 'http://localhost');
  form.setAttribute('method', 'post');
  form.setAttribute('target', 'results_frame');

  document.body.appendChild(form);

  var iframe = document.createElement('iframe');
  iframe.setAttribute('name', 'results_frame');
  iframe.setAttribute('src', 'about:blank');

  document.body.appendChild(iframe);
}

function addResult(name, passed)
{
  var inp = document.createElement('input');
  inp.setAttribute('type', 'hidden');
  inp.setAttribute('name', 'jstests[]');
  inp.setAttribute('value', name + '\t' + (passed ? 'PASSED' : 'FAILED'));

  document.getElementById('spartan_results').appendChild(inp);
}

function submitResults()
{
  document.getElementById('spartan_results').submit();
}