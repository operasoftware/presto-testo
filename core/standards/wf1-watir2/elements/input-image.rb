######################
# input type="image" #
######################

require "operawatir/helper"

describe "input type=image" do
  # input-image
  it "Click image button, with image" do
    browser.goto files+"input-image-001.html"
    browser.button(:id, "test").compare_hash(browser.image(:id, "reference")).should == true
    browser.button(:id, "test").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Click image button, without image" do
    browser.goto files+"input-image-002.html"
    pending("This test must be checked, but save_screenshot() method is missing in recent OperaWatir builds.")
    browser.button(:id, "test").compare_hash(browser.element(:id, "reference")).should == true
    browser.button(:id, "test").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Image type, image/jpeg" do
    browser.goto files+"input-image-003.html"
    browser.button(:id, "test").compare_hash(browser.image(:id, "reference")).should == true
  end

  it "Image type, image/svg+xml" do
    browser.goto files+"input-image-004.html"
    browser.button(:id, "test").compare_hash(browser.image(:id, "reference")).should == true
  end

  it "Image type, image/x-icon" do
    browser.goto files+"input-image-005.html"
    browser.button(:id, "test").compare_hash(browser.image(:id, "reference")).should == true
  end

  it "Image type, image/gif" do
    browser.goto files+"input-image-006.html"
    browser.button(:id, "test").compare_hash(browser.image(:id, "reference")).should == true
  end

  it "Image type, image/png" do
    browser.goto files+"input-image-007.html"
    browser.button(:id, "test").compare_hash(browser.image(:id, "reference")).should == true
  end

  it "Image type, image/bmp" do
    browser.goto files+"input-image-008.html"
    browser.button(:id, "test").compare_hash(browser.image(:id, "reference")).should == true
  end

  it "Different image sizes" do
    browser.goto files+"input-image-009.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Multiple unique image buttons in the same form" do
    browser.goto files+"input-image-010.html"
    browser.button(:name, "image2").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Multiple unique image buttons in separate forms" do
    browser.goto files+"input-image-011.html"
    browser.button(:name, "image2").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Multiple duplicate image buttons in the same form" do
    browser.goto files+"input-image-012.html"
    browser.button(:name, "image").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Multiple duplicate image buttons in separate forms" do
    browser.goto files+"input-image-013.html"
    browser.button(:id, "second_button").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Invalid size attribute" do
    browser.goto files+"input-image-014.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Invalid readonly attribute" do
    browser.goto files+"input-image-015.html"
    browser.button(:name, "test").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Value of image button available in DOM" do
    browser.goto files+"input-image-016.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  # input-image-value
  
  # FIXME: It this test valid?
  it "Standard value through GET" do
    browser.goto files+"input-image-value-001.html"
    browser.button(:name, "test").click
    browser.text.include?("Result: PASS").should == true
  end

  # FIXME: Is this test valid?
  it "Standard value through POST" do
    browser.goto files+"input-image-value-002.html"
    browser.button(:name, "test").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Alternate value through GET" do
    browser.goto files+"input-image-value-003.html"
    browser.button(:name, "test").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Alternate value through POST" do
    browser.goto files+"input-image-value-004.html"
    browser.button(:name, "test").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Another element inside value" do
    browser.goto files+"input-image-value-005.html"
    browser.button(:name, "test").verify_contains("<div id='test2'>foobar</div>").should == true
    browser.div(:id, "test2").exists?.should == false
    browser.button(:name, "test").click
    browser.text.include?("You typed: [<div id=\'test2\'>foobar</div>]").should == true
  end

  it "Empty value" do
    browser.goto files+"input-image-value-006.html"
    browser.button(:name, "test").click
    browser.text.include?("Result: PASS").should == true
  end

  it "i18n support in value" do
    browser.goto files+"input-image-value-007.html"
    browser.button(:name, "test").click
    browser.text.include?("You typed: [Færøyene Москва]").should == true
  end

  # input-image-disabled
  it "disabled" do
    browser.goto files+"input-image-disabled-001.html"
    browser.button(:name, "test").click_no_wait
    browser.text.include?("Nothing should happen.").should == true
  end

  it "disabled variable variation" do
    browser.goto files+"input-image-disabled-002.html"
    browser.button(:name, "test").click_no_wait
    browser.text.include?("Nothing should happen.").should == true
  end

  it "disabled variable variation 2" do
    browser.goto files+"input-image-disabled-003.html"
    browser.button(:name, "test").click_no_wait
    browser.text.include?("Nothing should happen.").should == true
  end

  it "Invalid disabled" do
    browser.goto files+"input-image-disabled-004.html"
    browser.button(:name, "test").click_no_wait
    browser.text.include?("Nothing should happen.").should == true
  end

  it "Value of disabled field available in DOM" do
    browser.goto files+"input-image-disabled-005.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  # input-image-keys
  it "accesskey" do
    pending "Awaiting 'Enter access key mode' action support in gogi (WTR-78, CORE-22015)." do
      browser.goto files+"input-image-keys-001.html"
      browser.opera_action "Enter access key mode"
      browser.keys.send "o"
      browser.opera_action "Leave access key mode"
      sleep 1
      browser.text.include?("Result: PASS").should == true
    end
  end

  it "tabindex" do
    browser.goto files+"input-image-keys-002.html"
    3.times { browser.keys.send :Tab }
    browser.keys.send :Enter
    sleep 1
    browser.text.include?("Result: PASS").should == true
  end

  it "Trigger action with enter" do
    browser.goto files+"input-image-keys-003.html"
    browser.keys.send :Tab
    browser.keys.send :Enter
    sleep 1
    browser.text.include?("Result: PASS").should == true
  end

  # input-image-events
  it "Cancelling action request" do
    browser.goto files+"input-image-events-001.html"
    browser.button(:name, "test").click
    browser.text.include?("Nothing should happen.").should == true
  end

  it "onfocus" do
    browser.goto files+"input-image-events-002.html"
    browser.button(:name, "test").click
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onblur" do
    browser.goto files+"input-image-events-003.html"
    browser.button(:name, "test").click_no_wait
    browser.button(:name, "random_field").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onclick" do
    browser.goto files+"input-image-events-004.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "ondblclick" do
    browser.goto files+"input-image-events-005.html"
    browser.button(:name, "test").double_click
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmousedown" do
    browser.goto files+"input-image-events-006.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseup" do
    browser.goto files+"input-image-events-007.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseover" do
    browser.goto files+"input-image-events-008.html"
    browser.button(:name, "test").fire_event "onMouseOver"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmousemove" do
    browser.goto files+"input-image-events-009.html"
    browser.button(:name, "test").fire_event "onMouseMove"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseout" do
    browser.goto files+"input-image-events-010.html"
    browser.button(:name, "test").fire_event "onMouseOver"
    browser.p(:id, "result").fire_event "onMouseOver"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Multiple JS events" do
    browser.goto files+"input-image-events-011.html"
    browser.button(:name, "test").fire_event "onMouseOver"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Empty JS event" do
    browser.goto files+"input-image-events-012.html"
    browser.button(:name, "test").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Adding invalid attribute size through DOM" do
    browser.goto files+"input-image-events-013.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end
end

