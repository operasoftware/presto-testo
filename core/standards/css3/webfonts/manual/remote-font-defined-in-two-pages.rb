unless defined? $browser then
  require "rubygems"
  require "operawatir"
  $browser = OperaWatir::Browser.new
end

describe "automated webfont test cases" do
	it "automated font-face test cases, font face in saved page" do
		$browser.goto "http://t/core/standards/css3/webfonts/smoke/basic-remote-font-test-ttf.html"
		sleep 2
		$browser.goto "http://t/core/standards/css3/webfonts/adhoc/remote-font-defined-in-two-pages.html"
		$browser.take_screenshot("c:\out.png", [ "0x647ead1ebf9464364e421669af1dd2d9" ], 5).should == "0x647ead1ebf9464364e421669af1dd2d9"
	end

  after(:all) do
    $browser.quit
  end

end