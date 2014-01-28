<?php
	header ("Content-type: text/plain");
	if      (in_array("blocked", $_GET)) echo "method = 'blocked'";
	else if (in_array("allowed", $_GET)) echo "method = 'allowed'";
	else                                 echo "method = 'interaction'";
?>

#There are three methods, interaction (popups blocked), blocked and allowed. Watir interaction is required to emulate user interaction
#The method is dynamically set in PHP through the query parameter, so that it is hardcoded in Ruby
baseURL = 'http://t/core/standards/others/popup/'

require "operawatir/helper"

if method == 'blocked'
	query = '?blocked'
elsif method == 'allowed'
	query = '?allowed'
else
	query = '';
end
	
describe "Popups - "+method do 
	it "Indirect popup" do
		browser.goto baseURL+"indirect.html"+query
		browser.span(:id, "result").verify_contains?("PASS").should == true
	end
	
	it "Inline popup" do
		browser.goto baseURL+"inline.html"+query
		browser.span(:id, "result").verify_contains?("PASS").should == true
	end

	it "Onload popup" do
		browser.goto baseURL+"onload.html"+query
		browser.span(:id, "result").verify_contains?("PASS").should == true
	end

	it "Onerror popup" do
		browser.goto baseURL+"onerror.html"+query
		browser.span(:id, "result").verify_contains?("PASS").should == true
	end

	it "Onunload popup" do
		browser.goto baseURL+"onunload.html"+query
		if method == 'interaction'
			browser.link(:id, "a").click
		end
		browser.span(:id, "result").verify_contains?("PASS").should == true
	end

	it "Popup on user initiated blur" do
		browser.goto baseURL+"onblur.html"+query
		if method == 'interaction'
			browser.checkbox(:id, "checkbox").click
			browser.document.click(0,0)
		end
		browser.span(:id, "result").verify_contains?("PASS").should == true
	end

	it "Popup on user initiated onchange" do
		browser.goto baseURL+"onchange.html"+query
		if method == 'interaction'
			browser.text_field(:id, "textfield").set "Edited"
			browser.document.click(0,0)
		end
		browser.span(:id, "result").verify_contains?("PASS").should == true
	end

	it "Popup on user initiated click" do
		browser.goto baseURL+"onclick.html"+query
		if method == 'interaction'
			browser.link(:id, "a").click
		end
		browser.span(:id, "result").verify_contains?("PASS").should == true
	end

	it "Popup on user initiated focus" do
		browser.goto baseURL+"onfocus.html"+query
		if method == 'interaction'
			browser.checkbox(:id, "checkbox").set
		end
		browser.span(:id, "result").verify_contains?("PASS").should == true
	end

	it "Popup on user initiated reset" do
		browser.goto baseURL+"onreset.html"+query
		if method == 'interaction'
			browser.button(:id, "reset").click
		end
		browser.span(:id, "result").verify_contains?("PASS").should == true
	end

	it "Popup on user initiated submit" do
		browser.goto baseURL+"onsubmit.html"+query
		if method == 'interaction'
			browser.button(:id, "submit").click
		end
		browser.span(:id, "result").verify_contains?("PASS").should == true
	end
end