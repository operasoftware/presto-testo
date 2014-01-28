#########################
# input type="password" #
#########################

require "operawatir/helper"

describe "input type='password'" do
  # input-password
  it "Empty GET input" do
    browser.goto files+"input-password-001.html"
    browser.text_field(:name, "test").click_no_wait
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Empty POST input" do
    browser.goto files+"input-password-002.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "GET input" do
    browser.goto files+"input-password-003.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "POST input" do
    browser.goto files+"input-password-004.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Long GET input" do
    browser.goto files+"input-password-005.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Long POST input" do
    browser.goto files+"input-password-006.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Clearing input" do
    browser.goto files+"input-password-007.html"
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Appending input" do
    browser.goto files+"input-password-008.html"
    browser.text_field(:name, "test").append "bar"  # this prepends instead of appends
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Multiple unique inputs" do
    browser.goto files+"input-password-009.html"
    browser.text_field(:name, "test1").exists?.should == true
    browser.text_field(:name, "test2").exists?.should == true
    browser.text_field(:name, "test1").verify_contains("foo").should == true
    browser.text_field(:name, "test2").verify_contains("bar").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [bar]").should == true
  end

  it "Insane number of unique inputs" do
    pending "Watir bug WTR-163." do
      browser.goto files+"input-password-010.html"
      (0 .. 99).each do |i|
        @number     = "0" + i.to_s
        @field_name = "foobar" + @number[-2,2]
        browser.keys.send :Tab
        browser.type @field_name
      end
      browser.button(:name, "submit").click
      browser.text.include?("Result: PASS").should == true
    end
  end

  it "Multiple duplicate inputs" do
    browser.goto files+"input-password-011.html"
    browser.text_field(:value, "foo").exists?.should == true
    browser.text_field(:value, "bar").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("foo").should == false
  end

  it "Moving to the beginning of the field" do
    browser.goto files+"input-password-012.html"
    browser.keys.send :Tab
    browser.type "bar"
    browser.keys.send :Home
    browser.type "foo"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end
  
  it "Undo buffer emptied" do
    browser.goto files+"input-password-013.html"
    browser.text_field(:id, "test").click_no_wait      # focus
    browser.type "foobar"
    browser.text_field(:id, "test").contains?("foobar").should == true
    
    browser.keys.down :Control
    browser.keys.send "a"
    browser.keys.up :Control
    browser.keys.send :Del
    browser.text_field(:id, "test").contains?("foobar").should == false
    
    
    browser.keys.down :Control
    browser.keys.send "z"
    browser.keys.up :Control
    browser.text_field(:id, "test").contains?("foobar").should == true
  end
  
  it "Undo buffer with script" do
    browser.goto files+"input-password-014.html"
    browser.text_field(:id, "test").click      # focus
    
    browser.keys.down :Control
    browser.keys.send "z"
    browser.keys.up :Control
    
    browser.text_field(:id, "test").contains?("foobar").should == true
  end
  
  it "Undo buffer injected and emptied by script" do
    browser.goto files+"input-password-015.html"
    browser.text_field(:id, "test").click      # focus
    
    browser.keys.down :Control
    browser.keys.send "z"
    browser.keys.up :Control
    
    browser.text_field(:id, "test").contains?("foobar").should == true
  end

  # input-password-autofocus
  it "autofocus input" do
    browser.goto files+"input-password-autofocus-001.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.type "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "autofocus input, variation" do
    browser.goto files+"input-password-autofocus-002.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.type "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "invalid value autofocus input" do
    browser.goto files+"input-password-autofocus-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.type "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  # input-password-maxlength
  it "Regular maxlength" do
    browser.goto files+"input-password-maxlength-001.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo]").should == true
  end

  it "High maxlength" do
    browser.goto files+"input-password-maxlength-002.html"
    browser.text_field(:name, "test").set "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Empty maxlength variable" do
    browser.goto files+"input-password-maxlength-003.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Invalid maxlength" do
    browser.goto files+"input-password-maxlength-004.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Value of maxlength field available in DOM" do
    browser.goto files+"input-password-maxlength-005.html"
    browser.text_field(:name, "first_field").exists?.should == true
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Dynamic maxlength change" do
    browser.goto files+"input-password-maxlength-006.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo]").should == true
  end

  # input-password-readonly
  it "readonly" do
    browser.goto files+"input-password-readonly-001.html"
    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "readonly variable variation" do
    browser.goto files+"input-password-readonly-002.html"
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Invalid readonly" do
    browser.goto files+"input-password-readonly-003.html"
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Empty readonly" do
    browser.goto files+"input-password-readonly-004.html"
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Value of readonly field available in DOM" do
    browser.goto files+"input-password-readonly-005.html"
    browser.text_field(:name, "first_field").verify_contains("foobar").should == true
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  # input-password-disabled
  it "disabled" do
    browser.goto files+"input-password-disabled-001.html"
    browser.text_field(:name, "test").click_no_wait
    if browser.text_field(:name, "test").enabled?
      browser.text_field(:name, "test").append "bar"
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "disabled variable variation" do
    browser.goto files+"input-password-disabled-002.html"
    if browser.text_field(:name, "test").enabled?
      browser.text_field(:name, "test").append "bar"
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "disabled variable variation 2" do
    browser.goto files+"input-password-disabled-003.html"
    if browser.text_field(:name, "test").enabled?
      browser.text_field(:name, "test").append "bar"
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Invalid disabled" do
    browser.goto files+"input-password-disabled-004.html"
    if browser.text_field(:name, "test").enabled?
      browser.text_field(:name, "test").append "bar"
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Value of disabled field available in DOM" do
    browser.goto files+"input-password-disabled-005.html"
    browser.text_field(:name, "first_field").enabled?.should == false
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  # input-password-size
  it "size" do
    browser.goto files+"input-password-size-001.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "size algorithm" do
    browser.goto files+"input-password-size-002.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Invalid size" do
    browser.goto files+"input-password-size-003.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "No size" do
    browser.goto files+"input-password-size-004.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end
  
  it "High size" do
    browser.goto files+"input-password-size-005.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  # input-password-events
  it "onfocus" do
    browser.goto files+"input-password-events-001.html"
    browser.text_field(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onblur" do
    browser.goto files+"input-password-events-002.html"
    browser.text_field(:name, "test").click_no_wait
    browser.button(:name, "submit").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onselect" do
    browser.goto files+"input-password-events-003.html"
    browser.keys.send :Tab
    browser.keys.down :Shift
    browser.keys.send :Left
    browser.keys.up :Shift
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onchange" do
    browser.goto files+"input-password-events-004.html"
    browser.text_field(:name, "test").set "asd"
    browser.button(:name, "submit").click
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onclick" do
    browser.goto files+"input-password-events-005.html"
    browser.text_field(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "ondblclick" do
    browser.goto files+"input-password-events-006.html"
    browser.text_field(:name, "test").double_click
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmousedown" do
    browser.goto files+"input-password-events-007.html"
    browser.text_field(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseup" do
    browser.goto files+"input-password-events-008.html"
    browser.text_field(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseover" do
    browser.goto files+"input-password-events-009.html"
    browser.text_field(:name, "test").fire_event "onMouseOver"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmousemove" do
    browser.goto files+"input-password-events-010.html"
    browser.text_field(:name, "test").fire_event "onMouseMove"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseout" do
    browser.goto files+"input-password-events-011.html"
    browser.text_field(:name, "test").fire_event "onMouseOut"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onkeypress" do
    browser.goto files+"input-password-events-012.html"
    browser.keys.send :Tab
    browser.keys.send "a"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onkeydown" do
    browser.goto files+"input-password-events-013.html"
    browser.keys.send :Tab
    browser.keys.down :Shift
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.keys.up :Shift
  end

  it "onkeyup" do
    browser.goto files+"input-password-events-014.html"
    browser.keys.send :Tab
    browser.keys.down :Shift
    browser.keys.up :Shift
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "Multiple JS events" do
    browser.goto files+"input-password-events-015.html"
    browser.text_field(:name, "first_field").click_no_wait
    browser.text_field(:name, "test1").verify_contains("foobar").should == true
    browser.text_field(:name, "first_field").set "abc" # will this actually type?
    browser.text_field(:name, "test2").verify_contains("foobar").should == true
  end

  it "Empty JS event" do
    browser.goto files+"input-password-events-016.html"
    #does not work
    #browser.text_field(:name, "test").verify_contains("").should == true
    browser.text_field(:name, "test").click_no_wait
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  #input-password-required
  it "required" do
    browser.goto files+"input-password-required-001.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    #textfield is required, so submit should be denied
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click

    browser.text.include?("You typed: [foobar]").should == true
  end

  it "required, variant" do
    browser.goto files+"input-password-required-002.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    #textfield is required, so submit should be denied
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click

    browser.text.include?("You typed: [foobar]").should == true
  end

  it "required, invalid value" do
    browser.goto files+"input-password-required-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    #textfield is required, so submit should be denied
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click

    browser.text.include?("You typed: [foobar]").should == true
  end
end

