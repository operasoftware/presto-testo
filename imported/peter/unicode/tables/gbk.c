#include <stdio.h>

int main(void)
{
	int i, j, pl;
	FILE *gbk = fopen("gbk-table.html", "w");
	if (!gbk) return 1;

	fputs("<html lang=zh-cn>\n <head>\n  <meta http-equiv=\"Content-Type\" "
	      "content=\"text/html;charset=x-gbk\">\n  <title>GBK</title>\n"
	      "  <style>.unused { background: #ccc; }"
	      " table { float: left; }</style>\n"
	      " </head>\n <body>\n"
		  "  <table><caption>ASCII/CNS-Roman</caption>\n"
	      "   <tr><th>  ", gbk);

	for (i = 0; i < 16; i ++)
	{
		fprintf(gbk, "<th>%X", i);
	}

	/* Singlebyte */

	for (i = 32; i < 128; i ++)
	{
		if (0 == (i & 0x0F))
		{
			fprintf(gbk, "\n   <tr><th>%02X", i);
		}
		fprintf(gbk, "<td%s>%c",
		        (127 == i) ? " class=unused" : "",
		        (char) i);
	}

	fputs("\n  </table>\n", gbk);

	/* Row-cell multibyte */

	for (i = 0x81; i <= 0xFE; i ++)
	{
		fprintf(gbk, "  <table><caption>Multibyte: GBK (Lead %X)</caption>\n   <tr><th> ", i);
		for (j = 0; j < 16; j ++)
		{
			fprintf(gbk, "<th>%X", j);
		}
		for (j = 0x40; j < 0x100; j ++)
		{
			if (0 == (j & 0x0F))
			{
				fprintf(gbk, "\n   <tr><th>%02X", j);
			}
			if (0x7F == j || j > 0xFE)
			{
				fputs("<td class=unused>&nbsp;", gbk);
			}
			else
			{
				fprintf(gbk, "<td>%c%c", (char) i, (char) j);
			}
		}
		fputs("\n  </table>\n", gbk);
	}

	/* End */

	fputs("\n </body>\n</html>\n", gbk);
	fclose(gbk);

	return 0;
}
