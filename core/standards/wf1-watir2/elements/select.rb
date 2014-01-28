##########
# select #
##########

require "operawatir/helper"

describe "select" do
  #select-optgroup
  it "all options can be selected" do
    browser.goto files+"select-optgroup-001.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.keys.send :Tab
    for i in (1..3)
      for j in (1..3)
        optionName = "foobar#{i}-#{j}"
        browser.select_list(:name, "test").selected?(optionName).should == true
        browser.keys.send :Enter
        browser.keys.send :Down
        browser.keys.send :Enter
      end
    end
  end

  it "Disabled optgroup cannot be selected" do
    browser.goto files+"select-optgroup-002.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.keys.send :Tab
    for i in (1..3)
      next if i == 2
      for j in (1..3)
        optionName = "foobar#{i}-#{j}"
        browser.select_list(:name, "test").selected?(optionName).should == true
        browser.keys.send :Enter
        browser.keys.send :Down
        browser.keys.send :Enter
      end
    end
  end

  it "Disabled optgroup cannot be selected, variation" do
    browser.goto files+"select-optgroup-003.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.keys.send :Tab
    for i in (1..3)
      #group 2 should be skipped
      next if i == 2
      for j in (1..3)
        optionName = "foobar#{i}-#{j}"
        browser.select_list(:name, "test").selected?(optionName).should == true
        browser.keys.send :Enter
        browser.keys.send :Down
        browser.keys.send :Enter
      end
    end
  end

  it "Empty disabled optgroup cannot be selected" do
    browser.goto files+"select-optgroup-004.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.keys.send :Tab
    for i in (1..3)
      #group 2 should be skipped
      next if i == 2
      for j in (1..3)
        optionName = "foobar#{i}-#{j}"
        browser.select_list(:name, "test").selected?(optionName).should == true
        browser.keys.send :Enter
        browser.keys.send :Down
        browser.keys.send :Enter
      end
    end
  end

  it "Invalid disabled value optgroup cannot be selected" do
    browser.goto files+"select-optgroup-005.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.keys.send :Tab
    for i in (1..3)
      #group 2 should be skipped
      next if i == 2
      for j in (1..3)
        optionName = "foobar#{i}-#{j}"
        browser.select_list(:name, "test").selected?(optionName).should == true
        browser.keys.send :Enter
        browser.keys.send :Down
        browser.keys.send :Enter
      end
    end
  end

  it "multiple option, variation" do
    browser.goto files+"select-options-004.html"
    browser.keys.send :Tab
    browser.keys.send :Space
    browser.keys.send :Down
    browser.keys.send :Down
    browser.keys.send :Down
    browser.keys.send :Down
    browser.keys.send :Down
    browser.keys.send :Space
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar1] [foobar6]").should == true
  end

  it "support javascript add option" do
    browser.goto files+"select-options-005.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "support javascript remove option" do
    browser.goto files+"select-options-006.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  # select
  it "GET input" do
    browser.goto files+"select-001.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "POST input" do
    browser.goto files+"select-002.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Long GET input" do
    browser.goto files+"select-003.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Long POST input" do
    browser.goto files+"select-004.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Multiple unique inputs" do
    browser.goto files+"select-005.html"
    browser.select_list(:name, "test1").exists?.should == true
    browser.select_list(:name, "test2").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.select_list(:name, "test1").verify_contains("foo").should == true
    browser.select_list(:name, "test2").verify_contains("bar").should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [bar]").should == true
  end

  it "Insane number of unique inputs" do
    pending "Watir bug WTR-163." do
      browser.goto files+"select-006.html"
      browser.button(:name, "submit").exists?.should == true
      browser.button(:name, "submit").click
      browser.text.include?("Result: PASS").should == true
    end
  end

  it "Multiple duplicate inputs" do
    browser.goto files+"select-007.html"
    browser.select_list(:value, "foo").exists?.should == true
    browser.select_list(:value, "bar").exists?.should == true
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo]").should == false
  end

  it "Value available in DOM" do
    browser.goto files+"select-008.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "increasing option value length" do
    browser.goto files+"select-009.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  #select-autofocus
  it "autofocus" do
    browser.goto files+"select-autofocus-001.html"
    browser.keys.send :Space
    browser.keys.send :Down
    browser.keys.send :Enter
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name, "test").selected?("PASS").should == true
  end

  it "multiple autofocus" do
    browser.goto files+"select-autofocus-002.html"
    browser.keys.send :Space
    browser.keys.send :Down
    browser.keys.send :Enter
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name, "test").selected?("PASS").should == true
  end

  it "empty autofocus variable" do
    browser.goto files+"select-autofocus-003.html"
    browser.keys.send :Space
    browser.keys.send :Down
    browser.keys.send :Enter
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name, "test").selected?("PASS").should == true
  end

  it "invalid autofocus variable" do
    browser.goto files+"select-autofocus-004.html"
    browser.keys.send :Space
    browser.keys.send :Down
    browser.keys.send :Enter
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name, "test").selected?("PASS").should == true
  end

  #select-size
  it "increasing size" do
    browser.goto files+"select-size-001.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "default size accessible in DOM" do
    browser.goto files+"select-size-002.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "invalid size accessible in DOM" do
    browser.goto files+"select-size-003.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "size accessible in DOM" do
    browser.goto files+"select-size-004.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  # select-i18n
  it "Chinese input" do
    browser.goto files+"select-i18n-001.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [東京都 伦敦]").should == true
  end

  it "Japanese input" do
    browser.goto files+"select-i18n-002.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [ペキンし ロンドン]").should == true
  end

  it "Hindi input" do
    browser.goto files+"select-i18n-003.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [मास्को लंदन]").should == true
  end

  it "Norwegian input" do
    browser.goto files+"select-i18n-004.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Og magen var grøn og blå, av steinklaka gorr og slim, og flugor og kvitmakk små, aula i yrjande stim.]").should == true
  end

  it "Thai input" do
    browser.goto files+"select-i18n-005.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [กรุงมอสโก ลอนดอน]").should == true
  end

  it "Russian input" do
    browser.goto files+"select-i18n-006.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Москва Ло́ндон]").should == true
  end

  it "Arabic input" do
    browser.goto files+"select-i18n-007.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [موسكو لندن]").should == true
  end

  it "Greek input" do
    browser.goto files+"select-i18n-008.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Μόσχα Λονδίνο]").should == true
  end

  it "Korean input" do
    browser.goto files+"select-i18n-009.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [모스크바 런던]").should == true
  end

  it "Vietnamese input" do
    browser.goto files+"select-i18n-010.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Mạc Tư Khoa Luân Đôn]").should == true
  end

  it "Combining English and Chinese input" do
    browser.goto files+"select-i18n-011.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Moscow 伦敦]").should == true
  end

  it "Combining Chinese and Japanese input" do
    browser.goto files+"select-i18n-012.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [莫斯科 ロンドン]").should == true
  end

  it "Combining Norwegian and Russian input" do
    browser.goto files+"select-i18n-013.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [Færøyene Москва]").should == true
  end

  # select-value
  it "Special characters input" do
    browser.goto files+"select-value-001.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [> < &]").should == true
  end

  it "Prefilled entity input" do
    browser.goto files+"select-value-002.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [&]").should == true
  end

  # select-disabled
  it "disabled" do
    browser.goto files+"select-disabled-001.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.select_list(:name, "test").click_no_wait
    if browser.select_list(:name, "test").enabled?
      browser.select_list( :name , "test").select("foobar")
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "disabled variable variation" do
    browser.goto files+"select-disabled-002.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.select_list(:name, "test").click_no_wait
    if browser.select_list(:name, "test").enabled?
      browser.select_list( :name , "test").select("foobar")
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "disabled variable variation 2" do
    browser.goto files+"select-disabled-003.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.select_list(:name, "test").click_no_wait
    if browser.select_list(:name, "test").enabled?
      browser.select_list( :name , "test").select("foobar")
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Invalid disabled" do
    browser.goto files+"select-disabled-004.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.select_list(:name, "test").click_no_wait
    if browser.select_list(:name, "test").enabled?
      browser.select_list( :name , "test").select("foobar")
    end
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  it "Value of disabled field available in DOM" do
    browser.goto files+"select-disabled-005.html"
    browser.p(:name, "result").exists?.should == true
    browser.p(:name, "result").text.include?("foobar").should == true
  end


  # select-keys
  it "tabindex" do
    browser.goto files+"select-keys-001.html"
    browser.button(:name, "submit").exists?.should == true

    browser.keys.send :Tab
    browser.keys.send :Space
    browser.keys.send :Down
    browser.keys.send :Enter

    browser.keys.send :Tab
    browser.keys.send :Space
    browser.keys.send :Down
    browser.keys.send :Enter

    browser.keys.send :Tab
    browser.keys.send :Space
    browser.keys.send :Down
    browser.keys.send :Enter

    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [ooo] [bar]").should == true
  end

  # select-nested
  it "select outside a form" do
    browser.goto files+"select-nesting-001.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == false
  end

  it "Two nested forms with a select" do
    browser.goto files+"select-nesting-002.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar]").should == true
  end

  it "Two nested forms each with select" do
    browser.goto files+"select-nesting-003.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click_no_wait  # nothing should happen
    browser.text.include?("Result: FAIL").should == false
    browser.text.include?("Result: PASS").should == false
  end

  it "Two nested forms each with selects, variation" do
    browser.goto files+"select-nesting-004.html"
    browser.button(:name, "submit").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo] [Submit] [bar]").should == true
  end

  # select-events
  it "onfocus" do
    browser.goto files+"select-events-001.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name, "test").click_no_wait
    browser.select_list(:name, "test").selected?("foobar").should == true
  end

  it "onblur" do
    browser.goto files+"select-events-002.html"
    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name, "test").selected?("foobar").should == true
  end

  it "onchange" do
    browser.goto files+"select-events-003.html"
    browser.select_list(:name, "first_field").exists?.should == true
    browser.select_list(:name, "test").exists?.should == true

    browser.select_list( :name , "first_field").select("foo")
    browser.select_list(:name, "test").selected?("foobar").should == true
  end

  it "onclick" do
    browser.goto files+"select-events-004.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name, "test").click_no_wait
    browser.select_list(:name, "test").click_no_wait
    browser.select_list(:name, "test").selected?("foobar").should == true
  end
  
  it "ondblclick" do
    pending "Does not currently work." do
      browser.goto files+"select-events-005.html"
      browser.select_list(:name, "test").exists?.should == true
      browser.select_list(:name, "test").option(:value, 'Double click me!').fire_event "onDblClick"
      browser.select_list(:name, "test").selected?("foobar").should == true
    end
  end

  it "onmousedown" do
    browser.goto files+"select-events-006.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name, "test").click_no_wait
    browser.select_list(:name, "test").selected?("foobar").should == true
  end

  it "onmouseup" do
    browser.goto files+"select-events-007.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name, "test").click_no_wait
    browser.select_list(:name, "test").selected?("foobar").should == true
  end

  it "onmouseover" do
    browser.goto files+"select-events-008.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name, "test").fire_event "onMouseOver"
    browser.select_list(:name, "test").selected?("foobar").should == true
  end

  it "onmousemove" do
    browser.goto files+"select-events-009.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name, "test").fire_event "onMouseMove"
    browser.select_list(:name, "test").selected?("foobar").should == true
  end

  it "onmouseout" do
    browser.goto files+"select-events-010.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name, "test").fire_event "onMouseOut"
    browser.select_list(:name, "test").selected?("foobar").should == true
  end

  it "onkeypress" do
    browser.goto files+"select-events-011.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.keys.send :Tab
    browser.keys.send "a"
    browser.select_list(:name, "test").selected?("foobar").should == true
  end

  it "onkeydown" do
    browser.goto files+"select-events-012.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.keys.send :Tab
    browser.keys.send "a"
    browser.select_list(:name, "test").selected?("foobar").should == true
  end

  it "onkeyup" do
    browser.goto files+"select-events-013.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.keys.send :Tab
    browser.keys.send "a"
    browser.select_list(:name, "test").selected?("foobar").should == true
  end

  it "Multiple JS events" do
    browser.goto files+"select-events-014.html"
    browser.select_list(:name, "first_field").exists?.should == true
    browser.select_list(:name, "test1").exists?.should == true
    browser.select_list(:name, "test2").exists?.should == true

    browser.select_list(:name, "first_field").click_no_wait
    browser.select_list(:name, "test1").selected?("foobar").should == true
    browser.keys.send "a"
    browser.select_list(:name, "test2").selected?("foobar").should == true
  end

  it "Empty JS event" do
    browser.goto files+"select-events-015.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.button(:name, "submit").exists?.should == true

    browser.select_list(:name, "test").selected?("").should == true
    browser.select_list(:name, "test").click_no_wait
    browser.button(:name, "submit").click
    browser.text.include?("Result: PASS").should == true
  end

  #select-options
  it "Disabled option cannot be selected" do
    browser.goto files+"select-options-001.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.select_list(:name , "test").select("foobar1")
    browser.select_list(:name, "test").selected?("foobar1").should == true

    #foobar2 is disabled, so foobar3 should get selected (due to how OperaWatir 
    #handles the select request of a disabled option)
    browser.select_list(:name , "test").select("foobar2")
    browser.select_list(:name, "test").selected?("foobar2").should == false
    browser.select_list(:name, "test").selected?("foobar3").should == true

    browser.select_list(:name , "test").select("foobar3")
    browser.select_list(:name, "test").selected?("foobar3").should == true
  end

  it "Disabled option cannot be selected, variation" do
    browser.goto files+"select-options-002.html"
    browser.select_list(:name, "test").exists?.should == true
    browser.keys.send :Tab
    browser.keys.send :Down
    browser.select_list(:name, "test").selected?("foobar1").should == true
    
    #foobar2 should be skipped
    browser.keys.send :Down
    browser.select_list(:name, "test").selected?("foobar2").should == false
    browser.select_list(:name, "test").selected?("foobar3").should == true
  end

  it "multiple option" do
    browser.goto files+"select-options-003.html"
    browser.button(:name, "submit").exists?.should == true
    browser.keys.send :Tab
    browser.keys.send :Space
    browser.keys.send :Down
    browser.keys.send :Space
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar1] [foobar2]").should == true
  end

  it "multiple option, variation" do
    browser.goto files+"select-options-004.html"
    browser.button(:name, "submit").exists?.should == true
    browser.keys.send :Tab
    browser.keys.send :Space
    browser.keys.send :Down
    browser.keys.send :Down
    browser.keys.send :Down
    browser.keys.send :Down
    browser.keys.send :Down
    browser.keys.send :Space
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foobar1] [foobar6]").should == true
  end

  it "support javascript add option" do
    browser.goto files+"select-options-005.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "support javascript remove option" do
    browser.goto files+"select-options-006.html"
    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").verify_contains("PASS").should == true
  end
end

