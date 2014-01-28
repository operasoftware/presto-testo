# -*- coding: utf-8 -*-
##########
# button #
##########

require "operawatir/helper"

describe "button" do
  # button
  it "button, Empty button" do
    browser.url = files + "button-001.html"
    window.button(:name => "test").exists?.should be_true
    window.button(:name => "test").click!
    window.text.include?("Result: PASS").should be_true
  end
  
  it "button, Empty button, without closing tag" do
    browser.url = files + "button-002.html"
    window.button(:name => "test").exists?.should be_true
    window.button(:name => "test").click!
    window.text.include?("Result: PASS").should be_true
  end

  it "button, Empty button, with self-closing tag" do
    browser.url = files + "button-003.html"
    window.button(:name => "test").exists?.should be_true
    window.button(:name => "test").text.strip.should == "This should be inside button"
    window.button(:name => "test").click!
    window.text.should include('Result: PASS')
  end
  
  it "button, Type" do
    browser.url = files + "button-004.html"
    window.button(:name => "test").exists?.should be_true
    window.button(:name => "test").text.include?('foobar').should be_true
    window.button(:name => "test").click_async!
    window.text.should include('Clicking it should trigger no actions.')
  end

  it "button, Invalid type" do
    browser.url = files + "button-005.html"
    window.button(:name => "test").exists?.should be_true
    window.button(:name => "test").text.include?('foobar').should be_true
    window.button(:name => "test").click!
    window.text.include?("Result: PASS").should be_true
  end

  it "button, Invalid type, checkbox" do
    browser.url = files + "button-006.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Invalid type, hidden" do
    browser.url = files + "button-007.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Invalid type, image" do
    browser.url = files + "button-008.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Invalid type, password" do
    browser.url = files + "button-009.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Invalid type, radio" do
    browser.url = files + "button-010.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Invalid type, text" do
    browser.url = files + "button-011.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Invalid size attribute" do
    browser.url = files + "button-012.html"
    window.p(:id => "result").text.include?('PASS').should be_true
  end

  it "button, Invalid src attribute" do
    browser.url = files + "button-013.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Invalid readonly attribute" do
    browser.url = files + "button-014.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  # button-autofocus
  it "button, autofocus button" do
    pending "@autofocus not implemented, CORE-25555" do
      browser.url = files + "button-autofocus-001.html"
      window.button(:name => "test").exists?.should be_true
      window.keys.send :Enter
      window.text.include?("Result: PASS").should be_true
    end
  end

  it "button, autofocus button, variation" do
    pending "@autofocus not implemented, CORE-25555" do
      browser.url = files + "button-autofocus-002.html"
      window.button(:name => "test").exists?.should be_true
      window.keys.send :Enter
      window.text.include?("Result: PASS").should be_true
    end
  end

  it "button, invalid value autofocus button" do
    pending "@autofocus not implemented, CORE-25555" do
      browser.url = files + "button-autofocus-003.html"
      window.button(:name => "test").exists?.should be_true
      browser.keys.send :Enter
      window.text.include?("Result: PASS").should be_true
    end
  end

  # button-content
  it "button, Caption" do
    browser.url = files + "button-content-001.html"
    window.button(:name => "test").text.include?('foobar').should be_true
  end

  it "button, i18n support in caption" do
    browser.url = files + "button-content-002.html"
    window.button(:name => "test").text.include?('Færøyene').should be_true
  end

  it "button, Entities support in caption, variation 1" do
    browser.url = files + "button-content-003.html"
    window.button(:name => "test").text.include?('&').should be_true
  end

  it "button, Entities support in caption, variation 2" do
    browser.url = files + "button-content-004.html"
    window.button(:name => "test").text.include?('&').should be_true
  end

  it "button, HTML support in caption" do
    browser.url = files + "button-content-005.html"
    window.button(:name => "test").text.strip.should == "Lorem ipsum dolor sit amet"
    window.div(:id, "test2").exists?.should be_true
  end

  it "button, Image support in caption, image/jpeg" do
    browser.url = files + "button-content-006.html"
    window.button(:name => "test").compare_hash(window.image(:id, "reference")).should be_true
  end

  it "button, Image support in caption, image/png" do
    browser.url = files + "button-content-007.html"
    window.button(:name => "test").compare_hash(window.image(:id, "reference")).should be_true
  end

  it "button, Image support in caption, image/svg+xml" do
#    pending "SVG images in buttons does not load on first attempt, CORE-XXXX" do
      browser.url = files + "button-content-008.html"
      window.button(:name => "test").compare_hash(window.image(:id, "reference")).should be_true
#    end
  end

  it "button, Image support in caption, image/gif" do
    browser.url = files + "button-content-009.html"
    sleep(6)  # This is an animated GIF.
    window.button(:name => "test").compare_hash(window.image(:id, "reference")).should be_true
  end

  it "button, iframe support in caption" do
    browser.url = files + "button-content-010.html"
    window.frame(:index, 1)
    window.text.include?("Result: PASS").should be_true
  end

  it "button, Input checkbox element in caption" do
    browser.url = files + "button-content-011.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Input hidden element in caption" do
    browser.url = files + "button-content-012.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Input image element in caption" do
    browser.url = files + "button-content-013.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Input password element in caption" do
    browser.url = files + "button-content-014.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Input radio element in caption" do
    browser.url = files + "button-content-015.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Input retext = element in caption" do
    browser.url = files + "button-content-016.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Input submit element in caption" do
    browser.url = files + "button-content-017.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Input text element in caption" do
    browser.url = files + "button-content-018.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Textarea element in caption" do
    browser.url = files + "button-content-019.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  it "button, Label element in caption" do
    browser.url = files + "button-content-020.html"
    window.button(:name => "test").click_async!
    browser.type "foobar"
    window.input(:name => "test2").text.include?('foobar').should_not be_true
  end

  it "button, Select element in caption" do
    browser.url = files + "button-content-021.html"
    window.button(:name => "test").compare_hash(window.button(:name => "reference")).should be_true
  end

  # button-value
  it "button, Standard value through GET" do
    browser.url = files + "button-value-001.html"
    window.button(:name => "test").click!
    window.text.include?("Result: PASS").should be_true
  end

  it "button, Standard value through POST" do
    browser.url = files + "button-value-002.html"
    window.button(:name => "test").click!
    window.text.include?("Result: PASS").should be_true
  end

  it "button, Alternate value through GET" do
    browser.url = files + "button-value-003.html"
    window.button(:name => "test").click!
    window.text.include?("You typed: [foobar]").should be_true
  end

  it "button, Alternate value through POST" do
    browser.url = files + "button-value-004.html"
    window.button(:name => "test").click!
    window.text.include?("You typed: [foobar]").should be_true
  end

  it "button, Entities in value through GET" do
    browser.url = files + "button-value-005.html"
    window.button(:name => "test").click!
    window.text.include?("You typed: [&]").should be_true
  end

  it "button, Entities in value through POST" do
    browser.url = files + "button-value-006.html"
    window.button(:name => "test").click!
    window.text.include?("You typed: [&]").should be_true
  end

  it "button, HTML in value through GET" do
    browser.url = files + "button-value-007.html"
    window.button(:name => "test").click!
    window.text.include?("You typed: [<div id='test2'>foobar</div>]").should be_true
  end

  it "button, HTML in value through POST" do
    browser.url = files + "button-value-008.html"
    window.button(:name => "test").click!
    window.text.include?("You typed: [<div id='test2'>foobar</div>]").should be_true
  end

  it "button, i18n support in value" do
    browser.url = files + "button-value-009.html"
    window.button(:name => "test").click!
    window.text.include?("You typed: [Færøyene]").should be_true
  end

  it "button, Invalid type with GET" do
    browser.url = files + "button-value-010.html"
    window.button(:name => "test").click!
    window.text.include?("You typed: [foobar]").should be_true
  end

  it "button, Invalid type with POST" do
    browser.url = files + "button-value-011.html"
    window.button(:name => "test").click!
    window.text.include?("You typed: [foobar]").should be_true
  end

  it "button, Value of button available in DOM" do
    browser.url = files + "button-value-012.html"
    window.p(:id => 'result').should include('PASS')
  end

  it "button, Empty value through GET" do
    browser.url = files + "button-value-013.html"
    window.button(:name => "test").click!
    window.text.include?("Result: PASS").should be_true
  end

  it "button, Empty value through POST" do
    browser.url = files + "button-value-014.html"
    window.button(:name => "test").click!
    window.text.include?("Result: PASS").should be_true
  end

  # button type="submit"
  it 'button, Standard submit button' do
    browser.url = files + 'button-type-submit-001.html'
    window.button.click!
    window.text.should include 'Result: PASS'
  end

  it 'button, Alternative submit button' do
    browser.url = files + 'button-type-submit-002.html'
    window.button.click!
    window.text.should include 'Result: PASS'
  end

  it 'button, Submit button in combination with other fields' do
    browser.url = files + 'button-type-submit-003.html'
    window.button.click!
    window.text.should include 'You typed: [foobar]'
  end

  it 'button, Multiple unique submit buttons in the same form' do
    browser.url = files + 'button-type-submit-004.html'
    window.button(:name => 'submit2').click!
    window.text.should include 'Result: PASS'
  end

  it 'button, Multiple unique submit buttons in separate forms' do
    browser.url = files + 'button-type-submit-005.html'
    window.button(:name => 'submit1').click!
    window.text.should include 'Result: PASS'
  end

  it 'button, Multiple duplicate submit buttons in the same form' do
    browser.url = files + "button-type-submit-006.html"
    window.button(:id => 'test').click!
    window.text.should include 'Result: PASS'
  end

  it 'button, Multiple dupblicate submit buttons in separate forms' do
    browser.url = files + 'button-type-submit-007.html'
    window.button(:id => 'second_button').click!
    window.text.should include 'You typed: [bar]'
  end

  # button-type-reset
  it 'button, Reset field' do
    browser.url = files + 'button-type-reset-001.html'
    window.input.text = 'foobar'
    window.button.click_async!
    window.input.text.should include 'foobar'
  end

  it 'button, Reset field, variation' do
    browser.url = files + 'button-type-reset-002.html'
    window.input.text = 'foobar'
    window.button.click_async!
    window.input.text.should include 'foobar'
  end

  it 'button, Reset prefilled field' do
    browser.url = files + 'button-type-reset-003.html'
    window.input.text.clear!
    window.button.click_async!
    window.input.text.should include 'foobar'
  end

  it 'button, Reset multiple fields' do
    browser.url = files + 'button-type-reset-004.html'

    window.input(:name => 'test1').text = 'foo'
    window.input(:name => 'test2').text = 'bar'

    window.button.click_async!

    window.input(:name => 'test1').text.should include 'foo'
    window.input(:name => 'test2').text.include 'bar'
  end

  it 'button, Reset multiple prefilled fields' do
    browser.url = files + 'button-type-reset-005.html'

    window.input(:name => 'test1').text.clear!
    window.input(:name => 'test2').text.clear!

    window.button.click_async!

    window.input(:name => 'test1').text.should include 'foo'
    window.input(:name => 'test2').text.should include 'bar'
  end

  it 'button, Reset password field' do
    browser.url = files + 'button-type-reset-006.html'
    window.input.text = 'foobar'
    window.input.text.should include 'foobar'
    window.button.click_async!
    window.input.text.should be_empty
  end

  it 'button, Reset checkbox field' do
    browser.url = files + 'button-type-reset-007.html'
    window.input.uncheck!
    window.button.click_async!
    window.input.should be_checked
  end

  it 'button, Reset radio buttons' do
    browser.url = files + 'button-type-reset-008.html'
    window.input(:value => 'foo').check!
    window.button.click_async!
    window.input(:value => 'foo').should be_checked
  end

  it 'button, Retext = textarea field' do
    browser.url = files + 'button-type-reset-009.html'
    window.textarea.text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.'
    window.button.click_async!
    window.textarea.text.should include 'foobar'
  end

  it 'button, Reset file field' do
    browser.url = files + 'button-type-reset-010.html'
    window.input.text = 'foobar.txt'
    window.button.click_async!
    window.input.text.should include 'foobar.txt'
  end

  it 'button, Reset select field' do
    browser.url = files + 'button-type-reset-011.html'
    window.select.option(:value => 'foo').select!
    window.button.click_async!
    window.select.option(:value => 'bar').should be_selected
  end

  it 'button, Reset select multiple field' do
    browser.url = files + 'button-type-reset-012.html'

    window.select.option(:value => 'bird').select!
    window.select.option(:value => 'cat').deselect!

    window.button.click_async!

    window.select.option(:value => 'cat').should be_selected
  end

  it 'button, Reset select multiple field, variation' do
    browser.url = files + 'button-type-reset-013.html'

    window.select.option(:value => 'bird').select!
    window.select.option(:value => 'fish').select!
    window.select.option(:value => 'horse').select!

    window.button.click_async!

    window.select.option(:value => "cat").should be_selected
    window.select.option(:value => "dog").should be_selected
  end

  it 'button, Reset combinations of fields' do
    browser.url = files + 'button-type-reset-014.html'

    window.input(:name => 'test1').text.clear!
    window.input(:name => 'test2').text.clear!
    window.input(:name => 'test3').uncheck!
    window.input(:name => 'test4', :value => 'bar').check!
    window.textarea(:name => 'test5').text.clear!
    window.input(:name => 'test6').text = 'test.txt';
    window.select(:name => 'test7').option(:value => 'bar').select!

    window.button.click_async!

    window.input(:name => 'test1').text.should include 'foo'
    window.input(:name => 'test2').text.should include 'foo'
    window.input(:name => 'test3').should be_checked
    window.input(:name => 'test4', :value => 'foo').should be_checked
    window.input(:name => 'test5').text.should include 'foo'
    window.input(:name => 'test6').text.should be_empty
    window.select(:name => 'test7').option(:value => 'foo').should be_selected
  end

  it 'button, Reset value' do
    browser.url = files + 'button-type-reset-015.html'
    window.input.click!
    window.text.should include 'You typed: []'
  end

  # button-type-combinations
  it 'button, Submit button in combination with regular button' do
    browser.url = files + 'button-type-combinations-001.html'

    window.button(:name => 'test').click!
    window.button(:name => 'test').should exist

    window.button(:name => 'submit').click!
    window.text.should include 'You typed: [PASS]'
  end

  it 'button, Submit button in combination with reset button' do
    browser.url = files + 'button-type-combinations-002.html'

    window.button(:name => 'test').click!
    window.button(:name => 'test').should exist

    window.button(:name => 'submit').click!
    window.text.should include 'You typed: [PASS]'
  end

  it 'button, Submit button in combination with submit input' do
    browser.url = files + 'button-type-combinations-003.html'
    window.button.click!
    window.text.should include 'Result: PASS'
  end

  it 'button, Reset button in combination with reset input' do
    browser.url = files + 'button-type-combinations-004.html'

    window.input(:name => 'test').text = 'foobar'
    window.input(:name => 'reset1').click_async!
    window.input(:name => 'test').text.should be_empty

    window.input(:name => 'test').text = 'foobar'
    window.button(:name => 'reset2').click_async!
    window.input(:name => 'test').text.should be_empty
  end

  it 'button, Submit, reset and regular button in combination' do
    browser.url = files + "button-type-combinations-005.html"

    window.input.text.clear!

    window.button(:text => 'First').click_async!
    window.input.text.should be_empty

    window.button(:text => 'Reset').click_async!
    window.input.text.should include 'foobar'

    window.button(:text => 'Submit').click!
    window.text.should include 'You typed: [foobar]'
  end

  # button-disabled
  it "button, disabled" do
    browser.url = files + "button-disabled-001.html"
    window.button(:name => "test").click!
    window.text.include?("Nothing should happen.").should be_true
  end

  it "button, disabled variable variation" do
    browser.url = files + "button-disabled-002.html"
    window.button(:name => "test").click!
    window.text.include?("Nothing should happen.").should be_true
  end

  it "button, disabled variable variation 2" do
    browser.url = files + "button-disabled-003.html"
    window.button(:name => "test").click!
    window.text.include?("Nothing should happen.").should be_true
  end

  it "button, Invalid disabled" do
    browser.url = files + "button-disabled-004.html"
    window.button(:name => "test").click!
    window.text.include?("Nothing should happen.").should be_true
  end

  it "button, Value of disabled field available in DOM" do
    browser.url = files + "button-disabled-005.html"
    window.p(:id => "result").text.include?('PASS').should be_true
  end

  # button-keys
  it "button, accesskey" do
    pending "awaiting Enter access key mode support in gogi" do
      browser.url = files + "button-keys-001.html"
      window.opera_action "Enter access key mode"
      window.keys.send "o"
      window.opera_action "Leave access key mode"
      window.p(:id => "result").text.include?('PASS').should be_true
    end
  end

  it "button, tabindex" do
    browser.url = files + "button-keys-002.html"
    3.times { window.keys.send :Tab }
    window.keys.send :Enter
    sleep(0.25)
    window.text.include?("Result: PASS").should be_true
  end

  it "button, Trigger action with enter" do
    browser.url = files + "button-keys-003.html"
    window.keys.send :Tab
    window.keys.send :Enter
    sleep(0.25)
    window.text.include?("Result: PASS").should be_true
  end

  it "button, Trigger action with space" do
    browser.url = files + "button-keys-004.html"
    window.keys.send :Tab
    window.keys.send :Space
    sleep(0.25)
    window.text.include?("Result: PASS").should be_true
  end

  # button-events
  it "button, Cancelling action request" do
    browser.url = files + "button-events-001.html"
    window.button(:name => "test").click!
    window.text.include?("Nothing should happen.").should be_true
  end

  it "button, onfocus" do
    browser.url = files + "button-events-002.html"
    window.button(:name => "test").click_async!
    window.p(:id => "result").text.include?('PASS').should be_true
  end

  it "button, onblur" do
    browser.url = files + "button-events-003.html"
    window.button(:name => "test").click_async!
    window.button(:name => "random_field").click_async!
    window.p(:id => "result").text.include?('PASS').should be_true
  end

  it "button, o.click!" do
    browser.url = files + "button-events-004.html"
    window.button(:name => "test").click_async!
    window.p(:id => "result").text.include?('PASS').should be_true
  end

  it "button, ondb.click!" do
    browser.url = files + "button-events-005.html"
    window.button(:name => "test").double_click!
    window.p(:id => "result").text.include?('PASS').should be_true
  end

  it "button, onmousedown" do
    browser.url = files + "button-events-006.html"
    window.button(:name => "test").click_async!
    window.p(:id => "result").text.include?('PASS').should be_true
  end

  it "button, onmouseup" do
    browser.url = files + "button-events-007.html"
    window.button(:name => "test").click_async!
    window.p(:id => "result").text.include?('PASS').should be_true
  end

  it "button, onmouseover" do
    browser.url = files + "button-events-008.html"
    window.button(:name => "test").trigger! "onMouseOver"
    window.p(:id => "result").text.include?('PASS').should be_true
  end

  it "button, onmousemove" do
    browser.url = files + "button-events-009.html"
    window.button(:name => "test").trigger! "onMouseMove"
    window.p(:id => "result").text.include?('PASS').should be_true
  end

  it "button, onmouseout" do
    browser.url = files + "button-events-010.html"
    window.button(:name => "test").trigger! "onMouseOut"
    window.p(:id => "result").text.include?('PASS').should be_true
  end

  it "button, Multiple JS events" do
    browser.url = files + "button-events-011.html"
    window.button(:name => "test").trigger! "onMouseOver"
    window.button(:name => "test").click_async!
    window.p(:id => "result").text.include?('PASS').should be_true
  end

  it "button, Empty JS event" do
    browser.url = files + "button-events-012.html"
    window.button(:name => "test").click!
    window.text.include?("Result: PASS").should be_true
  end

  it "button, Adding invalid attribute size through DOM" do
    browser.url = files + "button-events-013.html"
    window.button(:name => "test").click_async!
    window.p(:id => "result").text.include?('PASS').should be_true
  end
end
