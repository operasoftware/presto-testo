# coding: utf-8

require File.expand_path('../spec_helper', __FILE__)

describe HTMLForms do
  describe HTMLElement do
    describe HTMLInputElement do

      before(:all) { browser.goto HTMLForms.host + '/element/input-text/text_field.html' }

      let(:input_field) { browser.text_field(:id => 'test') }
      let(:submit)      { browser.button(:name => 'submit') }
      subject { input_field }

      it_behaves_like 'an HTMLElement'

=begin
      let(:input_field) { browser.text_field(:id => 'test') }
      subject { input_field }

      it { should exist }
=end

      describe 'interface' do

        #
        # attribute DOMString autocomplete
        #

        describe 'autocomplete' do
        end

        #
        # attribute boolean autofocus
        #

        describe 'autofocus' do

          let(:response) { browser.text }

          subject { response } 

          before :each do
            browser.send_keys 'foobar'
            submit.click
          end

          context 'when attribute is defined without a value' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/autofocus/input-text-autofocus-without-value.html' }
            it { should include 'You typed: [foobar]' }
          end

          context 'when attribute is defined with the value "autofocus"' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/autofocus/input-text-autofocus-with-value.html' }
            it { should include 'You typed: [foobar]' }
          end

          context 'when attribute is defined with an invalid value' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/autofocus/input-text-autofocus-with-invalid-value.html' }
            it { should include 'You typed: [foobar]' }
          end

        end

        #
        # attribute DOMString dirName
        #

        describe 'dirName' do
        end

        #
        # attribute boolean disabled
        #

        describe 'disabled' do
          context 'when attempting to append text' do 

            before(:each) do
              begin
                input_field.click         #need to click on the texfield before appending to it in Chrome
                input_field.append 'bar'
              rescue
              end

              submit.click
            end

            context 'when attribute is defined without a value' do
              before (:all) { browser.goto HTMLForms.host + '/element/input-text/disabled/input-text-disabled-without-value.html' }

              it 'should not be submitted (even if clicked on)' do
                browser.text.should include('Result: PASS')
              end
            end

            context 'when attribute is defined with the value "disabled"' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/disabled/input-text-disabled-with-value.html' }

              it 'should not be submitted' do
                browser.text.should include('Result: PASS')
              end
            end

            context 'when attribute is defined  with the value disabled' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/disabled/input-text-disabled-with-value-unquoted.html' }

              it 'should not be submitted' do
                browser.text.should include('Result: PASS')
              end
            end

           context 'when attribute is defined  with an invalid value' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/disabled/input-text-disabled-with-invalid-value.html' }

              it 'should not be submitted' do
                browser.text.should include('Result: PASS')
              end
            end
          end

          context 'when attempting to access field in DOM' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/disabled/input-text-disabled-DOM.html' }

            it 'it should be available' do
              browser.text_field(:name => 'first_field').enabled?.should == false
              input_field.value.should == 'foobar'
              submit.click
              browser.text.should include('You typed: [foobar]')
            end
          end


        end

        #
        # readonly attribute HTMLElement? list
        #

        describe 'list' do
        end

        #
        # attribute long maxLength
        #

        describe 'maxLength' do
          subject { input_field }

          context 'with regular maxLength' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/maxLength/input-text-maxlength-regular.html' }
            it { should exist }

            it 'will only submit a string with the specified size' do
              input_field.send_keys 'foobar'
              submit.click
              browser.text.should include('You typed: [foo]')
            end

          end

          context 'with a high maxLength' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/maxLength/input-text-maxlength-high.html' }
            it { should exist }

            it 'submits a large amount of characters', :not_compatible_on => :opera do
                browser.text_field(:name => 'text').click
                browser.text_field(:name => 'text').send_keys [:control, 'a']
                browser.text_field(:name => 'text').send_keys [:control, 'c']
    
                input_field.click
                input_field.send_keys [:control, 'v']
    
                submit.click
                browser.text.should include('Length of content posted: [300]')
            end

          end

          context 'when maxLength is defined as empty' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/maxLength/input-text-maxlength-empty.html' }
            it { should exist }

            it 'should submit all content' do
              input_field.set 'foobar'
              submit.click
              browser.text.should include('You typed: [foobar]')
            end

          end

          context 'when defined with an invalid value' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/maxLength/input-text-maxlength-invalid.html' }
            it { should exist }

            it 'should submit all content' do
              input_field.send_keys 'foobar'
              submit.click
              browser.text.should include('You typed: [foobar]')
            end

          end

          context 'maxLength value available in DOM' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/maxLength/input-text-maxlength-DOM.html' }
            it { should exist }

            it 'should be available' do
              browser.text_field(:name => 'first_field').exists?.should == true
              submit.click
              browser.text.should include('You typed: [143]')
            end

          end

          context 'when maxLength is changed dynamically' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/maxLength/input-text-maxlength-changed.html' }
            it { should exist }


            it 'should update the value' do
              input_field.set 'foobar'
              submit.click
              browser.text.should include('You typed: [foo]')
            end

          end

        end

        #
        # attribute DOMString pattern
        #

        describe 'pattern' do
        end

        #
        # attribute DOMString placeholder
        #

        describe 'pattern' do
        end

        #
        # attribute boolean readOnly
        #

        describe 'readOnly' do
          context 'when attempting to change a readonly field' do
            context 'when readonly is defined without value' do
              before(:each) do
                browser.goto HTMLForms.host + '/element/input-text/readonly/input-text-readonly-without-value.html'
                input_field.click
              end

              context 'when attempting to clear the content', :not_compatible_on => :firefox do
                it 'should be submitted unchanged' do
                  input_field.clear
                  submit.click
                  browser.text.should include('You typed: [foobar]')
                end
              end

              context 'when attempting to remove the content with delete' do
                it 'should be submitted unchanged' do
                  input_field.send_keys :home
                  input_field.send_keys :delete
                  submit.click
                  browser.text.should include('You typed: [foobar]')
                end
              end
            end

            context 'when readonly is defined with value "readonly"' do
              before(:each) do
                browser.goto HTMLForms.host + '/element/input-text/readonly/input-text-readonly-with-value.html'
                input_field.click
              end

              context 'when attempting to clear the content', :not_compatible_on => :firefox do
                it 'should be submitted unchanged' do
                  input_field.clear
                  submit.click
                  browser.text.should include('You typed: [foobar]')
                end
              end

              context 'when attempting to remove the content with delete' do
                it 'should be submitted unchanged' do
                  input_field.send_keys :home
                  input_field.send_keys :delete
                  submit.click
                  browser.text.should include('You typed: [foobar]')
                end
              end
            end

            context 'when readonly is defined with an invalid value' do
              before(:each) do
                browser.goto HTMLForms.host + '/element/input-text/readonly/input-text-readonly-invalid.html'
                input_field.click
              end

              context 'when attempting to clear the content', :not_compatible_on => :firefox do
                it 'should be submitted unchanged' do
                  input_field.clear
                  submit.click
                  browser.text.should include('You typed: [foobar]')
                end
              end

              context 'when attempting to remove the content with delete' do
                it 'should be submitted unchanged' do
                  input_field.send_keys :home
                  input_field.send_keys :delete
                  submit.click
                  browser.text.should include('You typed: [foobar]')
                end
              end
            end

            context 'when readonly is defined with an empty value' do
              before(:each) do
                browser.goto HTMLForms.host + '/element/input-text/readonly/input-text-readonly-empty.html'
                input_field.click
              end

              context 'when attempting to clear the content', :not_compatible_on => :firefox do
                it 'should be submitted unchanged' do
                  input_field.clear
                  submit.click
                  browser.text.should include('You typed: [foobar]')
                end
              end

              context 'when attempting to remove the content with delete' do
                it 'should be submitted unchanged' do
                  input_field.send_keys :home
                  input_field.send_keys :delete
                  submit.click
                  browser.text.should include('You typed: [foobar]')
                end
              end
            end

          end

          context 'when accessing readonly input field from DOM' do

            it 'should be available' do
              browser.goto HTMLForms.host + '/element/input-text/readonly/input-text-readonly-DOM.html'
              browser.text_field(:name => 'first_field').value.should == 'foobar'
              input_field.value.should == 'foobar'
              submit.click
              browser.text.should include('You typed: [foobar]')
            end
          end
        end

        #
        # attribute boolean required
        #

        describe 'required' do
          context 'when attempting to submit a required field' do
            context 'when defined without a value' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/required/input-text-required-without-value.html' }

              it 'should only be submitted once something has been entered' do
                input_field.exists?.should == true
                submit.exists?.should == true
                submit.click
                #textfield is required, so submit should be denied
                submit.exists?.should == true

                input_field.send_keys 'foobar'
                submit.click
                browser.text.should include('You typed: [foobar]')
              end
            end

            context 'when defined with the value "required"' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/required/input-text-required-with-value.html' }

              it 'should only be submitted once something has been entered' do
                input_field.exists?.should == true
                submit.exists?.should == true
                submit.click
                #textfield is required, so submit should be denied
                submit.exists?.should == true

                input_field.send_keys 'foobar'
                submit.click

                browser.text.should include('You typed: [foobar]')
              end

            end

            context 'defined with an invalid value' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/required/input-text-required-invalid.html' }

              it 'should only be submitted once something has been entered' do
                input_field.exists?.should == true
                submit.exists?.should == true
                submit.click
                #textfield is required, so submit should be denied
                submit.exists?.should == true

                input_field.send_keys 'foobar'
                submit.click

                browser.text.should include('You typed: [foobar]')
              end
            end
          end
        end

        #
        # attribute unsigned long size
        #

        describe 'size' do
        end

        #
        # attribute DOMString value
        #

        describe 'value' do

          context 'submitting special characters' do
            context 'when input is special characters' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/value/input-text-value-special.html' }

              it 'should be submitted' do
                 input_field.send_keys '> < &'
                 submit.click
                 browser.text.should include('You typed: [> < &]')
              end
            end

            context 'when appending input with special characters', :not_compatible_on => :opera do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/value/input-text-value-special-append.html' }

              it 'should be submitted' do
                 input_field.click          #need to click on the texfield before appending to it in Chrome
                 input_field.append '& < >'          
                 submit.click
                 browser.text.should include('You typed: [> < & & < >]')
              end
            end

            context 'Prefilled entity input' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/value/input-text-value-entity.html' }

              it 'should be submitted' do
                 input_field.value.should == '&'
                 submit.click
                 browser.text.should include('You typed: [&]')
              end
            end

            context 'when appending to entity value', :not_compatible_on => :opera do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/value/input-text-value-entity-append.html' }

              it 'should be submitted' do
                 input_field.click            #need to click on the texfield before appending to it in Chrome
                 input_field.append '© € ¶ þ'
                 submit.click
                 browser.text.should include('You typed: [& æ Ð © € ¶ þ]')
              end
            end
          end

          #TODO:look at this, not properly picked up on serverside
          context 'Another element inside value' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/value/input-text-value-element-inside.html' }

            it 'should be submitted' do
              input_field.value.should == "<div id='test2'>foobar</div>"
              browser.div(:id => 'test2').exists?.should == false
              submit.click
              browser.div(:id => 'test2').exists?.should == false
              browser.text.should include("You typed: [<div id='test2'>foobar</div>]")
            end
          end

          context 'when clearing and submitting value' do
            before(:each) do
              input_field.clear
              submit.click
            end

            context 'when clearing input of special characters value' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/value/input-text-value-clearing-special.html' }

              it 'should submit an empty value' do
                browser.text.should include('Result: PASS')
              end
            end

            context 'when clearing input of entity value' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/value/input-text-value-clearing-entity.html' }

              it 'should submit an empty value' do
                browser.text.should include('Result: PASS')
              end
            end

          end

          context 'when submitting line break characters' do
            before(:each) { submit.click }

            context 'when submitting carriage return inside value' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/value/input-text-value-carriage-return.html' }

              it 'should submit an empty value' do
                browser.text.should include('Result: PASS')
              end
            end

            context 'when submitting new line inside value' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/value/input-text-value-new-line.html' }

              it 'should submit an empty value' do
                browser.text.should include('Result: PASS')
              end
            end

          end

          context 'when concatenating of two values' do
             before(:all) { browser.goto HTMLForms.host + '/element/input-text/value/input-text-value-concatenation.html' }

            it 'Concatenation of two values' do
              browser.text_field(:id => 'first_field').value.should == 'foo'
              browser.text_field(:id => 'second_field').value.should == 'bar'
              browser.text_field(:id => 'third_field').value.should == 'foobar'
              submit.click
              browser.text.should include('You typed: [foobar]')
            end
          end
        end
      end

      describe 'style' do
      end

      describe 'interaction' do

        context 'with javascript events' do

          context 'when the input field is clicked on' do
            before(:each) { input_field.click }

            context 'onfocus event' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-onfocus.html' }

              it 'should be triggered' do
                input_field.value.should == 'foobar'
              end
            end

            context 'onmousedown event' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-onmousedown.html' }

              it 'should be triggered' do
                input_field.value.should == 'foobar'
              end
            end

            context 'onmouseup event' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-onmouseup.html' }

              it 'should be triggered' do
                input_field.value.should == 'foobar'
              end
            end

            context 'onclick event' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-onclick.html' }

              it 'should be triggered' do
                input_field.value.should == 'foobar'
              end
            end
          end

          context 'onblur event' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-onblur.html' }

            it 'should be triggered' do
              input_field.click
              submit.click
              input_field.value.should == 'foobar'
            end
          end

          context 'onselect event' do
            before(:each) { browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-onselect.html' }

            context ' when focusing with tab', :not_compatible_on => :firefox do
              it 'should be triggered' do
                browser.send_keys :tab
                browser.send_keys [:shift, :left]
                input_field.value.should == 'foobar'
              end
            end

            context 'when focusing by clicking on the textfield', :not_compatible_on => :opera do
              it 'should be triggered' do
                input_field.click
                input_field.send_keys [:shift, :left]
                input_field.value.should == 'foobar'
              end
            end
          end

          context 'onchange event' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-onchange.html' }

            it 'should be triggered' do
              browser.text_field(:name => 'first_field').send_keys 'asd'
              input_field.click
              input_field.value.should == 'foobar'
            end
          end

          context 'when doubleclicking (ondblclick)', :not_compatible_on => :chrome do  #:not_compatible_on => :opera
            before(:each) { browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-ondblclick.html' }

            context 'when doubleclicking' do
              it 'should be triggered' do
                input_field.double_click
                input_field.value.should == 'foobar'
              end
            end

            context 'when firing doubleclick event' do
              it 'should be triggered' do
                input_field.fire_event 'onDblClick'
                input_field.value.should == 'foobar'
              end
            end
          end

          context 'when the mouse is moved' do 
            context 'onmouseover event' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-onmouseover.html' }

              it 'should be triggered' do
                input_field.fire_event 'onMouseOver'
                input_field.value.should == 'foobar'
              end
            end

            context 'onmousemove event' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-onmousemove.html' }

              it 'should be triggered' do
                input_field.fire_event 'onMouseMove'
                input_field.value.should == 'foobar'
              end
            end

            context 'onmouseout event' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-onmouseout.html' }

              it 'should be triggered' do
                input_field.fire_event 'onMouseOut'
                input_field.value.should == 'foobar'
              end
            end
          end

          context 'when keys are pressed' do

            context 'onkeypress event' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-onkeypress.html' }

              it 'should be triggered' do
                browser.text_field(:name => 'first_field').click
                browser.text_field(:name => 'first_field').send_keys 'a'
                input_field.value.should == 'foobar'
              end
            end

          end

          context 'with multiple JS events' do
            it 'Multiple JS events' do
              browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-multiple.html'
              browser.text_field(:name => 'first_field').click
              browser.text_field(:name => 'test1').value.should == 'foobar'
              browser.text_field(:name => 'first_field').set 'abc'
              browser.text_field(:name => 'test2').value.should == 'foobar'
            end
         end

          context 'with an empty JS event' do
            it 'nothing happens' do
              browser.goto HTMLForms.host + '/element/input-text/events/input-text-events-empty.html'

              input_field.click
              submit.click
              browser.text.should include('Result: PASS')
            end
          end

        end

        context 'when posting input' do
          context 'when input is preentered' do

            context 'when input is empty' do
              context 'empty GET input' do 
                before(:each) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-empty-get.html' }

                it_behaves_like 'an empty element'

                it 'should be posted' do
                  submit.click
                  browser.text.should include('Result: PASS')
                end
              end

              context 'empty POST input' do
                before(:each) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-empty-post.html' }

                it 'should be posted' do
                  submit.click
                  browser.text.should include('Result: PASS')
                end
              end
            end

            context 'when field has invalid type' do
              before(:each) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-invalid.html' }

              it 'should be posted' do
                submit.click
                browser.text.should include('You typed: [foobar]')
              end
            end


            context 'when input is long' do

              context 'GET input' do
                before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-long-get.html' }

                it 'should be posted' do
                  submit.click
                  browser.text.should include('Length of content posted: [7767]')
                end
              end

              context 'POST input' do
                before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-long-post.html' }

                it 'should be posted' do
                  submit.click
                  browser.text.should include('Result: PASS')
                end
              end

            end
          end

          context 'when typing and posting' do

            before(:each) do
              input_field.click
              input_field.send_keys 'foobar'
              submit.click
            end

            context 'GET input' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-get.html' }

              it 'should be posted' do
                browser.text.should include('You typed: [foobar]')
              end
            end

            context 'POST input' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-post.html' }

              it 'should be posted' do
                browser.text.should include('You typed: [foobar]')
              end
            end

            context 'when field has missing type' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-missing-type.html' }

              it 'should be posted' do
                browser.text.should include('You typed: [foobar]')
              end
            end

            context 'when field has invalid type' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-invalid.html' }

              it 'should be posted' do
                browser.text.should include('You typed: [foobarfoobar]')
              end
            end

          end

          context 'when manipulating input field content' do
            context 'when clearing a prefilled input field' do

              subject { input_field }

              before(:each) do
                browser.goto HTMLForms.host + '/element/input-text/posting/input-text-clearing.html'
                input_field.clear
              end

              it_behaves_like 'an empty element'

              it 'cleared content should post as a blank input field' do
                submit.click
                browser.text.should include('Result: PASS')
              end
            end

            context 'when appending to existing content in an input field' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-appending.html' }

              it 'all content should be included when posted' do
                input_field.click        #need to click on the texfield before appending to it in Chrome
                input_field.append 'bar'
                submit.click
                browser.text.should include('You typed: [foobar]')
              end
            end
          end

          context 'when posting multiple unique inputs' do
            let(:test1) { browser.text_field(:name => 'test1') }
            let(:test2) { browser.text_field(:name => 'test2') }

            it 'all inputs should be submitted' do
              browser.goto HTMLForms.host + '/element/input-text/posting/input-text-multiple.html'
              test1.value.should == 'foo'
              test2.value.should == 'bar'
              submit.click
              browser.text.should include('You typed: [foo] [bar]')
            end
          end

          context 'when posting multiple duplicate inputs' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-multiple-duplicates.html' }

            let(:input_foo) { browser.text_field(:value => 'foo') }
            let(:input_bar) { browser.text_field(:value => 'bar') }

            it 'only one of the inputs with identical name should be submitted' do
              input_foo.exists?.should == true
              input_bar.exists?.should == true
              submit.click
              browser.text.include?('You typed: [foo]').should == false
            end
          end


          context 'when accessing value from the DOM' do
            it 'should be available' do
              browser.goto HTMLForms.host + '/element/input-text/posting/input-text-DOM.html'
              browser.p(:id => 'result').text.should == 'PASS'
            end
          end

          context 'when undoing changes' do
            context 'when text has recently been deleted from a textfield', :not_compatible_on => :opera do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-undo.html' }

              it 'should be restored' do
                input_field.click
                browser.send_keys 'foobar'
                input_field.value.should == ('foobar')

                browser.send_keys [:control, 'a']
                browser.send_keys :delete
                input_field.value.should == ('')

                browser.send_keys [:control, 'z']
                input_field.value.should == ('foobar')
              end
            end

            context 'when text has been removed by a script', :not_compatible_on => :opera do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-undo-removed-by-script.html' }

              it 'should be restored' do
                input_field.click
                browser.send_keys [:control, 'z']

                input_field.value.should == 'foobar'
              end
            end

            context 'when text has been buffer injected and emptied by script', :not_compatible_on => :opera do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-undo-entered-and-removed-by-script.html' }

              it 'should be restored' do
                input_field.click
                browser.send_keys [:control, 'z']

                input_field.value.should == 'foobar'
              end
            end

            context 'when moving to the beginning of the field' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-moving-when-typing.html' }

              it 'should be posted in the intended order' do
                input_field.click
                browser.send_keys 'bar'
                browser.send_keys :home
                browser.send_keys 'foo'
                submit.click
                browser.text.should include('You typed: [foobar]')
              end
            end
          end

          context 'when posting a large number of unique inputs' do

            before(:all) { browser.goto HTMLForms.host + '/element/input-text/posting/input-text-multiple-many.html' }

            it 'should all be sumbitted', :not_compatible_on => :firefox do
              (0 .. 99).each do |i|
                number     = '0' + i.to_s
                field_name = 'foobar' + number[-2,2]
                browser.send_keys :tab
                browser.send_keys field_name
              end

              submit.click
              browser.text.should include('You typed: [foobar00] [foobar01] [foobar02] [foobar03] [foobar04] [foobar05] [foobar06] [foobar07] [foobar08] [foobar09] [foobar10] [foobar11] [foobar12] [foobar13] [foobar14] [foobar15] [foobar16] [foobar17] [foobar18] [foobar19] [foobar20] [foobar21] [foobar22] [foobar23] [foobar24] [foobar25] [foobar26] [foobar27] [foobar28] [foobar29] [foobar30] [foobar31] [foobar32] [foobar33] [foobar34] [foobar35] [foobar36] [foobar37] [foobar38] [foobar39] [foobar40] [foobar41] [foobar42] [foobar43] [foobar44] [foobar45] [foobar46] [foobar47] [foobar48] [foobar49] [foobar50] [foobar51] [foobar52] [foobar53] [foobar54] [foobar55] [foobar56] [foobar57] [foobar58] [foobar59] [foobar60] [foobar61] [foobar62] [foobar63] [foobar64] [foobar65] [foobar66] [foobar67] [foobar68] [foobar69] [foobar70] [foobar71] [foobar72] [foobar73] [foobar74] [foobar75] [foobar76] [foobar77] [foobar78] [foobar79] [foobar80] [foobar81] [foobar82] [foobar83] [foobar84] [foobar85] [foobar86] [foobar87] [foobar88] [foobar89] [foobar90] [foobar91] [foobar92] [foobar93] [foobar94] [foobar95] [foobar96] [foobar97] [foobar98] [foobar99]')
            end
          end

        end

        context 'i18n' do

          it 'should be able to sumbit Chinese input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-chinese.html'
            input_field.send_keys '東京都 伦敦'
            submit.click
            browser.text.should include('You typed: [東京都 伦敦]')
          end

          it 'should be able to submit Japanese input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-japanese.html'
            input_field.send_keys 'ペキンし ロンドン'
            submit.click
            browser.text.should include('You typed: [ペキンし ロンドン]')
          end

          it 'should be able to submit Hindi input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-hindi.html'
            input_field.send_keys 'मास्को लंदन'
            submit.click
            browser.text.should include('You typed: [मास्को लंदन]')
          end

          it 'should be able to submit Norwegian input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-norwegian.html'
            input_field.send_keys 'Og magen var grøn og blå, av steinklaka gorr og slim, og flugor og kvitmakk små, aula i yrjande stim.'
            submit.click
            browser.text.should include('You typed: [Og magen var grøn og blå, av steinklaka gorr og slim, og flugor og kvitmakk små, aula i yrjande stim.]')
          end

          it 'should be able to submit Thai input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-thai.html'
            input_field.send_keys 'กรุงมอสโก ลอนดอน'
            submit.click
            browser.text.should include('You typed: [กรุงมอสโก ลอนดอน]')
          end

          it 'should be able to submit Russian input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-russian.html'
            input_field.send_keys 'Москва Ло́ндон'
            submit.click
            browser.text.should include('You typed: [Москва Ло́ндон]')
          end

          it 'should be able to submit Arabic input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-arabic.html'
            input_field.send_keys 'موسكو لندن'
            submit.click
            browser.text.should include('You typed: [موسكو لندن]')
          end

          it 'should be able to submit Greek input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-greek.html'
            input_field.send_keys 'Μόσχα Λονδίνο'
            submit.click
            browser.text.should include('You typed: [Μόσχα Λονδίνο]')
          end

          it 'should be able to submit Korean input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-korean.html'
            input_field.send_keys '모스크바 런던'
            submit.click
            browser.text.should include('You typed: [모스크바 런던]')
          end

          it 'should be able to submit Vietnamese input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-vietnamese.html'
            input_field.send_keys 'Mạc Tư Khoa Luân Đôn'
            submit.click
            browser.text.should include('You typed: [Mạc Tư Khoa Luân Đôn]')
          end

          it 'should be able to submit Combining English and Chinese input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-combine-english-chinese.html'
            input_field.send_keys 'Moscow 伦敦'
            submit.click
            browser.text.should include('You typed: [Moscow 伦敦]')
          end

          it 'should be able to submit Combining Chinese and Japanese input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-combine-chinese-japanese.html'
            input_field.send_keys '莫斯科 ロンドン'
            submit.click
            browser.text.should include('You typed: [莫斯科 ロンドン]')
          end

          it 'should be able to submit Combining Norwegian and Russian input' do
            browser.goto HTMLForms.host + '/element/input-text/i18n/input-text-i18n-combine-norwegian-russian.html'
            input_field.send_keys 'Færøyene Москва'
            submit.click
            browser.text.should include('You typed: [Færøyene Москва]')
          end

        end

        context 'when forms and input fields are nested' do
          context 'when submitting input' do 
            before(:each) { submit.click }

            context 'input outside a form' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/nesting/input-text-nesting-001.html' }

              it 'should not be submitted' do
                browser.text.include?('You typed: [foobar]').should == false
              end
            end

            context 'Two nested forms with an input' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/nesting/input-text-nesting-002.html' }

              it 'should be submitted' do
                browser.text.should include('You typed: [foobar]')
              end
            end

            context 'with two nested forms with one input each and second value at the end' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/nesting/input-text-nesting-004.html' }

              it 'should be submitted' do
                browser.text.should include('You typed: [foo] [Submit] [bar]')
              end
            end
          end

          context 'when nested so that input will not be submitted' do

            context 'with two wo nested forms with one input each and submit at the end' do
              before(:all) { browser.goto HTMLForms.host + '/element/input-text/nesting/input-text-nesting-003.html' }

              it 'should nothing happen' do              
                submit.click
                browser.text.include?('Result: FAIL').should == false
                browser.text.include?('Result: PASS').should == false
              end
            end
          end
        end

        context 'when using special keys' do
          context 'when using taborder' do
            before(:all) { browser.goto HTMLForms.host + '/element/input-text/keys/input-text-keys-tabindex.html' }

            it 'should traverse in the correct order', :not_compatible_on => :firefox do
              browser.send_keys :tab
              browser.send_keys 'bar'
              browser.send_keys :tab
              browser.send_keys 'ooo'
              browser.send_keys :tab
              browser.send_keys 'foo'
              submit.click
              browser.text.should include('You typed: [foo] [ooo] [bar]')
            end
          end
        end

      end
    end
  end
end
