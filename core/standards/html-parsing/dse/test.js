var namespaces = {
    "html":"http://www.w3.org/1999/xhtml",
    "mathml":"http://www.w3.org/1998/Math/MathML",
    "svg":"http://www.w3.org/2000/svg",
    "xlink":"http://www.w3.org/1999/xlink",
    "xml":"http://www.w3.org/XML/1998/namespace",
    "xmlns":"http://www.w3.org/2000/xmlns/"
};

var prefixes = {};
for (var prefix in namespaces) {
  if (namespaces.hasOwnProperty(prefix)) {
    prefixes[namespaces[prefix]] = prefix;
  }
}
prefixes[namespaces["mathml"]] = "math";

function format(format_string) {
  var insertions = Array.prototype.slice.call(arguments, 1);
  var regexp = /%s/g;
  var match_count = 0;
  var rv = format_string.replace(regexp, function(match) {
                                   var rv = insertions[match_count];
                                   match_count++;
                                   return rv;
                                 });
  return rv;
}

function test_serializer(element) {
  element.normalize();
  var lines = [];
  function serialize_element(element, indent) {
    var indent_spaces = (new Array(indent)).join(" ");
    switch(element.nodeType) {
      case Node.DOCUMENT_TYPE_NODE:
        if (element.name) {
          if (element.publicId || element.systemId) {
            var publicId = element.publicId ? element.publicId : "";
            var systemId = element.systemId ? element.systemId : "";
            lines.push(format("|%s<!DOCTYPE %s \"%s\" \"%s\">", indent_spaces,
                                element.name, publicId, systemId));
          } else {
            lines.push(format("|%s<!DOCTYPE %s>", indent_spaces,
                                element.name));
          }
        } else {
          lines.push(format("|%s<!DOCTYPE >", indent_spaces));
        }
        break;
      case Node.DOCUMENT_NODE:
        lines.push("#document");
        break;
      case Node.DOCUMENT_FRAGMENT_NODE:
        lines.push("#document-fragment");
        break;
      case Node.COMMENT_NODE:
        lines.push(format("|%s<!-- %s -->", indent_spaces, element.nodeValue));
      break;
      case Node.TEXT_NODE:
        lines.push(format("|%s\"%s\"", indent_spaces, element.nodeValue));
        break;
      case Node.ELEMENT_NODE:
        if (element.getAttribute("data-skip") !== null) {
          return;
        }
        if (element.namespaceURI !== null && element.namespaceURI !== namespaces.html) {
          var name = format("%s %s", prefixes[element.namespaceURI],
                            element.localName);
        } else {
          var name = element.localName;
        }
        lines.push(format("|%s<%s>", indent_spaces, name));

        var attributes = Array.prototype.map.call(
			   element.attributes,
			   function(attr) {
			     var name = (attr.namespaceURI ? prefixes[attr.namespaceURI] + " " : "") +
					  attr.localName;
			     return [name, attr.value];
			   });
        attributes.sort(function (a, b) {
			  var x = a[0];
			  var y = b[0];
			  if (x === y) {
	                    return 0;
			  }
			  return x > y ? 1 : -1;
		        });

        attributes.forEach(
          function(attr) {
	    var indent_spaces = (new Array(indent + 2)).join(" ");
            lines.push(format("|%s%s=\"%s\"", indent_spaces, attr[0], attr[1]));
          }
        );
        break;
    }
    indent += 2;
    Array.prototype.forEach.call(element.childNodes,
                                 function(node) {
                                   serialize_element(node, indent);
                                 });
  }
  serialize_element(element, 0);
  return lines.join("\n");
}

function test_in_data_uri(uri_encoded_input, escaped_expected) {
  var iframe = document.createElement("iframe");
  iframe.style.display = "none";
  document.body.appendChild(iframe);
  var expected = decodeURIComponent(escaped_expected);

  iframe.src = "data:text/html;charset=utf8," + uri_encoded_input;
  iframe.onload = function() {
    var frame = this;
    t.step(function() {
             var serialized_dom = test_serializer(frame.contentDocument);
             harness.add_completion_callback(function(tests) {
                                               print_diffs(serialized_dom);
                                             });
             assert_equals(serialized_dom, expected);
             t.done();
           }
          );
    };
}

function test_innerHTML(container, input_string, escaped_expected) {
  var components = container.split(" ");
  var container_elem = null;
  if (components.length > 1) {
    var namespace = {
      "html":"http://www.w3.org/1999/xhtml",
      "mathml":"http://www.w3.org/1998/Math/MathML",
      "svg":"http://www.w3.org/2000/svg",
      "xlink":"http://www.w3.org/1999/xlink",
      "xml":"http://www.w3.org/XML/1998/namespace",
      "xmlns":"http://www.w3.org/2000/xmlns/"
    }[components[0]];
    container_elem = document.createElementNS(namespace,
                                              components[0] + ":" +
                                              components[1]);
  } else {
     container_elem = document.createElement(container);
  }
  container_elem.innerHTML = input_string;
  if (components.length > 1) {
    alert(container_elem.innerHTML);
  }
  var expected = decodeURIComponent(escaped_expected);
  var serialized_dom = test_serializer(container_elem);
  serialized_dom = convert_innerHTML(serialized_dom);
  harness.add_completion_callback(function(tests) {
                                    print_diffs(serialized_dom);
                                  });
  assert_equals(serialized_dom, expected);
}

function convert_innerHTML(serialized_dom) {
  var lines = serialized_dom.split("\n");
  lines[0] = "#document";
  return lines.join("\n");
}

function print_diffs(serialized_dom) {
  var expected_node = document.querySelector("div#expected > pre");
  var actual_node = document.querySelector("div#actual > pre");

  var diffs = mark_diffs(expected_node.textContent, serialized_dom);
  var expected_dom = template.render(diffs[0]);
  var actual_dom = template.render(diffs[1]);

  expected_node.replaceChild(expected_dom, expected_node.querySelector("code"));
  actual_node.replaceChild(actual_dom, actual_node.querySelector("code"));
}