#include <stdio.h>

int main(void)
{
	int i, j, pl;
	FILE *b5 = fopen("big5-table.html", "w");
	if (!b5) return 1;

	fputs("<html lang=zh-tw>\n <head>\n  <meta http-equiv=\"Content-Type\" "
	      "content=\"text/html;charset=big5\">\n  <title>Big5</title>\n"
	      "  <style>.unused { background: #ccc; }"
	      " table { float: left; }</style>\n"
	      " </head>\n <body>\n"
		  "  <table><caption>ASCII/CNS-Roman</caption>\n"
	      "   <tr><th>  ", b5);

	for (i = 0; i < 16; i ++)
	{
		fprintf(b5, "<th>%X", i);
	}

	/* Singlebyte */

	for (i = 32; i < 128; i ++)
	{
		if (0 == (i & 0x0F))
		{
			fprintf(b5, "\n   <tr><th>%02X", i);
		}
		fprintf(b5, "<td%s>%c",
		        (127 == i) ? " class=unused" : "",
		        (char) i);
	}

	fputs("\n  </table>\n", b5);

	/* Row-cell multibyte */

	for (i = 0xA1; i <= 0xFE; i ++)
	{
		if (0xA0 == i)
		{
			i = 0xE0;
		}

		fprintf(b5, "  <table><caption>Multibyte: Big5 (Lead %X)</caption>\n   <tr><th> ", i);
		for (j = 0; j < 16; j ++)
		{
			fprintf(b5, "<th>%X", j);
		}
		for (j = 0x40; j < 0x100; j ++)
		{
			if (0x80 == j)
			{
				j = 0xA0;
			}
			if (0 == (j & 0x0F))
			{
				fprintf(b5, "\n   <tr><th>%02X", j);
			}
			if (0x7F == j || 0xA0 == j || j > 0xFE)
			{
				fputs("<td class=unused>&nbsp;", b5);
			}
			else
			{
				fprintf(b5, "<td>%c%c", (char) i, (char) j);
			}
		}
		fputs("\n  </table>\n", b5);
	}

	/* End */

	fputs("\n </body>\n</html>\n", b5);
	fclose(b5);

	return 0;
}
