module HTMLForms
  module Runner

    module BrowserHelper
      def browser; @browser; end
    end

    module_function

    def execute
      load_requires
      start_server
      configure

      @executed = true
    end

    def execute_if_necessary
      execute unless @executed
    end

    def configure
      Thread.abort_on_exception = true

      RSpec.configure do |config|
        config.include(BrowserHelper)

        config.before(:all) { @browser = HTMLForms.new_browser }
        config.after(:all)  { @browser.close if @browser       }

        config.exclusion_filter = {
          :platform          => HTMLForms.platform,
          :not_compatible_on => HTMLForms.implementation.browser
        }
      end
    end

    def load_requires
      require 'rspec'

      begin
        require 'ruby-debug'
        Debugger.start
        Debugger.settings[:autoeval] = true
        Debugger.settings[:autolist] = 1
      rescue LoadError
      end
    end

    def start_server
      if HTMLForms::Server.should_run?
        HTMLForms::Server.run_async
      else
        $stderr.puts 'not running HTMLForms::Server'
      end
    end

  end
end
