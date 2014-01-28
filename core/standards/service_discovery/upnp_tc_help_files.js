// filename: upnp_tc_help_files.js
// author: Piotr Musiol - pmusiol@opera.com
// description:
// 	  set of functions specific for UPNP tests.
//    To be able to run more than one test per Opera Instance, each test operates on unique ids, which is both send and broadcasting and which is filtered while searching. That allows us to run many tests parallelly, not only within one browser instance but also with many gogi builds tested in the same network. That's why most of the functions require "ID" parameter.


// testInvalidDescription
//     performs tests with wrong description xml.
// params:
//   - settings (REQUIRED) : as it was mentioned on createDescription "settings" parameter description, this will modify xml file
//   - expected_value (REQUIRED) : how many devices should be found after such destroyed description
//   - testdsc : test description for visual explanation
//

function testInvalidDescription(settings, expected_value, testdsc){
	var modulators = '(expected : ' + expected_value + ')';
	var id = getId();
	if(settings){
			if(settings.remove){
				modulators += ' REMOVE: ';
				for(var i = 0; i < settings.remove.length; i++)
					modulators += settings.remove[i] + ', ';
			}
			if(settings.spoil){
				modulators += ' SPOIL: ';
				for(var i = 0; i < settings.spoil.length; i++)
					modulators += settings.spoil[i] + ', ';
			}
			if(settings.spareFields){
				modulators += ' SPARE FIELDS: ';
				for(var i = 0; i < settings.spareFields.length; i++){
					modulators += '(in: ' + settings.spareFields[i].inside + ') <' + settings.spareFields[i].field + '>' + settings.spareFields[i].value + '</' + settings.spareFields[i].field + '>, ';
				}
			}
		}

	asyncTest( 'corrupted description xml: ' + modulators, function(){
		var description = createDescription(id, settings);
		if(!testdsc)
			testdsc = 'invalid description :' + modulators;
		else
			testdsc = 'invalid description : ' + testdsc + modulators;

		addTest(testdsc,'invalid_description_' + id,DISCOVERY_TIME + 1000);
		discoverServices(id, function(service_list){
				finishTest((service_list.length == expected_value),'invalid_description_'+ id);
		});
		sendMockData('set_description',{'description' : description,'id': id});
		controlDevice('alive',id,true);
	});
}

// testAnotherServiceAfterDiscovery
//     performs tests which simulates situation, when one device answer to search message with one set of services, and then after a moment send alive messages with different services.
// params:
//   - id : as it was mentioned on createDescription "settings" parameter description, this will modify xml file
//   - description : description of test
//   - start_services : list of services at the begining of discovery process
//   - later_services : list of services presented after a discovery process
//   - expected_number_1 : how many services should be found after "alive" message of 'start_services'
//   - expected_number_2 : how many services should be found after "alive" message of 'later_services'
//   - expected_change : array of expected values, in booleans
//

function testAnotherServiceAfterDiscovery(id, description, start_services, later_services, expected_number_1, expected_number_2, expected_change){

	addTest(description + ' : BEFORE (expected '+ expected_number_1 + ')','another_service_a_#'+id, DISCOVERY_TIME + 1000);
	addTest(description + ' : AFTER (expected '+ expected_number_2 + ')','another_service_b_#'+id, (DISCOVERY_TIME * 2)+DESCRIPTION_REFETCH_DELAY + 1500);
	var current_state = [];
	if(expected_change)
	{
		for(var i = 0; i < expected_change.length; i++){
			current_state[i] = false;
			var position = i;
			addTest(description + ' : AVAILABLE['+i+'] (expected value: '+ (expected_change[i]?'available':'not available') + ')','another_service_c_#'+id+'_'+i,5000+DESCRIPTION_REFETCH_DELAY,function(){
				return expected_change[position] === current_state[position];
			});
		}
	}
	discoverServices(id,function(service_list){
		for(var i = 0; i < service_list.length; i++){
			current_state[i] = true;
		}
		if(service_list.length == expected_number_1){
			finishTest(true, 'another_service_a_#'+id);
			setTimeout(function(){
				controlDevice('alive',id,false,later_services);
			},DESCRIPTION_REFETCH_DELAY);
		}
		else{
			finishTest(false,'another_service_a_#'+id);
		}
	},function(state,service,i){
		current_state[i] = state;
	},function(services){
		if(services.servicesAvailable == expected_number_2)
			finishTest(true, 'another_service_b_#'+id);
		else
			finishTest(false,'another_service_b_#'+id);
	},start_services);
	controlDevice('alive',id,false,start_services);
}

function compareServiceDiscovery(i,param,val1,val2){
	var max_length = 40;
	if(!val1) val1 = '';
		addTest('service['+i+'].'+ param +':    '+ ((val1.length > max_length)?(val1.substr(0,max_length) + '...'):(val1)) + ' ? ' + ((val2.length > max_length)?(val2.substr(0,max_length) + '...'):(val2)),'service_discovery'+i+'_'+param+'#');

	if(val1 != val2)
		finishTest(false,'service_discovery'+i+'_'+param+'#');
	else
		finishTest(true,'service_discovery'+i+'_'+param+'#');

}


function testXhr(url,callback){
	try{
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
				if (xhr.readyState == 4){
					if (xhr.status == 200){
						msg('status 200: connection was possible');
						if(callback)
							callback(true,xhr.responseText);
					}
					else{
						msg('!ERROR- xhr status: ' + xhr.status + ': ' + xhr.statusText);
						if(callback)
							callback(false);
					}
				}
			}
		xhr.open('GET', url, true);
		xhr.setRequestHeader('Content-Type', 'text/plain; charset="utf-8"');
		xhr.send();
	}
	catch(e){
		msg('Exception: ' + e);
		if(reaction)
			reaction(false);
	}
}


function ssdpMessageTest(desc1, desc2, expected, ssdp, params){
	asyncTest(desc1, function(){
		id = getId();
		addTest(desc2,'ssdp_#'+id,DISCOVERY_TIME + 1000);
		discoverServices(id,function(service_list){
				if(service_list.length == expected)
						finishTest(true, 'ssdp_#'+id);
					else
						finishTest(false, 'ssdp_#'+id);
			});
		var service_list = getServiceList(id);
		sendMockData('set_description',{'description' : createDescription(id,false,service_list),'id': id});
		broadcastNotifyMsg(id,ssdp,service_list[0].serviceTypeWithDomain,params);
	});

}

function testDelayedMessage(ms,expected){
	asyncTest( 'delayed message : '+ ms + 'ms', function(){
	var id = getId();
	addTest('description is given after a delay: '+ms+' ms','delayed_description_#'+id,DISCOVERY_TIME + 1000);
	discoverServices(id,function(service_list){
		if(service_list.length == expected)
			finishTest(true, 'delayed_description_#'+id);
		else
			finishTest(false,'delayed_description_#'+id);
	});
	sendMockData('set_description',{'description' : createDescription(id,false,getServiceList(id)),'id': id,'delay':ms});
	setTimeout(function(){ controlDevice('alive',id,true); }, 100);
	});
}
