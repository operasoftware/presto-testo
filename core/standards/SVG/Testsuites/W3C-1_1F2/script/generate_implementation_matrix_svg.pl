#!/usr/bin/perl

@reports = `ls ../status/publish/*.xml`;

$manifestdata = $ARGV[0] || "./manifest.dat";
open(MANIFEST_FH, $manifestdata) or die "\nERROR: could not open file $manifestdata\n";
@manifest = <MANIFEST_FH>;
close(MANIFEST_FH);


$target_path = $ARGV[1] || "../status/implementation_matrix.svg";
$rows=$#manifest + 1;
$cols=$#reports + 1;
$colWidth=30;
$rowHeight=15;
$leftMargin=200;
$topMargin=100;
$width=$leftMargin+($colWidth*($cols+1));

#if( $width < 400 )
#{
#    $width=400;
#}

$height=$topMargin+($rowHeight*$rows);
$popupGroupStyle=" opacity=\".85\" stroke=\"none\" fill=\"olive\" ";
$popupRectStyle=" stroke=\"olive\" fill=\"white\" ";


sub GIM_split_manifest_line
{
    my @token = split /\t/, $test;
    $thisTest = $token[0];
    $thisProfile = $token[1];
    $thisOriginal = $token[2];
    $thisSection = $token[3];
    $thisLink = $token[4];
    $thisComment = $token[5];
    chop $thisComment;
}


sub plotVerticalGridLine
{
    $xOffset=$x+$colWidth;
    print SVG_FH "M$xOffset,0 $x,$topMargin v$height";
}


sub plotHorizontalGridLine
{
    print SVG_FH "M0,$y h$right"; 
}


sub doWrap
{
    $wrap++;
    if( $wrap%10==0 )
    {
        print SVG_FH "    \n";
    }
}


sub plotGrid
{
    print SVG_FH "  <path id=\"grid\" stroke=\"olive\" fill=\"none\"\n    d=\"\n";
    my $i=0;
    my $wrap=1;
    my $iter=$cols;
    for( $i = 0; $i <= $iter; $i++ )
    {
        $x = $i * $colWidth + $leftMargin;
        plotVerticalGridLine;
        doWrap;
    }

    $iter=$rows;
    $right=$width-$colWidth;
    $style="";

    for( $i = 0; $i <= $iter; $i++ )
    {
        $y = $i * $rowHeight + $topMargin;
        plotHorizontalGridLine;
        doWrap;
    }

    print SVG_FH "\"/>";

}


sub setReportLine
{
    foreach $line ( @report )
    {
        if( $line =~ $_[0] )
        {
            return $line;
        }
    }
    return "";

}


sub getAttribute
{
    my @token=split /\"/,$_[0];
    my $i;

    for( $i = 0; $i < $#token; $i++ )
    {
        if( $token[$i] =~ $_[1] )
        {
            return $token[$i+1];
        }
    } 
    return "";
}


%company;
sub setCompanyData
{
    $companyDataLine = setReportLine "svg-status-query";
    $company = getAttribute $companyDataLine, " company=";
    $date = getAttribute $companyDataLine, " date=";
    $product = getAttribute $companyDataLine, " product=";
    $version = getAttribute $companyDataLine, " version=";
    $platform = getAttribute $companyDataLine, " platform=";
    $shortName = getAttribute $companyDataLine, " shortName=";
    $profile = getAttribute $companyDataLine, " profile=";
}


sub plotCompanyData
{
    print SVG_FH    "    <text id=\"$shortName\" x=\"$x\" y=\"$y\" transform=\"rotate(-74,$x,$y)\">$shortName</text>\n";
    my $left=$x-$leftMargin + 5;
    my $top=$topMargin+5;
    my $popupWidth=$leftMargin+$colWidth;

    print SVG_FH    "    <g visibility=\"hidden\" $popupGroupStyle transform=\"translate($left,$top)\">\n",
                    "      <set begin=\"$shortName.mouseover\" attributeName=\"visibility\" to=\"visible\" end=\"$shortName.mouseout\"/>\n",
                    "      <rect $popupRectStyle width=\"$popupWidth\" height=\"95\"/>\n",
                    "      <g text-anchor=\"end\">\n",
                    "        <text x=\"60\" y=\"15\">company:</text>\n",
                    "        <text x=\"60\" y=\"30\">date:</text>\n",
                    "        <text x=\"60\" y=\"45\">product:</text>\n",
                    "        <text x=\"60\" y=\"60\">version:</text>\n",
                    "        <text x=\"60\" y=\"75\">platform:</text>\n",
                    "        <text x=\"60\" y=\"90\">profile:</text>\n",
                    "      </g>\n",
                    "      <g text-anchor=\"start\" fill=\"black\">\n",
                    "        <text x=\"65\" y=\"15\">$company</text>\n",
                    "        <text x=\"65\" y=\"30\">$date</text>\n",
                    "        <text x=\"65\" y=\"45\">$product</text>\n",
                    "        <text x=\"65\" y=\"60\">$version</text>\n",
                    "        <text x=\"65\" y=\"75\">$platform</text>\n",
                    "        <text x=\"65\" y=\"90\">$profile</text>\n",
                    "      </g>",
                    "    </g>\n";
}


sub plotCompanies
{
    my $iter=$cols-1;
    my $i;
    $x=$leftMargin + 23;
    $y=$topMargin - 10;
    print SVG_FH "  <g id=\"implementor-data\">\n";

    for( $i = 0; $i <= $iter; $i++ )
    {
        @report=`cat $reports[$i]`;
        setCompanyData;
        plotCompanyData;
        $x += $colWidth;
    }
    print SVG_FH "  </g> <!-- id=\"implementor-data\" -->\n";

}


sub plotTestNames
{
    $y=$topMargin+12;
    $x=$leftMargin + 23;
    print SVG_FH "  <g id=\"test-names\" stroke=\"none\" fill=\"black\">\n";
    foreach $test (@manifest)
    {
        GIM_split_manifest_line();
        print SVG_FH "    <text x=\"50\" y=\"$y\">$thisOriginal</text>\n";
        $y+=$rowHeight;
    }

    print SVG_FH "  </g> <!-- id=\"test-names\" -->\n";
}



sub plotCell
{
    my $cellStyle = "";
    my $cellWidth = $colWidth-2;
    my $cellHeight=$rowHeight-2;

    $setId = " id=\"$id\" ";

    if( length( $comment ) < 3 )
    {
        $setId="";
    }

    if( $status eq 'OK' )
    {
        $cellStyle=" fill=\"#0A0\" ";
    }
    elsif( $status eq 'PARTIAL' )
    {
        $cellStyle=" fill=\"#FA0\" ";
    }
    elsif( $status eq 'FAIL' )
    {
        $cellStyle=" fill=\"#F00\" ";
    }
    elsif( $status eq 'NA' )
    {
        $cellStyle=" fill=\"#BBB\" ";
    }

    elsif( $status eq 'BUG' )
    {
        $cellStyle=" fill=\"#00F\" ";
    }
    else
    {
        $cellStyle=" fill=\"#000\" ";
    }

    print SVG_FH "    <rect $setId $cellStyle x=\"$x\" y=\"$y\" width=\"$cellWidth\" height=\"$cellHeight\"/>\n";
}


sub plotData
{
    my $iter=$cols-1;
    my $i;
    
    $x=$leftMargin + 1;
    
    for( $i = 0; $i <= $iter; $i++ )
    {
        print "Processing: $reports[$i]";

        @report=`cat $reports[$i]`;
        setCompanyData;
        print SVG_FH "  <g id=\"$shortName-data\" text-anchor=\"middle\">\n";

        $y=$topMargin + 1;
        $index=0;

        foreach $test (@manifest)
        {
            $id = "$shortName-$index";

            GIM_split_manifest_line();

            $testData = setReportLine $thisTest;

            if( length( $testData ) > 0 )
            {
                $status = getAttribute $testData, " status=";
                $comment = getAttribute $testData, " comment=";
                plotCell;
            }

            $index++;
            $y+=$rowHeight;

        }

        print SVG_FH "  </g> <!--id=\"$shortName-data\" -->\n";
        $x += $colWidth;
    }
}


sub plotComment
{
    my $cellStyle = "";
    my $cellWidth = $colWidth-2;
    my $cellHeight=$rowHeight-2;   

    if( length( $comment ) > 2 )
    {
        my $top=$y-$rowHeight - 20;
        my $center = $width / 2;
        print SVG_FH    "    <g visibility=\"hidden\" $popupGroupStyle transform=\"translate(0,$top)\">\n",
                        "      <set begin=\"$id.mouseover\" attributeName=\"visibility\" to=\"visible\" end=\"$id.mouseout\"/>\n",
                        "      <rect $popupRectStyle width=\"$width\" height=\"20\"/>\n",
                        "      <text x=\"$center\" y=\"15\">$comment</text>\n",
                        "    </g>\n";
    }
}


sub plotComments
{
    my $iter=$cols-1;
    my $i;

    $x=$leftMargin + 1;

    for( $i = 0; $i <= $iter; $i++ )
    {
        @report=`cat $reports[$i]`;
        setCompanyData;
        print SVG_FH "  <g id=\"$shortName-comments\" text-anchor=\"middle\">\n";

        $y=$topMargin + 1;
        $index=0;

        foreach $test (@manifest)
        {
            $id = "$shortName-$index";

            GIM_split_manifest_line();

            $testData = setReportLine $thisTest;

            if( length( $testData ) > 0 )
            {
                $status = getAttribute $testData, " status=";
                $comment = getAttribute $testData, " comment=";

                plotComment;
            }

            $index++;
            $y+=$rowHeight;
        }

        print SVG_FH "  </g> <!--id=\"$shortName-comments\" -->\n";

        $x += $colWidth;
    }
}


sub openFile
{
    open(SVG_FH, ">$target_path");

    print SVG_FH    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n",
                    "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.0//EN\" \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n",
                    "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n",
                    " id=\"svg-1.1-2nd-ed-status-matrix\" width=\"$width\" height=\"$height\">\n";
    
    plotGrid;
    plotTestNames;
    plotData;
    plotCompanies;
    plotComments;
}


sub closeFile
{
    print SVG_FH "</svg>\n";
    close(SVG_FH);
}


sub run
{
    openFile;

    $col = 0;
    
    foreach $report (@reports)
    {
        chomp $report;

        @rep=`cat $report`;
        $row = 0;

        foreach $test (@manifest)
        {
            $row++;
        }

        $col++;
    }
    
    closeFile;
}

print "=== Generating SVG Implementation Matrix ===\n";
run;
