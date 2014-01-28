require File.expand_path('../spec_helper', __FILE__)

describe HTMLForms do
  describe HTMLElement do
    describe HTMLButtonElement do

      describe 'interface' do

        #
        # attribute boolean autofocus
        #

        describe 'autofocus', :not_compatible_on => :opera do
          it 'gets autofocussed' do
            1.should == 1
          end

          it_behaves_like 'an autofocused form element'
        end

        #
        # attribute boolean disabled
        #

        describe 'disabled' do
        end

        #
        # readonly attribute HTMLFormElement? form
        #

        describe 'form' do
        end

        #
        # attribute DOMString formAction
        #

        describe 'formAction' do
        end

        #
        # attribute DOMString formEnctype
        #

        describe 'formEnctype' do
        end

        #
        # attribute DOMString formMethod
        #

        describe 'formMethod' do
        end

        #
        # attribute DOMString formNoValidate
        #

        describe 'formNoValidate' do
        end

        #
        # attribute DOMString formTarget
        #

        describe 'formTarget' do
        end

        #
        # attribute DOMString name
        #

        describe 'name' do
        end

        #
        # attribute DOMString type
        #

        describe 'type' do
        end

        #
        # attribute DOMString value
        #

        describe 'value' do
        end

        #
        # readonly attribute boolean willValidate
        #

        describe 'willValidate' do
        end

        #
        # readonly attribute ValidityState validity
        #

        describe 'validity' do
        end

        #
        # readonly attribute DOMString validationMessage
        #

        describe 'validationMessage' do
        end

        #
        # boolean checkValidity
        #

        describe 'checkValidity' do
        end

        #
        # readonly attribute DOMString validationMessage
        #

        describe 'setCustomValidity' do
        end

        #
        # readonly attribute NodeList labels
        #

        describe 'labels' do
        end

      end

      describe 'style' do
        # TODO: Split this out to a page object?
        let(:test_button)  { browser.button(:id => 'test') }
        let(:other_button) { browser.button(:id => 'other')  }

        subject { test_button }

        context 'an empty button' do
          before(:all) { browser.goto HTMLForms.files + '/element/button/style/empty_button.html' }

          it { should exist }

          it do
            width.should < other_button.width
            height.should < other_button.height
          end
        end

        context 'a button with text' do

        context 'a button with other inline elements' do
        end
      end

      describe 'interaction' do

      end

    end
  end
end
