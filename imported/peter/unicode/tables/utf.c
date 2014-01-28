#include <stdio.h>

#include "utf.inc"

const char *utf8(int c, FILE *f)
{
	static unsigned char utf[4];

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
	else
	{
		utf[0] = 0;
	}
	fprintf(f, "<td> %s ", utf);
}

int main(void)
{
	int i, j, idx;
	FILE *f = fopen("utf8-list.html", "w");
	if (!f) return 1;

	fputs("<html>\n <head>\n  <meta http-equiv=\"Content-Type\" "
	      "content=\"text/html;charset=utf-8\">\n  <title>UTF-8</title>\n"
	      " </head>\n <body>\n  <table>\n", f);

	idx = 0;
	fprintf(f, "   <caption>%s</caption>\n"
	           "   <tr><th>  ", block[idx].title);

	for (i = 0; i < 16; i ++)
	{
		fprintf(f, "<th>%X", i);
	}

	for (i = 32; i <= 0xfffd ; i ++)
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
					i = block[idx].start & 0xFFF0;
				}
				fprintf(f, "\n  </table>\n  <table>\n"
				           "   <caption>%s</caption>\n"
				           "   <tr><th>  ", block[idx].title);
				for (j = 0; j < 16; j ++)
				{
					fprintf(f, "<th>%X", j);
				}
			}
			fprintf(f, "\n   <tr><th>%02X", i);
		}
		utf8(i, f);
	}
	fputs("\n  </table>\n </body>\n</html>\n", f);
	fclose(f);

	return 0;
}