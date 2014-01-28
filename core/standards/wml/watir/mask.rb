require 'rubygems'
require 'operawatir'

browser = OperaWatir::Browser.new

describe "WML masks" do

	it "WML: mask a*a, empty input" do
		browser.goto("http://t/core/standards/wml/masks/abcd.wml")
		browser.opera_action 'Focus next widget'
		browser.opera_action 'Delete'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Fail").should == false
	end

	it "WML: mask *a, empty input not ok" do
		browser.goto("http://t/core/standards/wml/masks/abcde.wml")
		browser.opera_action 'Focus next widget'
		browser.opera_action 'Delete'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Fail").should == false
	end

	it "WML: mask M*M" do
		browser.goto("http://t/core/standards/wml/masks/char.wml")
		browser.opera_action 'Focus next widget'
		browser.type 'Opera'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Pass").should == true
	end

	it "WML: mask M*M, empty input" do
		browser.goto("http://t/core/standards/wml/masks/chars.wml")
		browser.opera_action 'Focus next widget'
		browser.opera_action 'Delete'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Fail").should == false
	end

	it "WML: mask *M, empty input not allowed" do
		browser.goto("http://t/core/standards/wml/masks/chr.wml")
		browser.opera_action 'Focus next widget'
		browser.opera_action 'Delete'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Fail").should == false
	end

	it "WML: mask N*N" do
		browser.goto("http://t/core/standards/wml/masks/digits.wml")
		browser.opera_action 'Focus next widget'
		browser.type 'abc'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Fail").should == false
	end

	it "WML: mask *N" do
		browser.goto("http://t/core/standards/wml/masks/empty.wml")
		browser.opera_action 'Focus next widget'
		browser.opera_action 'Delete'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Pass").should == true
	end

	it "WML: mask N*N, empty input" do
		browser.goto("http://t/core/standards/wml/masks/emptyok.wml")
		browser.opera_action 'Focus next widget'
		browser.opera_action 'Delete'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Pass").should == true
	end

	it "WML: mask X*X" do
		browser.goto("http://t/core/standards/wml/masks/nolow.wml")
		browser.opera_action 'Focus next widget'
		browser.type 'abc'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Fail").should == false
	end

	it "WML: mask x*x" do
		browser.goto("http://t/core/standards/wml/masks/noup.wml")
		browser.opera_action 'Focus next widget'
		browser.type 'ABC'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Fail").should == false
	end

	it "WML: mask N*N, empty input not allowed" do
		browser.goto("http://t/core/standards/wml/masks/number.wml")
		browser.opera_action 'Focus next widget'
		browser.opera_action 'Delete'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Fail").should == false
	end

	it "WML: mask *N, empty input not allowed" do
		browser.goto("http://t/core/standards/wml/masks/numbers.wml")
		browser.opera_action 'Focus next widget'
		browser.opera_action 'Delete'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Fail").should == false
	end

	it "WML: mask A*A" do
		browser.goto("http://t/core/standards/wml/masks/up.wml")
		browser.opera_action 'Focus next widget'
		browser.type 'abc'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Fail").should == false
	end

	it "WML: mask A*A, empty input" do
		browser.goto("http://t/core/standards/wml/masks/upper.wml")
		browser.opera_action 'Focus next widget'
		browser.opera_action 'Delete'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Fail").should == false
	end

	it "WML: mask *A, empty input" do
		browser.goto("http://t/core/standards/wml/masks/uppercase.wml")
		browser.opera_action 'Focus next widget'
		browser.opera_action 'Delete'
		browser.opera_action 'Navigate down'
		# Activating element won't wait until page is loaded so will produce random results
		# browser.opera_action 'Activate element'
		browser.keys.send :Enter
		browser.text.include?("Fail").should == false
	end

	after(:all) do
		browser.quit
	end

end

