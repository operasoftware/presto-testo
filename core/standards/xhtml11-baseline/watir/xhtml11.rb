require 'rubygems'
require 'operawatir'

browser = OperaWatir::Browser.new

describe "XHTML 1.1 Baseline Test Suite" do


#	it "XHTML: charset attribute of a element" do
#		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/002.xhtml")
#		browser.link(:selector,'a').click
#		browser.text.include?("PASS").should == true
#	end

	it "XHTML: href attribute of a element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/003.xhtml")
		browser.link(:selector,'a').click
		(browser.text == ("PASS")).should == true
	end


	it "XHTML: onclick attribute of a element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/006.xhtml")
		browser.link(:selector,'a').click
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: ondblclick attribute of a element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/007.xhtml")
		browser.link(:selector,'a').double_click
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onmousedown attribute of a element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/008.xhtml")
		browser.link(:selector,'a').click
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onmousemove attribute of a element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/009.xhtml")
		browser.link(:selector,'a').fire_event('onMouseMove')
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onmouseout attribute of a element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/010.xhtml")
		browser.link(:selector,'a').fire_event('onMouseOver')
		browser.link(:selector,'a').fire_event('onMouseOut')
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onmouseover attribute of a element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/011.xhtml")
		browser.link(:selector,'a').fire_event('onMouseOver')
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onmouseup attribute of a element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/012.xhtml")
		browser.link(:selector,'a').click
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: tabindex attribute of a element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/014.xhtml")
		for i in 1..4
			browser.keys.send :Tab
		end
		browser.opera_action 'Activate element'
		browser.text.include?("PASS").should == true
	end

#	it "XHTML: onblur attribute of area element" do
#		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/022.xhtml")
#		browser.opera_action 'Navigate down'
#		browser.opera_action 'Navigate down'
#		browser.text.include?("PASS").should == true
#	end

	it "XHTML: onfocus attribute of area element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/023.xhtml")
		browser.opera_action 'Navigate down'
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: tabindex attribute of area element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/026.xhtml")
		for i in 1..4
			browser.keys.send :Tab
		end
		browser.opera_action 'Activate element'
		browser.text.include?("PASS").should == true
	end

#	it "XHTML: disabled attribute of button element" do
#		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/030.xhtml")
#		browser.button(:selector,'button').click_no_wait
#		browser.text.include?("FAIL").should == false
#	end

	it "XHTML: onclick attribute of button element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/031.xhtml")
		browser.button(:selector,'button').click
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: ondblclick attribute of button element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/032.xhtml")
		browser.button(:selector,'button').click
		browser.button(:selector,'button').click
		browser.button(:selector,'button').double_click # don't ask me why both are needed
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onmousedown attribute of button element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/033.xhtml")
		browser.button(:selector,'button').fire_event('onMouseDown')
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onmousemove attribute of button element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/034.xhtml")
		browser.button(:selector,'button').fire_event('onMouseMove')
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onmouseout attribute of button element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/035.xhtml")
		browser.button(:selector,'button').fire_event('onMouseOut')
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onmouseover attribute of button element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/036.xhtml")
		browser.button(:selector,'button').fire_event('onMouseOver')
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onmouseup attribute of button element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/037.xhtml")
		browser.button(:selector,'button').fire_event('onMouseDown')
		browser.button(:selector,'button').fire_event('onMouseUp')
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: tabindex attribute of button element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/038.xhtml")
		for i in 1..4
			browser.keys.send :Tab
		end
		browser.opera_action 'Activate element'
		browser.text.include?("PASS").should == true
	end

	it "XHTML: type attribute of button element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/039.xhtml")
		browser.opera_action 'Focus next widget'
		browser.type 'FAIL'
		browser.text.include?("FAIL").should == true
		browser.opera_action 'Focus next widget'
		browser.opera_action 'Activate element'
		browser.text.include?("FAIL").should == false
	end

#	it "XHTML: onreset attribute of form element" do
#		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/040.xhtml")
#		browser.opera_action 'Navigate down'
#		browser.opera_action 'Activate element'
#		browser.text.include?("PASS").should == true
#	end

	it "XHTML: onsubmit attribute of form element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/041.xhtml")
		browser.opera_action 'Navigate down'
		browser.opera_action 'Activate element'
		browser.text.include?("You should see word PASS").should == false # This text should disappear
	end

	it "XHTML: type attribute of input element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/054.xhtml")
		browser.opera_action 'Navigate down'
		browser.keys.send :Enter
		browser.text.include?("Result: Pass").should == true
	end

	it "XHTML: maxlength attribute of input element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/055.xhtml")
		browser.opera_action 'Focus next widget'
		browser.type 'NO'
		browser.opera_action('Unfocus form')
		browser.text.include?("NO").should == false
	end

	it "XHTML: onchange attribute of input element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/056.xhtml")
		browser.opera_action 'Focus next widget'
		browser.type 'FAIL'
		browser.opera_action 'Focus next widget'
		browser.opera_action 'Activate element'
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onkeydown attribute of input element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/057.xhtml")
		browser.opera_action 'Focus next widget'
		browser.keys.send "1"
		browser.opera_action('Unfocus form')
		browser.text.include?("you should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onkeypress attribute of input element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/058.xhtml")
		browser.opera_action 'Focus next widget'
		browser.keys.send "2"
		browser.opera_action('Unfocus form')
		browser.text.include?("you should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onkeyup attribute of input element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/059.xhtml")
		browser.opera_action 'Focus next widget'
		browser.keys.send "3"
		browser.opera_action('Unfocus form')
		browser.text.include?("you should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onselect attribute of input element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/060.xhtml")
		browser.opera_action 'Focus next widget'
		browser.text_field(:selector, 'input').text.include?("PASS").should == true
	end

#	it "XHTML: type attribute of input element" do
#		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/064.xhtml")
#		browser.opera_action 'Focus next widget'
#		browser.type 'FAIL'
#		browser.opera_action 'Focus next widget'
#		browser.opera_action 'Activate element'
#		browser.text.include?("FAIL").should == false
#	end
#
#
#	it "XHTML: for attribute of label element" do
#		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/067.xhtml")
#		browser.element(:selector,'label').click
#		browser.text.include?("PASS").should == true
#	end

#	it "XHTML: onchange attribute of textarea element" do
#		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/084.xhtml")
#		browser.opera_action 'Focus next widget'
#		browser.type 'FAIL'
#		browser.opera_action 'Focus next widget'
#		browser.opera_action 'Activate element'
#		browser.text.include?("PASS").should == true
#	end

	it "XHTML: onkeydown attribute of textarea element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/085.xhtml")
		browser.opera_action 'Focus next widget'
		browser.keys.send "1"
		browser.opera_action('Unfocus form')
		browser.text.include?("you should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onkeypress attribute of textarea element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/086.xhtml")
		browser.opera_action 'Focus next widget'
		browser.keys.send "2"
		browser.opera_action('Unfocus form')
		browser.text.include?("you should see word PASS").should == false # This text should disappear
	end

	it "XHTML: onkeyup attribute of textarea element" do
		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/087.xhtml")
		browser.opera_action 'Focus next widget'
		browser.keys.send "3"
		browser.opera_action('Unfocus form')
		browser.text.include?("you should see word PASS").should == false # This text should disappear
	end

#	it "XHTML: onselect attribute of textarea element" do
#		browser.goto("http://t/core/standards/xhtml11-baseline/interactive/088.xhtml")
#		browser.opera_action 'Focus next widget'
#		browser.opera_action 'Select all'
#		browser.text.include?("PASS").should == true
#	end

	after(:all) do
		browser.quit
	end

end

