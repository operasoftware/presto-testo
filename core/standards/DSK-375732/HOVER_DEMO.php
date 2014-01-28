<!DOCTYPE html>

<title>DSK-375732 Prefetch dns on link hover</title>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<style>
	img{
		width:16px;
		height:16px;
	}
	
	p{
		margin:2px;
		padding:5px;
		float:left;
	}
	
	#messages{
		position:absolute;
		bottom:10px;
		height:30%;
		overflow:auto;
	}
</style>

<script>
var NETCORE_PATH = 'http://netcore3.oslo.osa/precache/';
var TIMEOUT = '?max_time=5';
var ASYNC_XHR = false;
var startTimestamp = new Date().getTime();

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
		dsc.appendChild(document.createTextNode(details));
		line.appendChild(dsc);
		msgs.appendChild(line);
	}else
		msgs.appendChild(line);
	msgs.scrollTop = msgs.scrollHeight;
}



function xhr_request(param){
	if(!param) param = '';
	try{
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
				if (xhr.readyState == 4){
					if (xhr.status == 200){
						var res = xhr.responseText;
						msg('xhr response: ' + res);
						markButtons(eval(res));
					}
					else
						msg('!ERROR- xhr status: ' + xhr.status + ': ' + xhr.statusText,'msg_error',path);
				}
			}
		xhr.open('POST', NETCORE_PATH + TIMEOUT + param, ASYNC_XHR);
		xhr.send();
	}
	catch(e){
		msg('xhr error!' , 'error', 'Exception: ' + e);
	}
}

function getUniqueId(){
	return Math.round(Math.random() * 1000000);
}

function markButtons(ar){
	console.log(ar);
	for(var i = 0; i < ar.length; i++){
		if(ar[i].value){
			if(document.getElementById(ar[i].value)){
				setGreenBg(document.getElementById(ar[i].value),ar[i].value,(ar[i].time_diff*1));
			}
		}
	}
}

var checkPrefetch;
function check(){
	clearTimeout(checkPrefetch);
	checkPrefetch = setTimeout(function(){ xhr_request(); },200);
}

function setGreenBg(element,id,value){
	if(value == 0)
		element.style.background = 'rgb(100,255,120)';
	if(value == 1)
		element.style.background = 'rgb(125,255,150)';
	if(value == 2)                    
		element.style.background = 'rgb(150,255,180)';
	if(value == 3)                     
		element.style.background = 'rgb(180,255,210)';
	if(value == 4)                    
		element.style.background = 'rgb(190,255,230)';
	clearTimeout(timeoutIds[id]);
	if (value > 4)
		element.style.background = 'rgb(200,255,255)';
	else
		timeoutIds[id] = setTimeout(function(){ setGreenBg(element, id, value + 1); }, 500);
}

var timeoutIds = {};

function createButton(){
	var testarea = document.getElementById('testarea');
	var line = document.createElement('p');
	var uniqueAddress = 'test' + getUniqueId() + '.prefetch.osa';
	var button = document.createElement('a');
	line.setAttribute('id',uniqueAddress);
	button.appendChild(document.createTextNode('hover Me'));
	button.setAttribute('href','http://' + uniqueAddress + '/');
	button.setAttribute('onmouseover','check();');
	//button.setAttribute('onclick','return false;');
	line.appendChild(button);
	testarea.appendChild(line);
}

</script>
<body>
<div id="testarea">
<?php 
	if(isset($_GET['elements']))
		$elements = $_GET['elements'];
	else
		$elements = 80;

	for ($i = 0; $i < $elements; $i++){
		$address = 'test'.rand(0,1000000).'.prefetch.osa';
		echo '<p id="'.$address.'"><a href="http://'.$address.'/" onmouseover="check();">hover Me</a></p>';
		if(($i % 20) == 0)
			echo '<script>setTimeout(function(){ check(); }, '.(ceil($i/20)*2000).');</script>';
	}
?>
</div>
<div id="messages"></div>
</body>
