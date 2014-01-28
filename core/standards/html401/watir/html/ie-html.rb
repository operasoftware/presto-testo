############################################################################
# Author: Karl Wessel Frogner                                              #
# Email:  Karlwf@opera.com                                                 #
# Date:   18. June 2010                                                    #
############################################################################

require "operawatir/helper"

describe "ie-html " do
 
  
=begin 
 it "body alink" do
    @browser.goto("http://t/core/standards/html401-deprecated/Watir/body_alink.html")
    @browser.element(:id, "link").fire_event("onMouseDown")
    @browser.element(:id, "test").compare_hash(@browser.element(:id,"ref")).should == true
  end
  
  it "body vlink" do
    @browser.goto("http://t/core/standards/html401-deprecated/Watir/body_vlink.html")
    @browser.element(:id,"link").click
    @browser.goto("http://t/core/standards/html401-deprecated/Watir/body_vlink.html")
    @browser.element(:id,"test").compare_hash(@browser.element(:id,"ref")).should == true
  end
=end
  
  it "SCRIPT language" do
    @browser.goto("http://t/core/standards/html401-deprecated/Watir/script_language.html")
    @browser.element(:id,"link").click
    @browser.element(:id,"ref").text.should == "Pass"
  end
  
  it "Map click x45 y31" do
    @browser.goto("http://t/core/standards/html401/watir/html/map.html")
    @browser.element(:xpath,"//object").click(45,31)
    sleep(0.5)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
    
  end
  
  it "Map click x45 y41" do
    @browser.element(:xpath,"//object").click(45,41)
    sleep(0.5)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
    
  end
  
  it "Map click x45 y51" do
    @browser.element(:xpath,"//object").click(45,51)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
    
  end
  
  it "Map click x45 y61" do
    @browser.element(:xpath,"//object").click(45,61)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
    
  end
  it "Map click x45 y71" do
    @browser.element(:xpath,"//object").click(45,71)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
    
  end
  
  it "Map click x45 y81" do
    @browser.element(:xpath,"//object").click(45,81)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
    
  end
  
  it "Map click x21 y81" do
    @browser.element(:xpath,"//object").click(21,81)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x21 y71" do
    @browser.element(:xpath,"//object").click(21,71)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x21 y61" do
    @browser.element(:xpath,"//object").click(21,61)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x21 y51" do
    @browser.element(:xpath,"//object").click(21,51)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x21 y41" do
    @browser.element(:xpath,"//object").click(21,41)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x21 y31" do
    @browser.element(:xpath,"//object").click(21,31)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x21 y21" do
    @browser.element(:xpath,"//object").click(21,21)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x50 y107" do
    @browser.element(:xpath,"//object").click(50,107)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x50 y117" do
    @browser.element(:xpath,"//object").click(50,117)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x50 y127" do
    @browser.element(:xpath,"//object").click(50,127)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x50 y137" do
    @browser.element(:xpath,"//object").click(50,137)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x50 y147" do
    @browser.element(:xpath,"//object").click(50,147)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x50 y157" do
    @browser.element(:xpath,"//object").click(50,157)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x50 y167" do
    @browser.element(:xpath,"//object").click(50,167)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x17 y140" do
    @browser.element(:xpath,"//object").click(17,140)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x27 y140" do
    @browser.element(:xpath,"//object").click(27,140)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x37 y140" do
    @browser.element(:xpath,"//object").click(37,140)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back") 
  end
  
  
  it "Map click x47 y140" do
    @browser.element(:xpath,"//object").click(47,140)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x57 y140" do
    @browser.element(:xpath,"//object").click(57,140)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x67 y140" do
    @browser.element(:xpath,"//object").click(67,140)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x77 y140" do
    @browser.element(:xpath,"//object").click(77,140)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x60 y210" do
    @browser.element(:xpath,"//object").click(60,210)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x60 y220" do
    @browser.element(:xpath,"//object").click(60,220)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back") 
  end
  
  
  it "Map click x60 y230  " do
    @browser.element(:xpath,"//object").click(60,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x60 y240" do
    @browser.element(:xpath,"//object").click(60,240)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x60 y250" do
    @browser.element(:xpath,"//object").click(60,250)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x60 y260" do
    @browser.element(:xpath,"//object").click(60,260)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x30 y230" do
    @browser.element(:xpath,"//object").click(30,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x40 y230" do
    @browser.element(:xpath,"//object").click(40,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x50 y230" do
    @browser.element(:xpath,"//object").click(50,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x60 y230" do
    @browser.element(:xpath,"//object").click(60,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x70 y230" do
    @browser.element(:xpath,"//object").click(70,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x80 y230" do
    @browser.element(:xpath,"//object").click(80,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x160 y22" do
    @browser.element(:xpath,"//object").click(160,22)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x160 y32" do
    @browser.element(:xpath,"//object").click(160,32)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x160 y42" do
    @browser.element(:xpath,"//object").click(160,42)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x160 y52" do
    @browser.element(:xpath,"//object").click(160,52)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x160 y62" do
    @browser.element(:xpath,"//object").click(160,62)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x160 y72" do
    @browser.element(:xpath,"//object").click(160,72)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x160 y82" do
    @browser.element(:xpath,"//object").click(160,82)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x130 y50" do
    @browser.element(:xpath,"//object").click(130,50)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x140 y50" do
    @browser.element(:xpath,"//object").click(140,50)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back") 
  end
  
  
  it "Map click x150 y50" do
    @browser.element(:xpath,"//object").click(150,50)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x160 y50" do
    @browser.element(:xpath,"//object").click(160,50)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x170 y50" do
    @browser.element(:xpath,"//object").click(170,50)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  
  it "Map click x180 y50" do
    @browser.element(:xpath,"//object").click(180,50)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x125 y130" do
    @browser.element(:xpath,"//object").click(125,130)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x135 y130" do
    @browser.element(:xpath,"//object").click(135,130)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x145 y130" do
    @browser.element(:xpath,"//object").click(145,130)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x155 y130" do
    @browser.element(:xpath,"//object").click(155,130)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x165 y130" do
    @browser.element(:xpath,"//object").click(165,130)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x175 y130" do
    @browser.element(:xpath,"//object").click(175,130)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x185 y130" do
    @browser.element(:xpath,"//object").click(185,130)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x160 y105" do
    @browser.element(:xpath,"//object").click(160,105)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x160 y115" do
    @browser.element(:xpath,"//object").click(160,115)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x160 y125" do
    @browser.element(:xpath,"//object").click(160,125)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x160 y135" do
    @browser.element(:xpath,"//object").click(160,135)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x160 y145" do
    @browser.element(:xpath,"//object").click(160,145)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x160 y155" do
    @browser.element(:xpath,"//object").click(160,155)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x160 y165" do
    @browser.element(:xpath,"//object").click(160,165)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x160 y195" do
    @browser.element(:xpath,"//object").click(160,195)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x160 y205" do
    @browser.element(:xpath,"//object").click(160,205)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x160 y215" do
    @browser.element(:xpath,"//object").click(160,215)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x160 y225" do
    @browser.element(:xpath,"//object").click(160,225)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x160 y235" do
    @browser.element(:xpath,"//object").click(160,235)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x160 y245" do
    @browser.element(:xpath,"//object").click(160,245)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x160 y255" do
    @browser.element(:xpath,"//object").click(160,255)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x130 y220" do
    @browser.element(:xpath,"//object").click(130,220)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x140 y220" do
    @browser.element(:xpath,"//object").click(140,220)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x150 y220" do
    @browser.element(:xpath,"//object").click(150,220)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x160 y220" do
    @browser.element(:xpath,"//object").click(160,220)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x170 y220" do
    @browser.element(:xpath,"//object").click(170,220)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x180 y220" do
    @browser.element(:xpath,"//object").click(180,220)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y23" do
    @browser.element(:xpath,"//object").click(262,23)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y33" do
    @browser.element(:xpath,"//object").click(262,33)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y43" do
    @browser.element(:xpath,"//object").click(262,43)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y53" do
    @browser.element(:xpath,"//object").click(262,53)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y63" do
    @browser.element(:xpath,"//object").click(262,63)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y73" do
    @browser.element(:xpath,"//object").click(262,73)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y111" do
    @browser.element(:xpath,"//object").click(262,111)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x262 y121" do
    @browser.element(:xpath,"//object").click(262,121)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x262 y131" do
    @browser.element(:xpath,"//object").click(262,131)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x262 y141" do
    @browser.element(:xpath,"//object").click(262,141)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x262 y151" do
    @browser.element(:xpath,"//object").click(262,151)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x262 y161" do
    @browser.element(:xpath,"//object").click(262,161)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y197" do
    @browser.element(:xpath,"//object").click(262,197)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x262 y207" do
    @browser.element(:xpath,"//object").click(262,207)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y217" do
    @browser.element(:xpath,"//object").click(262,217)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y227" do
    @browser.element(:xpath,"//object").click(262,227)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y237" do
    @browser.element(:xpath,"//object").click(262,237)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y247" do
    @browser.element(:xpath,"//object").click(262,247)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x262 y257" do
    @browser.element(:xpath,"//object").click(262,257)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x233 y47" do
    @browser.element(:xpath,"//object").click(233,47)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x243 y47" do
    @browser.element(:xpath,"//object").click(243,47)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x253 y47" do
    @browser.element(:xpath,"//object").click(253,47)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x263 y47" do
    @browser.element(:xpath,"//object").click(263,47)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x273 y47" do
    @browser.element(:xpath,"//object").click(273,47)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x283 y47" do
    @browser.element(:xpath,"//object").click(283,47)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x293 y47" do
    @browser.element(:xpath,"//object").click(293,47)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x237 y139" do
    @browser.element(:xpath,"//object").click(237,139)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x247 y139" do
    @browser.element(:xpath,"//object").click(247,139)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x257 y139" do
    @browser.element(:xpath,"//object").click(257,139)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x267 y139" do
    @browser.element(:xpath,"//object").click(267,139)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x277 y139" do
    @browser.element(:xpath,"//object").click(277,139)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x287 y139" do
    @browser.element(:xpath,"//object").click(287,139)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x230 y230" do
    @browser.element(:xpath,"//object").click(230,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x240 y230" do
    @browser.element(:xpath,"//object").click(240,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x250 y230" do
    @browser.element(:xpath,"//object").click(250,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x260 y230" do
    @browser.element(:xpath,"//object").click(260,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x270 y230" do
    @browser.element(:xpath,"//object").click(270,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x280 y230" do
    @browser.element(:xpath,"//object").click(280,230)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y12" do
    @browser.element(:xpath,"//object").click(200,12)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y22" do
    @browser.element(:xpath,"//object").click(200,22)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y32" do
    @browser.element(:xpath,"//object").click(200,32)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y42" do
    @browser.element(:xpath,"//object").click(200,42)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y52" do
    @browser.element(:xpath,"//object").click(200,52)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y62" do
    @browser.element(:xpath,"//object").click(200,62)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y72" do
    @browser.element(:xpath,"//object").click(200,72)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y82" do
    @browser.element(:xpath,"//object").click(200,82)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y92" do
    @browser.element(:xpath,"//object").click(200,92)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y102" do
    @browser.element(:xpath,"//object").click(200,102)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y112" do
    @browser.element(:xpath,"//object").click(200,112)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y122" do
    @browser.element(:xpath,"//object").click(200,122)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y132" do
    @browser.element(:xpath,"//object").click(200,132)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y142" do
    @browser.element(:xpath,"//object").click(200,142)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y152" do
    @browser.element(:xpath,"//object").click(200,152)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y162" do
    @browser.element(:xpath,"//object").click(200,162)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y172" do
    @browser.element(:xpath,"//object").click(200,172)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y182" do
    @browser.element(:xpath,"//object").click(200,182)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y192" do
    @browser.element(:xpath,"//object").click(200,192)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x200 y202" do
    @browser.element(:xpath,"//object").click(200,202)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x200 y212" do
    @browser.element(:xpath,"//object").click(200,212)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  it "Map click x200 y222" do
    @browser.element(:xpath,"//object").click(200,222)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y41" do
    @browser.element(:xpath,"//object").click(103,41)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y51" do
    @browser.element(:xpath,"//object").click(103,51)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y61" do
    @browser.element(:xpath,"//object").click(103,61)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y71" do
    @browser.element(:xpath,"//object").click(103,71)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y81" do
    @browser.element(:xpath,"//object").click(103,81)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y91" do
    @browser.element(:xpath,"//object").click(103,91)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y101" do
    @browser.element(:xpath,"//object").click(103,101)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y111" do
    @browser.element(:xpath,"//object").click(103,111)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y121" do
    @browser.element(:xpath,"//object").click(103,121)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y131" do
    @browser.element(:xpath,"//object").click(103,131)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y141" do
    @browser.element(:xpath,"//object").click(103,141)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y151" do
    @browser.element(:xpath,"//object").click(103,151)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y161" do
    @browser.element(:xpath,"//object").click(103,161)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y171" do
    @browser.element(:xpath,"//object").click(103,171)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y181" do
    @browser.element(:xpath,"//object").click(103,181)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y191" do
    @browser.element(:xpath,"//object").click(103,191)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y201" do
    @browser.element(:xpath,"//object").click(103,201)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y211" do
    @browser.element(:xpath,"//object").click(103,211)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y221" do
    @browser.element(:xpath,"//object").click(103,221)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y231" do
    @browser.element(:xpath,"//object").click(103,231)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y241" do
    @browser.element(:xpath,"//object").click(103,241)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y251" do
    @browser.element(:xpath,"//object").click(103,251)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x103 y261" do
    @browser.element(:xpath,"//object").click(103,261)
    @browser.element(:id,"status").verify_contains("pass - OK").should == true
    @browser.opera_action("Back")
  end
  
  it "Map click x115 y108" do
    @browser.element(:xpath,"//object").click(115,108)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y118" do
    @browser.element(:xpath,"//object").click(115,118)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y128" do
    @browser.element(:xpath,"//object").click(115,128)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y138" do
    @browser.element(:xpath,"//object").click(115,138)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y148" do
    @browser.element(:xpath,"//object").click(115,148)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y158" do
    @browser.element(:xpath,"//object").click(115,158)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y168" do
    @browser.element(:xpath,"//object").click(115,168)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y178" do
    @browser.element(:xpath,"//object").click(115,178)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y188" do
    @browser.element(:xpath,"//object").click(115,188)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y198" do
    @browser.element(:xpath,"//object").click(115,198)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y208" do
    @browser.element(:xpath,"//object").click(115,208)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y218" do
    @browser.element(:xpath,"//object").click(115,218)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y228" do
    @browser.element(:xpath,"//object").click(115,228)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y238" do
    @browser.element(:xpath,"//object").click(115,238)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y248" do
    @browser.element(:xpath,"//object").click(115,248)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y258" do
    @browser.element(:xpath,"//object").click(115,258)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x115 y268" do
    @browser.element(:xpath,"//object").click(115,268)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x20 y96" do
    @browser.element(:xpath,"//object").click(20,96)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x77 y96" do
    @browser.element(:xpath,"//object").click(77,96)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x17 y171" do
    @browser.element(:xpath,"//object").click(17,171)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x84 y209" do
    @browser.element(:xpath,"//object").click(84,209)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x266 y181" do
    @browser.element(:xpath,"//object").click(266,181)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x17 y171" do
    @browser.element(:xpath,"//object").click(17,171)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x277 y94" do
    @browser.element(:xpath,"//object").click(277,94)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x287 y14" do
    @browser.element(:xpath,"//object").click(287,14)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x161 y90" do
    @browser.element(:xpath,"//object").click(161,90)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x287 y14" do
    @browser.element(:xpath,"//object").click(287,14)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x150 y93" do
    @browser.element(:xpath,"//object").click(150,93)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x122 y181" do
    @browser.element(:xpath,"//object").click(122,181)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x132 y181" do
    @browser.element(:xpath,"//object").click(132,181)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x142 y181" do
    @browser.element(:xpath,"//object").click(142,181)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x152 y181" do
    @browser.element(:xpath,"//object").click(152,181)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x162 y181" do
    @browser.element(:xpath,"//object").click(162,181)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x172 y181" do
    @browser.element(:xpath,"//object").click(172,181)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x182 y181" do
    @browser.element(:xpath,"//object").click(182,181)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x122 y270" do
    @browser.element(:xpath,"//object").click(122,270)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x132 y270" do
    @browser.element(:xpath,"//object").click(132,270)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x142 y270" do
    @browser.element(:xpath,"//object").click(142,270)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x152 y270" do
    @browser.element(:xpath,"//object").click(152,270)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x162 y270" do
    @browser.element(:xpath,"//object").click(162,270)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x172 y270" do
    @browser.element(:xpath,"//object").click(172,270)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  
  it "Map click x182 y270" do
    @browser.element(:xpath,"//object").click(182,270)
    sleep(0.3) 
    @browser.title.should == "Map"
  end
  #### IE IMG:: ismap ###
  it "IMG :: isIMG :: ismap click x45 y31" do
    
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    @browser.element(:id,"image").click(45,31)
    sleep(0.5)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")      
  end
  
  it "Map click x45 y41" do
    @browser.element(:id,"image").click(45,41)
    sleep(0.5)           
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")     
  end
  
  it "IMG :: ismap click x45 y51" do
    @browser.element(:id,"image").click(45,51)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x45 y61" do
    @browser.element(:id,"image").click(45,61)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x45 y71" do
    @browser.element(:id,"image").click(45,71)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: isIMG :: ismap click x45 y81" do
    @browser.element(:id,"image").click(45,81)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x21 y81" do
    @browser.element(:id,"image").click(21,81)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x21 y71" do
    @browser.element(:id,"image").click(21,71)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x21 y61" do
    @browser.element(:id,"image").click(21,61)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x21 y51" do
    @browser.element(:id,"image").click(21,51)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x21 y41" do
    @browser.element(:id,"image").click(21,41)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x21 y31" do
    @browser.element(:id,"image").click(21,31)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x50 y107" do
    @browser.element(:id,"image").click(50,107)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x50 y117" do
    @browser.element(:id,"image").click(50,117)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  it "IMG :: ismap click x50 y127" do
    @browser.element(:id,"image").click(50,127)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x50 y137" do
    @browser.element(:id,"image").click(50,137)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x50 y147" do
    @browser.element(:id,"image").click(50,147)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x50 y157" do
    @browser.element(:id,"image").click(50,157)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x50 y167" do
    @browser.element(:id,"image").click(50,167)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x17 y140" do
    @browser.element(:id,"image").click(17,140)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x27 y140" do
    @browser.element(:id,"image").click(27,140)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x37 y140" do
    @browser.element(:id,"image").click(37,140)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  
  it "IMG :: ismap click x47 y140" do
    @browser.element(:id,"image").click(47,140)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
   
  it "IMG :: ismap click x57 y140" do
    @browser.element(:id,"image").click(57,140)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
    
  it "IMG :: ismap click x67 y140" do
    @browser.element(:id,"image").click(67,140)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")   
  end
   

  it "IMG :: ismap click x77 y140" do
    @browser.element(:id,"image").click(77,140)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")  
  end
  
  
  it "IMG :: ismap click x60 y210" do
    @browser.element(:id,"image").click(60,210)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")   
  end 
 
  it "IMG :: ismap click x60 y220" do
    @browser.element(:id,"image").click(60,220)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")   
  end
   
  it "IMG :: ismap click x60 y230  " do
    @browser.element(:id,"image").click(60,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x60 y240" do
    @browser.element(:id,"image").click(60,240)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")  
  end
  
  
  it "IMG :: ismap click x60 y250" do
    @browser.element(:id,"image").click(60,250)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
    
  it "IMG :: ismap click x60 y260" do
    @browser.element(:id,"image").click(60,260)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")   
  end
  
  it "IMG :: ismap click x30 y230" do
    @browser.element(:id,"image").click(30,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")  
  end
   
  it "IMG :: ismap click x40 y230" do
    @browser.element(:id,"image").click(40,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")   
  end
    
  it "IMG :: ismap click x50 y230" do
    @browser.element(:id,"image").click(50,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")  
  end
  
  it "IMG :: ismap click x60 y230" do
    @browser.element(:id,"image").click(60,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")  
  end
  
  
  it "IMG :: ismap click x70 y230" do
    @browser.element(:id,"image").click(70,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x80 y230" do
    @browser.element(:id,"image").click(80,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x160 y22" do
    @browser.element(:id,"image").click(160,22)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x160 y32" do
    @browser.element(:id,"image").click(160,32)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x160 y42" do
    @browser.element(:id,"image").click(160,42)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x160 y52" do
    @browser.element(:id,"image").click(160,52)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x160 y62" do
    @browser.element(:id,"image").click(160,62)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x160 y72" do
    @browser.element(:id,"image").click(160,72)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x160 y82" do
    @browser.element(:id,"image").click(160,82)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x130 y50" do
    @browser.element(:id,"image").click(130,50)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x140 y50" do
    @browser.element(:id,"image").click(140,50)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x150 y50" do
    @browser.element(:id,"image").click(150,50)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x160 y50" do
    @browser.element(:id,"image").click(160,50)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x170 y50" do
    @browser.element(:id,"image").click(170,50)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  
  it "IMG :: ismap click x180 y50" do
    @browser.element(:id,"image").click(180,50)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  
  it "IMG :: ismap click x125 y130" do
    @browser.element(:id,"image").click(125,130)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  it "IMG :: ismap click x135 y130" do
    @browser.element(:id,"image").click(135,130)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
    
  end
  it "IMG :: ismap click x145 y130" do
    @browser.element(:id,"image").click(145,130)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x155 y130" do
    @browser.element(:id,"image").click(155,130)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x165 y130" do
    @browser.element(:id,"image").click(165,130)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x175 y130" do
    @browser.element(:id,"image").click(175,130)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  it "IMG :: ismap click x185 y130" do
    @browser.element(:id,"image").click(185,130)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x160 y105" do
    @browser.element(:id,"image").click(160,105)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  it "IMG :: ismap click x160 y115" do
    @browser.element(:id,"image").click(160,115)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  it "IMG :: ismap click x160 y125" do
    @browser.element(:id,"image").click(160,125)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x160 y135" do
    @browser.element(:id,"image").click(160,135)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  
  it "IMG :: ismap click x160 y145" do
    @browser.element(:id,"image").click(160,145)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  
  it "IMG :: ismap click x160 y155" do
    @browser.element(:id,"image").click(160,155)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  
  it "IMG :: ismap click x160 y165" do
    @browser.element(:id,"image").click(160,165)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x160 y195" do
    @browser.element(:id,"image").click(160,195)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  
  it "IMG :: ismap click x160 y205" do
    @browser.element(:id,"image").click(160,205)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x160 y215" do
    @browser.element(:id,"image").click(160,215)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x160 y225" do
    @browser.element(:id,"image").click(160,225)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x160 y235" do
    @browser.element(:id,"image").click(160,235)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x160 y245" do
    @browser.element(:id,"image").click(160,245)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x160 y255" do
    @browser.element(:id,"image").click(160,255)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x130 y220" do
    @browser.element(:id,"image").click(130,220)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x140 y220" do
    @browser.element(:id,"image").click(140,220)   
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x150 y220" do
    @browser.element(:id,"image").click(150,220) 
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x160 y220" do
    @browser.element(:id,"image").click(160,220)      
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x170 y220" do
    @browser.element(:id,"image").click(170,220)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x180 y220" do
    @browser.element(:id,"image").click(180,220)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x262 y23" do
    @browser.element(:id,"image").click(262,23)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x262 y33" do
    @browser.element(:id,"image").click(262,33)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x262 y43" do
    @browser.element(:id,"image").click(262,43)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")  
  end
  
  it "IMG :: ismap click x262 y53" do
    @browser.element(:id,"image").click(262,53)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x262 y63" do
    @browser.element(:id,"image").click(262,63)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x262 y73" do
    @browser.element(:id,"image").click(262,73)
    sleep(0.3)      
    @browser.element(:id,"status").verify_contains("PASS").should == true
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x262 y111" do
    @browser.element(:id,"image").click(262,111)
    sleep(0.3)      
    @browser.element(:id,"status").verify_contains("PASS").should == true
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x262 y121" do
    @browser.element(:id,"image").click(262,121)
    sleep(0.3)      
    @browser.element(:id,"status").verify_contains("PASS").should == true
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x262 y131" do
    @browser.element(:id,"image").click(262,131)
    sleep(0.3)      
    @browser.element(:id,"status").verify_contains("PASS").should == true
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x262 y141" do
    @browser.element(:id,"image").click(262,141)
    sleep(0.3)      
    @browser.element(:id,"status").verify_contains("PASS").should == true
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x262 y151" do
    @browser.element(:id,"image").click(262,151)
    sleep(0.3)      
    @browser.element(:id,"status").verify_contains("PASS").should == true
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x262 y161" do
    @browser.element(:id,"image").click(262,161)
    sleep(0.3)      
    @browser.element(:id,"status").verify_contains("PASS").should == true
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x262 y197" do
    @browser.element(:id,"image").click(262,197)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x262 y207" do
    @browser.element(:id,"image").click(262,207)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x262 y217" do
    @browser.element(:id,"image").click(262,217)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x262 y227" do
    @browser.element(:id,"image").click(262,227)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x262 y237" do
    @browser.element(:id,"image").click(262,237)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x262 y247" do
    @browser.element(:id,"image").click(262,247)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x262 y257" do
    @browser.element(:id,"image").click(262,257)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  
  it "IMG :: ismap click x233 y47" do
    @browser.element(:id,"image").click(233,47)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x243 y47" do
    @browser.element(:id,"image").click(243,47)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x253 y47" do
    @browser.element(:id,"image").click(253,47)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x263 y47" do
    @browser.element(:id,"image").click(263,47)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x273 y47" do
    @browser.element(:id,"image").click(273,47)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x283 y47" do
    @browser.element(:id,"image").click(283,47)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x293 y47" do
    @browser.element(:id,"image").click(293,47)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  
  it "IMG :: ismap click x237 y139" do
    @browser.element(:id,"image").click(237,139)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x247 y139" do
    @browser.element(:id,"image").click(247,139)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x257 y139" do
    @browser.element(:id,"image").click(257,139)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x267 y139" do
    @browser.element(:id,"image").click(267,139)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x277 y139" do
    @browser.element(:id,"image").click(277,139)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x287 y139" do
    @browser.element(:id,"image").click(287,139)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  
  it "IMG :: ismap click x230 y230" do
    @browser.element(:id,"image").click(230,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x240 y230" do
    @browser.element(:id,"image").click(240,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x250 y230" do
    @browser.element(:id,"image").click(250,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x260 y230" do
    @browser.element(:id,"image").click(260,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x270 y230" do
    @browser.element(:id,"image").click(270,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x280 y230" do
    @browser.element(:id,"image").click(280,230)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y12" do
    @browser.element(:id,"image").click(200,12)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y22" do
    @browser.element(:id,"image").click(200,22)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y32" do
    @browser.element(:id,"image").click(200,32)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y42" do
    @browser.element(:id,"image").click(200,42)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y52" do
    @browser.element(:id,"image").click(200,52)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y62" do
    @browser.element(:id,"image").click(200,62)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y72" do
    @browser.element(:id,"image").click(200,72)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y82" do
    @browser.element(:id,"image").click(200,82)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y92" do
    @browser.element(:id,"image").click(200,92)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y102" do
    @browser.element(:id,"image").click(200,102)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y112" do
    @browser.element(:id,"image").click(200,112)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y122" do
    @browser.element(:id,"image").click(200,122)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y132" do
    @browser.element(:id,"image").click(200,132)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y142" do
    @browser.element(:id,"image").click(200,142)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y152" do
    @browser.element(:id,"image").click(200,152)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y162" do
    @browser.element(:id,"image").click(200,162)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y172" do
    @browser.element(:id,"image").click(200,172)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y182" do
    @browser.element(:id,"image").click(200,182)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y192" do
    @browser.element(:id,"image").click(200,192)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y202" do
    @browser.element(:id,"image").click(200,202)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y212" do
    @browser.element(:id,"image").click(200,212)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x200 y222" do
    @browser.element(:id,"image").click(200,222)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y41" do
    @browser.element(:id,"image").click(103,41)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y51" do
    @browser.element(:id,"image").click(103,51)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y61" do
    @browser.element(:id,"image").click(103,61)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y71" do
    @browser.element(:id,"image").click(103,71)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y81" do
    @browser.element(:id,"image").click(103,81)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y91" do
    @browser.element(:id,"image").click(103,91)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end

  
  it "IMG :: ismap click x103 y101" do
    @browser.element(:id,"image").click(103,101)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y111" do
    @browser.element(:id,"image").click(103,111)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y121" do
    @browser.element(:id,"image").click(103,121)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y131" do
    @browser.element(:id,"image").click(103,131)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y141" do
    @browser.element(:id,"image").click(103,141)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y151" do
    @browser.element(:id,"image").click(103,151)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y161" do
    @browser.element(:id,"image").click(103,161)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y171" do
    @browser.element(:id,"image").click(103,171)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y181" do
    @browser.element(:id,"image").click(103,181)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y191" do
    @browser.element(:id,"image").click(103,191)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y201" do
    @browser.element(:id,"image").click(103,201)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y211" do
    @browser.element(:id,"image").click(103,211)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y221" do
    @browser.element(:id,"image").click(103,221)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y231" do
    @browser.element(:id,"image").click(103,231)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y241" do
    @browser.element(:id,"image").click(103,241)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y251" do
    @browser.element(:id,"image").click(103,251)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x103 y261" do
    @browser.element(:id,"image").click(103,261)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x115 y108" do
    @browser.element(:id,"image").click(115,108)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x115 y118" do
    @browser.element(:id,"image").click(115,118)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html") 
  end
  
  it "IMG :: ismap click x115 y128" do
    @browser.element(:id,"image").click(115,128)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y138" do
    @browser.element(:id,"image").click(115,138)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y148" do
    @browser.element(:id,"image").click(115,148)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y158" do
    @browser.element(:id,"image").click(115,158)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y168" do
    @browser.element(:id,"image").click(115,168)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y178" do
    @browser.element(:id,"image").click(115,178)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y188" do
    @browser.element(:id,"image").click(115,188)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y198" do
    @browser.element(:id,"image").click(115,198)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y208" do
    @browser.element(:id,"image").click(115,208)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y218" do
    @browser.element(:id,"image").click(115,218)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y228" do
    @browser.element(:id,"image").click(115,228)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y238" do
    @browser.element(:id,"image").click(115,238)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y248" do
    @browser.element(:id,"image").click(115,248)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y258" do
    @browser.element(:id,"image").click(115,258)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x115 y268" do
    @browser.element(:id,"image").click(115,268)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x20 y96" do
    @browser.element(:id,"image").click(20,96)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x77 y96" do
    @browser.element(:id,"image").click(77,96)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x17 y171" do
    @browser.element(:id,"image").click(17,171)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x84 y209" do
    @browser.element(:id,"image").click(84,209)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x266 y181" do
    @browser.element(:id,"image").click(266,181)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x17 y171" do
    @browser.element(:id,"image").click(17,171)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x277 y94" do
    @browser.element(:id,"image").click(277,94)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x287 y14" do
    @browser.element(:id,"image").click(287,14)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x161 y90" do
    @browser.element(:id,"image").click(161,90)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x287 y14" do
    @browser.element(:id,"image").click(287,14)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x150 y93" do
    @browser.element(:id,"image").click(150,93)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x122 y181" do
    @browser.element(:id,"image").click(122,181)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x132 y181" do
    @browser.element(:id,"image").click(132,181)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x142 y181" do
    @browser.element(:id,"image").click(142,181)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x152 y181" do
    @browser.element(:id,"image").click(152,181)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x162 y181" do
    @browser.element(:id,"image").click(162,181)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x172 y181" do
    @browser.element(:id,"image").click(172,181)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x182 y181" do
    @browser.element(:id,"image").click(182,181)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x122 y270" do
    @browser.element(:id,"image").click(122,270)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x132 y270" do
    @browser.element(:id,"image").click(132,270)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x142 y270" do
    @browser.element(:id,"image").click(142,270)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x152 y270" do
    @browser.element(:id,"image").click(152,270)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x162 y270" do
    @browser.element(:id,"image").click(162,270)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x172 y270" do
    @browser.element(:id,"image").click(172,270)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  it "IMG :: ismap click x182 y270" do
    @browser.element(:id,"image").click(182,270)
    sleep(0.3)
    @browser.element(:id,"status").verify_contains("PASS").should == true  
    @browser.goto("http://t/core/standards/html401/watir/html/img_ismap.html")
  end
  
  ####
  
  
  it "a-href" do
    @browser.goto("http://t/core/standards/html401/watir/html/a-href.html")
    @browser.element(:id, "test").click
    sleep(0.5)
    @browser.title.should =~ /[Dd]ownload/
  end

  
  

  it "a-tabindex" do
    @browser.goto("http://t/core/standards/html401/watir/html/a-tabindex.html")
    @browser.keys.send :Tab
    @browser.element(:id, "t2").compare_hash(@browser.element(:id,"r2")).should == false
    @browser.keys.send :Tab
    @browser.element(:id, "t3").compare_hash(@browser.element(:id,"r3")).should == false
    @browser.keys.send :Tab
    @browser.element(:id, "t1").compare_hash(@browser.element(:id,"r1")).should == false
  end
  
  
  
  it "base-href" do
    @browser.goto("http://t/core/standards/html401/watir/html/base-href.html")
    @browser.element(:id, "test").click
    sleep(0.5)
    @browser.title.should =~ /[Dd]ownload/
    @browser.opera_action("Back")
  end
  
  
  it "base-target" do
    @browser.goto("http://t/core/standards/html401/watir/html/base-target.html")
    @browser.element(:id, "test").click
    sleep(0.5)
    @browser.opera_action("Focus current tab")
    sleep(0.5)
    @browser.title.should =~ /[Dd]ownload/
    @browser.opera_action("Close page")
  end
  
  
  
  it "SCRIPT" do
    
    @browser.goto("http://t/core/standards/html401/watir/html/script.html")
    refModal     =  @browser.element(:id,"GOGIDialog").visual_hash
    @browser.element(:id,"link").click
    browserModal = @browser.visual_hash
    refModal.eql?(browserModal)
  end
  
  it "SCRIPT :: type" do
    
    @browser.goto("http://t/core/standards/html401/watir/html/script_type.html")
    refModal     =  @browser.element(:id,"GOGIDialog").visual_hash
    @browser.element(:id,"link").click
    browserModal = @browser.visual_hash
    refModal.eql?(browserModal)
  end
  
  it "SCRIPT :: type 2" do
    @browser.goto("http://t/core/standards/html401/watir/html/script_type_2.html")
    refModal     =  @browser.element(:id,"GOGIDialog").visual_hash
    @browser.element(:id,"link").click
    browserModal = @browser.visual_hash
    refModal.eql?(browserModal)
  end
  
 
  
end



