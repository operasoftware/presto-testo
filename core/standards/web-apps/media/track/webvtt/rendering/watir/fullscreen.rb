require "operawatir/helper"

describe "Video fullscreen with controls and cues" do

	it "Run test" do
		browser.goto("http://t/core/standards/web-apps/media/track/webvtt/rendering/watir/fullscreen.html")
		browser.element(:id, 'video').click
		hash_test = browser.visual_hash
		browser.goto("http://t/core/standards/web-apps/media/track/webvtt/rendering/watir/fullscreen-ref.html")
		browser.element(:id, 'video').click
		browser.visual_hash.should == hash_test
	end
end
