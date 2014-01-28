#######################################################################
#  AUTHOR:  KARL W. FROGNER                                           #
#    DATE:  18. MARCH 2010                                            #
#COMMENTS:  The watir test for image mapping                          #
#                                                                     #
#######################################################################


require "operawatir/helper"

describe "img isMap" do
  before(:all) do
    # Preload support page, so it loads swiftly during testing.
    browser.goto("http://t/core/standards/html401/watir/html/support/pass.html")
  end

  before(:each) do
    browser.goto("http://t/core/standards/html401/watir/html/usemap.html")
  end

  it "x3 y3 in DIV id4" do
    browser.element(:id,"img").click(3,3)
    browser.text.include?("pass - OK").should == false
  end
  it "x42 y92 in DIV id4" do
    browser.element(:id,"img").click(42,92)
   browser.text.include?("pass - OK").should == false
  end
  it "x81 y151 in DIV id4" do
    browser.element(:id,"img").click(81,151)
   browser.text.include?("pass - OK").should == false
  end
  it "x150 y178 in DIV id4" do
    browser.element(:id,"img").click(150,178)
   browser.text.include?("pass - OK").should == false
  end
  it "x93 y227 in DIV id4" do
    browser.element(:id,"img").click(93,227)
   browser.text.include?("pass - OK").should == false
  end
  it "x62 y197  in DIV id4" do
    browser.element(:id,"img").click(62,197)
   browser.text.include?("pass - OK").should == false
  end
  it "x181 y25 in DIV id4" do
    browser.element(:id,"img").click(181,25)
   browser.text.include?("pass - OK").should == false
  end
  it "x165 y6 in DIV id4" do
    browser.element(:id,"img").click(165,6)
   browser.text.include?("pass - OK").should == false
  end
  it "x95 y13 in DIV id4" do
    browser.element(:id,"img").click(95,13)
   browser.text.include?("pass - OK").should == false
  end
  it "x115 y251 in DIV id4" do
    browser.element(:id,"img").click(115,251)
   browser.text.include?("pass - OK").should == false
  end
  it "x227 y247  in DIV id4" do
    browser.element(:id,"img").click(227,247)
   browser.text.include?("pass - OK").should == false
  end
  it "x247 y2 in DIV id4" do
    browser.element(:id,"img").click(247,2)
   browser.text.include?("pass - OK").should == false
  end
  it "x73 y281 in DIV id4" do
    browser.element(:id,"img").click(73,281)
   browser.text.include?("pass - OK").should == false
  end
  it "x41 y8 in DIV id4" do
    browser.element(:id,"img").click(41,8)
   browser.text.include?("pass - OK").should == false
  end
  it "x16 y19 in DIV id4" do
    browser.element(:id,"img").click(16,19)
    browser.text.include?("pass - OK").should == true
  end
  it "x44 y48  in DIV id4" do
    browser.element(:id,"img").click(44,48)
    browser.text.include?("pass - OK").should == true
  end
  it "x74 y78 in DIV id4" do
    browser.element(:id,"img").click(74,78)
    browser.text.include?("pass - OK").should == true
  end
  it "x73 y19 in DIV id4" do
    browser.element(:id,"img").click(73,19)
    browser.text.include?("pass - OK").should == true
  end
  it "x19 y76 in DIV id4" do
    browser.element(:id,"img").click(19,76)
    browser.text.include?("pass - OK").should == true
  end
  it "x104 y8 in DIV id4" do
    browser.element(:id,"img").click(104,8)
    browser.text.include?("pass - OK").should == true
  end
  it "x156 y8 in DIV id4" do
    browser.element(:id,"img").click(156,8)
    browser.text.include?("pass - OK").should == true
  end
  it "x105 y16 in DIV id4" do
    browser.element(:id,"img").click(105,16)
    browser.text.include?("pass - OK").should == true
  end
  it "x92 y23 in DIV id4" do
    browser.element(:id,"img").click(92,23)
    browser.text.include?("pass - OK").should == true
  end
  it "x95 y55 in DIV id4" do
    browser.element(:id,"img").click(95,55)
    browser.text.include?("pass - OK").should == true
  end
  it "x132 y92 in DIV id4" do
    browser.element(:id,"img").click(132,92)
    browser.text.include?("pass - OK").should == true
  end
  it "x92 y112  in DIV id4" do
    browser.element(:id,"img").click(92,112)
    browser.text.include?("pass - OK").should == true
  end
  it "x9 y196 in DIV id4" do
    browser.element(:id,"img").click(9,196)
    browser.text.include?("pass - OK").should == true
  end
  it "x10 y214 in DIV id4" do
    browser.element(:id,"img").click(10,214)
    browser.text.include?("pass - OK").should == true
  end
  it "x72 y270  in DIV id4" do
    browser.element(:id,"img").click(72,270)
    browser.text.include?("pass - OK").should == true
  end
  it "x260 y276 in DIV id4" do
    browser.element(:id,"img").click(260,276)
    browser.text.include?("pass - OK").should == true
  end
  it "x198 y245 in DIV id4" do
    browser.element(:id,"img").click(198,245)
    browser.text.include?("pass - OK").should == true
  end
  it "x244 y178 in DIV id4" do
    browser.element(:id,"img").click(244,178)
    browser.text.include?("pass - OK").should == true
  end
  it "x257 y98 in DIV id4" do
    browser.element(:id,"img").click(257,98)
    browser.text.include?("pass - OK").should == true
  end
  it "x257 y8 in DIV id4" do
    browser.element(:id,"img").click(257,8)
    browser.text.include?("pass - OK").should == true
  end
  it "x215 y102 in DIV id4" do
    browser.element(:id,"img").click(215,102)
    browser.text.include?("pass - OK").should == true
  end
  it "x156 y20 in DIV id4" do
    browser.element(:id,"img").click(156,20)
    browser.text.include?("pass - OK").should == true
  end
  it "x126 y51 in DIV id4" do
    browser.element(:id,"img").click(126,51)
    browser.text.include?("pass - OK").should == true
  end
  it "x156 y81 in DIV id4" do
    browser.element(:id,"img").click(156,81)
    browser.text.include?("pass - OK").should == true
  end
  it "x156 y53 in DIV id4" do
    browser.element(:id,"img").click(156,53)
    browser.text.include?("pass - OK").should == true
  end
  it "x123 y103 in DIV id4" do
    browser.element(:id,"img").click(123,103)
    browser.text.include?("pass - OK").should == true
  end
  it "x185 y165 in DIV id4" do
    browser.element(:id,"img").click(185,165)
    browser.text.include?("pass - OK").should == true
  end
  it "x126 y166 in DIV id4" do
    browser.element(:id,"img").click(126,166)
    browser.text.include?("pass - OK").should == true
  end
  it "x183 y104 in DIV id4" do
    browser.element(:id,"img").click(183,104)
    browser.text.include?("pass - OK").should == true
  end

  it " x125 y257 in DIV id4" do
    browser.element(:id,"img").click(125,257)
    browser.text.include?("pass - OK").should == true
  end
  it "x157 y226 in DIV id4 " do
    browser.element(:id,"img").click(157,226)
    browser.text.include?("pass - OK").should == true
  end
  it "228x 224y in DIV id4" do
    browser.element(:id,"img").click(228,224)
    browser.text.include?("pass - OK").should == true
  end
  it "284x 224y in DIV id4" do
    browser.element(:id,"img").click(284,224)
    browser.text.include?("pass - OK").should == true
  end
  it "x258 y256 in DIV id4" do
    browser.element(:id,"img").click(258,256)
    browser.text.include?("pass - OK").should == true
  end
  it "x255 y227 in DIV id4" do
    browser.element(:id,"img").click(255,227)
    browser.text.include?("pass - OK").should == true
  end
  it "x223 y128 in DIV id4" do
    browser.element(:id,"img").click(223,128)
    browser.text.include?("pass - OK").should == true
  end
  it "x264 y109 in DIV id4" do
    browser.element(:id,"img").click(264,109)
    browser.text.include?("pass - OK").should == true
  end
  it "x265 y166 in DIV id4" do
    browser.element(:id,"img").click(265,166)
    browser.text.include?("pass - OK").should == true
  end
  it "x263 y139 in DIV id4" do
    browser.element(:id,"img").click(263,139)
    browser.text.include?("pass - OK").should == true
  end

  it "x259 y20 in DIV id4" do
    browser.element(:id,"img").click(259,20)
    browser.text.include?("pass - OK").should == true
  end
  it "x259 y78 in DIV id4" do
    browser.element(:id,"img").click(259,78)
    browser.text.include?("pass - OK").should == true
  end
  it "x262 y52 in DIV id4" do
    browser.element(:id,"img").click(262,52)
    browser.text.include?("pass - OK").should == true
  end
  it "x28 y227 in DIV id4" do
    browser.element(:id,"img").click(28,227)
    browser.text.include?("pass - OK").should == true
  end
  it "x59 y256 in DIV id4" do
    browser.element(:id,"img").click(59,256)
    browser.text.include?("pass - OK").should == true
  end

  after(:all)do
    browser.quit
  end
end
