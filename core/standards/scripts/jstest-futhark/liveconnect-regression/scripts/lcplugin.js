/*
  Test of accessing a plug-in object from javascript.
*/

var cvs = "$Id: lcplugin.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule("LCPlugin", cvs);

try {

  var plugin = opener.document.getElementById('LCPlugin');

testcase("Existence");

  tdef("Plugin object defined", plugin);
  tdef("IsPlaying defined", plugin.IsPlaying);
  tdef("PercentLoaded defined", plugin.PercentLoaded);
  tdef("LoadMovie defined", plugin.LoadMovie);
  tdef("Play defined", plugin.Play);
  tdef("Rewind defined", plugin.Rewind);
  tdef("StopPlay defined", plugin.StopPlay);
  tdef("TotalFrame defined", plugin.TotalFrames);
  tdef("GetVariable defined", plugin.GetVariable);
  tdef("GotoFrame defined", plugin.GotoFrame);

testcase("Call method");

  test("Call IsPlaying", plugin.IsPlaying(), true);
  test("Call PercentLoaded", plugin.PercentLoaded(), 100);
  alert(plugin.PercentLoaded());
  test("Call StopPlay", plugin.StopPlay(), undefined);
  test("Call LoadMovie", plugin.LoadMovie(0,"deutschland.swf"), undefined);

} catch (e) { exception( e ); }

testmodule_finished();
