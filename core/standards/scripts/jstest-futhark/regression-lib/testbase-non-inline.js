document.write( '<script src="'+ document.getElementsByTagName('script')[ document.getElementsByTagName('script').length-1 ].src.replace( '-non-inline', '' ) +'"><\/script>' );

// Replace document.write when document loads so that tests can use it
 document.addEventListener( window.opera&&opera.version()>9 ? 'DOMContentLoaded' : 'load' ,
	function(){
		document.writeln = document.write = function( msg ){
			  var container = document.getElementById( "container" ) || document.forms[0] || document.body; // append to "container" element or first form (for SPARTAN), or body
			  var paragraph = document.createElement( "p" );
			  container.appendChild( paragraph );
			  paragraph.innerHTML = msg;
		}
	},
	false
);
function showpre( msg )
{
  var container = document.getElementById( "container" )||document.body;
  var pre = document.createElement( "PRE" );
  container.appendChild( pre );
  pre.innerHTML = msg;
}
