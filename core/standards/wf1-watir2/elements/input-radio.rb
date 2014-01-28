######################
# input type="radio" #
######################

require "operawatir/helper"

describe "input type='radio'" do
  # input-radio
  it "Unchecked, without value" do
    browser.goto files+"input-radio-001.html"
    # TODO: Remove this comment.
    # Without the line below, all but 2 tests fail.
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Checked, without value" do
    browser.goto files+"input-radio-002.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Unchecked, with value" do
    browser.goto files+"input-radio-003.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Checked, with value" do
    browser.goto files+"input-radio-004.html"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Invalid variable for checked attribute" do
    browser.goto files+"input-radio-005.html"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Empty variable for checked attribute" do
    browser.goto files+"input-radio-006.html"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Multiple unique radios" do
    browser.goto files+"input-radio-007.html"
    browser.radio(:name, "test1").set true
    browser.radio(:name, "test2").set true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [bar]").should == true
  end

  it "Insane number of unique radios (F: WTR-163)" do
    pending "Watir bug WTR-163." do
      browser.goto files+"input-radio-008.html"
      #browser.radios.each { |r| r.set true }
      (0 .. 99).each do |i|
        browser.radio(:name, "test" + i.to_s).set true
      end
      browser.button(:name, "submit").click
      browser.text.include?("Result: PASS").should == true
    end
  end

  it "Multiple duplicate radios" do
    browser.goto files+"input-radio-009.html"
    #browser.radios.each { |r| r.set true }
    browser.radio(:name, "test", "foo").click_no_wait
    browser.radio(:name, "test", "bar").click_no_wait
    browser.radio(:name, "test", "foo").checked?.should == false
    browser.radio(:name, "test", "bar").checked?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [bar]").should == true
  end

  it "Two radio groups" do
    browser.goto files+"input-radio-010.html"
    browser.radio(:name, "test1", "foo").click_no_wait
    browser.radio(:name, "test2", "bar").click_no_wait
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [bar]").should == true
  end

  it "Two radio groups with the same name" do
    browser.goto files+"input-radio-011.html"
    browser.radio(:name, "test", "foo").click_no_wait
    browser.radio(:name, "test", "bar").click_no_wait
    browser.radio(:name, "submit").click
    browser.text.include?("You typed: [bar]").should == true
  end

  # input-radio-autofocus
  it "autofocus radio field" do
    browser.goto files+"input-radio-autofocus-001.html"
    browser.radio(:name, "test").exists?.should == true
    browser.keys.send :Enter
    browser.radio(:name, "test").checked?.should == true
  end

  it "autofocus radio field, variation" do
    browser.goto files+"input-radio-autofocus-002.html"
    browser.radio(:name, "test").exists?.should == true
    browser.keys.send :Enter
    browser.radio(:name, "test").checked?.should == true
  end

  it "invalid value autofocus radio field" do
    browser.goto files+"input-radio-autofocus-003.html"
    browser.radio(:name, "test").exists?.should == true
    browser.keys.send :Enter
    browser.radio(:name, "test").checked?.should == true
  end

  # input-radio-disabled
  it "disabled, checked" do
    browser.goto files+"input-radio-disabled-001.html"
    browser.radio(:name, "test").click_no_wait
    browser.radio(:name, "test").checked?.should == true
  end

  it "disabled, unchecked" do
    browser.goto files+"input-radio-disabled-002.html"
    browser.radio(:name, "test").click_no_wait
    browser.radio(:name, "test").checked?.should == false
  end

  it "disabled variable variation" do
    browser.goto files+"input-radio-disabled-003.html"
    browser.radio(:name, "test").click_no_wait
    browser.radio(:name, "test").checked?.should == true
  end

  it "disabled variable variation 2" do
    browser.goto files+"input-radio-disabled-004.html"
    browser.radio(:name, "test").click_no_wait
    browser.radio(:name, "test").checked?.should == true
  end

  it "Invalid disabled" do
    browser.goto files+"input-radio-disabled-005.html"
    browser.radio(:name, "test").click_no_wait
    browser.radio(:name, "test").checked?.should == true
  end

  it "Value of disabled field available in DOM" do
    browser.goto files+"input-radio-disabled-006.html"
    browser.radio(:name, "first_field").checked?.should == true
    browser.radio(:name, "test").checked?.should == true
  end

  it "Setting state checked on same radio group through DOM" do
    browser.goto files+"input-radio-disabled-007.html"
    browser.radio(:id, "first_field").checked?.should == false
    browser.radio(:id, "second_field").checked?.should == true
  end

  # input-radio-events
  it "onfocus" do
    browser.goto files+"input-radio-events-001.html"
    browser.radio(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onblur" do
    browser.goto files+"input-radio-events-002.html"
    browser.radio(:name, "test").click_no_wait
    browser.button(:name, "submit").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onchange" do
    browser.goto files+"input-radio-events-003.html"
    browser.radio(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onclick" do
    browser.goto files+"input-radio-events-004.html"
    browser.radio(:name, "test").click
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "ondblclick" do
    browser.goto files+"input-radio-events-005.html"
    browser.radio(:name, "test").double_click
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmousedown" do
    browser.goto files+"input-radio-events-006.html"
    browser.radio(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseup" do
    browser.goto files+"input-radio-events-007.html"
    browser.radio(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseover" do
    browser.goto files+"input-radio-events-008.html"
    browser.radio(:name, "test").fire_event "onMouseOver"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmousemove" do
    browser.goto files+"input-radio-events-009.html"
    browser.radio(:name, "test").fire_event "onMouseMove"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseout" do
    browser.goto files+"input-radio-events-010.html"
    browser.radio(:name, "test").fire_event "onMouseOut"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Multiple JS events" do
    browser.goto files+"input-radio-events-011.html"
    browser.radio(:name, "test").fire_event "onMouseOver"
    browser.radio(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Empty JS event" do
    browser.goto files+"input-radio-events-012.html"
    browser.radio(:name, "test").click_no_wait
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  #input-radio-required
  it "required" do
    browser.goto files+"input-radio-required-001.html"
    browser.radio(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    #radio is required, so submit should be denied
    browser.button(:name, "submit").exists?.should == true

    browser.radio(:name, "test").set true
    browser.button(:name, "submit").click

    browser.text.include?("You typed: [on]").should == true
  end

  it "required, variant" do
    browser.goto files+"input-radio-required-002.html"
    browser.radio(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    #radio is required, so submit should be denied
    browser.button(:name, "submit").exists?.should == true

    browser.radio(:name, "test").set true
    browser.button(:name, "submit").click

    browser.text.include?("You typed: [on]").should == true
  end

  it "required, invalid value" do
    browser.goto files+"input-radio-required-003.html"
    browser.radio(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    #radio is required, so submit should be denied
    browser.button(:name, "submit").exists?.should == true

    browser.radio(:name, "test").set true
    browser.button(:name, "submit").click

    browser.text.include?("You typed: [on]").should == true
  end
  
  it "same name across forms" do
    browser.goto files+"input-radio-others-001.html"
    
    browser.radio(:id, "i1").exists?.should == true
    browser.radio(:id, "i1").checked?.should == false
    browser.radio(:id, "i1").click_no_wait
    
    browser.radio(:id, "i2").exists?.should == true
    browser.radio(:id, "i2").checked?.should == false
    browser.radio(:id, "i2").click_no_wait
    
    browser.radio(:id, "i3").exists?.should == true
    browser.radio(:id, "i3").checked?.should == false
    browser.radio(:id, "i3").click_no_wait
    
    browser.radio(:id, "i1").checked?.should == true
    browser.radio(:id, "i2").checked?.should == true
    browser.radio(:id, "i3").checked?.should == true
  end
  
  it "'form' attribute" do
    browser.goto files+"input-radio-others-002.html"
    
    browser.radio(:id, "i1").exists?.should == true
    browser.radio(:id, "i2").exists?.should == true
    browser.radio(:id, "i3").exists?.should == true
    
    browser.radio(:id, "i1").checked?.should == false
    browser.radio(:id, "i2").checked?.should == false
    browser.radio(:id, "i3").checked?.should == false
    
    browser.radio(:id, "i1").click_no_wait
    browser.radio(:id, "i1").checked?.should == true
    browser.radio(:id, "i2").checked?.should == false
    browser.radio(:id, "i3").checked?.should == false
    
    browser.radio(:id, "i2").click_no_wait
    browser.radio(:id, "i1").checked?.should == false
    browser.radio(:id, "i2").checked?.should == true
    browser.radio(:id, "i3").checked?.should == false
    
    browser.radio(:id, "i3").click_no_wait
    browser.radio(:id, "i1").checked?.should == false
    browser.radio(:id, "i2").checked?.should == false
    browser.radio(:id, "i3").checked?.should == true
  end
  
  it "no parent form" do
    browser.goto files+"input-radio-others-003.html"
    
    browser.radio(:id, "i1").exists?.should == true
    browser.radio(:id, "i2").exists?.should == true
    
    browser.radio(:id, "i1").checked?.should == false
    browser.radio(:id, "i2").checked?.should == false
    
    browser.radio(:id, "i1").click_no_wait
    browser.radio(:id, "i1").checked?.should == true
    browser.radio(:id, "i2").checked?.should == false
    
    browser.radio(:id, "i2").click_no_wait
    browser.radio(:id, "i1").checked?.should == false
    browser.radio(:id, "i2").checked?.should == true
  end
  
  it "sharing name across frames" do
    browser.goto files+"input-radio-others-004.html"
    
    browser.radio(:id, "i1").exists?.should == true
    browser.radio(:id, "i1").click_no_wait
    
    browser.frame(:index, 1).radio(:id, "i2").exists?.should == true
    browser.frame(:index, 1).radio(:id, "i2").click_no_wait
    
    browser.switch_to_default
    
    browser.radio(:id, "i1").checked?.should == true
    browser.frame(:index, 1).radio(:id, "i2").checked?.should == true
  end
  
  it "reset" do
    browser.goto files+"input-radio-others-005.html"
    
    browser.radio(:id, "i1").exists?.should == true
    browser.radio(:id, "i2").exists?.should == true
    browser.radio(:id, "i3").exists?.should == true
    
    browser.radio(:id, "i1").checked?.should == false
    browser.radio(:id, "i2").checked?.should == true
    browser.radio(:id, "i3").checked?.should == false
    
    browser.radio(:id, "i1").click_no_wait
    browser.radio(:id, "i1").checked?.should == true
    browser.radio(:id, "i2").checked?.should == false
    browser.radio(:id, "i3").checked?.should == false
    
    browser.button(:id, "b1").exists?.should == true
    browser.button(:id, "b1").click_no_wait
    
    browser.radio(:id, "i1").checked?.should == false
    browser.radio(:id, "i2").checked?.should == true
    browser.radio(:id, "i3").checked?.should == false
  end
  
  it "accesskey, onclick" do
    pending "Awaiting 'Enter access key mode' action support in gogi (WTR-78, CORE-22015)." do
      browser.goto files+"input-radio-others-006.html"
    
      browser.opera_action "Enter access key mode"
      browser.keys.send "1"
      browser.opera_action "Leave access key mode"
      
      browser.p(:id, "result").text.should == "PASS"
    end
  end
  
  it "accesskey, onfocus" do
    pending "Awaiting 'Enter access key mode' action support in gogi (WTR-78, CORE-22015)." do
      browser.goto files+"input-radio-others-007.html"
      
      browser.opera_action "Enter access key mode"
      browser.keys.send "1"
      browser.opera_action "Leave access key mode"
      
      browser.p(:id, "result").text.should == "PASS"
    end
  end
  
  it "accesskey, onchange" do
    pending "Awaiting 'Enter access key mode' action support in gogi (WTR-78, CORE-22015)." do
      browser.goto files+"input-radio-others-008.html"
      
      browser.opera_action "Enter access key mode"
      browser.keys.send "1"
      browser.opera_action "Leave access key mode"
      
      browser.p(:id, "result").text.should == "PASS"
    end
  end
  
  it "autofocus, onfocus" do
    browser.goto files+"input-radio-others-009.html"
    
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").text.should == "PASS"
  end
  
  it "arrow navigation, onclick, onfocus, onchange, onblur" do
    browser.goto files+"input-radio-others-010.html"
    
    browser.radio(:id, "i1").exists?.should == true
    browser.radio(:id, "i1").click_no_wait
    
    browser.keys.send :Down
    browser.keys.send :Right
    browser.keys.send :Up
    browser.keys.send :Left
    
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").text.should == "PASS"
  end
  
  it "deeply nested radio buttons" do
    browser.goto files+"input-radio-others-011.html"
    
    browser.radio(:id, "r1").exists?.should == true
    browser.radio(:id, "r2").exists?.should == true
    
    browser.radio(:id, "r1").checked?.should == false
    browser.radio(:id, "r2").checked?.should == false
    
    browser.radio(:id, "r1").click_no_wait
    browser.radio(:id, "r1").checked?.should == true
    browser.radio(:id, "r2").checked?.should == false
    
    browser.radio(:id, "r2").click_no_wait
    browser.radio(:id, "r1").checked?.should == false
    browser.radio(:id, "r2").checked?.should == true
  end
  
  it "modifying 'name' in 'onclick' handler (CORE-31973)" do
    browser.goto files+"input-radio-others-012.html"
    
    browser.radio(:id, "r1").exists?.should == true
    browser.radio(:id, "r1").checked?.should == true
    browser.radio(:id, "r2").exists?.should == true
    browser.radio(:id, "r2").checked?.should == false
    browser.radio(:id, "r3").exists?.should == true
    browser.radio(:id, "r3").checked?.should == true
    
    browser.radio(:id, "r2").click_no_wait
    browser.radio(:id, "r1").checked?.should == false
    browser.radio(:id, "r2").checked?.should == true
    browser.radio(:id, "r3").checked?.should == false
  end
  
  it "modifying 'name' in 'onfocus' handler (CORE-31973)" do
    browser.goto files+"input-radio-others-013.html"
    
    browser.radio(:id, "r1").exists?.should == true
    browser.radio(:id, "r1").checked?.should == true
    browser.radio(:id, "r2").exists?.should == true
    browser.radio(:id, "r2").checked?.should == false
    browser.radio(:id, "r3").exists?.should == true
    browser.radio(:id, "r3").checked?.should == true
    
    browser.radio(:id, "r2").click_no_wait
    browser.radio(:id, "r1").checked?.should == true
    browser.radio(:id, "r2").checked?.should == true
    browser.radio(:id, "r3").checked?.should == false
  end
  
  it "modifying 'name' in 'onmouseover' handler (CORE-31973)" do
    browser.goto files+"input-radio-others-014.html"
    
    browser.radio(:id, "r1").exists?.should == true
    browser.radio(:id, "r1").checked?.should == true
    browser.radio(:id, "r2").exists?.should == true
    browser.radio(:id, "r2").checked?.should == true
    
    browser.radio(:id, "r1").fire_event "onMouseOver"
    browser.radio(:id, "r1").checked?.should == true
    browser.radio(:id, "r2").checked?.should == false
  end
  
  it "tabindex" do
    browser.goto files+"input-radio-others-015.html"
    
    browser.radio(:id, "r1").exists?.should == true
    browser.radio(:id, "r1").click_no_wait
    browser.keys.send :Tab
    browser.keys.send :Tab
    
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").text.should == "123"
  end
  
  it "accesskey" do
    pending "Awaiting 'Enter access key mode' action support in gogi (WTR-78, CORE-22015)." do
      browser.goto files+"input-radio-keys-001.html"
      
      browser.opera_action "Enter access key mode"
      browser.keys.send "1"
      browser.opera_action "Leave access key mode"
      
      browser.radio(:id, "r1").checked?.should == true
    end
  end
  
  it "changing name in an onchange handler (CORE-31973)" do
    browser.goto files+"input-radio-012.html"
    
    browser.radio(:id, "r2").click_no_wait
    browser.radio(:id, "r1").checked?.should == false
    browser.radio(:id, "r2").checked?.should == true
    browser.radio(:id, "r3").checked?.should == false
  end
  
  it "checking two connected input radios from JavaScript" do
    browser.goto files+"input-radio-013.html"
    
    browser.radio(:id, "b").click_no_wait
    browser.radio(:id, "r1").checked?.should == false
    browser.radio(:id, "r2").checked?.should == true
  end
  
  it "checked radio with 'display: none'" do
    browser.goto files+"input-radio-014.html"
    
    browser.button(:id, "b").click_no_wait
    browser.p(:id, "result_i").text.should == "PASS"
  end
  
  it "Checked radio with 'display: none' and other visible radio." do
    browser.goto files+"input-radio-015.html"
    
    browser.radio(:id, "r2").click_no_wait
    browser.button(:id, "b").click_no_wait
    browser.p(:id, "result_i_").text.should == "PASS"
  end
  
  it "removing in event handlers" do
    browser.goto files+"input-radio-016.html"
    
    browser.radio(:id, "r1").exists?.should == true
    browser.radio(:id, "r1").click_no_wait
    browser.radio(:id, "r1").exists?.should == false
    
    browser.radio(:id, "r2").exists?.should == true
    browser.radio(:id, "r2").click_no_wait
    browser.radio(:id, "r2").exists?.should == false
    
    browser.radio(:id, "r3").exists?.should == true
    browser.radio(:id, "r3").click_no_wait
    browser.radio(:id, "r3").exists?.should == false
  end
end

