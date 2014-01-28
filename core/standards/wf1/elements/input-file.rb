###################
# input type=file #
###################

require "operawatir/helper"

describe "input type='file'" do
  before :all do
    @files = "http://t/core/standards/wf1/interactive/"
  end

  it "POST small file" do
    browser.goto @files+"input-file-001.html"

    browser.file_field(:id, "f").set($local_path+"opera.png")
    browser.button(:id, "s").click

    browser.text.should == "PASS"
  end

  it "POST small empty file" do
    browser.goto @files+"input-file-005.html"

    browser.file_field(:id, "f").set($local_path+"empty.txt")
    browser.button(:id, "s").click

    browser.text.should == "PASS"
  end

  it "accessing value through DOM, fakepath" do
    browser.goto @files+"input-file-006.html"

    browser.file_field(:id, "f").set($local_path+"empty.txt")
    browser.button(:id, "b").click_no_wait

    browser.p(:id, "result").text.should == "C:\\fakepath\\empty.txt"
  end

  it "exception thrown on accessing 'value' through DOM (CORE-33061)" do
    browser.goto @files+"input-file-007.html"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "POST, file name" do
    browser.goto @files+"input-file-008.html"

    browser.file_field(:id, "f").set($local_path+"empty.txt")
    browser.button(:id, "s").click

    browser.text.should == "file name : [empty.txt]"
  end

  it "POST, file MIME type" do
    browser.goto @files+"input-file-009.html"

    browser.file_field(:id, "f").set($local_path+"opera.png")
    browser.button(:id, "s").click

    browser.text.should == "file type : [image/png]"
  end

  it "invalid 'value' attribute" do
    browser.goto @files+"input-file-010.html"
    browser.file_field(:id, "f").text.should == ""
  end

  it "invalid 'size' attribute" do
    browser.goto @files+"input-file-011.html"
    browser.file_field(:id, "f1").visual_hash.should == browser.file_field(:id, "f2").visual_hash
  end

  it "invalid 'src' attribute" do
    browser.goto @files+"input-file-012.html"
    browser.file_field(:id, "f1").visual_hash.should == browser.file_field(:id, "f2").visual_hash
  end

  it "invalid 'max' attribute" do
    browser.goto @files+"input-file-013.html"
    browser.file_field(:id, "f1").visual_hash.should == browser.file_field(:id, "f2").visual_hash
  end

  it "invalid 'readonly' attribute" do
    browser.goto @files+"input-file-014.html"

    browser.file_field(:id, "f").set($local_path+"opera.png")
    browser.button(:id, "s").click

    browser.text.should == "PASS"
  end

  it "multiple inputs, same name, same form" do
    browser.goto @files+"input-file-015.html"

    browser.file_field(:id, "f1").set($local_path+"opera.png")
    browser.file_field(:id, "f2").set($local_path+"empty.txt")
    browser.button(:id, "s").click

    browser.text.should == "PASS"
  end

  it "multiple inputs, same name, different forms" do
    browser.goto @files+"input-file-016.html"

    browser.file_field(:id, "f1").set($local_path+"opera.png")
    browser.file_field(:id, "f2").set($local_path+"empty.txt")
    browser.button(:id, "s").click

    browser.text.should == "PASS"
  end

  it "POST multiple @files" do
    browser.goto @files+"input-file-017.html"

    browser.file_field(:id, "f1").set($local_path+"opera.png")
    browser.file_field(:id, "f2").set($local_path+"empty.txt")
    browser.button(:id, "s").click

    browser.text.should == "PASS"
  end

  it "POST disabled file input" do
    browser.goto @files+"input-file-018.html"

    browser.file_field(:id, "f").set($local_path+"empty.txt")
    browser.button(:id, "b").click_no_wait
    browser.button(:id, "s").click

    browser.text.should == "PASS"
  end

  it "required" do
    browser.goto @files+"input-file-019.html"

    browser.button(:id, "s").click
    browser.text.include?("FAIL").should == false

    browser.file_field(:id, "f").set($local_path+"empty.txt")
    browser.button(:id, "s").click
    browser.text.should == "PASS"
  end

  it "'@files' IDL attribute, variation" do
    browser.goto @files+"input-file-020.html"

    browser.file_field(:id, "f").set($local_path+"pass.txt")
    browser.button(:id, "b").click_no_wait

    browser.p(:id, "result").to_s == "PASS"
  end

  it "'@files' IDL attribute" do
    browser.goto @files+"input-file-021.html"
    browser.button(:id, "b").click_no_wait
    browser.p(:id, "result").to_s == "PASS"
  end

  it "autofocus" do
    browser.goto @files+"input-file-autofocus-001.html"

    browser.keys.send :Enter
    sleep(0.25)
    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Tab

    browser.keys.send :Enter
    browser.keys.send :Tab
    browser.keys.send :Enter

    browser.p(:id, "result").text.should == "PASS";
  end

  it "autofocus" do
    browser.goto @files+"input-file-autofocus-002.html"

    browser.keys.send :Enter
    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Tab

    browser.keys.send :Enter
    browser.keys.send :Tab
    browser.keys.send :Enter

    browser.p(:id, "result").text.should == "PASS";
  end

  it "autofocus" do
    browser.goto @files+"input-file-autofocus-003.html"

    browser.keys.send :Enter
    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Tab

    browser.keys.send :Enter
    browser.keys.send :Tab
    browser.keys.send :Enter

    browser.p(:id, "result").text.should == "PASS";
  end

  it "autofocus" do
    browser.goto @files+"input-file-autofocus-004.html"

    browser.keys.send :Enter
    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Tab

    browser.keys.send :Enter
    browser.keys.send :Tab
    browser.keys.send :Enter

    browser.p(:id, "result").text.should == "PASS"
  end

  //
  it "disabled" do
    browser.goto @files+"input-file-disabled-001.html"

    browser.file_field(:id, "f").click(200,0)

    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Enter

    browser.p(:id, "result").text.should == "PASS"
  end

  it "disabled, variation" do
    browser.goto @files+"input-file-disabled-002.html"

    browser.file_field(:id, "f").click(200,0)

    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Enter

    browser.p(:id, "result").text.should == "PASS"
  end

  it "disabled, variation 2" do
    browser.goto @files+"input-file-disabled-003.html"

    browser.file_field(:id, "f").click(200,0)

    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Enter

    browser.p(:id, "result").text.should == "PASS"
  end

  it "invalid disabled" do
    browser.goto @files+"input-file-disabled-004.html"

    browser.file_field(:id, "f").click(200,0)

    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Enter

    browser.p(:id, "result").text.should == "PASS"
  end

  it "onclick returns false" do
    browser.goto @files+"input-file-events-001.html"

    browser.file_field(:id, "f").click(200,0)

    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Enter

    browser.p(:id, "result").text.should == "PASS"
  end

  it "onclick returns false" do
    browser.goto @files+"input-file-events-012.html"

    browser.file_field(:id, "f").click(200,0)

    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Enter
    browser.keys.send :Tab
    browser.keys.send :Enter

    browser.p(:id, "result").text.should == "PASS"
  end

  it "Trigger action with enter" do
    browser.goto @files+"input-file-keys-003.html"

    browser.keys.send :Enter
    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Enter
    browser.keys.send :Tab
    browser.keys.send :Enter

    browser.p(:id, "result").text.should == "PASS"
  end

  it "Trigger action with space" do
    browser.goto @files+"input-file-keys-004.html"

    browser.keys.send :Space
    sleep(0.25)
    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Enter
    browser.keys.send :Tab
    browser.keys.send :Enter

    browser.p(:id, "result").text.should == "PASS"
  end

  it "value of disabled field accessible through DOM" do
    browser.goto @files+"input-file-disabled-005.html"
    browser.file_field(:id, "f").set $local_path+"empty.txt"
    browser.button(:id, "b").click_no_wait
    browser.p(:id, "result").text.should == "C:\\fakepath\\empty.txt"
  end

  it "onfocus" do
    browser.goto @files+"input-file-events-002.html"
    browser.file_field(:id, "f").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onblur" do
    browser.goto @files+"input-file-events-003.html"
    browser.file_field(:id, "f").click_no_wait
    browser.p(:id, "result").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onclick" do
    browser.goto @files+"input-file-events-004.html"
    browser.file_field(:id, "f").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "ondblclick" do
    browser.goto @files+"input-file-events-005.html"
    browser.file_field(:id, "f").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onmousedown" do
    browser.goto @files+"input-file-events-006.html"
    browser.file_field(:id, "f").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onmouseup" do
    browser.goto @files+"input-file-events-007.html"
    browser.file_field(:id, "f").click_no_wait
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onmouseover" do
    browser.goto @files+"input-file-events-008.html"

    browser.file_field(:id, "f").fire_event "onMouseOver"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onmousemove" do
    browser.goto @files+"input-file-events-009.html"

    browser.file_field(:id, "f").fire_event "onMouseMove"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "onmouseout" do
    browser.goto @files+"input-file-events-010.html"

    browser.file_field(:id, "f").fire_event "onMouseOut"
    browser.p(:id, "result").text.should == "PASS"
  end

  it "Multiple JS events " do
    browser.goto @files+"input-file-events-011.html"

    browser.file_field(:id, "f").fire_event "onMouseMove"
    browser.file_field(:id, "f").click_no_wait

    browser.p(:id, "result").text.should == "PASS"
  end

  it "accesskey" do
    pending "Awaiting 'Enter access key mode' action support in gogi (WTR-78, CORE-22015)." do
      browser.goto @files+"input-file-keys-001.html"

      browser.opera_action "Enter access key mode"
      browser.keys.send 'u'
      browser.opera_action "Leave access key mode"

      browser.keys.send :Tab
      browser.keys.send :Tab
      browser.keys.send :Tab
      browser.keys.send :Tab

      browser.keys.send :Enter
      browser.keys.send :Tab
      browser.keys.send :Enter

      browser.p(:id, "result").text.should == "PASS"
    end
  end

  it "tabindex" do
    browser.goto @files+"input-file-keys-002.html"

    browser.keys.send :Tab
    browser.keys.send :Tab
    browser.keys.send :Tab

    browser.p(:id, "result").text.should == "PASS"
  end
end
