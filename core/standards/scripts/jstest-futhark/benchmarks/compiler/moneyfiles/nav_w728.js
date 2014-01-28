
if(window.event + "" == "undefined") event = null;
function HM_f_PopUp(){return false};
function HM_f_PopDown(){return false};
popUp = HM_f_PopUp;
popDown = HM_f_PopDown;

   HM_DOM = (document.getElementById) ? true : false;
   HM_NS4 = (document.layers) ? true : false;
    HM_IE = (document.all) ? true : false;
   HM_IE4 = HM_IE && !HM_DOM;
   HM_Mac = (navigator.appVersion.indexOf("Mac") != -1);
  HM_IE4M = HM_IE4 && HM_Mac;
HM_IsMenu = (HM_DOM || HM_NS4 || (HM_IE4 && !HM_IE4M));
var HM_BrowserString = "DOM";
HM_BrowserString = HM_NS4 ? "NS4" : HM_DOM ? "DOM" : "IE4";
	
HM_GL_MenuWidth          = 130;
HM_GL_FontFamily         = "Arial,sans-serif";
HM_GL_FontSize           = 10;
HM_GL_FontBold           = false;
HM_GL_FontItalic         = false;
HM_GL_FontColor          = "black";
HM_GL_FontColorOver      = "white";
HM_GL_BGColor            = "#99ccFF";
HM_GL_BGColorOver        = "#003366";
HM_GL_ItemPadding        = 1;

HM_GL_BorderWidth        = 1;
HM_GL_BorderColor        = "black";
HM_GL_BorderStyle        = "solid";
HM_GL_SeparatorSize      = 1;
HM_GL_SeparatorColor     = "black";
HM_GL_ImageSrc           = "/images/tri.gif";
HM_GL_ImageSize          = 8;

HM_GL_ImageHorizSpace	 = 0;
HM_GL_ImageVertSpace	 = 0;

HM_GL_KeepHilite         = true;
HM_GL_ClickStart         = false;
HM_GL_ClickKill          = 0;
HM_GL_ChildOverlap       = 70;
HM_GL_ChildOffset        = 5;
HM_GL_ChildPerCentOver   = null;
HM_GL_TopSecondsVisible  = .5;

HM_GL_StatusDisplayBuild = 0;
HM_GL_StatusDisplayLink  = 1;
HM_GL_UponDisplay        = null;
HM_GL_UponHide           = null;

HM_GL_RightToLeft        = false;
HM_GL_CreateTopOnly      = HM_NS4 ? false : false;
HM_GL_ShowLinkCursor     = true;

HM_GL_NSFontOver	 = true;
if(HM_IsMenu) {

HM_Array1 = [[130,130,220],
["<b><i>in Money's Best</i></b>","/best/",1,0,0],
["Autos","/news/specials/bestcars/",1,0,0],
["Funds","/pr/subs/features/money100/",1,0,0],
["Places to live","/best/bplive",1,0,0],
["Places to retire","/best/bpretire",1,0,0],
["Places to vacation","/best/bpvac_spring/",1,0,0],
["Benefits","/news/specials/benefits/",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>Find your best place","http://cgi.money.cnn.com/tools/bestplaces/bplive.jsp",1,0,0]
]

HM_Array2 = [[130,130,260],
["<b><i>in Markets &amp; Stocks</i></b>","/markets/",1,0,0],
["Market News","/markets/news",1,0,0],
["Market Data","/markets/data",1,0,0],
["ADRs","/markets/adrs",1,0,0],
["AM Market Call","/markets/morning_call",1,0,0],
["Bonds & Rates","/markets/bondcenter",1,0,0],
["Buy What You Know","/markets/whattobuy/",1,0,0],
["Commodities","/markets/commodities.html",1,0,0],
["Currencies","/markets/currencies",1,0,0],
["Dow 30","/markets/dow30.html",1,0,0],
["Earnings","/news/companies/firstcall/",1,0,0],
["Earnings Warnings","/markets/IRC/warnings.html",1,0,0],
["Hot or Cold","/markets/hotornot/",1,0,0],
["Hot Stocks","/markets/hotstocks/",1,0,0],
["Investor Research Center","/markets/IRC",1,0,0],
["IPO Center","/markets/ipo",1,0,0],
["Most Active Stocks","/markets/us_actives.html",1,0,0],
["PM Market Call","/markets/afterhours",1,0,0],
["US Stocks","/markets/us_markets.html",1,0,0],
["Wall Street Research","/markets/multex",1,0,0],
["Widely Helds","/markets/widelyheld.html",1,0,0],
["World Markets","/markets/world_markets.html",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>Track Your Stocks","/services/portfolio",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>Real Time Quotes","/markets/xstream/",1,0,0]
]

HM_Array3 = [[130,130,280],
["<b><i>in News</i></b>","/news/",1,0,0],
["Fortune 500","/news/fortune500/",1,0,0],
["Midsized Companies","/news/midcaps/",1,0,0],
["Newsmakers","/news/newsmakers/",1,0,0],
["Company Research","/news/crc/",1,0,0],
["Deals","/news/deals/mergers/dealchart.html",1,0,0],
["Top 25 Deals - YTD","/news/deals/mergers/biggest.html",1,0,0],
["Financial News in Brief","/news/briefing/",1,0,0],
["Fun Money","/news/funny/",1,0,0],
["Special Reports","/news/specials/",1,0,0],
["Corrections","/news/companies/corrections/",1,0,0]
]

HM_Array4 = [[130,130,300],
["<b><i>in Jobs &amp; Economy</i></b>","/news/economy",1,0,0],
["Economic Calendar","/markets/IRC/economic.html",1,0,0],
["The HaysWire","/commentary/column_hays/",1,0,0],
["Find a Job","/services/careerbuilder/",1,0,0],
]

HM_Array5 = [[130,130,320],
["<b><i>in World Biz</i></b>","/news/international/",1,0,0],
["World Markets","/markets/world_markets.html",1,0,0],
["FTSE 100","/markets/europe/ftse100.html",1,0,0],
["DAX 100","/markets/europe/dax100.html",1,0,0],
["CAC 40","/markets/europe/cac40.html",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>Currency Converter","/markets/currencies/",1,0,0],
]

HM_Array6 = [[130,130,340],
["<b><i>in Technology</i></b>","/technology/",1,0,0],
["Tech Biz","/technology/techinvestor/",1,0,0],
["Sectors & Stocks","/technology/techstocks/",1,0,0],
["Techwatch","/technology/techwatch/",1,0,0],
["Personal Tech","/technology/personaltech/",1,0,0],
["Kim Komando","/technology/komando/",1,0,0]
]

HM_Array7 = [[130,130,360],
["<b><i>in Commentary</i></b>","/commentary/",1,0,0],
["Business of Sports","/commentary/column_sportsbiz",1,0,0],
["The Dobbs Report","/commentary/dobbs",1,0,0],
["Everyday Money","/commentary/everyday",1,0,0],
["Game Over","/commentary/game_over",1,0,0],
["HaysWire","/commentary/column_hays",1,0,0],
["Minding Your Business","/commentary/mindingyourbusiness",1,0,0],
["Sivy on Stocks","/commentary/sivy",1,0,0],
["Tech Biz","/technology/techinvestor",1,0,0],
["Wastler's Wanderings","/commentary/wastler",1,0,0]
]

HM_Array8 = [[130,130,380],
["<b><i>in Personal Finance</i></b>","/pf/",1,0,0],
["College","/pf/college",1,0,0],
["Credit and Debt","/pf/debt",1,0,0],
["Insurance","/pf/insurance",1,0,0],
["Interest Rates","/pf/informa/",1,0,0],
["Retirement","/retirement",1,0,0],
["Smart Assets","/pf/smartassets/",1,0,0],
["Tax Center","/pf/taxes",1,0,0],
["Find a Mortgage","/pf/yourhome/mortgage/",1,0,0],
["Ask the Expert","/pf/expert",1,0,0],
["Five Tips","/pf/saving",1,0,0],
["The Good Life","/pf/goodlife",1,0,0],
["Millionaire in the making","/pf/millionaire",1,0,0],
["Money 101","/pf/101/",1,0,0],
]

HM_Array9 = [[130,130,400],
["<b><i>in Mutual Funds</i></b>","/funds/",1,0,0],
["Money 100","/pr/subs/features/money100/",1,0,0],
["Winners & Losers","/funds/morningstar/ytd.html",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>Fund screener","http://cgi.money.cnn.com/tools/fundscreener/fundscreener.jsp",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>Find a Fund","http://cgi.money.cnn.com/tools/findafund/findafund.html",1,0,0]
]

HM_Array10 = [[130,130,420],
["<b><i>in Money Magazine</i></b>","/magazine/",1,0,0],
["Subscribe","https://subs.timeinc.net/CampaignHandler/MOcntrl?source_id=30",1,0,0],
["Customer Service","https://secure.customersvc.com/servlet/Show?WESPAGE=mo/home.html&MSRSMAG=MO",1,0,0]
]

HM_Array11 = [[130,130,440],
["<b><i>in CNNfn TV</i></b>","/ontv/",1,0,0],
["CNNmoney Morning","/ontv/cnnmoneymorning/",1,0,0],
["Market Call","/ontv/marketcall/",1,0,0],
["Dolans Unscripted","/ontv/dolans/",1,0,0],
["The Flip Side","/ontv/flipside/",1,0,0],
["Open House","/ontv/openhouse/",1,0,0],
["The Biz","/ontv/thebiz/",1,0,0],
["The Money Gang","/ontv/themoneygang/",1,0,0],
["Street Sweep","/ontv/streetsweep/",1,0,0],
["Your Money","/ontv/yourmoney/",1,0,0],
["Lou Dobbs Tonight","/cnn/CNN/Programs/lou.dobbs.tonight/",1,0,0],
["In the Money","/ontv/inthemoney/",1,0,0],
["Web video","/services/video/",1,0,0],
["Buy show videos","https://secure.fdchemedia.com/forms/orcnnfn.html",1,0,0]
]

HM_Array12 = [[130,130,532],
["<b><i>in Money 101</i></b>","/pf/101/",1,0,0],
["Setting Priorities","/pf/101/lessons/1/",1,0,0],
["Making a budget","/pf/101/lessons/2/",1,0,0],
["Basics of banking","/pf/101/lessons/3/",1,0,0],
["Basics of investing","/pf/101/lessons/4/",1,0,0],
["Investing in stocks","/pf/101/lessons/5/",1,0,0],
["Investing in funds","/pf/101/lessons/6/",1,0,0],
["Investing in bonds","/pf/101/lessons/7/",1,0,0],
["Buying a home","/pf/101/lessons/8/",1,0,0],
["Controlling debt","/pf/101/lessons/9/",1,0,0],
["Saving for college","/pf/101/lessons/11/",1,0,0],
["Kids and money","/pf/101/lessons/12/",1,0,0],
["Retirement planning","/pf/101/lessons/13/",1,0,0],
["Asset allocation","/pf/101/lessons/14/",1,0,0],
["Hiring financial help","/pf/101/lessons/15/",1,0,0],
["Health insurance","/pf/101/lessons/16/",1,0,0],
["Buying a car","/pf/101/lessons/17/",1,0,0],
["Taxes","/pf/101/lessons/18/",1,0,0],
["Home insurance","/pf/101/lessons/19/",1,0,0],
["Life insurance","/pf/101/lessons/20/",1,0,0],
["Estate planning","/pf/101/lessons/21/",1,0,0],
["Auto insurance","/pf/101/lessons/22/",1,0,0],
["401(k)s","/pf/101/lessons/23/",1,0,0]
]

HM_Array13 = [[130,130,570],
["<b><i>in Calculators</i></b>","/tools/",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>Fund Screener","http://cgi.money.cnn.com/tools/fundscreener/fundscreener.jsp",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>Retirement Planner","http://cgi.money.cnn.com/tools/retirementplanner/retirementplanner.jsp",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>Moneyville","/pf/saving/moneyville/",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>Savings Calculator","http://cgi.money.cnn.com/tools/savingscalc/savingscalc.html",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>Asset Allocator","http://cgi.money.cnn.com/tools/assetallocwizard/assetallocwizard.html",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>Mortgage Refinance Calculator","http://cgi.money.cnn.com/tools/cutmortgage/cutmortgage.html",1,0,0],
["<img src='http://i.cnn.net/money/images/navigation/nav_calc_icon.gif' width=14 height=15 border=0 vspace=2 hspace=2 align='left'>More calculators","/tools/",1,0,0]
]

HM_Array14 = [[130,130,200],
["<b><i>in Real Estate</i></b>","/real_estate/",1,0,0],
["Best Places","/real_estate/best_places/",1,0,0],
["Buying &amp; Selling","/real_estate/buying_selling/",1,0,0],
["Financing","/real_estate/financing/",1,0,0],
["Home Improvement","/real_estate/improvement/",1,0,0],
["Investment Property","/real_estate/investment_prop/",1,0,0],
["Million $ Life","/real_estate/mil_life/",1,0,0]
]

	document.write("<SCR" + "IPT LANGUAGE='JavaScript1.2' SRC='http://i.cnn.net/money/javascript/code/HM_Script"+ HM_BrowserString +".js' TYPE='text/javascript'><\/SCR" + "IPT>");
}
