#media sources
dataurl_src = "'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAAAA'"

throttler = "'/core/standards/web-apps/media/network/range-request-log/range-request.php?rate=100000&fileloc=";

mp4_src = throttler + "../../support/preload.mp4&nocache=' + Math.random()";
ogg_src = throttler + "../../support/preload.ogv&nocache=' + Math.random()";
webm_src = throttler + "../../support/preload.webm&nocache=' + Math.random()";

metadata_networkstate_order = "eval('/^(' + HTMLMediaElement.NETWORK_LOADING + ' )+(' + HTMLMediaElement.NETWORK_IDLE + ' )+$/g')"
metadata_networkstate_order_dataurl = "eval('/^(' + HTMLMediaElement.NETWORK_IDLE + ' )+$/g')"

metadata_readystate_order = "eval('/^(' + HTMLMediaElement.HAVE_NOTHING + ' )+' + HTMLMediaElement.HAVE_METADATA + '(' + HTMLMediaElement.HAVE_CURRENT_DATA + ' )+$/g')"
metadata_readystate_order_dataurl = "eval('/^(' + HTMLMediaElement.HAVE_NOTHING + ' )+(' + HTMLMediaElement.HAVE_ENOUGH_DATA + ' )+$/g')"

timeout = 10000
timeout_dataurl = 5000

testsuite = {
    '*' : [
        {'test_suffix' : 'dataurl', 'test_mapping' : {'media_type' : 'wave', 'media_src' : dataurl_src, 'timeout' : timeout_dataurl}},
        {'test_suffix' : 'mp4', 'test_mapping' : {'media_type' : 'mp4', 'media_src' : mp4_src, 'timeout' : timeout}},
        {'test_suffix' : 'ogg', 'test_mapping' : {'media_type' : 'ogg', 'media_src' : ogg_src, 'timeout' : timeout}},
        {'test_suffix' : 'webm', 'test_mapping' : {'media_type' : 'webm', 'media_src' : webm_src, 'timeout' : timeout}}
        ],
    'preload-metadata-networkstate-order.tpl' : [
        {'test_suffix' : 'dataurl', 'test_mapping' : {'media_type' : 'wave', 'media_src' : dataurl_src, 'states_expected' : metadata_networkstate_order_dataurl, 'start_state' : 'metadata', 'end_event' : 'suspend', 'test_state_type' : 'networkState', 'timeout' : timeout_dataurl}},
        {'test_suffix' : 'mp4', 'test_mapping' : {'media_type' : 'mp4', 'media_src' : mp4_src, 'states_expected' : metadata_networkstate_order, 'start_state' : 'metadata', 'end_event' : 'suspend', 'test_state_type' : 'networkState', 'timeout' : timeout}},
        {'test_suffix' : 'ogg', 'test_mapping' : {'media_type' : 'ogg', 'media_src' : ogg_src, 'states_expected' : metadata_networkstate_order, 'start_state' : 'metadata', 'end_event' : 'suspend', 'test_state_type' : 'networkState', 'timeout' : timeout}},
        {'test_suffix' : 'webm', 'test_mapping' : {'media_type' : 'webm', 'media_src' : webm_src, 'states_expected' : metadata_networkstate_order, 'start_state' : 'metadata', 'end_event' : 'suspend', 'test_state_type' : 'networkState', 'timeout' : timeout}}
        ],
    'preload-metadata-readystate-order.tpl' : [
        {'test_suffix' : 'dataurl', 'test_mapping' : {'media_type' : 'wave', 'media_src' : dataurl_src, 'states_expected' : metadata_readystate_order_dataurl, 'start_state' : 'metadata', 'end_event' : 'suspend', 'test_state_type' : 'readyState', 'timeout' : timeout_dataurl}},
        {'test_suffix' : 'mp4', 'test_mapping' : {'media_type' : 'mp4', 'media_src' : mp4_src, 'states_expected' : metadata_readystate_order, 'start_state' : 'metadata', 'end_event' : 'suspend', 'test_state_type' : 'readyState', 'timeout' : timeout}},
        {'test_suffix' : 'ogg', 'test_mapping' : {'media_type' : 'ogg', 'media_src' : ogg_src, 'states_expected' : metadata_readystate_order, 'start_state' : 'metadata', 'end_event' : 'suspend', 'test_state_type' : 'readyState', 'timeout' : timeout}},
        {'test_suffix' : 'webm', 'test_mapping' : {'media_type' : 'webm', 'media_src' : webm_src, 'states_expected' : metadata_readystate_order, 'start_state' : 'metadata', 'end_event' : 'suspend', 'test_state_type' : 'readyState', 'timeout' : timeout}}
        ]
    }
