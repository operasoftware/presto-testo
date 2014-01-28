require 'rubygems'
require 'operawatir/helper'

describe 't/core/standards/SVG/Testsuites/W3C/basic/' do
	it 'full-script-handle-01-b' do
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-script-handle-01-b-ref.html')
		refHash = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-script-handle-01-b.html')
		svg = browser.element(:xpath, '//object')
		svg.click(70, 170)
		hash = browser.visual_hash
		hash.should == refHash
	end
	it 'full-script-handle-02-b' do
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-script-handle-02-b-ref1.html')
		refHash1 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-script-handle-02-b-ref2.html')
		refHash2 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-script-handle-02-b.html')
		svg = browser.element(:xpath, '//object')
		svg.click(60, 140)
		hash1 = browser.visual_hash
		svg.click(200, 200)
		hash2 = browser.visual_hash
		hash1.should == refHash1 && hash2.should == refHash2
	end
	it 'full-script-handle-03-b' do
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-script-handle-03-b-ref1.html')
		refHash1 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-script-handle-03-b-ref2.html')
		refHash2 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-script-handle-03-b.html')
		svg = browser.element(:xpath, '//object')
		svg.fire_event('onMouseDown', 60, 140)
		hash1 = browser.visual_hash
		svg.fire_event('onMouseUp', 60, 140)
		hash2 = browser.visual_hash
		hash1.should == refHash1
		hash2.should == refHash2
	end
	it 'full-script-handle-04-b' do
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-script-handle-04-b-ref1.html')
		refHash1 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-script-handle-04-b-ref2.html')
		refHash2 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-script-handle-04-b.html')
		svg = browser.element(:xpath, '//object')
		svg.fire_event('onMouseMove', 60, 140)
		hash1 = browser.visual_hash
		svg.fire_event('onMouseMove', 200, 300)
		hash2 = browser.visual_hash
		hash1.should == refHash1 && hash2.should == refHash2
	end
	it 'full-interact-order-01-b' do
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-interact-order-01-b-ref1.html')
		refHash1 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-interact-order-01-b-ref2.html')
		refHash2 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-interact-order-01-b.html')
		svg = browser.element(:xpath, '//object')
		svg.fire_event('onMouseMove', 70, 130)
		hash1 = browser.visual_hash
		svg.fire_event('onMouseMove', 70, 250)
		hash2 = browser.visual_hash
		hash1.should == refHash1 && hash2.should == refHash2
	end
	it 'full-interact-order-02-b' do
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-interact-order-02-b.html') # The first ref is the TC itself!
		refHash1 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-interact-order-02-b-ref1.html')
		refHash2 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-interact-order-02-b-ref2.html')
		refHash3 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-interact-order-02-b.html')
		svg = browser.element(:xpath, '//object')
		hash1 = browser.visual_hash
		svg.fire_event('onMouseDown', 70, 130)
		svg.fire_event('onMouseUp', 70, 130)
		#svg.click(70, 130)
		#why doesn't click work here?! x)
		hash2 = browser.visual_hash
		svg.click(70, 250)
		hash3 = browser.visual_hash
		svg = browser.element(:xpath, '//object')
		svg.click(240, 180)
		hash4 = browser.visual_hash

		hash1.should == refHash1 && hash2.should == refHash2 && hash3.should == refHash3 && hash4.should == refHash1
	end
	it 'full-interact-order-03-b' do # TODO incomplete
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-interact-order-03-b.html') # The first ref is the TC itself!
		refHash1 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-interact-order-03-b-ref1.html')
		refHash2 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-interact-order-03-b-ref2.html')
		refHash3 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-interact-order-03-b.html')
		svg = browser.element(:xpath, '//object')
		hash1 = browser.visual_hash
		browser.execute_script('opera.generateMouseMove(100, 100);') # TODO Replace this with the watir alternative
		svg.click(100, 100)
		hash2 = browser.visual_hash
		svg.click(100, 230)
		hash3 = browser.visual_hash
		svg = browser.element(:xpath, '//object')
		svg.click(240, 180)
		hash4 = browser.visual_hash
		hash1.should == refHash1 && hash2.should == refHash2 && hash3.should == refHash3 && hash4.should == refHash1
	end
	it 'full-interact-dom-01-b' do
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-interact-dom-01-b-ref.html')
		refHash = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-interact-dom-01-b.html')
		svg = browser.element(:xpath, '//object')
		svg.click(250, 150)
		hash = browser.visual_hash
		hash.should == refHash
	end
	it 'full-linking-uri-02-b' do
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-linking-uri-02-b-ref1.html')
		refHash1 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-linking-uri-02-b-ref2.html')
		refHash2 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-linking-uri-02-b-ref3.html')
		refHash3 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-linking-uri-02-b-ref4.html')
		refHash4 = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-linking-uri-02-b.html')
		svg = browser.element(:xpath, '//object')
		svg.click(200, 140)
		hash1 = browser.visual_hash
		browser.back
		svg = browser.element(:xpath, '//object')
		svg.click(200, 160)
		hash2 = browser.visual_hash
		browser.back
		svg = browser.element(:xpath, '//object')
		svg.click(200, 180)
		hash3 = browser.visual_hash
		browser.back
		svg = browser.element(:xpath, '//object')
		svg.click(200, 200)
		hash4 = browser.visual_hash
		hash1.should == refHash1 && hash2.should == refHash2 && hash3.should == refHash3 && hash4.should == refHash4
	end
	it 'full-linking-uri-03-b' do
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-linking-a-03-b-ref.html')
		refHash = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-linking-a-03-b.html')
		svg = browser.element(:xpath, '//object')
		svg.click(250, 130)
		hash = browser.visual_hash
		hash.should == refHash
	end
	it 'full-linking-a-01-b' do
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-linking-a-01-b-ref.html')
		refHash = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-linking-a-01-b.html')
		svg = browser.element(:xpath, '//object')
		svg.click(250, 130)
		hash = browser.visual_hash
		hash.should == refHash
	end
	it 'full-linking-a-02-b' do
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-linking-a-02-b-ref.html')
		refHash = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-linking-a-02-b.html')
		svg = browser.element(:xpath, '//object')
		svg.click(250, 130)
		hash = browser.visual_hash
		hash.should == refHash
	end
	it 'full-linking-a-03-b' do
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/reftest/full-linking-a-03-b-ref.html')
		refHash = browser.visual_hash
		browser.goto('http://t/core/standards/SVG/Testsuites/W3C/basic/full-linking-a-03-b.html')
		svg = browser.element(:xpath, '//object')
		svg.click(250, 130)
		hash = browser.visual_hash
		hash.should == refHash
	end

  after(:all) do
    browser.quit
  end

end
