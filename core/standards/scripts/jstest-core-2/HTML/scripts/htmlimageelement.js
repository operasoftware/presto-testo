/* Tests for DOM 2 HTML 'HTMLImageElement' object.
*/

var cvs = "$Id: htmlimageelement.js 37306 2008-12-10 16:49:32Z arntj $";

function main()
{
testmodule ("HTMLImageElement", cvs);

try {

    var phase = get_phase();
	
	var i0 = document.getElementById("noImage");
	var i = document.getElementById("myImage");

  	testcase( "object" );

  	test("class",i,"[object HTMLImageElement]");

	testcase ("Property defined? (HTML img tag - first image)");

	if(phase >= 1)
	{
		tdef ("border", i.border);
		tdef ("height", i.height);
		tdef ("src", i.src);
		tdef ("width", i.width);
		tdef ("name", i.name);
		tdef ("align", i.align);
		tdef ("alt", i.alt);
		tdef ("hspace", i.hspace);
		tdef ("isMap", i.isMap);
		tdef ("useMap", i.useMap);
		tdef ("vspace", i.vspace);
	}
	if(phase >= 2)
	{
		tdef ("longDesc", i.longDesc);
	}

	testcase ("Default property value (HTML img tag - empty image)");

	if(phase >= 1)
	{
        test ("border", i0.border, 0);
        test ("height", i0.height, 0);
        test ("src", i0.src, "");
        test ("width", i0.width, 0);
		test ("name", i0.name, "");
        test ("align", i0.align, "");
        test ("alt", i0.alt, "");
        test ("hspace", i0.hspace, 0);
        test ("isMap", i0.isMap, false);
        test ("useMap", i0.useMap, "");
        test ("vspace", i0.vspace, 0);
	}
	testcase ("Default property value (HTML img tag - first image)");

	if(phase >= 1)
	{
        test ("border", i.border, 0);
        test ("height", i.height, 39);
        test ("src", i.src, "http://testsuites.oslo.opera.com/resources/images/opera.png");
        test ("width", i.width, 102);
		test ("name", i.name, "");
        test ("align", i.align, "");
        test ("alt", i.alt, "");
        test ("hspace", i.hspace, 0);
        test ("isMap", i.isMap, false);
        test ("useMap", i.useMap, "");
        test ("vspace", i.vspace, 0);
	}
	if(phase >= 2)
	{
        test ("longDesc", i.longDesc, "");
	}

	testcase ("Property value, all attributes set (HTML img tag - second image)");
	
	var i2 = document.getElementById ("myImage2");

	if(phase >= 1)
	{
        test ("border", i2.border, 1);
        test ("height", i2.height, 23);
        test ("src", i2.src, "http://testsuites.oslo.opera.com/resources/images/opera.png");
        test ("width", i2.width, 100);
		test ("name", i2.name, "myImage2");
		test ("align", i2.align, "middle");
        test ("alt", i2.alt, "Opera Logo");
        test ("hspace", i2.hspace, 10);
        test ("isMap", i2.isMap, true);
        test ("useMap", i2.useMap, get_protocol_and_host() + get_modulepath("HTML","HTMLImageElement.html#myMap"));
        test ("vspace", i2.vspace, 15);
	}
	if(phase >= 2)
	{
        test ("longDesc", i2.longDesc, get_protocol_and_host() + get_modulepath("HTML", "imagedesc.html"));
	}
	
	testcase ("Changed property value (HTML img tag - second image)");

	if(phase >= 1)
	{
		i2.border = 0;
		i2.height = 20;
		i2.src = "http://www.opera.com/graphics/logos/linux.gif";
		i2.width = 18;
		i2.name = "newnameImage2";
		i2.align = "left";
		i2.alt = "Penguins";
		i2.hspace = 20;
	}
	if(phase >= 2)
	{
		i2.isMap = false;
		i2.longDesc = "http://www.opera.com/longDesc.html";
		i2.useMap = "";
		i2.vspace = 30;
	}		

	if(phase >= 1)
	{
        test ("border", i2.border, 0);
        test ("height", i2.height, 20);
        test ("src", i2.src, "http://www.opera.com/graphics/logos/linux.gif");
        test ("width", i2.width, 18);
		test ("name", i2.name, "newnameImage2");
        test ("align", i2.align, "left");
        test ("alt", i2.alt, "Penguins");
        test ("hspace", i2.hspace, 20);
	}
	if(phase >= 2)
	{
        test ("isMap", i2.isMap, false);
        test ("longDesc", i2.longDesc, "http://www.opera.com/longDesc.html");
        test ("useMap", i2.useMap, "");
        test ("vspace", i2.vspace, 30);
	}
	
	testcase ("Create new HTMLImageElement, set and read attributes directly");
	var newimg = document.createElement ("img");
	
	
	if(phase >= 1)
	{
		newimg.border = 1;
		newimg.height = 50;
		newimg.src = "http://www.opera.com/graphics/icons/phone.gif";
		newimg.width = 40;
		newimg.name = "newImage";
		newimg.align = "top";
		newimg.alt = "Inserted image";
		newimg.hspace = 10;
	}
	if(phase >= 2)
	{
		newimg.vspace = 10;
		newimg.longDesc = "http://www.nokia.com/";
		newimg.isMap = false;
		newimg.useMap = "";
	}
	
	if(phase >= 1)
	{
        test ("border", newimg.border, 1);
        test ("height", newimg.height, 50);
        test ("src", newimg.src, "http://www.opera.com/graphics/icons/phone.gif");
        test ("width", newimg.width, 40);
		test ("name", newimg.name, "newImage");
        test ("align", newimg.align, "top");
        test ("alt", newimg.alt, "Inserted image");
        test ("hspace", newimg.hspace, 10);
	}
	if(phase >= 2)
	{
        test ("isMap", newimg.isMap, false);
        test ("longDesc", newimg.longDesc, "http://www.nokia.com/");
        test ("useMap", newimg.useMap, "");
        test ("vspace", newimg.vspace, 10);
	}
	
	testcase ("Insert new image element into document using appendChild()");
	var theDiv = document.getElementById ("myDiv");
	theDiv.appendChild (newimg);
	test("First appended image",theDiv.lastChild,newimg)

	testcase ("Create new HTMLImageElement, set and read attributes using DOM access methods");
    var newimg2 = document.createElement ("img");
		
	if(is_phase(1))
	{
		var img2_src = newimg2.src;

        newimg2.setAttribute ("src", "http://www.opera.com/graphics/icons/vertical_sm.gif");
		
		// Pick up default values before setting attributes
		
		var img2_border = newimg2.border;
		var img2_height = newimg2.height;
		var img2_width  = newimg2.width;
		var img2_name   = newimg2.name;
		var img2_align  = newimg2.align;
		var img2_alt    = newimg2.alt;
		var img2_hspace = newimg2.hspace;
		

        newimg2.setAttribute ("border", 0);
        newimg2.setAttribute ("height", 180);
        newimg2.setAttribute ("width", 122);
		newimg2.setAttribute ("name", "newImage2");
        newimg2.setAttribute ("align", "bottom");
        newimg2.setAttribute ("alt", "Another inserted image");
        newimg2.setAttribute ("hspace", 10);
	}		
	if(phase >= 2)
	{
        newimg2.setAttribute ("vspace", 10);
        newimg2.setAttribute ("longDesc", "http://www.psion.com/");
        newimg2.setAttribute ("isMap", false);
        newimg2.setAttribute ("useMap", "");
	}
	if(is_phase(1))
	{
        test ("border", newimg2.getAttribute("border"), "0");
        test ("height", newimg2.getAttribute("height"), "180");
        test ("src", newimg2.getAttribute("src"), "http://www.opera.com/graphics/icons/vertical_sm.gif");
        test ("width", newimg2.getAttribute("width"), "122");
		test ("name", newimg2.getAttribute("name"), "newImage2");
        test ("align", newimg2.getAttribute("align"), "bottom");
        test ("alt", newimg2.getAttribute("alt"), "Another inserted image");
        test ("hspace", newimg2.getAttribute("hspace"), "10");
	}		
	if(phase >= 2)
	{
        test ("isMap", newimg2.getAttribute ("isMap"), "false");
        test ("longDesc", newimg2.getAttribute("longDesc"), "http://www.psion.com/");
        test ("useMap", newimg2.getAttribute("useMap"), "");
        test ("vspace", newimg2.getAttribute("vspace"), "10");
	}
	
	theDiv.appendChild (newimg2);
	test("Second appended image",theDiv.lastChild,newimg2)

	testcase ("Attribute exists? (using Element.hasAttribute())");

	if(phase >= 1)
	{
        test ("border", newimg2.hasAttribute("border"), true);
        test ("height", newimg2.hasAttribute("height"), true);
        test ("src", newimg2.hasAttribute("src"), true);
        test ("width", newimg2.hasAttribute("width"), true);
		test ("name", newimg2.hasAttribute("name"), true);
        test ("align", newimg2.hasAttribute("align"), true);
        test ("alt", newimg2.hasAttribute("alt"), true);
        test ("hspace", newimg2.hasAttribute("hspace"), true);
	}
	if(phase >= 2)
	{
        test ("isMap", newimg2.hasAttribute ("isMap"), true);
        test ("longDesc", newimg2.hasAttribute("longDesc"), true);
        test ("useMap", newimg2.hasAttribute("useMap"), true);
        test ("vspace", newimg2.hasAttribute("vspace"), true);
	}
	
	testcase ("Remove attribute using Element.removeAttribute()");
    	
	if(phase >= 1)
	{
        newimg2.removeAttribute ("border");
        newimg2.removeAttribute ("height");
        newimg2.removeAttribute ("width");
		newimg2.removeAttribute ("name");
		newimg2.removeAttribute ("align");
        newimg2.removeAttribute ("alt");
        newimg2.removeAttribute ("hspace");
	}
	if(phase >= 2)
	{
        newimg2.removeAttribute ("vspace");
        newimg2.removeAttribute ("longDesc");
        newimg2.removeAttribute ("isMap");
        newimg2.removeAttribute ("useMap");
	}
	
	if(phase >= 1)
	{
	    // After remove, attributes should have default values
		// http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-745549614
		
        test ("border", newimg2.border, img2_border);
        test ("height", newimg2.height, img2_height);
        test ("width",  newimg2.width,  img2_width);
        test ("name",   newimg2.name,   img2_name);
        test ("align",  newimg2.align,   img2_align);
        test ("alt",    newimg2.alt,     img2_alt);
        test ("hspace", newimg2.hspace,  img2_hspace);
	}
	if(phase >= 2)
	{
	// Use same test method as above 
	}

	if(phase >= 1)
	{
        newimg2.removeAttribute ("src");
        test ("src",    newimg2.src,    img2_src);
	}

	testcase ("Enumerate images in document");
	var count = 0;
	for (var i in document.getElementsByTagName("img"))
	{
		count++;
	}
	test_expect_failure("Counted enumerated images",16998,count,document.images.length);


} catch (e) { exception(e); }

testmodule_finished();
}
