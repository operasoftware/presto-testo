#####################################################
#AUTHOR:      Karl W. Frogner                       #
#CREATED:     17.02.2010                            #
#####################################################

require "rubygems"
require "operawatir"

describe "HTML Functional " do

  before(:all) do
    $browser = OperaWatir::Browser.new
    Time.new
    $browser.goto("http://t/core/standards/html401/watir/html/htmlfunctional.html")
  end

  after(:each) do
    $browser.goto("http://t/core/standards/html401/watir/html/htmlfunctional.html")
  end

  it "x3 y3 in DIV id4" do
    $browser.element(:id,"id4").click(3,3)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x42 y92 in DIV id4" do
    $browser.element(:id,"id4").click(42,92)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x81 y151 in DIV id4" do
    $browser.element(:id,"id4").click(81,151)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x150 y178 in DIV id4" do
    $browser.element(:id,"id4").click(150,178)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x93 y227 in DIV id4" do
    $browser.element(:id,"id4").click(93,227)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x62 y197  in DIV id4" do
    $browser.element(:id,"id4").click(62,197)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x181 y25 in DIV id4" do
    $browser.element(:id,"id4").click(181,25)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x165 y6 in DIV id4" do
    $browser.element(:id,"id4").click(165,6)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x95 y13 in DIV id4" do
    $browser.element(:id,"id4").click(95,13)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x115 y251 in DIV id4" do
    $browser.element(:id,"id4").click(115,251)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x227 y247  in DIV id4" do
    $browser.element(:id,"id4").click(227,247)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x247 y2 in DIV id4" do
    $browser.element(:id,"id4").click(247,2)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x73 y281 in DIV id4" do
    $browser.element(:id,"id4").click(73,281)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x41 y8 in DIV id4" do
    $browser.element(:id,"id4").click(41,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x16 y19 in DIV id4" do
    $browser.element(:id,"id4").click(16,19)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x44 y48  in DIV id4" do
    $browser.element(:id,"id4").click(44,48)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x74 y78 in DIV id4" do
    $browser.element(:id,"id4").click(74,78)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x73 y19 in DIV id4" do
    $browser.element(:id,"id4").click(73,19)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x19 y76 in DIV id4" do
    $browser.element(:id,"id4").click(19,76)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x104 y8 in DIV id4" do
    $browser.element(:id,"id4").click(104,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y8 in DIV id4" do
    $browser.element(:id,"id4").click(156,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x105 y16 in DIV id4" do
    $browser.element(:id,"id4").click(105,16)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x92 y23 in DIV id4" do
    $browser.element(:id,"id4").click(92,23)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x95 y55 in DIV id4" do
    $browser.element(:id,"id4").click(95,55)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x132 y92 in DIV id4" do
    $browser.element(:id,"id4").click(132,92)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x92 y112  in DIV id4" do
    $browser.element(:id,"id4").click(92,112)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x9 y196 in DIV id4" do
    $browser.element(:id,"id4").click(9,196)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x10 y214 in DIV id4" do
    $browser.element(:id,"id4").click(10,214)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x72 y270  in DIV id4" do
    $browser.element(:id,"id4").click(72,270)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x260 y276 in DIV id4" do
    $browser.element(:id,"id4").click(260,276)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x198 y245 in DIV id4" do
    $browser.element(:id,"id4").click(198,245)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x244 y178 in DIV id4" do
    $browser.element(:id,"id4").click(244,178)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x257 y98 in DIV id4" do
    $browser.element(:id,"id4").click(257,98)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x257 y8 in DIV id4" do
    $browser.element(:id,"id4").click(257,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x215 y102 in DIV id4" do
    $browser.element(:id,"id4").click(215,102)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y20 in DIV id4" do
    $browser.element(:id,"id4").click(156,20)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x126 y51 in DIV id4" do
    $browser.element(:id,"id4").click(126,51)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y81 in DIV id4" do
    $browser.element(:id,"id4").click(156,81)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y53 in DIV id4" do
    $browser.element(:id,"id4").click(156,53)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x123 y103 in DIV id4" do
    $browser.element(:id,"id4").click(123,103)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x185 y165 in DIV id4" do
    $browser.element(:id,"id4").click(185,165)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x126 y166 in DIV id4" do
    $browser.element(:id,"id4").click(126,166)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x183 y104 in DIV id4" do
    $browser.element(:id,"id4").click(183,104)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it " x125 y257 in DIV id4" do
    $browser.element(:id,"id4").click(125,257)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x157 y226 in DIV id4 " do
    $browser.element(:id,"id4").click(157,226)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "228x 224y in DIV id4" do
    $browser.element(:id,"id4").click(228,224)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "284x 224y in DIV id4" do
    $browser.element(:id,"id4").click(284,224)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x258 y256 in DIV id4" do
    $browser.element(:id,"id4").click(258,256)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x255 y227 in DIV id4" do
    $browser.element(:id,"id4").click(255,227)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x223 y128 in DIV id4" do
    $browser.element(:id,"id4").click(223,128)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x264 y109 in DIV id4" do
    $browser.element(:id,"id4").click(264,109)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x265 y166 in DIV id4" do
    $browser.element(:id,"id4").click(265,166)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x263 y139 in DIV id4" do
    $browser.element(:id,"id4").click(263,139)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it "x259 y20 in DIV id4" do
    $browser.element(:id,"id4").click(259,20)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x259 y78 in DIV id4" do
    $browser.element(:id,"id4").click(259,78)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x262 y52 in DIV id4" do
    $browser.element(:id,"id4").click(262,52)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x28 y227 in DIV id4" do
    $browser.element(:id,"id4").click(28,227)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x59 y256 in DIV id4" do
    $browser.element(:id,"id4").click(59,256)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end


  it "x3 y3 in DIV id3" do
    $browser.element(:id,"id3").click(3,3)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x42 y92 in DIV id3" do
    $browser.element(:id,"id3").click(42,92)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x81 y151 in DIV id3" do
    $browser.element(:id,"id3").click(81,151)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x150 y178 in DIV id3" do
    $browser.element(:id,"id3").click(150,178)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x93 y227 in DIV id3" do
    $browser.element(:id,"id3").click(93,227)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x62 y197  in DIV id3" do
    $browser.element(:id,"id3").click(62,197)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it "x181 y25 in DIV id3" do
    $browser.element(:id,"id3").click(181,25)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x165 y6 in DIV id3" do
    $browser.element(:id,"id3").click(165,6)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x95 y13 in DIV id3" do
    $browser.element(:id,"id3").click(95,13)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x115 y251 in DIV id3" do
    $browser.element(:id,"id3").click(115,251)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x227 y247  in DIV id3" do
    $browser.element(:id,"id3").click(227,247)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x247 y2 in DIV id3" do
    $browser.element(:id,"id3").click(247,2)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x73 y281 in DIV id3" do
    $browser.element(:id,"id3").click(73,281)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x41 y8 in DIV id3" do
    $browser.element(:id,"id3").click(41,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x16 y19 in DIV id3" do
    $browser.element(:id,"id3").click(16,19)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x44 y48  in DIV id3" do
    $browser.element(:id,"id3").click(44,48)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x74 y78 in DIV id3" do
    $browser.element(:id,"id3").click(74,78)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x73 y19 in DIV id3" do
    $browser.element(:id,"id3").click(73,19)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x19 y76 in DIV id3" do
    $browser.element(:id,"id3").click(19,76)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x104 y8 in DIV id3" do
    $browser.element(:id,"id3").click(104,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y8 in DIV id3" do
    $browser.element(:id,"id3").click(156,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x105 y16 in DIV id3" do
    $browser.element(:id,"id3").click(105,16)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x92 y23 in DIV id3" do
    $browser.element(:id,"id3").click(92,23)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x95 y55 in DIV id3" do
    $browser.element(:id,"id3").click(95,55)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x132 y92 in DIV id3" do
    $browser.element(:id,"id3").click(132,92)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x92 y112  in DIV id3" do
    $browser.element(:id,"id3").click(92,112)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x9 y196 in DIV id3" do
    $browser.element(:id,"id3").click(9,196)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x10 y214 in DIV id3" do
    $browser.element(:id,"id3").click(10,214)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x72 y270  in DIV id3" do
    $browser.element(:id,"id3").click(72,270)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x260 y276 in DIV id3" do
    $browser.element(:id,"id3").click(260,276)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x198 y245 in DIV id3" do
    $browser.element(:id,"id3").click(198,245)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x244 y178 in DIV id3" do
    $browser.element(:id,"id3").click(244,178)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x257 y98 in DIV id3" do
    $browser.element(:id,"id3").click(257,98)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x257 y8 in DIV id3" do
    $browser.element(:id,"id3").click(257,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x215 y102 in DIV id3" do
    $browser.element(:id,"id3").click(215,102)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y20 in DIV id3" do
    $browser.element(:id,"id3").click(156,20)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x126 y51 in DIV id3" do
    $browser.element(:id,"id3").click(126,51)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y81 in DIV id3" do
    $browser.element(:id,"id3").click(156,81)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y53 in DIV id3" do
    $browser.element(:id,"id3").click(156,53)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x123 y103 in DIV id3" do
    $browser.element(:id,"id3").click(123,103)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x185 y165 in DIV id3" do
    $browser.element(:id,"id3").click(185,165)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x126 y166 in DIV id3" do
    $browser.element(:id,"id3").click(126,166)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x183 y104 in DIV id3" do
    $browser.element(:id,"id3").click(183,104)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it " x125 y257 in DIV id3" do
    $browser.element(:id,"id3").click(125,257)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x157 y226 in DIV id3 " do
    $browser.element(:id,"id3").click(157,226)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "228x 224y in DIV id3" do
    $browser.element(:id,"id3").click(228,224)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "284x 224y in DIV id3" do
    $browser.element(:id,"id3").click(284,224)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x258 y256 in DIV id3" do
    $browser.element(:id,"id3").click(258,256)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x255 y227 in DIV id3" do
    $browser.element(:id,"id3").click(255,227)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x223 y128 in DIV id3" do
    $browser.element(:id,"id3").click(223,128)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x264 y109 in DIV id3" do
    $browser.element(:id,"id3").click(264,109)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x265 y166 in DIV id3" do
    $browser.element(:id,"id3").click(265,166)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x263 y139 in DIV id3" do
    $browser.element(:id,"id3").click(263,139)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it "x259 y20 in DIV id3" do
    $browser.element(:id,"id3").click(259,20)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x259 y78 in DIV id3" do
    $browser.element(:id,"id3").click(259,78)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x262 y52 in DIV id3" do
    $browser.element(:id,"id3").click(262,52)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x28 y227 in DIV id3" do
    $browser.element(:id,"id3").click(28,227)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x59 y256 in DIV id3" do
    $browser.element(:id,"id3").click(59,256)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end



  it "x3 y3 in DIV id2" do
    $browser.element(:id,"id2").click(3,3)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it "x42 y92 in DIV id2" do
    $browser.element(:id,"id2").click(42,92)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x81 y151 in DIV id2" do
    $browser.element(:id,"id2").click(81,151)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x150 y178 in DIV id2" do
    $browser.element(:id,"id2").click(150,178)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x93 y227 in DIV id2" do
    $browser.element(:id,"id2").click(93,227)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x62 y197  in DIV id2" do
    $browser.element(:id,"id2").click(62,197)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it "x181 y25 in DIV id2" do
    $browser.element(:id,"id2").click(181,25)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x165 y6 in DIV id2" do
    $browser.element(:id,"id2").click(165,6)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x95 y13 in DIV id2" do
    $browser.element(:id,"id2").click(95,13)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x115 y251 in DIV id2" do
    $browser.element(:id,"id2").click(115,251)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x227 y247  in DIV id2" do
    $browser.element(:id,"id2").click(227,247)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x247 y2 in DIV id2" do
    $browser.element(:id,"id2").click(247,2)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x73 y281 in DIV id2" do
    $browser.element(:id,"id2").click(73,281)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x41 y8 in DIV id2" do
    $browser.element(:id,"id2").click(41,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x16 y19 in DIV id2" do
    $browser.element(:id,"id2").click(16,19)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x44 y48  in DIV id2" do
    $browser.element(:id,"id2").click(44,48)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x74 y78 in DIV id2" do
    $browser.element(:id,"id2").click(74,78)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x73 y19 in DIV id2" do
    $browser.element(:id,"id2").click(73,19)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x19 y76 in DIV id2" do
    $browser.element(:id,"id2").click(19,76)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x104 y8 in DIV id2" do
    $browser.element(:id,"id2").click(104,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y8 in DIV id2" do
    $browser.element(:id,"id2").click(156,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x105 y16 in DIV id2" do
    $browser.element(:id,"id2").click(105,16)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x92 y23 in DIV id2" do
    $browser.element(:id,"id2").click(92,23)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x95 y55 in DIV id2" do
    $browser.element(:id,"id2").click(95,55)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x132 y92 in DIV id2" do
    $browser.element(:id,"id2").click(132,92)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x92 y112  in DIV id2" do
    $browser.element(:id,"id2").click(92,112)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x9 y196 in DIV id2" do
    $browser.element(:id,"id2").click(9,196)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x10 y214 in DIV id2" do
    $browser.element(:id,"id2").click(10,214)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x72 y270  in DIV id2" do
    $browser.element(:id,"id2").click(72,270)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x260 y276 in DIV id2" do
    $browser.element(:id,"id2").click(260,276)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x198 y245 in DIV id2" do
    $browser.element(:id,"id2").click(198,245)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x244 y178 in DIV id2" do
    $browser.element(:id,"id2").click(244,178)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x257 y98 in DIV id2" do
    $browser.element(:id,"id2").click(257,98)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x257 y8 in DIV id2" do
    $browser.element(:id,"id2").click(257,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x215 y102 in DIV id2" do
    $browser.element(:id,"id2").click(215,102)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y20 in DIV id2" do
    $browser.element(:id,"id2").click(156,20)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x126 y51 in DIV id2" do
    $browser.element(:id,"id2").click(126,51)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y81 in DIV id2" do
    $browser.element(:id,"id2").click(156,81)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y53 in DIV id2" do
    $browser.element(:id,"id2").click(156,53)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x123 y103 in DIV id2" do
    $browser.element(:id,"id2").click(123,103)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x185 y165 in DIV id2" do
    $browser.element(:id,"id2").click(185,165)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x126 y166 in DIV id2" do
    $browser.element(:id,"id2").click(126,166)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x183 y104 in DIV id2" do
    $browser.element(:id,"id2").click(183,104)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it " x125 y257 in DIV id2" do
    $browser.element(:id,"id2").click(125,257)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x157 y226 in DIV id2 " do
    $browser.element(:id,"id2").click(157,226)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "228x 224y in DIV id2" do
    $browser.element(:id,"id2").click(228,224)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "284x 224y in DIV id2" do
    $browser.element(:id,"id2").click(284,224)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x258 y256 in DIV id2" do
    $browser.element(:id,"id2").click(258,256)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x255 y227 in DIV id2" do
    $browser.element(:id,"id2").click(255,227)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x223 y128 in DIV id2" do
    $browser.element(:id,"id2").click(223,128)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x264 y109 in DIV id2" do
    $browser.element(:id,"id2").click(264,109)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x265 y166 in DIV id2" do
    $browser.element(:id,"id2").click(265,166)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x263 y139 in DIV id2" do
    $browser.element(:id,"id2").click(263,139)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it "x259 y20 in DIV id2" do
    $browser.element(:id,"id2").click(259,20)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x259 y78 in DIV id2" do
    $browser.element(:id,"id2").click(259,78)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x262 y52 in DIV id2" do
    $browser.element(:id,"id2").click(262,52)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x28 y227 in DIV id2" do
    $browser.element(:id,"id2").click(28,227)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x59 y256 in DIV id2" do
    $browser.element(:id,"id2").click(59,256)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it "x3 y3 in DIV id1" do
    $browser.element(:id,"id1").click(3,3)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it "x42 y92 in DIV id1" do
    $browser.element(:id,"id1").click(42,92)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x81 y151 in DIV id1" do
    $browser.element(:id,"id1").click(81,151)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x150 y178 in DIV id1" do
    $browser.element(:id,"id1").click(150,178)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x93 y227 in DIV id1" do
    $browser.element(:id,"id1").click(93,227)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x62 y197  in DIV id1" do
    $browser.element(:id,"id1").click(62,197)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it "x181 y25 in DIV id1" do
    $browser.element(:id,"id1").click(181,25)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x165 y6 in DIV id1" do
    $browser.element(:id,"id1").click(165,6)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x95 y13 in DIV id1" do
    $browser.element(:id,"id1").click(95,13)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x115 y251 in DIV id1" do
    $browser.element(:id,"id1").click(115,251)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x227 y247  in DIV id1" do
    $browser.element(:id,"id1").click(227,247)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x247 y2 in DIV id1" do
    $browser.element(:id,"id1").click(247,2)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x73 y281 in DIV id1" do
    $browser.element(:id,"id1").click(73,281)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x41 y8 in DIV id1" do
    $browser.element(:id,"id1").click(41,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x16 y19 in DIV id1" do
    $browser.element(:id,"id1").click(16,19)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x44 y48  in DIV id1" do
    $browser.element(:id,"id1").click(44,48)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x74 y78 in DIV id1" do
    $browser.element(:id,"id1").click(74,78)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x73 y19 in DIV id1" do
    $browser.element(:id,"id1").click(73,19)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x19 y76 in DIV id1" do
    $browser.element(:id,"id1").click(19,76)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x104 y8 in DIV id1" do
    $browser.element(:id,"id1").click(104,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y8 in DIV id1" do
    $browser.element(:id,"id1").click(156,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x105 y16 in DIV id1" do
    $browser.element(:id,"id1").click(105,16)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x92 y23 in DIV id1" do
    $browser.element(:id,"id1").click(92,23)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x95 y55 in DIV id1" do
    $browser.element(:id,"id1").click(95,55)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x132 y92 in DIV id1" do
    $browser.element(:id,"id1").click(132,92)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x92 y112  in DIV id1" do
    $browser.element(:id,"id1").click(92,112)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x9 y196 in DIV id1" do
    $browser.element(:id,"id1").click(9,196)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x10 y214 in DIV id1" do
    $browser.element(:id,"id1").click(10,214)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x72 y270  in DIV id1" do
    $browser.element(:id,"id1").click(72,270)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x260 y276 in DIV id1" do
    $browser.element(:id,"id1").click(260,276)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x198 y245 in DIV id1" do
    $browser.element(:id,"id1").click(198,245)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x244 y178 in DIV id1" do
    $browser.element(:id,"id1").click(244,178)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x257 y98 in DIV id1" do
    $browser.element(:id,"id1").click(257,98)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x257 y8 in DIV id1" do
    $browser.element(:id,"id1").click(257,8)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x215 y102 in DIV id1" do
    $browser.element(:id,"id1").click(215,102)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y20 in DIV id1" do
    $browser.element(:id,"id1").click(156,20)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x126 y51 in DIV id1" do
    $browser.element(:id,"id1").click(126,51)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y81 in DIV id1" do
    $browser.element(:id,"id1").click(156,81)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x156 y53 in DIV id1" do
    $browser.element(:id,"id1").click(156,53)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x123 y103 in DIV id1" do
    $browser.element(:id,"id1").click(123,103)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x185 y165 in DIV id1" do
    $browser.element(:id,"id1").click(185,165)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x126 y166 in DIV id1" do
    $browser.element(:id,"id1").click(126,166)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x183 y104 in DIV id1" do
    $browser.element(:id,"id1").click(183,104)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it " x125 y257 in DIV id1" do
    $browser.element(:id,"id1").click(125,257)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x157 y226 in DIV id1 " do
    $browser.element(:id,"id1").click(157,226)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "228x 224y in DIV id1" do
    $browser.element(:id,"id1").click(228,224)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "284x 224y in DIV id1" do
    $browser.element(:id,"id1").click(284,224)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x258 y256 in DIV id1" do
    $browser.element(:id,"id1").click(258,256)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x255 y227 in DIV id1" do
    $browser.element(:id,"id1").click(255,227)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x223 y128 in DIV id1" do
    $browser.element(:id,"id1").click(223,128)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x264 y109 in DIV id1" do
    $browser.element(:id,"id1").click(264,109)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x265 y166 in DIV id1" do
    $browser.element(:id,"id1").click(265,166)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x263 y139 in DIV id1" do
    $browser.element(:id,"id1").click(263,139)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end

  it "x259 y20 in DIV id1" do
    $browser.element(:id,"id1").click(259,20)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x259 y78 in DIV id1" do
    $browser.element(:id,"id1").click(259,78)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x262 y52 in DIV id1" do
    $browser.element(:id,"id1").click(262,52)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x28 y227 in DIV id1" do
    $browser.element(:id,"id1").click(28,227)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end
  it "x59 y256 in DIV id1" do
    $browser.element(:id,"id1").click(59,256)
	$browser.element(:id,"status").verify_contains("pass - OK").should == true

  end



  after(:all)do
    $browser.quit
  end

end
