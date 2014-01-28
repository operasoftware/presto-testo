# encoding: utf-8

require 'socket'
require 'digest'

module HTMLForms
  class Server < Sinatra::Base

    SERVER_PORT = 2000

    class << self
      attr_accessor :autorun

      def run_async
        case HTMLForms.platform
        when :java
          Thread.new { run! }
          sleep 0.1 until HTMLForms::Server.running?
        when :windows
          run_in_child_process
        else
          pid = fork { run! }
          sleep 0.5 until listening?
        end

        if pid
          # is this really necessary?
          at_exit {
            begin
              Process.kill 0, pid
              alive = true
            rescue Errno::ESRCH
              alive = false
            end

            Process.kill(9, pid) if alive
          }
        end
      end

      def run!
        handler = detect_rack_handler
        handler.run(self, :Host => bind, :Port => port) { @running = true }
      end

      def listening?
        $stderr.puts "trying #{bind}:#{port}..."

        TCPSocket.new(bind, port).close
        true
      rescue
        false
      end

      def autorun
        @autorun ||= true
      end

      def should_run?
        autorun && !running?
      end

      def running?
        defined?(@running) && @running
      end

      SOCKET_ERRORS = [Errno::EADDRINUSE]
      SOCKET_ERRORS << SocketError if defined?(SocketError) # ruby versions...

      def free_port?(port)
        s = TCPServer.new(@host, port)
        s.close
        true
      rescue *SOCKET_ERRORS
        false
      end

      private

      def run_in_child_process
        begin
          require 'childprocess'
        rescue LoadError => ex
          raise "please run `gem install childprocess` for WatirSpec on Windows + MRI\n\t(caught: #{ex.message})"
        end

        path = File.expand_path('../../spec_helper.rb', __FILE__)

        process = ChildProcess.build(WatirSpec.ruby, path)
        process.io.inherit! if $DEBUG
        process.start

        at_exit { process.stop }
      end
    end # class << Server

    set :public,      HTMLForms.html
    set :static,      true
    set :run,         false
    set :environment, :production
    set :bind,        "localhost" #The default address, 0.0.0.0 does not work in Opera on Linux, nor on windows  #if HTMLForms.platform == :windows
    set :port,        SERVER_PORT
    set :server,      %w[mongrel webrick]

    get '/' do
      self.class.name
    end

    class BigContent
      def each(&blk)
        yield "<html><head><title>Big Content</title></head><body>"

        string = "hello"*205

        300.times do
          yield string
        end

        yield "</body></html>"
      end
    end

    get '/big' do
      BigContent.new
    end

    get '*res/character_count.rb' do
      "Length of content posted: [#{params[:test].length}]"
    end

    get '*res/empty_get.rb' do
      !!params[:test].empty? ? 'Result: PASS' : 'Result: FAIL'
    end

    get '*res/return_single_get.rb' do
      "You typed: [#{params[:test]}]"
    end

    post '*res/check_md5s_post.rb' do
      test = Digest::MD5.hexdigest params[:test]
      reference = params[:md5_test]

      if test == reference
        "Result: PASS"
      else
        "Result: FAIL"
      end

    end

    post '*res/character_count.rb' do
      "Length of content posted: [#{params[:test].length}]"
    end

    post '*res/empty_post.rb' do
      !!params[:test].empty? ? 'Result: PASS' : 'Result: FAIL'
    end

    post '*res/null_post.rb' do
      if !defined?(params[:test]) || params[:test].nil? || params[:test] == ''
        'Result: PASS'
      else
        'Result: FAIL'
      end
    end

    post '*res/return_multiple_post.rb' do
      result = ''
      
      params.each { |k,v| result += " [#{v}]" }

      "You typed: #{result}"
    end

    post '*res/return_single_post.rb' do
      result =  Rack::Utils.escape_html(params[:test])
      "You typed: [#{result}]"
    end

    post '/post_to_me' do
      "You posted the following content:\n#{ env['rack.input'].read }"
    end

    get '/plain_text' do
      content_type 'text/plain'
      'This is text/plain'
    end

    get '/ajax' do
      sleep 10
      "A slooow ajax response"
    end

    get '/charset_mismatch' do
      content_type 'text/html; charset=UTF-8'
      %{
        <html>
          <head>
            <meta http-equiv="Content-type" content="text/html; charset=iso-8859-1" />
          </head>
          <body>
            <h1>ø</h1>
          </body>
        </html>
      }
    end

    get '/octet_stream' do
      content_type 'application/octet-stream'
      'This is application/octet-stream'
    end

    get '/set_cookie' do
      content_type 'text/plain'
      headers 'Set-Cookie' => "monster=/"

      "C is for cookie, it's good enough for me"
    end

    get '/header_echo' do
      content_type 'text/plain'
      env.inspect
    end

    get '/authentication' do
      auth = Rack::Auth::Basic::Request.new(env)

      unless auth.provided? && auth.credentials == %w[foo bar]
        headers 'WWW-Authenticate' => %(Basic realm="localhost")
        halt 401, 'Authorization Required'
      end

      "ok"
    end

    get '/encodable_<stuff>' do
      'page with characters in URI that need encoding'
    end

  end
end
