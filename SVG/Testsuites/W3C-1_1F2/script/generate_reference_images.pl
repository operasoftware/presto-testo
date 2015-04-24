#!/usr/bin/perl 
use File::Copy;

%toProcess = ();
$toProcess{$_} = 1 for @ARGV;
$argsSupplied = scalar(@ARGV);

@manifest               = "";
$svg_process_file_list  = "";

$thisTest               = "";
$thisProfile            = "";
$thisOriginal           = "";
$thisSection            = "";
$thisLink               = "";
$thisComment            = "";

$dir_image_patches      = "../imagePatches";
$dir_png                = "../png";
$dir_svg                = "../svg";


#
# GRI_split_manifest_line
#
sub GRI_split_manifest_line
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


#
# ----------------- Main processing --------------------------------------------
#
print "=== Generating Reference PNG Images ===\n";

open(MANIFEST_FH, "./manifest.dat") or die "\nERROR: could not open file manifest.dat\n";
@manifest = <MANIFEST_FH>;
close(MANIFEST_FH);

#
# Go through each to determine what to use for its reference image.
#
foreach $test (@manifest)
{
    GRI_split_manifest_line;
    next if $argsSupplied && !$toProcess{$thisTest};

    print "Processing: $thisOriginal";
    
    my $image_patch_found = 0;
    my $file_path = "$dir_image_patches/$thisTest.png";
    #
    # Check for a PNG image in the imagesPatches directory. If there is
    # a PNG file in the images patches directory use that for the reference
    # image instead of generating the SVG file.
    #

    if (-e $file_path)
    {
        print " - Using PNG image patch\n";
        copy("../imagePatches/$thisTest.png", "../png");
        $image_patch_found = 1;
    }
    
    #
    # Check for an SVG file in the imagePatches directory. If there is
    # a file in the images patches directory use that for the reference
    # image instead of the SVG file in the 'svg' directory.
    #
    $file_path = "$dir_image_patches/$thisOriginal";
    
    if (-e $file_path)
    {
        #
        # If an image patch is already found, print an warning and continue.
        #
        if ($image_patch_found == 1)
        {
            print "-- WARNING test has a duplicate image patch --\n";
            next;
        }
        
        $image_patch_found = 1;
        
        #
        # Add the SVG file in the image patch diretory to the process list.
        #
        $svg_process_file_list = $svg_process_file_list." $dir_image_patches/$thisOriginal";
        print " - Using SVG image patch\n";
    }
    
    #
    # Add the SVG file in the 'svg' diretory to the process list.
    #
    if ($image_patch_found == 0)
    {
        $svg_process_file_list = $svg_process_file_list." $dir_svg/$thisOriginal"; 
        print " - Using SVG file\n";
    }
}


#
# If there are any reference images to be generated then call batik.
#
if ($svg_process_file_list ne "")
{
    system "java -Xmx512m -jar \.\.\/\.\.\/\.\.\/\.\.\/tools\/batik\/batik-rasterizer.jar -d $dir_png -w 480 -h 360 -snapshotTime 200$svg_process_file_list";
}
