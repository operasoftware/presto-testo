#!/usr/bin/perl
use File::Copy;

#
# $Revision: 1.21 $
#


require "./resources/strings.inc";

@manifest = "";

$GH_SVG_HARNESS_REF_DIR     = "../../svg";
$GH_SVG_DIR                 = "../svg";
$GH_SVGWEB_SRC_DIR          = "../../../../tools/svgweb/src";
$GH_SVGWEB_DST_DIR          = "../svgweb";


sub GH_split_manifest_line
{
    my @token = split /\t/, $line;

    $thisTest = $token[0];
    $thisProfile = $token[1];
    $thisOriginal = $token[2];
    $thisSection = $token[3];
    $thisLink = $token[4];
    $thisComment = $token[5];
    chop $thisComment;
}


sub GH_make_index
{
    print HTML_INDEX_FH $HTML_EMBED_TITLE;
    print HTML_INDEX_FH $title;
    print HTML_INDEX_FH $HTML_HEAD;
    print HTML_INDEX_FH $HTML_BODY;
    print HTML_INDEX_FH "    <h1 class=\"pageTitle\">$title</h1>\n",
                        "    <p>Below are the list of tests in the $title. Each test \n",
                        "       has a link to different versions as well as navigation.</p>\n";
    $index = '0';

    print HTML_INDEX_FH "    <ol>\n";
    while( $index <= $#manifest )
    {
        $line = $manifest[$index];

        GH_split_manifest_line();

        print HTML_INDEX_FH "      <li><a href=\"$thisTest.html\">$thisOriginal</a></li>\n";
        ++$index;
    }
    print HTML_INDEX_FH "    </ol>\n",
                        "  </body>\n</html>\n";
}


sub GH_make_top_level
{
    print HTML_TOP_LVL_FH $HTML_EMBED_TITLE;
    print HTML_TOP_LVL_FH $title;
    print HTML_TOP_LVL_FH $HTML_HEAD;
    print HTML_TOP_LVL_FH $HTML_BODY;
    print HTML_TOP_LVL_FH   "    <h1 class=\"pageTitle\">$title</h1>\n",
                            "    <h2>";
    print HTML_TOP_LVL_FH `date "+%d %b %Y"`;
    print HTML_TOP_LVL_FH   "    </h2>\n",

                            "    <p>Welcome to the SVG 1.1 2nd Edition Test Suite.</p>\n",

                            "    <p>See the matrix of test results in either\n",
                            "      <a href=\"../status/implementation_matrix.html\">HTML</a> or <a href=\"../status/implementation_matrix.svg\">SVG</a></p>\n",

                            "    <h3>All accepted tests</h3>",
                            "    <p>Tests in <a href=\"htmlObjectApproved/index.html\">HTML using &lt;object&gt;</a>:</p>\n",
                            "    <p>Tests in <a href=\"htmlObjectMiniApproved/index.html\">minimal HTML using &lt;object&gt;</a>:</p>\n",

                            "    <h3>All tests regardless of status</h3>",
                            "    <p>Note: Tests that contain the draft-watermark are under development and may be incorrectly testing a feature.</p>",
                            "    <p>Tests in <a href=\"htmlObject/index.html\">HTML using &lt;object&gt;</a>:</p>\n",
                            "    <p>Tests in <a href=\"htmlObjectMini/index.html\">minimal HTML using &lt;object&gt;</a>:</p>\n",
                            "    <p>Tests in <a href=\"htmlEmbed/index.html\">HTML using &lt;embed&gt;</a>:</p>\n",
                            "    <p>Tests in <a href=\"htmlSVGWeb/index.html\">HTML using SVG Web</a>:</p>\n",
                            "    <p>Tests in <a href=\"htmlSVGWeb_local/index.html\">HTML using SVG Web locally (requires local webserver)</a>:</p>\n",
#                            "    <p>Tests in <a href=\"svg_animation/index.html\">Pure SVG harness, using </a>:</p>\n",
                            "    <p><a href=\"../archives/W3C_SVG_11_TestSuite.tar.gz\">Download</a> archives of the Testsuite</p>\n",

                            "  </body>\n</html>\n";
}


sub GM_make_indexes
{
    print "Generating html indexes.\n";

    open HTML_INDEX_FH, ">../harness/htmlEmbed/index.html";
    $title = "SVG 1.1 2nd Edition Test Suite &lt;embed&gt;";
    GH_make_index();
    close HTML_INDEX_FH;

    open HTML_INDEX_FH, ">../harness/htmlObject/index.html";
    $title = "SVG 1.1 2nd Edition Test Suite using &lt;object&gt;";
    GH_make_index();
    close HTML_INDEX_FH;

    open HTML_INDEX_FH, ">../harness/htmlSVGWeb/index.html";
    $title = "SVG 1.1 2nd Edition Test Suite using svgweb";
    GH_make_index();
    close HTML_INDEX_FH;

    open HTML_INDEX_FH, ">../harness/htmlSVGWeb_local/index.html";
    $title = "SVG 1.1 2nd Edition Test Suite using svgweb (locally)";
    GH_make_index();
    close HTML_INDEX_FH;
    
    open HTML_INDEX_FH, ">../harness/htmlObjectMini/index.html";
    $title = "SVG 1.1 2nd Edition Test Suite Mini using &lt;object&gt;";
    GH_make_index();
    close HTML_INDEX_FH;
}

sub GM_make_indexes_approved
{
    open HTML_INDEX_FH, ">../harness/htmlObjectMiniApproved/index.html";
    $title = "SVG 1.1 2nd Edition Test Suite Mini using &lt;object&gt;";
    GH_make_index();
    close HTML_INDEX_FH;
    
    open HTML_INDEX_FH, ">../harness/htmlObjectApproved/index.html";
    $title = "SVG 1.1 2nd Edition Test Suite using &lt;object&gt;";
    GH_make_index();
    close HTML_INDEX_FH;

    open HTML_TOP_LVL_FH, ">../harness/index.html";
    $title = "SVG 1.1 2nd Edition Test Suite";
    GH_make_top_level();
    close HTML_TOP_LVL_FH;
}

sub GH_set_last
{
    $line = $_[0];
    GH_split_manifest_line();
    $lastTest = $thisTest;
}


sub GH_set_next
{
    $line = $_[0];
    GH_split_manifest_line();
    $nextTest = $thisTest;
}


sub GH_generate_svg_test
{
    $filename="../harness/svg/$thisOriginal";
    open SVG_FH,  ">$filename";

    my $frameWidth = 10 + 2 * $width;
    my $svgWidth = $frameWidth + 20;
    my $svgHeight = $height + 103;
    my $center = $svgWidth / 2;
    my $rightColumn = $center + 5;
    my $rightCenter = $rightColumn + $width / 2;
    my $leftCenter = 10 + $width / 2;
    my $bottomNav = $svgHeight - 9;

    print SVG_FH    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n",
                    "<!--======================================================================-->\n",
                    "<!--=  Copyright 2009 World Wide Web Consortium, (Massachusetts          =-->\n",
                    "<!--=  Institute of Technology, Institut National de Recherche en        =-->\n",
                    "<!--=  Informatique et en Automatique, Keio University). All Rights      =-->\n",
                    "<!--=  Reserved. See http://www.w3.org/Consortium/Legal/.                =-->\n",
                    "<!--======================================================================-->\n",
                    "<!-- =====================================================================-->\n",
                    "<!--                                                                      -->\n",
                    "<!-- This page generated from script                                      -->\n",
                    "<!--                                                                      -->\n",
                    "<!-- Author of script: Anthony Grasso adapated from Rick Graham's script  -->\n",
                    "<!--           layout: Vincent Hardy                                      -->\n",
                    "<!--                                                                      -->\n",

                    "<!-- File: ".$thisOriginal."-->\n",

                    "<!-- =====================================================================-->\n",
                    "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n",
                    "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"$svgHeight\" width=\"$svgWidth\">\n",
                    "  <image id=\"svgImage\" xlink:href=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\" height=\"$height\" width=\"$width\" y=\"77\" x=\"10\" />\n",
                    "  <image id=\"refImage\" xlink:href=\"../../png/$thisTest.png\" height=\"$height\" width=\"$width\" y=\"77\" x=\"$rightColumn\" />\n",
                    "  <g font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\" fill=\"white\">\n",
                    "    <rect x=\"10\" y=\"25\" width=\"$frameWidth\" height=\"25\" fill=\"black\" />\n",
                    "    <text id=\"testName\" y=\"43\" x=\"$center\" text-anchor=\"middle\" font-size=\"14\" >$thisTest</text>\n",
                    "    <rect x=\"10\" y=\"51\" width=\"$width\" height=\"25\" fill=\"#aaaaaa\" />\n",
                    "    <text x=\"$leftCenter\" y=\"68\" text-anchor=\"middle\">SVG Image</text>\n",
                    "    <rect x=\"$rightColumn\" y=\"51\" width=\"$width\" height=\"25\" fill=\"#aaaaaa\" />\n",
                    "    <text x=\"$rightCenter\" y=\"68\" text-anchor=\"middle\">PNG Image</text>\n",
                    "    <use xlink:href=\"#navigationGroup\" />\n",
                    "  </g>\n",
                    "  <defs>\n",
                    "    <g id=\"navigationGroup\" font-weight=\"bold\" fill=\"#aaaaaa\" >\n",
                    "      <a xlink:href=\"$lastTest.svg\">\n",
                    "        <text y=\"16\" x=\"10\" text-anchor=\"start\" >Previous</text>\n",
                    "      </a>\n",
                    "      <a xlink:href=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\">\n",
                    "        <text y=\"16\" x=\"85\" text-anchor=\"start\" >No Nav</text>\n",
                    "      </a>\n",
                    "      <a xlink:href=\"$nextTest.svg\">\n",
                    "        <text y=\"16\" x=\"150\" text-anchor=\"start\" >Next</text>\n",
                    "      </a>\n",
                    "    </g>\n",
                    "  </defs>\n",
                    "</svg>\n";
}

sub GH_generate_svg_animation_test
{
    $filename="../harness/svg_animation/$thisOriginal";
    open SVG_FH,  ">$filename";

    my $frameWidth = 10 + 2 * $width;
    my $svgWidth = $frameWidth + 20;
    my $svgHeight = $height + 103;
    my $center = $svgWidth / 2;
    my $rightColumn = $center + 5;
    my $rightCenter = $rightColumn + $width / 2;
    my $leftCenter = 10 + $width / 2;
    my $bottomNav = $svgHeight - 9;

    print SVG_FH    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n",
                    "<!--======================================================================-->\n",
                    "<!--=  Copyright 2009 World Wide Web Consortium, (Massachusetts          =-->\n",
                    "<!--=  Institute of Technology, Institut National de Recherche en        =-->\n",
                    "<!--=  Informatique et en Automatique, Keio University). All Rights      =-->\n",
                    "<!--=  Reserved. See http://www.w3.org/Consortium/Legal/.                =-->\n",
                    "<!--======================================================================-->\n",
                    "<!-- =====================================================================-->\n",
                    "<!--                                                                      -->\n",
                    "<!-- This page generated from script                                      -->\n",
                    "<!--                                                                      -->\n",
                    "<!-- Author of script: Anthony Grasso adapated from Rick Graham's script  -->\n",
                    "<!--           layout: Vincent Hardy                                      -->\n",
                    "<!--                                                                      -->\n",

                    "<!-- File: ".$thisOriginal."-->\n",

                    "<!-- =====================================================================-->\n",
                    "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n",
                    "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" height=\"$svgHeight\" width=\"$svgWidth\">\n",
                    "  <animation id=\"svgImage\" xlink:href=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\" height=\"$height\" width=\"$width\" y=\"77\" x=\"10\" />\n",
                    "  <image id=\"refImage\" xlink:href=\"../../png/$thisTest.png\" height=\"$height\" width=\"$width\" y=\"77\" x=\"$rightColumn\" />\n",
                    "  <g font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\" fill=\"white\">\n",
                    "    <rect x=\"10\" y=\"25\" width=\"$frameWidth\" height=\"25\" fill=\"black\" />\n",
                    "    <text id=\"testName\" y=\"43\" x=\"$center\" text-anchor=\"middle\" font-size=\"14\" >$thisTest</text>\n",
                    "    <rect x=\"10\" y=\"51\" width=\"$width\" height=\"25\" fill=\"#aaaaaa\" />\n",
                    "    <text x=\"$leftCenter\" y=\"68\" text-anchor=\"middle\">SVG Animation</text>\n",
                    "    <rect x=\"$rightColumn\" y=\"51\" width=\"$width\" height=\"25\" fill=\"#aaaaaa\" />\n",
                    "    <text x=\"$rightCenter\" y=\"68\" text-anchor=\"middle\">PNG Image</text>\n",
                    "    <use xlink:href=\"#navigationGroup\" />\n",
                    "  </g>\n",
                    "  <defs>\n",
                    "    <g id=\"navigationGroup\" font-weight=\"bold\" fill=\"#aaaaaa\" >\n",
                    "      <a xlink:href=\"$lastTest.svg\">\n",
                    "        <text y=\"16\" x=\"10\" text-anchor=\"start\" >Previous</text>\n",
                    "      </a>\n",
                    "      <a xlink:href=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\">\n",
                    "        <text y=\"16\" x=\"85\" text-anchor=\"start\" >No Nav</text>\n",
                    "      </a>\n",
                    "      <a xlink:href=\"$nextTest.svg\">\n",
                    "        <text y=\"16\" x=\"150\" text-anchor=\"start\" >Next</text>\n",
                    "      </a>\n",
                    "    </g>\n",
                    "  </defs>\n",
                    "</svg>\n";
}

sub GH_print_test_description
{
    open my $CMD_FH, "xsltproc --novalid ./resources/extract_test_description.xsl ../svg/".$thisOriginal." | " or die "cannot run command: $!";
    my @xslt_output = <$CMD_FH>;
    close $CMD_FH;

    foreach $line (@xslt_output)
    {
    		$line =~ s/\sxmlns="[^"]*"//g;
        print HTML_FH $line;
    }
}


sub GH_print_test_operator_script
{
    open my $CMD_FH, "xsltproc --novalid ./resources/extract_test_operator_script.xsl ../svg/".$thisOriginal." | " or die "cannot run command: $!";
    my @xslt_output = <$CMD_FH>;
    close $CMD_FH;

    foreach $line (@xslt_output)
    {
    		$line =~ s/\sxmlns="[^"]*"//g;
        print HTML_FH $line;
    }
}

sub GH_print_test_pass_criteria
{
    open my $CMD_FH, "xsltproc --novalid ./resources/extract_test_pass_criteria.xsl ../svg/".$thisOriginal." | " or die "cannot run command: $!";
    my @xslt_output = <$CMD_FH>;
    close $CMD_FH;

    foreach $line (@xslt_output)
    {
    		$line =~ s/\sxmlns="[^"]*"//g;
        print HTML_FH $line;
    }
}


sub GH_print_html
{
    open HTML_FH, ">$filename";

    print HTML_FH $header;
    print HTML_FH $title;
    print HTML_FH $header2;
    print HTML_FH 	"      <link rel=\"prev\" href=\"$lastTest.html\" />\n",
    								"      <link rel=\"index\" href=\"$indexName.html\" />\n",
    								"      <link rel=\"next\" href=\"$nextTest.html\" />\n",
    								"      <script src=\"../resources/testharnessreport.js\"></script>\n";
    print HTML_FH $HTML_BODY;
    print HTML_FH   "<div class=\"linkbar\"> \n",
                    "  <p>Specification link: <a target=\"spec\" href=\"$thisLink\">$thisSection $thisComment</a></p>\n",
                    "  <p>\n",
                    "    <a href=\"$lastTest.html\" rel=\"prev\">$lastTest ←</a> \n",
                    "    <a href=\"$indexName.html\" rel=\"index\">index</a>\n",
                    "    <a href=\"$nextTest.html\" rel=\"next\">→ $nextTest</a>\n",
                    "  </p>\n",
                    "</div>\n",
										"<div>\n",
                    "  <br />\n",
                    "  <p class=\"warning\">\n",
                    "    Tests that contain the draft-watermark are under development and may be incorrectly testing a feature.\n",
                    "  </p>\n",
                    "</div>\n",
                    "<table align=\"center\" border=\"0\" cellspacing=\"0\" cellpadding=\"10\">\n",
                    "  <tr>\n",
                    "    <td align=\"center\" colspan=\"3\">\n",
                    "      <table border=\"0\" cellpadding=\"8\">\n",
                    "        <tr>\n",
                    "          <td align=\"center\" colspan=\"2\" class=\"pageTitle\">\n",
                    "            <h1>$thisOriginal</h1>\n",
                    "          </td>\n",
                    "        </tr>\n",
                    "        <tr  class=\"navbar\">\n",
                    "          <td align=\"center\">\n",
                    "            SVG Image\n",
                    "          </td>\n",
                    "          <td align=\"center\">\n",
                    "            PNG Image\n",
                    "          </td>\n",
                    "        </tr>\n",
                    "        <tr>\n",
                    "          <td align=\"right\">\n";

    print HTML_FH $svg_gen_ref;

    print HTML_FH   "          </td>\n",
                    "          <td align=\"left\">\n",
                    "            <img alt=\"raster image of $thisOriginal\" src=\"../../png/$thisTest.png\" width=\"$width\" height=\"$height\"/>\n",
                    "          </td>\n",
                    "        </tr>\n",
                    "      </table>\n",
                    "    </td>\n",
                    "  </tr>\n",
                    "</table>\n";

      print HTML_FH   "\n<div class=\"opscript\">\n",
                      "    <h2 id=\"operatorscript\">\n",
                      "      Operator Script\n",
                      "    </h2>\n",
                      "    <div>\n";

      GH_print_test_operator_script();

      print HTML_FH   "  </div>\n",

                      "  <h2 id=\"passcriteria\">\n",
                      "    Pass Criteria\n",
                      "  </h2>\n",
                      "  <div>\n";

      GH_print_test_pass_criteria();

      print HTML_FH   "  </div>\n",
                      "  <h2 id=\"testdescription\">\n",
                      "    Test Description\n",
                      "  </h2>\n",
                      "  <div>\n";

      GH_print_test_description();

      print HTML_FH   "  </div>\n",
                      "</div>\n",
                      "<br/>\n",
                    "<div class=\"linkbar\">\n",
                    "  <p>\n",
                    "    <a href=\"$lastTest.html\" rel=\"prev\">$lastTest ←</a>\n",
                    "    <a href=\"$indexName.html\" rel=\"index\">index</a>\n",
                    "    <a href=\"$nextTest.html\" rel=\"next\">→ $nextTest</a>\n",
                    "  </p>\n",
                    "</div>\n",
                    "</body>\n</html>\n";

    close HTML_FH;
}


sub GH_generate_html_embed_test
{
    $filename="../harness/htmlEmbed/$thisTest.html";
    $header = $HTML_EMBED_TITLE;
    $header2 = $HTML_HEAD;
    $title = "SVG 1.1 2nd Edition Test (&lt;embed&gt;): $thisOriginal\n";
    $svg_gen_ref = "            <embed src=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\" width=\"$width\" height=\"$height\"/>\n";

    GH_print_html();
}


sub GH_generate_html_object_test
{
    $filename = "../harness/htmlObject/$thisTest.html";
    $header = $HTML_OBJECT_TITLE;
    $header2 = $HTML_HEAD;
    $title = "SVG 1.1 2nd Edition Test (&lt;object&gt;): $thisOriginal\n";
    $svg_gen_ref = "            <object data=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\" width=\"$width\" height=\"$height\" type=\"image/svg+xml\"><p style=\"font-size:300%;color:red\">FAIL</p></object>\n";

    GH_print_html();
}

sub GH_generate_html_object_test_approved
{
    $filename = "../harness/htmlObjectApproved/$thisTest.html";
    $header = $HTML_OBJECT_TITLE;
    $header2 = $HTML_HEAD;
    $title = "SVG 1.1 2nd Edition Test (&lt;object&gt;): $thisOriginal\n";
    $svg_gen_ref = "            <object data=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\" width=\"$width\" height=\"$height\" type=\"image/svg+xml\"><p style=\"font-size:300%;color:red\">FAIL</p></object>\n";

    GH_print_html();
}


sub GH_generate_html_object_mini_test
{
    $filename = "../harness/htmlObjectMini/$thisTest.html";
    $header = $HTML_OBJECT_MINI_TITLE;
    $header2 = $HTML_MINI_HEAD;
    $title = "SVG 1.1 2nd Edition Test (&lt;object&gt;): $thisOriginal\n";
    $svg_gen_ref = "            <object data=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\" width=\"$width\" height=\"$height\" type=\"image/svg+xml\"><p style=\"font-size:300%;color:red\">FAIL</p></object>\n";

    open HTML_FH, ">$filename";

    print HTML_FH $header;
    print HTML_FH $title;
    print HTML_FH $header2;
    print HTML_FH 	"      <link rel=\"prev\" href=\"$lastTest.html\" />\n",
    								"      <link rel=\"index\" href=\"$indexName.html\" />\n",
    								"      <link rel=\"next\" href=\"$nextTest.html\" />\n",
    								"      <script src=\"../resources/testharnessreport.js\"></script>\n";                    
    print HTML_FH $HTML_BODY;
    
    print HTML_FH   "    <div class=\"linkbar\">\n",
                    "      <p>\n",
                    "        <a href=\"$lastTest.html\" rel=\"prev\">$lastTest ←</a>\n",
                    "        <a href=\"$indexName.html\" rel=\"index\">index</a>\n",
                    "        <a href=\"$nextTest.html\" rel=\"next\">→ $nextTest</a>\n",
                    "      </p>\n",
                    "    </div>\n";
    
    print HTML_FH   "<table border=\"0\" align=\"center\" cellspacing=\"0\" cellpadding=\"10\">\n",
                    "  <tr>\n",
                    "    <td align=\"center\" colspan=\"3\">\n",
                    "      <table border=\"0\" cellpadding=\"8\">\n",
                    "        <tr  class=\"navbar\">\n",
                    "          <td align=\"center\">\n",
                    "            SVG Image\n",
                    "          </td>\n",
                    "          <td align=\"center\">\n",
                    "            PNG Image\n",
                    "          </td>\n",
                    "        </tr>\n",
                    "        <tr>\n",
                    "          <td align=\"right\">\n";

    print HTML_FH $svg_gen_ref;
    
    print HTML_FH   "          </td>\n",
                    "          <td align=\"left\">\n",
                    "            <img alt=\"raster image of $thisOriginal\" src=\"../../png/$thisTest.png\" width=\"$width\" height=\"$height\"/>\n",
                    "          </td>\n",
                    "        </tr>\n",
                    "      </table>\n",
                    "    </td>\n",
                    "  </tr>\n",
                    "</table>\n";
                    
    if (test_requires_interaction)
    {
        print HTML_FH "\n<div>\n",
                      "    <h4 id=\"operatorscript\" onclick=\"var t = document.getElementById('operatortext'); t.style.display=(t.style.display=='none' ? 'inline' : 'none');\">\n",
                      "      <em>Operator script (click here to toggle)</em>\n",
                      "    </h4>\n",
                      "    <div id=\"operatortext\" style=\"display:none\">\n";

        GH_print_test_operator_script();

        print HTML_FH "  </div>\n  </div>\n";
    }

    
    print HTML_FH   "    <h4 id=\"passcriteria\">\n",
                    "      Pass Criteria\n",
                    "    </h4>\n",
                    "    <div>\n";
    
    GH_print_test_pass_criteria();
   
    print HTML_FH   "    </div>\n    <br />\n",
                    "    <div class=\"linkbar\">\n",
                    "      <p>\n",
                    "        <a href=\"$lastTest.html\" rel=\"prev\">$lastTest ←</a>\n",
                    "        <a href=\"$indexName.html\" rel=\"index\">index</a>\n",
                    "        <a href=\"$nextTest.html\" rel=\"next\">→ $nextTest</a>\n",
                    "      </p>\n",
                    "    </div>\n",
                    "  </body>\n</html>\n";

    close HTML_FH;
}

sub GH_generate_html_object_mini_test_approved
{
    $filename = "../harness/htmlObjectMiniApproved/$thisTest.html";
    $header = $HTML_OBJECT_MINI_TITLE;
    $header2 = $HTML_MINI_HEAD;
    $title = "SVG 1.1 2nd Edition Test (&lt;object&gt;): $thisOriginal\n";
    $svg_gen_ref = "            <object data=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\" width=\"$width\" height=\"$height\" type=\"image/svg+xml\"><p style=\"font-size:300%;color:red\">FAIL</p></object>\n";

    open HTML_FH, ">$filename";

    print HTML_FH $header;
    print HTML_FH $title;
    print HTML_FH $header2;
    print HTML_FH 	"      <link rel=\"prev\" href=\"$lastTest.html\" />\n",
    								"      <link rel=\"index\" href=\"$indexName.html\" />\n",
    								"      <link rel=\"next\" href=\"$nextTest.html\" />\n",
    								"      <script src=\"../resources/testharnessreport.js\"></script>\n";                    
    print HTML_FH $HTML_BODY;
    
    print HTML_FH   "    <div class=\"linkbar\">\n",
                    "      <p>\n",
                    "        <a href=\"$lastTest.html\" rel=\"prev\">$lastTest ←</a>\n",
                    "        <a href=\"$indexName.html\" rel=\"index\">index</a>\n",
                    "        <a href=\"$nextTest.html\" rel=\"next\">→ $nextTest</a>\n",
                    "      </p>\n",
                    "    </div>\n";
    
    print HTML_FH   "<table border=\"0\" align=\"center\" cellspacing=\"0\" cellpadding=\"10\">\n",
                    "  <tr>\n",
                    "    <td align=\"center\" colspan=\"3\">\n",
                    "      <table border=\"0\" cellpadding=\"8\">\n",
                    "        <tr  class=\"navbar\">\n",
                    "          <td align=\"center\">\n",
                    "            SVG Image\n",
                    "          </td>\n",
                    "          <td align=\"center\">\n",
                    "            PNG Image\n",
                    "          </td>\n",
                    "        </tr>\n",
                    "        <tr>\n",
                    "          <td align=\"right\">\n";

    print HTML_FH $svg_gen_ref;
    
    print HTML_FH   "          </td>\n",
                    "          <td align=\"left\">\n",
                    "            <img alt=\"raster image of $thisOriginal\" src=\"../../png/$thisTest.png\" width=\"$width\" height=\"$height\"/>\n",
                    "          </td>\n",
                    "        </tr>\n",
                    "      </table>\n",
                    "    </td>\n",
                    "  </tr>\n",
                    "</table>\n";
                    
    if (test_requires_interaction)
    {
        print HTML_FH "\n<div>\n",
                      "    <h4 id=\"operatorscript\" onclick=\"var t = document.getElementById('operatortext'); t.style.display=(t.style.display=='none' ? 'inline' : 'none');\">\n",
                      "      <em>Operator script (click here to toggle)</em>\n",
                      "    </h4>\n",
                      "    <div id=\"operatortext\" style=\"display:none\">\n";

        GH_print_test_operator_script();

        print HTML_FH "  </div>\n  </div>\n";
    }

    
    print HTML_FH   "    <h4 id=\"passcriteria\">\n",
                    "      Pass Criteria\n",
                    "    </h4>\n",
                    "    <div>\n";
    
    GH_print_test_pass_criteria();
   
    print HTML_FH   "    </div>\n    <br />\n",
                    "    <div class=\"linkbar\">\n",
                    "      <p>\n",
                    "        <a href=\"$lastTest.html\" rel=\"prev\">$lastTest ←</a>\n",
                    "        <a href=\"$indexName.html\" rel=\"index\">index</a>\n",
                    "        <a href=\"$nextTest.html\" rel=\"next\">→ $nextTest</a>\n",
                    "      </p>\n",
                    "    </div>\n",
                    "  </body>\n</html>\n";

    close HTML_FH;
}

sub GH_generate_html_svgweb_test
{
    $filename = "../harness/htmlSVGWeb/$thisTest.html";
    $header = $HTML_SVGWEB_TITLE;
    $header2 = $HTML_HEAD;
    $title = "SVG 1.1 2nd Edition Test (svgweb): $thisOriginal\n";
    $svg_gen_ref = "            <!--[if IE]>\n              <object src=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\" width=\"480\" height=\"360\" classid=\"image/svg+xml\"><p style=\"font-size:300%;color:red\">FAIL</p>\n            <![endif]-->\n            <!--[if !IE]>-->\n              <object data=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\" width=\"480\" height=\"360\" type=\"image/svg+xml\"><p style=\"font-size:300%;color:red\">FAIL</p>\n            <!--<![endif]-->\n              </object>\n";

    GH_print_html();
}


sub GH_generate_html_svgweb_local_test
{
    $filename = "../harness/htmlSVGWeb_local/$thisTest.html";
    $header = $HTML_SVGWEB_LOCAL_TITLE;
    $header2 = $HTML_HEAD;
    $title = "SVG 1.1 2nd Edition Test (svgweb): $thisOriginal\n";
    $svg_gen_ref = "            <!--[if IE]>\n              <object src=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\" width=\"480\" height=\"360\" classid=\"image/svg+xml\"><p style=\"font-size:300%;color:red\">FAIL</p>\n            <![endif]-->\n            <!--[if !IE]>-->\n              <object data=\"$GH_SVG_HARNESS_REF_DIR/$thisOriginal\" width=\"480\" height=\"360\" type=\"image/svg+xml\"><p style=\"font-size:300%;color:red\">FAIL</p>\n            <!--<![endif]-->\n              </object>\n";

    GH_print_html();
}


sub GM_copy_svgweb
{
    print "Copying svgweb.\n";

    opendir(DIR_FH, $GH_SVGWEB_SRC_DIR);
    @dir_list = readdir(DIR_FH);
    closedir(DIR_FH);

    foreach $path (@dir_list)
    {
        my $src_full_path = $GH_SVGWEB_SRC_DIR."/".$path;

        if (-f $src_full_path)
        {
            copy ($src_full_path, "$GH_SVGWEB_DST_DIR/$path");
        }
    }


    opendir(DIR_FH, "$GH_SVGWEB_SRC_DIR/tools");
    @dir_list = readdir(DIR_FH);
    closedir(DIR_FH);

    foreach $path (@dir_list)
    {
        my $src_full_path = $GH_SVGWEB_SRC_DIR."/tools/".$path;

        if (-f $src_full_path)
        {
            copy ($src_full_path, "$GH_SVGWEB_DST_DIR/tools/$path");
        }
    }


    opendir(DIR_FH, "$GH_SVGWEB_SRC_DIR/tools/lib");
    @dir_list = readdir(DIR_FH);
    closedir(DIR_FH);

    foreach $path (@dir_list)
    {
        my $src_full_path = $GH_SVGWEB_SRC_DIR."/tools/lib/".$path;

        if (-f $src_full_path)
        {
            copy ($src_full_path, "$GH_SVGWEB_DST_DIR/tools/lib/$path");
        }
    }
}

sub GM_copy_mini_stylesheet
{
    print "Copying mini stylesheet.\n";

    my $src_full_path = "./resources/harness_mini.css";
    
    if (-f $src_full_path)
    {
        copy ($src_full_path, "../harness/htmlObjectMini/");
        copy ($src_full_path, "../harness/htmlObjectMiniApproved/");
    }
}

#
#-------------------------------------------------------------------------------
#

print "=== Generating Test Harnesses ===\n";

open(MANIFEST_FH, "./manifest.dat") or die "\nERROR: could not open file manifest.dat\n";
@manifest = <MANIFEST_FH>;
close(MANIFEST_FH);

mkdir "../harness", 0777;
mkdir "../harness/htmlEmbed", 0777;
mkdir "../harness/htmlObject", 0777;
mkdir "../harness/htmlObjectMini", 0777;
mkdir "../harness/htmlObjectApproved", 0777;
mkdir "../harness/htmlObjectMiniApproved", 0777;
mkdir "../harness/htmlSVGWeb", 0777;
mkdir "../harness/htmlSVGWeb_local", 0777;
mkdir "../harness/svg", 0777;
mkdir "../svgweb", 0777;
mkdir "../svgweb/tools", 0777;
mkdir "../svgweb/tools/lib", 0777;


$height = "360";
$width = "480";
$indexName = "index";
$index = "0";

while( $index <= $#manifest)
{
    if( $index == 0 )
    {
        GH_set_last $manifest[$#manifest];
        GH_set_next $manifest[$index+1];
    }
    elsif($index == $#manifest)
    {
        GH_set_last $manifest[$index-1];
        GH_set_next $manifest[0];
    }
    else
    {
        GH_set_last $manifest[$index-1];
        GH_set_next $manifest[$index+1];
    }

    $line = $manifest[$index];

    GH_split_manifest_line();

    print "Processing: $thisOriginal\n";

    GH_generate_html_embed_test();
    GH_generate_html_object_test();
    GH_generate_html_object_mini_test();
    GH_generate_html_svgweb_test();
    GH_generate_html_svgweb_local_test();
    GH_generate_svg_test();
    GH_generate_svg_animation_test();

    ++$index;
}

GM_make_indexes();

print "=== Generating harnesses for accepted tests ===\n";
open(MANIFEST_FH, "./manifest_accepted.dat") or die "\nERROR: could not open file manifest_accepted.dat\n";
@manifest = <MANIFEST_FH>;
close(MANIFEST_FH);
$index = "0";

while( $index <= $#manifest)
{
    if( $index == 0 )
    {
        GH_set_last $manifest[$#manifest];
        GH_set_next $manifest[$index+1];
    }
    elsif($index == $#manifest)
    {
        GH_set_last $manifest[$index-1];
        GH_set_next $manifest[0];
    }
    else
    {
        GH_set_last $manifest[$index-1];
        GH_set_next $manifest[$index+1];
    }

    $line = $manifest[$index];

    GH_split_manifest_line();

    print "Processing: $thisOriginal\n";

    GH_generate_html_object_test_approved();
    GH_generate_html_object_mini_test_approved();

    ++$index;
}

GM_make_indexes_approved();
GM_copy_svgweb();
GM_copy_mini_stylesheet();
