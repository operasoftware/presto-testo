var startTimestamp = new Date().getTime();

var qunit = true;

//variable to save how many tests are in one set.
var testsInOneSet = 0;


var SPARTAN_TEST_PREFIX = 'Service Discovery API: ';

function msg(text,className, details){
	var msgs = document.getElementById('messages');
	var line = document.createElement('p');
	line.appendChild(document.createTextNode('[' + Math.round((new Date().getTime() - startTimestamp)/100)/10 + ']  ' + text));
	if(className){
		if(details)
			line.className = className + ' dsc_open';

		else
			line.className = className;
	}
	if(details){
		line.onclick = function() {
			if(this.children[0].style.display != 'none')
				this.children[0].style.display = 'none';
			else
				this.children[0].style.display = 'block';
		}
		var dsc = document.createElement('div');
		dsc.className = 'dsc';
		dsc.style.display = 'none';
		while(details.length > 0){
			var i = details.indexOf('>')+1;
			if(i == 0) i = details.length;
			dsc.appendChild(document.createTextNode(details.substr(0,i)));
			dsc.appendChild(document.createElement('br'));
			details = details.substr(i);
		}
		line.appendChild(dsc);
		msgs.appendChild(line);
	}else
		msgs.appendChild(line);
}

//read "get" parameter from URL
function get(name){
	var get_object = {};
	//                            substr(1) - to erase "?"
	var results = location.search.substr(1).split("&");

	for(var i = 0; i < results.length; i++){
		var tmp = results[i].split('=');
		//if array - array[]=1&array[]=2
		if(tmp[0].indexOf('[]') != -1){
			//remove last 2 sings - "[]"
			var name = tmp[0].substr(0,tmp[0].length - 2);
			if(typeof(get_object[name]) == 'undefined')
				get_object[name] = [tmp[1]];
			else
				get_object[name][get_object[name].length] = tmp[1];
		}
		else
			get_object[tmp[0]] = tmp[1];
		}
	if(get_object[name])
		return get_object[name];
	else
		return '';
  }


function finishTest(result, id){
	if(testsets[id]){
		ok(result, testsets[id]);
		testsets[id] = false;
		testsInOneSet --;

		if(testsInOneSet == 0)
			start();
		//scrolling msg:
		msg(id + ' test result: ' + (result?'PASS':'FAIL'),'test_result');
		document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
		return true;
	}
	else
		return false;
}

var testsets = {};

function addTest(description,id, timeout,timeout_function){
	testsets[id] = description;
	testsInOneSet++;
	if(timeout){
		setTimeout(function(){
			if(timeout_function)
			{
				if(testsets[id]){
					finishTest(timeout_function(),id);
				}
			}
			else
			{
				if(testsets[id]){
					testsets[id] = '[TIMEOUT] ' + testsets[id];
					if(finishTest(false,id))  msg('test: "' + id + '" has fail with timeout after : ' + timeout, 'msg_info');
				}
			}
		},timeout);
	}
}