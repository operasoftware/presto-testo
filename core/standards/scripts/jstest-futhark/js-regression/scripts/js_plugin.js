/**
 * JavaScript
 * Plugin object, js 1.3.
 *
 * 15.07.2001, torstein@opera.com
 * $Id:
 *
 */
var tprop;

function main( pluginsArray )
{
   try
   {
      var cvs = "$Id: js_plugin.js 22548 2008-01-23 21:29:12Z hallvord $";
      testmodule( "The Plugin object", cvs );

      testcase( "Plugin defined" );
      this.tprop = make_tprop( navigator );
      tprop( "plugins", "object" );
      test( "plugins.toString()", navigator.plugins.toString(), "[object PluginArray]" );

      /*
         Testing all Plugin objects in the PluginsArray, and all
         MimeTypes in every Plugin object.
         Maybe a little too much :-)
      */
      for( var i = 0; i < pluginsArray.length; i++ )
      {
         var pluginObject = pluginsArray[ i ];

         for( var j = 0; j < pluginObject; j++ )
         {
            test( "pluginObject[ j ] toString #"+i+'.'+j, pluginObject[ j ], "[object MimeType]" );
         }

         this.tprop = make_tprop( pluginObject );

         test( 'toString',  pluginObject, "[object Plugin]" );

         test( "typeof", typeof pluginObject, "object" );

         testcase( 'Plugin object properties #'+i+'.'+j );
         testPluginProperties( pluginObject );
      }
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testPluginProperties( plugin )
{
   tprop( "description", "string" );
   tprop( "filename", "string" );
   tprop( "length", "number" );
   tprop( "name", "string" );

   expect_exception( "Changing a readonly value, plugin.description", Error, function() { plugin.description = "something"; } );
   expect_exception( "Changing a readonly value, plugin.filename", Error, function() { plugin.filename = "something"; } );
   expect_exception( "Changing a readonly value, plugin.length", Error, function() { plugin.length = "something"; } );
   expect_exception( "Changing a readonly value, plugin.name", Error, function() { plugin.name = "something"; } );
}



