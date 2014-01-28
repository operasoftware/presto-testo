// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

﻿function test(){  /**  JSON.parse() and non-ASCII input */

	var passed;
	var obj = JSON.parse( '{  "日本": "日本語", "中国": "中国語" }' );
	passed = obj["日本"] === "日本語"  &&
		obj["中国"]==="中国語" ;

	return passed ;
}
