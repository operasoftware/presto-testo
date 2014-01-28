// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){  /** Stringifying a DOM element */
	/*
	* Tests integration of the JSON and DOM implementations
	* What we actually test here will vary across browsers. Some dontEnum most or all properties of the element object.
	*/
	var passed=true;

	if( ! ('document' in this && 'createElement' in this.document && 'Document' in this) ) return 'N/A (test requires document.createElement and the window.Document object)';
	var node= this.document.createElement('div') ;
	var str = JSON.stringify( node, function(name, value){ return (value instanceof Document || value instanceof HTMLCollection || value instanceof NodeList)?undefined:value; } );

	var obj=JSON.parse(
		str
	);

	var result = compareObjects(node, obj, function(node, property){
		if( ! (typeof ( node[property] ) in { 'string':1, 'number':1,  'boolean':1, 'object':1 } ) )return true; // JSON.stringify() only includes strings, numbers, booleans and objects
		if( node[property] instanceof Document ) return true ; // document properties would cause cyclic references, so excluded
		if( node instanceof HTMLCollection || node instanceof NodeList )return true; // lists and collections not included either
		if( ! node.hasOwnProperty( property ) ) return true ; // inherited properties not included in JSON output
//		if( typeof (node[property])==='undefined' ) return true; // mainly to exclude cloaked properties like document.all, which are not serialized (implementation dependant). Obsolete because we now exclude lists and collections
	}, []);

	passed = result[0];
	if(!passed)test.failures=result[1];
	return passed;

	function compareObjects(obj1, obj2, filter, reportIssues){
		var same=true;
		for( var prop in obj1 ){
			if(filter(obj1, prop))continue;
			if( obj1[prop]===null && obj2[prop]===null ){ // no issues to report and no further comparison necessary..

			}else if(  typeof (obj1[prop])=='object' && obj2  ) {
				var tmp = compareObjects( obj1[prop], obj2[prop], filter, reportIssues );
				same=same&&tmp[0];
			}else if ( ! obj2 || ( obj1[prop]!==obj2[prop] ) ){
					same=false;
					reportIssues.push(obj1+' '+prop+' - '+obj1[prop]+' not equal to '+(obj2?obj2[prop]:obj2));
			}
		}
		return [same, reportIssues];
	}
}
