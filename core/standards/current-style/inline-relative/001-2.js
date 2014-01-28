function start()
	{var elements = document.getElementsByTagName("span"), fail = 0, pass = 0;
	for(i = elements.length; i != 0; i--)
		{var c = elements[i-1].currentStyle,
		inis = elements[i-1].getAttribute("class").replace(/bs1/g,"solid").replace(/bs2/g,"dashed").replace(/bs3/g,"dotted").replace(/bw1/g,"1px").replace(/bw2/g,"3px").replace(/bw3/g,"5px").replace(/bc1/g,"#ff0000").replace(/bc2/g,"#00ff00").replace(/bc3/g,"#0000ff").replace(/bk1/g,"#ff0000").replace(/bk2/g,"#00ff00").replace(/bk3/g,"#0000ff").replace(/co1/g,"#ff0000").replace(/co2/g,"#00ff00").replace(/co3/g,"#0000ff").replace(/cu1/g,"pointer").replace(/cu2/g,"text").replace(/di1/g,"rtl").replace(/di2/g,"ltr").replace(/fs1/g,"normal").replace(/fs2/g,"italic").replace(/fv1/g,"normal").replace(/fv2/g,"small-caps").replace(/fw1/g,"400").replace(/fw2/g,"700").replace(/ls1/g,"0").replace(/ls2/g,"3px").replace(/lh1/g,"10px").replace(/lh2/g,"20px").replace(/mr1/g,"0px").replace(/mr2/g,"10px").replace(/ml1/g,"0px").replace(/ml2/g,"10px").replace(/mt1/g,"0px").replace(/mt2/g,"10px").replace(/mb1/g,"0px").replace(/mb2/g,"10px").replace(/os1/g,"solid").replace(/os2/g,"dashed").replace(/os3/g,"dotted").replace(/ow1/g,"1px").replace(/ow2/g,"3px").replace(/ow3/g,"5px").replace(/oc1/g,"#ff0000").replace(/oc2/g,"#00ff00").replace(/oc3/g,"#0000ff").replace(/pr1/g,"0px").replace(/pr2/g,"10px").replace(/pl1/g,"0px").replace(/pl2/g,"10px").replace(/pt1/g,"0px").replace(/pt2/g,"10px").replace(/pb1/g,"0px").replace(/pb2/g,"10px").replace(/qu1/g,"\"'\" \"'\"").replace(/qu2/g,"\"\\\"\" \"\\\"\"").replace(/td1/g,"none").replace(/td2/g,"underline").replace(/td3/g,"overline").replace(/td4/g,"line-through").replace(/ti1/g,"0px").replace(/ti2/g,"10px").replace(/tt1/g,"none").replace(/tt2/g,"uppercase").replace(/tt3/g,"lowercase").replace(/tt4/g,"capitalize").replace(/ws1/g,"normal").replace(/ws2/g,"nowrap").replace(/ws3/g,"pre").replace(/ws4/g,"pre-wrap").replace(/po1/g,"0px 0px").replace(/po2/g,"10px 10px").replace(/po3/g,"-10px -10px").replace(/po4/g,"10px -10px");
		outs = c.borderStyle + " " + c.borderWidth + " " + c.borderColor + " " + c.color + " " +  c.cursor + " " +  c.direction + " " + c.fontStyle + " " + c.fontVariant + " " +  c.fontWeight + " " + c.letterSpacing + " " + c.lineHeight + " " + c.marginRight + " " + c.marginLeft + " " + c.marginTop + " " + c.marginBottom + " " + c.outlineStyle + " " + c.outlineWidth + " " + c.outlineColor + " " + c.paddingRight + " " + c.paddingLeft + " " + c.paddingTop + " " + c.paddingBottom + " " + c.quotes + " " + c.backgroundColor + " " + c.textDecoration + " " + c.left + " " + c.top + " " + c.whiteSpace;
		if(inis != outs)
		{fail = fail + 1;
		document.getElementsByTagName("tt")[0].firstChild.nodeValue = fail;
		var msg = document.createElementNS("http://www.w3.org/1999/xhtml","p");
		msg.appendChild(document.createTextNode("currentStyle for element " + i + " does not match expected value"));
		var ini = document.createElementNS("http://www.w3.org/1999/xhtml","p");
		ini.appendChild(document.createTextNode(inis));
		var out = document.createElementNS("http://www.w3.org/1999/xhtml","p");
		out.appendChild(document.createTextNode(outs));
		document.getElementsByTagName("body")[0].appendChild(msg);
		document.getElementsByTagName("body")[0].appendChild(ini);
		document.getElementsByTagName("body")[0].appendChild(out);}
		else
			{pass = pass + 1;
			document.getElementsByTagName("tt")[1].firstChild.nodeValue = pass;}
		}
	document.getElementsByTagName("body")[0].setAttribute("class","done");
	try{top.opener.rr(pass == 128);}catch(e){}}
