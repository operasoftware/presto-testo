require "operawatir/helper"

describe "Overflow hidden on fullscreen ancestor's root" do

	it "Click to requestFullscreen" do
		browser.goto("http://t/core/standards/fullscreen/interactive/layout-styles-root.html")
		browser.link(:index, 1).click
	end

	it "Check result" do
		browser.div(:id,'log').value.should include "Pass"
		browser.div(:id,'log').value.should_not include "Fail"
	end
end
