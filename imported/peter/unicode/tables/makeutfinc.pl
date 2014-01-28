#!/usr/bin/perl -w
#
# Create Unicode block list in C code, using the NamesList.txt file from
# Unicode.
#
# © 2006 Opera Software ASA
# Peter Karlsson <peter@opera.com>
#
# $Id: makeutfinc.pl 5246 2006-02-20 08:38:48Z peter $

require v5.6.0;

open IN, '<', 'NamesList.txt'   or die "Cannot load NamesList.txt: $!\n";
open UT, '>', 'utf.inc'         or die "Cannot create utf.inc: $!\n";

print UT "struct ublocks\n";
print UT "{\n";
print UT "\tunsigned int start, end;\n";
print UT "\tconst char *title;\n";
print UT "};\n\n";
print UT "const struct ublocks block[] =\n";
print UT "{\n";

while (<IN>)
{
    if (/^@@\t([0-9A-F]*)\t(.*)\t([0-9A-F]*)$/)
    {
        my ($start, $end, $name) = (hex($1), hex($3), $2);

        $name =~ s/C[01] Controls and .* \((.*)\)/$1/;
        $name =~ s/\s*$//g;
        next if $name eq 'Unassigned';

        print UT '//'
            if $name =~ /Surrogate/ || $name =~ /Private Use/;
        printf UT "\t{ 0x%04X, 0x%04X, \"%s\" },\n", $start, $end, $name;
    }
}
print UT "};\n";
