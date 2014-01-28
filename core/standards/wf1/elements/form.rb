########
# form #
########

require "operawatir/helper"

describe "form" do
  # form-other-xxx.html
  before :all do
    @files = "http://t/core/standards/wf1/interactive/"
  end

  it "Pressing Enter in <input type=number> doesn't submit form (CORE-27624)" do
    browser.goto @files+"form-other-001.html"
    browser.element(:tag_name, "input").click_no_wait
    browser.keys.send :Enter
    browser.p(:id, "result").text.should == "PASS"
  end

  it "_charset_, post" do
    browser.goto @files+"form-other-002.html"
    browser.button(:id, "s").click
    (browser.text =~ /\A[\n ]*\z/).should == nil
  end

  it "_charset_, post, charset set to utf-8" do
    browser.goto @files+"form-other-003.html"
    browser.button(:id, "s").click
    browser.text.should include("utf-8")
  end

  it "_charset_, post, accept-charset utf-8" do
    browser.goto @files+"form-other-004.html"
    browser.button(:id, "s").click
    browser.text.should include("utf-8")
  end

  it "_charset_, post, overriding charset" do
    browser.goto @files+"form-other-005.html"
    browser.button(:id, "s").click
    browser.text.should include("utf-8")
  end

  it "_charset_, get" do
    browser.goto @files+"form-other-006.html"
    browser.button(:id, "s").click
    (browser.text =~ /\A[\n ]*\z/).should == nil
  end

  it "_charset_, get, charset set to utf-8" do
    browser.goto @files+"form-other-007.html"
    browser.button(:id, "s").click
    browser.text.should include("utf-8")
  end

  it "_charset_, get, accept charset UTF-8" do
    browser.goto @files+"form-other-008.html"
    browser.button(:id, "s").click
    browser.text.should include("utf-8")
  end

  it "_charset_, get, overriding charset" do
    browser.goto @files+"form-other-009.html"
    browser.button(:id, "s").click
    browser.text.should include("utf-8")
  end

  it "action, input type=submit formaction" do
    browser.goto @files+"form-other-010.html"
    browser.button(:xpath, "//input[1]").click
    browser.text.should include("Result: PASS")
  end

  it "default submit button" do
    browser.goto @files+"form-other-011.html"
    browser.button(:xpath, "//input[1]").click
    browser.text.should include("Result: PASS")
  end

  it "button value not reset" do
    browser.goto @files+"form-other-012.html"
    browser.button(:id, "1").click_no_wait
    browser.button(:id, "2").click_no_wait
    browser.button(:id, "3").click
    browser.text.should include("PASS")
  end

  it "setCustomValidity" do
    browser.goto @files+"form-other-013.html"

    browser.element(:tag_name, "input").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.include?("FAIL").should == false
  end


  # form-autocomp-xxx.html

  it "missing autocomplete containing input type=text" do
    browser.goto @files+"form-autocomp-001.html"
    browser.text_field(:id, "i1").set "foobar"
    browser.text_field(:id, "i2").set "foobar"
    browser.text_field(:id, "i3").set "foobar"
    browser.button(:id, "s").click
    browser.back

    browser.text_field(:id, "i1").value.should == "foobar"
    browser.text_field(:id, "i2").value.should == "foobar"
    browser.text_field(:id, "i3").value.should == ""
  end

  it "autocomplete=on containing input type=text" do
    browser.goto @files+"form-autocomp-002.html"
    browser.text_field(:id, "i1").set "foobar"
    browser.text_field(:id, "i2").set "foobar"
    browser.text_field(:id, "i3").set "foobar"
    browser.button(:id, "s").click
    browser.back

    browser.text_field(:id, "i1").value.should == "foobar"
    browser.text_field(:id, "i2").value.should == "foobar"
    browser.text_field(:id, "i3").value.should == ""
  end

  it "autocomplete=off containing input type=text" do
    browser.goto @files+"form-autocomp-003.html"
    browser.text_field(:id, "i1").set "foobar"
    browser.text_field(:id, "i2").set "foobar"
    browser.text_field(:id, "i3").set "foobar"
    browser.button(:id, "s").click
    browser.back

    browser.text_field(:id, "i1").value.should == ""
    browser.text_field(:id, "i2").value.should == "foobar"
    browser.text_field(:id, "i3").value.should == ""
  end

  # form-listed-xxx.html
  it "button type=submit listed in form.elements" do
    browser.goto @files+"form-listed-001.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "button type=button listed in form.elements" do
    browser.goto @files+"form-listed-002.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "empty fieldset listed in form.elements" do
    browser.goto @files+"form-listed-003.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=hidden listed in form.elements" do
    browser.goto @files+"form-listed-004.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=text listed in form.elements" do
    browser.goto @files+"form-listed-005.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=password listed in form.elements" do
    browser.goto @files+"form-listed-006.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=number listed in form.elements" do
    browser.goto @files+"form-listed-007.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=checkbox listed in form.elements" do
    browser.goto @files+"form-listed-008.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=radio listed in form.elements" do
    browser.goto @files+"form-listed-009.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=file listed in form.elements" do
    browser.goto @files+"form-listed-010.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=submit listed in form.elements" do
    browser.goto @files+"form-listed-011.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=image not listed in form.elements" do
    browser.goto @files+"form-listed-012.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=reset listed in form.elements" do
    browser.goto @files+"form-listed-013.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=button listed in form.elements" do
    browser.goto @files+"form-listed-014.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "keygen listed in form.elements" do
    browser.goto @files+"form-listed-015.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "empty object listed in form.elements" do
    browser.goto @files+"form-listed-016.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "empty ouput listed in form.elements" do
    browser.goto @files+"form-listed-017.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "select listed in form.elements" do
    browser.goto @files+"form-listed-019.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "textarea listed in form.elements" do
    browser.goto @files+"form-listed-020.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  # form-dom-xxx.html

  it "setting 'action' attribute" do
    browser.goto @files+"form-dom-001.html"
    browser.button(:id, "s").click
    browser.text.should include("Result: PASS")
  end

  it "setting 'action' attribute, variation" do
    browser.goto @files+"form-dom-002.html"
    browser.button(:id, "s").click
    browser.text.should include("Result: PASS")
  end

  it "setting 'method' attribute" do
    browser.goto @files+"form-dom-003.html"
    browser.button(:id, "s").click
    browser.text.should include("Result: PASS")
  end

  it "setting 'method' attribute, variation" do
    browser.goto @files+"form-dom-004.html"
    browser.button(:id, "s").click
    browser.text.should include("Result: PASS")
  end

  it "setting 'enctype' attribute" do
    browser.goto @files+"form-dom-005.html"
    browser.button(:id, "s").click
    browser.text.should include("Result: PASS")
  end

  it "setting 'enctype' attribute, variation" do
    browser.goto @files+"form-dom-006.html"
    browser.button(:id, "s").click
    browser.text.should include("Result: PASS")
  end

  it "'submit' method" do
    browser.goto @files+"form-dom-007.html"
    browser.button(:id, "b").click
    browser.text.should include("Result: PASS")
  end

  it "'reset' method" do
    browser.goto @files+"form-dom-008.html"
    browser.checkbox(:id, "cb").click_no_wait
    browser.checkbox(:id, "cb").checked?.should == true
    browser.button(:id, "b").click_no_wait
    browser.checkbox(:id, "cb").checked?.should == false
  end

  it "'elements' field" do
    browser.goto @files+"form-dom-009.html"
    browser.button(:id, "b").click
    browser.p(:id, "result").text.should == "PASS"
  end

  it "button type=button, 'form' attribute" do
    browser.goto @files+"form-dom-011.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "button type=submit, 'form' attribute" do
    browser.goto @files+"form-dom-012.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=button, 'form' attribute" do
    browser.goto @files+"form-dom-013.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=checkbox, 'form' attribute" do
    browser.goto @files+"form-dom-014.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=radio, 'form' attribute" do
    browser.goto @files+"form-dom-015.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=text, 'form' attribute" do
    browser.goto @files+"form-dom-016.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=password, 'form' attribute" do
    browser.goto @files+"form-dom-017.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=file, 'form' attribute" do
    browser.goto @files+"form-dom-018.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=image, 'form' attribute" do
    browser.goto @files+"form-dom-019.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=reset, 'form' attribute" do
    browser.goto @files+"form-dom-020.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=hidden, 'form' attribute" do
    browser.goto @files+"form-dom-021.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input type=submit, 'form' attribute" do
    browser.goto @files+"form-dom-022.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "label, 'form' attribute" do
    browser.goto @files+"form-dom-023.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "select, 'form' attribute" do
    browser.goto @files+"form-dom-024.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "textarea, 'form' attribute" do
    browser.goto @files+"form-dom-025.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "keygen, 'form' attribute" do
    browser.goto @files+"form-dom-026.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "empty object, 'form' attribute" do
    browser.goto @files+"form-dom-027.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "meter, 'form' attribute" do
    browser.goto @files+"form-dom-028.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "output, 'form' attribute" do
    browser.goto @files+"form-dom-029.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "progress, 'form' attribute" do
    browser.goto @files+"form-dom-030.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  # form-events-xxx.html
  it "onclick" do
    browser.goto @files+"form-events-001.html"
    browser.p(:id, "p").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "ondblclick" do
    browser.goto @files+"form-events-002.html"
    browser.p(:id, "p").double_click
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onmousedown" do
    browser.goto @files+"form-events-003.html"
    browser.p(:id, "p").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onmouseup" do
    browser.goto @files+"form-events-004.html"
    browser.p(:id, "p").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onmouseover" do
    browser.goto @files+"form-events-005.html"
    browser.p(:id, "p").fire_event "onMouseOver"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onmousemove" do
    browser.goto @files+"form-events-006.html"
    browser.p(:id, "p").fire_event "onMouseMove"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onmouseout" do
    browser.goto @files+"form-events-007.html"
    browser.p(:id, "p").fire_event "onMouseOut"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "Multiple JS events" do
    browser.goto @files+"form-events-008.html"
    browser.p(:id, "p").fire_event "onMouseOver"
    browser.p(:id, "p").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onkeypress" do
    browser.goto @files+"form-events-009.html"
    browser.text_field(:id, "i").click_no_wait
    browser.keys.send 'a'
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onkeydown" do
    browser.goto @files+"form-events-010.html"
    browser.text_field(:id, "i").click_no_wait
    browser.keys.down :Shift
    browser.p(:id, "result").text.should == "PASS"
    browser.keys.up :Shift
  end

  it "onkeyup" do
    browser.goto @files+"form-events-011.html"
    browser.text_field(:id, "i").click_no_wait
    browser.keys.down :Shift
    browser.p(:id, "result").text.should == ""
    browser.keys.up :Shift
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onsubmit" do
    browser.goto @files+"form-events-012.html"
    browser.button(:id, "s").click
    browser.p(:id, "result").exist?.should == true
    browser.p(:id, "result").text.should == "PASS"
  end

  it "single element, no 'method' attribute" do
    browser.goto @files+"form-001.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "JavasScript action " do
    browser.goto @files+"form-002.html"

    browser.button(:id, "s").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "Overriding form-association on multiple elements in unclosed form, variant 2" do
    browser.goto @files+"form-bad-002.html"

    browser.text_field(:id, "i1").set "foo"
    browser.text_field(:id, "i2").set "bar"
    browser.button(:id, "s").click
    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Overriding form-association on multiple elements in unclosed form, variant 3" do
    browser.goto @files+"form-bad-003.html"

    browser.text_field(:id, "i1").set "foo"
    browser.text_field(:id, "i2").set "bar"
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Overriding form-association on multiple elements in unclosed form, variant 4" do
    browser.goto @files+"form-bad-004.html"

    browser.text_field(:id, "i1").set "foo"
    browser.text_field(:id, "i2").set "bar"
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Overriding form-association on multiple elements in unclosed form, variant 5" do
    browser.goto @files+"form-bad-005.html"

    browser.text_field(:id, "i1").set "foo"
    browser.text_field(:id, "i2").set "bar"
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Overriding form-association on multiple elements in unclosed form, variant 6" do
    browser.goto @files+"form-bad-006.html"

    browser.text_field(:id, "i1").set "foo"
    browser.text_field(:id, "i2").set "bar"
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "containing element with 'form' referring to nonexistent form" do
    browser.goto @files+"form-bad-007.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type("foobar")
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  # form-enctype
  it "enctype application/x-www-form-urlencoded" do
    browser.goto @files+"form-enctype-001.html"
    browser.button(:id, "submit").click
    browser.text.should include("Result: PASS")
  end

  it "enctype multipart/form-data" do
    browser.goto @files+"form-enctype-002.html"
    browser.button(:id, "submit").click
    browser.text.should include("Result: PASS")
  end

  # form-owner
  it "Single form-associated element" do
    browser.goto @files+"form-owner-001.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Multiple form-associated element" do
    browser.goto @files+"form-owner-002.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Single form-associated elements in multiple forms" do
    browser.goto @files+"form-owner-003.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Single form-associated elements in multiple forms, variant" do
    browser.goto @files+"form-owner-004.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Single form-associated element in unclosed form" do
    browser.goto @files+"form-owner-005.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Multiple form-associated elements in unclosed form" do
    browser.goto @files+"form-owner-006.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it"Form-associated element in second nested form" do
    browser.goto @files+"form-owner-007.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it"Form-associated element in both nested forms" do
    browser.goto @files+"form-owner-008.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it"Multiple form-associated elements in nested forms" do
    browser.goto @files+"form-owner-009.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it"Form-associated elements in unclosed nested forms" do
    browser.goto @files+"form-owner-010.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "Single form-associated element with GET" do
    browser.goto @files+"form-owner-011.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "Multiple form-associated elements with GET" do
    browser.goto @files+"form-owner-012.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.text_field(:id, "i3").set("abc")

    browser.button(:id, "s").click
    browser.text.should include("You typed: [foo] [bar] [abc]")
  end

  it "Single form-associated element in unclosed form with GET" do
    browser.goto @files+"form-owner-015.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "Multiple form-associated elements in unclosed form with GET" do
    browser.goto @files+"form-owner-016.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.text_field(:id, "i3").set("abc")

    browser.button(:id, "s").click
    browser.text.should include("You typed: [foo] [bar] [abc]")
  end

  it "element in second nested form, get" do
    browser.goto @files+"form-owner-017.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "Form-associated elements in both nested forms with GET" do
    browser.goto @files+"form-owner-018.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.text_field(:id, "i3").set("abc")

    browser.button(:id, "s").click
    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Overriding form-association on multiple elements in unclosed form, variant 2" do
    browser.goto @files+"form-owner-019.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Form-associated elements in both nested forms with GET" do
    browser.goto @files+"form-owner-020.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")

    browser.button(:id, "s").click
    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Single form-associated element with POST" do
    browser.goto @files+"form-owner-021.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "Multiple form-associated elements with POST" do
    browser.goto @files+"form-owner-022.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.text_field(:id, "i3").set("abc")

    browser.button(:id, "s").click
    browser.text.should include("You typed: [foo] [bar] [abc]")
  end

  it "Single form-associated element in unclosed form with POST" do
    browser.goto @files+"form-owner-025.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "Multiple form-associated elements in unclosed form with POST" do
    browser.goto @files+"form-owner-026.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.text_field(:id, "i3").set("abc")

    browser.button(:id, "s").click
    browser.text.should include("You typed: [foo] [bar] [abc]")
  end

  it "element in second nested form, post" do
    browser.goto @files+"form-owner-027.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "Form-associated elements in both nested forms with POST" do
    browser.goto @files+"form-owner-028.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.text_field(:id, "i3").set("abc")

    browser.button(:id, "s").click
    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Form-associated elements in unclosed nested forms with POST" do
    browser.goto @files+"form-owner-030.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")

    browser.button(:id, "s").click
    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Overriding form-association on element" do
    browser.goto @files+"form-owner-031.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "Overriding form-association on multiple elements" do
    browser.goto @files+"form-owner-032.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Overriding form-association on elements in multiple forms" do
    browser.goto @files+"form-owner-033.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.button(:id, "s1").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Overriding form-association on element in second nested form" do
    browser.goto @files+"form-owner-036.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "Overriding form-association on elements in second nested form" do
    browser.goto @files+"form-owner-037.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Overriding form-association on elements in both nested forms" do
    browser.goto @files+"form-owner-038.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Overriding form-association on multiple elements in nested forms" do
    browser.goto @files+"form-owner-039.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.text_field(:id, "i3").set("abc")
    browser.text_field(:id, "i4").set("def")
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar] [abc] [def]")
  end

  it "Overriding form-association on elements in unclosed nested forms" do
    browser.goto @files+"form-owner-040.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Combining element and element overriding form-association" do
    browser.goto @files+"form-owner-041.html"

    browser.text_field(:id, "i1").set("foobar")
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foobar]")
  end

  it "dynamically injecting, single element, get" do
    browser.goto @files+"form-owner-050.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "dynamically injecting, single element, post" do
    browser.goto @files+"form-owner-054.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "dynamically injecting, multiple elements, get" do
    browser.goto @files+"form-owner-055.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "dynamically injecting, multiple elements, post" do
    browser.goto @files+"form-owner-056.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "multiple elements, overriding form association, post" do
    browser.goto @files+"form-owner-057.html"
    browser.button(:id, "s").click
    browser.text.should include("You typed: [_a1] [aa] [a_] [_a2] [ba] [_a3]")
  end

  it "multiple elements, overriding form association, post, variation" do
    browser.goto @files+"form-owner-058.html"
    browser.button(:id, "s").click
    browser.text.should include("You typed: [_b1] [ab] [_b2] [bb] [b_] [_b3]")
  end

  it "multiple elements, overriding form association, get" do
    browser.goto @files+"form-owner-059.html"
    browser.button(:id, "s").click
    browser.text.should include("You typed: [_a1] [aa] [a_] [_a2] [ba] [_a3]")
  end

  it "multiple elements, overriding form association, get, variation" do
    browser.goto @files+"form-owner-060.html"
    browser.button(:id, "s").click
    browser.text.should include("You typed: [_b1] [ab] [_b2] [bb] [b_] [_b3]")
  end

  it "dynamically injecting, nested, single element, get" do
    browser.goto @files+"form-owner-061.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "dynamically injecting, nested, single element, post" do
    browser.goto @files+"form-owner-062.html"

    browser.text_field(:id, "i1").click_no_wait
    browser.type "foobar"
    browser.keys.send :Enter

    browser.text.should include("You typed: [foobar]")
  end

  it "dynamically injecting, nested, multiple elements, get" do
    browser.goto @files+"form-owner-063.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  it "dynamically injecting, nested, multiple elements, post" do
    browser.goto @files+"form-owner-064.html"

    browser.text_field(:id, "i1").set("foo")
    browser.text_field(:id, "i2").set("bar")
    browser.button(:id, "s").click

    browser.text.should include("You typed: [foo] [bar]")
  end

  # form-noValidate
  it "noValidate input text" do
    browser.goto @files+"form-novalidate-001.html"
    browser.button(:id, "submit").click
    browser.text.should include("Result: PASS")
  end
end

