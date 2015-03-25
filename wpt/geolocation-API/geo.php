<?php
/*
Copyright 2009 Opera Software ASA. All rights reserved.
 
This file contains Original Code and/or Contributions to the Original 
Code as defined in the Opera Web Applications License (the “License”). 
You may not use this file except in compliance with the License. Please 
obtain a copy of the License at http://www.opera.com/license/owal/
and read it before using this file. 

The Original Code and all Contributions to the Original Code distributed 
under the License are distributed on an “AS IS” basis, WITHOUT WARRANTY 
OF ANY KIND, EITHER EXPRESS OR IMPLIED, AND OPERA HEREBY DISCLAIMS ALL 
SUCH WARRANTIES, INCLUDING WITHOUT LIMITATION, ANY WARRANTIES OF 
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. 

Please see the License for the specific language governing rights and 
limitations under the License. 
*/

date_default_timezone_set("Europe/Oslo");

/* Set to 1 to enable logging to geolog.log */
$debug = 0;

$ip=$_SERVER['REMOTE_ADDR'];
$geostatefilename = 'geostate.'.$ip.'.txt';
$reqlogfilename = 'reqlog.'.$ip.'.txt';

$valid = true; // Check for whether the request was valid

function sendheaders() {
  $now = date(DATE_RFC1123);
	header("Content-Type: application/json",true);
	header("Date: ".$now);
	header("Expires: ".$now);
	header("Cache-Control: private, max-age=0");
	header("X-Content-Type-Options: nosniff");
	header("X-XSS-Protection: 0");
	header("Content-Length: 20");
	header("Server: GFE/2.0");
}

function geolog($message) {
	global $debug, $ip;
	if (!$debug) return;
	$f=fopen("geolog.log" ,"a");
	fputs($f,date(DATE_W3C)." (".$ip."): ".$message."\n");
	fclose($f);
}

function requestlog($message) {
	global $reqlogfilename;
	$f=fopen($reqlogfilename ,"w");
	fputs($f,$message);
	fclose($f);
}

function deleteRequestlog() {
	global $reqlogfilename;
	if (file_exists($reqlogfilename)) {
		unlink($reqlogfilename);
	}
}

$post_data=file_get_contents("php://input"); 

if (!$post_data) {
	// This is a GET, use the new API
	geolog("got GET (New API): ".$_SERVER['QUERY_STRING']);
	requestlog($_SERVER['QUERY_STRING']); // Log the query string to allow the test to obtain and analyse it later
    $useOld = false;

	// default
	if (isset($_GET['sensor']) && $_GET['sensor'] === 'true'
	 && isset($_GET['browser']) && $_GET['browser'] === 'opera') {
		$output='{"status":"OK", "location":{"lat":-33.852222,"lng":151.210556},"accuracy":20.0}}}';
	} else {
		$valid = false;
		$output='{"status":"REQUEST_DENIED"}';
	}
} else {
	// This is a POST, use the old API
	geolog("got POST (Old API): " . $post_data);
    $useOld = true;
	deleteRequestlog();

	// default
	$output='{"location":{"latitude":-33.852222,"longitude":151.210556,"accuracy":25000.0}}';
	// 59.92833,10.75444 - Oslo
	//-33.852222,151.210556 - Sydney Harbour Bridge
}


//======================================================================


if ($valid) { // Check that it was a valid request
	// check if there's a state file
	if ($state=@fopen($geostatefilename,'r')) {
		$storedData=fgets($state);
		if ($storedData!="") {
			$var=json_decode($storedData,TRUE);
			if(isset($var['longitude']))
				$oldLongitude=$var['longitude'];
			if(isset($var['latitude']))
				$oldLatitude=$var['latitude'];
			if(isset($var['error'])) {
				$error=$var['error'];
				geolog("server error ".$error);
				switch($error) {
				case 400: header($_SERVER["SERVER_PROTOCOL"]." ".$error." Bad Request"); break;
				case 404: header($_SERVER["SERVER_PROTOCOL"]." ".$error." Not Found"); break;
				case 500: header($_SERVER["SERVER_PROTOCOL"]." ".$error." Internal Server Error"); break;
				case 503: header($_SERVER["SERVER_PROTOCOL"]." ".$error." Service Unavailable"); break;
				}
				header("Status: ".$error);
				echo "Error";
				exit;
			}

			// special commands:
			if (isset($var['x-move']) && $movement=$var['x-move']) {
				// let the few next calls move the coordinates to simulate movement
				// until the server is reset through passing {}
				do {
					$var['latitude']+=$var['x-move']*(rand(-10000,10000)/20000.0);
					$var['longitude']+=$var['x-move']*(rand(-10000,10000)/20000.0);
				} while ($var['latitude']==$oldLatitude && $var['longitude']==$oldLongitude);
				// in case it returns the same position twice, retry

				// remove 'x-move' from the json to return
				unset($var['x-move']);      
			}

			if (isset($var['x-delay']) && $delayInSeconds=$var['x-delay']) {
				// add a delay for the response to be sent
				geolog("delay requested. Sleeping ".$delayInSeconds." seconds");
				sleep($delayInSeconds);
				unset($var['x-delay']);
			}

			if (isset($var['x-empty'])) {
				$output="";
			} elseif (isset($var['x-emptyobj'])) {
				$output="{}";
			} elseif (isset($var['x-garbage'])) {
				$output="2$25 ^#@% ==-234 {}3535";
			} else {
				if ($useOld) {
					$output = '{"location":'.json_encode($var).'}';
				} else {
					// Translate stored data from old format into new API format
					$result = array();
					foreach ($var as $key => $val) {
						switch ($key) {
							case "latitude":
								$newKey = 'lat';
								if (!isset($result['location'])) $result['location'] = array();
								$result['location'][$newKey] = $val;
								break;
							case "longitude":
								$newKey = 'lng';
								if (!isset($result['location'])) $result['location'] = array();
								$result['location'][$newKey] = $val;
								break;
							default:
								$result[$key] = $val;
						}
					}

					if (!isset($result['status'])) $result['status'] = "OK"; // Add default status if not set
					$output = json_encode($result);
				}
			}
		}
	}

	//parse post data
	if ($post_data && $post_data!='') {
		$request = json_decode($post_data, TRUE);
		if (!$request) {
			geolog("Bad JSON data sent in POST -> server error 400");
			sendheaders();
			header($_SERVER["SERVER_PROTOCOL"]." 400 Bad Request");
			header("Status: 400");
			echo "Bad request";
			exit;
		}
	}
}

geolog("response: ".$output);

sendheaders();

print($output);

// examples (from http://code.google.com/p/gears/wiki/GeolocationAPI)
//
//{
//  "location": {
//    "latitude": 51.0,
//    "longitude": -0.1,
//    "altitude": 30.1,
//    "accuracy": 1200.1,
//    "altitude_accuracy": 10.1,
//    "address": {
//      "street_number": "100",
//      "street": "Amphibian Walkway",
//      "postal_code": "94043",
//      "city": "Mountain View",
//      "county": "Mountain View County",
//      "region": "California",
//      "country": "United States of America",
//      "country_code": "US"
//    }
//  }
//}
//
//> curl -d "{version:'1.1.0'}" "http://www.google.com/loc/json"
// {"location":{"latitude":59.91382,"longitude":10.738741,"accuracy":25000.0},"access_token":"2:FADiLjx7cl1uUNvi:nTelrugsR6d-DOYp"}


?>
