#require "rubygems"
require "operawatir/helper"

describe "XHTML 1.1 Test Suite" do
	it "XHTML: charset attribute of a element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/a-charset.xml")
		browser.link().click
		browser.text.include?("PASS").should == true
	end

	it "XHTML: href attribute of a element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/a-href.xml")
		browser.link().click
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onclick attribute of a element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/a-onclick.xml")
		browser.link().click_no_wait
		browser.text.include?("PASS").should == true
	end

	it "XHTML: ondblclick attribute of a element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/a-ondblclick.xml")
		browser.link().click_no_wait
		browser.link().click_no_wait
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onmousedown attribute of a element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/a-onmousedown.xml")
		browser.link().click_no_wait
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onmousemove attribute of a element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/a-onmousemove.xml")
		browser.link().click_no_wait
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onmouseout attribute of a element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/a-onmouseout.xml")
		browser.link().fire_event("onMouseOut")
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onmouseover attribute of a element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/a-onmouseover.xml")
		browser.link().fire_event("onMouseOver")
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onmouseup attribute of a element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/a-onmouseup.xml")
		browser.link().click_no_wait
		browser.text.include?("PASS").should == true
	end

	it "XHTML: tabindex attribute of a element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/a-tabindex.xml")
		for i in 1..4
			browser.keys.send :Tab
		end
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onblur attribute of area element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/area-onblur.xml")
		browser.keys.send :Tab, :Tab
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onfocus attribute of area element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/area-onfocus.xml")
		browser.keys.send :Tab
		browser.text.include?("PASS").should == true
	end

	it "XHTML: tabindex attribute of area element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/area-tabindex.xml")
		for i in 1..4
			browser.keys.send :Tab
		end
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

#	it "XHTML: disabled attribute of button element" do
#		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/button-disabled.xml")
#		browser.button().click_no_wait
#		browser.text.include?("FAIL").should == false
#	end

	it "XHTML: onclick attribute of button element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/button-onclick.xml")
		browser.button().click_no_wait
		browser.text.include?("PASS").should == true
	end

	it "XHTML: ondblclick attribute of button element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/button-ondblclick.xml")
		browser.button().click_no_wait
		browser.button().click_no_wait
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onmousedown attribute of button element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/button-onmousedown.xml")
		browser.button().click_no_wait
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onmousemove attribute of button element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/button-onmousemove.xml")
		browser.button().click_no_wait
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onmouseout attribute of button element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/button-onmouseout.xml")
		browser.button().fire_event("onMouseOut")
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onmouseover attribute of button element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/button-onmouseover.xml")
		browser.button().fire_event("onMouseOver")
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onmouseup attribute of button element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/button-onmouseup.xml")
		browser.button().click_no_wait
		browser.text.include?("PASS").should == true
	end

	it "XHTML: tabindex attribute of button element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/button-tabindex.xml")
		for i in 1..4
			browser.keys.send :Tab
		end
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "XHTML: type attribute of button element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/button-type-reset.xml")
		#browser.keys.send :Tab
		browser.keys.send :Tab
		browser.type "FAIL"
		browser.text_field(:name, "result").text.should == "FAIL"
		#browser.keys.send :Tab
		#browser.keys.send :Enter
		browser.keys.send :Tab, :Enter
		browser.text_field(:name, "result").text.should_not == "FAIL"
	end

#	it "XHTML: onreset attribute of form element" do
#		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/form-onreset.xml")
#		browser.opera_action "Navigate down"
#		browser.keys.send :Enter
#		browser.text.include?("PASS").should == true
#	end

	it "XHTML: onsubmit attribute of form element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/form-onsubmit.xml")
		#browser.opera_action "Navigate down"
		browser.keys.send :Tab
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "XHTML: type attribute of input element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/input-image.xml")
		#browser.opera_action "Navigate down"
		#browser.keys.send :Enter
		browser.keys.send :Tab, :Enter
		browser.text.include?("Pass").should == true
	end

	it "XHTML: maxlength attribute of input element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/input-maxlength.xml")
		browser.keys.send :Tab
		browser.type "NO"
		browser.text.include?("NO").should == false
	end

	it "XHTML: onchange attribute of input element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/input-onchange.xml")
		browser.keys.send :Tab
		#browser.keys.send :Tab
		browser.type "FAIL"
		#browser.keys.send :Tab
		#browser.keys.send :Enter
		browser.keys.send :Tab, :Enter
		browser.text_field(:name, "in").text.should == "PASS"
		#browser.text.include?("PASS").should == true
	end

	it "XHTML: onkeydown attribute of input element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/input-onkeydown.xml")
		#browser.keys.send :Tab
		browser.keys.send :Tab,:One
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onkeypress attribute of input element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/input-onkeypress.xml")
		#browser.keys.send :Tab
		browser.keys.send :Tab,:Two
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onkeyup attribute of input element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/input-onkeyup.xml")
		browser.keys.send :Tab,:Three
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onselect attribute of input element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/input-onselect.xml")
		#browser.keys.send :Tab
		browser.keys.send :Tab
		browser.text_field(:name, "in").text.should == "PASS"
	end

#	it "XHTML: type attribute of input element" do
#		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/input-type-reset.xml")
#		browser.keys.send :Tab
#		browser.type "FAIL"
#		browser.keys.send :Tab
#		browser.keys.send :Enter
#		browser.text.include?("FAIL").should == false
#	end


#	it "XHTML: for attribute of label element" do
#		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/label-for.xml")
#		browser.element(:selector,"label").click
#		browser.text.include?("PASS").should == true
#	end

#	it "XHTML: onchange attribute of textarea element" do
#		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/textarea-onchange.xml")
#		browser.keys.send :Tab
#		browser.type "FAIL"
#		browser.keys.send :Tab
#		browser.keys.send :Enter
#		browser.text.include?("PASS").should == true
#	end

	it "XHTML: onkeydown attribute of textarea element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/textarea-onkeydown.xml")
		browser.keys.send :Tab
		browser.keys.send :One
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onkeypress attribute of textarea element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/textarea-onkeypress.xml")
		browser.keys.send :Tab
		browser.keys.send :Two
		browser.text.include?("PASS").should == true
	end

	it "XHTML: onkeyup attribute of textarea element" do
		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/textarea-onkeyup.xml")
		browser.keys.send :Tab
		browser.keys.send :Three
		browser.text.include?("PASS").should == true
	end

#	it "XHTML: onselect attribute of textarea element" do
#		browser.goto("http://t/core/standards/xhtml-in-xml/interactive/textarea-onselect.xml")
#		browser.keys.send :Tab
#		browser.opera_action "Select all"
#		browser.text.include?("PASS").should == true
#	end

end

