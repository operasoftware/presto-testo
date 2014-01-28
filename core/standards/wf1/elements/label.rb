#########
# label #
#########

require "operawatir/helper"

describe "label" do
  before :all do
    @files = "http://t/core/standards/wf1/interactive/"
  end

  it "click label" do
    browser.goto @files+"label-001.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.checkbox(:name, "test").exists?.should == true
    browser.checkbox(:name, "test").checked?.should == true
  end

  it "containing HTML" do
    browser.goto @files+"label-002.html"
    browser.label(:name, "label").exists?.should == true
    browser.element(:name, "strong").exists?.should == true
    browser.element(:name, "strong").click_no_wait

    browser.checkbox(:name, "test").exists?.should == true
    browser.checkbox(:name, "test").checked?.should == true
  end

  it "containing button" do
    browser.goto @files+"label-003.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click#_no_wait
    browser.text.should include("Result: PASS")
  end

  it "containing input submit" do
    browser.goto @files+"label-004.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click#_no_wait
    browser.text.should include("Result: PASS")
  end

  it "containing input text" do
    browser.goto @files+"label-005.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.type "foobar"
    browser.text_field(:name, "test").value.should == "foobar"
  end

  it "containing input checkbox" do
    browser.goto @files+"label-006.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.checkbox(:name, "test").checked?.should == true
  end

  it "containing input radio" do
    browser.goto @files+"label-007.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.radio(:name, "test").checked?.should == true
  end

  it "containing select (CORE-31299)" do
    browser.goto @files+"label-008.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click(1,1)

    browser.keys.send :down

    browser.select_list(:name, "test").exists?
    browser.select_list(:name, "test").value.should == "bar"
  end

  it "containing textarea" do
    browser.goto @files+"label-009.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.type "foobar"

    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").value.should == "foobar"
  end

  it "containing another label" do
    browser.goto @files+"label-010.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.type "foobar"

    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").value.should == "foobar"
  end

  it "containing input, but referring to another element" do
    browser.goto @files+"label-011.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.checkbox(:name, "test").checked?.should == true
  end

  it "containing another label for (????)" do
    browser.goto @files+"label-012.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.type "foobar"

    browser.text_field(:name, "test").exists?.should == true
    browser.text_field(:name, "test").value.should == "foobar"
  end

  it "containing two descendants" do
    browser.goto @files+"label-013.html"

    browser.checkbox(:name, "checkbox1").exists?.should == true
    browser.checkbox(:name, "checkbox2").exists?.should == true

    browser.checkbox(:name, "checkbox1").checked?.should == false
    browser.checkbox(:name, "checkbox2").checked?.should == false

    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.checkbox(:name, "checkbox1").checked?.should == true
    browser.checkbox(:name, "checkbox2").checked?.should == false
  end

  it "containing disabled checkbox (unchecked)" do
    browser.goto @files+"label-014.html"

    browser.checkbox(:name, "cb").exists?.should == true
    browser.checkbox(:name, "cb").checked?.should == false

    browser.label(:name, "l").exists?.should == true
    browser.label(:name, "l").click_no_wait

    browser.checkbox(:name, "cb").checked?.should == false
  end

  it "containing disabled checkbox (checked)" do
    browser.goto @files+"label-015.html"

    browser.checkbox(:name, "cb").exists?.should == true
    browser.checkbox(:name, "cb").checked?.should == true

    browser.label(:name, "l").exists?.should == true
    browser.label(:name, "l").click_no_wait

    browser.checkbox(:name, "cb").checked?.should == true
  end

  it "containing disabled submit input" do
    browser.goto @files+"label-016.html"
    browser.label(:name, "l").exists?.should == true
    browser.label(:name, "l").click_no_wait

    browser.text.include?("FAIL").should == false
  end

  it "tabindex" do
    browser.goto @files+"label-017.html"

    browser.keys.send :tab
    browser.keys.send :tab
    browser.keys.send :tab

    browser.p(:id, "result").text.should == "321"
  end

  it "CORE-23548" do
    browser.goto @files+"label-018.html"

    browser.checkbox(:id, "t").exists?.should == true
    browser.checkbox(:id, "t").checked?.should == false

    browser.element(:id, "s1").exists?.should == true
    browser.element(:id, "s1").click_no_wait
    browser.checkbox(:id, "t").checked?.should == true

    browser.element(:id, "s2").exists?.should == true
    browser.element(:id, "s2").click_no_wait
    browser.checkbox(:id, "t").checked?.should == true
  end

  it "containing input password" do
    browser.goto @files+"label-019.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.type "foobar"

    browser.text_field(:id, "t").exists?.should == true
    browser.text_field(:id, "t").value.should == "foobar"
  end

  it "containing input submit with 'display: none' (????)" do
    browser.goto @files+"label-025.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait
    sleep 1 # Wait for the page to change

    browser.text.should include("Result: PASS")
  end

  it "containing input reset" do
    browser.goto @files+"label-026.html"

    browser.text_field(:id, "i").exists?.should == true
    browser.text_field(:id, "i").click_no_wait

    browser.type "foobar"
    browser.text_field(:id, "i").value.should == "foobar"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click(1,1)


    browser.text_field(:id, "i").value.should == ""
  end

  ######################################################################
  # label for
  ######################################################################

  it "for, containing HTML" do
    browser.goto @files+"label-for-001.html"

    browser.element(:id, "s").exists?.should == true
    browser.element(:id, "s").click_no_wait

    browser.checkbox(:id, "t").exists?.should == true
    browser.checkbox(:id, "t").checked?.should == true
  end

  it "for, containing button" do
    browser.goto @files+"label-for-002.html"
    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait
    sleep 1 # Wait for page change
    browser.text.should include("Result: PASS")
  end

  it "for, containing input submit" do
    browser.goto @files+"label-for-003.html"
    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait
    sleep 1 # Wait for page change
    browser.text.should include("Result: PASS")
  end

  it "for, containing input text" do
    browser.goto @files+"label-for-004.html"
    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.type "foobar"

    browser.text_field(:id, "t").exists?.should ==  true
    browser.text_field(:id, "t").value.should == "foobar"
  end

  it "for, containing input checkbox" do
    browser.goto @files+"label-for-005.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.checkbox(:id, "t").checked?.should == true
  end

  it "for, containing input radio" do
    browser.goto @files+"label-for-006.html"
    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait
    sleep 1
    browser.radio(:id, "t").exists? == true
    browser.radio(:id, "t").checked? == true
  end

  it "for, containing select (CORE-31299)" do
    browser.goto @files+"label-for-007.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click(1,1)

    browser.keys.send :down

    browser.select_list(:id, "t").exists?
    browser.select_list(:id, "t").value.should == "bar"
  end

  it "for, containing textarea" do
    browser.goto @files+"label-for-008.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.type "foobar"

    browser.text_field(:id, "t").exists?.should == true
    browser.text_field(:id, "t").value.should == "foobar"
  end

  it "for, containing another label (????)" do
    browser.goto @files+"label-for-009.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.type "foobar"

    browser.text_field(:id, "t").exists?.should == true
    browser.text_field(:id, "t").value.should == "foobar"
  end

  it "for, containing input text, but referring to another input text" do
    pending "Watir click problem." do
      browser.goto @files+"label-for-010.html"

      browser.label(:id, "l").exists?.should == true
      browser.label(:id, "l").click_no_wait

      browser.type "foobar"

      browser.text_field(:id, "t").exists?.should == true
      browser.text_field(:id, "t").value.should == "foobar"
    end
  end

  it "for, containing another label for, referring to the same element" do
    pending "Watir click problem" do
      browser.goto @files+"label-for-011.html"

      browser.label(:id, "l").exists?.should == true
      browser.label(:id, "l").click_no_wait

      browser.type "foobar"

      browser.text_field(:id, "t").exists?.should == true
      browser.text_field(:id, "t").value.should == "foobar"
    end
  end


  it "for, containing another label for, referring to another element (????)" do
    browser.goto @files+"label-for-012.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.type "foobar"

    browser.text_field(:id, "t").exists?.should == true
    browser.text_field(:id, "t").value.should == "foobar"
  end

  it "for, two descendants" do
    browser.goto @files+"label-for-014.html"

    browser.checkbox(:id, "first").exists?.should == true
    browser.checkbox(:id, "second").exists?.should == true

    browser.checkbox(:id, "first").checked?.should == false
    browser.checkbox(:id, "second").checked?.should == false

    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.checkbox(:id, "first").checked?.should == false
    browser.checkbox(:id, "second").checked?.should == true
  end

  it "for, referring to nonexistent element" do
    browser.goto @files+"label-for-015.html"

    browser.checkbox(:name, "checkbox").exists?.should == true
    browser.checkbox(:name, "checkbox").checked?.should == false

    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.checkbox(:name, "checkbox").checked?.should == false
  end

  it "for, tabindex" do
    browser.goto @files+"label-for-016.html"

    browser.keys.send :tab
    browser.keys.send :tab
    browser.keys.send :tab

    browser.p(:id, "result").text.should == "321"
  end

  it "clicking image contained in label for" do
    browser.goto @files+"label-for-017.html"

    browser.image(:id, "i").exists?.should == true
    browser.image(:id, "i").click_no_wait

    browser.checkbox(:id, "t").exists?.should == true
    browser.checkbox(:id, "t").checked?.should == true
  end

  it "cross-form label for (CORE-31690)" do
    browser.goto @files+"label-for-018.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.checkbox(:id, "cb").exists?.should == true
    browser.checkbox(:id, "cb").checked?.should == true
  end

  it "cross-form label for, opposite order" do
    browser.goto @files+"label-for-019.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.checkbox(:id, "cb").exists?.should == true
    browser.checkbox(:id, "cb").checked?.should == true
  end

  it "outside label for, referring to form element" do
    browser.goto @files+"label-for-020.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.checkbox(:id, "cb").exists?.should == true
    browser.checkbox(:id, "cb").checked?.should == true
  end

  it "outside label for, referring to form element, opposite order" do
    browser.goto @files+"label-for-021.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.checkbox(:id, "cb").exists?.should == true
    browser.checkbox(:id, "cb").checked?.should == true
  end

  it "for, containing input password" do
    browser.goto @files+"label-for-022.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.type("foobar")

    browser.text_field(:id, "t").exists?.should == true
    browser.text_field(:id, "t").value.should == "foobar"
  end

  it "clicking label for, referring to input checkbox with 'display: none' (CORE-983)" do
    browser.goto @files+"label-for-023.html"

    browser.checkbox(:id, "cb").exists?.should == true
    browser.checkbox(:id, "cb").checked?.should == false
    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait
    browser.button().click
    browser.checkbox(:id, "cb").checked?.should == true
    browser.p(:id, "result").text.should == "PASS"
  end

  it "clicking label for, referring to input radio with 'display: none' (CORE-983)" do
    browser.goto @files+"label-for-024.html"

    browser.radio(:id, "cb").exists?.should == true
    browser.radio(:id, "cb").checked?.should == false
    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait
    browser.button().click
    browser.radio(:id, "cb").checked?.should == true
    browser.p(:id, "result").text.should == "PASS"
  end

  it "accesskey" do
    pending "Awaiting 'Enter access key mode' action support in gogi (WTR-78, CORE-22015)." do
      browser.goto @files+"label-keys-001.html"

      browser.opera_action "Enter access key mode"
      browser.keys.send 'u'
      browser.opera_action "Leave access key mode"

      browser.p(:id, "result").text.should == "PASS"
    end
  end

  it "for, accesskey " do
    pending "Awaiting 'Enter access key mode' action support in gogi (WTR-78, CORE-22015)." do
      browser.goto @files+"label-keys-002.html"

      browser.opera_action "Enter access key mode"
      browser.keys.send 'u'
      browser.opera_action "Leave access key mode"

      browser.p(:id, "result").text.should == "PASS"
    end
  end

  ##############################################################################
  # Label combinations
  ##############################################################################

  it "two labels referring to single element" do
    browser.goto @files+"label-combinations-001.html"

    browser.checkbox(:id, "checkbox").exists?.should == true
    browser.checkbox(:id, "checkbox").checked?.should == false

    browser.label(:name, "label1").exists?.should == true
    browser.label(:name, "label1").click_no_wait

    browser.checkbox(:id, "checkbox").checked?.should == true

    browser.label(:name, "label2").exists?.should == true
    browser.label(:name, "label2").click_no_wait

    browser.checkbox(:id, "checkbox").checked?.should == false
  end

  it "for and label, referring to the same element" do
    browser.goto @files+"label-combinations-002.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true
    browser.checkbox(:id, "t").exists?.should == true
    browser.checkbox(:id, "f").exists?.should == true

    browser.label(:id, "l1").click_no_wait
    browser.checkbox(:id, "t").checked?.should == true
    browser.label(:id, "l2").click_no_wait
    browser.checkbox(:id, "t").checked?.should == false
  end

  ##############################################################################
  # label others
  ##############################################################################

  it "attribute 'for' accessible through DOM" do
    browser.goto @files+"label-other-001.html"
    browser.text.should include("PASS")
  end

  it "attribute 'for' accessible through 'htmlFor' IDL attribute" do
    browser.goto @files+"label-other-002.html"
    browser.text.should include("PASS")
  end

  ##############################################################################
  # label keys
  ##############################################################################



  ##############################################################################\
  # label events
  ##############################################################################\

  it "onclick" do
    browser.goto @files+"label-events-001.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").click_no_wait

    browser.p(:id, "result").text.should include("PASS")
  end

  it "ondblclick" do
    browser.goto @files+"label-events-002.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").double_click

    browser.p(:id, "result").text.should include("PASS")
  end

  it "onmousedown" do
    browser.goto @files+"label-events-003.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").fire_event "onMouseDown"

    browser.p(:id, "result").text.should include("PASS")
  end

  it "onmouseup" do
    browser.goto @files+"label-events-004.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").fire_event "onMouseUp"

    browser.p(:id, "result").text.should include("PASS")
  end

  it "onmouseover" do
    browser.goto @files+"label-events-005.html"
    browser.label(:id, "test").exists?.should == true
    browser.label(:id, "test").fire_event "onMouseOver"

    browser.p(:id, "result").text.should include("PASS")
  end

  it "onmousemove" do
    browser.goto @files+"label-events-006.html"
    browser.label(:id, "test").exists?.should == true
    browser.label(:id, "test").fire_event "onMouseMove"

    browser.p(:id, "result").text.should include("PASS")
  end

  it "onmouseout" do
    browser.goto @files+"label-events-007.html"
    browser.label(:name, "label").exists?.should == true
    browser.label(:name, "label").fire_event "onMouseOut"

    browser.p(:id, "result").text.should include("PASS")
  end

  it "Multiple JS events" do
    browser.goto @files+"label-events-010.html"
    browser.label(:id, "test").exists?.should == true
    browser.label(:id, "test").fire_event "onMouseOver"
    browser.label(:id, "test").click_no_wait

    browser.p(:id, "result").text.should include("PASS")
  end

  it "Empty JS event" do
    browser.goto @files+"label-events-011.html"
    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.checkbox(:id, "t").exists?.should == true
    browser.checkbox(:id, "t").checked?.should == true
  end

  it "Adding valid attribute for through DOM" do
    browser.goto @files+"label-events-012.html"

    browser.button(:id, "button").exists?.should == true
    browser.button(:id, "button").click_no_wait

    browser.label(:id, "label").exists?.should == true
    browser.label(:id, "label").click_no_wait

    browser.type("foobar")

    browser.text_field(:name, "test").value.should == "foobar"
  end

  it "onclick returns false" do
    browser.goto @files+"label-events-014.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.checkbox(:id, "t").exists? == true
    browser.checkbox(:id, "t").checked? == false
  end

  it "for, 'onclick' for several elements" do
    browser.goto @files+"label-events-015.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l1").click_no_wait
    browser.label(:id, "l1").verify_contains("PASS").should == true

    browser.label(:id, "l2").exists?.should == true
    browser.label(:id, "l2").click_no_wait
    browser.label(:id, "l2").verify_contains("PASS").should == true

    browser.label(:id, "l3").exists?.should == true
    browser.label(:id, "l3").click_no_wait
    browser.label(:id, "l3").verify_contains("PASS").should == true

    browser.label(:id, "l4").exists?.should == true
    browser.label(:id, "l4").click_no_wait
    browser.label(:id, "l4").verify_contains("PASS").should == true

    browser.label(:id, "l5").exists?.should == true
    browser.label(:id, "l5").click_no_wait
    browser.label(:id, "l5").verify_contains("PASS").should == true

    browser.label(:id, "l6").exists?.should == true
    browser.label(:id, "l6").click_no_wait
    browser.label(:id, "l6").verify_contains("PASS").should == true
  end

  it "for, 'onfocus' for several elements (CORE-31299)" do
    browser.goto @files+"label-events-016.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l1").click_no_wait
    browser.label(:id, "l1").value.should == "PASS"

    browser.label(:id, "l2").exists?.should == true
    browser.label(:id, "l2").click_no_wait
    browser.label(:id, "l2").value.should == "PASS"

    browser.label(:id, "l3").exists?.should == true
    browser.label(:id, "l3").click_no_wait
    browser.label(:id, "l3").value.should == "PASS"

    browser.label(:id, "l4").exists?.should == true
    browser.label(:id, "l4").click_no_wait
    browser.label(:id, "l4").value.should == "PASS"

    browser.label(:id, "l5").exists?.should == true
    browser.label(:id, "l5").click_no_wait
    browser.label(:id, "l5").value.should == "PASS"

    browser.label(:id, "l6").exists?.should == true
    browser.label(:id, "l6").click_no_wait
    browser.label(:id, "l6").value.should == "PASS"

    browser.label(:id, "l7").exists?.should == true
    browser.label(:id, "l7").click_no_wait
    browser.label(:id, "l7").value.should == "PASS"
  end

  it "for, 'onclick' for several disabled elements (CORE-31556)" do
    browser.goto @files+"label-events-017.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l1").click_no_wait
    browser.label(:id, "l1").value.should == "click me"

    browser.label(:id, "l2").exists?.should == true
    browser.label(:id, "l2").click_no_wait
    browser.label(:id, "l2").value.should == "click me"

    browser.label(:id, "l3").exists?.should == true
    browser.label(:id, "l3").click_no_wait
    browser.label(:id, "l3").value.should == "click me"

    browser.label(:id, "l4").exists?.should == true
    browser.label(:id, "l4").click_no_wait
    browser.label(:id, "l4").value.should == "click me"

    browser.label(:id, "l5").exists?.should == true
    browser.label(:id, "l5").click_no_wait
    browser.label(:id, "l5").value.should == "click me"

    browser.label(:id, "l6").exists?.should == true
    browser.label(:id, "l6").click_no_wait
    browser.label(:id, "l6").value.should == "click me"

    browser.label(:id, "l7").exists?.should == true
    browser.label(:id, "l7").click_no_wait
    browser.label(:id, "l7").value.should == "click me"

    browser.label(:id, "l8").exists?.should == true
    browser.label(:id, "l8").click_no_wait
    browser.label(:id, "l8").value.should == "click me"
  end

  it "for, 'onfocus' for several disabled elements" do
    browser.goto @files+"label-events-018.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l1").click_no_wait
    browser.label(:id, "l1").value.should == "click me"

    browser.label(:id, "l2").exists?.should == true
    browser.label(:id, "l2").click_no_wait
    browser.label(:id, "l2").value.should == "click me"

    browser.label(:id, "l3").exists?.should == true
    browser.label(:id, "l3").click_no_wait
    browser.label(:id, "l3").value.should == "click me"

    browser.label(:id, "l4").exists?.should == true
    browser.label(:id, "l4").click_no_wait
    browser.label(:id, "l4").value.should == "click me"

    browser.label(:id, "l5").exists?.should == true
    browser.label(:id, "l5").click_no_wait
    browser.label(:id, "l5").value.should == "click me"

    browser.label(:id, "l6").exists?.should == true
    browser.label(:id, "l6").click_no_wait
    browser.label(:id, "l6").value.should == "click me"

    browser.label(:id, "l7").exists?.should == true
    browser.label(:id, "l7").click_no_wait
    browser.label(:id, "l7").value.should == "click me"

    browser.label(:id, "l8").exists?.should == true
    browser.label(:id, "l8").click_no_wait
    browser.label(:id, "l8").value.should == "click me"
  end

  it "for, 'labels' IDL attribute" do
    browser.goto @files+"label-other-003.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "for, 'control' IDL attribute" do
    browser.goto @files+"label-other-004.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "for, 'form' IDL attribute, nonexistent form" do
    browser.goto @files+"label-other-005.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "'form' IDL attribute" do
    browser.goto @files+"label-other-007.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "'form' IDL attribute, variation 2" do
    browser.goto @files+"label-other-010.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "iframe label, referring to element in same window" do
    browser.goto @files+"label-other-011.html"

    browser.frame(:index, 1).label(:id, "l").exists?.should == true
    browser.frame(:index, 1).label(:id, "l").click_no_wait

    browser.frame(:index, 1).checkbox(:id, "t").exists?.should == true
    browser.frame(:index, 1).checkbox(:id, "t").checked?.should == true
  end

  it "iframe label for, referring to element in same window" do
    browser.goto @files+"label-other-012.html"

    browser.frame(:index, 1).label(:id, "l").exists?.should == true
    browser.frame(:index, 1).label(:id, "l").click_no_wait

    browser.frame(:index, 1).checkbox(:id, "t").exists?.should == true
    browser.frame(:index, 1).checkbox(:id, "t").checked?.should == true
  end

  it "iframe label for, referring to element in another window" do
    browser.goto @files+"label-other-013.html"

    browser.frame(:index, 1).label(:id, "l").exists?.should == true
    browser.frame(:index, 1).label(:id, "l").click_no_wait

    browser.switch_to_default

    browser.checkbox(:id, "t").exists?.should == true
    browser.checkbox(:id, "t").checked?.should == false
  end

  it "CORE-27397" do
    browser.goto @files+"label-other-014.html"

    browser.image(:id, "i").exists?.should == true
    browser.image(:id, "i").click_no_wait

    browser.checkbox(:id, "t").exists?.should == true
    browser.checkbox(:id, "t").checked?.should == true
  end

  it "with negative text-indent, containing input text (CORE-18768)" do
    browser.goto @files+"label-other-015.html"

    browser.text_field(:id, "i1").exists?.should == true
    browser.text_field(:id, "i2").exists?.should == true

    browser.text_field(:id, "i1").visual_hash.should == browser.text_field(:id, "i2").visual_hash
  end

  it "clicking a visible label should fire onclick on invisible input (CORE-31585)" do
    browser.goto @files+"label-other-016.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").text.should == "PASS"
  end

  it "absolute position incorrectly calculated (CORE-13283)" do
    browser.goto @files+"label-other-017.html"

    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").text.should == "PASS"
  end

  it "CORE-14897" do
    browser.goto @files+"label-other-018.html"

    browser.p(:id, "result").exists?.should == true
    browser.p(:id, "result").text.should == "PASS"
  end

  it "CORE-15792" do
    browser.goto @files+"label-other-019.html"

    browser.form(:id, "f1").exists?.should == true
    browser.form(:id, "f2").exists?.should == true

    browser.form(:id, "f1").visual_hash.should == browser.form(:id, "f2").visual_hash
  end

  it "Adding invalid attribute size through DOM" do
    browser.goto @files+"label-events-013.html"
    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "input checkbox contained in a label - onclick, onfocus, onblur, onchange" do
    browser.goto @files+"label-events-020.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click_no_wait
    browser.p(:id, "result_onclick").text.should == "PASS"
    browser.p(:id, "result_onfocus").text.should == "PASS"
    browser.p(:id, "result_onchange").text.should == "PASS"

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == "PASS"
  end

  it "input radio contained in a label - onclick, onfocus, onblur, onchange" do
    browser.goto @files+"label-events-021.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click_no_wait
    browser.p(:id, "result_onclick").text.should == "PASS"
    browser.p(:id, "result_onfocus").text.should == "PASS"
    browser.p(:id, "result_onchange").text.should == "PASS"

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == "PASS"
  end

  it "input text contained in a label - onclick, onfocus, onblur" do
    browser.goto @files+"label-events-022.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click(1,1)
    browser.p(:id, "result_onclick").text.should == "PASS"
    browser.p(:id, "result_onfocus").text.should == "PASS"

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == "PASS"
  end

  it "textarea contained in a label - onclick, onfocus, onblur (CORE-31765)" do
    browser.goto @files+"label-events-023.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click#(1,1)
    browser.p(:id, "result_onclick").text.should == "PASS"
    browser.p(:id, "result_onfocus").text.should == "PASS"

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == "PASS"
  end

  it "select contained in a label - onclick, onfocus, onblur (CORE-31299)" do
    browser.goto @files+"label-events-024.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click(1,1)
    browser.p(:id, "result_onclick").text.should == "PASS"
    browser.p(:id, "result_onfocus").text.should == "PASS"

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == "PASS"
  end

  it "input button contained in a label - onclick, onfocus, onblur" do
    browser.goto @files+"label-events-025.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click(1,1)
    browser.p(:id, "result_onclick").text.should == "PASS"
    browser.p(:id, "result_onfocus").text.should == "PASS"

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == "PASS"
  end

  it "disabled input checkbox contained in a label - onclick, onfocus, onblur, onchange" do
    browser.goto @files+"label-events-026.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click_no_wait
    browser.p(:id, "result_onclick").text.should == ""
    browser.p(:id, "result_onfocus").text.should == ""

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == ""
  end

  it "disabled input radio contained in a label - onclick, onfocus, onblur, onchange" do
    browser.goto @files+"label-events-027.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click_no_wait
    browser.p(:id, "result_onclick").text.should == ""
    browser.p(:id, "result_onfocus").text.should == ""

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == ""
  end

  it "disabled input text contained in a label - onclick, onfocus, onblur" do
    browser.goto @files+"label-events-028.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click_no_wait
    browser.p(:id, "result_onclick").text.should == ""
    browser.p(:id, "result_onfocus").text.should == ""

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == ""
  end

  it "disabled textarea contained in a label - onclick, onfocus, onblur" do
    browser.goto @files+"label-events-029.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click_no_wait
    browser.p(:id, "result_onclick").text.should == ""
    browser.p(:id, "result_onfocus").text.should == ""

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == ""
  end

  it "disabled select contained in a label - onclick, onfocus, onblur" do
    browser.goto @files+"label-events-030.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click_no_wait
    browser.p(:id, "result_onclick").text.should == ""
    browser.p(:id, "result_onfocus").text.should == ""

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == ""
  end

  it "disabled input button contained in a label - onclick, onfocus, onblur" do
    browser.goto @files+"label-events-031.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click_no_wait
    browser.p(:id, "result_onclick").text.should == ""
    browser.p(:id, "result_onfocus").text.should == ""

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == ""
  end

  it "button contained in a label - onclick, onfocus, onblur (????)" do
    browser.goto @files+"label-events-032.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click(1,1)
    browser.p(:id, "result_onclick").text.should == "PASS"
    browser.p(:id, "result_onfocus").text.should == "PASS"

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == "PASS"
  end

  it "disabled button contained in a label - onclick, onfocus, onblur" do
    browser.goto @files+"label-events-033.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l2").exists?.should == true

    browser.label(:id, "l1").click_no_wait
    browser.p(:id, "result_onclick").text.should == ""
    browser.p(:id, "result_onfocus").text.should == ""

    browser.label(:id, "l2").click_no_wait
    browser.p(:id, "result_onblur").text.should == ""
  end

  it "changing 'id' attributes of labeled controls" do
    browser.goto @files+"label-events-034.html"

    browser.label(:id, "l").exists?.should == true
    browser.label(:id, "l").click_no_wait

    browser.checkbox(:name, "cb1").checked?.should == true
    browser.checkbox(:name, "cb2").checked?.should == false

    browser.button(:id, "b").exists?.should == true
    browser.button(:id, "b").click_no_wait
    browser.label(:id, "l").click_no_wait

    browser.checkbox(:name, "cb1").checked?.should == true
    browser.checkbox(:name, "cb2").checked?.should == true
  end

  it "checkbox with 'display: none' contained in a label - onclick, onchange (????)" do
    browser.goto @files+"label-events-035.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l1").click_no_wait

    browser.p(:id, "result_onclick").exists?.should == true
    browser.p(:id, "result_onclick").text.should == "PASS"

    browser.p(:id, "result_onchange").exists?.should == true
    browser.p(:id, "result_onchange").text.should == "PASS"
  end

  it "input radio with 'display: none' contained in a label - onclick, onchange (????)" do
    browser.goto @files+"label-events-036.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l1").click_no_wait

    browser.p(:id, "result_onclick").exists?.should == true
    browser.p(:id, "result_onclick").text.should == "PASS"

    browser.p(:id, "result_onchange").exists?.should == true
    browser.p(:id, "result_onchange").text.should == "PASS"
  end

  it "input text with 'display: none' contained in a label - onclick (????)" do
    browser.goto @files+"label-events-037.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l1").click_no_wait

    browser.p(:id, "result_onclick").exists?.should == true
    browser.p(:id, "result_onclick").text.should == "PASS"
  end

  it "textarea with 'display: none' contained in a label - onclick (????)" do
    browser.goto @files+"label-events-038.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l1").click_no_wait

    browser.p(:id, "result_onclick").exists?.should == true
    browser.p(:id, "result_onclick").text.should == "PASS"
  end

  it "select with 'display: none' contained in a label - onclick (????)" do
    browser.goto @files+"label-events-039.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l1").click_no_wait

    browser.p(:id, "result_onclick").exists?.should == true
    browser.p(:id, "result_onclick").text.should == "PASS"
  end

  it "input button with 'display: none' contained in a label - onclick (????)" do
    browser.goto @files+"label-events-040.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l1").click_no_wait

    browser.p(:id, "result_onclick").exists?.should == true
    browser.p(:id, "result_onclick").text.should == "PASS"
  end

  it "button with 'display: none' contained in a label - onclick" do
    browser.goto @files+"label-events-041.html"

    browser.label(:id, "l1").exists?.should == true
    browser.label(:id, "l1").click#_no_wait

    browser.p(:id, "result_onclick").exists?.should == true
    browser.p(:id, "result_onclick").text.should == "PASS"
  end

  it "'onclick' event on a disabled button (CORE-31556)" do
    pending "Watir click problem" do
      browser.goto @files+"label-028.html"
      browser.label(:name, "l").exists?.should == true
      browser.label(:name, "l").click_no_wait

      browser.text.include?("FAIL").should == false
    end
  end
end
