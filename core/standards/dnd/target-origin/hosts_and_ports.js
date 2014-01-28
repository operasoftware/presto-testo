var httpHostMain = 't'; //name of the server that this page must accessed over port 80
var httpHostAlias = 't.oslo.opera.com'; //another hostname (must be a subdomain so document.domain can be set to a higher domain) that accesses the same content, over HTTP
var httpsHostAlias = 't.oslo.opera.com'; //another hostname (can be same as httpHostAlias) that accesses the same content, over HTTPS port 
var httpPortAlias = 8081; //another port that accesses the same content on the current hostname, over HTTP
var httpsPortAlias = 8443; //another port that accesses the same content on the httpsHostAlias, over HTTPS
