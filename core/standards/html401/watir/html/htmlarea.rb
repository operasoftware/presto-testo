######################################################
# TEST SUITE: AREA html tests                        #
#             width doesn't reflow the other content #
#AUTHOR:      Karl W. Frogner                        #
#CREATED:     17.March 2010                          #
######################################################

require "operawatir/helper"

describe "AREA html tests" do


  it "Check if nohref works" do
    browser.goto("http://t/core/standards/html401/watir/html/htmlarea.html")
    browser.element(:id,"maps1").click(24,26)
    browser.element(:id,"Pass").verify_contains("Pass").should==false
  end

  it"A click on the the purple circle will make pass appear" do
    browser.execute_script("document.getElementById('Pass').innerText=' ';")
    browser.element(:id,"maps2").click(31,32)
    browser.element(:id,"Pass").verify_contains("Pass").should==true
  end

  it "Click on the polygon below and pass will appear" do
      browser.execute_script("document.getElementById('Pass').innerText=' ';")
    browser.element(:id, "mapsPolygon").click(68,64)
    browser.element(:id,"Pass").verify_contains("Pass").should==true

  end

  it "the entire image area should be clickable, and pass will appear" do
      browser.execute_script("document.getElementById('Pass').innerText=' ';")
    browser.element(:id, "rectMaps").click(19,24)
    browser.element(:id,"Pass").verify_contains("Pass").should==true

  end

  it "tab map highlight" do
      browser.execute_script("document.getElementById('Pass').innerText=' ';")
    browser.keys.send :Tab
    browser.element(:id, "image1Tab").compare_hash(browser.element(:id,"tabsMaps")).should==true
    browser.keys.send :Enter

    browser.element(:id,"Pass").verify_contains("It truly passes").should==true
    browser.keys.send :Tab
    browser.element(:id, "image2Tab").compare_hash(browser.element(:id,"tabsMaps")).should==true
    browser.keys.send :Enter
    browser.element(:id,"Pass").verify_contains("Pass").should==true
  end


end
