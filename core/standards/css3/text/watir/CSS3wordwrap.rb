require "rubygems"
require "operawatir"

browser = OperaWatir::Browser.new


describe "CSS3 word-wrap" do

	it "TC 12 :word-wrap, input element" do
		browser.goto("http://t/core/standards/css3/text/wordwrap/input.html")
		inputEl=browser.element(:xpath,"//input[@name='orig']")
		refEl=browser.element(:xpath,"//input[@name='ref']")

   		#get the hash before focusing the input field
		inputEl_hash=inputEl.visual_hash

   		#get the hash after focusing the input field and pressing Home
		browser.keys.send :Tab
		browser.keys.send :Home
		browser.element(:xpath,"//p").click

		inputEl_hash_home=inputEl.visual_hash

		#verification
		(inputEl_hash==inputEl_hash_home).should==true

		#get the hash after focusing the input field and pressing End
		browser.keys.send :Tab
		browser.keys.send :End
		browser.keys.send :Tab
		browser.keys.send :End
		browser.element(:xpath,"//p").click
		inputEl_hash_end=inputEl.visual_hash

    	        #get the ref input element hash
		ref_hash=refEl.visual_hash

		#verification
		(inputEl_hash_end!=inputEl_hash_home and inputEl_hash_end==ref_hash ).should==true

	end

  after(:all) do
    browser.quit
  end

end
