#include <stdio.h>

void sjis2kuten(int lead, int trail, int *row, int *cell)
{
	int adjust = trail < 159;
	int rowOffset = lead < 160 ? 112 : 176;
	int cellOffset = adjust ? (trail > 127 ? 32 : 31) : 126;
	*row = ((lead - rowOffset) << 1) - adjust - 32;
	*cell = trail - cellOffset - 32;
}

int main(void)
{
	int i, j, pl;
	int startrow, startcell, endrow, endcell;
	FILE *jp = fopen("shift-jis.html", "w");
	if (!jp) return 1;

	fputs("<html lang=ja>\n <head>\n  <meta http-equiv=\"Content-Type\" "
	      "content=\"text/html;charset=shift_jis\">\n  <title>Shift-JIS</title>\n"
	      "  <style>.unused { background: #ccc; }"
	      " table { float: left; }</style>\n"
	      " </head>\n <body>"
		  "  <table><caption>ASCII/JIS-Roman + half-width katakana</caption>\n"
	      "   <tr><th>  ", jp);

	for (i = 0; i < 16; i ++)
	{
		fprintf(jp, "<th>%X", i);
	}

	/* Singlebyte */

	for (i = 32; i < 224; i ++)
	{
		if (128 == i)
		{
			i = 160;
		}
		if (0 == (i & 0x0F))
		{
			fprintf(jp, "\n   <tr><th>%02X", i);
		}
		fprintf(jp, "<td%s>%c",
		        (127 == i || 160 == i) ? " class=unused" : "",
		        (char) i);
	}

	fputs("\n  </table>\n", jp);

	/* Row-cell multibyte */

	for (i = 0x81; i <= 0xEF; i ++)
	{
		if (0xA0 == i)
		{
			i = 0xE0;
		}

		sjis2kuten(i, 0x40, &startrow, &startcell);
		sjis2kuten(i, 0xFC, &endrow, &endcell);
		
		fprintf(jp, "  <table><caption>Multibyte lead %X (JIS X 0208:1997 "
		            "rows %d&ndash;%d)</caption>\n   <tr><th> ",
		        i, startrow, endrow);
		for (j = 0; j < 16; j ++)
		{
			fprintf(jp, "<th>%X", j);
		}
		for (j = 0x40; j < 0x100; j ++)
		{
			if (0 == (j & 0x0F))
			{
				fprintf(jp, "\n   <tr><th>%02X", j);
			}
			if (0x7F == j || j > 0xFC)
			{
				fputs("<td class=unused>&nbsp;", jp);
			}
			else
			{
				fprintf(jp, "<td>%c%c", (char) i, (char) j);
			}
		}
		fputs("\n  </table>\n", jp);
	}

	/* End */

	fputs("\n </body>\n</html>\n", jp);
	fclose(jp);

	return 0;
}
