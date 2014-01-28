
/* quickFind hack for IE */
if( (! ('addEventListener' in document ) ) && 'attachEvent' in document )document.addEventListener=function(){arguments[0]='onload';this.attachEvent.apply(this,arguments);}

if('addEventListener' in document ) document.addEventListener('DOMContentLoaded', function(){
	var qfi=document.body.insertBefore(document.createElement('input'), document.body.firstChild ), to;
	qfi.id='qfi';
	qfi.onkeyup=function(){ clearTimeout(to); to=setTimeout( quickFind, 100); };
	qfi.style.position='fixed'; qfi.style.top='0'; qfi.style.right='0';
	qfi.placeholder='Quick find';
	qfi.value=qfi.placeholder;
	qfi.style.color='#ccc';
	qfi.onfocus=function(){ if(qfi.value==qfi.placeholder)qfi.value=''; qfi.style.color='#000'; }
	qfi.onblur=function(){ if(qfi.value=='')qfi.value=qfi.placeholder; qfi.style.color='#ccc'; }
	function quickFind(){
		var trs=document.getElementsByTagName('tr');
		for(var i=0, tr;tr=trs[i];i++){
			if(qfi.value==''){
				tr.style.display='';
			}else{
				tr.style.display = ( tr.textContent.indexOf(qfi.value)>-1 ) ? '' : 'none';
			}
		}
	}

}, false)
