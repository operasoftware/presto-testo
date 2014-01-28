# -*- coding: utf-8 -*-
##########
# button #
##########

require "operawatir/helper"

describe "button" do
  before :all do
    @files = "http://t/core/standards/wf1/interactive/"
  end

  # button
  it "button, Empty button" do
    browser.goto @files + "button-001.html"
    browser.button(:name, "test").exists?.should == true
    browser.button(:name, "test").click
    browser.text.should include("Result: PASS")
  end

  it "button, Empty button, without closing tag" do
    browser.goto @files + "button-002.html"
    browser.button(:name, "test").exists?.should == true
    browser.button(:name, "test").click
    browser.text.should include("Result: PASS")
  end

  it "button, Empty button, with self-closing tag" do
    browser.goto @files + "button-003.html"
    browser.button(:name, "test").exists?.should == true
    browser.button(:name, "test").text.strip.should == "This should be inside button"
    browser.button(:name, "test").click
    browser.text.should include("Result: PASS")
  end

  it "button, Type" do
    browser.goto @files + "button-004.html"
    browser.button(:name, "test").exists?.should == true
    browser.button(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "test").click_no_wait
    browser.text.should include("Clicking it should trigger no actions.")
  end

  it "button, Invalid type" do
    browser.goto @files + "button-005.html"
    browser.button(:name, "test").exists?.should == true
    browser.button(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "test").click
    browser.text.should include("Result: PASS")
  end

  it "button, Invalid type, checkbox" do
    browser.goto @files + "button-006.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Invalid type, hidden" do
    browser.goto @files + "button-007.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Invalid type, image" do
    browser.goto @files + "button-008.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Invalid type, password" do
    browser.goto @files + "button-009.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Invalid type, radio" do
    browser.goto @files + "button-010.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Invalid type, text" do
    browser.goto @files + "button-011.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Invalid size attribute" do
    browser.goto @files + "button-012.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, Invalid src attribute" do
    browser.goto @files + "button-013.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Invalid readonly attribute" do
    browser.goto @files + "button-014.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  # button-autofocus
  it "button, autofocus button" do
    # @autofocus not implemented, CORE-25555
    browser.goto @files + "button-autofocus-001.html"
    browser.button(:name, "test").exists?.should == true
    browser.keys.send :Enter
    browser.text.should include("Result: PASS")
  end

  it "button, autofocus button, variation" do
    # @autofocus not implemented, CORE-25555
    browser.goto @files + "button-autofocus-002.html"
    browser.button(:name, "test").exists?.should == true
    browser.keys.send :Enter
    browser.text.should include("Result: PASS")
  end

  it "button, invalid value autofocus button" do
    # @autofocus not implemented, CORE-25555
    browser.goto @files + "button-autofocus-003.html"
    browser.button(:name, "test").exists?.should == true
    browser.keys.send :Enter
    browser.text.should include("Result: PASS")
  end

  # button-content
  it "button, Caption" do
    browser.goto @files + "button-content-001.html"
    browser.button(:name, "test").verify_contains("foobar").should == true
  end

  it "button, i18n support in caption" do
    browser.goto @files + "button-content-002.html"
    browser.button(:name, "test").verify_contains("Færøyene").should == true
  end

  it "button, Entities support in caption, variation 1" do
    browser.goto @files + "button-content-003.html"
    browser.button(:name, "test").verify_contains("&").should == true
  end

  it "button, Entities support in caption, variation 2" do
    browser.goto @files + "button-content-004.html"
    browser.button(:name, "test").verify_contains("&").should == true
  end

  it "button, HTML support in caption" do
    browser.goto @files + "button-content-005.html"
    browser.button(:name, "test").text.strip.should == "Lorem ipsum dolor sit amet"
    browser.div(:id, "test2").exists?.should == true
  end

  it "button, Image support in caption, image/jpeg" do
    browser.goto @files + "button-content-006.html"
    browser.button(:name, "test").visual_hash.should == browser.image(:id, "reference").visual_hash
  end

  it "button, Image support in caption, image/png" do
    browser.goto @files + "button-content-007.html"
    browser.button(:name, "test").visual_hash.should == browser.image(:id, "reference").visual_hash
  end

  it "button, Image support in caption, image/svg+xml" do
    # SVG images in buttons does not load on first attempt, CORE-XXXX
    browser.goto @files + "button-content-008.html"
    browser.button(:name, "test").visual_hash.should == browser.image(:id, "reference").visual_hash
  end

  it "button, Image support in caption, image/gif" do
    browser.goto @files + "button-content-009.html"
    sleep(6)  # This is an animated GIF.
    browser.button(:name, "test").visual_hash.should == browser.image(:id, "reference").visual_hash
  end

  it "button, iframe support in caption" do
    browser.goto @files + "button-content-010.html"
    browser.frame(:index, 1)
    browser.text.should include("Result: PASS")
  end

  it "button, Input checkbox element in caption" do
    browser.goto @files + "button-content-011.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Input hidden element in caption" do
    browser.goto @files + "button-content-012.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Input image element in caption" do
    browser.goto @files + "button-content-013.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Input password element in caption" do
    browser.goto @files + "button-content-014.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Input radio element in caption" do
    browser.goto @files + "button-content-015.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Input reset element in caption" do
    browser.goto @files + "button-content-016.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Input submit element in caption" do
    browser.goto @files + "button-content-017.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Input text element in caption" do
    browser.goto @files + "button-content-018.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Textarea element in caption" do
    browser.goto @files + "button-content-019.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Label element in caption" do
    browser.goto @files + "button-content-020.html"
    browser.button(:name, "test").click #click_no_wait
    browser.type "foobar"
    browser.text_field(:name, "test2").verify_contains("foobar").should == false
  end

  it "button, Select element in caption" do
    browser.goto @files + "button-content-021.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  # button-value
  it "button, Standard value through GET" do
    browser.goto @files + "button-value-001.html"
    browser.button(:name, "test").click
    browser.text.should include("Result: PASS")
  end

  it "button, Standard value through POST" do
    browser.goto @files + "button-value-002.html"
    browser.button(:name, "test").click
    browser.text.should include("Result: PASS")
  end

  it "button, Alternate value through GET" do
    browser.goto @files + "button-value-003.html"
    browser.button(:name, "test").click
    browser.text.should include("You typed: [foobar]")
  end

  it "button, Alternate value through POST" do
    browser.goto @files + "button-value-004.html"
    browser.button(:name, "test").click
    browser.text.should include("You typed: [foobar]")
  end

  it "button, Entities in value through GET" do
    browser.goto @files + "button-value-005.html"
    browser.button(:name, "test").click
    browser.text.should include("You typed: [&]")
  end

  it "button, Entities in value through POST" do
    browser.goto @files + "button-value-006.html"
    browser.button(:name, "test").click
    browser.text.should include("You typed: [&]")
  end

  it "button, HTML in value through GET" do
    browser.goto @files + "button-value-007.html"
    browser.button(:name, "test").click
    browser.text.should include("You typed: [<div id='test2'>foobar</div>]")
  end

  it "button, HTML in value through POST" do
    browser.goto @files + "button-value-008.html"
    browser.button(:name, "test").click
    browser.text.should include("You typed: [<div id='test2'>foobar</div>]")
  end

  it "button, i18n support in value" do
    browser.goto @files + "button-value-009.html"
    browser.button(:name, "test").click
    browser.text.should include("You typed: [Færøyene]")
  end

  it "button, Invalid type with GET" do
    browser.goto @files + "button-value-010.html"
    browser.button(:name, "test").click
    browser.text.should include("You typed: [foobar]")
  end

  it "button, Invalid type with POST" do
    browser.goto @files + "button-value-011.html"
    browser.button(:name, "test").click
    browser.text.should include("You typed: [foobar]")
  end

  it "button, Value of button available in DOM" do
    browser.goto @files + "button-value-012.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, Empty value through GET" do
    browser.goto @files + "button-value-013.html"
    browser.button(:name, "test").click
    browser.text.should include("Result: PASS")
  end

  it "button, Empty value through POST" do
    browser.goto @files + "button-value-014.html"
    browser.button(:name, "test").click
    browser.text.should include("Result: PASS")
  end

  # button type="submit"
  it "button, Standard submit button" do
    browser.goto @files + "button-type-submit-001.html"
    browser.button(:name, "submit").click
    browser.text.should include("Result: PASS")
  end

  it "button, Alternative submit button" do
    browser.goto @files + "button-type-submit-002.html"
    browser.button(:name, "submit").click
    browser.text.should include("Result: PASS")
  end

  it "button, Submit button in combination with other fields" do
    browser.goto @files + "button-type-submit-003.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [foobar]")
  end

  it "button, Multiple unique submit buttons in the same form" do
    browser.goto @files + "button-type-submit-004.html"
    browser.button(:name, "submit2").click
    browser.text.should include("Result: PASS")
  end

  it "button, Multiple unique submit buttons in separate forms" do
    browser.goto @files + "button-type-submit-005.html"
    browser.button(:name, "submit1").click
    browser.text.should include("Result: PASS")
  end

  it "button, Multiple duplicate submit buttons in the same form" do
    browser.goto @files + "button-type-submit-006.html"
    browser.button(:id, "test").click
    browser.text.should include("Result: PASS")
  end

  it "button, Multiple dupblicate submit buttons in separate forms" do
    browser.goto @files + "button-type-submit-007.html"
    browser.button(:id, "second_button").click
    browser.text.should include("You typed: [bar]")
  end

  # button-type-reset
  it "button, Reset field" do
    browser.goto @files + "button-type-reset-001.html"
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
  end

  it "button, Reset field, variation" do
    browser.goto @files + "button-type-reset-002.html"
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
  end

  it "button, Reset prefilled field" do
    browser.goto @files + "button-type-reset-003.html"
    browser.text_field(:name, "test").clear
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

  it "button, Reset multiple fields" do
    browser.goto @files + "button-type-reset-004.html"
    browser.text_field(:name, "test1").set "foo"
    browser.text_field(:name, "test1").verify_contains("foo").should == true
    browser.text_field(:name, "test2").set "bar"
    browser.text_field(:name, "test2").verify_contains("bar").should == true
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test1").verify_contains("foo").should == false
    browser.text_field(:name, "test2").verify_contains("bar").should == false
  end

  it "button, Reset multiple prefilled fields" do
    browser.goto @files + "button-type-reset-005.html"
    browser.text_field(:name, "test1").clear
    browser.text_field(:name, "test2").clear
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test1").verify_contains("foo").should == true
    browser.text_field(:name, "test2").verify_contains("bar").should == true
  end

  it "button, Reset password field" do
    browser.goto @files + "button-type-reset-006.html"
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
  end

  it "button, Reset checkbox field" do
    browser.goto @files + "button-type-reset-007.html"
    browser.checkbox(:name, "test").click_no_wait
    browser.button(:name, "reset").click_no_wait
    browser.checkbox(:name, "test").checked?.should == true
  end

  it "button, Reset radio buttons" do
    browser.goto @files + "button-type-reset-008.html"
    browser.radio(:name, "test", "foo").set true
    browser.button(:name, "reset").click_no_wait
    browser.radio(:name, "test", "foo").checked?.should == false
  end

  it "button, Reset textarea field" do
    browser.goto @files + "button-type-reset-009.html"
    browser.text_field(:name, "test").set "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui."
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
  end

=begin
  it "button, Reset file field" do
    browser.goto @files + "button-type-reset-010.html"
    browser.file_field(:name, "test").set "foobar.txt"
    browser.button(:name, "reset").click_no_wait
    browser.file_field(:name, "test").verify_contains("foobar.txt").should == false
  end
=end

  it "button, Reset select field" do
    browser.goto @files + "button-type-reset-011.html"
    browser.select_list(:name, "test").select "foo"
    browser.button(:name, "reset").click_no_wait
    browser.select_list(:name, "test").selected?("bar").should == true
  end

  it "button, Reset select multiple field" do
    browser.goto @files + "button-type-reset-012.html"
    browser.select_list(:name, "test").select "bird"
    browser.select_list(:name, "test").select "dog"
    browser.select_list(:name, "test").select "fish"
    browser.button(:name, "reset").click_no_wait
    browser.select_list(:name, "test").selected?("cat").should == true
  end

  it "button, Reset select multiple field, variation" do
    browser.goto @files + "button-type-reset-013.html"
    browser.select_list(:name, "test").select "bird"
    browser.select_list(:name, "test").select "fish"
    browser.select_list(:name, "test").select "horse"
    browser.button(:name, "reset").click_no_wait
    browser.select_list(:name, "test").selected?("cat").should == true
    browser.select_list(:name, "test").selected?("dog").should == true  # FIXME: WTR-8
  end

  it "button, Reset combinations of fields" do
    browser.goto @files + "button-type-reset-014.html"

    #File.open("test.txt", "w" ) do |f|
    #  f.puts "foobar"
    #end

    browser.text_field(:name, "test1").clear
    browser.text_field(:name, "test2").clear
    browser.checkbox(:name, "test3").set false
    browser.radio(:name, "test4", "bar").set true
    browser.text_field(:name, "test5").clear
    #browser.file_field(:name, "test6").set "test.txt";
    browser.select_list(:name, "test7").select "bar"

    browser.button(:name, "reset").click_no_wait

    browser.text_field(:name, "test1").verify_contains("foo").should == true
    browser.text_field(:name, "test2").verify_contains("foo").should == true
    browser.checkbox(:name, "test3").checked?.should == true
    browser.radio(:name, "test4", "foo").checked?.should == true
    browser.text_field(:name, "test5").verify_contains("foo").should == true
    #browser.file_field(:name, "test6").verify_contains("").should == true
    browser.select_list(:name, "test7").selected?("foo").should == true

    #File.delete("test.txt")
  end

  it "button, Reset value" do
    browser.goto @files + "button-type-reset-015.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: []")
  end

  # button-type-combinations
  it "button, Submit button in combination with regular button" do
    browser.goto @files + "button-type-combinations-001.html"
    browser.button(:name, "test").click
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [PASS]")
  end

  it "button, Submit button in combination with reset button" do
    browser.goto @files + "button-type-combinations-002.html"
    browser.button(:name, "test").click
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [PASS]")
  end

  it "button, Submit button in combination with submit input" do
    browser.goto @files + "button-type-combinations-003.html"
    browser.button(:name, "submit2").click
    browser.text.should include("Result: PASS")
  end

  it "button, Reset button in combination with reset input" do
    browser.goto @files + "button-type-combinations-004.html"
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "reset1").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false

    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "reset2").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
  end

  it "button, Submit, reset and regular button in combination" do
    browser.goto @files + "button-type-combinations-005.html"
    browser.text_field(:name, "test").set "foobar"
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.text_field(:name, "test").clear
    browser.button(:name, "button").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == false
    browser.button(:name, "reset").click_no_wait
    browser.text_field(:name, "test").verify_contains("foobar").should == true
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [foobar]")
  end

  # button-disabled
  it "button, disabled" do
    browser.goto @files + "button-disabled-001.html"
    begin
      browser.button(:name, "test").click
    rescue OperaWatir::Exceptions::ObjectDisabledException
      #This is expected
    end
    browser.text.should include("Nothing should happen.")
  end

  it "button, disabled variable variation" do
    browser.goto @files + "button-disabled-002.html"
    begin
      browser.button(:name, "test").click
    rescue OperaWatir::Exceptions::ObjectDisabledException
      #This is expected
    end
    browser.text.should include("Nothing should happen.")
  end

  it "button, disabled variable variation 2" do
    browser.goto @files + "button-disabled-003.html"
    begin
      browser.button(:name, "test").click
    rescue OperaWatir::Exceptions::ObjectDisabledException
      #This is expected
    end
    browser.text.should include("Nothing should happen.")
  end

  it "button, Invalid disabled" do
    browser.goto @files + "button-disabled-004.html"
    begin
      browser.button(:name, "test").click
    rescue OperaWatir::Exceptions::ObjectDisabledException
      #This is expected
    end
    browser.text.should include("Nothing should happen.")
  end

  it "button, Value of disabled field available in DOM" do
    browser.goto @files + "button-disabled-005.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  # button-keys
  it "button, accesskey" do
    # awaiting Enter access key mode support in gogi
    browser.goto @files + "button-keys-001.html"
    browser.opera_action "Enter access key mode"
    browser.keys.send :o
    browser.opera_action "Leave access key mode"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "button, tabindex" do
    browser.goto @files + "button-keys-002.html"
    3.times { browser.keys.send :Tab }
    browser.keys.send :Enter
    sleep(0.25)
    browser.text.should include("Result: PASS")
  end

  it "button, Trigger action with enter" do
    browser.goto @files + "button-keys-003.html"
    browser.keys.send :Tab
    browser.keys.send :Enter
    sleep(0.25)
    browser.text.should include("Result: PASS")
  end

  it "button, Trigger action with space" do
    browser.goto @files + "button-keys-004.html"
    browser.keys.send :Tab
    browser.keys.send :Space
    sleep(0.25)
    browser.text.should include("Result: PASS")
  end

  # button-events
  it "button, Cancelling action request" do
    browser.goto @files + "button-events-001.html"
    browser.button(:name, "test").click
    browser.text.should include("Nothing should happen.")
  end

  it "button, onfocus" do
    browser.goto @files + "button-events-002.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onblur" do
    browser.goto @files + "button-events-003.html"
    browser.button(:name, "test").click_no_wait
    browser.button(:name, "random_field").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onclick" do
    browser.goto @files + "button-events-004.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, ondblclick" do
    browser.goto @files + "button-events-005.html"
    browser.button(:name, "test").double_click
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onmousedown" do
    browser.goto @files + "button-events-006.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onmouseup" do
    browser.goto @files + "button-events-007.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onmouseover" do
    browser.goto @files + "button-events-008.html"
    browser.button(:name, "test").fire_event "onMouseOver"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onmousemove" do
    browser.goto @files + "button-events-009.html"
    browser.button(:name, "test").fire_event "onMouseMove"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onmouseout" do
    browser.goto @files + "button-events-010.html"
    browser.button(:name, "test").fire_event "onMouseOut"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, Multiple JS events" do
    browser.goto @files + "button-events-011.html"
    browser.button(:name, "test").fire_event "onMouseOver"
    sleep 1
    browser.button(:name, "test").click_no_wait
    sleep 1
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, Empty JS event" do
    browser.goto @files + "button-events-012.html"
    browser.button(:name, "test").click
    browser.text.should include("Result: PASS")
  end

  it "button, Adding invalid attribute size through DOM" do
    browser.goto @files + "button-events-013.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end
end

