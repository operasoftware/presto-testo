#####################
# input type="text" #
#####################

require "operawatir/helper"

describe "input type='text'" do
  # input-text
  it "Empty GET input" do
    browser.goto files+"input-text-001.html"
    browser.text_field(:name, "test").click_no_wait
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Empty POST input" do
    browser.goto files+"input-text-002.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "GET input" do
    browser.goto files+"input-text-003.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "POST input" do
    browser.goto files+"input-text-004.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Long GET input" do
    browser.goto files+"input-text-005.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Long POST input" do
    browser.goto files+"input-text-006.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Clearing input" do
    browser.goto files+"input-text-007.html"
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Appending input" do
    browser.goto files+"input-text-008.html"
    browser.text_field(:name, "test").append "bar"  # this prepends instead of appends
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Invalid type" do
    browser.goto files+"input-text-009.html"
    browser.text_field(:name, "test").exists? == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Missing type" do
    browser.goto files+"input-text-010.html"
    browser.text_field(:name, "test").set "foobar"  # If it's writable, it's a text field.
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Multiple unique inputs" do
    browser.goto files+"input-text-011.html"
    browser.text_field(:name, "test1").exists?.should == true
    browser.text_field(:name, "test2").exists?.should == true
    browser.text_field(:name, "test1").verify_contains("foo").should == true
    browser.text_field(:name, "test2").verify_contains("bar").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [bar]").should == true
  end

  it "Insane number of unique inputs" do
    pending "Watir bug WTR-163." do
      browser.goto files+"input-text-012.html"
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
    browser.goto files+"input-text-013.html"
    browser.text_field(:value, "foo").exists?.should == true
    browser.text_field(:value, "bar").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo]").should == false
  end

  it "input type='password', Moving to the beginning of the field" do
    browser.goto files+"input-text-014.html"
    browser.keys.send :Tab
    browser.type "bar"
    browser.keys.send :Home
    browser.type "foo"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Value available in DOM" do
    browser.goto files+"input-text-015.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end
  
  it "Undo buffer emptied" do
    browser.goto files+"input-text-016.html"
    browser.text_field(:id, "test").click_no_wait      # focus
    browser.type "foobar"
    browser.text_field(:id, "test").verify_contains("foobar").should == true
    
    browser.keys.down :Control
    browser.keys.send "a"
    browser.keys.up :Control
    browser.keys.send :Del
    browser.text_field(:id, "test").verify_contains("foobar").should == false
    
    
    browser.keys.down :Control
    browser.keys.send "z"
    browser.keys.up :Control
    browser.text_field(:id, "test").verify_contains("foobar").should == true
  end
  
  it "Undo buffer with script" do
    browser.goto files+"input-text-017.html"
    browser.text_field(:id, "test").click_no_wait      # focus
    
    browser.keys.down :Control
    browser.keys.send "z"
    browser.keys.up :Control
    
    browser.text_field(:id, "test").verify_contains("foobar").should == true
  end
  
  it "Undo buffer injected and emptied by script" do
    browser.goto files+"input-text-018.html"
    browser.text_field(:id, "test").click_no_wait      # focus
    
    browser.keys.down :Control
    browser.keys.send "z"
    browser.keys.up :Control
    
    browser.text_field(:id, "test").verify_contains("foobar").should == true
  end

  # input-text-autofocus
  it "autofocus input" do
    browser.goto files+"input-text-autofocus-001.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.type "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "autofocus input, variation" do
    browser.goto files+"input-text-autofocus-002.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.type "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "invalid value autofocus input" do
    browser.goto files+"input-text-autofocus-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.type "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  # input-text-i18n
  it "Chinese input" do
    browser.goto files+"input-text-i18n-001.html"
    browser.text_field(:name, "test").set "東京都 伦敦"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [東京都 伦敦]").should == true
  end

  it "Japanese input" do
    browser.goto files+"input-text-i18n-002.html"
    browser.text_field(:name, "test").set "ペキンし ロンドン"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [ペキンし ロンドン]").should == true
  end

  it "Hindi input" do
    browser.goto files+"input-text-i18n-003.html"
    browser.text_field(:name, "test").set "मास्को लंदन"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [मास्को लंदन]").should == true
  end

  it "Norwegian input" do
    browser.goto files+"input-text-i18n-004.html"
    browser.text_field(:name, "test").set "Og magen var grøn og blå, av steinklaka gorr og slim, og flugor og kvitmakk små, aula i yrjande stim."
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Og magen var grøn og blå, av steinklaka gorr og slim, og flugor og kvitmakk små, aula i yrjande stim.]").should == true
  end

  it "Thai input" do
    browser.goto files+"input-text-i18n-005.html"
    browser.text_field(:name, "test").set "กรุงมอสโก ลอนดอน"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [กรุงมอสโก ลอนดอน]").should == true
  end

  it "Russian input" do
    browser.goto files+"input-text-i18n-006.html"
    browser.text_field(:name, "test").set "Москва Ло́ндон"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Москва Ло́ндон]").should == true
  end

  it "Arabic input" do
    browser.goto files+"input-text-i18n-007.html"
    browser.text_field(:name, "test").set "موسكو لندن"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [موسكو لندن]").should == true
  end

  it "Greek input" do
    browser.goto files+"input-text-i18n-008.html"
    browser.text_field(:name, "test").set "Μόσχα Λονδίνο"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Μόσχα Λονδίνο]").should == true
  end

  it "Korean input" do
    browser.goto files+"input-text-i18n-009.html"
    browser.text_field(:name, "test").set "모스크바 런던"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [모스크바 런던]").should == true
  end

  it "Vietnamese input" do
    browser.goto files+"input-text-i18n-010.html"
    browser.text_field(:name, "test").set "Mạc Tư Khoa Luân Đôn"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Mạc Tư Khoa Luân Đôn]").should == true
  end

  it "Combining English and Chinese input" do
    browser.goto files+"input-text-i18n-011.html"
    browser.text_field(:name, "test").set "Moscow 伦敦"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Moscow 伦敦]").should == true
  end

  it "Combining Chinese and Japanese input" do
    browser.goto files+"input-text-i18n-012.html"
    browser.text_field(:name, "test").set "莫斯科 ロンドン"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [莫斯科 ロンドン]").should == true
  end

  it "Combining Norwegian and Russian input" do
    browser.goto files+"input-text-i18n-013.html"
    browser.text_field(:name, "test").set "Færøyene Москва"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Færøyene Москва]").should == true
  end

  # input-text-value
  it "Special characters input" do
    browser.goto files+"input-text-value-001.html"
    browser.text_field(:name, "test").set "> < &"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [> < &]").should == true
  end

  it "Append input to special characters value" do
    browser.goto files+"input-text-value-002.html"
    browser.text_field(:name, "test").append "& < >"  # this prepends instead of appends
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [> < & & < >]").should == true
  end

  it "Clearing input of special characters value" do
    browser.goto files+"input-text-value-003.html"
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Prefilled entity input" do
    browser.goto files+"input-text-value-004.html"
    browser.text_field(:name, "test").verify_contains("&").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [&]").should == true
  end

  it "Append to entity value" do
    browser.goto files+"input-text-value-005.html"
    browser.text_field(:name, "test").append "© € ¶ þ"  # this prepends instead of appends
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [& æ Ð © € ¶ þ]").should == true
  end

  it "Clearing input of entity value" do
    browser.goto files+"input-text-value-006.html"
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Another element inside value" do
    browser.goto files+"input-text-value-007.html"
    browser.text_field(:name, "test").verify_contains("<div id='test2'>foobar</div>").should == true
    browser.div(:id, "test2").exists?.should == false
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [<div id='test2'>foobar</div>]").should == true
  end
  
  it "Carriage return inside value" do
    browser.goto files+"input-text-value-008.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "New line inside value" do
    browser.goto files+"input-text-value-009.html"
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Concatenation of two values" do
    browser.goto files+"input-text-value-010.html"
    browser.text_field(:name, "first_field").verify_contains("foo").should == true
    browser.text_field(:name, "second_field").verify_contains("bar").should == true
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  # input-text-maxlength
  it "Regular maxlength" do
    browser.goto files+"input-text-maxlength-001.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo]").should == true
  end

  it "High maxlength" do
      browser.goto files+"input-text-maxlength-002.html"
      browser.text_field(:name, "text").click
      browser.opera_action "Select all"
    
      browser.keys.down :Control ; browser.keys.send "c" ; browser.keys.up :Control
      #browser.opera_action "Copy"

      browser.text_field(:name, "test").click

      browser.keys.down :Control ; browser.keys.send "v" ; browser.keys.up :Control
      #browser.opera_action "Paste"
    
      browser.button(:name, "submit").click
      browser.text.include?("Result: PASS").should == true
  end

  it "Empty maxlength variable" do
    browser.goto files+"input-text-maxlength-003.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Invalid maxlength" do
    browser.goto files+"input-text-maxlength-004.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Value of maxlength field available in DOM" do
    browser.goto files+"input-text-maxlength-005.html"
    browser.text_field(:name, "first_field").exists?.should == true
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Dynamic maxlength change" do
    browser.goto files+"input-text-maxlength-006.html"
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo]").should == true
  end

  # input-text-readonly
  it "readonly" do
    browser.goto files+"input-text-readonly-001.html"
    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "readonly variable variation" do
    browser.goto files+"input-text-readonly-002.html"
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Invalid readonly" do
    browser.goto files+"input-text-readonly-003.html"
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Empty readonly" do
    browser.goto files+"input-text-readonly-004.html"
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "input type='text, Value of readonly field available in DOM" do
    browser.goto files+"input-text-readonly-005.html"
    browser.text_field(:name, "first_field").verify_contains("foobar").should == true
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  # input-text-disabled
  it "disabled" do
    browser.goto files+"input-text-disabled-001.html"
    browser.text_field(:name, "test").click_no_wait
    if browser.text_field(:name, "test").enabled?
      browser.text_field(:name, "test").append "bar"
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "disabled variable variation" do
    browser.goto files+"input-text-disabled-002.html"
    if browser.text_field(:name, "test").enabled?
      browser.text_field(:name, "test").append "bar"
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "disabled variable variation 2" do
    browser.goto files+"input-text-disabled-003.html"
    if browser.text_field(:name, "test").enabled?
      browser.text_field(:name, "test").append "bar"
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Invalid disabled" do
    browser.goto files+"input-text-disabled-004.html"
    if browser.text_field(:name, "test").enabled?
      browser.text_field(:name, "test").append "bar"
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Value of disabled field available in DOM" do
    browser.goto files+"input-text-disabled-005.html"
    browser.text_field(:name, "first_field").enabled?.should == false
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  # input-text-size
  it "size" do
    browser.goto files+"input-text-size-001.html"
    browser.text_field(:name, "test").verify_contains("PASS").should == true
  end

  it "size algorithm" do
    browser.goto files+"input-text-size-002.html"
    browser.text_field(:name, "test").verify_contains("PASS").should == true
  end

  it "Invalid size" do
    browser.goto files+"input-text-size-003.html"
    browser.text_field(:name, "test").verify_contains("PASS").should == true
  end

  it "No size" do
    browser.goto files+"input-text-size-004.html"
    browser.text_field(:name, "test").verify_contains("PASS").should == true
  end
  
  it "High size" do
    browser.goto files+"input-text-size-005.html"
    browser.text_field(:id, "test").verify_contains("PASS").should == true
  end

  # input-text-keys
  it "tabindex" do
    browser.goto files+"input-text-keys-001.html"
    browser.keys.send :Tab
    browser.type "bar"
    browser.keys.send :Tab
    browser.type "ooo"
    browser.keys.send :Tab
    browser.type "foo"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [ooo] [bar]").should == true
  end

  it "accesskey" do
    pending "Awaiting 'Enter access key mode' action support in gogi (WTR-78, CORE-22015)." do
      browser.goto files+"input-text-keys-002.html"
      browser.opera_action "Enter access key mode"
      browser.keys.send "o"
      browser.opera_action "Leave access key mode"
      browser.keys.send :Back
      browser.keys.send :Back
      browser.keys.send :Back
      browser.text_field(:name, "test").verify_contains("foo").should == false
      browser.button(:name, "submit").click
      sleep 1
      browser.text.include?("Result: PASS").should == true
    end
  end

  it "input outside a form" do
    browser.goto files+"input-text-nesting-001.html"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == false
  end

  it "Two nested forms with an input" do
    browser.goto files+"input-text-nesting-002.html"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Two nested forms each with inputs" do
    browser.goto files+"input-text-nesting-003.html"
    browser.button(:name, "submit").click_no_wait  # nothing should happen
    browser.text.include?("Result: FAIL").should == false
    browser.text.include?("Result: PASS").should == false
  end

  it "Two nested forms each with inputs, variation" do
    browser.goto files+"input-text-nesting-004.html"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [Submit] [bar]").should == true
  end

  # input-text-events
  it "onfocus" do
    browser.goto files+"input-text-events-001.html"
    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onblur" do
    browser.goto files+"input-text-events-002.html"
    browser.text_field(:name, "test").click_no_wait
    browser.button(:name, "submit").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onselect" do
    browser.goto files+"input-text-events-003.html"
    browser.keys.send :Tab
    browser.keys.down :Shift
    browser.keys.send :Left
    browser.keys.up :Shift
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onchange" do
    browser.goto files+"input-text-events-004.html"
    browser.text_field(:name, "first_field").set "asd"
    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onclick" do
    browser.goto files+"input-text-events-005.html"
    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "ondblclick" do
    browser.goto files+"input-text-events-006.html"
    #browser.text_field(:name, "test").fire_event "onDblClick"
    browser.text_field(:name, "test").double_click
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onmousedown" do
    browser.goto files+"input-text-events-007.html"
    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onmouseup" do
    browser.goto files+"input-text-events-008.html"
    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onmouseover" do
    browser.goto files+"input-text-events-009.html"
    browser.text_field(:name, "test").fire_event "onMouseOver"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onmousemove" do
    browser.goto files+"input-text-events-010.html"
    browser.text_field(:name, "test").fire_event "onMouseMove"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onmouseout" do
    browser.goto files+"input-text-events-011.html"
    browser.text_field(:name, "test").fire_event "onMouseOut"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onkeypress" do
    browser.goto files+"input-text-events-012.html"
    browser.keys.send :Tab
    browser.keys.send "a"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onkeydown" do
    browser.goto files+"input-text-events-013.html"
    browser.keys.send :Tab
    browser.keys.down :Shift
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.keys.up :Shift
  end

  it "onkeyup" do
    browser.goto files+"input-text-events-014.html"
    browser.keys.send :Tab
    browser.keys.down :Shift
    browser.keys.up :Shift
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "Multiple JS events" do
    browser.goto files+"input-text-events-015.html"
    browser.text_field(:name, "first_field").click_no_wait
    browser.text_field(:name, "test1").verify_contains("foobar").should == true
    browser.text_field(:name, "first_field").set "abc"
    browser.text_field(:name, "test2").verify_contains("foobar").should == true
  end

  it "Empty JS event" do
    browser.goto files+"input-text-events-016.html"
    #does not work    
    #browser.text_field(:name, "test").verify_contains("").should == true
    browser.text_field(:name, "test").click_no_wait
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  #input-password-required
  it "required" do
    browser.goto files+"input-text-required-001.html"
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
    browser.goto files+"input-text-required-002.html"
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
    browser.goto files+"input-text-required-003.html"
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

