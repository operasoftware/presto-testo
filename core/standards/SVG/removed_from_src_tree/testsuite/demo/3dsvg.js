/*****
* 3D SVG Library
* Sjoerd Visscher
* http://w3future.com/
*/


var SVG_NS ="http://www.w3.org/2000/svg";


Function.prototype.inherit = function(c) {
  for (var i in c.prototype)
    this.prototype[i] = c.prototype[i];
}



function Point(x, y, z)
{
  this.x0 = this.x = x;
  this.y0 = this.y = y;
  this.z0 = this.z = z;
};

Point.prototype =
{
  transform0: function(a, b, r)
  {
    var z = (Math.cos(b)*this.z0 + Math.sin(b)*this.y0);
    this.y = r * (Math.cos(b)*this.y0 - Math.sin(b)*this.z0);
    this.x = r * (Math.cos(a)*this.x0 + Math.sin(a)*z);
    this.z = r * (Math.cos(a)*z - Math.sin(a)*this.x0);
  },
  
  to: function(p)
  {
    return new Vector(p.x - this.x, p.y - this.y, p.z - this.z);
  },
  
  add: function(dir, f)
  {
    if (f === undefined) f = 1;
    return new Point(this.x + f*dir.x, this.y + f*dir.y, this.z + f*dir.z);
  },

  render: function()
  {
    return new VisiblePoint(this.x, this.y, this.z);
  },
  
  to2d: function()
  {
    this.x2d = this.x*2/(this.z+7);
    this.y2d = -0.4+(0.4-this.y)*2/(this.z+7);
  },
  
  setF: function() {}
};

function AnimatedPoint(p0, p1)
{
  this.p0 = p0;
  this.p1 = p1;
  this.f = 0;
  Point.apply(this, [p0.x, p0.y, p0.z]);
};

AnimatedPoint.inherit(Point);

AnimatedPoint.prototype.setF = function(f1)
{
  this.f = f1; var f0 = 1-f1;
  this.x0 = this.p0.x0*f0 + this.p1.x0*f1;
  this.y0 = this.p0.y0*f0 + this.p1.y0*f1;
  this.z0 = this.p0.z0*f0 + this.p1.z0*f1;
};



function Vector(x,y,z)
{
  Point.apply(this, arguments);
};

Vector.prototype = new Point();

Vector.prototype.times = function(f)
{
  return new Vector(f*this.x, f*this.y, f*this.z);
};  

Vector.prototype.normalize = function()
{
  return this.times(1/Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z))
};

Vector.prototype.crossProduct = function(v)
{
  return new Vector(
    this.y*v.z - this.z*v.y,
    this.z*v.x - this.x*v.z,
    this.x*v.y - this.y*v.x);
};



function Poly(points)
{
  this.points = points;
};

Poly.prototype = 
{
  calculateNormal: function()
  {
    return this.normal = this.points[1].to(this.points[0]).crossProduct(
      this.points[1].to(this.points[2])).normalize();
  }
};



function VisiblePoly(points)
{
  Poly.apply(this, arguments);
  this.elt = document.createElementNS(SVG_NS, "polygon");
  g_polys.appendChild(this.elt);
  this.shadow = document.createElementNS(SVG_NS, "polygon");
  this.shadow.setAttribute("fill", "black");
  g_polys_shadow.appendChild(this.shadow);
};
VisiblePoly.prototype = new Poly();

VisiblePoly.prototype.to2d = function()
{
  var a = [];
  for (var i=0;i<this.points.length;i++)
  {
    a.push(this.points[i].x2d);
	a.push(this.points[i].y2d);
  }
  this.elt.setAttribute("points", a.join(" "));
      
  var fill;
  if (this.normal.z>0)
    fill = "none";
  else 
  {
    var diff = this.normal.y+0.8;
    if (diff<0) diff=0;
    var spec = (0.6*this.normal.y+0.8*-this.normal.z);
    if (spec<0) spec=0;
    spec*=spec;
    spec*=spec;
    spec*=spec;
    spec*=spec;
    fill = "rgb("+Math.floor(80+diff*100+spec*100)+","+Math.floor(50+diff*120+spec*100)+","+Math.floor(50+diff*120+spec*100)+")";
  }
  this.elt.setAttribute("fill", fill);
};

VisiblePoly.prototype.shadowTo2d = function()
{
  var a = [];
  for (var i=0;i<this.points.length;i++)
  {
    a.push(this.points[i].x2d);
	a.push(this.points[i].y2d);
  }
  this.shadow.setAttribute("points", a.join(" "));
};
