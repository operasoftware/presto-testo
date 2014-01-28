#!/usr/bin/perl -w
#
# Create a HTML <table> and <pre> list of Unicode characters, using the
# NamesList.txt file from Unicode.
#
# © 2000-2005 Opera Software ASA
# Peter Karlsson <peter@opera.com>
#
# $Id: makenameslists.pl 1722 2005-05-02 08:47:45Z peter $

require v5.6.0;

my @block = (
    0x2028..0x202F,		# Formatting
    0xE0000..0xE01EF,	# Tags
    0x11000,			# Sentinel, outside Unicode
);

open IN, '<', 'NamesList.txt'   or die "Cannot load NamesList.txt: $!\n";
open TB, '>', 'names-list.html' or die "Cannot create names-list.html: $!\n";
open PR, '>', 'names-pre.html'  or die "Cannot create names-pre.html: $!\n";

print TB "<html>\n<head>\n <title>Unicode</title>\n</head>\n<body>\n";
print PR "<html>\n<head>\n <title>Unicode</title>\n</head>\n<body>\n<pre>\n";

my $blockidx = 0;
my $newblock = 1;
my $hasdata = 0;

while (<IN>)
{
    next if /<not a character>/;
    next if /<reserved>/;
    next if /<control>/;
    if (/^@@/)
    {
        if ($hasdata)
        {
            print TB " </table>\n";
            $hasdata = 0;
        }
        $newblock = 1;
    }
    elsif (/^([0-9A-F]{4,6})\s*(.*)$/)
    {
        my ($cp, $desc) = (lc($1), $2);
        $desc =~ s/ \*$//;
        $desc =~ s/&/&amp;/;
        $desc =~ s/</&lt;/;
        $desc =~ s/>/&gt;/;
        my $num = hex($cp);
        if ($newblock)
        {
            print TB " <table>\n";
            $newblock = 0;
            $hasdata = 1;
        }
        my $ent = "&#$num;";
        if ($block[$blockidx] == $num)
        {
            $ent = 'n/a';
            ++ $blockidx;
        }

        print TB "  <tr><th>$cp<td> $ent <td>$desc\n";
        print PR "$cp $ent $desc\n";
    }
}

close IN;

print TB " </table>\n" if $hasdata;
print TB "</body>\n</html>\n";
close TB;

print PR "</pre>\n</body>\n</html>\n";
close PR;
