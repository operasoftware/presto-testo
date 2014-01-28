######################
# input type="reset" #
######################

require "operawatir/helper"

describe "input type='reset'" do
  # input-reset
  it "Reset field" do
    browser.goto files+"input-reset-001.html"
    browser.text_field(:name, "test").exists?.should == true
    browser.button(:name, "reset").exists?.should == true
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
  end

  it "Reset field variation" do
    browser.goto files+"input-reset-002.html"
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
  end

  it "Reset prefilled field" do
    browser.goto files+"input-reset-003.html"
    browser.button(:name, "test").clear
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "Reset multiple fields" do
    browser.goto files+"input-reset-004.html"
    browser.text_field(:name, "test1").set "foo"
    browser.text_field(:name, "test2").set "bar"
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test1").verify_contains("foo").should == false
    browser.text_field(:name, "test2").verify_contains("bar").should == false
  end

  it "Reset multiple prefilled fields" do
    browser.goto files+"input-reset-005.html"
    browser.text_field(:name, "test1").clear
    browser.text_field(:name, "test2").clear
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test1").verify_contains("foo").should == true
    browser.text_field(:name, "test2").verify_contains("bar").should == true
  end

  it "Reset password field" do
    browser.goto files+"input-reset-006.html"
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
  end

  it "Reset checkbox field" do
    browser.goto files+"input-reset-007.html"
    browser.checkbox(:name, "test").set false
    browser.button(:name, "reset").click_no_wait
    browser.checkbox(:name, "test").checked?.should == true
  end

  it "Reset radio buttons" do
    browser.goto files+"input-reset-008.html"
    browser.radio(:name, "test", "foo").click_no_wait
    browser.button(:name, "reset").click_no_wait
    browser.radio(:name, "test", "bar").checked?.should == true
  end

  it "Reset textarea field" do
    browser.goto files+"input-reset-009.html"
    
    browser.text_field(:name, "text").click
    browser.opera_action "Select all"
    
    browser.keys.down :Control ; browser.keys.send "c" ; browser.keys.up :Control
    #browser.opera_action "Copy"

    browser.text_field(:name, "test").click

    browser.keys.down :Control ; browser.keys.send "v" ; browser.keys.up :Control
    #browser.opera_action "Paste"

    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "Reset file field" do
    browser.goto files+"input-reset-010.html"
    File.open("reset_file_field.txt", "w") do |file|
      file.puts "foobar"
    end
    if File.exists? "reset_file_field.txt"
      browser.file_field(:name, "test").set "reset_file_field.txt"
      browser.button(:name, "reset").click_no_wait
      browser.file_field(:name, "test").verify_contains("reset_file_field.txt").should == false
      File.delete "reset_file_field.txt"
    else
      fail
    end
  end

  it "Reset select field" do
    browser.goto files+"input-reset-011.html"
    browser.select_list(:name, "test").select "foo"
    browser.button(:name, "reset").click_no_wait
    browser.select_list(:name, "test").selected?("bar").should == true
  end

  it "Reset select multiple field" do
    browser.goto files+"input-reset-012.html"
    browser.select_list(:name, "test").select "bird"
    browser.select_list(:name, "test").select "dog"
    browser.select_list(:name, "test").select "fish"
    browser.button(:name, "reset").click_no_wait
    browser.select_list(:name, "test").selected?("cat").should == true
  end
  
  it "Reset select multiple field, variation" do
    browser.goto files+"input-reset-013.html"
    
    browser.select_list(:name, "test").select("bird")
    browser.select_list(:name, "test").selected?("bird").should == true
    browser.select_list(:name, "test").select("fish")
    browser.select_list(:name, "test").selected?("fish").should == true
    
    browser.button(:name, "reset").click_no_wait
    browser.select_list(:name, "test").selected?("bird").should == false
    browser.select_list(:name, "test").selected?("cat").should == true
    browser.select_list(:name, "test").selected?("dog").should == true
    browser.select_list(:name, "test").selected?("fish").should == false
    browser.select_list(:name, "test").selected?("horse").should == false
    browser.select_list(:name, "test").selected?("rabbit").should == false
  end

  it "Reset combinations of fields" do
    browser.goto files+"input-reset-014.html"
    browser.text_field(:name, "test1").clear
    browser.text_field(:name, "test2").clear
    browser.checkbox(:name, "test3").set false
    browser.radio(:name, "test4", "bar").set true
    browser.text_field(:name, "test5").clear
    browser.file_field(:name, "test6").clear
    browser.select_list(:name, "test7").select "bar"

    browser.button(:name, "reset").click_no_wait

    browser.text_field(:name, "test1").verify_contains("foo").should == true
    browser.text_field(:name, "test2").verify_contains("foo").should == true
    browser.checkbox(:name, "test3").checked?.should == true
    browser.radio(:name, "test4", "foo").checked?.should == true
    browser.text_field(:name, "test5").verify_contains("foo").should == true
    browser.select_list(:name, "test7").selected?("foo").should == true
  end

  it "Reset value" do
    browser.goto files+"input-reset-015.html"
    browser.button(:name, "submit").click
    browser.text.include?("You typed: []").should == true
  end

  it "Invalid element in value" do
    browser.goto files+"input-reset-016.html"
    browser.div(:id, "test").exists?.should == false
    browser.button(:name, "test").click_no_wait
  end

  # input-reset-disabled
  it "disabled" do
    browser.goto files+"input-reset-disabled-001.html"
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.text_field(:name, "test").clear
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
  end

  it "disabled variable variation" do
    browser.goto files+"input-reset-disabled-002.html"
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.text_field(:name, "test").clear
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
  end

  it "disabled variable variation 2" do
    browser.goto files+"input-reset-disabled-003.html"
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.text_field(:name, "test").clear
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
  end

  it "Invalid disabled" do
    browser.goto files+"input-reset-disabled-004.html"
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.text_field(:name, "test").clear
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
  end

  it "Value of disabled field available in DOM" do
    browser.goto files+"input-reset-disabled-005.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  # input-reset-keys
  it "accesskey" do
    pending "Awaiting 'Enter access key mode' action support in gogi (WTR-78, CORE-22015)." do
      browser.goto files+"input-reset-keys-001.html"
      browser.text_field(:name, "test").clear
      browser.opera_action "Enter access key mode"
      browser.keys.send "o"
      browser.opera_action "Leave access key mode"
      browser.text_field(:name, "test").verify_contains("foobar").should == true
    end
  end

  it "tabindex" do
    browser.goto files+"input-reset-keys-002.html"
    browser.text_field(:name, "test").clear
    3.times { browser.keys.send :Tab }
    browser.keys.send :Enter
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "Trigger action with enter" do
    browser.goto files+"input-reset-keys-003.html"
    browser.keys.send :Tab
    6.times { browser.keys.send :Backspace }
    browser.keys.send :Tab
    browser.keys.send :Enter
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "Trigger action with space" do
    browser.goto files+"input-reset-keys-004.html"
    browser.keys.send :Tab
    6.times { browser.keys.send :Backspace }
    browser.keys.send :Tab
    browser.keys.send :Space
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  # input-reset-events
  it "Cancelling action request" do
    browser.goto files+"input-reset-events-001.html"
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.text_field(:name, "test").clear
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
  end

  it "onfocus" do
    browser.goto files+"input-reset-events-002.html"
    browser.button(:name, "reset").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onblur" do
    browser.goto files+"input-reset-events-003.html"
    browser.button(:name, "reset").click_no_wait
    browser.button(:name, "random_field").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onclick" do
    browser.goto files+"input-reset-events-004.html"
    browser.button(:name, "reset").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "ondblclick" do
    browser.goto files+"input-reset-events-005.html"
    browser.button(:name, "reset").double_click
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmousedown" do
    browser.goto files+"input-reset-events-006.html"
    browser.button(:name, "reset").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseup" do
    browser.goto files+"input-reset-events-007.html"
    browser.button(:name, "reset").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseover" do
    browser.goto files+"input-reset-events-008.html"
    browser.button(:name, "test").fire_event "onMouseOver"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmousemove" do
    browser.goto files+"input-reset-events-009.html"
    browser.button(:name, "test").fire_event "onMouseMove"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "onmouseout" do
    browser.goto files+"input-reset-events-010.html"
    browser.button(:name, "test").fire_event "onMouseOut"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Multiple JS events" do
    browser.goto files+"input-reset-events-011.html"
    browser.button(:name, "test").fire_event "onMouseOver"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Empty JS event" do
    browser.goto files+"input-reset-events-012.html"
    browser.text_field(:name, "test").clear
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "Adding invalid attribute size through DOM" do
    browser.goto files+"input-reset-events-013.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end
end

