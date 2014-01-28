require "operawatir/helper"

teller = 0




describe "svg " do


	it "Test svgdom-over-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/svgdom-over-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-grammar-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-grammar-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-fonts-203-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-fonts-203-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-frag-05-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-frag-05-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-fill-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-fill-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-render-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-render-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-marker-marker-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-marker-marker-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-coord-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-coord-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-dom-19-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-dom-19-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-15-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-15-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-polygon-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-polygon-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-deco-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-deco-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test styling-class-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/styling-class-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-tref-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-tref-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-overview-201-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-overview-201-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-defs-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-defs-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-07-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-07-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-frag-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-frag-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-tselect-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-tselect-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test types-basic-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/types-basic-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-felem-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-felem-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-fonts-05-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-fonts-05-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test color-prop-05-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/color-prop-05-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-transformattr-04-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-transformattr-04-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-12-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-12-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-intro-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-intro-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-elem-03-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-elem-03-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-19-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-19-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-stroke-04-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-stroke-04-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-text-11-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-text-11-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-07-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-07-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-11-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-11-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-10-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-10-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-dom-18-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-dom-18-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-geometry-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-geometry-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-cond-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-cond-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-displace-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-displace-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-04-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-04-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-marker-06-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-marker-06-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-rect-06-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-rect-06-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-tselect-03-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-tselect-03-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-viewattr-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-viewattr-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test render-elems-06-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/render-elems-06-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-desc-05-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-desc-05-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-05-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-05-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-text-04-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-text-04-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-08-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-08-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test render-elems-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/render-elems-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test interact-events-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/interact-events-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test extend-namespace-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/extend-namespace-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-ws-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-ws-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-dom-12-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-dom-12-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-use-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-use-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-18-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-18-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-rect-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-rect-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-07-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-07-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-transformattr-03-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-transformattr-03-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test types-dom-06-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/types-dom-06-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-control-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-control-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-09-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-09-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-light-03-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-light-03-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-align-04-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-align-04-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-text-09-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-text-09-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-marker-07-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-marker-07-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-ellipse-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-ellipse-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-marker-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-marker-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-12-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-12-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-23-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-23-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-dom-17-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-dom-17-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-transformattr-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-transformattr-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-text-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-text-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-stroke-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-stroke-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-intro-03-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-intro-03-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-06-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-06-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-21-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-21-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-rect-07-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-rect-07-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-stroke-10-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-stroke-10-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-fill-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-fill-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test linking-a-10-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/linking-a-10-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-fonts-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-fonts-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-20-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-20-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-intro-04-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-intro-04-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-kern-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-kern-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-geometry-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-geometry-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-fonts-04-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-fonts-04-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-frag-04-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-frag-04-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-fill-05-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-fill-05-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-control-03-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-control-03-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-frag-06-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-frag-06-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-light-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-light-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-svg-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-svg-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-tref-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-tref-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-frag-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-frag-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-path-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-path-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-use-12-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-use-12-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-fonts-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-fonts-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-circle-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-circle-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-group-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-group-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-intro-06-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-intro-06-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-10-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-10-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-05-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-05-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-group-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-group-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-09-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-09-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-12-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-12-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-marker-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-marker-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-viewattr-03-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-viewattr-03-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-elem-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-elem-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-12-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-12-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-stroke-07-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-stroke-07-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-desc-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-desc-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-align-07-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-align-07-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-fill-04-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-fill-04-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-turb-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-turb-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test types-dom-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/types-dom-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test styling-pres-04-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/styling-pres-04-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-opacity-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-opacity-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-glyph-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-glyph-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-use-11-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-use-11-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-align-03-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-align-03-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-intro-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-intro-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-composite-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-composite-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-elem-05-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-elem-05-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test styling-css-08-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/styling-css-08-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test color-prof-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/color-prof-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-15-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-15-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-06-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-06-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-14-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-14-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-glyph-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-glyph-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-13-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-13-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test styling-pres-05-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/styling-pres-05-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-elem-07-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-elem-07-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-desc-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-desc-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-14-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-14-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-mask-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-mask-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-altglyph-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-altglyph-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-08-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-08-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-background-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-background-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-morph-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-morph-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test render-elems-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/render-elems-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-render-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-render-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-text-05-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-text-05-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-path-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-path-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-fill-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-fill-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-fonts-202-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-fonts-202-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-composite-03-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-composite-03-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-04-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-04-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-mask-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-mask-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-dom-04-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-dom-04-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-22-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-22-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-polygon-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-polygon-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-pattern-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-pattern-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-tspan-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-tspan-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-cond-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-cond-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-turb-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-turb-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-use-04-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-use-04-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-glyph-04-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-glyph-04-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-09-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-09-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-11-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-11-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-06-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-06-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-line-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-line-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-desc-04-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-desc-04-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-stroke-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-stroke-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-fonts-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-fonts-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-elem-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-elem-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-composite-04-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-composite-04-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-14-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-14-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-dom-16-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-dom-16-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-text-08-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-text-08-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-marker-properties-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-marker-properties-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-control-06-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-control-06-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-09-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-09-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-rect-05-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-rect-05-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-intro-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-intro-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-align-08-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-align-08-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test conform-viewers-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/conform-viewers-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-desc-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-desc-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-use-06-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-use-06-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test styling-pres-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/styling-pres-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-rect-04-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-rect-04-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-align-05-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-align-05-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-tile-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-tile-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-control-05-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-control-05-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test types-basic-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/types-basic-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-intro-07-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-intro-07-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-coord-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-coord-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-tselect-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-tselect-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-units-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-units-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-03-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-03-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-tref-03-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-tref-03-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-07-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-07-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-stroke-08-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-stroke-08-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-tspan-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-tspan-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-05-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-05-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test metadata-example-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/metadata-example-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-offset-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-offset-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-cond-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-cond-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-24-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-24-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-blend-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-blend-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-ws-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-ws-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test render-groups-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/render-groups-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-gauss-03-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-gauss-03-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-control-04-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-control-04-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-intro-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-intro-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-overview-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-overview-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-03-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-03-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-04-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-04-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test color-prop-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/color-prop-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-stroke-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-stroke-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test interact-pointer-04-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/interact-pointer-04-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-pattern-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-pattern-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test color-prop-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/color-prop-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-10-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-10-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test render-groups-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/render-groups-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-04-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-04-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-line-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-line-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-rect-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-rect-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-units-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-units-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-16-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-16-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-13-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-13-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-08-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-08-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-16-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-16-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-08-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-08-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test styling-css-09-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/styling-css-09-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-comptran-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-comptran-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-marker-04-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-marker-04-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-marker-03-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-marker-03-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-altglyph-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-altglyph-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-gauss-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-gauss-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-17-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-17-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test render-elems-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/render-elems-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-11-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-11-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-transformattr-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-transformattr-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-color-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-color-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-10-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-10-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-stroke-09-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-stroke-09-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test styling-pres-03-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/styling-pres-03-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-ellipse-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-ellipse-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-intro-09-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-intro-09-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-14-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-14-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test metadata-example-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/metadata-example-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-use-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-use-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-group-03-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-group-03-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-intro-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-intro-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test render-elems-08-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/render-elems-08-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test render-elems-07-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/render-elems-07-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test interact-pevents-10-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/interact-pevents-10-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-circle-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-circle-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-08-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-08-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-05-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-05-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-transformattr-05-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-transformattr-05-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-align-06-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-align-06-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-05-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-05-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-rect-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-rect-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test fonts-elem-06-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/fonts-elem-06-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test styling-css-07-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/styling-css-07-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-13-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-13-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-ellipse-03-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-ellipse-03-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-use-09-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-use-09-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-use-05-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-use-05-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-felem-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-felem-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-example-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-example-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-gauss-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-gauss-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-polyline-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-polyline-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test shapes-polyline-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/shapes-polyline-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-text-10-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-text-10-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test color-prop-04-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/color-prop-04-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-align-02-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-align-02-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-ws-02-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-ws-02-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-text-06-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-text-06-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-intro-05-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-intro-05-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-18-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-18-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-image-15-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-image-15-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-spacing-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-spacing-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-stroke-05-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-stroke-05-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-13-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-13-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-03-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-03-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-dom-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-dom-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-06-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-06-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-units-03-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-units-03-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test imp-path-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/imp-path-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test styling-css-06-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/styling-css-06-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-light-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-light-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-control-02-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-control-02-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-align-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-align-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-11-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-11-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-07-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-07-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-04-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-04-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test pservers-grad-06-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/pservers-grad-06-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test styling-inherit-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/styling-inherit-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-use-08-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-use-08-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test paths-data-01-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/paths-data-01-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test filters-color-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/filters-color-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-text-03-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-text-03-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test text-text-07-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/text-text-07-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test coords-trans-10-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/coords-trans-10-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-stroke-06-t.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-stroke-06-t.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test struct-symbol-01-b.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/struct-symbol-01-b.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test painting-marker-05-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/painting-marker-05-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

	it "Test masking-path-new-01-f.svg" do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C-1_1F2/harness/htmlObjectMini/modified/masking-path-new-01-f.html")
		browser.element(:id,"test").compare_hash(browser.element(:id,"ref")).should == true
	end

end
