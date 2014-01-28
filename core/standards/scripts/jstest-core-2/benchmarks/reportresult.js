function reportresult( name, n, done )
{
  if (window.opener && window.opener.report_result)
    window.opener.report_result( name, n, typeof done == 'undefined' ? true : done );
}
