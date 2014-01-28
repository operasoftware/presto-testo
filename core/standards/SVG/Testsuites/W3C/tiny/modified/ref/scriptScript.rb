#!/usr/bin/env ruby
tests = Hash.new
test[""]


File.open("scriptSomScripterScript.rb","w") |script| do


script.puts("require \"operawatir\"")
script.puts("require \"rubygems\"")
script.puts 
script.puts("describe "ie-css" do")
script.puts
    script.puts("before(:all) do")
    script.puts("@browser = OperaWatir::Browser.new")
    script.puts("Time.new")
    script.puts("end")
teller=1
Dir.foreach("html") do |file|
  
    if File.extname(filename)  == ".html"
      script.puts("it \" test#{teller}\" do")
      
      
      script.puts("end")
      teller += 1
    end
    
end
script.puts("   after(:all) do")
script.puts("   @browser.quit")  
script.puts("   end  ")
script.puts("end")