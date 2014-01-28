all: euc-jp.html euc-cn.html euc-kr.html euc-tw.html shift-jis.html \
iso-2022-jp.html utf8-list.html utf16le-list.html utf16be-list.html \
big5-table.html gbk-table.html viscii.html koi8-r.html koi8-u.html \
1250.html 1251.html 1252.html 1253.html 1254.html 1255.html 1256.html 1257.html 1258.html \
8859-1.html 8859-10.html 8859-11.html 8859-13.html 8859-14.html 8859-15.html 8859-16.html 8859-2.html 8859-3.html 8859-4.html 8859-5.html 8859-6.html 8859-7.html 8859-8.html 8859-9.html \
utf8-casing.html hz-gb2312.html utf8/index.html names-list.html names-pre.html

euc-jp.html euc-cn.html euc-kr.html euc-tw.html: euc
	./euc

euc: euc.c
	gcc -o euc euc.c

shift-jis.html: shiftjis
	./shiftjis

shiftjis: shiftjis.c
	gcc -o shiftjis shiftjis.c

iso-2022-jp.html: iso2022jp
	./iso2022jp

iso2022jp: iso2022jp.c
	gcc -o iso2022jp iso2022jp.c

utf8-list.html: utf
	./utf

utf: utf.c utf.inc
	gcc -o utf utf.c

utf16be-list.html: utf8-list.html
	sed 's/-8/-16/' utf8-list.html | iconv --from utf8 --to unicodebig > utf16be-list.html

utf16le-list.html: utf8-list.html
	sed 's/-8/-16/' utf8-list.html | iconv --from utf8 --to unicodelittle > utf16le-list.html

1250.html 1251.html 1252.html 1253.html 1254.html 1255.html 1256.html 1257.html 1258.html: win
	./win

win: win.c
	gcc -o win win.c

big5-table.html: big5
	./big5

big5: big5.c
	gcc -o big5 big5.c

gbk-table.html: gbk
	./gbk

gbk: gbk.c
	gcc -o gbk gbk.c

8859-1.html 8859-10.html 8859-11.html 8859-13.html 8859-14.html 8859-15.html 8859-16.html 8859-2.html 8859-3.html 8859-4.html 8859-5.html 8859-6.html 8859-7.html 8859-8.html 8859-9.html: 8859
	./8859

8859: 8859.c
	gcc -o 8859 8859.c

viscii.html: v
	./v

v: v.c
	gcc -o v v.c

koi8-r.html koi8-u.html: koi
	./koi

koi: koi.c
	gcc -o koi koi.c

utf8-casing.html: utf-upper-lower
	./utf-upper-lower

utf-upper-lower: utf-upper-lower.c
	gcc -o utf-upper-lower utf-upper-lower.c

hz-gb2312.html: hz
	./hz

hz: hz.c
	gcc -o hz hz.c

utf8/index.html: utf-split
	./utf-split

utf-split: utf-split.c utf.inc
	gcc -o utf-split utf-split.c

utf.inc: NamesList.txt makeutfinc.pl
	perl makeutfinc.pl

names-list.html names-pre.html: NamesList.txt makenameslists.pl
	perl makenameslists.pl

NamesList.txt:
	wget -O NamesList.txt http://www.unicode.org/Public/UNIDATA/NamesList.txt

