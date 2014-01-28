/* abstracted from www.teamnicole.js */

var hS=new Array;
var rimPath = 'nicole.gif';
hS[0]="border:9 solid A:B:19000000CCCCFF;";
hS[1]="border:9 solid A:B:19000000CCCCFF;";
hS[2]=hS[1];
hS[3]=hS[1];
hS[4]=hS[1];
hS[5]=hS[1];
hS[6]=hS[1];
hS[7]=hS[0];
hS[8]=hS[1];
hS[9]=hS[1];
hS[10]=hS[1];
hS[11]=hS[1];
hS[12]=hS[1];
hS[13]=hS[1];
hS[14]=hS[1];
hS[15]=hS[0];
hS[16]=hS[1];
hS[17]=hS[1];
hS[18]=hS[1];
hS[19]=hS[1];
hS[20]=hS[1];
hS[21]=hS[1];
hS[22]=hS[1];
hS[23]=hS[1];
hS[24]=hS[1];
hS[25]=hS[1];
hS[26]=hS[1];
hS[27]=hS[1];
hS[28]=hS[0];
hS[29]=hS[1];
hS[30]=hS[1];
hS[31]=hS[1];
hS[32]=hS[1];
hS[33]=hS[1];
hS[34]=hS[1];
hS[35]=hS[1];
hS[36]=hS[1];
hS[37]=hS[1];
hS[38]=hS[1];
hS[39]=hS[1];
hS[40]=hS[1];
hS[41]=hS[1];
hS[42]=hS[1];
hS[43]=hS[1];
hS[44]=hS[0];
hS[45]=hS[1];
hS[46]=hS[1];
hS[47]=hS[1];
hS[48]=hS[1];
hS[49]=hS[0];
hS[50]=hS[1];
hS[51]=hS[1];
hS[52]=hS[1];
hS[53]=hS[1];
hS[54]=hS[1];
hS[55]=hS[1];
hS[56]=hS[1];
hS[57]=hS[0];
hS[58]=hS[1];
hS[59]=hS[1];
hS[60]=hS[1];
hS[61]=hS[0];
hS[62]=hS[1];
hS[63]=hS[1];
hS[64]=hS[0];
hS[65]=hS[1];
hS[66]=hS[1];
hS[67]=hS[1];
hS[68]=hS[1];
hS[69]=hS[1];
hS[70]=hS[1];
hS[71]=hS[1];
hS[72]=hS[1];
hS[73]=hS[1];
hS[74]=hS[1];
hS[75]=hS[1];
hS[76]=hS[1];
hS[77]=hS[1];
hS[78]=hS[1];
hS[79]=hS[1];
hS[80]=hS[0];
hS[81]=hS[1];
hS[82]=hS[1];
hS[83]=hS[1];
hS[84]=hS[1];
hS[85]=hS[1];
hS[86]=hS[1];
hS[87]=hS[1];
hS[88]=hS[1];
hS[89]=hS[1];
hS[90]=hS[1];
hS[91]=hS[0];
hS[92]=hS[1];
hS[93]=hS[1];
hS[94]=hS[1];
hS[95]="border:9 solid ACCCCFF;";
hS[96]=hS[1];
hS[97]=hS[1];
hS[98]=hS[1];
hS[99]=hS[1];
hS[100]=hS[1];
hS[101]=hS[1];
hS[102]=hS[1];
hS[103]=hS[1];
hS[104]=hS[1];
hS[105]=hS[1];
hS[106]=hS[1];
hS[107]=hS[1];
hS[108]=hS[1];
hS[109]=hS[1];
hS[110]=hS[1];
hS[111]=hS[1];
hS[112]=hS[1];
hS[113]=hS[1];
hS[114]=hS[1];
hS[115]=hS[1];
hS[116]=hS[1];
hS[117]=hS[1];
hS[118]=hS[1];

function xrep(s,f,n)
{
    if((s.length>100)&&SM) 
	while(s.indexOf(f)!=-1) 
	    s=s.substr(0,s.indexOf(f))+n+s.substr(s.indexOf(f)+f.length);
    else 
	s=s.split(f).join(n);
    return s;
}

function Expand(code)
{
    code=xrep(code, "","\" style=\"position:absolute;left:");
    code=xrep(code, "","px;top:");
    code=xrep(code, "","px;width:");
    code=xrep(code, "","px;height:");
    code=xrep(code, "",";z-index:1000;visibility:hidden\"><div id=\"");
    code=xrep(code, "",";background-color:#");
    xA("",";background-color:#");
    code=xrep(code, "",";border-top:");
    code=xrep(code, "",";border-right:");
    code=xrep(code, "",";border-bottom:");
    code=xrep(code, "","solid");
    code=xrep(code, "",";\"><div nowrap style=\"position:absolute;left:");
    code=xrep(code, "",";font-family");
    xA("",";font-family");
    code=xrep(code, "",";font-size");
    xA("",";font-size");
    code=xrep(code, "",";font-weight");
    xA("",";font-weight");
    code=xrep(code, "",";font-style");
    xA("",";font-style");
    code=xrep(code, "",";text-decoration:");
    xA("",";text-decoration:");
    code=xrep(code, "",":normal");
    xA("",":normal");
    code=xrep(code, "",":bold");
    xA("",":bold");
    code=xrep(code, "","none;color:#");
    xA("","none;color:#");
    code=xrep(code, "",";cursor:default");
    xA("",";cursor:default");
    code=xrep(code, "","\" id=");
    code=xrep(code, ""," OnMouseOver=\"cFrame.HoverSel(0,\'");
    code=xrep(code, "","\',this);status=\'");
    code=xrep(code, "","\';\" OnClick=\"cFrame.execURL(\'");
    code=xrep(code, "","px;\"><span style=\"position:absolute;top:");
    code=xrep(code, " ","px;\"><img name=");
    code=xrep(code, "!"," src=\"");
    code=xrep(code, "#",".gif\" width=");
    code=xrep(code, "%"," height=");
    code=xrep(code, "&","></span><div style=\"position:absolute;top:");
    code=xrep(code, "(","px;left:");
    code=xrep(code, ",","</div></span></div><div nowrap style=\"position:absolute;left:");
    code=xrep(code, "-","><span style=\"position:absolute;left:");
    code=xrep(code, ".","px;\"><div style=\"position:absolute;top:");
    code=xrep(code, "/","\',\'");
    code=xrep(code, "0","\';cFrame.ShowMenu(\'");
    code=xrep(code, "2","</div><span style=\"position:absolute;top:");
    code=xrep(code, "3","></span></span></div><div nowrap style=\"position:absolute;left:");
    code=xrep(code, "4","px;\" align=left>");
    xA("4","px;\" align=left>");
    code=xrep(code, "6","</div></span></div></div></div><div id=\"");
    code=xrep(code, "8","\',0,0,true,\'\',");
    code=xrep(code, "9","1px");
    xA("9","1px");
    code=xrep(code, ";","8px");
    xA(";","8px");
    code=xrep(code, "=","#000000");
    code=xrep(code, "A","#000000");
    xA("A","#000000");
    code=xrep(code, "B","Tahoma");
    xA("B","Tahoma");
    code=xrep(code, "C","%%REL%%");
    xA("C","%%REL%%");
    return code;
}

function xA(o,n)
{
    for(var i=0;i<hS.length;i++)
    {
	hS[i]=xrep(hS[i],o,n);
    }
}

function teamnicole()
{
    dummy(xrep(Expand("<div id=\"News00116145px;filter:alpha(opacity=90)Newsfrmt00116145pxEEEEFF;border-left:= 9  = 9  = 9  = 9  1111217px:B:19000000;0-939411.-194(04News,11811217px:B:19000000;1ABLI/_%%REP%%news/index.php/this\');\"-9394110(0 ABLI!Cblip-off#11%12&-179(154Headlines,13511217px:B:19000000;2ACLI/_%%REP%%news/index.php?f=a/this\');\"-9394110(0 ACLI!Cblip-off#11%12&-179(154News Archive,15211217px:B:19000000;3ADLI/_javascript:void window.open(http://www.teamnicole.com/news/submit.php,popup,height=500,width=700,scrollbars,resizable=yes,location=no,menubar=no,status=no,toolbar=no)/this\');\"-9394110(0 ADLI!Cblip-off#11%12&-179(154Submit Article</div></span></div><div style=\"position:absolute;left:16911219;\"><div style=\"position:absolute;left:115909;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:18011217px:B:19000000;4AFLI/_%%REP%%news/projects.php/this\');\"-9394110(0 AFLI!Cblip-off#11%12&-179(154Current Projects</div></span></div><div style=\"position:absolute;left:19711219;\"><div style=\"position:absolute;left:115909;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:110811217px:B:19000000;5AHLI/_%%REP%%news/newswire.php/this\');\"-9394110(0 AHLI!Cblip-off#11%12&-179(154Newswire,112511217px:B:19000000;6AILI/_javascript:d=new Date;window.location.href=http://www.teamnicole.com/news/whatsnew.php?d=+d.getTimezoneOffset();/this\');\"-9394110(0 AILI!Cblip-off#11%12&-179(154What\'s New6Pictures0099159;filter:alpha(opacity=90)Picturesfrmt0099159EEEEFF;border-left:= 9  = 9  = 9  = 9  119517px:B:19000000;7-937711.-177(04Pictures,1189517px:B:19000000;8AKLI/_%%REP%%pictures/index.php/this\');\"-9377110(0 AKLI!Cblip-off#11%12&-162(154Index,1359517px:B:19000000;9ALLI/_%%REP%%pictures/browse.php/this\');\"-9377110(0 ALLI!Cblip-off#11%12&-162(154Browse,1529517px:B:19000000;10AMLI/_%%REP%%pictures/search.htm/this\');\"-9377110(0 AMLI!Cblip-off#11%12&-162(154Search,1699517px:B:19000000;11ANLI/_%%REP%%pictures/viewthumbs.php?b=mypics/this\');\"-9377110(0 ANLI!Cblip-off#11%12&-162(154My Pictures</div></span></div><div style=\"position:absolute;left:1869519;\"><div style=\"position:absolute;left:105769;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:1979517px:B:19000000;12APLI/_%%REP%%pictures/style.htm/this\');\"-9377110(0 APLI!Cblip-off#11%12&-162(154Nicole\'s Style,11149517px:B:19000000;13AQLI/_%%REP%%pictures/viewthumbs.php?b=hot/this\');\"-9377110(0 AQLI!Cblip-off#11%12&-162(154The Hot 100,11319517px:B:19000000;14ARLI/_%%REP%%pictures/viewthumbs.php?b=top/this\');\"-9377110(0 ARLI!Cblip-off#11%12&-162(154The Top 1006Library00205247px;filter:alpha(opacity=90)Libraryfrmt00205247pxEEEEFF;border-left:= 9  = 9  = 9  = 9  1120117px:B:19000000;15-9318311.-1183(04Library,11820117px:B:19000000;16ATLI/_%%REP%%library/index.php/this\');\"-93183110(0 ATLI!Cblip-off#11%12&-1168(154Index,13520117px:B:19000000;17AULI/_%%REP%%library/personal.php/this\');\"-93183110(0 AULI!Cblip-off#11%12&-1168(154Personal Information,15220117px:B:19000000;18AVLI/_%%REP%%library/biography.php/this\');\"-93183110(0 AVLI!Cblip-off#11%12&-1168(154Biography,16920117px:B:19000000;19AWLI/_%%REP%%library/charity.php/this\');\"-93183110(0 AWLI!Cblip-off#11%12&-1168(154Charity Work</div></span></div><div style=\"position:absolute;left:18620119;\"><div style=\"position:absolute;left:2051619;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:19720117px:B:19000000;20AYLI/AYRI0Sub_Films86);\" OnClick=\"cFrame.execURL(\'%%REP%%library/films/index.php/this\');\"-93183110(0 AYLI!Cblip-off#11%12&-1160(154Films22(179 AYRI!Carrow_black#4%73111420117px:B:19000000;21AZLI/AZRI0Sub_Music86);\" OnClick=\"cFrame.execURL(\'%%REP%%library/music/index.php/this\');\"-93183110(0 AZLI!Cblip-off#11%12&-1160(154Music22(179 AZRI!Carrow_black#4%73113120117px:B:19000000;22BALI/BARI0Sub_Stage86);\" OnClick=\"cFrame.execURL(\'%%REP%%library/stage/index.php/this\');\"-93183110(0 BALI!Cblip-off#11%12&-1160(154Stage22(179 BARI!Carrow_black#4%73114820117px:B:19000000;23BBLI/BBRI0Sub_TV86);\" OnClick=\"cFrame.execURL(\'%%REP%%library/tv/index.php/this\');\"-93183110(0 BBLI!Cblip-off#11%12&-1160(154TV22(179 BBRI!Carrow_black#4%7></span></span></div><div style=\"position:absolute;left:116520119;\"><div style=\"position:absolute;left:2051619;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:117620117px:B:19000000;24BDLI/_%%REP%%library/awards.php/this\');\"-93183110(0 BDLI!Cblip-off#11%12&-1168(154Awards,119320117px:B:19000000;25BELI/_%%REP%%library/articles.php/this\');\"-93183110(0 BELI!Cblip-off#11%12&-1168(154Articles & Transcripts,121020117px:B:19000000;26BFLI/_%%REP%%library/magazines.php/this\');\"-93183110(0 BFLI!Cblip-off#11%12&-1168(154Magazines,&nbsp;Covers & Photo Shoots,122720117px:B:19000000;27BGLI/_%%REP%%library/scripts/index.php/this\');\"-93183110(0 BGLI!Cblip-off#11%12&-1168(154Scripts & Screenplays6Forums0015929;;filter:alpha(opacity=90)Forumsfrmt0015929;EEEEFF;border-left:= 9  = 9  = 9  = 9  1115517px:B:19000000;28-9313711.-1137(04Forums,11815517px:B:19000000;29BILI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi/this\');\"-93137110(0 BILI!Cblip-off#11%12&-1122(154Summary,13515517px:B:19000000;30BJLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=get_daily/this\');\"-93137110(0 BJLI!Cblip-off#11%12&-1122(154Today\'s Active Topics</div></span></div><div style=\"position:absolute;left:15215519;\"><div style=\"position:absolute;left:1651249;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:16315517px:B:19000000;31BLLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=1/this\');\"-93137110(0 BLLI!Cblip-off#11%12&-1122(154Films,18015517px:B:19000000;32BMLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=15/this\');\"-93137110(0 BMLI!Cblip-off#11%12&-1122(154Music,19715517px:B:19000000;33BNLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=3/this\');\"-93137110(0 BNLI!Cblip-off#11%12&-1122(154Stage,111415517px:B:19000000;34BOLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=2/this\');\"-93137110(0 BOLI!Cblip-off#11%12&-1122(154TV & Radio,113115517px:B:19000000;35BPLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=14/this\');\"-93137110(0 BPLI!Cblip-off#11%12&-1122(154Awards,114815517px:B:19000000;36BQLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=9/this\');\"-93137110(0 BQLI!Cblip-off#11%12&-1122(154Magazines & Newspapers,116515517px:B:19000000;37BRLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=12/this\');\"-93137110(0 BRLI!Cblip-off#11%12&-1122(154Pictures,118215517px:B:19000000;38BSLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=4/this\');\"-93137110(0 BSLI!Cblip-off#11%12&-1122(154Style,119915517px:B:19000000;39BTLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=10/this\');\"-93137110(0 BTLI!Cblip-off#11%12&-1122(154In General</div></span></div><div style=\"position:absolute;left:121615519;\"><div style=\"position:absolute;left:1651249;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:122715517px:B:19000000;40BVLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=16/this\');\"-93137110(0 BVLI!Cblip-off#11%12&-1122(154Creativity Corner,124415517px:B:19000000;41BWLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=17/this\');\"-93137110(0 BWLI!Cblip-off#11%12&-1122(154Fun & Games,126115517px:B:19000000;42BXLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=5/this\');\"-93137110(0 BXLI!Cblip-off#11%12&-1122(154Café Mocha,127815517px:B:19000000;43BYLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=forum;f=6/this\');\"-93137110(0 BYLI!Cblip-off#11%12&-1122(154Web Site6Downloads0010689px;filter:alpha(opacity=90)Downloadsfrmt0010689pxEEEEFF;border-left:= 9  = 9  = 9  = 9  1110217px:B:19000000;44-938411.-184(04Downloads,11810217px:B:19000000;45CALI/_%%REP%%downloads/index.php/this\');\"-9384110(0 CALI!Cblip-off#11%12&-169(154Index,13510217px:B:19000000;46CBLI/_%%REP%%downloads/screensavers.php/this\');\"-9384110(0 CBLI!Cblip-off#11%12&-169(154Screen Savers,15210217px:B:19000000;47CCLI/_%%REP%%downloads/wallpapers.php/this\');\"-9384110(0 CCLI!Cblip-off#11%12&-169(154Wallpapers,16910217px:B:19000000;48CDLI/_%%REP%%downloads/winamp.php/this\');\"-9384110(0 CDLI!Cblip-off#11%12&-169(154Winamp Skins6Store0092159;filter:alpha(opacity=90)Storefrmt0092159EEEEFF;border-left:= 9  = 9  = 9  = 9  118817px:B:19000000;49-937011.-170(04Store,1188817px:B:19000000;50CFLI/_%%REP%%store/index.php/this\');\"-9370110(0 CFLI!Cblip-off#11%12&-155(154Store Front</div></span></div><div style=\"position:absolute;left:1358819;\"><div style=\"position:absolute;left:95709;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:1468817px:B:19000000;51CHLI/_%%REP%%store/books.php/this\');\"-9370110(0 CHLI!Cblip-off#11%12&-155(154Books,1638817px:B:19000000;52CILI/_%%REP%%store/cds.php/this\');\"-9370110(0 CILI!Cblip-off#11%12&-155(154CDs,1808817px:B:19000000;53CJLI/_%%REP%%store/dvds.php/this\');\"-9370110(0 CJLI!Cblip-off#11%12&-155(154DVDs,1978817px:B:19000000;54CKLI/_%%REP%%store/videos.php/this\');\"-9370110(0 CKLI!Cblip-off#11%12&-155(154Videos,11148817px:B:19000000;55CLLI/_%%REP%%store/posters.php/this\');\"-9370110(0 CLLI!Cblip-off#11%12&-155(154Posters,11318817px:B:19000000;56CMLI/_%%REP%%store/ebay.php/this\');\"-9370110(0 CMLI!Cblip-off#11%12&-155(154eBay Items6Members0017683px;filter:alpha(opacity=90)Membersfrmt0017683pxEEEEFF;border-left:= 9  = 9  = 9  = 9  1117217px:B:19000000;57-9315411.-1154(04Members,11817217px:B:19000000;58COLI/_%%REP%%members/index.php/this\');\"-93154110(0 COLI!Cblip-off#11%12&-1139(154Profiles,13517217px:B:19000000;59CPLI/_%%REP%%pictures/viewthumbs.php?b=mypics/this\');\"-93154110(0 CPLI!Cblip-off#11%12&-1139(154My Pictures</div></span></div><div style=\"position:absolute;left:15217219;\"><div style=\"position:absolute;left:1751389;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:16317217px:B:19000000;60CRLI/_%%REP%%members/caption.php/this\');\"-93154110(0 CRLI!Cblip-off#11%12&-1139(154Caption Competition Winners6Fan_Mail0013455px;filter:alpha(opacity=90)Fan_Mailfrmt0013455pxEEEEFF;border-left:= 9  = 9  = 9  = 9  1113017px:B:19000000;61-9311211.-1112(04Fan Mail,11813017px:B:19000000;62CTLI/_%%REP%%fan_mail/index.php/this\');\"-93112110(0 CTLI!Cblip-off#11%12&-197(154Contact Information,13513017px:B:19000000;63CULI/_%%REP%%fan_mail/write.htm/this\');\"-93112110(0 CULI!Cblip-off#11%12&-197(154Write to Nicole6Links00135287px;filter:alpha(opacity=90)Linksfrmt00135287pxEEEEFF;border-left:= 9  = 9  = 9  = 9  1113117px:B:19000000;64-9311311.-1113(04Links,11813117px:B:19000000;65Links_AKLI/_%%REP%%links/index.php/this\');\"-93113110(0 Links_AKLI!Cblip-off#11%12&-198(154Index</div></span></div><div style=\"position:absolute;left:13513119;\"><div style=\"position:absolute;left:1351059;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:14613117px:B:19000000;66CYLI/_%%REP%%links/index.php?cat=22/this\');\"-93113110(0 CYLI!Cblip-off#11%12&-198(154Awards,16313117px:B:19000000;67CZLI/_%%REP%%links/index.php?cat=34/this\');\"-93113110(0 CZLI!Cblip-off#11%12&-198(154Downloads,18013117px:B:19000000;68DALI/_%%REP%%links/index.php?cat=32/this\');\"-93113110(0 DALI!Cblip-off#11%12&-198(154Fan Sites,19713117px:B:19000000;69DBLI/_%%REP%%links/index.php?cat=1/this\');\"-93113110(0 DBLI!Cblip-off#11%12&-198(154Films,111413117px:B:19000000;70DCLI/_%%REP%%links/index.php?cat=31/this\');\"-93113110(0 DCLI!Cblip-off#11%12&-198(154Information,113113117px:B:19000000;71DDLI/_%%REP%%links/index.php?cat=29/this\');\"-93113110(0 DDLI!Cblip-off#11%12&-198(154Magazines,114813117px:B:19000000;72DELI/_%%REP%%links/index.php?cat=67/this\');\"-93113110(0 DELI!Cblip-off#11%12&-198(154Music,116513117px:B:19000000;73DFLI/_%%REP%%links/index.php?cat=14/this\');\"-93113110(0 DFLI!Cblip-off#11%12&-198(154News,118213117px:B:19000000;74DGLI/_%%REP%%links/index.php?cat=33/this\');\"-93113110(0 DGLI!Cblip-off#11%12&-198(154Newsgroups,119913117px:B:19000000;75DHLI/_%%REP%%links/index.php?cat=13/this\');\"-93113110(0 DHLI!Cblip-off#11%12&-198(154Pictures,121613117px:B:19000000;76DILI/_%%REP%%links/index.php?cat=26/this\');\"-93113110(0 DILI!Cblip-off#11%12&-198(154Search Engines,123313117px:B:19000000;77DJLI/_%%REP%%links/index.php?cat=68/this\');\"-93113110(0 DJLI!Cblip-off#11%12&-198(154Stage,125013117px:B:19000000;78DKLI/_%%REP%%links/index.php?cat=15/this\');\"-93113110(0 DKLI!Cblip-off#11%12&-198(154TV,126713117px:B:19000000;79DLLI/_%%REP%%links/index.php?cat=6/this\');\"-93113110(0 DLLI!Cblip-off#11%12&-198(154[Non Nicole Related]6Site00144213px;filter:alpha(opacity=90)Sitefrmt00144213pxEEEEFF;border-left:= 9  = 9  = 9  = 9  1114017px:B:19000000;80-9312211.-1122(04Site,11814017px:B:19000000;81DNLI/_%%REP%%site/index.php#Top/this\');\"-93122110(0 DNLI!Cblip-off#11%12&-1107(154Site Map,13514017px:B:19000000;82DOLI/_%%REP%%site/guestbook.php/this\');\"-93122110(0 DOLI!Cblip-off#11%12&-1107(154Guestbook,15214017px:B:19000000;83DPLI/_%%REP%%site/faq.htm/this\');\"-93122110(0 DPLI!Cblip-off#11%12&-1107(154FAQ,16914017px:B:19000000;84DQLI/_%%REP%%site/linking.php/this\');\"-93122110(0 DQLI!Cblip-off#11%12&-1107(154Linking to Us</div></span></div><div style=\"position:absolute;left:18614019;\"><div style=\"position:absolute;left:1451129;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:19714017px:B:19000000;85DSLI/_%%REP%%site/conduct.htm/this\');\"-93122110(0 DSLI!Cblip-off#11%12&-1107(154Code of Conduct,111414017px:B:19000000;86DTLI/_%%REP%%site/moderators.htm/this\');\"-93122110(0 DTLI!Cblip-off#11%12&-1107(154Moderators,113114017px:B:19000000;87DULI/_%%REP%%site/privacy.htm/this\');\"-93122110(0 DULI!Cblip-off#11%12&-1107(154Privacy Statement</div></span></div><div style=\"position:absolute;left:114814019;\"><div style=\"position:absolute;left:1451129;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:115914017px:B:19000000;88DWLI/_%%REP%%site/credits.php/this\');\"-93122110(0 DWLI!Cblip-off#11%12&-1107(154Credits,117614017px:B:19000000;89DXLI/_%%REP%%site/history.htm/this\');\"-93122110(0 DXLI!Cblip-off#11%12&-1107(154History of Team Nicole,119314017px:B:19000000;90DYLI/_%%REP%%site/contact.htm/this\');\"-93122110(0 DYLI!Cblip-off#11%12&-1107(154Contact Us6Search0011176px;filter:alpha(opacity=90)Searchfrmt0011176pxEEEEFF;border-left:= 9  = 9  = 9  = 9  1110717px:B:19000000;91-938911.-189(04Search,11810717px:B:19000000;92EALI/_%%REP%%search/index.php/this\');\"-9389110(0 EALI!Cblip-off#11%12&-174(154Search this Site,13510717px:B:19000000;93EBLI/_%%REP%%pictures/search.htm/this\');\"-9389110(0 EBLI!Cblip-off#11%12&-174(154Search Pictures,15210717px:B:19000000;94ECLI/_%%REP%%cgi-bin/ubbcgi/ultimatebb.cgi?ubb=search/this\');\"-9389110(0 ECLI!Cblip-off#11%12&-174(154Search Forums,1691074px;95_/_/this\');\"-9389-2.-189(0px;\">6Sub_Films00157213px;filter:alpha(opacity=90)Sub_Filmsfrmt00157213pxEEEEFF;border-left:= 9  = 9  = 9  = 9  1115317px:B:19000000;96New_Film_ProjectsEDLI/_%%REP%%library/films/upcoming.php/this\');\"-93135110(0 New_Film_ProjectsEDLI!Cblip-off#11%12&-1120(154Upcoming Films</div></span></div><div style=\"position:absolute;left:11815319;\"><div style=\"position:absolute;left:1551229;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:12915317px:B:19000000;97Complete_Film_ListEDLI/_%%REP%%library/films/index.php/this\');\"-93135110(0 Complete_Film_ListEDLI!Cblip-off#11%12&-1120(154Complete Film List,14615317px:B:19000000;98The_Best_AYLI/_%%REP%%library/films/bestfilms.php/this\');\"-93135110(0 The_Best_AYLI!Cblip-off#11%12&-1120(154The Best Films</div></span></div><div style=\"position:absolute;left:16315319;\"><div style=\"position:absolute;left:1551229;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:17415317px:B:19000000;99Cold_Mountain__2003_EDLI/_%%REP%%library/films/film.php?id=9/this\');\"-93135110(0 Cold_Mountain__2003_EDLI!Cblip-off#11%12&-1120(154Cold Mountain (2003),19115317px:B:19000000;100The_Human_Stain__2003_EDLI/_%%REP%%library/films/film.php?id=4/this\');\"-93135110(0 The_Human_Stain__2003_EDLI!Cblip-off#11%12&-1120(154Human Stain,&nbsp;The (2003),110815317px:B:19000000;101Dogville__2003_EDLI/_%%REP%%library/films/film.php?id=3/this\');\"-93135110(0 Dogville__2003_EDLI!Cblip-off#11%12&-1120(154Dogville (2003),112515317px:B:19000000;102The_Hours__2002_EDLI/_%%REP%%library/films/film.php?id=2/this\');\"-93135110(0 The_Hours__2002_EDLI!Cblip-off#11%12&-1120(154Hours,&nbsp;The (2002),114215317px:B:19000000;103Birthday_Girl__2001_EDLI/_%%REP%%library/films/film.php?id=11/this\');\"-93135110(0 Birthday_Girl__2001_EDLI!Cblip-off#11%12&-1120(154Birthday Girl (2001),115915317px:B:19000000;104The_Others__2001_EDLI/_%%REP%%library/films/film.php?id=12/this\');\"-93135110(0 The_Others__2001_EDLI!Cblip-off#11%12&-1120(154The Others (2001),117615317px:B:19000000;105Moulin_Rouge__2001_EDLI/_%%REP%%library/films/film.php?id=1/this\');\"-93135110(0 Moulin_Rouge__2001_EDLI!Cblip-off#11%12&-1120(154Moulin Rouge (2001),119315317px:B:19000000;106MoreAYLI/_%%REP%%library/films/index.php/this\');\"-93135110(0 MoreAYLI!Cblip-off#11%12&-1120(154» More...6Sub_Music0018694px;filter:alpha(opacity=90)Sub_Musicfrmt0018694pxEEEEFF;border-left:= 9  = 9  = 9  = 9  1118217px:B:19000000;107Upcoming_Music_ProjectsEDLI/_%%REP%%library/music/upcoming.php/this\');\"-93164110(0 Upcoming_Music_ProjectsEDLI!Cblip-off#11%12&-1149(154Upcoming Music Projects</div></span></div><div style=\"position:absolute;left:11818219;\"><div style=\"position:absolute;left:1851469;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:12918217px:B:19000000;108All_Music_Projects_ListEDLI/_%%REP%%library/music/index.php/this\');\"-93164110(0 All_Music_Projects_ListEDLI!Cblip-off#11%12&-1149(154Music Projects List</div></span></div><div style=\"position:absolute;left:14618219;\"><div style=\"position:absolute;left:1851469;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:15718217px:B:19000000;109Duet_with_Kylie_MinogueEDLI/_%%REP%%library/music/music.php?id=2/this\');\"-93164110(0 Duet_with_Kylie_MinogueEDLI!Cblip-off#11%12&-1149(154Duet with Kylie Minogue (2002),17418217px:B:19000000;110MoreAZLI/_%%REP%%library/music/index.php/this\');\"-93164110(0 MoreAZLI!Cblip-off#11%12&-1149(154» More...6Sub_Stage0017394px;filter:alpha(opacity=90)Sub_Stagefrmt0017394pxEEEEFF;border-left:= 9  = 9  = 9  = 9  1116917px:B:19000000;111Upcoming_Stage_ProductionsEDLI/_%%REP%%library/stage/upcoming.php/this\');\"-93151110(0 Upcoming_Stage_ProductionsEDLI!Cblip-off#11%12&-1136(154Upcoming Stage Productions</div></span></div><div style=\"position:absolute;left:11816919;\"><div style=\"position:absolute;left:1751359;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:12916917px:B:19000000;112Stage_Production_ListEDLI/_%%REP%%library/stage/index.php/this\');\"-93151110(0 Stage_Production_ListEDLI!Cblip-off#11%12&-1136(154Stage Production List</div></span></div><div style=\"position:absolute;left:14616919;\"><div style=\"position:absolute;left:1751359;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:15716917px:B:19000000;113Blue_Room__1998_EDLI/_%%REP%%library/stage/stage.php?id=1/this\');\"-93151110(0 Blue_Room__1998_EDLI!Cblip-off#11%12&-1136(154Blue Room,&nbsp;The (1998),17416917px:B:19000000;114MoreBALI/_%%REP%%library/stage/index.php/this\');\"-93151110(0 MoreBALI!Cblip-off#11%12&-1136(154» More...6Sub_TV0014494px;filter:alpha(opacity=90)Sub_TVfrmt0014494pxEEEEFF;border-left:= 9  = 9  = 9  = 9  1114017px:B:19000000;115Upcoming_TV_ProjectsEDLI/_%%REP%%library/tv/upcoming.php/this\');\"-93122110(0 Upcoming_TV_ProjectsEDLI!Cblip-off#11%12&-1107(154Upcoming TV Projects</div></span></div><div style=\"position:absolute;left:11814019;\"><div style=\"position:absolute;left:1451129;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:12914017px:B:19000000;116TV_Project_ListEDLI/_%%REP%%library/tv/index.php/this\');\"-93122110(0 TV_Project_ListEDLI!Cblip-off#11%12&-1107(154TV Project List</div></span></div><div style=\"position:absolute;left:14614019;\"><div style=\"position:absolute;left:1451129;overflow:hidden8C92C6\"></div></div><div nowrap style=\"position:absolute;left:15714017px:B:19000000;117Five_Mile_Creek__1984_EDLI/_%%REP%%library/tv/tv.php?id=1/this\');\"-93122110(0 Five_Mile_Creek__1984_EDLI!Cblip-off#11%12&-1107(154Five Mile Creek (1984),17414017px:B:19000000;118MoreBBLI/_%%REP%%library/tv/index.php/this\');\"-93122110(0 MoreBBLI!Cblip-off#11%12&-1107(154» More...</div></span></div></div></div>"),'%'+'%REL%%',rimPath));
}

function dummy(s) {}
