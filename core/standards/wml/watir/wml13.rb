require 'rubygems'
require 'operawatir'

browser = OperaWatir::Browser.new

describe "WML 1.3 Test Suite" do

	before(:each) do
		# attemp to reset navigation, might not be needed really
		browser.keys.send :Escape
	end

	it "WML: link" do
		browser.goto("http://t/core/standards/wml/accept.wml")
		browser.opera_action 'Navigate down'
		browser.opera_action 'Activate element'
		browser.text.include?("PASS").should == true
	end

	it "WML: link with variable in url" do
		browser.goto("http://t/core/standards/wml/acceptvar.wml")
		browser.opera_action 'Navigate down'
		browser.opera_action 'Activate element'
		browser.text.include?("PASS").should == true
	end

	it "WML: input field, form submit, get method" do
		browser.goto("http://t/core/standards/wml/getinput.wml")
		browser.opera_action 'Navigate up'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Result: PASS").should == true
	end

	it "WML: select control, form submit, get method" do
		browser.goto("http://t/core/standards/wml/getoption.wml")
		browser.opera_action 'Focus next widget'
		browser.keys.send :Down # was opera action "next item" but didn't work
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "WML: select control, variable, form submit, get method" do
		browser.goto("http://t/core/standards/wml/getoptionvar.wml")
		browser.opera_action 'Focus next widget'
		browser.keys.send :Down # was opera action "next item" but didn't work
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "WML: password field, form submit, get method" do
		browser.goto("http://t/core/standards/wml/getpass.wml")
		browser.opera_action 'Navigate up'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Result: PASS").should == true
	end

	it "WML: get method, variable" do
		browser.goto("http://t/core/standards/wml/getvar.wml")
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "WML: link, onenterforward" do
		browser.goto("http://t/core/standards/wml/go.wml")
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "WML: select control, pick" do
		browser.goto("http://t/core/standards/wml/onpick.wml")
		browser.opera_action 'Focus next widget'
		browser.keys.send :Down # was opera action "next item" but didn't work
		browser.text.include?("PASS").should == true
	end

	it "WML: select control, pick event" do
		browser.goto("http://t/core/standards/wml/onpickevent.wml")
		browser.opera_action 'Focus next widget'
		browser.keys.send :Down # was opera action "next item" but didn't work
		browser.text.include?("PASS").should == true
	end

	it "WML: post method" do
		browser.goto("http://t/core/standards/wml/post.wml")
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "WML: input field, form submit, post method" do
		browser.goto("http://t/core/standards/wml/postinput.wml")
		browser.opera_action 'Navigate up'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Result: PASS").should == true
	end

	it "WML: select control, form submit, post method" do
		browser.goto("http://t/core/standards/wml/postoption.wml")
		browser.opera_action 'Navigate up'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "WML: password field, form submit, post method" do
		browser.goto("http://t/core/standards/wml/postpass.wml")
		browser.opera_action 'Navigate up'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Result: PASS").should == true
	end

	it "WML: post method, variable" do
		browser.goto("http://t/core/standards/wml/postvar.wml")
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "WML: postfield" do
		browser.goto("http://t/core/standards/wml/submit.wml")
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "WML: go, variable" do
		browser.goto("http://t/core/standards/wml/varia.wml")
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	after(:all) do
		browser.quit
	end

end

