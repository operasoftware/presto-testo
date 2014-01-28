/** Generates randomised JSON source texts for parsing/serialization testing */
/* arguments:
*	numberOfElements - how many (current-level) members will be in the JSON text
*/
// TODO: cleanup - functions that may cause recursion should all take nestingLevel as argument and pass it appropriately
function createRandomJSONText( numberOfElements, nestingLevel ){
	var maxNestingLevel = 20;
	if( nestingLevel>maxNestingLevel || numberOfElements==0 ) return '{}';
	var jsonText = '{'; jsonArray = [];
	numberOfElements= isNaN(numberOfElements) ? 1024 : numberOfElements;
	nestingLevel=nestingLevel||0;
	while( numberOfElements ){
		jsonArray.push( createJSONNameValueFragment() );
		numberOfElements--;
	}
	jsonText+=jsonArray.join(',\n ')+'}';
	return jsonText;

	function createJSONNameValueFragment(){
		var fragmentStr = randomJSONString()+' : ' + createJSONValue();
		return fragmentStr;
	}
	function createJSONValue(){
		var valueStr='';
		switch(R(9)){ // boolean/null, string, number, object, array
			case 0: // primitive value
			case 1: // primitive value
			case 2: // primitive value
				valueStr += randomJSONPrimitive(); break;
			case 3: // string
			case 4: // string
			case 5: // string
				valueStr += randomJSONString(); break;
			case 6: // number
				valueStr += randomJSONNumber(); break;
			case 7: // array
				nestingLevel++;
				valueStr += randomJSONArray(numberOfElements-1); break;
			case 8: // object
				nestingLevel++;
				valueStr += randomJSONObject(); break;
		}
		return valueStr;
	}



	function randomJSONPrimitive(){
		switch(R(3)){
			case 0:
				return 'true';
			case 1:
				return 'false';
			case 2:
				return 'null';
			case 3:
				return 'undefined';
		}
	}

	function randomJSONNumber(){
		var num = new Number(R(Number.MAX_VALUE));
		switch(R(7)){
			case 0:
				return num.toString(); // NOTE: often returns exponential notation
			case 1:
				return Number(Math.PI).toFixed(5);
			case 2:
				return '-'+num.toString();
			case 3:
				return '-0';
			case 4:
				return num.toExponential();
			case 5:
				return Math.log(num);
			case 6:
				return '-'+Math.log(num);
			case 7:
				return Number(Math.log(num)).toFixed();
		}
	}

	function randomJSONString(){
		var str='"', chr;
		var randomLength = R(50); // Note: arbitrary limit on string length
		while(randomLength){
			switch(R( 4 )){
				case 0: // alphanumerical/punctuation
					chr = String.fromCharCode( R(127, 32) ) ;
					if( chr == '"' || chr=='\\')chr='\\'+chr;
					str+=chr;
					break;
				case 1: // escapes
					str+='\\' + [ '"', '\\', '/', 'b', 'f', 'n', 'r', 't' ][R(8)] ; break;
				case 2: // unicode
					chr = (new Number(R(0xFFFF))).toString(16);
					while( chr.length<4 )chr='0'+chr;
					str += '\\u' + chr; break;
				case 3: // add nothing..
					break;
			}
			randomLength--;
		}
		return str+'"';
	}
	function randomJSONArray(maxSize){
		var ar=[];
		if(nestingLevel&&nestingLevel>maxNestingLevel || maxSize==0 )return '[]';
		var randomLength = R( 50 ); // Note: arbitrary limit on array length
		while(randomLength){
			ar.push(createJSONValue());
			randomLength--;
		}
		return '['+ar.join(', ') + ']';
	}
	function randomJSONObject(){
		return createRandomJSONText(numberOfElements-1, nestingLevel+1);
	}

	function R(mod, min) {
		min=min||0;
		return Math.floor( (Math.random() * (mod-min) ) +min);
	}
}