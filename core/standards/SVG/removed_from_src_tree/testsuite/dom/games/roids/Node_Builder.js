/*****
*
*	Node_Builder.js
*	Copyright 2000-2002, Kevin Lindsey
*
*****/

Node_Builder.VERSION = 1.3;

/*****
*
*	constructor
*
*****/
function Node_Builder(type, attributes, text) {
	this.type       = type;
	this.attributes = attributes;
	this.text       = text;

	this.node  = null;
	this.tnode = null;
}


/*****
*
*	appendTo
*
*****/
Node_Builder.prototype.appendTo = function(parent) {
	var SVGDoc = parent.ownerDocument;
	var node   = SVGDoc.createElementNS(
        "http://www.w3.org/2000/svg",
        this.type
    );

	this.node = node;

	for (var a in this.attributes)
		node.setAttributeNS(null, a, this.attributes[a]);

	if (this.text) {
		var tnode = SVGDoc.createTextNode(this.text);

		node.appendChild(tnode);
		this.tnode = tnode;
	}

	if (parent) parent.appendChild(this.node);
};


/*****
*
*	remove
*
*****/
Node_Builder.prototype.remove = function() {
	if (this.node) this.node.parentNode.removeChild(this.node);

	this.type       = "";
	this.attributes = null;
    this.text       = null;
	this.node       = null;
	this.tnode      = null;
};
