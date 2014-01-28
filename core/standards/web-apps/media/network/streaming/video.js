var codes   =   {
                    readyState:     {
                                        0:  "HAVE_NOTHING",
                                        1:  "HAVE_METADATA",
                                        2:  "HAVE_CURRENT_DATA",
                                        3:  "HAVE_FUTURE_DATA",
                                        4:  "HAVE_ENOUGH_DATA"
                                    },
                    networkState:   {
                                        0:  "NETWORK_EMPTY",
                                        1:  "NETWORK_IDLE",
                                        2:  "NETWORK_LOADING",
                                        3:  "NETWORK_LOADED",
                                        4:  "NETWORK_NO_SOURCE"
                                    },
                    error:          {
                                        1:  "MEDIA_ERR_ABORTED",
                                        2:  "MEDIA_ERR_NETWORK",
                                        3:  "MEDIA_ERR_DECODE",
                                        4:  "MEDIA_ERR_SRC_NOT_SUPPORTED"
                                    },
                   
                    get: function(name, code)
                    {
                        if (name in this)
                        {
                            if (code in this[name]) { return this[name][code];              }
                            else                    { return 'bad '+name+' code: '+code;    }
                        }
                        else                        { return 'bad name: '+name;             }
                    }
               };

function VideoTest(video, name)
{
    // paramters
    this.name       = null;
    this.video      = null;
    this.state      = null;
    this.list       = null;
    this.data       = null;
    this.timeout    = null;
    this.timeoutID  = null;
    this.finished   = null;
    this.startTime  = null;
    this.results    = null;
    this.current    = null;
    
    // methods
    this.init = function(source, testlist, timeout)
    {
        if (!source)                        { alert("No video source string provided!"          ); return false; }
        if (!testlist)                      { alert("No test list object provided!"             ); return false; }
        if (!(testlist instanceof Object))  { alert("Test list is not an instance of Object!"   ); return false; }
        
        if (!timeout)                       { this.timeout = 5000;      } // default: 5s
        else                                { this.timeout = timeout;   }
        
        this.state      = 0;
        this.list       = testlist;
        
        logger("start testing (timeout: "+(this.timeout / 1000)+"s)");
        this.startTime  = (new Date()).getTime();
        this.setName('loadstart event fired');
        this.updateListeners(0);
        this.video.src  = source;
    };
    
    this.result = function(pass, msg)
    {
        if (this.finished)  { return; }
        this.results.push({name:this.current, result:pass, msg:msg});
        pass = pass?"PASS":"FAIL";
        logger('<span class="'+pass+'">'+pass+'</span>: '+this.current+(msg?(' ('+msg+')'):''));
    };
    
    this.finish = function()
    {
        if (this.timeoutID) { window.clearTimeout(this.timeoutID); }
        if (this.finished)  { return; }
        
        this.finished   = true;
        //this.video.src  = undefined;
        logger("done testing (in: "+(((new Date()).getTime() - this.startTime) / 1000)+"s)");
        
        try
        {
            var spartan = new spartanHandler(this.name);
            
            for (var item in this.results)
            {
                item  = this.results[item];
                spartan.addTest(item.name, item.result, item.result?undefined:item.msg);
                
                /* W3C compatibility with testharness.js*/
                if (item.result)    { test(function() { assert_true(true ) }, item.name); }
                else                { test(function() { assert_true(false) }, item.name); }
            }
            
            spartan.send();
        }
        catch(e)
        {
            alert('VideoTest::finish - error reporting via spartanHandler:\n'+e+'\n\nPlease include http://t/resources/spartanHandler.js and make sure it\'s properly used.');
        }
        
        return;
    }
    
    this.setName = function(testname)
    {
        this.current = testname;
    };
    
    this.setData = function(name, data)
    {
        if (!this.data)         { this.data = {};           }
        this.data[name] = data;
    };
    
    this.delData = function(name)
    {
        if (!this.data)         { this.data = {};           }
        if (name in this.data)  { delete this.data[name];   }
    };
    
    this.getData = function(name)
    {
        if (!this.data)         { this.data = {};           }
        if (name in this.data)  { return this.data[name];   }
        else                    { return undefined;         }
    };
    
    this.updateListeners = function(state)
    {
        if (this.timeoutID) { window.clearTimeout(this.timeoutID); }
        if (this.finished)  { return; }
        
        var list = (this.state in this.list)?this.list[this.state]:[];
        
        for (var i = 0; i < list.length; i++)
        {
            if (list[i].perm) { continue; }
            
            try     { this.video.removeEventListener(list[i].event, list[i].func, false);   }
            catch(e){ logger("state "+state+": can't remove '"+list[i].event+"' listener"); }
        }
        
        if (state !== undefined)    { this.state  = state;  }
        else                        { this.state += 1;      }
        
        var list = (this.state in this.list)?this.list[this.state]:[];
        
        for (var i = 0; i < list.length; i++)
        {
            try     { this.video.addEventListener   (list[i].event, list[i].func, false);   }
            catch(e){ logger("state "+state+": can't add '"+list[i].event+"' listener");    }
        }
        
        this.timeoutID  = window.setTimeout(
                                                function()
                                                {
                                                    try{
                                                    var video       = document.querySelector('video');
                                                    var callbacks   = '';
                                                    var state       = ''+video.test.state;
                                                    var list            = (state in video.test.list)?video.test.list[state]:[];
                                                    
                                                    for (var i = 0; i < list.length; i++) { callbacks += ' '+list[i].event; }
                                                    
                                                    video.test.result(false, 'test timed out after '+video.test.timeout+'ms while running step '+state+' (callbacks:'+callbacks+')');
                                                    video.test.finish();
                                                    }catch(e){alert('test timeout: '+e)}
                                                },
                                                this.timeout
                                           );
    };
    
    // construct
    this.video  = video;
    this.name   = name;
    this.data   = {};
    this.results= []
};

function timeRange2String(timeRange, separator)
{
    var ranges = new Array()
    
    for (var i = 0; i < timeRange.length; i++)
    {
        var start   = (timeRange.start(i)).toFixed(2);
        var end     = (timeRange.end  (i)).toFixed(2);
        var diff    = (end - start       ).toFixed(2);
        
        ranges.push((start+':'+end+' ('+diff+') '));
    }
    
    if (!separator) { separator = ", "; }
    
    return ranges.join(separator);
}

function initialize()
{
    try
    {
        document.querySelector('#log' ).lite = true;
    } catch(e) { alert(e); }
}

function logger(msg)
{
    var log             = document.querySelector('#log');
    var div             = document.createElement('div');
        div.className   = log.lite?'lite':'dark';
        div.innerHTML   = msg;
    
    log.appendChild(div);
    log.lite = !(log.lite);
}

window.addEventListener('load', initialize, false);
