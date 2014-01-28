#######################
# input type="submit" #
#######################

require "operawatir/helper"

describe "input type='submit'" do
  # input-submit
  it "Click submit" do
    browser.goto files+"input-submit-001.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Multiple unique submit buttons in the same form" do
    browser.goto files+"input-submit-002.html"
    browser.button(:name, "submit2").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Multiple unique submit buttons in separate forms" do
    browser.goto files+"input-submit-003.html"
    browser.button(:name, "submit2").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Multiple duplicate submit buttons in the same form" do
    browser.goto files+"input-submit-004.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Multiple duplicate submit buttons in separate forms" do
    browser.goto files+"input-submit-005.html"
    browser.button(:id, "second_button").click
    browser.text.include?("You typed: [bar]").should == true
  end

  it "Invalid size attribute" do
    browser.goto files+"input-submit-006.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Invalid src attribute" do
    browser.goto files+"input-submit-007.html"
    # We are not able to check whether a button contains an image?
    browser.button(:name, "test").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Invalid readonly attribute" do
    browser.goto files+"input-submit-008.html"
    browser.button(:name, "test").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Value of submit button available in DOM" do
    browser.goto files+"input-submit-009.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  # input-submit-autofocus
  it "autofocus submit button" do
    browser.goto files+"input-submit-autofocus-001.html"
    browser.button(:name, "submit").exists?.should == true
    browser.keys.send :Enter
    browser.text.include?("Result: PASS").should == true
  end

  it "autofocus submit button, variation" do
    browser.goto files+"input-submit-autofocus-002.html"
    browser.button(:name, "submit").exists?.should == true
    browser.keys.send :Enter
    browser.text.include?("Result: PASS").should == true
  end

  it "invalid value autofocus submit button" do
    browser.goto files+"input-submit-autofocus-003.html"
    browser.button(:name, "submit").exists?.should == true
    browser.keys.send :Enter
    browser.text.include?("Result: PASS").should == true
  end

  # input-submit-value
  it "Standard value through GET" do
    browser.goto files+"input-submit-value-001.html"
    browser.button(:name, "test").click
    browser.text.include?("You typed: [Submit]").should == true
  end

  it "Standard value through POST" do
    browser.goto files+"input-submit-value-002.html"
    browser.button(:name, "test").click
    browser.text.include?("You typed: [Submit]").should == true
  end

  it "Alternate value through GET" do
    browser.goto files+"input-submit-value-003.html"
    browser.button(:name, "test").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Alternate value through POST" do
    browser.goto files+"input-submit-value-004.html"
    browser.button(:name, "test").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Another element inside value" do
    browser.goto files+"input-submit-value-005.html"
    browser.button(:name, "test").verify_contains("<div id='test2'>foobar</div>").should == true
    browser.div(:id, "test2").exists?.should == false  # div method not implemented yet
    browser.button(:name, "test").click
    browser.text.include?("You typed: [<div id='test2'>foobar</div>]").should == true
  end

  it "Empty value" do
    browser.goto files+"input-submit-value-006.html"
    browser.button(:name, "test").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Empty value through POST" do
    browser.goto files+"input-submit-value-007.html"
    browser.button(:name, "test").click
    browser.text.include?("Result: PASS").should == true
  end
  
  it "i18n support in value" do
    browser.goto files+"input-submit-value-008.html"
    browser.button(:name, "test").click
    browser.text.include?("You typed: [Færøyene Москва]").should == true
  end

  # input-submit-disabled
  it "disabled" do
    browser.goto files+"input-submit-disabled-001.html"
    browser.button(:name, "test").click
    browser.text.include?("Nothing should happen.").should == true
  end

  it "disabled variable variation" do
    browser.goto files+"input-submit-disabled-002.html"
    browser.button(:name, "test").click
    browser.text.include?("Nothing should happen.").should == true
  end

  it "disabled variable variation 2" do
    browser.goto files+"input-submit-disabled-003.html"
    browser.button(:name, "test").click
    browser.text.include?("Nothing should happen.").should == true
  end

  it "Invalid disabled" do
    browser.goto files+"input-submit-disabled-004.html"
    browser.button(:name, "test").click
    browser.text.include?("Nothing should happen.").should == true
  end

  it "Value of disabled field available in DOM" do
    browser.goto files+"input-submit-disabled-005.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  # input-submit-keys
  it "accesskey" do
    pending "Awaiting 'Enter access key mode' action support in gogi (WTR-78, CORE-22015)." do
      browser.goto files+"input-submit-keys-001.html"
      browser.opera_action "Enter access key mode"
      browser.keys.send "o"
      browser.opera_action "Leave access key mode"
      browser.text.include?("Result: PASS").should == true
    end
  end

  it "tabindex" do
    browser.goto files+"input-submit-keys-002.html"
    3.times { browser.keys.send :Tab }
    browser.keys.send :Enter
    sleep(0.25)
    browser.text.include?("Result: PASS").should == true
  end

  it "Trigger action with enter" do
    browser.goto files+"input-submit-keys-003.html"
    browser.keys.send :Tab
    browser.keys.send :Enter
    sleep(0.25)
    browser.text.include?("Result: PASS").should == true
  end

  it "Trigger action with space" do
    browser.goto files+"input-submit-keys-004.html"
    browser.keys.send :Tab
    browser.keys.send :Space
    sleep(0.25)
    browser.text.include?("Result: PASS").should == true
  end

  # input-submit-events
  it "Cancelling action request" do
    browser.goto files+"input-submit-events-001.html"
    browser.button(:name, "test").click
    browser.text.include?("Nothing should happen.").should == true
  end

  it "onfocus" do
    browser.goto files+"input-submit-events-002.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onblur" do
    browser.goto files+"input-submit-events-003.html"
    browser.button(:name, "test").click_no_wait
    browser.button(:name, "random_field").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onclick" do
    browser.goto files+"input-submit-events-004.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "ondblclick" do
    browser.goto files+"input-submit-events-005.html"
    browser.button(:name, "test").double_click
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmousedown" do
    browser.goto files+"input-submit-events-006.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseup" do
    browser.goto files+"input-submit-events-007.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseover" do
    browser.goto files+"input-submit-events-008.html"
    browser.button(:name, "test").fire_event "onMouseOver"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmousemove" do
    browser.goto files+"input-submit-events-009.html"
    browser.button(:name, "test").fire_event "onMouseMove"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseout" do
    browser.goto files+"input-submit-events-010.html"
    browser.button(:name, "test").fire_event "onMouseOut"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Multiple JS events" do
    browser.goto files+"input-submit-events-011.html"
    browser.button(:name, "test").fire_event "onMouseOver"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Empty JS event" do
    browser.goto files+"input-submit-events-012.html"
    browser.button(:name, "test").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Adding invalid attribute size through DOM" do
    browser.goto files+"input-submit-events-013.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end
end

