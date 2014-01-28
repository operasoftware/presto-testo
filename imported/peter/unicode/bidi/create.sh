#/bin/sh
files_txt[0]=implicit
files_txt[1]=neutral
files_txt[2]=explicit
files_txt[3]=weak


files_html[4]=mirroring
files_html[5]=diacriticals
files_html[6]=shaping
files_html[7]=reordering
files_html[8]=inline
files_html[9]=lists
files_html[10]=tables

#${files[@]}

mkdir -p out
echo "<html><head><title>Index for bidi testcases</title></head><body><H1> Bidi testcases </H1>Generated :" >out/index.html
/bin/date >>out/index.html
echo "<br><ol>" >> out/index.html

for hej in ${files_txt[@]}; do echo "<li><a href = \"$hej.html\">$hej</a> " >> out/index.html;done

for bu in ${files_html[@]}; do echo "<li><a href = \"$bu.html\">$bu</a> " >> out/index.html; done

echo "</ol></body></html>" >>out/index.html

for tjo in ${files_txt[@]}; do ./biditest -infile in/$tjo.txt -outfile out/$tjo.html ;done

for jogg in ${files_html[@]}; do cp in/$jogg.html out/$jogg.html; done



