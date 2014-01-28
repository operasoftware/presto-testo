require "operawatir/helper"

describe "CSS Gradients 2" do

  # Base URL for all the tests.
  $prefix = "http://t/core/standards/css3/gradients/"
  # Output directory for saved screenshots.
  $output_dir = "/home/rchlodnicki/Downloads/watir_fails/"

  # Save screenshot of failing tests.
  $debug = false
  # Generate diff of failing screenshots. Requires compare from ImageMagick.
  $debug_diff = false

  def test(dir, name)
    browser.goto($prefix + dir + '/' + name + '.html')

    element1 = browser.element(:css, ".test")
    element2 = browser.element(:css, ".ref")

    passed = element1.visual_hash == element2.visual_hash

    if passed == false && $debug == true
      save_screenshots(dir + '_' + name, element1, element2)
    end

    return passed
  end

  def test_two_ref(dir, name)
    browser.goto($prefix + dir + '/' + name + '.html')

    el = browser.element(:css, ".test")
    ref1 = browser.element(:css, ".ref1")
    ref2 = browser.element(:css, ".ref2")

    passed = el.visual_hash == ref1.visual_hash || el.visual_hash == ref2.visual_hash

    if passed == false and $debug == true
      save_screenshots(dir + '_1_' + name, element1, element2)
      save_screenshots(dir + '_2_' + name, element1, element2)
    end

    return passed
  end

  def save_screenshots(test_name, element1, element2)
    output_file = $output_dir + test_name

    element1.screenshot(output_file + '_test.png', 2)
    element2.screenshot(output_file + '_ref.png', 2)

    if $debug_diff
      system('compare "' + output_file + '_test.png" "' + output_file + '_ref.png" "' + output_file + '_diff.png"')
    end
  end

  # parsing-gradient-radial

  it "parsing-gradient-radial, two color stops" do
    test("parsing-gradient-radial", "two-colors").should == true
  end

  it "parsing-gradient-radial, three color stops" do
    test("parsing-gradient-radial", "three-colors").should == true
  end

  it "parsing-gradient-radial, circle shape" do
    test("parsing-gradient-radial", "circle").should == true
  end

  it "parsing-gradient-radial, ellipse shape" do
    test("parsing-gradient-radial", "ellipse").should == true
  end

  it "parsing-gradient-radial, circle shape, closest-side position" do
    test("parsing-gradient-radial", "circle-shape-and-size-1").should == true
  end

  it "parsing-gradient-radial, circle shape, closest-corner position" do
    test("parsing-gradient-radial", "circle-shape-and-size-2").should == true
  end

  it "parsing-gradient-radial, circle shape, farthest-side position" do
    test("parsing-gradient-radial", "circle-shape-and-size-3").should == true
  end

  it "parsing-gradient-radial, circle shape, farthest-corner position" do
    test("parsing-gradient-radial", "circle-shape-and-size-4").should == true
  end

  it "parsing-gradient-radial, circle shape, contain position" do
    test("parsing-gradient-radial", "circle-shape-and-size-5").should == true
  end

  it "parsing-gradient-radial, circle shape, cover position" do
    test("parsing-gradient-radial", "circle-shape-and-size-6").should == true
  end

  it "parsing-gradient-radial, ellipse shape, closest-side position" do
    test("parsing-gradient-radial", "ellipse-shape-and-size-1").should == true
  end

  it "parsing-gradient-radial, ellipse shape, closest-corner position" do
    test("parsing-gradient-radial", "ellipse-shape-and-size-2").should == true
  end

  it "parsing-gradient-radial, ellipse shape, farthest-side position" do
    test("parsing-gradient-radial", "ellipse-shape-and-size-3").should == true
  end

  it "parsing-gradient-radial, ellipse shape, farthest-corner position" do
    test("parsing-gradient-radial", "ellipse-shape-and-size-4").should == true
  end

  it "parsing-gradient-radial, ellipse shape, contain position" do
    test("parsing-gradient-radial", "ellipse-shape-and-size-5").should == true
  end

  it "parsing-gradient-radial, ellipse shape, cover position" do
    test("parsing-gradient-radial", "ellipse-shape-and-size-6").should == true
  end

  it "parsing-gradient-radial, interpreting explicit length as position and not size" do
    test("parsing-gradient-radial", "interpret-explicit-length-as-position").should == true
  end

  it "parsing-gradient-radial, specified size in pixels" do
    test("parsing-gradient-radial", "pixel-size-1").should == true
  end

  it "parsing-gradient-radial, specified size in percentages" do
    test("parsing-gradient-radial", "percentage-size-1").should == true
  end

  it "parsing-gradient-radial, specified size in percentages and pixels" do
    test("parsing-gradient-radial", "size-mixed-1").should == true
  end

  it "parsing-gradient-radial, degenerate shape (left, closest-side)" do
    test("parsing-gradient-radial", "implicit-0-size-radius-1").should == true
  end

  it "parsing-gradient-radial, degenerate shape (top left, closest-corner)" do
    test("parsing-gradient-radial", "implicit-0-size-radius-2").should == true
  end

  it "parsing-gradient-radial, degenerate shape (right, ellipse closest-corner)" do
    test("parsing-gradient-radial", "implicit-0-size-radius-3").should == true
  end

  it "parsing-gradient-radial, degenerate shape (top, closest-side, blue, orange 40px)" do
    test("parsing-gradient-radial", "implicit-0-size-radius-5").should == true
  end

  it "parsing-gradient-radial, degenerate shape (bottom, closest-side, blue, orange 40px)" do
    test("parsing-gradient-radial", "implicit-0-size-radius-6").should == true
  end

  it "parsing-gradient-radial, degenerate shape (0 length width and height)" do
    test("parsing-gradient-radial", "implicit-0-size-radius-7").should == true
  end

  it "parsing-gradient-radial, stop before 0 and between 0-100% (pixels)" do
    test("parsing-gradient-radial", "stop-before-0-1").should == true
  end

  it "parsing-gradient-radial, stop before 0 and between 0-100% (percentages)" do
    test("parsing-gradient-radial", "stop-before-0-2").should == true
  end

  it "parsing-gradient-radial, two stops before 0 and between 0-100% (pixels)" do
    test("parsing-gradient-radial", "stop-before-0-3").should == true
  end

  it "parsing-gradient-radial, two stops before 0 and between 0-100% (percentages)" do
    test("parsing-gradient-radial", "stop-before-0-4").should == true
  end

  it "parsing-gradient-radial, two stops before 0" do
    test("parsing-gradient-radial", "stop-before-0-5").should == true
  end

  it "parsing-gradient-radial, stop before 0 followed by stop between 0-100%, followed by stop after 100%" do
    test("parsing-gradient-radial", "stop-before-0-and-after-100").should == true
  end

  it "parsing-gradient-radial, stop after 0 followed by stop before 0" do
    test("parsing-gradient-radial", "stop-after-0-before-0").should == true
  end

  it "parsing-gradient-radial, stop after 0 followed by stop before 0, followed by stops after 0" do
    test("parsing-gradient-radial", "stop-after-0-before-0-after-0").should == true
  end

  it "parsing-gradient-radial, stop after 0 followed by stop after 100% (pixels)" do
    test("parsing-gradient-radial", "stop-after-100-1").should == true
  end

  it "parsing-gradient-radial, stop after 0 followed by stop after 100% (percentages)" do
    test("parsing-gradient-radial", "stop-after-100-2").should == true
  end

  it "parsing-gradient-radial, stop after 0 followed by two stops after 100%" do
    test("parsing-gradient-radial", "stop-after-100-3").should == true
  end

  it "parsing-gradient-radial, stop after 0 followed by stop after 100%, followed by stop without explicit position" do
    test("parsing-gradient-radial", "stop-after-100-4").should == true
  end

  it "parsing-gradient-radial, position (right center)" do
    test("parsing-gradient-radial", "pos-1").should == true
  end

  it "parsing-gradient-radial, position (center left)" do
    test("parsing-gradient-radial", "pos-2").should == true
  end

  it "parsing-gradient-radial, position (right 50px bottom 10px)" do
    test("parsing-gradient-radial", "pos-3").should == true
  end

  it "parsing-gradient-radial, position and shape (right center, circle)" do
    test("parsing-gradient-radial", "pos-shape-1").should == true
  end

  it "parsing-gradient-radial, position and shape (right center, ellipse)" do
    test("parsing-gradient-radial", "pos-shape-2").should == true
  end

  it "parsing-gradient-radial, position and size (bottom left, farthest-side)" do
    test("parsing-gradient-radial", "pos-size-1").should == true
  end

  it "parsing-gradient-radial, position and size (20px 30px, 20px 30px)" do
    test("parsing-gradient-radial", "pos-size-2").should == true
  end

  it "parsing-gradient-radial, position and size (20px 30px, contain)" do
    test("parsing-gradient-radial", "pos-size-3").should == true
  end

  it "parsing-gradient-radial, position and size (left, closest-side)" do
    test("parsing-gradient-radial", "pos-size-4").should == true
  end

  it "parsing-gradient-radial, position and size (left, closest-corner)" do
    test("parsing-gradient-radial", "pos-size-5").should == true
  end

  it "parsing-gradient-radial, position and size (left, farthest-corner)" do
    test("parsing-gradient-radial", "pos-size-6").should == true
  end

  it "parsing-gradient-radial, position and size (left, cover)" do
    test("parsing-gradient-radial", "pos-size-7").should == true
  end

  it "parsing-gradient-radial, position, shape and size (right center, ellipse closest-corner)" do
    test("parsing-gradient-radial", "pos-shape-size-1").should == true
  end

  it "parsing-gradient-radial, position, shape and size (right center, circle closest-corner)" do
    test("parsing-gradient-radial", "pos-shape-size-2").should == true
  end

  it "parsing-gradient-radial, position, shape and size (right bottom, ellipse closest-corner)" do
    test("parsing-gradient-radial", "pos-shape-size-3").should == true
  end

  it "parsing-gradient-radial, position, shape and size (20px 30px, circle contain)" do
    test("parsing-gradient-radial", "pos-shape-size-4").should == true
  end

  it "parsing-gradient-radial, shape and size (in inverted order)" do
    test("parsing-gradient-radial", "pos-shape-size-5").should == true
  end

  it "parsing-gradient-radial, multiple gradients" do
    test("parsing-gradient-radial", "multiple-gradients-1").should == true
  end

  it "parsing-gradient-radial, non-degenerate (1px width)" do
    test("parsing-gradient-radial", "non-degenerate-1px-width").should == true
  end

  # border-image

  it "border-image, radial gradient (currentColor)" do
    test("border-image", "current-color").should == true
  end

  # repeating-radial

  it "repeating-radial, stops at 0 (implicit), 50%" do
    test("repeating-radial", "repeating-0-50").should == true
  end

  it "repeating-radial, stops at 0, 0, 50%" do
    test("repeating-radial", "repeating-0-0-50").should == true
  end

  it "repeating-radial, stops at 0 (implicit), 5px, 5px, 10px" do
    test("repeating-radial", "repeating-0-5-5-10").should == true
  end

  it "repeating-radial, stops at -100%, -50%" do
    test("repeating-radial", "repeating-before-0-only").should == true
  end

  it "repeating-radial, stops at 90%, 150%" do
    test("repeating-radial", "repeating-after-100").should == true
  end

  # repeating-near-zero

  it "repeating-near-zero, blue 0, red 0" do
    test("repeating-near-zero", "2s-blue0-red0").should == true
  end

  it "repeating-near-zero, blue 0, lime, red 0" do
    test("repeating-near-zero", "3s-blue0-lime-red0").should == true
  end

  it "repeating-near-zero, red 0, lime, blue 0" do
    test("repeating-near-zero", "3s-red0-lime-blue0").should == true
  end

  it "repeating-near-zero, blue 0, lime, blue 0" do
    test("repeating-near-zero", "3s-blue0-lime-blue0").should == true
  end

  it "repeating-near-zero, blue 0, blue, blue 0" do
    test("repeating-near-zero", "3s-blue0-blue-blue0").should == true
  end

  it "repeating-near-zero, aquamarine 0, beige, darkorange 0" do
    test("repeating-near-zero", "3s-aquamarine0-beige-darkorange0").should == true
  end

  it "repeating-near-zero, aquamarine 0, beige, darkorange, cornflowerblue 0" do
    test_two_ref("repeating-near-zero", "4s-aquamarine0-beige-darkorange-cornflowerblue0").should == true
  end

  it "repeating-near-zero, crimson 0, darkseagreen, lemonchiffon, limegreen 0" do
    test("repeating-near-zero", "4s-crimson0-darkseagreen-lemonchiffon-limegreen0").should == true
  end

  it "repeating-near-zero, blue 0, blue, blue, blue, blue, blue, blue, blue, blue, blue, blue, blue, blue, blue, blue, blue, blue 0" do
    test("repeating-near-zero", "17s-blue0-blue-blue-blue-blue-blue-blue-blue-blue-blue-blue-blue-blue-blue-blue-blue-blue0").should == true
  end

  it "repeating-near-zero, red 0, lime, blue, red, lime, blue, red, lime, blue, red, lime, blue, red, lime, blue, red, lime 0" do
    test("repeating-near-zero", "17s-red0-lime-blue-red-lime-blue-red-lime-blue-red-lime-blue-red-lime-blue-red-lime0").should == true
  end

  it "repeating-near-zero, aquamarine 0, beige, darkorange, cornflowerblue, red, lime, blue, lime, blue, blue, lime, yellow, blue, blue, aqua, blue, red 0" do
    test("repeating-near-zero", "17s-aquamarine0-beige-darkorange-cornflowerblue-red-lime-blue-lime-blue-blue-lime-yellow-blue-blue-aqua-blue-red0").should == true
  end

  it "repeating-near-zero, lime 0, blue, transparent 0" do
    test("repeating-near-zero", "premul-lime0-blue-transparent0").should == true
  end

  it "repeating-near-zero, lime 0, transparent, transparent 0" do
    test("repeating-near-zero", "premul-lime0-transparent-transparent0").should == true
  end

  it "repeating-near-zero, transparent 0, transparent 0" do
    test("repeating-near-zero", "premul-transparent0-transparent0").should == true
  end

  it "repeating-near-zero, blue 0, transparent 0" do
    test_two_ref("repeating-near-zero", "premul-blue0-transparent0").should == true
  end

  it "repeating-near-zero, blue 0, rgba(255, 0, 0, 0) 0" do
    test_two_ref("repeating-near-zero", "premul-blue0-rgba(255, 0, 0, 0)0").should == true
  end

  it "repeating-near-zero, lime 0, transparent, blue 0" do
    test_two_ref("repeating-near-zero", "premul-lime0-transparent-blue0").should == true
  end

  it "repeating-near-zero, rgba(0, 0, 255, 0.52) 0, rgba(0, 255, 0, 0.4), transparent 0" do
    test("repeating-near-zero", "premul-semi-alpha-transparent-1").should == true
  end

  it "repeating-near-zero, rgba(25, 25, 112, 0.52) 0, rgba(122, 37, 91, 0.4), transparent 0" do
    test("repeating-near-zero", "premul-semi-alpha-transparent-2").should == true
  end

  # parsing-gradient-to-side-or-corner

  it "parsing-gradient-to-side-or-corner, to left" do
    test("parsing-gradient-to-side-or-corner", "to-left").should == true
  end

  it "parsing-gradient-to-side-or-corner, to top" do
    test("parsing-gradient-to-side-or-corner", "to-top").should == true
  end

  it "parsing-gradient-to-side-or-corner, to right" do
    test("parsing-gradient-to-side-or-corner", "to-right").should == true
  end

  it "parsing-gradient-to-side-or-corner, to bottom" do
    test("parsing-gradient-to-side-or-corner", "to-bottom").should == true
  end

  it "parsing-gradient-to-side-or-corner, to top left" do
    test("parsing-gradient-to-side-or-corner", "to-top-left").should == true
  end

  it "parsing-gradient-to-side-or-corner, to left top" do
    test("parsing-gradient-to-side-or-corner", "to-left-top").should == true
  end

  it "parsing-gradient-to-side-or-corner, to bottom left" do
    test("parsing-gradient-to-side-or-corner", "to-bottom-left").should == true
  end

  it "parsing-gradient-to-side-or-corner, to left bottom" do
    test("parsing-gradient-to-side-or-corner", "to-left-bottom").should == true
  end

  it "parsing-gradient-to-side-or-corner, to right bottom" do
    test("parsing-gradient-to-side-or-corner", "to-right-bottom").should == true
  end

  it "parsing-gradient-to-side-or-corner, to bottom right" do
    test("parsing-gradient-to-side-or-corner", "to-bottom-right").should == true
  end

  it "parsing-gradient-to-side-or-corner, to top right" do
    test("parsing-gradient-to-side-or-corner", "to-top-right").should == true
  end

  it "parsing-gradient-to-side-or-corner, to right top" do
    test("parsing-gradient-to-side-or-corner", "to-right-top").should == true
  end

end