// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /**  JSON.stringify() and character escaping */
	var passed;
	var obj = {  'quote': '"', 'singlequote': '\'',
		backslash: '\\',
		backspace:'\b',
		formfeed:'\f',
		nl: '\n',
		cr: '\r',
		tab: '\t',
		random_control_char: String.fromCharCode(5)
	};
	var str = JSON.stringify(
		obj
	);
	passed = ( str.match( /"quote"\s*:\s*"\\""/ )  &&
		str.match( /"singlequote"\s*:\s*"'"/ ) /*JSON does not escape single quotes*/  &&
		str.match( /"backslash"\s*:\s*"\\\\"/ )  &&
		str.match( /"backspace"\s*:\s*"\\b"/ )  &&
		str.match( /"formfeed"\s*:\s*"\\f"/ )  &&
		str.match( /"nl"\s*:\s*"\\n"/ )  &&
		str.match( /"cr"\s*:\s*"\\r"/ )  &&
		str.match( /"tab"\s*:\s*"\\t"/ ) &&
		str.match( /"random_control_char"\s*:\s*"\\u0005"/ ) ) ? true : false ;

	return passed ;
}
