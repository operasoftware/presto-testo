/* These variables are used by various scripts.
   You should always call the functions to get the values for these.

   It is possible to set up some fancy forms or prompt stuff here,
   if it becomes too painful to hack this file.
   */

// Can add :port to the end of protocol_and_host, but not if the protocol is FILE:.

// DO NOT CHANGE THE FORMAT OF THE DEFINITIONS OF $$protocol_and_host, $$base, AND $$mode.
// They are modified by scripts.  (It's OK to change the values, of course, but they
// must be of the form "var <name> = <doublequoted-string>;"

var $$protocol_and_host = "http://t";
var $$base = "/core/standards/scripts/jstest-futhark/";              // test suite directory
var $$mode              = "PRETTYPRINT";                      // or "ART".
var $$pathname          = $$base + "js-regression/";
var $$platform          = "Win32";
var $$version           = "6.0 (Windows NT 4.0; U)";
var $$screen_height     = 1024;
var $$screen_width      = 1280;
var $$color_depth       = 32;
var $$pixel_depth       = 32;
var $$phase             = 1; // The "green" phase
// Would like to be able to set $$mode from query string...
if( typeof top!='undefined' && top.location && top.location.search.match(/mode=(\w*)/) ){ $$mode=RegExp.$1; }

function get_protocol_and_host() { return $$protocol_and_host; }
function get_modulepath( module, file )    { return $$base + module + "/" + file; }
function get_pathname( file )    { return $$pathname + file; }

function get_protocol()
{
    var ph=get_protocol_and_host();
    return ph.substring( 0, ph.indexOf(":")+1 );
}

function get_base()
{
  return $$base;
}

function get_host()
{
    var ph=get_protocol_and_host();
    var x=ph.lastIndexOf(":");
    var y=ph.indexOf(":");
    return ph.substring( ph.indexOf("//")+2, x != y ? x : ph.length );
}

function get_port()
{
    var ph=get_protocol_and_host();
    var x=ph.lastIndexOf(":");
    var y=ph.indexOf(":");
    return x != y ? ph.substring( x ) : "";
}

function get_platform()
{
    return $$platform;
}

function get_version()
{
    return $$version;
}

function get_user_agent()
{
  return "Opera/" + get_version() + " [en]";
}

function get_screen_width()  { return $$screen_width; }
function get_screen_height() { return $$screen_height; }
function get_color_depth()   { return $$color_depth; }
function get_pixel_depth()   { return $$pixel_depth; }

// Returns screen height when ornaments removed

function get_avail_height()
{
  if($$platform == "Win32")
  {
    return ($$screen_height - 28);
  }
  return $$screen_height;
}

function get_avail_width()
{
  return $$screen_width;
}

function get_phase()
{
  return $$phase;
}

function is_phase(p)
{
  return ($$phase >= p);
}


