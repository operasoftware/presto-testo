#!/usr/bin/perl

#
# This script performs the following operations in the order given on each
# test file in the directory specified by $svg_dir_in.
#
# - Scan test file for "<!-- Author : [author name] [date] ... -->"
# - Place [author name] into <SVGTestCase owner="[author name]" ... >
# - Call xlstproc and transform the test file to the new template.
#

#
# Respective input and output directories.
#
$svg_dir_in                 = "../svg_in/";
$svg_dir_out                = "../svg_out/";

$author_comment             = "<!-- Author :";
$author_comment_len         = length($author_comment);

$owner_attr                 = "owner=\"";
$owner_attr_len             = length($owner_attr);

$template_version_attr      = "template-version=\"1.3\"";
$template_version_attr_len  = length($template_version_attr);

$svg_test_case_elmnt        = "<SVGTestCase";
$svg_test_case_elmnt_len    = length($svg_test_case_elmnt);

$f11_1st_2_f11_2nd_xslt     = "f11_1st_2_f11_2nd.xsl";


#
# Verbose reporting switch: 0 = Off, 1 = On
#
$DEBUG_MODE         = 1;



#
# Get a list of all the SVG test files in the directory
#
@test_file_list =`ls $svg_dir_in | grep \"svg\$\" `;


#
# Test if the output directory exists and if not attempt to create it
#
if (!opendir(OUT_DIR_H, $svg_dir_out))
{
    if ($DEBUG_MODE)
    {
        print "Creating output directory: ".$svg_dir_out."\n";
    }

    if (!mkdir($svg_dir_out))
    {
        print "Epic fail on mkdir ".$svg_dir_out."\n";
        die("$!");
    }
}
else
{
    closedir(OUT_DIR_H);
}


#
# Foreach loop is used to process each SVG file in the input directory.
#
foreach $test_file ( @test_file_list )
{
    my $test_file_in = $svg_dir_in.$test_file;
    my $test_file_temp = $svg_dir_out."Z_".$test_file;
    my $test_file_out = $svg_dir_out.$test_file;
    my $author = "";
    my $test_has_owner = 0;
    my $test_elmnt_line = -1;
    my $test_elmnt_index = -1;
    my $line_count = -1;
    my $skip_file = 0;
    
    chop $test_file_in;
    chop $test_file_out;    
    chop $test_file_temp;

    open(TEST_FILE_IN_H, $test_file_in) or die "\Epic fail: could not open file $test_file_in\n";
    my @test_file_contents = <TEST_FILE_IN_H>;
    close(TEST_FILE_IN_H);
    
    if ($DEBUG_MODE)
    {
        print "\n-------------------------------------------------------------\n";
        print "Checking ".$test_file;
    }

    foreach $line (@test_file_contents)
    {
        ++$line_count;
        
        #
        # Look for template-version
        #
        if ((substr($line, 0, $template_version_attr_len) eq $template_version_attr) || (index($line, $template_version_attr) > 0))
        {
            $skip_file = 1;
            
            if ($DEBUG_MODE)
            {
                print "Test file is already using the new template. Moving to next file...\n";
            }
            
            last;
        }
        

        #
        # Look for the author comment "<!-- Author :" in the file
        #
        if (substr($line, 0, $author_comment_len) eq $author_comment)
        {
            if ($DEBUG_MODE)
            {
                print "Author found: ";
            }

            my $line_frag = substr($line, $author_comment_len + 1);

            #
            # This regular expression captures the first two words (i.e. first
            # name and last name) in the line fragment.
            #
            $line_frag =~ s/^([a-zA-Z]*) *([a-zA-Z]*)/$1 $2/;

            if ($DEBUG_MODE)
            {
                print $1." ".$2."\n";
            }

            $author = $1." ".$2;
        }

        #
        # Look for the <SVGTestCase ... > open element
        #
        if ((substr($line, 0, $svg_test_case_elmnt_len) eq $svg_test_case_elmnt) || (index($line, $svg_test_case_elmnt) > 0))
        {
            $test_elmnt_line = $line_count;
            $test_elmnt_index = index($line, $svg_test_case_elmnt);

            if ($DEBUG_MODE)
            {
                print "Test element found on line: ".$test_elmnt_line.", index: ".$test_elmnt_index."\n";
            }
        }

        #
        # Check for the case where owner="blah" is specified at index 0 or along
        # the string.
        #
        if ((substr($line, 0, $owner_attr_len) eq $owner_attr) || (index($line, $owner_attr) > 0))
        {
            if ($DEBUG_MODE)
            {
                print "Test owner attribute found\n";
            }

            $test_has_owner = 1;
            last;
        }
    }
    #
    # End foreach loop
    #

    if ($skip_file)
    {
        next;
    }

    #
    # Add "owner" attribute to "SVGTestCase" element if it doesn't already
    # contain one.
    #
    if (!$test_has_owner && $author ne "")
    {
        if ($test_elmnt_line == -1 || $test_elmnt_index == -1)
        {
            if ($DEBUG_MODE)
            {
                print "Epic fail. Possible bug found in test. Test element line: ".$test_elmnt_line.", index: ".$test_elmnt_index."\n";
                print "Exiting\n";
            }

            next;
        }

        if ($DEBUG_MODE)
        {
            print "Current SVGTestCase element: ".$test_file_contents[$test_elmnt_line]."\n";
            print "Adding owner=\"".$author."\" to SVGTestCase element\n";
        }

        my $start_elemnt_frag = substr($test_file_contents[$test_elmnt_line], $test_elmnt_index, $svg_test_case_elmnt_len);
        my $end_elment_frag = substr($test_file_contents[$test_elmnt_line], ($test_elmnt_index + $svg_test_case_elmnt_len));

        $test_file_contents[$test_elmnt_line] = $start_elemnt_frag." owner=\"".$author."\"".$end_elment_frag;

        if ($DEBUG_MODE)
        {
            print "New SVGTestCase element: ".$test_file_contents[$test_elmnt_line]."\n";
        }
    }

    #
    # Output modified file. This is done mainly for debugging purposes
    #
    open(TEST_FILE_OUT_H, ">$test_file_temp") or die "Epic fail: could not open file $test_file_temp\n";
    print TEST_FILE_OUT_H @test_file_contents;
    close(TEST_FILE_OUT_H);

    #
    # Transform the test such that it uses the new template
    #   
    system "xsltproc --novalid -o $test_file_out $f11_1st_2_f11_2nd_xslt $test_file_temp";


    if ($DEBUG_MODE)
    {
        print "-------------------------------------------------------------\n";
    }
}