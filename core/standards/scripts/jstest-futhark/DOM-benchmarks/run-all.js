// Common run-all infrastructure

nruns_default = 3;
runsleft = 0;
result = new Object;
nextprog = 0;

function start_test()  // MSIE 5 does not like 'start'
{
    nruns=parseInt(document.getElementById("nruns_input").value);
    if (isNaN(nruns) || nruns <= 0 || nruns > 10)
    {
		alert( "Implausible value for number of runs, please fix.");
		document.getElementById("nruns_input").value = nruns_default;
		return;
    }
    runsleft = 0;
    result = new Object;
    w = window.open("","","height=200, width=200");
    nextprog = 0;

    starttime = new Date();
    schedule();
}

function finish()
{
    endtime = new Date();
    try { w.close(); } catch(e) {}
    var e = document.getElementById("elapsed");
    var txt=format_number((endtime - starttime)/1000) + "s";
    if (e.replaceChild)
		e.replaceChild( document.createTextNode(txt), e.firstChild );
    else if (e.innerText)
		e.innerText = txt;
}

function schedule()
{
    // Let rendering happen following a run
    setTimeout( "schedule2()", 500 );
}

function schedule2()
{
    // Try to clean out the environment.
    w.location.replace( "about:blank" );
    if (window.opera && opera.collect)
        opera.collect();
    setTimeout( "schedule3()", 500 );
}

function schedule3()
{
    if (runsleft == 0)
    {
		if (nextprog < programs.length)
		{
			prog=nextprog++;
			result = new Object;
			w.location.replace( programs[prog] );
			runsleft=nruns-1;
		}
		else
			finish();
    }
    else
    {
		w.location.replace( programs[prog] );
		runsleft--;
    }
}

function format_number(n)
{
    if (Number.prototype.toFixed)
		return n.toFixed(1);
    else
		return Math.round(n*10)/10;
}

function report_result( name, res, done )
{
    if (typeof result[name] != 'number')
		result[name] = 0;
    result[name] += res;
    if (runsleft == 0 && done)
    {
		for ( var i in result )
		{
			var x;
			var tbl = document.getElementById("allresults");
			var row = tbl.insertRow( tbl.rows.length );
			row.insertCell( 0 ).appendChild( document.createTextNode(i) );
			row.insertCell( 1 ).appendChild( document.createTextNode(format_number(result[i]/nruns)) );
		}
    }
    if (done)
		schedule();
}
