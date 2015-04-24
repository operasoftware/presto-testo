/*****
*
*	KEL_Game_Lib.js
*	Copyright 2000, Kevin Lindsey
*
*****/

/*****
*
*	Globals
*
*****/
var scheduler   = new Scheduler(30);
var key_handler = new Key_handler();


/*****	Key_handler Class	*****/

/*****
*
*	Key_handler constructor
*
*****/
function Key_handler() {
	this.tasks = new Array();
}


/*****
*
*	add_task
*
*****/
Key_handler.prototype.add_task = function(task, keycode) {
	for (var i = 1; i < arguments.length; i++) {
		this.tasks[arguments[i]] = task;
	}
};


/*****
*
*	clear_all
*
*****/
Key_handler.prototype.clear_all = function() {
	this.tasks = new Array();
};


/*****
*
*	process
*
*****/
Key_handler.process = function(evt) {
	var keycode = evt.keyCode;

	if ( key_handler.tasks[keycode] != null ) {
		key_handler.tasks[keycode](evt);
	} else {
		//alert(keycode);
	}
};


/*****	Projectile Class	*****/

/*****
*
*	Projectile constructor
*
*****/
function Projectile(x, y, width, height, parent, shapes) {
	var obj;
    var svgns = "http://www.w3.org/2000/svg";

	this.x              = x;
	this.y              = y;
	this.width          = width;
	this.height         = height;
	this.parent         = parent;
	this.angle          = 0;
	this.x_velocity     = 0;
	this.y_velocity     = 0;
	this.speed_max      = 10;
	this.angle_velocity = 0;
	this.shapes         = shapes;
	this.translate      = svgDocument.createElementNS(svgns, "g");
	this.rotate         = svgDocument.createElementNS(svgns, "g");

	for (var i = 0; i < shapes.length; i++) {
		var obj = shapes[i];

		obj.appendTo(this.rotate);
		this.advance();
		this.translate.appendChild(this.rotate);
		this.parent.appendChild(this.translate);
	}
}


/*****
*
*	remove
*
*****/
Projectile.prototype.remove = function() {
	this.parent.removeChild(this.translate);
};


/*****
*
*	speed
*
*****/
Projectile.prototype.speed = function() {
	return Math.sqrt(
		this.x_velocity*this.x_velocity +
		this.y_velocity*this.y_velocity
	);
};


/*****
*
*	distance_from
*
*****/
Projectile.prototype.distance_from = function(x, y) {
	var x_delta = this.x - x;
	var y_delta = this.y - y;

	return Math.sqrt(x_delta*x_delta + y_delta*y_delta);
};


/*****
*
*	advance
*
*****/
Projectile.prototype.advance = function() {
	this.x     = Projectile.wrap(this.x     + this.x_velocity,    -this.width,  screen_width  + this.width);
	this.y     = Projectile.wrap(this.y     + this.y_velocity,    -this.height, screen_height + this.height);
	this.angle = Projectile.wrap(this.angle + this.angle_velocity,  0, 359);

	this.translate.setAttributeNS(
        null,
        "transform", "translate(" + this.x + "," + this.y + ")"
    );
	this.rotate.setAttributeNS(
        null,
        "transform", "rotate(" + this.angle + ")"
    );
};


/*****
*
*	rvelocity
*
*****/
Projectile.prototype.rvelocity = function(deltax, deltay) {
	this.x_velocity += deltax;
	this.y_velocity += deltay;
	if (this.speed() > this.speed_max) {
		this.x_velocity -= deltax;
		this.y_velocity -= deltay;
	}
};


/*****
*
*	rrotation
*
*****/
Projectile.prototype.rrotation = function(delta) {
	this.angle_velocity += delta;
};


/*****
*
*	wrap
*
*****/
Projectile.wrap = function(num, min, max) {
	if (num < min) {
		num = max;
	} else if (num > max) {
		num = min;
	}

	return num;
};
