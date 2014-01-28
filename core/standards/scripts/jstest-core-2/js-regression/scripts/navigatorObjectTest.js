/* -*- mode: java -*- */

var cvs = "$Id: navigatorObjectTest.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "JS navigator object test", cvs );

testcase( "properties exist" );
var l = navigator;
try {
    testProperty( "appCodeName", l.appCodeName );
    testProperty( "appName", l.appName );
    testProperty( "appVersion", l.appVersion );
    testProperty( "appMinorVersion", l.appMinorVersion );
    if (spoofingExplorer()) 
      testProperty( "browserLanguage (IE mode)", l.browserLanguage );
    else
      test( "browserLanguage (IE mode)", l.browserLanguage === undefined, true );
    testProperty( "language", l.language );
    testProperty( "mimeTypes", l.mimeTypes );
    testProperty( "mimeTypes.length", l.appCodeName.length );
    testProperty( "platform", l.platform );
    testProperty( "plugins", l.plugins );
    testProperty( "plugins.length", l.plugins.length );
    testProperty( "userAgent", l.userAgent );    
    testProperty( "javaEnabled", l.javaEnabled );
    testProperty( "taintEnabled", l.taintEnabled );
    testProperty( "pluginsEnabled", l.pluginsEnabled ); // Part of fix for bug# 119110
    if (spoofingExplorer()) 
      testProperty( "cookieEnabled (IE mode)", l.cookieEnabled );
    else
      test( "cookieEnabled (IE mode)", l.cookieEnabled === undefined, true );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values" );

test( "appCodeName",l.appCodeName, "Mozilla" );
test( "appName",l.appName, "Opera" );
test( "appVersion",l.appVersion, get_version() );
test( "appMinorVersion",l.appMinorVersion, "" );  // We do not return useful info on this one
test( "language",l.language, "en" );
test( "platform",l.platform, get_platform() );
test( "userAgent",l.userAgent, get_user_agent() );
test( "taintEnabled", l.taintEnabled(), false );
test( "javaEnabled", l.javaEnabled(), true );     // Can always hope
test( "pluginsEnabled", l.pluginsEnabled(), true ); // Can always hope here too (part of fix for bug# 119110)
if (spoofingExplorer()) 
{
  test( "browserLanguage", l.browserLanguage, "en" );
  test( "cookieEnabled", l.cookieEnabled, true );
}
test( "Need to test plugins property better", false, true );
test( "Need to test mimetypes property better", false, true );

testmodule_finished();
