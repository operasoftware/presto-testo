module HTMLForms
  class << self
    attr_accessor :browser_args, :implementation

    def html
      File.expand_path("#{File.dirname(__FILE__)}/../html")
    end

    def files
      "file://#{html}"
    end

    def host
      "http://#{Server.bind}:#{Server.port}"
    end

    def platform
      @platform ||= case RUBY_PLATFORM
                    when /java/
                      :java
                    when /mswin|msys|mingw32/
                      :windows
                    when /darwin/
                      :macosx
                    when /linux/
                      :linux
                    else
                      RUBY_PLATFORM
                    end
    end

    def implementation
      @implementation ||= (
        imp = HTMLForms::Implementation.new
        yield imp if block_given?
        imp
      )
    end

    def implementation=(imp)
      unless imp.kind_of? HTMLForms::Implementation
        raise TypeError, "expected HTMLForms::Implementation, got #{imp.class}"
      end

      @implementation = imp
    end

    def new_browser
      klass = HTMLForms.implementation.browser_class
      args  = HTMLForms.implementation.browser_args
      args ? klass.new(*args) : klass.new
    end

  end
end

module HTMLElement; end
module HTMLButtonElement; end
module HTMLInputElement; end
