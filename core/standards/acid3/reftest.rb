require "operawatir/helper"

describe "The Acid 3 test" do
    it "should match its reference rendering" do
        browser.goto("http://t/core/standards/acid3/test/index.html")
	sleep(10)
        test = browser.visual_hash
        browser.goto("http://t/core/standards/acid3/test/reference.html")
        reference = browser.visual_hash
        test.should == reference
    end
end
