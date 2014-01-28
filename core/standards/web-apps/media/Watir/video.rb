require "operawatir/helper"

describe "video element test" do
  it "Confirm that video has started" do
    browser.goto("http://t/core/standards/web-apps/media/Watir/video.html")
    browser.execute_script(<<-SCRIPT
        var video = document.getElementById('video1');
        video.controls = false;
        video.play();
      SCRIPT
    )

    #compares hashes right after the video has started
    browser.element(:id,"video1").visual_hash.should == browser.element(:id,"img1").visual_hash
  end

  it "Confirm video after 2 sec" do
    browser.execute_script("var img1 = document.getElementById('img1');img1.parentNode.removeChild(img1)")

    #compares hashes after 2 seconds playtime
    sleep(2)
    browser.element(:id,"video1").visual_hash.should == browser.element(:id,"img2").visual_hash
  end

  it "Confirm video after 4 sec" do
    browser.execute_script("var img2 = document.getElementById('img2');img2.parentNode.removeChild(img2)")

    #compares hashes after 4 seconds playtime
    sleep(2)
    browser.element(:id,"video1").visual_hash.should == browser.element(:id,"img3").visual_hash
  end

  it "confirm video after 6 sec" do
    browser.execute_script("var img3 = document.getElementById('img3');img3.parentNode.removeChild(img3)")

    #compares hashes after 6 seconds playtime
    sleep(2)
    browser.element(:id,"video1").visual_hash.should == browser.element(:id,"img4").visual_hash
  end
end