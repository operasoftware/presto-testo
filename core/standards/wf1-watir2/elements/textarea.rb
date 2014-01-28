############
# textarea #
############

require "operawatir/helper"

describe "textarea" do
  # textarea
  it "GET empty content" do
    browser.goto files+"textarea-001.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "POST empty content" do
    browser.goto files+"textarea-002.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "GET content" do
    browser.goto files+"textarea-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "POST content" do
    browser.goto files+"textarea-004.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true
    
    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "long GET content" do
    browser.goto files+"textarea-005.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "long POST content" do
    browser.goto files+"textarea-006.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "clearing textarea" do
    browser.goto files+"textarea-007.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "appending to textarea" do
    browser.goto files+"textarea-008.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").append "bar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "multiple unique inputs" do
    browser.goto files+"textarea-009.html"
    browser.text_field(:name, "test1").exists?.should == true
    browser.text_field(:name, "test2").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test1").verify_contains("foo").should == true
    browser.text_field(:name, "test2").verify_contains("bar").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [bar]").should == true
  end

  it "insane number of unique textareas" do
    pending "Watir bug WTR-163." do
      browser.goto files+"textarea-010.html"
      browser.button(:name, "submit").exists?.should == true
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

  it "multiple duplicate textareas" do
    browser.goto files+"textarea-011.html"
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:value, "foo").exists?.should == true
    browser.text_field(:value, "bar").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo]").should == false
  end

  it "moving to the beginning of the line" do
    browser.goto files+"textarea-012.html"
    browser.button(:name, "submit").exists?.should == true
    browser.keys.send :Tab
    browser.type "bar"
    (0 .. 2).each do |i|
      browser.keys.send :Left    
    end
    browser.type "foo"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "value available in DOM" do
    browser.goto files+"textarea-013.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "clientHeight equals scrollHeight" do
    browser.goto files+"textarea-014.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "clientWidth equals scrollWidth" do
    browser.goto files+"textarea-015.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  #textarea-autofocus
  it "autofocus" do
    browser.goto files+"textarea-autofocus-001.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.type "PASS"
    browser.text_field(:name, "test").verify_contains("PASS").should == true
  end

  it "multiple autofocus" do
    browser.goto files+"textarea-autofocus-002.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.type "PASS"
    browser.text_field(:name, "test").verify_contains("PASS").should == true
  end

  it "empty 'autofocus' attribute" do
    browser.goto files+"textarea-autofocus-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.type "PASS"
    browser.text_field(:name, "test").verify_contains("PASS").should == true
  end

  it "invalid 'autofocus' attribute" do
    browser.goto files+"textarea-autofocus-004.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.type "PASS"
    browser.text_field(:name, "test").verify_contains("PASS").should == true
  end

  # textarea-i18n
  it "Chinese input" do
    browser.goto files+"textarea-i18n-001.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "東京都 伦敦"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [東京都 伦敦]").should == true
  end

  it "Japanese input" do
    browser.goto files+"textarea-i18n-002.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "ペキンし ロンドン"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [ペキンし ロンドン]").should == true
  end

  it "Hindi input" do
    browser.goto files+"textarea-i18n-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "मास्को लंदन"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [मास्को लंदन]").should == true
  end

  it "Norwegian input" do
    browser.goto files+"textarea-i18n-004.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "Og magen var grøn og blå, av steinklaka gorr og slim, og flugor og kvitmakk små, aula i yrjande stim."
    browser.button(:name, "submit").click
    sleep 1     # FIXME: Remove this sleep.
    browser.text.include?("You typed: [Og magen var grøn og blå, av steinklaka gorr og slim, og flugor og kvitmakk små, aula i yrjande stim.]").should == true
  end

  it "Thai input" do
    browser.goto files+"textarea-i18n-005.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "กรุงมอสโก ลอนดอน"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [กรุงมอสโก ลอนดอน]").should == true
  end

  it "Russian input" do
    browser.goto files+"textarea-i18n-006.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "Москва Ло́ндон"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Москва Ло́ндон]").should == true
  end

  it "Arabic input" do
    browser.goto files+"textarea-i18n-007.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "موسكو لندن"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [موسكو لندن]").should == true
  end

  it "Greek input" do
    browser.goto files+"textarea-i18n-008.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "Μόσχα Λονδίνο"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Μόσχα Λονδίνο]").should == true
  end

  it "Korean input" do
    browser.goto files+"textarea-i18n-009.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "모스크바 런던"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [모스크바 런던]").should == true
  end

  it "Vietnamese input" do
    browser.goto files+"textarea-i18n-010.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "Mạc Tư Khoa Luân Đôn"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Mạc Tư Khoa Luân Đôn]").should == true
  end

  it "combining English and Chinese input" do
    browser.goto files+"textarea-i18n-011.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "Moscow 伦敦"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Moscow 伦敦]").should == true
  end

  it "combining Chinese and Japanese input" do
    browser.goto files+"textarea-i18n-012.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "莫斯科 ロンドン"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [莫斯科 ロンドン]").should == true
  end

  it "combining Norwegian and Russian input" do
    browser.goto files+"textarea-i18n-013.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "Færøyene Москва"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Færøyene Москва]").should == true
  end

  # textarea-value
  it "special characters input" do
    browser.goto files+"textarea-value-001.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "> < &"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [> < &]").should == true
  end

  it "append input to special characters value" do
    browser.goto files+"textarea-value-002.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").append "& < >"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [> < & & < >]").should == true
  end

  it "clearing input of special characters value" do
    browser.goto files+"textarea-value-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "prefilled entity input" do
    browser.goto files+"textarea-value-004.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").verify_contains("&").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [&]").should == true
  end

  it "append to entity value" do
    browser.goto files+"textarea-value-005.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").append "© € ¶ þ"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [& æ Ð © € ¶ þ]").should == true
  end

  it "clearing input of entity value" do
    browser.goto files+"textarea-value-006.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "another element inside value" do
    browser.goto files+"textarea-value-007.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").verify_contains("<div id='test2'>foobar</div>").should == true
    browser.div(:id, "test2").exists?.should == false
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [<div id='test2'>foobar</div>]").should == true
  end

  it "carriage return inside value" do
    browser.goto files+"textarea-value-008.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "new line inside value" do
    browser.goto files+"textarea-value-009.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "concatenation of two values" do
    browser.goto files+"textarea-value-010.html"
    browser.text_field(:name, "first_field").exists?.should == true
    browser.text_field(:name, "second_field").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "first_field").verify_contains("foo").should == true
    browser.text_field(:name, "second_field").verify_contains("bar").should == true
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end


  # textarea-maxlength
  # does not seem to be implemented for textarea's yet
  it "regular maxlength" do
    browser.goto files+"textarea-maxlength-001.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo]").should == true
  end

  it "high maxlength" do
    browser.goto files+"textarea-maxlength-002.html"
    browser.text_field(:name, "text").exists?.should == true
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

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

  it "empty 'maxlength' attribute" do
    browser.goto files+"textarea-maxlength-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "invalid 'maxlength' attribute" do
    browser.goto files+"textarea-maxlength-004.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "value of 'maxlength' attribute available in DOM" do
    browser.goto files+"textarea-maxlength-005.html"
    browser.text_field(:name, "first_field").exists?.should == true
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "first_field").exists?.should == true
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "dynamic maxlength change" do
    browser.goto files+"textarea-maxlength-006.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").set "foobar"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo]").should == true
  end

  # textarea-readonly
  it "'readonly' attribute" do
    browser.goto files+"textarea-readonly-001.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "'readonly' attribute, variation" do
    browser.goto files+"textarea-readonly-002.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "invalid 'readonly' attribute" do
    browser.goto files+"textarea-readonly-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "empty 'readonly' attribute" do
    browser.goto files+"textarea-readonly-004.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").clear
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "value of readonly textarea available in DOM" do
    browser.goto files+"textarea-readonly-005.html"
    browser.text_field(:name, "first_field").exists?.should == true
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "first_field").verify_contains("foobar").should == true
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  # textarea-disabled
  it "disabled" do
    browser.goto files+"textarea-disabled-001.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").click_no_wait
    if browser.text_field(:name, "test").enabled?
      browser.text_field(:name, "test").append "bar"
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "'disabled' attribute, variation" do
    browser.goto files+"textarea-disabled-002.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    if browser.text_field(:name, "test").enabled?
      browser.text_field(:name, "test").append "bar"
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "'disabled' attribute, variation 2" do
    browser.goto files+"textarea-disabled-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    if browser.text_field(:name, "test").enabled?
      browser.text_field(:name, "test").append "bar"
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "invalid 'disabled' attribute" do
    browser.goto files+"textarea-disabled-004.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    if browser.text_field(:name, "test").enabled?
      browser.text_field(:name, "test").append "bar"
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "value of disabled textarea available in DOM" do
    browser.goto files+"textarea-disabled-005.html"
    browser.text_field(:name, "first_field").exists?.should == true
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "first_field").enabled?.should == false
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  # textarea-cols
  it "cols comparison" do
    browser.goto files+"textarea-cols-001.html"
    browser.text_field(:name, "result").exists?.should == true
    browser.text_field(:name, "result").verify_contains("PASS").should == true
  end

  it "invalid cols" do
    browser.goto files+"textarea-cols-002.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").verify_contains("PASS").should == true
  end

  it "'cols' attribute available in DOM" do
    browser.goto files+"textarea-cols-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").verify_contains("10").should == true
  end

  it "default 'cols' value available in DOM" do
    browser.goto files+"textarea-cols-004.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").verify_contains("PASS").should == true
  end

  # textarea-rows
  it "rows comparison" do
    browser.goto files+"textarea-rows-001.html"
    browser.text_field(:name, "result").exists?.should == true
    browser.text_field(:name, "result").verify_contains("PASS").should == true
  end

  it "invalid rows" do
    browser.goto files+"textarea-rows-002.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").verify_contains("PASS").should == true
  end

  it "rows value available in DOM" do
    browser.goto files+"textarea-rows-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").verify_contains("1").should == true
  end

  it "default rows value available in DOM" do
    browser.goto files+"textarea-rows-004.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").verify_contains("PASS").should == true
  end

  # textarea-keys
  it "tabindex" do
    browser.goto files+"textarea-keys-001.html"
    browser.button(:name, "submit").exists?.should == true
    browser.keys.send :Tab
    browser.type "bar"
    browser.keys.send :Tab
    browser.type "ooo"
    browser.keys.send :Tab
    browser.type "foo"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [ooo] [bar]").should == true
  end
  
  # textarea-nested
  it "input outside a form" do
    browser.goto files+"textarea-nesting-001.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == false
  end

  it "two nested forms with a textarea" do
    browser.goto files+"textarea-nesting-002.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "two nested forms each with textareas" do
    browser.goto files+"textarea-nesting-003.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click_no_wait  # nothing should happen
    browser.text.include?("Result: FAIL").should == false
    browser.text.include?("Result: PASS").should == false
  end

  it "two nested forms each with textareas, variation" do
    browser.goto files+"textarea-nesting-004.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [Submit] [bar]").should == true
  end

  # textarea-events
  it "onfocus" do
    browser.goto files+"textarea-events-001.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onblur" do
    browser.goto files+"textarea-events-002.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.text_field(:name, "test").click_no_wait
    browser.button(:name, "submit").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onselect" do
    browser.goto files+"textarea-events-003.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.keys.send :Tab
    browser.keys.down :Shift
    browser.keys.send :Left
    browser.keys.up :Shift
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onchange" do
    browser.goto files+"textarea-events-004.html"
    browser.text_field(:name, "first_field").exists?.should == true
    browser.text_field(:name, "test").exists?.should == true

    browser.text_field(:name, "first_field").set "asd"
    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onclick" do
    browser.goto files+"textarea-events-005.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "ondblclick" do
    browser.goto files+"textarea-events-006.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").double_click
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onmousedown" do
    browser.goto files+"textarea-events-007.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onmouseup" do
    browser.goto files+"textarea-events-008.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onmouseover" do
    browser.goto files+"textarea-events-009.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").fire_event "onMouseOver"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onmousemove" do
    browser.goto files+"textarea-events-010.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").fire_event "onMouseMove"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onmouseout" do
    browser.goto files+"textarea-events-011.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").fire_event "onMouseOut"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onkeypress" do
    browser.goto files+"textarea-events-012.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.keys.send :Tab
    browser.keys.send "a"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "onkeydown" do
    browser.goto files+"textarea-events-013.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.keys.send :Tab
    browser.keys.down :Shift
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.keys.up :Shift
  end

  it "onkeyup" do
    browser.goto files+"textarea-events-014.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.keys.send :Tab
    browser.keys.down :Shift
    browser.keys.up :Shift
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "multiple JS events" do
    browser.goto files+"textarea-events-015.html"
    browser.text_field(:name, "first_field").exists?.should == true
    browser.text_field(:name, "test1").exists?.should == true
    browser.text_field(:name, "test2").exists?.should == true

    browser.text_field(:name, "first_field").click_no_wait
    browser.text_field(:name, "test1").verify_contains("foobar").should == true
    browser.text_field(:name, "first_field").set "abc"
    browser.text_field(:name, "test2").verify_contains("foobar").should == true
  end

  it "empty JS event" do
    browser.goto files+"textarea-events-016.html"
    browser.text_field(:name, "test").exists?.should == true
    #does not work
    #browser.text_field(:name, "test").verify_contains("").should == true
    browser.text_field(:name, "test").click_no_wait
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  #input-password-required
  it "required" do
    browser.goto files+"textarea-required-001.html"
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
    browser.goto files+"textarea-required-002.html"
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
    browser.goto files+"textarea-required-003.html"
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

