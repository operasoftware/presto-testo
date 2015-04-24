#!/usr/bin/perl

my $status_header       = "resources/test_status_header.xml";
my $status_trailer      = "resources/test_status_trailer.xml";
my $get_status_xslt     = "resources/extract_test_status.xsl";
my $status2html_xslt    = "resources/test_status_2_html.xsl";
my $status_xml_file     = "../status/test_suite_status.xml";
my $status_html_file    = "../status/test_suite_status.html";
my $test_file_list      = "manifest.dat";
my $feature_name = "ALL";
my $count;


sub GTS_split_manifest_line
{
    my @token = split /\t/, $test_file;

    $thisTest = $token[0];
    $thisProfile = $token[1];
    $thisOriginal = $token[2];
    $thisSection = $token[3];
    $thisLink = $token[4];
    $thisComment = $token[5];
    chop $thisComment;
}

#
#-------------------------------------------------------------------------------
#

print "=== Generating Test Suite Status ===\n";

open(STATUS_FH, ">$status_xml_file") || die "Unable to open config $status_xml_file";

open(HEADER_FH, $status_header) or die "\nERROR: could not open file $status_header\n";
my @header = <HEADER_FH>;
close(HEADER_FH);

print STATUS_FH @header;
print STATUS_FH "  <featureTests featureName=\"$feature_name\">\n";

open(LIST_FH, $test_file_list) or die "\nERROR: could not open file $test_file_list\n";
my @test_list = <LIST_FH>;
close(LIST_FH);

foreach $test_file (@test_list)
{
    my $xsltoutput = "";
    my $system_result = 0;

    GTS_split_manifest_line();

    print "Processing: $thisOriginal\n";

    my $pngreference = $thisOriginal;
    $pngreference =~ s/\.svg/\.png/;
    #print "Checking reference: $pngreference\n";
    open my $CMD_TMP, "python contains_red.py ../png/".$pngreference." | " or die "cannot run command: $!";
    my @t_output = <$CMD_TMP>;
    close $CMD_TMP;
    if (scalar(@t_output) > 0)
    {
        print "### WARNING: $thisOriginal reference image contains red (indication of failure).\n";
    }

    open my $CMD_FH, "xsltproc --novalid $get_status_xslt ../svg/".$thisOriginal." | " or die "cannot run command: $!";
    my @xslt_output = <$CMD_FH>;
    close $CMD_FH;

    $system_result = ($? >> 8);

    if ($system_result != 0)
    {
        print "ERROR: $test_file did not transform correctly\n";
        next;
    }

    if (scalar(@t_output) > 0)
    {
        $xslt_output[0] =~ s/\>/ issue=\"usesred\"\>/;
    }

    print STATUS_FH @xslt_output;
    $count++;  
}

open(TRAILER_FH, $status_trailer) or die "\nERROR: could not open file $status_trailer\n";
my @trailer = <TRAILER_FH>;
close(TRAILER_FH);

print STATUS_FH "  </featureTests>\n";
print STATUS_FH @trailer;

close(STATUS_FH);

print "test_status.xml generated with $count tests\n";

system "xsltproc -o $status_html_file $status2html_xslt $status_xml_file";
