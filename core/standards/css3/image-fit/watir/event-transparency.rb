######################
# Event transparency #
#####################
require "rubygems"
require "operawatir"

describe "Event transparency" do

  before(:all) do
    @browser = OperaWatir::Browser.new
    @browser.goto("http://t/core/standards/css3/image-fit/watir/event-transparency.xhtml")
  end

  after(:each) do
    @browser.element(:id,"reset-button").click
  end

  it "check if click outside content are swallowed,x16 y6" do
    @browser.element(:id,"div01").click(16,6)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x116 y4" do
    @browser.element(:id,"div01").click(116,4)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed,x92 y120" do
    @browser.element(:id,"div01").click(92,120)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x129 y14" do
    @browser.element(:id,"div01").click(129,14)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x177 y3" do
    @browser.element(:id,"div01").click(177,3)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed,x165 y117" do
    @browser.element(:id,"div01").click(165,117)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x202 y28" do
    @browser.element(:id,"div01").click(202,28)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x245 y3" do
    @browser.element(:id,"div01").click(245,3)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x279 y11" do
    @browser.element(:id,"div01").click(279,11)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x381 y4" do
    @browser.element(:id,"div01").click(381,4)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x360 y164" do
    @browser.element(:id,"div01").click(360,164)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x402 y16" do
    @browser.element(:id,"div01").click(402,16)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x498 y4" do
    @browser.element(:id,"div01").click(498,4)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x484 y119" do
    @browser.element(:id,"div01").click(484,119)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed,x522 y12" do
    @browser.element(:id,"div01").click(522,12)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x619 y3" do
    @browser.element(:id,"div01").click(619,3)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "check if click outside content are swallowed, x590 y115" do
    @browser.element(:id,"div01").click(590,115)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end

  #Image 1

  it "Click between content and border img #1, x25 y15" do
    @browser.element(:id,"div01").click(25,15)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click between content and border img #1, x111 y102" do
    @browser.element(:id,"div01").click(111,102)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click between content and border img #1, x111 y15" do
    @browser.element(:id,"div01").click(111,15)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end


  it "Click on image #1, x39 y29" do
    @browser.element(:id,"div01").click(39,29)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on image #1, x97 y29" do
    @browser.element(:id,"div01").click(97,29)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on image #1, x97 y88" do
    @browser.element(:id,"div01").click(97,88)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on image #1, x39 y88" do
    @browser.element(:id,"div01").click(39,88)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end


  it "click on image #1's border, x116 y68 " do
    @browser.element(:id,"div01").click(116,68) #in between border
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "click on image #1's border, x116 y58" do
    @browser.element(:id,"div01").click(116,58) #on the border
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end

  #Image 2

  it "Click between image and border on image #2, x155 y85" do
    @browser.element(:id,"div01").click(155,85)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "Click between image and border on image #2, x144 y55" do
    @browser.element(:id,"div01").click(144,55)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click between image and border on image #2, x154 y27" do
    @browser.element(:id,"div01").click(154,27)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end

  it "Click on image #2, x156 y45" do
    @browser.element(:id,"div01").click(156,45)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on image #2, x156 y64" do
    @browser.element(:id,"div01").click(156,64)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on image #2, x147 y53" do
    @browser.element(:id,"div01").click(147,53)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on image #2, x162 y53" do
    @browser.element(:id,"div01").click(162,53)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end

  it "click on image #2's border, x183 y68" do
    @browser.element(:id,"div01").click(183,68) #in between border
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "click on image #2's border, x183 y58" do
    @browser.element(:id,"div01").click(183,58) #on the border
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end

  #Image 3

  it "Click between image and border on image #3, x235 y62" do
    @browser.element(:id,"div01").click(235,62)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click between image and border on image #3, x217 y17" do
    @browser.element(:id,"div01").click(217,17)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "Click between image and border on image #3, x243 y98" do
    @browser.element(:id,"div01").click(243,98)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end

  it "Click on image #3, x234 y20" do
    @browser.element(:id,"div01").click(234,20)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "Click on image #3, x221 y33" do
    @browser.element(:id,"div01").click(221,33)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "Click on image #3, x234 y48" do
    @browser.element(:id,"div01").click(234,48)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on image #3, x245 y35" do
    @browser.element(:id,"div01").click(245,35)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end

  it "click on image #3's border, x256 y89" do
    @browser.element(:id,"div01").click(256,89) #in between border
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "click on image #3's border, x256 y106" do
    @browser.element(:id,"div01").click(256,106) #on the border
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end

  #Video 1

  it "Click between image and border on video #1, x295 y66" do
    @browser.element(:id,"div01").click(295,66)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click between image and border on video #1, x332 y42" do
    @browser.element(:id,"div01").click(332,42)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "Click between image and border on video #1, x382 y152" do
    @browser.element(:id,"div01").click(382,152)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end

  it "Click on video #1, x309 y68" do
    @browser.element(:id,"div01").click(309,68)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on video #1, x365 y97" do
    @browser.element(:id,"div01").click(365,97)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on video #1, x366 y69" do
    @browser.element(:id,"div01").click(366,69)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  
  it "click on video #1's border, x386 y74" do
    @browser.element(:id,"div01").click(386,74) #on the border
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "click on video #1's border, x386 y83" do
    @browser.element(:id,"div01").click(386,83) # in between the border
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end

  it "Click between video and controls on video #1, x360 y116" do
    @browser.element(:id,"div01").click(360,116)
    @browser.element(:id,"status").verify_contains("The click went through").should == false

  end


  #Video 2

  it "Click between image and border on video #2, x415 y52" do
    @browser.element(:id,"div01").click(415,52)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click between image and border on video #2,  x459 y23" do
    @browser.element(:id,"div01").click(459,23)
    @browser.element(:id,"status").verify_contains("The click went through").should == true
  end
  it "Click between image and border on video #2, x502 y49" do
    @browser.element(:id,"div01").click(502,49)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end

  it "Click on video #2, x430 y45" do
    @browser.element(:id,"div01").click(430,45)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on video #2, x484 y72" do
    @browser.element(:id,"div01").click(484,72)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on video #2, x431 y70" do
    @browser.element(:id,"div01").click(431,70)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end

  it "click on video #2's border, x506 y49" do
    @browser.element(:id,"div01").click(506,49) #on the border
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "click on video #2's border, x506 y68" do
    @browser.element(:id,"div01").click(506,68) # in between the border
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end

  #Non-replaced content
  it "Click on video non-replaced content, x544 y30" do
    @browser.element(:id,"div01").click(544,30)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on video non-replaced content, x611 y88" do
    @browser.element(:id,"div01").click(611,88)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on video non-replaced content, x607 y24" do
    @browser.element(:id,"div01").click(607,24)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "Click on video non-replaced content, x546 y88" do
    @browser.element(:id,"div01").click(546,88)
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end


  it "click on video non-replaced content's border, x626 y57" do
    @browser.element(:id,"div01").click(626,57) #on the border
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end
  it "click on video non-replaced content's border, x626 y68" do
    @browser.element(:id,"div01").click(626,68) # in between the border
    @browser.element(:id,"status").verify_contains("The click went through").should == false
  end

  after(:all) do
    @browser.quit
  end

end
