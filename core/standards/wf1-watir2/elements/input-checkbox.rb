#########################
# input type="checkbox" #
#########################

require "operawatir/helper"

describe "input type='checkbox'" do
  # input-checkbox
  it "Unchecked, without value" do
    browser.goto files+"input-checkbox-001.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Checked, without value" do
    browser.goto files+"input-checkbox-002.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Unchecked, with value" do
    browser.goto files+"input-checkbox-003.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Checked, with value" do
    browser.goto files+"input-checkbox-004.html"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Invalid variable for checked attribute" do
    browser.goto files+"input-checkbox-005.html"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Empty variable for checked attibute" do
    browser.goto files+"input-checkbox-006.html"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Invalid type" do
    browser.goto files+"input-checkbox-007.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Missing type" do
    browser.goto files+"input-checkbox-008.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Multiple unique checkboxes" do
    browser.goto files+"input-checkbox-009.html"
    browser.checkbox(:name, "test1").set true
    browser.checkbox(:name, "test2").set true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [bar]").should == true
  end

  it "Insane number of unique checkboxes" do
    pending "Watir bug WTR-163." do
      browser.goto files+"input-checkbox-010.html"
      (0 .. 99).each do |c|
        browser.checkbox(:name, "test" + c.to_s).set true
      end
      #browser.checkboxes.each { |c| c.set true }  # FIXME
      browser.button(:name, "submit").click
      browser.text.include?("Result: PASS").should == true
    end
  end

  it "Multiple duplicate checkboxes" do
    browser.goto files+"input-checkbox-011.html"
    #browser.checkboxes.each { |c| c.set true }  # FIXME
    browser.checkbox(:name, "test", "foo").set true
    browser.checkbox(:name, "test", "bar").set true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [bar]").should == true
  end

  it "disabled, checked" do
    browser.goto files+"input-checkbox-disabled-001.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.checkbox(:name, "test").checked?.should == true
  end

  it "disabled, unchecked" do
    browser.goto files+"input-checkbox-disabled-002.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.checkbox(:name, "test").checked?.should == false
  end

  it "disabled variable variation" do
    browser.goto files+"input-checkbox-disabled-003.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.checkbox(:name, "test").checked?.should == true
  end

  it "disabled variable variation 2" do
    browser.goto files+"input-checkbox-disabled-004.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.checkbox(:name, "test").checked?.should == true
  end

  it "Invalid disabled" do
    browser.goto files+"input-checkbox-disabled-005.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.checkbox(:name, "test").checked?.should == true
  end

  it "Value of disabled field available in DOM" do
    browser.goto files+"input-checkbox-disabled-006.html"
    browser.checkbox(:name, "first_field").checked?.should == true
    browser.checkbox(:name, "test").checked?.should == true
  end

  # input-checkbox-autofocus
  it "autofocus checkbox" do
    browser.goto files+"input-checkbox-autofocus-001.html"
    browser.checkbox(:name, "test").exists?.should == true
    browser.keys.send :Enter
    browser.checkbox(:name, "test").checked?.should == true
  end

  it "autofocus checkbox, variation" do
    browser.goto files+"input-checkbox-autofocus-002.html"
    browser.checkbox(:name, "test").exists?.should == true
    browser.keys.send :Enter
    browser.checkbox(:name, "test").checked?.should == true
  end

  it "invalid value autofocus checkbox" do
    browser.goto files+"input-checkbox-autofocus-003.html"
    browser.checkbox(:name, "test").exists?.should == true
    browser.keys.send :Enter
    browser.checkbox(:name, "test").checked?.should == true
  end

  # input-checkbox-events
  it "onfocus" do
    browser.goto files+"input-checkbox-events-001.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onblur" do
    browser.goto files+"input-checkbox-events-002.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.button(:name, "submit").click
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onchange" do
    browser.goto files+"input-checkbox-events-003.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onclick" do
    browser.goto files+"input-checkbox-events-004.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "ondblclick" do
    browser.goto files+"input-checkbox-events-005.html"
    sleep(1)
    browser.checkbox(:id, "i").double_click
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onmousedown" do
    browser.goto files+"input-checkbox-events-006.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseup" do
    browser.goto files+"input-checkbox-events-007.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseover" do
    browser.goto files+"input-checkbox-events-008.html"
    browser.checkbox(:name, "test").fire_event "onMouseOver"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseover" do
    browser.goto files+"input-checkbox-events-009.html"
    browser.checkbox(:name, "test").fire_event "onMouseMove"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseout" do
    browser.goto files+"input-checkbox-events-010.html"
    browser.checkbox(:name, "test").fire_event "onMouseOver"
    browser.p(:id, "result").fire_event "onMouseOver"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Multiple JS events" do
    browser.goto files+"input-checkbox-events-011.html"
    browser.checkbox(:name, "test").fire_event "onMouseOver"
    browser.checkbox(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Empty JS event" do
    browser.goto files+"input-checkbox-events-012.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.checkbox(:name, "test").click_no_wait
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  #input-checkbox-required
  it "required" do
    browser.goto files+"input-checkbox-required-001.html"
    browser.checkbox(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    #checkbox is required, so submit should be denied
    browser.button(:name, "submit").exists?.should == true

    browser.checkbox(:name, "test").set true
    browser.button(:name, "submit").click

    browser.text.include?("You typed: [on]").should == true
  end

  it "required, variant" do
    browser.goto files+"input-checkbox-required-002.html"
    browser.checkbox(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    #checkbox is required, so submit should be denied
    browser.button(:name, "submit").exists?.should == true

    browser.checkbox(:name, "test").set true
    browser.button(:name, "submit").click

    browser.text.include?("You typed: [on]").should == true
  end

  it "required, invalid value" do
    browser.goto files+"input-checkbox-required-003.html"
    browser.checkbox(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    #checkbox is required, so submit should be denied
    browser.button(:name, "submit").exists?.should == true

    browser.checkbox(:name, "test").set true
    browser.button(:name, "submit").click

    browser.text.include?("You typed: [on]").should == true
  end
end

