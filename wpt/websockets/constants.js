var DOMAIN_FOR_PROXY_TESTS = 't.oslo.opera.com';
var DOMAIN_FOR_CROSS_ORIGIN_TESTS_1 = 'testsuites.oslo.osa';
var DOMAIN_FOR_CROSS_ORIGIN_TESTS_2 = 'crosssite.testsuites.oslo.osa';
var DOMAIN_FOR_WS_TESTS = location.hostname;
var DOMAIN_FOR_WSS_TESTS = 'certo2.opera.com';
var PROXY_NO_AUTH_URL = 'http://netcore2.lab.osa:8888/';
var PROXY_AUTO_URL = 'http://t.oslo.opera.com/core/standards/websockets/autoproxy.php';
var PROXY_BASIC_URL = 'http://netcore2.lab.osa:8889/';
var PROXY_BASIC_CRED = 'foo bar';
var PROXY_DIGEST_URL = 'http://netcore2.lab.osa:8890/';
var PROXY_DIGEST_CRED = 'foo bar';

// logic for using wss URLs instead of ws
var SCHEME_AND_DOMAIN;
if (location.search == '?wss') {
  SCHEME_AND_DOMAIN = 'wss://'+DOMAIN_FOR_WSS_TESTS;
} else {
  SCHEME_AND_DOMAIN = 'ws://'+DOMAIN_FOR_WS_TESTS;
}