#####################
# input type=button #
#####################

require "operawatir/helper"

describe "input type=button" do
  before :all do
    @files = "http://t/core/standards/wf1/interactive/"
  end

  # button
  it "button, Empty button" do
    browser.goto @files+"input-button-001.html"
    browser.button(:name, "test").exists?.should == true
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "button, Empty button, without closing tag" do
    browser.goto @files+"input-button-002.html"
    browser.button(:name, "test").exists?.should == true
    browser.button(:name, "test").click
    browser.p(:id, "result").text.should == "PASS"
  end

  it "button, Empty button, with self-closing tag" do
    browser.goto @files+"input-button-003.html"
    browser.button(:name, "test").exists?.should == true
    browser.button(:name, "test").click
    browser.p(:id, "result").text.should == "PASS"
  end

  it "button, Invalid size attribute" do
    browser.goto @files+"input-button-012.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, Invalid src attribute" do
    browser.goto @files+"input-button-013.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  it "button, Invalid readonly attribute" do
    browser.goto @files+"input-button-014.html"
    browser.button(:name, "test").visual_hash.should == browser.button(:name, "reference").visual_hash
  end

  # button-autofocus
  #not implemented; bug: CORE-25555
  it "button, autofocus button" do
    browser.goto @files+"input-button-autofocus-001.html"
    browser.button(:name, "test").exists?.should == true
    browser.keys.send :Enter
    browser.p(:id, "result").text.should == "PASS"
  end

  it "button, autofocus button, variation" do
    browser.goto @files+"input-button-autofocus-002.html"
    browser.button(:name, "test").exists?.should == true
    browser.keys.send :Enter
    browser.p(:id, "result").text.should == "PASS"
  end

  it "button, invalid value autofocus button" do
    browser.goto @files+"input-button-autofocus-003.html"
    browser.button(:name, "test").exists?.should == true
    browser.keys.send :Enter
    browser.p(:id, "result").text.should == "PASS"
  end

  # button-content
  it "button, Caption" do
    browser.goto @files+"input-button-content-001.html"
    browser.button(:name, "test").verify_contains("foobar").should == true
  end

  it "button, i18n support in caption" do
    browser.goto @files+"input-button-content-002.html"
    browser.button(:name, "test").verify_contains("Færøyene").should == true
  end

  it "button, Entities support in caption, variation 1" do
    browser.goto @files+"input-button-content-003.html"
    browser.button(:name, "test").verify_contains("&").should == true
  end

  it "button, Entities support in caption, variation 2" do
    browser.goto @files+"input-button-content-004.html"
    browser.button(:name, "test").verify_contains("&").should == true
  end

  it "button, containing HTML" do
    browser.goto @files+"input-button-content-005.html"
    browser.button(:id, "i1").visual_hash.should == browser.button(:id, "i2").visual_hash
  end

  # button-value
  it "button, Value of button available in DOM" do
    browser.goto @files+"input-button-value-012.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  # button-disabled
  it "button, disabled" do
    browser.goto @files+"input-button-disabled-001.html"
    begin
      browser.button(:name, "test").click
    rescue OperaWatir::Exceptions::ObjectDisabledException
      #Expected
    end
    browser.p(:id, "result").text.should == ""
  end

  it "button, disabled variable variation" do
    browser.goto @files+"input-button-disabled-002.html"
    begin
      browser.button(:name, "test").click
    rescue OperaWatir::Exceptions::ObjectDisabledException
      #Expected
    end
    browser.p(:id, "result").text.should == ""
  end

  it "button, disabled variable variation 2" do
    browser.goto @files+"input-button-disabled-003.html"
    begin
      browser.button(:name, "test").click
    rescue OperaWatir::Exceptions::ObjectDisabledException
      #Expected
    end
    browser.p(:id, "result").text.should == ""
  end

  it "button, Invalid disabled" do
    browser.goto @files+"input-button-disabled-004.html"
    begin
      browser.button(:name, "test").click
    rescue OperaWatir::Exceptions::ObjectDisabledException
      #Expected
    end
    browser.p(:id, "result").text.should == ""
  end

  it "button, Value of disabled field available in DOM" do
    browser.goto @files+"input-button-disabled-005.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  # button-keys
  it "button, accesskey" do
    pending "Awaiting 'Enter access key mode' action support in gogi (WTR-78, CORE-22015)." do
      browser.goto @files+"input-button-keys-001.html"
      browser.opera_action "Enter access key mode"
      browser.keys.send 'o'
      browser.opera_action "Leave access key mode"
      browser.p(:id, "result").text.should == "PASS"
    end
  end

  it "button, tabindex" do
    browser.goto @files+"input-button-keys-002.html"
    3.times { browser.keys.send :Tab }
    browser.keys.send :Enter
    browser.p(:id, "result").text.should == "PASS"
  end

  it "button, Trigger action with enter" do
    browser.goto @files+"input-button-keys-003.html"
    browser.keys.send :Tab
    browser.keys.send :Enter
    browser.p(:id, "result").text.should == "PASS"
  end

  it "button, Trigger action with space" do
    browser.goto @files+"input-button-keys-004.html"
    browser.keys.send :Tab
    browser.keys.send :Space
    browser.p(:id, "result").text.should == "PASS"
  end

  # button-events
  it "button, onfocus" do
    browser.goto @files+"input-button-events-002.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onblur" do
    browser.goto @files+"input-button-events-003.html"
    browser.button(:name, "test").click_no_wait
    browser.button(:name, "random_field").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onclick" do
    browser.goto @files+"input-button-events-004.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, ondblclick" do
    browser.goto @files+"input-button-events-005.html"
    browser.button(:name, "test").double_click
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onmousedown" do
    browser.goto @files+"input-button-events-006.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onmouseup" do
    browser.goto @files+"input-button-events-007.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onmouseover" do
    browser.goto @files+"input-button-events-008.html"
    browser.button(:name, "test").fire_event "onMouseOver"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onmousemove" do
    browser.goto @files+"input-button-events-009.html"
    browser.button(:name, "test").fire_event "onMouseMove"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, onmouseout" do
    browser.goto @files+"input-button-events-010.html"
    browser.button(:name, "test").fire_event "onMouseOut"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, Multiple JS events" do
    browser.goto @files+"input-button-events-011.html"
    browser.button(:name, "test").fire_event "onMouseOver"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  it "button, Adding invalid attribute size through DOM" do
    browser.goto @files+"input-button-events-013.html"
    browser.button(:name, "test").click_no_wait
    browser.p(:id, "result").verify_contains("PASS").should == true
  end
end

