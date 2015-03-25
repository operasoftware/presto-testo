function start()
	{var elements = document.getElementsByTagName("div"), fail = 0, pass = 0;
	for(i = elements.length; i != 0; i--)
		{var c = elements[i-1].currentStyle,
		inis = elements[i-1].getAttribute("class").replace(/ba1/g,"fixed").replace(/ba2/g,"scroll").replace(/bp1/g,"0 0").replace(/bp2/g,"50px 50px").replace(/bp3/g,"100px 100px").replace(/br1/g,"repeat").replace(/br2/g,"no-repeat").replace(/br3/g,"repeat-x").replace(/br4/g,"repeat-y").replace(/bs1/g,"solid").replace(/bs2/g,"dashed").replace(/bs3/g,"dotted").replace(/bw1/g,"1px").replace(/bw2/g,"3px").replace(/bw3/g,"5px").replace(/bc1/g,"#ff0000").replace(/bc2/g,"#00ff00").replace(/bc3/g,"#0000ff").replace(/co1/g,"#ff0000").replace(/co2/g,"#00ff00").replace(/co3/g,"#0000ff").replace(/cu1/g,"pointer").replace(/cu2/g,"text").replace(/di1/g,"rtl").replace(/di2/g,"ltr").replace(/fs1/g,"normal").replace(/fs2/g,"italic").replace(/fv1/g,"normal").replace(/fv2/g,"small-caps").replace(/fw1/g,"400").replace(/fw2/g,"700").replace(/he1/g,"150px").replace(/he2/g,"200px").replace(/ls1/g,"0").replace(/ls2/g,"3px").replace(/lh1/g,"10px").replace(/lh2/g,"20px").replace(/mr1/g,"0").replace(/mr2/g,"10px").replace(/ml1/g,"0").replace(/ml2/g,"10px").replace(/mt1/g,"0").replace(/mt2/g,"10px").replace(/mb1/g,"0").replace(/mb2/g,"10px").replace(/os1/g,"solid").replace(/os2/g,"dashed").replace(/os3/g,"dotted").replace(/ow1/g,"1px").replace(/ow2/g,"3px").replace(/ow3/g,"5px").replace(/oc1/g,"#ff0000").replace(/oc2/g,"#00ff00").replace(/oc3/g,"#0000ff").replace(/ov1/g,"hidden").replace(/ov2/g,"visible").replace(/ov3/g,"scroll").replace(/po1/g,"0 0").replace(/po2/g,"10px 10px").replace(/po3/g,"-10px -10px").replace(/po4/g,"10px -10px").replace(/pr1/g,"0").replace(/pr2/g,"10px").replace(/pl1/g,"0").replace(/pl2/g,"10px").replace(/pt1/g,"0").replace(/pt2/g,"10px").replace(/pb1/g,"0").replace(/pb2/g,"10px").replace(/qu1/g,"\"'\" \"'\"").replace(/qu2/g,"\"\\\"\" \"\\\"\"").replace(/ta1/g,"left").replace(/ta2/g,"right").replace(/ta3/g,"center").replace(/ta4/g,"justify").replace(/td1/g,"none").replace(/td2/g,"underline").replace(/td3/g,"overline").replace(/td4/g,"line-through").replace(/ti1/g,"0").replace(/ti2/g,"10px").replace(/tt1/g,"none").replace(/tt2/g,"uppercase").replace(/tt3/g,"lowercase").replace(/tt4/g,"capitalize").replace(/ws1/g,"normal").replace(/ws2/g,"nowrap").replace(/ws3/g,"pre").replace(/ws4/g,"pre-wrap").replace(/wi1/g,"200px").replace(/wi2/g,"500px");
		outs = (c.backgroundAttachment + " " + c.backgroundPosition + " " + c.backgroundRepeat + " " + c.borderStyle + " " + c.borderWidth + " " + c.borderColor + " " + c.color + " " +  c.cursor + " " +  c.direction + " " + c.fontStyle + " " + c.fontVariant + " " +  c.fontWeight + " " + c.height + " " + c.letterSpacing + " " + c.lineHeight + " " + c.marginRight + " " + c.marginLeft + " " + c.marginTop + " " + c.marginBottom + " " + c.outlineStyle + " " + c.outlineWidth + " " + c.outlineColor + " " + c.overflow + " " + c.paddingRight + " " + c.paddingLeft + " " + c.paddingTop + " " + c.paddingBottom + " " + c.quotes + " " + c.textAlign + " " + c.left + " " + c.top + " " + c.textIndent + " " + c.textTransform + " " + c.whiteSpace + " " + c.width).replace(/ 0px/g,' 0');
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
