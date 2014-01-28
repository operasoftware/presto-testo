module HTMLForms 
  class Implementation

    attr_writer :name, :browser, :browser_class, :browser_args

    def name
      @name ||= :webdriver
    end

    def browser
      @browser ||= (ENV['HTMLFORMS_BROWSER'] || :opera).to_sym
    end

    def browser_class
      @browser_class ||= (
        require 'watir-webdriver'
        Watir::Browser
      )
    end

    def browser_args
      [browser]
    end

  end
end
