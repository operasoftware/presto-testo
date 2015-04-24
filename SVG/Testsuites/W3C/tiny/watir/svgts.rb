require "operawatir/helper"

describe "svg tiny" do



	it "test from by to and values" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/test_from_by_to_and_values.html")
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "test from by to and values 9s" do
	sleep(9)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage3")).should == true
	end

	it "test from by to and values 16s" do
	sleep(7)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "Test different ways of defining a motion path, 'from and 'to' attribute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/Test_different_ways_of_defining_a_motion_path.html")
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Test different ways of defining a motion path, the 'values' attribute" do
	sleep(3)
	browser.element(:id,"testimage_2").compare_hash(browser.element(:id,"refimage_2")).should == true
	end

	it "Test different ways of defining a motion path, the 'path' attribute" do
	browser.element(:id,"testimage_3").compare_hash(browser.element(:id,"refimage_3")).should == true
	end

	it "Test different ways of defining a motion path, the 'mpath' attribute" do
	browser.element(:id,"testimage_4").compare_hash(browser.element(:id,"refimage_4")).should == true
	end


	it "svg additive and accumulate attributes" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/svg_additive_and_accumulate_attributes.html")
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "svg additive and accumulate attributes 4s" do
	sleep(4)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "svg additive and accumulate attributes 19s" do
	sleep(15)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage3")).should == true
	end

	it "svg additive and accumulate attributes 27s" do
	sleep(8)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage4")).should == true
	end



	 it "quick animation test before animation start " do
	 pending("~") do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/rotate_auto_and_rotate_auto_reverse.html")

	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end
	end


	it "quick animation test before animation end " do
	pending("~") do
	sleep(11)

	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end
	end


	it "quick animation test fade in" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/quick_animation_test.html")
	sleep(2)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true

	end

	it "quick animation test fade in (clicking)" do
	browser.element(:id,"testimage").click(369,79)
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true

	end





	it "Test different values for calcMode discrete 0s" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/possible_values_for_calcmode.html")
	sleep(1)
	browser.element(:id,"testimage_discrete").compare_hash(browser.element(:id,"refimage4")).should == true
	end

	it "Test different values for calcMode discrete 6s" do
	sleep(6)
	browser.element(:id,"testimage_discrete").compare_hash(browser.element(:id,"refimage3")).should == true
	end

	it "Test different values for calcMode discrete 12s" do
	sleep(6)
	browser.element(:id,"testimage_discrete").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Test different values for calcMode discrete 18s" do
	sleep(6)
	browser.element(:id,"testimage_discrete").compare_hash(browser.element(:id,"refimage")).should == true
	end




	it "Test different values for calcMode linear 0s" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/possible_values_for_calcmode.html")
	browser.element(:id,"testimage_linear").compare_hash(browser.element(:id,"refimage4")).should == true
	end

	it "Test different values for calcMode linear 6s" do
	sleep(6)
	browser.element(:id,"testimage_linear").compare_hash(browser.element(:id,"refimage3")).should == true
	end

	it "Test different values for calcMode linear 12s" do
	sleep(6)
	browser.element(:id,"testimage_linear").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Test different values for calcMode linear 18s" do
	sleep(6)
	browser.element(:id,"testimage_linear").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Test different values for calcMode paced 0s" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/possible_values_for_calcmode.html")
	browser.element(:id,"testimage_paced").compare_hash(browser.element(:id,"refimage4")).should == true
	end

	it "Test different values for calcMode paced 6s" do
	sleep(6)
	browser.element(:id,"testimage_paced").compare_hash(browser.element(:id,"refimage3")).should == true
	end

	it "Test different values for calcMode paced 12s" do
	sleep(6)
	browser.element(:id,"testimage_paced").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Test different values for calcMode paced 18s" do
	sleep(6)
	browser.element(:id,"testimage_paced").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Test different values for calcMode spline 0s" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/possible_values_for_calcmode.html")
	browser.element(:id,"testimage_spline").compare_hash(browser.element(:id,"refimage4")).should == true
	end

	it "Test different values for calcMode spline 6s" do
	sleep(6)
	browser.element(:id,"testimage_spline").compare_hash(browser.element(:id,"refimage3")).should == true
	end

	it "Test different values for calcMode spline 12s" do
	sleep(6)
	browser.element(:id,"testimage_spline").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Test different values for calcMode spline 18s" do
	sleep(6)
	browser.element(:id,"testimage_spline").compare_hash(browser.element(:id,"refimage")).should == true
	end




	it "animated use where the referenced defs also is animated" do

		pending("This test is pending due to problems with rasterizing vector graphics") do
		browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animate_use_where_the_referenced_defs_also_is_animated.html")
		sleep(5)

		browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
		end
	end




	it "animation options for target attribute property" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animation_options_for_target_attribute_property.html")
	sleep(8)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "animation options for target element" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animation_options_for_target_element.html")
	sleep(9)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "Tests animation options for target element" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/declarative_animation.html")
	sleep(9)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

  	it "inheritance of animated properties" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/inheritance_of_animated_properties.html")
	sleep(9)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end




	it "Test of display attribute animation" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animation_of_the_display_attribute.html")
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Test of display attribute animation 9 sec" do
	sleep(8)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Test of display attribute animation 15 sec" do
	sleep(2)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage3")).should == true
	end

	it "Test of display attribute animation 18 sec" do
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage4")).should == true
	end

	it "Test of display attribute animation 24 sec" do
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage5")).should == true
	end


	it "Test of keyPoints and keyTimes" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animateMotion_with_keyPoints_and_keyTimes.html")
	sleep(2.50)

	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Test of keyPoints and keyTimes second part" do
	sleep(2)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end



	it "Tests <animateTransform> regarding rotation center and paced animation" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animateTransform_regarding_rotation_center_and_paced_animation.html")
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Tests <animateTransform> regarding rotation center and paced animation second part" do
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "Tests the animate element on the various graphics properties" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animate_element_on_the_various_graphics_properties.html")
	sleep(1.7)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true

	end

	it "Tests the animate element on the various graphics properties 2" do
	sleep(3)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "animate element on various text and font properties" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animate_element_on_various_text_and_font_properties.html")
	sleep(1.3)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "animate element on various text and font properties second part" do
	sleep(3)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end



	it "tests <animate> on <path>'s d attribute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animate_on_path_d_attribute.html")
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "tests <animate> on <path>'s d attribute after animation" do
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end





	it "Tests animation of attributes 'points' and 'fill-rule'" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animation_of_attributes_points_and_fill-rule.html")
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage1")).should == true
	end

	it "Tests animation of attributes 'points' and 'fill-rule' 5s" do
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Tests animation of attributes 'points' and 'fill-rule' 10s" do
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage3")).should == true
	end


	it "Tests animation of attributes 'points' and 'fill-rule' 15s" do
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end





	it "Tests animation of color" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animation_of_color.html")
	sleep(5.50)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Tests animation of color second part" do
	sleep(9)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "Tests animation of color keywords resolved to animatable RGB values" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animation_of_color_keywords_resolved_to_animatable_RGB_values.html")
	sleep(0)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage1")).should == true
	end


	it "Tests animation of color keywords resolved to animatable RGB values 1s" do
	sleep(1.1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Tests animation of color keywords resolved to animatable RGB values 6s" do
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end


	it "Tests animation of the d attribute of the path element 1" do
	#browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animation_of_the_d_attribute_of_the_path_element.html")
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animation_of_the_d_attribute_of_the_path_element.html")
	sleep(0)

	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Tests animation of the d attribute of the path element 2" do
	sleep(2)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Tests animation of the d attribute of the path element 3" do
	sleep(2)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage3")).should == true
	end

	it "Tests animation of the d attribute of the path element 4" do
	sleep(2.5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage4")).should == true
	end






	it "Tests animation of transform attribute on structure elements, hyperlinks and text elements" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animation_of_transform_attribute_on_structure_elements,_hyperlinks_and_text_elements.html")
	sleep(0.9)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "Tests animation of transform attribute shape elements" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animation_of_transform_attribute_shape_elements.html")
	sleep(3)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Tests animation of transform attribute shape elements second part" do
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "Tests animation to and from degenerate cases of basic shapes" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/animation_to_and_from_degenerate_cases_of_basic_shapes.html")
	sleep(4)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Tests animation to and from degenerate cases of basic shapes second part" do
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end


	it "basic tests on restart attribute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/basic_tests_on_restart_attribute.html")
	sleep(0)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "basic tests on restart attribute 6s" do
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end



	it "basic tests on the animation's SMIL fill attribute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/basic_tests_on_the_animation's_SMIL_fill_attribute.html")
	sleep(0)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "basic tests on the animation's SMIL fill attribute 6s" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/basic_tests_on_the_animation's_SMIL_fill_attribute.html")
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end



	it "basic tests on the dur attribute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/basic_tests_on_the_dur_attribute.html")
	sleep(0)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "basic tests on the dur attribute 3s" do
	sleep(3)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "basic tests on the min attribute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/basic_tests_on_the_min_attribute.html")
	sleep(0)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "basic tests on the min attribute 6s" do
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "basic tests on the 'repeatCount' attribute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/basic_tests_on_the_repeatCount_attribute.html")
	sleep(0)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "basic tests on the 'repeatCount' attribute 6s" do
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "basic tests on the 'repeatDur' attribute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/basic_tests_on_the_repeatDur_attribute.html")
	sleep(0)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "basic tests on the 'repeatDur' attribute 6s" do
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "Basic test on the 'begin' attribute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/basic_test_on_the_begin_attribute.html")
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Basic test on the 'begin' attribute 4s" do
	sleep(4)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Basic test on the 'begin' attribute 10s" do
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage3")).should == true
	end

	it "Basic test on the 'begin' attribute 16s" do
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage4")).should == true
	end

	it "Basic test on the 'begin' attribute 20s" do
	sleep(4)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage5")).should == true
	end

	it "Basic test on the 'begin' attribute 26s" do
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage6")).should == true
	end

	it "Basic test on the 'begin' attribute 30s" do
	sleep(4)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage7")).should == true
	end







	it "Basic test on the 'end' attribute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/basic_test_on_the_end_attribute.html")
	sleep(2)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Basic test on the 'end' attribute 6s" do
	sleep(5) #6s
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Basic test on the 'end' attribute 11s" do
	sleep(5) #11s
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage3")).should == true
	end

	it "Basic test on the 'end' attribute 16s" do
	sleep(5) #16s
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage4")).should == true
	end

	it "Basic test on the 'end' attribute 21s" do
	sleep(5) #21s
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage5")).should == true
	end

	it "Basic test on the 'end' attribute 26s" do
	sleep(5) #26s
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage6")).should == true
	end

	it "Basic test on the 'end' attribute 31s" do
	sleep(5) #31s
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage7")).should == true
	end

	it "Eventbase targets" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/eventbase_targets.html")
	browser.element(:id,"testimage").click(74,80)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Eventbase targets 2s" do
	browser.element(:id,"testimage").click(165,81)
	sleep(2)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Eventbase targets (clicking)" do
	browser.element(:id,"testimage").click(261,80)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true

	end


	#it "" do
	#browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/handling_by_Dynamic_viewers_for_the_zoomAndPan_attribute_on_the_'svg'_element.html")
	#sleep()
	#browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	#end

	it "Test handling of basic links of SVG content using 'a' element" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/handling_of_basic_links_of_SVG_content_using_'a'_element.html")
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "handling of path element and its data attribute combined with straight line path commands" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/handling_of_path_element_and_its_data_attribute_combined_with_straight_line_path_commands.html")

	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end



	#it "" do
	#browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/handling_of_the_allowable_xlink_attributes_on_the_a_element.html")
	#sleep()
	#browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	#end

	it "Tests the max attribute and combinations of the min and max attributes" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/max_attribute_and_combinations_of_the_min_and_max_attributes.html")
	sleep(0)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Tests the max attribute and combinations of the min and max attributes 6s" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/max_attribute_and_combinations_of_the_min_and_max_attributes.html")
	sleep(6)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "Tests multiple begin conditions in the begin attribute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/multiple_begin_conditions_in_the_begin_attribute.html")
	sleep(0)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Tests multiple begin conditions in the begin attribute 1s" do
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Tests multiple begin conditions in the begin attribute 2s" do
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Tests multiple begin conditions in the begin attribute 3s" do
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Tests multiple begin conditions in the begin attribute 4s" do
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end



	it "Set elements change graphics properties on a shape element" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/set_elements_change_graphics_properties_on_a_shape_element.html")
	sleep(2)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Set elements change graphics properties on a shape element 6s" do
	sleep(4)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Set elements change graphics properties on a shape element 11s" do
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end



	it "Tests set elements change text properties on a text element" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/set_elements_change_text_properties_on_a_text_element.html")
	sleep(3)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Tests set elements change text properties on a text element second part" do
	sleep(4)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Tests that the 'a' element properly accept the transform attibute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/that_the_'a'_element_properly_accept_the_transform_attibute.html")

	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Tests that the 'a' element properly accept the transform attibute (clicking)" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/that_the_'a'_element_properly_accept_the_transform_attibute.html")
	browser.element(:id,"testimage").click(211,64)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end


	it "Test handling of basic links of SVG content using a element" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/handling_of_basic_links_of_SVG_content_using_a_element.html")
	browser.element(:id,"testimage").click(115,61)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Test handling of basic links of SVG content using a element goes to another page" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/handling_of_basic_links_of_SVG_content_using_a_element.html")
	browser.element(:id,"testimage").click(109,240)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end


	it "Test handling of basic links of SVG content using 'a' element (clicking)" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/handling_of_basic_links_of_SVG_content_using_'a'_element.html")
	browser.element(:id,"testimage").click(211,64)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Test handling of basic links of SVG content using 'a' element goes to another page" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/handling_of_basic_links_of_SVG_content_using_'a'_element.html")
	browser.element(:id,"testimage").click(220,148)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "Test handling of basic links of SVG content using a element to different site" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/handling_of_basic_links_of_SVG_content_using_'a'_element.html")
	browser.element(:id,"testimage").click(215,243)
	sleep(2)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage3")).should == true
	end

	it "Tests the <animateTransform>'s additive behavior" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/the_animateTransform's_additive_behavior.html")
  sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "Tests the <animateTransform>'s additive behavior 6s" do
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end



	it "tests the operation of the animate Transform element" do
	  browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/the_operation_of_the_animateTransform_element.html")
	  sleep(2)
	  browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage1"))
	  sleep(1.5)
	  browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2"))

	  browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage3"))
	  sleep(2)
	  browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage4"))
	  sleep(2)
	  browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage5"))
	  sleep(6)
	  browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage"))
	end


	it "validates multiple end conditions in the end attribute" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/validates_multiple_end_conditions_in_the_end_attribute.html")
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "validates multiple end conditions in the end attribute 10s" do
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "validates multiple end conditions in the end attribute 15s" do
	sleep(5)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end



	it "xlink href attribute can be animated on a image and use elements" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/xlink_href_attribute_can_be_animated_on_a_image_and_use_elements.html")
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "xlink href attribute can be animated on a image and use elements 9s" do
	sleep(8)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end



	it "Tests that xml namespaces are correctly implemented" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/xml_namespaces_are_correctly_implemented.html")
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end


	it "<animate> of x/y/ width/ height" do
	browser.goto("http://t/core/standards/SVG/Testsuites/W3C/tiny/modified/x_and_y_attributes_can_be_animated_on_use,_image,_rect_and_text_elements_and_that_width_and_height_can_be_animated_on_image_ande.html")
	sleep(1)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage")).should == true
	end

	it "<animate> of x/y/ width/ height 5s" do
	sleep(4)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage2")).should == true
	end

	it "<animate> of x/y/ width/ height 9s" do
	sleep(4)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage3")).should == true
	end


	it "<animate> of x/y/ width/ height 13s" do
	sleep(4)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage4")).should == true
	end


	it "<animate> of x/y/ width/ height 20s" do
	sleep(7)
	browser.element(:id,"testimage").compare_hash(browser.element(:id,"refimage5")).should == true
	end



end
