#!/usr/bin/perl


$fullPFX        = "full_";
$basicPFX       = "basic_";
$tinyPFX        = "tiny_";
$input_file     = $ARGV[0] || "./manifest.dat";
$output_file    = "implementation_query.xml";

sub GIQ_split_manifest_line
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


sub GIQ_make_query
{
    print QUERY_FH  "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n",
                    "<!-- shortName=A unique abbreviation to be used for a file name for this file             -->\n",
                    "<!--        and column header for the matrix.  MUST be a legal xml id prefix and fileName -->\n",
                    "<!--       (shortName.xml) please make it 3-12 characters and do not use spaces.          -->\n",
                    "<!-- company=Your company name as you would like it to appear in documentation            -->\n",
                    "<!-- product=The name of the product you are running the test on                          -->\n",
                    "<!-- version=The version number of the product being tested                               -->\n",
                    "<!-- platform=The platform(s) that the product is tested on                               -->\n",
                    "<!-- date=The date of the submission in the form year/month/day, eg. 2002/08/30           -->\n",
                    "<svg-status-query company=\"\" date=\"\" product=\"\" version=\"\" platform=\"\" shortName=\"\" profile=\"". substr( $pfx, 0, -1 )."\">\n";

    $index = '0';

    while( $index <= $#data )
    {
        $test = $data[$index];

        GIQ_split_manifest_line();

        print "Processing: $thisOriginal\n";

        if( $index == 0 )
        {
            print QUERY_FH  "<!-- test attributes:                                                                   -->\n",
                            "<!--    status=must be one of 'OK', 'PARTIAL', 'FAIL', or 'NA'                          -->\n",
                            "<!--    comment=optional comment to publish with the result, like why you don't pass :) -->\n";
        }

        my ($revision);

        $revision = "unknown";
        $test_name = "../svg/".$thisOriginal;

        open(TEST_FH, $test_name) || die "can't open file: $thisOriginal";

        while (<TEST_FH>)
        {
            if (/Revision:/)
            {
                $i = index $_, "Revision:";
                $revision_substr = substr $_, $i;
                ($Fld1,$revision) = split(' ', $revision_substr, 9999);
                last;
            }
        }

        close(TEST_FH);

        print QUERY_FH "   <test name=\"$thisOriginal\" revision=\"$revision\" status=\"\" comment=\"\"/>\n";

        ++$index;
    }

    print QUERY_FH "</svg-status-query>";
    
    print "Total number of tests: $index\n";
}


sub GIQ_make_queries
{
    $pfx = $fullPFX;

    print "\nFull Profile\n";
    open QUERY_FH, ">../status/$pfx$output_file";
    @data = @fullData;
    GIQ_make_query();
    close QUERY_FH;

    print "\nBasic Profile\n";
    $pfx = $basicPFX;
    open QUERY_FH, ">../status/$pfx$output_file";
    @data = @basicData;
    GIQ_make_query();
    close QUERY_FH;

    print "\nTiny Profile\n";
    $pfx = $tinyPFX;
    open QUERY_FH, ">../status/$pfx$output_file";
    @data = @tinyData;
    GIQ_make_query();
    close QUERY_FH;
}


sub GIQ_create_listings
{
    foreach $test (@manifest)
    {
        GIQ_split_manifest_line();

        if ($thisProfile eq 'f')
        {
            push(@fullData, $test);
        }
        elsif ($thisProfile eq 'b')
        {
            push( @basicData, $test );
            push( @fullData, $test );
        }
        elsif ($thisProfile eq 't')
        {
            push(@tinyData, $test);
            push(@basicData, $test);
            push(@fullData, $test);
        }
        else
        {
            print "ERROR: bad profile on manifest for test $thisOriginal\n";
        }
    }
}

print "=== Generating Implementation Query ===\n";

mkdir "../status", 0777;
mkdir "../status/publish", 0777;

open(MANIFEST_FH, $input_file) or die "\nERROR: could not open file manifest.dat\n";
@manifest = <MANIFEST_FH>;
close(MANIFEST_FH);

GIQ_create_listings();
GIQ_make_queries();
