//settings
var NETCORE_PATH = 'http://netcore3.oslo.osa/precache/';
var TIMEOUT = '?max_time=10';
var ASYNC_XHR = false;
var startTimestamp = new Date().getTime();

function msg(text){
	var msgs = document.getElementById('messages');
	//if msg is started before DIV is loaded
	if(!msgs){
		var prev = window.onload;
		window.onload = function(){
			msg(text);
			if(prev)
				prev();
		};		
		return;
	}
	var line = document.createElement('p');
	line.appendChild(document.createTextNode('[' + Math.round((new Date().getTime() - startTimestamp)/100)/10 + ']  ' + text));
	msgs.appendChild(line);
	msgs.scrollTop = msgs.scrollHeight;
}

function get_dns_requests(action,param){
	if(!param) param = '';
	try{
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
				if (xhr.readyState == 4){
					if (xhr.status == 200){
						var res = xhr.responseText;
						msg('xhr response: ' + res);
						if(!action)
							markButtons(eval(res));
						else
							action(eval(res));
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

function check_dns(ar, target, time){
	if(!time){
		time = 700;
		if(ar.length > 5)
			time = (ar.length * 100) + 500;
	}
	var check_array = {};
	for (var i = 0; i < ar.length; i++){
		check_array[ar[i]] = true;
	}
	if(typeof(target) == 'undefined')
		target = Object.keys(check_array).length;
	var should = target;
	msg('please wait '  + time + '[ms] for results (expecting: ' + should + ' DNS requests)');
	setTimeout(function(){
		console.log(check_array);
		get_dns_requests(function(dns_ar){
		console.log(dns_ar);
			for(var i = 0; i < dns_ar.length; i++){
				if(check_array[dns_ar[i].value]){
					target --;
					check_array[dns_ar[i].value] = false;
				}
			}
			if(target == 0)
				var pass = true;			
			else
				var pass = false;
			show_result(pass,'fail : (should be: ' + should + ' DNS requests, there was: '+ (should - target) + ') Difference [' + target + '] ');
			
		});
	},time);
}

function show_result(pass,fail_msg){
	if(pass){
		document.body.style.background = "lime";
		msg('PASS');
	}else{
		document.body.style.background = "rgb(255,100,100)";
		msg(fail_msg);
	}
	try{top.opener.rr(pass);}catch(e){}
}

function setProtocol(https){
	var url = window.location.href;
	var sub = url.split("//");
	if(https){
		if(sub[0] != 'https:')
			window.location.href = 'https://' + sub[1];
	}else{
		if(sub[0] != 'http:')
			window.location.href = 'http://' + sub[1];
	}
}

function createButton(ar, el_type){
	if(!el_type) 
		el_type = 'a';
	var button,testarea = document.body;
	for (var i = 0; i < ar.length; i++){
		button = document.createElement(el_type);
		button.setAttribute('href','http://' + ar[i] + '/');
		if(el_type == 'a'){
			button.appendChild(document.createTextNode('test link'));
			button.setAttribute('onmouseover','check();');
			button.setAttribute('onclick','return false;');
		}else
		if(el_type == 'link')
			button.setAttribute('rel','dns-prefetch');
		testarea.appendChild(button);
	}
}