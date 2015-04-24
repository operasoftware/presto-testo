#!/usr/bin/perl
use File::Copy;

@reports = `ls ../status/publish/*.xml`;

#@testNames=`cat published_tests.txt | cut -d '.' -f 1`;
$manifestdata = $ARGV[0] || "./manifest.dat";
open(MANIFEST_FH, $manifestdata) or die "\nERROR: could not open file $manifestdata\n";
@manifest = <MANIFEST_FH>;
close(MANIFEST_FH);

$template_path = "resources/impelementation_matrix_template.html";
$target_path = $ARGV[1] || "../status/implementation_matrix.html";

%full;
%basic;
%tiny;

@failing;

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
    $companyDataLine=setReportLine "svg-status-query";
    $company=getAttribute $companyDataLine, " company=";
    $date=getAttribute $companyDataLine, " date=";
    $product=getAttribute $companyDataLine, " product=";
    $version=getAttribute $companyDataLine, " version=";
    $platform=getAttribute $companyDataLine, " platform=";
    $shortName=getAttribute $companyDataLine, " shortName=";
    $profile=getAttribute $companyDataLine, " profile=";
}


#<!--implementationTableHere-->
#<!--fullTableHere-->
#<!--basicTableHere-->
#<!--tinyTableHere-->

sub process
{
    if( $templateLine =~ "-implementationTableHere-" )
    {
        print HTML_FH   "    <table border=\"1\">\n",
                        "      <tr>  \n",
#                        "        <th>&nbsp;</th>\n",
                        "        <th>Company</th>\n",
                        "        <th>Name</th>\n",
                        "        <th>Product</th>\n",
                        "        <th>Profile</th>\n",
                        "        <th>Version</th>\n",
                        "        <th>Platform</th>\n",
                        "      </tr>\n";

        foreach $report ( @reports )
        {
            chop $report;
            print "Processing: $report\n";
            @report = `cat $report`;
            setCompanyData;

            #
            #$company, $date, $product, $version, $platform, $shortName, $profile 
            #

            print HTML_FH   "      <tr>\n",
#                           "        <th>&nbsp;</th>\n",
                            "        <td>$company</td>\n",
                            "        <td>$shortName</td>\n",
                            "        <td>$product</td>\n",
                            "        <td>SVG $profile</td>\n",
                            "        <td>$version</td>\n",
                            "        <td>$platform</td>\n",
                            "      </tr>\n";

            if( $profile eq 'tiny' )
            {
                $tiny{$shortName} = $report;
                print "adding $shortName to tiny\n";
            }
            elsif( $profile eq 'basic' )
            {
                $basic{$shortName} = $report;
                print "adding $shortName to basic\n";
            }
            else
            {
                $full{$shortName} = $report;
                print "adding $shortName to full\n";
            }

        }
        
        print HTML_FH "    </table>\n";
    }
    elsif( $templateLine =~ "-fullTableHere-" )
    {
        print "\nGenerating Full Table.";
        print HTML_FH   "    <h3>SVG Full Results</h3>\n",
                        "    <table class=\"results\" border=\"1\">\n",
                        "      <tr>\n",
                        "        <th>Test&nbsp;Name</th>\n";

        @names = reverse( keys %full );
        foreach $name ( @names )
        {
            print HTML_FH "        <th align=\"center\">$name</th>\n";
        }
        print HTML_FH "      </tr>\n";
                #<th align="left">Comments</th>
        my @notes = ();
        my %notes = ();
        foreach $test (@manifest)
        {
            GIM_split_manifest_line;

            my $rowContents = "        <td class=\"other\"><a href=\"../svg/$thisOriginal\">$thisTest</a>$noteMarkup</td>\n";
            $passing = 0;
            foreach $name (@names)
            {
                $file = $full{$name};
                $data = `grep 'name=.$thisTest' $file`;
                $result = getAttribute $data, "status=";
                $token = ucfirst( lc $result );
                if( length $token < 2 )
                {
                    $token = "Unknown";
                }
                $passing++ if $token eq "Ok";
                $comment = getAttribute $data, "comment=";
                $comment =~ s/&/&amp;/g;
                $comment =~ s/"/&#34;/g;
                $comment =~ s/>/&gt;/g;
                my $note = getAttribute $data, "note=";
                my $noteMarkup = "";
                my $status = $token;
                if ($note ne "") {
                    my $noteNumber;
                    if (exists $notes{$note}) {
                       $noteNumber = $notes{$note};
                    } else {
                       push @notes, $note;
                       $noteNumber = scalar(@notes);
                       $notes{$note} = $noteNumber;
                    }
                    $noteMarkup = " <a href=\"#note" . scalar(@notes) . "\">[" . scalar(@notes) . "]</a>";
                }
                
                if ($status eq "Ok") {
                  $status = "Pass";
                } elsif ($status eq "Na") {
                  $status = "NA";
                }
                $rowContents .= "        <td class=\"$token\" align=\"center\" title=\"$comment\">$status$noteMarkup</td>\n";
            }
            my $class = "";
            if ($passing < 2) {
                push(@failing, $thisTest);
                $class = " class=\"not-two-passing\"";
            }
            print HTML_FH "      <tr$class>\n",
                          $rowContents,
                          "      </tr>\n";
        }
        print HTML_FH "    </table>\n";
        if (scalar(@notes)) {
            print HTML_FH "    <p>Notes:</p>\n";
            print HTML_FH "    <ol>\n";
            for (my $i = 0; $i < scalar(@notes); $i++) {
                print HTML_FH "      <li id=\"note" . ($i + 1) . "\">$notes[$i]</li>\n";
            }
            print HTML_FH "    </ol>\n";
        }
        print "\n";
    }
}


sub run
{
    open(TEMPLATE_FH, "$template_path") or die "\nERROR: could not open file $template_path\n";
    @template = <TEMPLATE_FH>;
    close(TEMPLATE_FH);

    open(HTML_FH, ">$target_path");

    foreach $test (@manifest)
    {
        chop $test;
    }

    foreach $templateLine (@template)
    {
        if( $templateLine =~ /^<!--/ )
        {
            process;
#             if (@failing) {
#                 my $number;
#                 if (scalar(@failing) == 0) {
#                   $number = "There are no tests";
#                 } elsif (scalar(@failing) == 1) {
#                   $number = "There is 1 test";
#                 } else {
#                   $number = "There are " . scalar(@failing) . " tests";
#                 }
#                 print HTML_FH "<p class='test-warning'>$number with fewer than two passing implementations.</p>\n<!--\n";
#                 print HTML_FH map { "$_\n" } @failing;
#                 print HTML_FH "-->\n";
#             }
        }
        else
        {
            print HTML_FH $templateLine;
        }
    }

    close(HTML_FH);
}

print "=== Generating HTML Implementation Matrix ===\n";
run;

copy("resources/ImpStatus.css", "../status");
