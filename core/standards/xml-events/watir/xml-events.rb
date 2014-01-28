require 'rubygems'
require 'operawatir'

browser = OperaWatir::Browser.new

def resolve name
	return "http://t/core/standards/xml-events/interactive/" + name + ".xhtml"
end

describe "XML events" do

	it "Blur event" do
		for i in 1..5
			browser.goto(resolve ("blur-" + i.to_s))
			browser.element(:selector,"input").click_no_wait
			browser.element(:selector,"div + div > input").click_no_wait
			browser.text.include?("PASS").should == true
		end
	end

	it "Change event" do
		for i in 1..4
			browser.goto(resolve ("change-" + i.to_s))
			browser.element(:selector,"input").click_no_wait
			browser.text.include?("PASS").should == true
		end
	end

	it "Click event" do
		for i in 1..5
			browser.goto(resolve ("click-div-" + i.to_s))
			browser.element(:selector,"div").click_no_wait
			browser.text.include?("PASS").should == true
		end
	end

	it "Focus event" do
		for i in 1..5
			browser.goto(resolve ("focus-" + i.to_s))
			browser.element(:selector,"input").click_no_wait
			browser.text.include?("PASS").should == true
		end
	end

	it "Focusin event" do
		for i in 1..5
			browser.goto(resolve ("focus-in-" + i.to_s))
			browser.element(:selector,"input").click_no_wait
			browser.text.include?("PASS").should == true
		end
	end

	it "Focusout event" do
		for i in 1..5
			browser.goto(resolve ("focus-out-" + i.to_s))
			browser.element(:selector,"input").click_no_wait
			browser.element(:selector,"div + div > input").click_no_wait
			browser.text.include?("PASS").should == true
		end
	end

	it "Keydown event" do
		for i in 1..5
			browser.goto(resolve ("key-down-" + i.to_s))
			browser.opera_action('Focus next widget')
			browser.type i.to_s
			browser.opera_action('Focus next widget')
			browser.text.include?("PASS").should == true
		end
	end

	it "Keyup event" do
		for i in 1..5
			browser.goto(resolve ("key-up-" + i.to_s))
			browser.opera_action('Focus next widget')
			browser.type i.to_s
			browser.opera_action('Focus next widget')
			browser.text.include?("PASS").should == true
		end
	end

	it "Mousemove event" do
		for i in 1..5
			browser.goto(resolve ("mouse-move-" + i.to_s))
			browser.element(:selector,"div").click_no_wait
			browser.text.include?("PASS").should == true
		end
	end

	it "Mouseout event" do
		for i in 1..5
			browser.goto(resolve ("mouse-out-" + i.to_s))
			browser.element(:selector,"div").fire_event('onMouseOut')
			browser.text.include?("PASS").should == true
		end
	end

	it "Mouseover event" do
		for i in 1..5
			browser.goto(resolve ("mouse-over-" + i.to_s))
			browser.element(:selector,"div").fire_event('onMouseOver')
			browser.text.include?("PASS").should == true
		end
	end

	it "Mousedown event" do
		for i in 1..5
			browser.goto(resolve ("mousedown-div-" + i.to_s))
			browser.element(:selector,"div").click_no_wait
			browser.text.include?("PASS").should == true
		end
	end

	it "Mouseup event" do
		for i in 1..5
			browser.goto(resolve ("mouseup-div-" + i.to_s))
			browser.element(:selector,"div").click_no_wait
			browser.text.include?("PASS").should == true
		end
	end
	it "Reset event" do
		for i in 1..5
			browser.goto(resolve ("reset-" + i.to_s))
			browser.element(:selector,"input + input").click_no_wait
			browser.text.include?("PASS").should == true
		end
	end

	it "Resize event" do
		for i in 1..4
			browser.goto(resolve ("resize-" + i.to_s))
			browser.opera_action('Toggle presentation mode')
			browser.text.include?("PASS").should == true
			browser.opera_action('Toggle presentation mode')
		end
	end

	it "Scroll event" do
		for i in 1..4
			browser.goto(resolve ("scroll-" + i.to_s))
			browser.opera_action('Go to end')
			browser.text.include?("PASS").should == true
		end
	end

	it "Submit event" do
		for i in 1..5
			browser.goto(resolve ("submit-" + i.to_s))
			browser.element(:selector,"input + input").click_no_wait
			browser.text.include?("PASS").should == true
		end
	end

  after(:all) do
    browser.quit
  end

end