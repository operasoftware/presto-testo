#include <stdio.h>

#include "utf.inc"

#define FALSE 0
#define TRUE 1

const char *utf8(unsigned int c, FILE *f)
{
	static unsigned char utf[5];

	if (c < 0x80)
	{
		utf[0] = (unsigned char) c;
		utf[1] = 0;
	}
	else if (c < 0x800)
	{
		utf[0] = 0xC0 | (c >> 6);
		utf[1] = 0x80 | (c & 0x3F);
		utf[2] = 0;
	}
	else if (c < 0x10000)
	{
		utf[0] = 0xE0 | (c >> 12);
		utf[1] = 0x80 | ((c >> 6) & 0x3F);
		utf[2] = 0x80 | (c & 0x3F);
		utf[3] = 0;
	}
	else if (c < 0x200000)
	{
		utf[0] = 0xF0 | (c >> 18);
		utf[1] = 0x80 | ((c >> 12) & 0x3F);
		utf[2] = 0x80 | ((c >> 6)  & 0x3F);
		utf[3] = 0x80 | ( c & 0x3F);
		utf[4] = 0;
	}
	else
	{
		utf[0] = 0;
	}
	fprintf(f, "<td> %s ", utf);
}

void title(FILE *idx, FILE *f, const struct ublocks *block,
           int hasprev, int hasnext)
{
	unsigned int i;

	fprintf(f, "<html>\n <head>\n  <meta http-equiv=\"Content-Type\" "
	           "content=\"text/html;charset=utf-8\">"
	           "\n  <title>U+%04X-U+%04X: %s</title>\n",
	           block->start, block->end, block->title);

	if (hasnext)
		fprintf(f, "  <link rel=\"next\" href=\"%04X.html\">\n",
		        block[1].start);
	if (hasprev)
		fprintf(f, "  <link rel=\"prev\" href=\"%04X.html\">\n",
		        block[-1].start);
	else
		fprintf(f, "  <link rel=\"prev\" href=\"./\">\n");

	fprintf(f, "  <link rel=\"contents\" href=\"./\">\n"
	           " </head>\n <body>\n  <table>\n"
	           "   <caption>%s</caption>\n   <tr><th>  ",
	           block->title);

	fprintf(idx, "   <tr><th>U+%04X-U+%04X"
	             "<td><a href=\"%04X.html\">%s</a>\n",
	             block->start, block->end, block->start, block->title);

	for (i = 0; i < 16; i ++)
	{
		fprintf(f, "<th>%X", i);
	}
}

void footer(FILE *f)
{
	fputs("\n  </table>\n </body>\n</html>\n", f);
}

int main(void)
{
	unsigned int i, j, idx;
	char fn[16];
	FILE *f = fopen("utf8/index.html", "w"), *f2;
	if (!f) return 1;

	fputs("<html>\n <head>\n  <meta http-equiv=\"Content-Type\" "
	      "content=\"text/html;charset=utf-8\">\n  <title>UTF-8</title>\n"
	      "  <link rel=\"next\" href=\"0000.html\">\n"
	      " </head>\n <body>\n  <table>\n", f);

	idx = 0;
	sprintf(fn, "utf8/%04X.html", block[idx].start);
	f2 = fopen(fn, "w");
	if (!f2) return 1;
	title(f, f2, &block[idx], FALSE, TRUE);

	for (i = 32; i <= 0xE007F; i ++)
	{
		if (128 == i) i = 160;
		if (0 == (i & 0x0F))
		{
			int newblock = 0;
			while (i >= block[idx].end)
			{
				idx ++;
				newblock = 1;
			}
			if (newblock)
			{
				if (i < block[idx].start)
				{
					i = block[idx].start & 0xFFFFFFF0;
				}
				footer(f2);
				sprintf(fn, "utf8/%04X.html", block[idx].start);
				f2 = fopen(fn, "w");
				if (!f2) return 1;
				title(f, f2, &block[idx], TRUE, block[idx].start != 0xE0000);
			}
			fprintf(f2, "\n   <tr><th>%02X", i);
		}
		utf8(i, f2);
	}
	footer(f2);
	fclose(f2);

	fputs("  </table>\n </body>\n</html>\n", f);
	fclose(f);

	return 0;
}
