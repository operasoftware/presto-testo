require "operawatir/helper"

describe "Video test" do
  it "will show the native video controls" do
    browser.goto "http://t/core/standards/web-apps/media/non-automated/visual/002.html"
    hash1 = browser.element(:selector, "video").visual_hash
    browser.element(:selector, "video").click(100, 100)
    hash2 = browser.element(:selector, "video").visual_hash
    (hash1 == hash2).should == false
  end
end
