require "operawatir/helper"

describe "Set allowfullscreen attribute on iframe" do

	it "Click to requestFullscreen" do
		browser.goto("http://t/core/standards/fullscreen/interactive/dom-allowfullscreen-attribute-set.html")
		browser.driver.switchTo.frame(0)
		browser.button(:index, 1).click
	end

	it "Check result" do
		browser.driver.switchTo.defaultContent
		browser.div(:id,'log').value.should include "Pass"
		browser.div(:id,'log').value.should_not include "Fail"
	end
end
