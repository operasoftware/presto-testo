require "operawatir/helper"

describe "fullscreenElement property" do

	it "Click to requestFullscreen" do
		browser.goto("http://t/core/standards/fullscreen/interactive/dom-fullscreen-element-property.html")
		browser.button(:index, 1).click
	end

	it "Check result" do
		browser.div(:id,'log').value.should include "Pass"
		browser.div(:id,'log').value.should_not include "Fail"
	end
end
