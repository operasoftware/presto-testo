#!/usr/bin/perl

require "./resources/strings.inc";

$GH_SVG_DIR = "../svg";

#
# reads in the directory.dat file.
#
sub GM_read_directory_information
{
    my $path = $_[0] || "./resources/directory.dat";    
    open(DIR_DAT_FH, $path)
        or die "\nERROR: could not open file $path\n";

    my @directory_dat = <DIR_DAT_FH>;
    close(DIR_DAT_FH);
    
    my $chapter = "0";
    my $section = "0.0";

    foreach $line (@directory_dat)
    {
        #
        # each valid line in the directory data will have three tab delimited 
        # fields
        #
        my @fields = split /\t/, $line;
        if($#fields >= 2)
        {
            #
            # the name of this chapter or sector is first
            #
            my $short_name = $fields[0];
            #print "---start---\n";
            #print "$shortname\n";

            #
            # the sector code is second, if it starts with a period it is a
            # subsection
            #
            my $sector = $fields[1];
            #print "$sector\n";

            #
            # the label is third
            #
            my $title = $fields[2];

            #
            # create the section number, chapter . sector of just sector
            #
            if( $sector =~ /^\./ )
            {
                $section = $chapter.$sector;
            }
            else
            {
                $section = $sector;
                $chapter = $sector;
            }

            my $url_fragment = $fields[3];

            chomp($url_fragment);

            $section_title_list{$short_name} = $title;
            $section_number_list{$short_name} = $section;
            $section_url_fragment_list{$short_name} = $url_fragment;
            #print "$section_label_list{$short_name}, $section_list{$short_name}, $short_name_list{$section}\n";
            #print $section_url_fragment_list{$short_name}."\n";
            #$_ = <STDIN>;
        }
    }
}


sub gm_split_file
{
    @test_file_seg = split /\./, $test_file;
    @test_name_seg = split /\-/, $test_file_seg[0];

    $test_name = $test_file_seg[0];
    $chapter = $test_name_seg[0];
    $section = $test_name_seg[1];
    $index = $test_name_seg[2];
    $profile = $test_name_seg[scalar @test_name_seg - 1];

    #print "chapter: $chapter, section: $section, index: $index, profile: $profile\n";
    #$_ = <STDIN>;
}


sub gm_write_information
{
    my $hash_value = "$chapter-$section";
    my $section_url = "";

    #
    # Retrieve test link to specification from the test. Pipe the output of 
    # xsltproc to a variable.
    #
    open my $CMD_FH, "xsltproc --novalid ./resources/extract_test_url.xsl ../svg/".$test_file." |";
    $section_url = <$CMD_FH>;
    close $CMD_FH;

    if ($section_url eq "")
    {
        $section_url = "http://www.w3.org/TR/SVG11/".$chapter.".html".$section_url_fragment_list{$hash_value};
    }
    #print "$section_link\n";
    #$_ = <STDIN>;

    #
    # Strip trailing whitespace, this should work fine on all platforms
    #
    $test_file =~ s/\s+$//;

    print MANIFEST_DATA_FH "$test_name\t$profile\t$test_file\t$section_number_list{$hash_value}\t$section_url\t$section_title_list{$hash_value}\n";
    print MANIFEST_HTML_FH "\t<br>$test_name generated from $test_file, <a href=\"$section_url\" target=\"spec\">$section_number_list{$hash_value} $section_title_list{$hash_value}</a>\n";
}

sub GM_check_for_new_tests
{
  open(TEST_LIST_FH, $PUBLISHED_TEST_FILES) or die "\nERROR: could not open file $PUBLISHED_TEST_FILES\n";
  @test_file_list = <TEST_LIST_FH>;
  close(TEST_LIST_FH);
  opendir(DIR_FH, $GH_SVG_DIR);
  @dir_list = readdir(DIR_FH);
  closedir(DIR_FH);
  foreach $line (@dir_list)
  {
    # if it's a file
    if (-f "$GH_SVG_DIR/$line")
    {
      # matches *.svg(z)? pattern
      if ($line =~ m/\.svg(z)?$/i)
      {
        my @matches = grep(/$line/i,@test_file_list);
        if (scalar @matches == 0)
        {
          print $line;
          print "\n";
        }
      }
    }
  }
}

sub GM_build_links
{
    my $tests = $_[0] || $PUBLISHED_TEST_FILES;
    my $manifestdata = $_[1] || "manifest.dat";
    my $manifesthtml = $_[2] || "manifest.html";
    print "=== Generating $manifestdata and $manifesthtml ===\n";
    
    open(TEST_LIST_FH, $tests) or die "\nERROR: could not open file $tests\n";
    @test_file_list = <TEST_LIST_FH>;
    close(TEST_LIST_FH);

    open(MANIFEST_DATA_FH, ">$manifestdata" );
    open(MANIFEST_HTML_FH, ">$manifesthtml" );

    print MANIFEST_HTML_FH $HTML_OBJECT_TITLE;
    print MANIFEST_HTML_FH "SVG Full 1.1 2nd Edition Test Suite Manifest";
    print MANIFEST_HTML_FH $HTML_BODY;

    foreach $test_file (@test_file_list)
    {
        chomp($test_file);
        print "Processing: $test_file\n";
        gm_split_file();
        gm_write_information();
    }

    print MANIFEST_HTML_FH "  </body>\n";
    print MANIFEST_HTML_FH "</html>\n";
    close MANIFEST_DATA_FH;
    close MANIFEST_HTML_FH;
}


GM_read_directory_information("./resources/directory.dat");
GM_build_links($ARGV[0], $ARGV[1], $ARGV[2]);

#print "=== Checking for new tests that haven't been added to the publish list ===\n";
#GM_check_for_new_tests();
