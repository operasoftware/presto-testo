require 'rubygems'
require 'operawatir'

browser = OperaWatir::Browser.new

describe "WML 2.0 Test Suite" do

	it "WML: anchor" do
		browser.goto("http://t/core/standards/wml/wml20/getanc.wml")
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "WML: anchor with variable in url" do
		browser.goto("http://t/core/standards/wml/wml20/getanchor.wml")
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	# Modified by rchlodnicki. I think test didn't make sense before.
	it "WML: select control, form submit, get method" do
		browser.goto("http://t/core/standards/wml/wml20/getoption.wml")
		browser.opera_action 'Focus next widget'
		browser.keys.send :Down
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "WML: link with variable in url" do
		browser.goto("http://t/core/standards/wml/wml20/getvar.wml")
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "WML: select control, pick event" do
		browser.goto("http://t/core/standards/wml/wml20/onpick.wml")
		browser.opera_action 'Focus next widget'
		browser.keys.send :Down # was opera action "next item" but didn't work
		sleep 1 # oh well, couldn't be less evil
		browser.text.include?("Result: PASS").should == true
	end

	it "WML: select control, pick event, variable" do
		browser.goto("http://t/core/standards/wml/wml20/onpickvar.wml")
		browser.opera_action 'Focus next widget'
		browser.keys.send :Down # was opera action "next item" but didn't work
		sleep 1 # oh well, couldn't be less evil
		browser.text.include?("Result: PASS").should == true
	end

	it "WML: post method" do
		browser.goto("http://t/core/standards/wml/wml20/post.wml")
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("PASS").should == true
	end

	it "WML: select control, form submit, post method" do
		browser.goto("http://t/core/standards/wml/wml20/postoption.wml")
		browser.opera_action 'Focus next widget'
		browser.keys.send :Down # was opera action "next item" but didn't work
		browser.opera_action 'Navigate down'
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
		browser.goto("http://t/core/standards/wml/wml20/postvar.wml")
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

