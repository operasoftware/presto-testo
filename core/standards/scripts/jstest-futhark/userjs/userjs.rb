require 'rubygems'
require 'operawatir/helper'
require 'ftools'
require 'net/http'
require 'uri'
require 'tmpdir'

$userJSLocalPath=Dir.tmpdir+'/userjs-automated-testing/'

describe "User JS tests" do
	it "regression tests" do
		enableUserJs('http://t/core/standards/scripts/jstest-futhark/userjs/user.js');
		browser.goto('http://t/core/standards/scripts/jstest-futhark/userjs/userjs.html')
		sleep(1)
		browser.text.include?("Pass rate: 100%").should==true
		disableUserJs()
	end

  after(:all) do
    browser.quit
  end

end

def enableUserJs(*fileURLs)
	ensureDirectoryExistsAndIsEmpty($userJSLocalPath)
	fileURLs.each{ |fileURL|
		url = URI.parse(fileURL)
		req = Net::HTTP::Get.new(url.path)
		res = Net::HTTP.start(url.host, url.port) {|http|
			http.request(req)
		}
		f = File.new( $userJSLocalPath+'test'+rand(0).to_s+'.js', 'w' )
		f.write( res.body )
		f.close
	}
	browser.preferences.user_prefs.user_javascript_file.value = $userJSLocalPath
	browser.preferences.user_prefs.user_javascript.value = true
	browser.preferences.user_prefs.always_load_user_javascript.value = true
end

def disableUserJs()
	ensureDirectoryExistsAndIsEmpty($userJSLocalPath)
	Dir.rmdir($userJSLocalPath)
	browser.preferences.user_prefs.user_javascript_file.default!
	browser.preferences.user_prefs.user_javascript.default!
	browser.preferences.user_prefs.always_load_user_javascript.default!
end


def ensureDirectoryExistsAndIsEmpty(path)
	if( ! (File.directory?(path)) )
		File.makedirs(path)
		return
	end
	Dir.new(base_dir = path).each do |name|
		if File.file?(base_dir+name)
			# print "#{base_dir}#{name}"
			File.delete( "#{base_dir}#{name}" )
		end
	end
end