require "operawatir/helper"

describe "Overriding styles specified by the :fullscreen selector" do

	it "Click to requestFullscreen" do
		browser.goto("http://t/core/standards/fullscreen/interactive/layout-fullscreen-style-inheritance.html")
		browser.link(:index, 1).click
	end

	it "Check result" do
		browser.div(:id,'log').value.should include "Pass"
		browser.div(:id,'log').value.should_not include "Fail"
	end
end
