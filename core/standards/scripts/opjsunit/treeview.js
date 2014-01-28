var gNextNodeId = 1;

function TreeNode() {
  this.parent = null;
  this.children = [];
  this.cols = [];
  this.id = gNextNodeId.toString();
  gNextNodeId++;
}

TreeNode.prototype.toString = function() {
  return "[object TreeNode " + this.id + "]";
};

TreeNode.prototype.append = function(node) {
  node.parent = this;
  this.children.push(node);
};

TreeNode.prototype.previous_sibling = function() {
  if (this.parent === null) {
    return null;
  } else {
    var idx = this.parent.children.indexOf(this);
    if (idx === 0) {
      return null;
    } else {
      return this.parent.children[idx-1];
    }
  }
};

TreeNode.prototype.next_sibling = function() {
  if (this.parent === null) {
    return null;
  } else {
    var idx = this.parent.children.indexOf(this);
    if (idx === this.parent.children.length - 1) {
      return null;
    } else {
      return this.parent.children[idx+1];
    }
  }
};

TreeNode.prototype.path = function() {
  var components = [];
  var node = this;
  while (node) {
    components.push(node.text);
    node = node.parent;
  }
  return components.reverse().join("/");
};

TreeNode.prototype.is_leaf = function() {
  return this.children.length === 0;
};

function TreeWalker(root) {
  this.current_node = null;
  this.root = root;
  this.done = false;
};

TreeWalker.prototype.next = function() {
  if (this.done) {
    return null;
  }

  var current_node = this.current_node;

  if (current_node === null) {
    this.current_node = this.root;
    return this.current_node;
  }
  if (current_node.children.length !== 0) {
    this.current_node = current_node.children[0];
    return this.current_node;
  } else {
    while(current_node.next_sibling() === null) {
      current_node = current_node.parent;
      if (current_node === this.root) {
	this.done = true;
	return null;
      }
    }
    this.current_node = current_node.next_sibling();
    return this.current_node;
  }
};

function TreeRenderer(document, root_node, opts) {
  this.doc = document;
  this.root = root_node;
  this.opts = opts;
  this.node_map = {};
  this.data = null;
}

TreeRenderer.prototype.render = function(tree_root) {
  this.data = tree_root;
  while(this.root.childNodes.length) {
    this.root.removeChild(this.root.childNodes[0]);
  }
  this.render_subtree(this.root, tree_root, 0);
};

TreeRenderer.prototype.render_subtree = function(parent_node,
						 subtree_root, depth) {
  var subtree_node;
  if (subtree_root.is_leaf() && subtree_root.previous_sibling() !== null) {
    subtree_node = parent_node.lastChild;
  } else {
    subtree_node = this.doc.createElement("ul");
    parent_node.appendChild(subtree_node);
  }

  var row_node = this.make_row(subtree_root, depth < this.opts.default_open_depth);
  subtree_node.appendChild(row_node);

  if (depth > this.opts.default_open_depth) {
      subtree_node.setAttribute("hidden", "hidden");
  }

  if (!subtree_root.is_leaf()) {
    for(var i=0; i<subtree_root.children.length; i++) {
      this.render_subtree(row_node, subtree_root.children[i], depth + 1);
    }
  }

};

TreeRenderer.prototype.refresh_row= function(tree_node) {
  var row_node = this.node_map[tree_node.id];
  var container = row_node.parentNode;
  var new_row_node = this.make_row(tree_node, row_node.getAttribute("data-expanded") === "true");


  if (row_node.hasAttribute("hidden")) {
    new_row_node.setAttribute("hidden", "hidden");
  }

  //Reconstruct children
  var len = row_node.childNodes.length;
  var skip_index = 0;
  for (var i=0; i<len; i++) {
    var child = row_node.childNodes[skip_index];
    if (child.nodeType === child.ELEMENT_NODE &&
	  child.nodeName.toLowerCase() === "ul") {
      new_row_node.appendChild(child);
    } else {
      skip_index += 1;
    }
  }
  container.replaceChild(new_row_node, row_node);
  return new_row_node;
};

TreeRenderer.prototype.make_row = function(tree_node, expanded) {

  if (expanded === undefined) {
    expanded = true;
  }

  var row = this.doc.createElement("li");

  row.setAttribute("class", "row");

  this.node_map[tree_node.id] = row;

  if (tree_node.is_leaf()) {
    row.setAttribute("class", "leaf");
  } else {
    row.setAttribute("class", "branch");
  }

  //XXX split this next bit into a different function so that
  //ros can be recreated without altering their container or removing children

  if (!tree_node.is_leaf()) {
    var arrow = document.createElement("span");
    //Need to do something for hidden/unhidden children with the
    //onclick handler from below
    var disclosure = document.createElement("span");
    disclosure.setAttribute("class", "disclosure");

    if (expanded) {
      disclosure.textContent = "▾";
      disclosure.setAttribute("data-expanded", "true");
    } else {
      disclosure.textContent = "▸";
      disclosure.setAttribute("data-expanded", "false");
    }

    function onclick(e) {
      if (disclosure.getAttribute("data-expanded") === "true") {
	disclosure.textContent = "▸";
	disclosure.setAttribute("data-expanded", "false");
      } else {
	disclosure.textContent = "▾";
	disclosure.setAttribute("data-expanded", "true");
      }
      for (var i=0; i<row.childNodes.length; i++) {
	var element = row.childNodes[i];
	if (element.nodeType !== element.ELEMENT_NODE) {
	  continue;
	} else if (element.nodeName.toLowerCase() == "ul" ||
	      element.nodeName.toLowerCase() == "li") {
	      if (element.hasAttribute("hidden")) {
		element.removeAttribute("hidden");
	      } else {
		element.setAttribute("hidden", "hidden");
	      }
	  }
	}
	e.stopPropagation();
      };

    disclosure.addEventListener("click", onclick, false);
    row.appendChild(disclosure);


  }

  for (var i=0; i<tree_node.cols.length; i++) {
    var col = tree_node.cols[i];
    if (col.type === "boolean") {
      var checkbox = this.doc.createElement("input");
      checkbox.type = "checkbox";
      checkbox.setAttribute("class", "col");
      checkbox.checked = col.value;
      if (tree_node.is_leaf()) {
	var eventListener = function(e) {
	  col.value = e.currentTarget.checked;
	};
      } else {
	var ts = this;
	var eventListener = function(e) {
	  //event listsner that selects/unselects all subtests
	  var checked = e.currentTarget.checked;
	  var tree_walker = new TreeWalker(tree_node);
	  var node = tree_walker.next();
	  //Skip the root node
	  node = tree_walker.next();
	  while(node != null) {
	    var j_offfset = node.is_leaf()?0:1;
	    for(var j=0; j<node.cols.length; j++) {
	      var node_col = node.cols[j];
	      if(node_col.type == "boolean") {
		ts.node_map[node.id].childNodes[j + j_offfset].checked = checked;
		node_col.value = checked;
	      }
	    }
	    node=tree_walker.next();
	  }
	};
      }
      checkbox.addEventListener("change", eventListener, false);
      row.appendChild(checkbox);

    } else if (col.type === "link") {
      var a = this.doc.createElement("a");
      a.setAttribute("href", col.href);
      a.setAttribute("class", "col");
      a.textContent = col.value;
      row.appendChild(a);
    } else if (col.type === "text") {
      var span = this.doc.createElement("span");
      span.textContent = col.value;
      span.setAttribute("class", "col");
      for (p in col.attrib) {
	if (p === "class") {
	  span.setAttribute(p, span.getAttribute("class") + " " + col.attrib[p]);
	} else {
	  span.setAttribute(p, span.getAttribute("class") + " " + col.attrib[p]);
	}
      }
      row.appendChild(span);
    }
  }
  return row;
};

function log(data) {
  document.getElementById("log").textContent += data + "\n";
}

