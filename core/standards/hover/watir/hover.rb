require "operawatir/helper"

# We should make those tests reference ones.

describe "Pointer2style" do
  it "Pointer and adjacent sibling selectors" do
    browser.goto files+"reference/ref-adjacent-sibling.1.xhtml"
    ref_hash_1 = browser.visual_hash
    
    browser.goto files+"reference/ref-adjacent-sibling.2.xhtml"
    ref_hash_2 = browser.visual_hash
    
    browser.goto files+"adjacent-sibling.xhtml"
    browser.visual_hash.should == ref_hash_1
    browser.div(:tag_name, "div").fire_event "onMouseOver"
    browser.visual_hash.should == ref_hash_2
  end
  
  it "Pointer over block element" do
    browser.goto files+"reference/ref-block.1.xhtml"
    ref_hash_1 = browser.visual_hash
    
    browser.goto files+"reference/ref-block.2.xhtml"
    ref_hash_2 = browser.visual_hash
    
    browser.goto files+"block.xhtml"
    browser.visual_hash.should == ref_hash_1
    browser.span(:tag_name, "span").fire_event "onMouseOver"
    browser.visual_hash.should == ref_hash_2
  end
  
  it "Pointer and descendant selectors" do
    browser.goto files+"reference/ref-descendant.1.xhtml"
    ref_hash_1 = browser.visual_hash
    
    browser.goto files+"reference/ref-descendant.2.xhtml"
    ref_hash_2 = browser.visual_hash
    
    browser.goto files+"descendant.xhtml"
    browser.visual_hash.should == ref_hash_1
    browser.div(:tag_name, "div").fire_event "onMouseOver"
    browser.visual_hash.should == ref_hash_2
  end
  
  it "Pointer and following sibling selectors" do
    browser.goto files+"reference/ref-following-sibling.1.xhtml"
    ref_hash_1 = browser.visual_hash
    
    browser.goto files+"reference/ref-following-sibling.2.xhtml"
    ref_hash_2 = browser.visual_hash
    
    browser.goto files+"following-sibling.xhtml"
    browser.visual_hash.should == ref_hash_1
    browser.div(:tag_name, "div").fire_event("onMouseOver")
    browser.visual_hash.should == ref_hash_2
  end
  
  it "Pointer over inline-block element" do
    browser.goto files+"reference/ref-inline-block.1.xhtml"
    ref_hash_1 = browser.visual_hash
    
    browser.goto files+"reference/ref-inline-block.2.xhtml"
    ref_hash_2 = browser.visual_hash
    
    browser.goto files+"inline-block.xhtml"
    browser.visual_hash.should == ref_hash_1
    browser.span(:tag_name, "span").fire_event("onMouseOver")
    browser.visual_hash.should == ref_hash_2
  end
  
  it "Pointer over inline-table element" do
    browser.goto files+"reference/ref-inline-table.1.xhtml"
    ref_hash_1 = browser.visual_hash
    
    browser.goto files+"reference/ref-inline-table.2.xhtml"
    ref_hash_2 = browser.visual_hash
    
    browser.goto files+"inline-table.xhtml"
    browser.visual_hash.should == ref_hash_1
    browser.span(:tag_name, "span").fire_event("onMouseOver")
    browser.visual_hash.should == ref_hash_2
  end
  
  it "Pointer over inline element" do
    browser.goto files+"reference/ref-inline.1.xhtml"
    ref_hash_1 = browser.visual_hash
    
    browser.goto files+"reference/ref-inline.2.xhtml"
    ref_hash_2 = browser.visual_hash
    
    browser.goto files+"inline.xhtml"
    browser.visual_hash.should == ref_hash_1
    browser.span(:tag_name, "span").fire_event("onMouseOver")
    browser.visual_hash.should == ref_hash_2
  end
  
  it "Pointer over list-item element" do
    browser.goto files+"reference/ref-list-item.1.xhtml"
    ref_hash_1 = browser.visual_hash
    
    browser.goto files+"reference/ref-list-item.2.xhtml"
    ref_hash_2 = browser.visual_hash
    
    browser.goto files+"list-item.xhtml"
    browser.visual_hash.should == ref_hash_1
    browser.span(:tag_name, "span").fire_event("onMouseOver")
    browser.visual_hash.should == ref_hash_2
  end
  
  it "Pointer over run-in element" do
    browser.goto files+"reference/ref-run-in.1.xhtml"
    ref_hash_1 = browser.visual_hash
    
    browser.goto files+"reference/ref-run-in.2.xhtml"
    ref_hash_2 = browser.visual_hash
    
    browser.goto files+"run-in.xhtml"
    browser.visual_hash.should == ref_hash_1
    browser.span(:tag_name, "span").fire_event("onMouseOver")
    browser.visual_hash.should == ref_hash_2
  end
  
  it "Pointer and sibling selectors" do
    browser.goto files+"reference/ref-sibling.1.xhtml"
    ref_hash_1 = browser.visual_hash
    
    browser.goto files+"reference/ref-sibling.2.xhtml"
    ref_hash_2 = browser.visual_hash
    
    browser.goto files+"sibling.xhtml"
    browser.visual_hash.should == ref_hash_1
    browser.div(:tag_name, "div").fire_event("onMouseOver")
    browser.visual_hash.should == ref_hash_2
  end
  
  it "Pointer over table-cell element" do
    browser.goto files+"reference/ref-table-cell.1.xhtml"
    ref_hash_1 = browser.visual_hash
    
    browser.goto files+"reference/ref-table-cell.2.xhtml"
    ref_hash_2 = browser.visual_hash
    
    
    browser.goto files+"table-cell.xhtml"
    browser.visual_hash.should == ref_hash_1
    browser.span(:tag_name, "span").fire_event("onMouseOver")
    browser.visual_hash.should == ref_hash_2
  end
  
  it "Pointer over table element" do
    browser.goto files+"reference/ref-table.1.xhtml"
    ref_hash_1 = browser.visual_hash
    
    browser.goto files+"reference/ref-table.2.xhtml"
    ref_hash_2 = browser.visual_hash
    
    browser.goto files+"table.xhtml"
    browser.visual_hash.should == ref_hash_1
    browser.span(:tag_name, "span").fire_event("onMouseOver")
    browser.visual_hash.should == ref_hash_2
  end
end
