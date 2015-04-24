require "operawatir/helper"

describe "SVG text selection" do
  ### Selection highlighting

  it "Text selection highlighting of text background" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/highlight-background.svg"

    # Text to be selected
    txt1 = browser.element(:css, "text:nth-of-type(4)")

    # Text element hidden in background
    txt2 = browser.element(:css, "text:nth-of-type(5)")
    unselected = txt2.visual_hash

    txt1.drag_and_drop_by(100, 0)
    txt2.visual_hash.should_not == unselected
  end

  it "Text selection highlighting of text foreground" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/highlight-foreground.svg"

    # Text to be selected
    txt1 = browser.element(:css, "text:nth-of-type(4)")

    # Text element hidden in foreground
    txt2 = browser.element(:css, "text:nth-of-type(5)")
    unselected = txt2.visual_hash

    txt1.drag_and_drop_by(100, 0)
    txt2.visual_hash.should_not == unselected
  end

  it "Text selection highlight over following element" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/highlight-overlap-following.svg"

    start = browser.element(:id, "c2")
    check = browser.element(:id, "a")

    unselected = check.visual_hash

    start.drag_and_drop_by(0, -100)
    check.visual_hash.should == unselected
  end

  it "Text selection highlight over following element (with 'geometricPrecision' text-rendering)" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/highlight-overlap-following-geometricprecision.svg"

    start = browser.element(:id, "c2")
    check = browser.element(:id, "a")

    unselected = check.visual_hash

    start.drag_and_drop_by(0, -100)
    check.visual_hash.should == unselected
  end

  it "Text selection highlight over preceding element" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/highlight-overlap-preceding.svg"

    start = browser.element(:id, "c2")
    check = browser.element(:id, "a")

    unselected = check.visual_hash

    start.drag_and_drop_by(0, -100)
    check.visual_hash.should == unselected
  end

  it "Text selection highlight over preceding element (with 'geometricPrecision' text-rendering)" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/highlight-overlap-preceding-geometricprecision.svg"

    start = browser.element(:id, "c2")
    check = browser.element(:id, "a")

    unselected = check.visual_hash

    start.drag_and_drop_by(0, -100)
    check.visual_hash.should == unselected
  end


  ### Text content elements

  it "Text selection with &lt;use&gt;" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/use-element-selection.svg"

    txt1 = browser.element(:id, "reuse")
    txt2 = browser.element(:id, "rereuse")
    txt3 = browser.element(:css, "use:nth-of-type(2)")

    # They should all look exactly the same, so just using one hash.
    unselected = txt1.visual_hash

    txt1.drag_and_drop_by(100, 0)
    txt1.visual_hash.should_not == unselected
    txt2.visual_hash.should == unselected
    txt3.visual_hash.should == unselected

    txt2.drag_and_drop_by(100, 0)
    txt1.visual_hash.should == unselected
    txt2.visual_hash.should_not == unselected
    txt3.visual_hash.should == unselected

    txt3.drag_and_drop_by(100, 0)
    txt1.visual_hash.should == unselected
    txt2.visual_hash.should == unselected
    txt3.visual_hash.should_not == unselected
  end


  ### Character boundaries

  it "Text selection across character boundary between two characters" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/across-character-boundary.svg"

    check = browser.element(:id, "test")
    unselected = check.visual_hash

    drag_from_by(80, 130, 100, 100)

    check.visual_hash.should == unselected
  end

  it "Text selection across character boundary between two characters of 90 degree rotated text" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/across-character-boundary-rotated-90.svg"

    check = browser.element(:id, "test")
    unselected = check.visual_hash

    drag_from_by(40, 150, 100, 100)

    check.visual_hash.should == unselected
  end

  it "Text selection across character boundary between two characters of 180 degree rotated text" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/across-character-boundary-rotated-180.svg"

    check = browser.element(:id, "test")
    unselected = check.visual_hash

    drag_from_by(80, 110, 100, 100)

    check.visual_hash.should == unselected
  end

  it "Text selection along character boundary" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/along-character-boundary.svg"

    check = browser.element(:id, "test")
    unselected = check.visual_hash

    drag_from_by(30, 90, 70, 170)

    check.visual_hash.should == unselected
  end

  it "Text selection along character boundary of a 90 degree rotated character" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/along-character-boundary-rotated-90.svg"

    check = browser.element(:id, "test")
    unselected = check.visual_hash

    drag_from_by(30, 90, 170, 70)

    check.visual_hash.should == unselected
  end

  it "Text selection along character boundary of a 180 degree rotated character" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/along-character-boundary-rotated-180.svg"

    check = browser.element(:id, "test")
    unselected = check.visual_hash

    drag_from_by(130, 90, 70, 170)

    check.visual_hash.should == unselected
  end

  it "Text selection between character boundaries" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/between-character-boundaries.svg"

    check = browser.element(:id, "test")

    drag_from_by(25, 245, 190, 30)

    selected = check.visual_hash
    
    browser.execute_script(
    <<-EOS
      var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      // The gradient fill in the original makes it use geometricPrecision:
      text.setAttribute('text-rendering', 'geometricPrecision');
      text.setAttribute('font-family', 'Ahem');
      text.setAttribute('font-size', 200);
      text.setAttribute('x', 240);
      text.setAttribute('y', 240);
      text.setAttribute('fill', 'green');
      text.setAttribute('id', 'ref');
      text.textContent = 'X';
      document.documentElement.appendChild(text);
    EOS
    )
    ref = browser.element(:id, "ref")
    ref.visual_hash.should == selected
  end

  it "Text selection between character boundaries of a 90 degree rotated character" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/between-character-boundaries-rotated-90.svg"

    check = browser.element(:id, "test")

    # Use full character cell to avoid CORE-40079. The Ahem 'p' character in the
    # testcase is only used to aid manual testing anyway.
    browser.execute_script("document.getElementById('test').textContent = 'X';")

    drag_from_by(25, 85, 30, 190)

    selected = check.visual_hash
    
    browser.execute_script(
    <<-EOS
      var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      text.setAttribute('font-family', 'Ahem');
      text.setAttribute('font-size', 200);
      text.setAttribute('x', 240);
      text.setAttribute('y', 240);
      text.setAttribute('fill', 'green');
      text.setAttribute('transform', 'rotate(90 340 180)');
      text.setAttribute('id', 'ref');
      text.textContent = 'X';
      document.documentElement.appendChild(text);
    EOS
    )
    ref = browser.element(:id, "ref")
    ref.visual_hash.should == selected
  end

  it "Text selection between character boundaries of a 180 degree rotated character" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/between-character-boundaries-rotated-180.svg"

    check = browser.element(:id, "test")

    # Use full character cell to avoid CORE-40079. The Ahem 'p' character in the
    # testcase is only used to aid manual testing anyway.
    browser.execute_script("document.getElementById('test').textContent = 'X';")

    drag_from_by(25, 85, 190, 30)

    selected = check.visual_hash
    
    browser.execute_script(
    <<-EOS
      var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      text.setAttribute('font-family', 'Ahem');
      text.setAttribute('font-size', 200);
      text.setAttribute('x', 240);
      text.setAttribute('y', 240);
      text.setAttribute('fill', 'green');
      text.setAttribute('transform', 'rotate(180 340 180)');
      text.setAttribute('id', 'ref');
      text.textContent = 'X';
      document.documentElement.appendChild(text);
    EOS
    )
    ref = browser.element(:id, "ref")
    ref.visual_hash.should == selected
  end


  ### Character boundaries (RTL)

  it "Text selection across character boundary between two RTL characters" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/rtl-across-character-boundary.svg"

    check = browser.element(:id, "test")
    unselected = check.visual_hash

    drag_from_by(80, 130, 100, 100)

    check.visual_hash.should == unselected
  end

  it "Text selection across character boundary between two RTL characters of 90 degree rotated text" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/rtl-across-character-boundary-rotated-90.svg"

    check = browser.element(:id, "test")
    unselected = check.visual_hash

    drag_from_by(60, 170, 100, 100)

    check.visual_hash.should == unselected
  end

  it "Text selection across character boundary between two RTL characters of 180 degree rotated text" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/rtl-across-character-boundary-rotated-180.svg"

    check = browser.element(:id, "test")
    unselected = check.visual_hash

    drag_from_by(80, 110, 100, 100)

    check.visual_hash.should == unselected
  end


  ### Multi-element selection

  it "Text selection across multiple &lt;text&gt; elements" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/multi-element-selection.svg"

    line1 = browser.element(:css, "text:nth-of-type(1)")
    line2 = browser.element(:css, "text:nth-of-type(2)")
    unselected = line2.visual_hash

    line1.drag_and_drop_by(100, 20)

    line2.visual_hash.should == unselected
  end

  it "Text selection highlight across multiple &lt;text&gt; elements" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/multi-element-selection-highlight.svg"

    line1 = browser.element(:id, "match")
    line2 = browser.element(:id, "testing")
    unselected = line2.visual_hash

    line1.drag_and_drop_by(100, 20)

    line2.visual_hash.should == unselected
  end

  it "Text selection across multiple lines within a single &lt;text&gt; element" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/multi-line-selection.svg"

    line1 = browser.element(:css, "tspan:nth-of-type(1)")
    line2 = browser.element(:css, "tspan:nth-of-type(2)")

    unselected1 = line1.visual_hash
    unselected2 = line2.visual_hash

    text = browser.element(:css, "text:nth-of-type(1)")
    text.drag_and_drop_by(100, 20)

    line1.visual_hash.should_not == unselected1
    line2.visual_hash.should_not == unselected2
  end


  ### Pointer events

  it "Text selection start below visible graphics element" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/selection-start.svg"

    check = browser.element(:css, "text:nth-of-type(2)")
    unselected = check.visual_hash

    drag_from_by(20, 60, 80, 60)

    check.visual_hash.should == unselected
  end

  it "Text selection end below visible graphics element" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/selection-end-obscured.svg"

    check = browser.element(:css, "text:nth-of-type(3)")
    unselected = check.visual_hash

    drag_from_by(20, 60, 80, 60)

    check.visual_hash.should_not == unselected
  end

  it "Text selection end outside original text element" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/selection-end-outside.svg"

    check = browser.element(:css, "text:nth-of-type(3)")
    unselected = check.visual_hash

    drag_from_by(20, 60, 130, 60)

    check.visual_hash.should_not == unselected
  end

  it "Canceling text selection with a pointer event" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/cancel-selection.svg"

    text = browser.element(:css, "text:nth-of-type(1)")
    unselected = text.visual_hash

    text.drag_and_drop_by(100,0)
    text.visual_hash.should_not == unselected

    text.click
    text.visual_hash.should == unselected
  end

  it "An SVG text element gains focus when it is selected" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/text-element-focus.svg"

    text = browser.element(:css, "text:nth-of-type(1)")
    text.click
    focused = text.visual_hash
    
    # Click outside text to remove focus again
    text.click(100, 100)

    # The text should've turned green
    browser.execute_script("document.getElementsByTagName('text')[0].setAttribute('fill', 'green')")
    text.visual_hash.should == focused
  end  
  
  it "An SVG tspan element gains focus when it is selected" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/tspan-element-focus.svg"

    text = browser.element(:css, "text:nth-of-type(1)")
    text.click
    focused = text.visual_hash
    
    # Click outside text to remove focus again
    text.click(100, 100)

    # The text should've turned green
    browser.execute_script("document.getElementsByTagName('text')[0].setAttribute('fill', 'green')")
    text.visual_hash.should == focused
  end

  it "Text selection start on element with canceled onmousedown event" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/pointer-events-cancel-onmousedown.svg"

    text = browser.element(:css, "text:nth-of-type(2)")
    unselected = text.visual_hash

    text.drag_and_drop_by(100, 0)
    text.visual_hash.should_not == unselected
  end

  it "Text selection on element with link" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/pointer-events-link.svg"

    text = browser.element(:css, "text:nth-of-type(1)")
    unselected = text.visual_hash

    text.drag_and_drop_by(100, 0)
    text.visual_hash.should_not == unselected
  end

  it "Text selection of element with 'pointer-events' set to 'none'" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/pointer-events-none.svg"

    text = browser.element(:css, "text:nth-of-type(1)")
    unselected = text.visual_hash

    text.drag_and_drop_by(100, 0)
    text.visual_hash.should == unselected
  end

  it "Text selection when changing text content onmousedown" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/pointer-events-text-change-onmousedown.svg"

    text = browser.element(:css, "text:nth-of-type(2)")
    unselected = text.visual_hash

    text.drag_and_drop_by(100, 0)
    text.visual_hash.should_not == unselected
  end

  it "Text selection on element with title" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/pointer-events-title.svg"

    text = browser.element(:css, "text:nth-of-type(1)")
    unselected = text.visual_hash

    text.drag_and_drop_by(100, 0)
    text.visual_hash.should_not == unselected
  end

  it "Text selection should cause events on other graphics elements to be ignored" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/pointer-events-rect-modal.svg"

    text = browser.element(:id, "start")
    result = browser.element(:id, "fail")
    empty = result.visual_hash

    text.drag_and_drop_by(150, 50)
    result.visual_hash.should == empty
  end

  it "Text selection should cause events on other text elements to be ignored" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/pointer-events-tspan-modal.svg"

    text = browser.element(:id, "start")
    result = browser.element(:id, "fail")
    empty = result.visual_hash

    text.drag_and_drop_by(150, 50)
    result.visual_hash.should == empty
  end


  ### Strange

  it "Text selection of text preceding an overflowing <textPath>" do
    browser.goto "http://t/core/standards/SVG/Testsuites/textselection/textpath-overflow.svg"

    text = browser.element(:css, "text:nth-of-type(1)")

    # CORE-39026 causes text selection to jump to word boundaries instead of
    # just increasing character by character. To avoid a false positive (when
    # the dragging ends up right on a word boundary) I get rid of all spaces.
    browser.execute_script(
    <<-EOS
      var text = document.getElementsByTagName('text')[0];
      text.textContent = text.textContent.replace(/ /g, '');
    EOS
    )

    text.drag_and_drop_by(100, 0)
    selected = text.visual_hash

    # Reinserting after the textPath stops it from being affected.
    browser.execute_script('document.documentElement.appendChild(text);')

    text.drag_and_drop_by(100, 0)
    text.visual_hash.should == selected
  end
end


# Drag from (x, y) by width and height. Inserts a hit target element to be able
# to specify the start coordinates on the drag operation.
def drag_from_by(x, y, width, height)
  hit_id = browser.execute_script(
  <<-EOS
    var hit_id = 'operawatir_hit_target';
    var hit_target = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    hit_target.setAttribute('x', #{x});
    hit_target.setAttribute('y', #{y});
    hit_target.setAttribute('width', 5);
    hit_target.setAttribute('height', 5);
    hit_target.setAttribute('id', hit_id);
    
    document.documentElement.insertBefore(hit_target, document.documentElement.firstChild);

    hit_id;
  EOS
  )
  target = browser.element(:id, hit_id)
  target.drag_and_drop_by(width, height)
end

def set_selection_style(color, background)
  browser.execute_script(
  <<-EOS
    var css = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    css.textContent = '::selection{background-color: #{background}; color: #{color}}';
    document.documentElement.appendChild(css);
  EOS
  )
end

# Create a rect with <color> fill behind first element matching CSS <selector>.
def create_bounding_box_background(selector, color)
  browser.execute_script(
  <<-EOS
    var text = document.querySelectorAll('#{selector}')[0];
    var bbox = text.getBBox();
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', bbox.x);
    rect.setAttribute('y', bbox.y);
    rect.setAttribute('width', bbox.width);
    rect.setAttribute('height', bbox.height);
    rect.setAttribute('fill', '#{color}');
    text.parentNode.insertBefore(rect, text);
  EOS
  )
end

