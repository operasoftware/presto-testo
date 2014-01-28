# coding: utf-8

require 'operawatir/helper'

describe 'HTMLForms' do
  describe 'HTMLElement' do
    describe 'HTMLInputElement' do
      let(:input_field) { browser.text_field(:id => 'test') }
      let(:submit)      { browser.button(:name => 'submit') }
      before(:all)      { @path = "file://#{File.dirname(__FILE__)}/html" }

      describe 'interaction' do
        context 'with javascript events' do

          context 'onkeydown event' do
            before(:all) { browser.goto @path + '/element/input-text/events/input-text-events-onkeydown.html' }

            it 'should be triggered' do
              browser.keys.send :tab
              browser.keys.down :shift
              input_field.value.should == 'foobar'
              browser.keys.up :shift
            end
          end

          context 'onkeyup event' do
            before(:all) { browser.goto @path + '/element/input-text/events/input-text-events-onkeyup.html' }

            it 'should be triggered' do
              browser.keys.send :tab
              browser.keys.down :shift
              browser.keys.up :shift
              input_field.value.should == 'foobar'
            end
          end
        end

        context 'when using special keys' do

          #unfortunately uses the deprecated opera_action, since send_keys [:control, :escape] doesn't work
          it "accesskey" do
            browser.goto @path + '/element/input-text/keys/input-text-keys-access-key.html'
            browser.opera_action "Enter access key mode"
            browser.keys.send 'o'
            browser.opera_action "Leave access key mode"
            browser.keys.send :backspace
            browser.keys.send :backspace
            browser.keys.send :backspace
            browser.text_field(:id => 'test').value.should == ('')
            submit.click
            browser.text.should include("Result: PASS")
          end
        end

      end
    end
  end
end
