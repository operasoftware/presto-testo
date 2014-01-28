require "operawatir/helper"

describe "CSS Gradients" do

  # Base URL for all the tests.
  $prefix = "http://t/core/standards/css3/gradients/"
  # Output directory for saved screenshots.
  $output_dir = "/home/user/watir_debug/"

  # Save screenshot of failing tests.
  $debug = false
  # Generate diff of failing screenshots. Requires compare from ImageMagick.
  $debug_diff = false

  def test(dir, name)
    browser.goto($prefix + dir + '/' + name + '.html')

    element1 = browser.element(:css, ".test")
    element2 = browser.element(:css, ".ref")
    passed = element1.visual_hash == element2.visual_hash

    if passed == false and $debug == true
      save_screenshots(dir + '_' + name, element1, element2)
    end

    passed.should == true
  end

  def save_screenshots(test_name, element1, element2)
    output_file = $output_dir + test_name

    element1.screenshot(output_file + '_test.png', 2)
    element2.screenshot(output_file + '_ref.png', 2)

    if $debug_diff
      system('compare "' + output_file + '_test.png" "' + output_file + '_ref.png" "' + output_file + '_diff.png"')
    end
  end

  # html-elements

  it "html-elements, html element" do
    test("html-elements", "html_element")
  end

  it "html-elements, body element" do
    test("html-elements", "body_element")
  end

  it "html-elements, table element" do
    test("html-elements", "table_element")
  end

  it "html-elements, table row" do
    test("html-elements", "table_row")
  end

  it "html-elements, table row with spacing" do
    test("html-elements", "table_row_w_spacing")
  end

  it "html-elements, table cell" do
    test("html-elements", "table_cell")
  end

  it "html-elements, list marker" do
    test("html-elements", "list_marker")
  end

  it "html-elements, inline element" do
    test("html-elements", "inline_element")
  end

  it "html-elements, inline element with linebreaks" do
    test("html-elements", "inline_element_w_linebreaks")
  end

  it "html-elements, block element" do
    test("html-elements", "block_element")
  end

  it "html-elements, inline-block element" do
    test("html-elements", "inline-block_element")
  end

  it "html-elements, image element" do
    test("html-elements", "image_element")
  end

  # form-elements

  it "form-elements, textarea" do
    test("form-elements", "textarea")
  end

  it "form-elements, button" do
    test("form-elements", "button")
  end

  it "form-elements, select" do
    test("form-elements", "select")
  end

  it "form-elements, select (size 2)" do
    test("form-elements", "select_size_2")
  end

  it "form-elements, keygen" do
    test("form-elements", "keygen")
  end

  it "form-elements, input[type=text]" do
    test("form-elements", "input_type_text")
  end

  it "form-elements, input[type=file]" do
    test("form-elements", "input_type_file")
  end

  it "form-elements, input[type=radio]" do
    test("form-elements", "input_type_radio")
  end

  it "form-elements, input[type=checkbox]" do
    test("form-elements", "input_type_checkbox")
  end

  it "form-elements, input[type=color]" do
    test("form-elements", "input_type_color")
  end

  it "form-elements, progress" do
    test("form-elements", "input_type_progress")
  end

  it "form-elements, meter" do
    test("form-elements", "input_type_meter")
  end

  it "form-elements, input[type=range]" do
    test("form-elements", "input_type_range")
  end

  it "form-elements, input[type=number]" do
    test("form-elements", "input_type_number")
  end

  it "form-elements, input[type=date]" do
    test("form-elements", "input_type_date")
  end

  it "form-elements, input[type=time]" do
    test("form-elements", "input_type_time")
  end

  it "form-elements, input[type=datetime]" do
    test("form-elements", "input_type_datetime")
  end

  it "form-elements, input[type=email]" do
    test("form-elements", "input_type_email")
  end

  it "form-elements, input[type=url]" do
    test("form-elements", "input_type_url")
  end

  it "form-elements, input[type=tel]" do
    test("form-elements", "input_type_tel")
  end

  it "form-elements, input[type=search]" do
    test("form-elements", "input_type_search")
  end

  # background-properties-border

  it "background-properties-border, background-attachment: fixed" do
    test("background-properties-border", "background_attachment_fixed")
  end

  it "background-properties-border, background-attachment: local" do
    test("background-properties-border", "background_attachment_local")
  end

  it "background-properties-border, plain gradient - default values" do
    test("background-properties-border", "background_default_values")
  end

  it "background-properties-border, background-repeat: no-repeat, position 50% 50%, size 50%" do
    test("background-properties-border", "background_no_repeat_position_50_0_size_50_50")
  end

  it "background-properties-border, background-repeat: repeat-y, position center center, size 50%" do
    test("background-properties-border", "background_repeat_y_position_center_center_size")
  end

  it "background-properties-border, background-repeat: no-repeat, size w:100% h:200%" do
    test("background-properties-border", "background_no_repeat_size_w_100_h_200")
  end

  it "background-properties-border, background-repeat: repeat, size w:1px h:20px" do
    test("background-properties-border", "background_repeat_size_w_1px_h_20px")
  end

  it "background-properties-border, background-size: contain" do
    test("background-properties-border", "background_size_contain")
  end

  it "background-properties-border, background-size: cover" do
    test("background-properties-border", "background_size_cover")
  end

  it "background-properties-border, background-size: 50%" do
    test("background-properties-border", "background_size_50")
  end

  it "background-properties-border, background-size: 1px 200px" do
    test("background-properties-border", "background_size_1px_200px")
  end

  it "background-properties-border, background-size: 100% 100%" do
    test("background-properties-border", "background_size_100_100")
  end

  it "background-properties-border, background-size: 50px 50px with angle gradient" do
    test("background-properties-border", "background_size_50px_50px_with_angle_gradient")
  end

  it "background-properties-border, background-size: 100px 100px with multiple positioned gradients" do
    test("background-properties-border", "background_size_100px_100px_multiple_positioned")
  end

  it "background-properties-border, background-origin: border-box" do
    test("background-properties-border", "background_origin_border_box")
  end

  it "background-properties-border, background-origin: padding-box" do
    test("background-properties-border", "background_origin_padding_box")
  end

  it "background-properties-border, background-origin: content-box" do
    test("background-properties-border", "background_origin_content_box")
  end

  it "background-properties-border, background-repeat: repeat-x" do
    test("background-properties-border", "background_repeat_repeat_x")
  end

  it "background-properties-border, background-repeat: repeat-y" do
    test("background-properties-border", "background_repeat_repeat_y")
  end

  it "background-properties-border, background-repeat: space, background-size: 45%" do
    test("background-properties-border", "background_repeat_space_background_size_45")
  end

  it "background-properties-border, background-repeat: space, background-size: 49%" do
    test("background-properties-border", "background_repeat_space_background_size_49")
  end

  it "background-properties-border, background-repeat: space, background-size: 60px 60px" do
    test("background-properties-border", "background_repeat_space_background_size_60px_60px")
  end

  it "background-properties-border, background-repeat: round round, background-size: 150px auto" do
    test("background-properties-border", "background_repeat_round_round_background_size")
  end

  it "background-properties-border, background-repeat: round round, background-size: 60px 60px" do
    test("background-properties-border", "background_repeat_round_round_background_size_2")
  end

  it "background-properties-border, background-repeat: no-repeat round, background-size: 45%" do
    test("background-properties-border", "background_repeat_no_repeat_round_background_size")
  end

  it "background-properties-border, background-repeat: no-repeat, background-size: auto 60px" do
    test("background-properties-border", "background_repeat_no-repeat_background_size_auto_60px")
  end

  it "background-properties-border, background-repeat: no-repeat, background-size: 60px auto" do
    test("background-properties-border", "background_repeat_no-repeat_background_size_60px_auto")
  end

  it "background-properties-border, background-repeat: no-repeat round, background-size: auto 60px" do
    test("background-properties-border", "background_repeat_no-repeat_round_background_size_auto_60px")
  end

  it "background-properties-border, background-repeat: round no-repeat, background-size: 60px auto" do
    test("background-properties-border", "background_repeat_round_no-repeat_background_size_60px_auto")
  end

  it "background-properties-border, background-position: center, background-repeat: no-repeat, background-size: 55%" do
    test("background-properties-border", "background_position_center_background_repeat_no")
  end

  it "background-properties-border, background-position: bottom right, background-repeat: no-repeat, background-origin: border-box, background-size: 55%" do
    test("background-properties-border", "background_position_bottom_right_background_repeat")
  end

  it "background-properties-border, background-clip: padding-box" do
    test("background-properties-border", "background_clip_padding_box")
  end

  it "background-properties-border, background-clip: content-box" do
    test("background-properties-border", "background_clip_content_box")
  end

  it "background-properties-border, background-clip: content-box with padding" do
    test("background-properties-border", "background_clip_content_box_with_padding")
  end

  it "background-properties-border, background-position: bottom right, background-repeat: no-repeat, background-origin: border-box, background-size: 55%, background-clip padding-box" do
    test("background-properties-border", "background_position_bottom_right_background_repeat_no")
  end

  it "background-properties-border, background-size with 30000px tall element" do
    test("background-properties-border", "background_size_with_30000px_tall_element")
  end

  it "background-properties-border, background-size 25px 100px" do
    test("background-properties-border", "background_size_25px_100px")
  end

  it "background-properties-border, overdraw and border" do
    test("background-properties-border", "overdraw_and_border_on_block_element")
  end

  # background-properties

  it "background-properties, background-attachment: fixed" do
    test("background-properties", "background_attachment_fixed")
  end

  it "background-properties, background-attachment: local" do
    test("background-properties", "background_attachment_local")
  end

  it "background-properties, plain gradient - default values" do
    test("background-properties", "background_default_values")
  end

  it "background-properties, background-repeat: no-repeat, position 50% 50%, size 50%" do
    test("background-properties", "background_no_repeat_position_50_0_size_50_50")
  end

  it "background-properties, background-repeat: repeat-y, position center center, size 50%" do
    test("background-properties", "background_repeat_y_position_center_center_size")
  end

  it "background-properties, background-repeat: no-repeat, size w:100% h:200%" do
    test("background-properties", "background_no_repeat_size_w_100_h_200")
  end

  it "background-properties, background-repeat: repeat, size w:1px h:20px" do
    test("background-properties", "background_repeat_size_w_1px_h_20px")
  end

  it "background-properties, background-size: contain" do
    test("background-properties", "background_size_contain")
  end

  it "background-properties, background-size: cover" do
    test("background-properties", "background_size_cover")
  end

  it "background-properties, background-size: 50%" do
    test("background-properties", "background_size_50")
  end

  it "background-properties, background-size: 1px 200px" do
    test("background-properties", "background_size_1px_200px")
  end

  it "background-properties, background-size: 100% 100%" do
    test("background-properties", "background_size_100_100")
  end

  it "background-properties, background-size: 50px 50px with angle gradient" do
    test("background-properties", "background_size_50px_50px_with_angle_gradient")
  end

  it "background-properties, background-size: 100px 100px with multiple positioned gradients" do
    test("background-properties", "background_size_100px_100px_multiple_positioned")
  end

  it "background-properties, background-origin: border-box" do
    test("background-properties", "background_origin_border_box")
  end

  it "background-properties, background-origin: padding-box" do
    test("background-properties", "background_origin_padding_box")
  end

  it "background-properties, background-origin: content-box" do
    test("background-properties", "background_origin_content_box")
  end

  it "background-properties, background-repeat: repeat-x" do
    test("background-properties", "background_repeat_repeat_x")
  end

  it "background-properties, background-repeat: repeat-y" do
    test("background-properties", "background_repeat_repeat_y")
  end

  it "background-properties, background-repeat: space, background-size: 45%" do
    test("background-properties", "background_repeat_space_background_size_45")
  end

  it "background-properties, background-repeat: space, background-size: 49%" do
    test("background-properties", "background_repeat_space_background_size_49")
  end

  it "background-properties, background-repeat: space, background-size: 60px 60px" do
    test("background-properties", "background_repeat_space_background_size_60px_60px")
  end

  it "background-properties, background-repeat: round round, background-size: 150px auto" do
    test("background-properties", "background_repeat_round_round_background_size")
  end

  it "background-properties, background-repeat: round round, background-size: 60px 60px" do
    test("background-properties", "background_repeat_round_round_background_size_2")
  end

  it "background-properties, background-repeat: no-repeat round, background-size: 45%" do
    test("background-properties", "background_repeat_no_repeat_round_background_size")
  end

  it "background-properties, background-repeat: no-repeat, background-size: auto 60px" do
    test("background-properties", "background_repeat_no-repeat_background_size_auto_60px")
  end

  it "background-properties, background-repeat: no-repeat, background-size: 60px auto" do
    test("background-properties", "background_repeat_no-repeat_background_size_60px_auto")
  end

  it "background-properties, background-repeat: no-repeat round, background-size: auto 60px" do
    test("background-properties", "background_repeat_no-repeat_round_background_size_auto_60px")
  end

  it "background-properties, background-repeat: round no-repeat, background-size: 60px auto" do
    test("background-properties", "background_repeat_round_no-repeat_background_size_60px_auto")
  end

  it "background-properties, background-position: center, background-repeat: no-repeat, background-size: 55%" do
    test("background-properties", "background_position_center_background_repeat_no")
  end

  it "background-properties, background-position: bottom right, background-repeat: no-repeat, background-origin: border-box, background-size: 55%" do
    test("background-properties", "background_position_bottom_right_background_repeat")
  end

  it "background-properties, background-clip: padding-box" do
    test("background-properties", "background_clip_padding_box")
  end

  it "background-properties, background-clip: content-box" do
    test("background-properties", "background_clip_content_box")
  end

  it "background-properties, background-clip: content-box with padding" do
    test("background-properties", "background_clip_content_box_with_padding")
  end

  it "background-properties, background-position: bottom right, background-repeat: no-repeat, background-origin: border-box, background-size: 55%, background-clip padding-box" do
    test("background-properties", "background_position_bottom_right_background_repeat_no")
  end

  it "background-properties, background-size with 30000px tall element" do
    test("background-properties", "background_size_with_30000px_tall_element")
  end

  it "background-properties, background-size 25px 100px" do
    test("background-properties", "background_size_25px_100px")
  end

  it "background-properties, overdraw and border" do
    test("background-properties", "overdraw_and_border_on_block_element")
  end

  # transforms

  it "transforms, transform: skew 45deg" do
    test("transforms", "transform_skew_45deg")
  end

  # parsing-gradient

  it "parsing-gradient, color stops with no position specified" do
    test("parsing-gradient", "color_stops_with_unspecified_position")
  end

  it "parsing-gradient, color stops with position before 0% and after 100%" do
    test("parsing-gradient", "color_stops_positioned_outside_the_box")
  end

  it "parsing-gradient, second color stop positioned before first" do
    test("parsing-gradient", "second_color_stop_positioned_before_first")
  end

  it "parsing-gradient, color stops with decreasing position" do
    test("parsing-gradient", "color_stops_with_decreasing_position")
  end

  it "parsing-gradient, color stop without position between color stops with position" do
    test("parsing-gradient", "color_stop_without_position_between_color_stops_with_position")
  end

  it "parsing-gradient, two sibling color stops with same position" do
    test("parsing-gradient", "sibling_color_stops_with_same_position")
  end

  it "parsing-gradient, mix of stops with position and without" do
    test("parsing-gradient", "mix_of_stops_with_position_and_without")
  end

  it "parsing-gradient, mix of stops using different units for position" do
    test("parsing-gradient", "mix_of_stops_with_different_units")
  end

  it "parsing-gradient, two linear gradients overlapping" do
    test("parsing-gradient", "two_linear_gradients_overlapping")
  end

  it "parsing-gradient, using pixel values for position, 10px and 150px" do
    test("parsing-gradient", "using_pixel_values_for_position_10_and_150px")
  end

  it "parsing-gradient, using pixel values for position, 10, 100 and 150px" do
    test("parsing-gradient", "using_pixel_values_for_position_10_100_and_150px")
  end

  it "parsing-gradient, using pixel values for position - negative length" do
    test("parsing-gradient", "using_pixel_values_for_position_negative")
  end

  it "parsing-gradient, using pixel values for position (horizontal)" do
    test("parsing-gradient", "color_stop_using_pixel_values_horizontal")
  end

  it "parsing-gradient, using pixel values for position (slanted)" do
    test("parsing-gradient", "color_stop_using_pixel_values_slanted")
  end

  it "parsing-gradient, color stop without position followed by stop positioned before 0%" do
    test("parsing-gradient", "color_stop_without_position_followed_by_stop_w_position")
  end

  it "parsing-gradient, color stop within 100% range followed by color stop positioned after 100%" do
    test("parsing-gradient", "color_stop_within_100_followed_after_100")
  end

  it "parsing-gradient, two color stops without position followed by color stop positioned before 0%" do
    test("parsing-gradient", "two_color_stops_without_position_followed_by_positioned_stop")
  end

  it "parsing-gradient, color stop positioned after 100% followed by color stop without value" do
    test("parsing-gradient", "color_stop_positioned_after_100_followed_by_stop_without_position")
  end

  it "parsing-gradient, stop positioned after 100% followed by two stops without value" do
    test("parsing-gradient", "stop_positioned_after_100_followed_by_two_stops")
  end

  it "parsing-gradient, stop using currentColor" do
    test("parsing-gradient", "stop_using_currentcolor")
  end

  it "parsing-gradient, whitespace between arguments" do
    test("parsing-gradient", "whitespace_between_arguments")
  end

  it "parsing-gradient, color stop using 0 value for position" do
    test("parsing-gradient", "color_stop_using_0_value_for_position")
  end

  it "parsing-gradient, color stop using em values for position" do
    test("parsing-gradient", "color_stop_using_em_values_for_position")
  end

  # various-tests

  it "various-tests, infinitesimal color transition in vertical gradient" do
    test("various-tests", "precision_test_vertical_infinitesimal_transition")
  end

  it "various-tests, overridden by background:none and about:blank" do
    test("various-tests", "overridden_by_background_none_and_about_blank")
  end

  # invalid-gradient

  it "invalid-gradient, one color stop" do
    test("invalid-gradient", "one_color_stop")
  end

  it "invalid-gradient, color stop with invalid unit" do
    test("invalid-gradient", "color_stop_with_invalid_unit")
  end

  it "invalid-gradient, color stop without unit" do
    test("invalid-gradient", "color_stop_without_unit")
  end

  it "invalid-gradient, two valid gradients not separated by comma" do
    test("invalid-gradient", "two_valid_gradients_not_separated_by_comma")
  end

  it "invalid-gradient, stray comma after last function argument" do
    test("invalid-gradient", "stray_comma_after_last_function_argument")
  end

  it "invalid-gradient, empty color stop argument between other stops" do
    test("invalid-gradient", "empty_color_stop_argument_between_other_stops")
  end

  it "invalid-gradient, handling hex values without hash in standards mode" do
    test("invalid-gradient", "handling_hex_values_without_hash_in_standards_mode")
  end

  it "invalid-gradient, handling hex values without hash in quirks mode" do
    test("invalid-gradient", "handling_hex_values_without_hash_in_quirks_mode")
  end

  it "invalid-gradient, unclosed gradient function" do
    test("invalid-gradient", "unclosed_gradient_function")
  end

  it "invalid-gradient, unclosed gradient function followed by valid gradient function" do
    test("invalid-gradient", "unclosed_gradient_function_followed_by_valid_gradient")
  end

  # gradient-line

  it "gradient-line, value omitted" do
    test("gradient-line", "value_omitted")
  end

  it "gradient-line, top" do
    test("gradient-line", "top")
  end

  it "gradient-line, top right" do
    test("gradient-line", "top_right")
  end

  it "gradient-line, right top" do
    test("gradient-line", "right_top")
  end

  it "gradient-line, right" do
    test("gradient-line", "right")
  end

  it "gradient-line, right bottom" do
    test("gradient-line", "right_bottom")
  end

  it "gradient-line, bottom right" do
    test("gradient-line", "bottom_right")
  end

  it "gradient-line, bottom" do
    test("gradient-line", "bottom")
  end

  it "gradient-line, bottom left" do
    test("gradient-line", "bottom_left")
  end

  it "gradient-line, left bottom" do
    test("gradient-line", "left_bottom")
  end

  it "gradient-line, left" do
    test("gradient-line", "left")
  end

  it "gradient-line, left top" do
    test("gradient-line", "left_top")
  end

  it "gradient-line, top left" do
    test("gradient-line", "top_left")
  end

  # border-radius

  it "border-radius, plain" do
    test("border-radius", "border_radius")
  end

  it "border-radius, border" do
    test("border-radius", "border_radius_border")
  end

  it "border-radius, border + background-origin: border-box" do
    test("border-radius", "border_radius_border_background_origin_border")
  end

  it "border-radius, border + background-origin: content-box" do
    test("border-radius", "border_radius_border_background_origin_content")
  end

  it "border-radius, border + background-origin: padding-box" do
    test("border-radius", "border_radius_border_background_origin_padding")
  end

  it "border-radius, border + background-repeat: no-repeat" do
    test("border-radius", "border_radius_border_background_repeat_no-repeat_1")
  end

  it "border-radius, border + background-repeat: no-repeat + background-position: center" do
    test("border-radius", "border_radius_border_background_repeat_no-repeat_2")
  end

  it "border-radius, border + background-repeat: repeat + background-position" do
    test("border-radius", "border_radius_border_background_repeat_repeat_1")
  end

  it "border-radius, border + background-repeat: round" do
    test("border-radius", "border_radius_border_background_repeat_round")
  end

  it "border-radius, border + background-repeat: space" do
    test("border-radius", "border_radius_border_background_repeat_space")
  end

  it "border-radius, transform" do
    test("border-radius", "border_radius_transform")
  end

  it "border-radius, box-shadow" do
    test("border-radius", "border_radius_box_shadow")
  end

  it "border-radius, form element without background color" do
    test("border-radius", "border_radius_form_element_wo_bg_color")
  end

  it "border-radius, form element with background color" do
    test("border-radius", "border_radius_form_element_w_bg_color")
  end

  it "border-radius, form element with border" do
    test("border-radius", "border_radius_form_element_w_border")
  end

  # repeating

  it "repeating, stops 0, 0" do
    test("repeating", "top_0_0")
  end

  it "repeating, stops 50%, 0" do
    test("repeating", "top_50_0")
  end

  it "repeating, stops 0, 25%" do
    test("repeating", "top_0_25")
  end

  it "repeating, stops 0, 25%, 25%" do
    test("repeating", "top_0_25_25")
  end

  it "repeating, stops 15%, 30%, 45%" do
    test("repeating", "top_15_30_45")
  end

  it "repeating, stops 50%, 200%" do
    test("repeating", "top_50_200")
  end

  it "repeating, stops 0, 30px, 40px" do
    test("repeating", "top_30px_40px")
  end

  it "repeating, stops -30%, 30%" do
    test("repeating", "top_-30_30")
  end

  it "repeating, stops 30%, 130%" do
    test("repeating", "top_30_130")
  end

  it "repeating, left, stops 0, 25%, 25%" do
    test("repeating", "left_0_25_25")
  end

  it "repeating, left, stops 15px, 30px, 40px" do
    test("repeating", "left_15px_30px_40px")
  end

  it "repeating, top left, stops 0, 30px, 40px" do
    test("repeating", "top_left_0_30px_40px")
  end

  it "repeating, top left, stops 5%, 25%, 25%" do
    test("repeating", "top_left_5_25_25")
  end

  it "repeating, bottom left, stops 3%, 10%, 20%" do
    test("repeating", "bottom_left_3_10_20")
  end

  it "repeating, 45deg, stops 3%, 10%, 20%" do
    test("repeating", "45deg_3_10_20")
  end

  it "repeating, 45deg, stops 5%, 10%, 15%" do
    test("repeating", "45deg_5_10_15")
  end

  it "repeating, 1rad angle, stops 20%, 40%" do
    test("repeating", "1rad_20_40")
  end

  it "repeating, 20grad angle, stops 20%, 40%" do
    test("repeating", "20grad_20_40")
  end

  it "repeating, 0deg with sharp color transition at 99%" do
    test("repeating", "0deg_angle_sharp_transition_at_99")
  end

  it "repeating, top left, stops 0, 20%, 40%, no-repeat" do
    test("repeating", "top_0_20_40_no_repeat_size_40")
  end

  it "repeating, top left, stops 0, 20%, 40%, repeat-y" do
    test("repeating", "top_0_20_40_repeat-y_size_40")
  end

  # parsing-gradient-angle

  it "parsing-gradient-angle, 0 angle with percentage values" do
    test("parsing-gradient-angle", "0_angle_percentage")
  end

  it "parsing-gradient-angle, 0 angle with pixel values" do
    test("parsing-gradient-angle", "0_angle_px")
  end

  it "parsing-gradient-angle, -45deg with percentage values" do
    test("parsing-gradient-angle", "-45deg_angle_percentage")
  end

  it "parsing-gradient-angle, -45deg with pixel values" do
    test("parsing-gradient-angle", "-45deg_angle_px")
  end

  it "parsing-gradient-angle, -100deg with percentage values" do
    test("parsing-gradient-angle", "-100deg_angle_percentage")
  end

  it "parsing-gradient-angle, -100deg with pixel values" do
    test("parsing-gradient-angle", "-100deg_angle_px")
  end

  it "parsing-gradient-angle, 120deg with stop positioned outside the box" do
    test("parsing-gradient-angle", "120deg_angle_w_stop_positioned_outside_box")
  end

  it "parsing-gradient-angle, multiple gradients crossing over at 45deg" do
    test("parsing-gradient-angle", "multiple_crossing_45deg")
  end

  it "parsing-gradient-angle, 300 grads angle" do
    test("parsing-gradient-angle", "300grad_angle")
  end

  it "parsing-gradient-angle, -580 grads angle" do
    test("parsing-gradient-angle", "-580grad_angle")
  end

  it "parsing-gradient-angle, 1 radian angle" do
    test("parsing-gradient-angle", "1rad_angle")
  end

  it "parsing-gradient-angle, -3.14 radians angle" do
    test("parsing-gradient-angle", "-3.14rad_angle")
  end

  it "parsing-gradient-angle, 1.3turn angle" do
    test("parsing-gradient-angle", "1.3turn_angle")
  end

end
