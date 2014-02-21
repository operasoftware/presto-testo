<?php
class TimerManager
{
    private $timers = NULL;

    public function __construct() { $this->timers = array(); }

    public function start($id)
    {
        if (!isset($this->timers[$id])) { $this->timers[$id] = array("start" => 0, "total" => 0); }

        $this->timers[$id]["start"] = microtime(true);
    }
    public function stop ($id)  { $this->timers[$id]["total"] += microtime(true) - $this->timers[$id]["start"]; }
    public function total($id)  { return $this->timers[$id]["total"]; }
    public function elapsed($id){ return microtime(true) - $this->timers[$id]["start"]; }
    public function show($id)   { return "[".($id).": ".($this->total($id))."]"; }
}

function start($PARAMS)
{
    if (isset($PARAMS["secure"]) and !isset($_SERVER["HTTPS"]))                                     // IF secure parameter is on and the connection is not over https
    {
        //logg("server name: ".$_SERVER["SERVER_NAME"]."\nrequest uri: ".$_SERVER["REQUEST_URI"]);
        //header("Location: https://".$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"]);               // redirect to https
        header("Location: https://t.oslo.opera.com".$_SERVER["REQUEST_URI"]);                       // redirect to https [T version]
        exit(0);
    }

    // defined constants
    define("DEFAULT_CHUNK_SIZE", 1024*1024);                                                        // DEFAULT_CHUNK_SIZE is 1 MB

    // define startup defaults
    $SUPPORT_RANGE_HEADER   = true;                                                                 // whether or not we (the server) support the range header  [default: true                      ]
    $FORCE_BROWSER_NOCACHE  = false;                                                                // whether or not to send no-cache (and friends) headers    [default: false                     ]
    $FORCE_CHUNKED          = false;                                                                // whether or not to send chunked data                      [default: false                     ]
    $filename               = "11s.webm";                                                           // media file to serve                                      [default: 11s.webm                  ]
    //$filename               = "../../../../../../resources/media/webm/11s.webm";                    // media file to serve                                      [default: 11s.webm                  ]
    $rate                   = 0.0;                                                                  // data burst rate                                          [default: no limit                  ]
    $chunksize              = 1.0 * DEFAULT_CHUNK_SIZE;                                             // max chunk size                                           [default: 1 MB                      ]
    $sleep                  = 0.0;                                                                  // delay between chunks                                     [default: 0s                        ]
    $timeout                = 3;                                                                    // timeout for the connection                               [default: 3s                        ]
    $limitsize              = false;                                                                // limit the number of bytes to send                        [default: disabled                  ]
    $ifrange                = false;                                                                // control if-range behavior                                [default: disabled                  ]
    // the below parameter has meaning only if USE_CONTENTRANGE is true and SUPPORT_HEADER_RANGE is true
    $offset                 = 0;                                                                    // bytes added to range end to invoke invalid response      [default: 0                         ]
    // list of headers to send
    $HEADERS                = array();
    $USE_ETAG               = false;                                                                // whether or not to send the etag header                   [default: false                     ]
    $HTTP_STATUS            = false;                                                                // http status header to send (use 206 or 200 if not set)   [default: false                     ]
    $date                   = false;                                                                // date header to send                                      [default: don't send any            ]
    $contenttype            = "application/octet-stream";                                           // content type header to send (autodetected if not set)    [default: application/octet-stream  ]
    // the below headers have meaning only if SUPPORT_RANGE_HEADER is true (norange parameter is not set)
    $USE_CONTENTRANGE       = true;                                                                 // whether or not to send the content range header          [default: true                      ]
    $acceptranges           = "bytes";                                                              // accept ranges header to send                             [default: bytes                     ]
    // the below headers have meaning only if FORCE_BROWSER_CACHE is false (nocache parameter is not set)
    $expires                = false;                                                                // expires header to send                                   [default: don't send any            ]
    $lastmodified           = false;                                                                // last modified header to send                             [default: don't send any            ]
    $cachecontrol           = false;                                                                // cache control header to send                             [default: don't send any            ]
    $id                     = $_SERVER["REMOTE_ADDR"];                                              // set the script execution ID (for use with force timeout) [default: client IP                 ]

    // override default values with provided parameters (+sanity checks)
    if (isset     ($PARAMS["norange"])) { $SUPPORT_RANGE_HEADER     = false;                      } // disable server support for the range header
    if (isset     ($PARAMS["nocache"])) { $FORCE_BROWSER_NOCACHE    = true;                       } // enable sending of no-cache (and friends) headers
    if (isset     ($PARAMS["chunked"])) { $FORCE_CHUNKED            = true;                       } // enable Transfer-Encoding: chunked (disable Content-Length)
    if (isset($PARAMS["contentrange"])) { $USE_CONTENTRANGE         = false;                      } // disable sending the Content-Range header
    if (isset($PARAMS["acceptranges"])) { $acceptranges = $PARAMS["acceptranges"];                } // change the default Accept-Ranges header
    if (isset     ($PARAMS["etag"   ])) { $USE_ETAG                 = true;                       } // enable sending the ETag header
    if (isset     ($PARAMS["status" ])) { $HTTP_STATUS  = $PARAMS["status"      ];                } // change the default HTTP/1.1 status header
    if (isset     ($PARAMS["date"   ])) { $date         = $PARAMS["date"        ];                } // enable sending the Date header and set it's value or 'yes' for current date -1s
    if (isset     ($PARAMS["expires"])) { $expires      = $PARAMS["expires"     ];                } // enable sending the Expires header and set to how many seconds from current date it should be set
    if (isset($PARAMS["lastmodified"])) { $lastmodified = $PARAMS["lastmodified"];                } // enable sending the Last-Modified header and set it's value or 'yes' for the actual file modification date
    if (isset($PARAMS["cachecontrol"])) { $cachecontrol = $PARAMS["cachecontrol"];                } // enable sending the Cache-Control header and set it's value
    if (isset     ($PARAMS["file"   ])) { $filename     = $PARAMS["file"        ];                } // set custom file name
    if (isset     ($PARAMS["size"   ])) { $limitsize    = $PARAMS["size"        ];                } // limit the number of bytes to send
    if (isset    ($PARAMS["if-range"])) { $ifrange      = $PARAMS["if-range"    ];                } // control the if-range behavior
    if (isset     ($PARAMS["timeout"])
    and is_numeric($PARAMS["timeout"])) { $timeout      = floatval($PARAMS["timeout"]);           } // set custom timeout
    if (isset     ($PARAMS["rate"   ])
    and is_numeric($PARAMS["rate"   ])) { $rate         = floatval($PARAMS["rate"   ])
                                                        * DEFAULT_CHUNK_SIZE;                     } // set custom size
    if (isset ($PARAMS["contenttype"])) { $contenttype  = $PARAMS["contenttype" ];                } // set custom contenttype
    else                                { $contenttype  = getcontenttype($filename, $contenttype);} // or try to determine what it is based on filename

    if (isset($PARAMS["contentrangeoffset"])) { $offset = intval($PARAMS["offset"   ]);           } // add some bytes to the range end to invoke an invalid range response
    if (isset($PARAMS["forcetimeout"])) { die(setForceTimeoutLock($PARAMS["forcetimeout"]));      } // enable instant "timeout" simulation
    if (isset($PARAMS["id"          ])) { $id           = $PARAMS["id"];                          } // set script execution ID (for use with force timeout)

    if (!($video = fopen($filename, "r"))) { exit(0); }                                             // check if file exists and can be opened for reading

    $filesize = $limitsize?intval($limitsize):filesize($filename);                                  // get filesize (used frequently later on)

    if ($ifrange and $_SERVER["HTTP_IF_RANGE"])                                                     // IF modified ifrange behavior
    {
        switch ($ifrange)
        {
            case "200":                                                                             // case 200
                $SUPPORT_RANGE_HEADER = false;                                                      // disable range support (same as norange=1)
            break;

            case "400":                                                                             // case 400
                header("HTTP/1.1 400 Bad Request");                                                 // send bad request status
                die("Sorry, requested range (".($_SERVER["HTTP_RANGE"]).") is not satisfiable!");   // and exit the script
            break;
        }
    }

    if (isset($_SERVER["HTTP_RANGE"]) and $SUPPORT_RANGE_HEADER)                                    // IF range header is set by client and we (the server) support it
    {
        $RANGE = explode("=", $_SERVER["HTTP_RANGE"]);                                              // split the header into type and range

        // sanity check
        if (count($RANGE, 2))
        {
            $RANGE = explode("-", $RANGE[1]);                                                       // split the range into start and end

            // sanity checks
            if (count($RANGE) == 1)     { array_push($RANGE, $filesize - 1);    }                   // make sure the range end value is set

            if (is_numeric($RANGE[0]))  { $RANGE[0] = intval($RANGE[0]);        }                   // make sure the start value is numeric
            else                        { $RANGE[0] = 0;                        }                   // if not then set to default: 0

            if (is_numeric($RANGE[1]))  { $RANGE[1] = intval($RANGE[1]);        }                   // make sure the end value is numeric
            else                        { $RANGE[1] = $filesize - 1;            }                   // if not then set to default: max (filesize - 1 as per RFC)
        }
        else                            { $RANGE    = array(0, $filesize - 1);  }                   // set default start and end values

        array_unshift($RANGE, $_SERVER["HTTP_RANGE"]);                                              // just because :)

        // set the required response headers for a range request
        array_push($HEADERS, "HTTP/1.1 ".($HTTP_STATUS?$HTTP_STATU:"206 Partial Content"));
        array_push($HEADERS, "Accept-Ranges: ".($acceptranges));

        if ($USE_CONTENTRANGE) { array_push($HEADERS, "Content-Range: bytes ".($RANGE[1])."-".($RANGE[2] + $offset)."/".($filesize)); }
    }
    else                                                                                            // ELSE range header is not set or we (the server) do not support it
    {
        // set headers for a standard http server response
        array_push($HEADERS, "HTTP/1.1 ".($HTTP_STATUS?$HTTP_STATUS:"200 OK"));
        $RANGE = array("not set", 0, $filesize - 1);
    }

    // set additional required and optional headers
    if ($FORCE_CHUNKED) { array_push($HEADERS, "Transfer-Encoding: chunked");                   }   // IF encoding chunked was requested set Transfer-Encoding header
    else                { array_push($HEADERS, "Content-Length: ".($RANGE[2] - $RANGE[1] + 1)); }   // ELSE set the Content-Length header

    if ($USE_ETAG)      { array_push($HEADERS, "ETag: ".(md5(floor(mktime() / 30) * 30)));      }   // IF etag was requested set the ETag header
    if ($date)                                                                                      // IF date was requested
    {
        $date = ($date == "yes")?(httpdate(time() - 1)):$date;                                      // use the date provided or create a data 1s in the past
        array_push($HEADERS, "Date: ".($date)." GMT");                                              // and set the Date header
    }

    if ($FORCE_BROWSER_NOCACHE)                                                                     // set no-cache (and friends) headers to force browser into a non caching media streaming mode
    {
        array_push($HEADERS, "Last-Modified: ".(httpdate(filemtime($filename)))." GMT");
        array_push($HEADERS, "Cache-Control: max-age=0, no-cache, no-store, must-revalidate");
        array_push($HEADERS, "Pragma: no-cache");
        array_push($HEADERS, "Expires: Wed, 11 Jan 1984 05:00:00 GMT");
    }
    else
    {
        if ($cachecontrol) { array_push($HEADERS, "Cache-Control: ".($cachecontrol));           }   // IF cache control was requested set Cache-Control header

        if ($lastmodified)                                                                          // IF last modified was requested
        {
            $lastmodified = ($lastmodified == "yes")?(httpdate(filemtime($filename))):$lastmodified;// use the lastmodified provided or get the actual file modification date
            array_push($HEADERS, "Last-Modified: ".($lastmodified));                                // set Last-Modified header
        }

        if ($expires)                                                                               // IF expiry time was requested
        {
            array_push($HEADERS, "Expires: ".(gmdate("D, j M Y H:i:s T", time() + $expires)));      // set the Expires header
            array_push($HEADERS, "Cache-Control: max-age=".($expires).", must-revalidate");         // and the Cache-Control header with max-age and must-revalidate
        }
    }

    array_push($HEADERS, "Content-Type: ".($contenttype));                                          // add the content type header

    foreach ($HEADERS as $header) { header($header); }                                              // send the headers

    // move the file pointer to the range start (with sanity check)
    if (fseek($video, $RANGE[1]) == -1) { $position = 0;            }                               // failed seek, set position to the beginning of the file
    else                                { $position = $RANGE[1];    }                               // set the position to where we seeked in the file

    // initialize timers and counters
    $chunks     = 0;                                                                                // initialize the chunk counter
    $bytes      = 0;

    if ($rate != 0)
    {
        $usleep     = 10;                                                                           // initialize time interval for sending data chunks to 10 microseconds when data rate is limited
        $chunksize  = round($rate * ($usleep / 1000000));                                           // initialize chunk size based on data rate limit
    }

    logg("\n");
    logg("-------------------");
    logg("Range:             ".($RANGE[0]));
    logg("script id:         ".($id));
    logg("rate:              ".(($rate != 0)?($rate." B/s"):"no limit").", sleep: ".($sleep / 1000000).", usleep: ".($usleep).", chunksize: ".($chunksize));
    logg("timeout:           ".($timeout)."s");
    logg("clear locks:       ".(clearForceTimeoutLocks()));

    $timers     = new TimerManager();
    $timers->start("total");                                                                        // initialize data burst timer
    $timers->start("timeout");                                                                      // initialize the connection timer

    // start the data sending loop
    while (connection_status() == CONNECTION_NORMAL)                                                // WHILE: send data chunks while the connection is OK
    {
        ignore_user_abort(true);                                                                    // allow the client to abort the connection
        set_time_limit($timeout);                                                                   // this doesn't seem to work at all

        if (checkForceTimeoutLock($id))             { logg("exit reason:       forced timeout");   break; } // if forced timeout is enabled
        if ($timers->elapsed("timeout") > $timeout) { logg("exit reason:       timeout"       );   break; } // if timeout, then break
        if (($RANGE[2] + 1) <= $position)           { logg("exit reason:       done"          );   break; } // break if we've sent all the requested data (range end limit)

        if ($rate != 0)                                                                             // adjust chunk size to match data rate
        {
            $chunksize = max($chunksize + (round($timers->elapsed("total") * $rate) - ($position + $chunksize)), 0);
        }

        if (($RANGE[2] + 1) <  $position + $chunksize)                                              // make sure we don't read too much of the file obeying the range end limit,
        {                                                                                           // otherwise the file pointer will be set to far for the next read, also we
            $chunksize = ($RANGE[2] + 1) - $position;                                               // might read past file end
        }

        $timers->start("timeout");                                                                  // reset the connection timer (we want to timeout only on idle connections,
                                                                                                    // eg. video paused, not on active ones, eg. video playing)

        if ($chunksize > 0)                                                                         // send only meaningful data packets
        {
            $timers->start("fread");
            $data       = fread($video, $chunksize);                                                // read the data
            $timers->stop("fread");
            $position  += $chunksize;                                                               // update the current position
            $bytes     += $chunksize;
            $chunks    += 1;                                                                        // increment the chunk counter

            //logg("chunk ".($chunks).": ".($position - $chunksize)."-".($position - 1)." [".(strlen($data))." bytes] (size: ".($chunksize).")");
            // send the data to the client
            print($data);
            $timers->start("flush");
            flush();
            $timers->stop("flush");
            $timers->start("obflush");
            ob_flush();
            $timers->stop("obflush");
        }

        $timers->start("sleep");
        usleep($usleep);                                                                              // wait before sending the next chunk of data
        $timers->stop("sleep");
    }

    $timers->stop("total");
    logg("connection status: ".(connection_status()));
    logg("sent:              ".($bytes)." bytes in ".($chunks)." chunks [avg chunksize: ".($bytes / $chunks)." bytes, rate: ".($bytes / $timers->total("sleep"))." B/s, real rate: ".($bytes / $timers->total("total"))." B/s]");
    logg("bench:             ".($timers->show("fread")).", ".($timers->show("flush")).", ".($timers->show("obflush")).", ".($timers->show("sleep")).", ".($timers->show("total")));
    logg("-------------------");
    fclose($video);                                                                                 // close the file
    exit(0);                                                                                        // exit the script
}

function setForceTimeoutLock($id)                                                                   // FUNC: request forced timeout
{
    if ($id == "") { $id = $_SERVER["REMOTE_ADDR"]; }                                               // IF id not specified use default: client IP

    $ret = file_put_contents("lock/".($id), microtime(true));                                       // write timestamp to lock file
    return $ret;                                                                                    // return bytes written on success FALSE on failure
}

function checkForceTimeoutLock($id)                                                                 // FUNC: check if forced timeout was requested
{
    $lock = "lock/".($id);                                                                          // set lock filename

    if (file_exists($lock))                                                                         // IF lock file exists
    {
        $timestamp = floatval(file_get_contents($lock));                                            // try to read the lock file

        if ($timestamp)                                                                             // IF timestamp read properly
        {
            unlink($lock);                                                                          // remove it
            $ret = (microtime(true) - $timestamp < 2);                                              // return true if lock file was not set over 2s ago (don't use old unremoved locks)
            return $ret;
        }
    }

    return false;                                                                                   // ELSE return false
}

function clearForceTimeoutLocks()                                                                   // FUNC: a cleanup function for stale lock leftovers
{
    $ret = 0;                                                                                       // initialize deleted stale lock files counter

    foreach (glob("lock/*") as $lock)                                                               // walk through lock files
    {
        $timestamp = floatval(file_get_contents($lock));                                            // try to read the lock file

        if (!($timestamp) || ($timestamp > 2))                                                      // IF broken or stale
        {
            unlink($lock);                                                                          // delete
            $ret += 1;                                                                              // increase counter
        }
    }

    return $ret;                                                                                    // return counter
}

function logg($msg)
{
    //error_log($msg."\n", 3, "error.log"); // uncomment to enable logging
}

/*
 * from original range-request.php
 */
function httpdate($timestamp) { return gmdate("D, d M Y H:i:s", $timestamp); }

// WARNING: does not detect video/webm!!!
function getcontenttype($file, $type)
{
    if (function_exists("finfo_file"))
    {
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $type = finfo_file($finfo, $file);
        finfo_close($finfo);
    }

    if ((!($type) || ($type == "application/octet-stream")) && (function_exists("exec")))
    {
        $second_opinion = exec("file -b --mime-type ".escapeshellarg($file), $foo, $return_code);

        if (($return_code == "0") && ($second_opinion)) { $type = $second_opinion; }
    }

    return $type;
}

start($_GET);
?>
