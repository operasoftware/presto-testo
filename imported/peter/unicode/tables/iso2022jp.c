#include <stdio.h>

int main(void)
{
	int i, j, pl;
	FILE *jp = fopen("iso-2022-jp.html", "w");
	if (!jp) return 1;

	fputs("<html lang=ko>\n <head>\n  <meta http-equiv=\"Content-Type\" "
	      "content=\"text/html;charset=iso-2022-jp\">\n"
	      "  <title>ISO-2022-JP</title>\n"
	      "  <style>.unused { background: #ccc; }"
	      " table { float: left; }</style>\n"
	      " </head>\n <body>\n"
		  "  <table><caption>ASCII/JIS-Roman + half-width katakana</caption>\n"
	      "   <tr><th>  ", jp);

	/* ASCII */

	for (i = 0; i < 16; i ++)
	{
		fprintf(jp, "<th>%X", i);
	}

	for (i = 32; i < 128; i ++)
	{
		if (0 == (i & 0x0F))
		{
			fprintf(jp, "\n   <tr><th>%02X", i);
		}
		fprintf(jp, "<td%s>%c",
		        (127 == i || 160 == i) ? " class=unused" : "",
		        (char) i);
	}

	fputs("\n  </table>\n", jp);

	/* JIS-Roman */

	fputs("  <table><caption>JIS-Roman</caption>\n   <tr><th> ", jp);

	for (i = 0; i < 16; i ++)
	{
		fprintf(jp, "<th>%X", i);
	}

	for (i = 32; i < 128; i ++)
	{
		if (0 == (i & 0x0F))
		{
			fprintf(jp, "\n\x1B""(J   <tr><th>%02X", i);
		}
		fprintf(jp, "<td%s>%c",
		        (127 == i) ? " class=unused" : "",
		        (char) i);
		if (0xF == (i & 0x0F))
		{
			fputs("\x1B""(B", jp);
		}
	}

	fputs("\n  </table>\n", jp);

	/* Row-cell multibyte */
	for (i = 0x21; i <= 0x7E; i ++)
	{
		fprintf(jp, "  <table><caption>Multibyte: JIS X 0208:1983 (Row %X)</caption>\n   <tr><th> ", i);
		for (j = 0; j < 16; j ++)
		{
			fprintf(jp, "<th>%X", j);
		}
		for (j = 0x20; j <= 0x7E; j ++)
		{
			if (0 == (j & 0x0F))
			{
				fprintf(jp, "\n   <tr><th>%02X", j);
			}
			if (0x20 == j)
			{
				fputs("<td class=unused>&nbsp;", jp);
			}
			else
			{
				fprintf(jp, "<td>\x1B""$B%c%c\x1B""(B", (char) i, (char) j);
			}
		}
		fputs("<td class=unused>&nbsp;\n  </table>\n", jp);
	}

	/* End */

	fputs("\n </body>\n</html>\n", jp);
	fclose(jp);

	return 0;
}
