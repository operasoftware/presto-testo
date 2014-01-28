// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){ /**  Handling some escaped quotes */
	/* very simplified test derived from json.org/pass1.json to show Opera bug */
	JSON.parse('{"quotes": "&#34; \\u0022  "}');
	return true;
}
