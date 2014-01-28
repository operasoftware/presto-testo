# -*- coding: utf-8 -*-
#######################
# input type="hidden" #
#######################

require "operawatir/helper"

describe "input type='hidden'" do
  before :all do
    @files = "http://t/core/standards/wf1/interactive/"
  end

  # input-hidden
  it "Visibility" do
    browser.goto @files + "input-hidden-001.html"
    browser.keys.send :Tab
    browser.type "foobar"
    browser.button(:name, "submit").click
    browser.text.should include("Result: PASS")
  end

  it "Empty GET input" do
    browser.goto @files + "input-hidden-002.html"
    browser.button(:name, "submit").click
    browser.text.should include("Result: PASS")
  end

  it "Empty POST input" do
    browser.goto @files + "input-hidden-003.html"
    browser.button(:name, "submit").click
    browser.text.should include("Result: PASS")
  end

  it "GET input" do
    browser.goto @files + "input-hidden-004.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [foobar]")
  end

  it "POST input" do
    browser.goto @files + "input-hidden-005.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [foobar]")
  end

  it "Long GET input" do
    browser.goto @files + "input-hidden-006.html"
    browser.button(:name, "submit").click
    browser.text.should include("Result: PASS")
  end

  it "Long POST input" do
    browser.goto @files + "input-hidden-007.html"
    browser.button(:name, "submit").click
    browser.text.should include("Result: PASS")
  end

  it "Multiple unique hidden fields" do
    browser.goto @files + "input-hidden-008.html"
    browser.hidden(:name, "test1").exists?.should == true
    browser.hidden(:name, "test2").exists?.should == true
    browser.hidden(:name, "test1").verify_contains("foo").should == true
    browser.hidden(:name, "test2").verify_contains("bar").should == true
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [foo] [bar]")
  end

  it "Insane number of unique hidden fields" do
    browser.goto @files + "input-hidden-009.html"
    browser.button(:name, "submit").click
    browser.text.should include("Result: PASS")
  end

  it "Multiple duplicate hidden fields" do
    browser.goto @files + "input-hidden-010.html"
    browser.hidden(:value, "foo").exists?.should == true
    browser.hidden(:value, "bar").exists?.should == true
    browser.button(:name, "submit").click
    browser.text.include?("You typed: [foo]").should == false
  end

  it "Value available in DOM" do
    browser.goto @files + "input-hidden-011.html"
    browser.p(:id, "result").verify_contains("PASS").should == true
  end

  # input-hidden-i18n
  it "Chinese input" do
    browser.goto @files + "input-hidden-i18n-001.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [東京都 伦敦]")
  end

  it "Japanese input" do
    browser.goto @files + "input-hidden-i18n-002.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [ペキンし ロンドン]")
  end

  it "Hindi input" do
    browser.goto @files + "input-hidden-i18n-003.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [मास्को लंदन]")
  end

  it "Norwegian input" do
    browser.goto @files + "input-hidden-i18n-004.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [Færøyene]")
  end

  it "Thai input" do
    browser.goto @files + "input-hidden-i18n-005.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [กรุงมอสโก ลอนดอน]")
  end

  it "Russian input" do
    browser.goto @files + "input-hidden-i18n-006.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [Москва Ло́ндон]")
  end

  it "Arabic input" do
    browser.goto @files + "input-hidden-i18n-007.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [موسكو لندن]")
  end

  it "Greek input" do
    browser.goto @files + "input-hidden-i18n-008.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [Μόσχα Λονδίνο]")
  end

  it "Korean input" do
    browser.goto @files + "input-hidden-i18n-009.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [모스크바 런던]")
  end

  it "Vietnamese input" do
    browser.goto @files + "input-hidden-i18n-010.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [Mạc Tư Khoa Luân Đôn]")
  end

  it "Combining English and Chinese input" do
    browser.goto @files + "input-hidden-i18n-011.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [Moscow 伦敦]")
  end

  it "Combining Chinese and Japanese input" do
    browser.goto @files + "input-hidden-i18n-012.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [莫斯科 ロンドン]")
  end

  it "Combining Norwegian and Russian input" do
    browser.goto @files + "input-hidden-i18n-013.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [Færøyene Москва]")
  end

  # input-hidden-value
  it "Special characters input" do
    browser.goto @files + "input-hidden-value-001.html"
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [> < &]")
  end

  it "Another element inside value" do
    browser.goto @files + "input-hidden-value-002.html"
    browser.hidden(:name, "test").verify_contains("<div id='test'>foobar</div>").should == true
    browser.div(:id, "test2").exists?.should == false
    browser.button(:name, "submit").click
    browser.text.should include("You typed: [<div id='test'>foobar</div>]")
  end

  it "Carriage return inside value" do
    browser.goto @files + "input-hidden-value-003.html"
    browser.button(:name, "submit").click
    browser.text.should include("Result: PASS")
  end

  it "New line inside value" do
    browser.goto @files + "input-hidden-value-004.html"
    browser.button(:name, "submit").click
    browser.text.should include("Result: PASS")
  end
end

