describe 'registerContentHandler' do

  describe 'Feeds' do
    before :all do
      @files = 'http://t/core/standards/registerhandler/interactive/'
      @feed = @files + 'res/rss.php?type='

      browser.goto @files + 'feeds.html'

      # In lack of a proper dialog API, these keystrokes add the feeds handler
      browser.keys.send :F1
      10.times { browser.keys.send :tab }
      browser.keys.send :space
    end

    # Types must be URL encoded
    types = ['application/rss%2Bxml', 'application/atom%2Bxml', 'text/xml',
      'application/xml', 'text/html']

    types.each { |type|
      it 'handles '+ type  +' feeds with the feed handler' do
        browser.goto @feed + type
        browser.select_list(:id, 'readers').value.should include 'pass'
      end
    }
  end

end
