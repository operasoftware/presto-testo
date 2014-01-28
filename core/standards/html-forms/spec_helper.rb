begin
  require 'rubygems'
rescue LoadError
end

require 'sinatra/base'

%w{ htmlforms implementation server runner }.each { |l| require "#{File.dirname(__FILE__)}/lib/#{l}" }

require "#{File.dirname(__FILE__)}/shared/html_element.rb"

HTMLForms::Runner.execute_if_necessary
