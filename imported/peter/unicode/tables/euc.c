#include <stdio.h>

int main(void)
{
	int i, j, pl;
	FILE *kr = fopen("euc-kr.html", "w");
	FILE *cn = fopen("euc-cn.html", "w");
	FILE *tw = fopen("euc-tw.html", "w");
	FILE *jp = fopen("euc-jp.html", "w");
	if (!kr || !cn || !tw || !jp) return 1;

	puts("* Code set 0");

	fputs("<html lang=ko>\n <head>\n  <meta http-equiv=\"Content-Type\" "
	      "content=\"text/html;charset=euc-kr\">\n  <title>EUC-KR</title>\n"
	      "  <style>.unused { background: #ccc; }"
	      " table { float: left; }</style>\n"
	      " </head>\n <body>\n"
		  "  <table><caption>Code set 0: ASCII/KS-Roman</caption>\n"
	      "   <tr><th>  ", kr);
	fputs("<html lang=\"zh-cn\">\n <head>\n  <meta http-equiv=\"Content-Type\" "
	      "content=\"text/html;charset=euc-cn\">\n  <title>EUC-CN</title>\n"
	      "  <style>.unused { background: #ccc; }"
	      " table { float: left; }</style>\n"
	      " </head>\n <body>\n"
		  "  <table><caption>Code set 0: ASCII</caption>\n"
	      "   <tr><th>  ", cn);
	fputs("<html lang=\"zh-tw\">\n <head>\n  <meta http-equiv=\"Content-Type\" "
	      "content=\"text/html;charset=euc-tw\">\n  <title>EUC-TW</title>\n"
	      "  <style>.unused { background: #ccc; }"
	      " table { float: left; }</style>\n"
	      " </head>\n <body>\n"
		  "  <table><caption>Code set 0: ASCII/CNS-Roman</caption>\n"
	      "   <tr><th>  ", tw);
	fputs("<html lang=ja>\n <head>\n  <meta http-equiv=\"Content-Type\" "
	      "content=\"text/html;charset=euc-jp\">\n  <title>EUC-JP</title>\n"
	      "  <style>.unused { background: #ccc; }"
	      " table { float: left; }</style>\n"
	      " </head>\n <body>\n"
	      "  <table><caption>Code set 0: ASCII</caption>\n"
	      "   <tr><th>  ", jp);

	for (i = 0; i < 16; i ++)
	{
		fprintf(kr, "<th>%X", i);
		fprintf(cn, "<th>%X", i);
		fprintf(tw, "<th>%X", i);
		fprintf(jp, "<th>%X", i);
	}

	/* Singlebyte */

	for (i = 32; i < 128; i ++)
	{
		if (0 == (i & 0x0F))
		{
			fprintf(kr, "\n   <tr><th>%02X", i);
			fprintf(cn, "\n   <tr><th>%02X", i);
			fprintf(tw, "\n   <tr><th>%02X", i);
			fprintf(jp, "\n   <tr><th>%02X", i);
		}
		fprintf(kr, "<td>%c", (char) i);
		fprintf(cn, "<td>%c", (char) i);
		fprintf(tw, "<td>%c", (char) i);
		fprintf(jp, "<td>%c", (char) i);
	}

	fputs("\n  </table>\n", kr);
	fputs("\n  </table>\n", cn);
	fputs("\n  </table>\n", tw);
	fputs("\n  </table>\n", jp);

	/* Row-cell multibyte */

	puts("* Code set 1");

	for (i = 0x81; i <= 0xA0; i ++)
	{
		fprintf(kr, "  <table><caption>Code set 1: KS X 1001:1992 Row %X</caption>\n   <tr><th> ", i);
		for (j = 0; j < 16; j ++)
		{
			fprintf(kr, "<th>%X", j);
		}
		for (j = 0x40 ; j <= 0xFE; j ++)
		{
			if (0 == (j & 0x0F))
			{
				fprintf(kr, "\n   <tr><th>%02X", j);
			}
			if (0x40 == j || (0x5B <= j && j <= 0x60) ||
			                 (0x7B <= j && j <= 0x80))
			{
				fputs("<td class=unused>&nbsp;", kr);
			}
			else
			{
				fprintf(kr, "<td>%c%c", (char) i, (char) j);
			}
		}
		fputs("<td class=unused>&nbsp;\n  </table>\n", kr);
	}

	for (i = 0xA1; i <= 0xFE; i ++)
	{
		fprintf(kr, "  <table><caption>Code set 1: KS X 1001:1992 Row %X</caption>\n   <tr><th> ", i);
		fprintf(cn, "  <table><caption>Code set 1: GB 2312-80 Row %X</caption>\n   <tr><th> ", i);
		fprintf(tw, "  <table><caption>Code set 1: CNS 11643-1992 Plane 1 Row %X</caption>\n   <tr><th> ", i);
		fprintf(jp, "  <table><caption>Code set 1: JIS X 0208:1997 Row %X</caption>\n   <tr><th> ", i);
		for (j = 0; j < 16; j ++)
		{
			fprintf(kr, "<th>%X", j);
			fprintf(cn, "<th>%X", j);
			fprintf(tw, "<th>%X", j);
			fprintf(jp, "<th>%X", j);
		}
		if (i < 0xC7)
		{
			for (j = 0x40 ; j <= 0x9F; j ++)
			{
				if (0 == (j & 0x0F))
				{
					fprintf(kr, "\n   <tr><th>%02X", j);
				}
				if (0x40 == j || (0x5B <= j && j <= 0x60) ||
				                 (0x7B <= j && j <= 0x80))
				{
					fputs("<td class=unused>&nbsp;", kr);
				}
				else
				{
					fprintf(kr, "<td>%c%c", (char) i, (char) j);
				}
			}
		}
		for (j = 0xA0; j <= 0xFE; j ++)
		{
			if (0 == (j & 0x0F))
			{
				fprintf(kr, "\n   <tr><th>%02X", j);
				fprintf(cn, "\n   <tr><th>%02X", j);
				fprintf(tw, "\n   <tr><th>%02X", j);
				fprintf(jp, "\n   <tr><th>%02X", j);
			}
			if (0xA0 == j)
			{
				if (i < 0xC7)
				{
					fprintf(kr, "<td>%c%c", (char) i, (char) j);
				}
				else
				{
					fputs("<td class=unused>&nbsp;", kr);
				}
				fputs("<td class=unused>&nbsp;", cn);
				fputs("<td class=unused>&nbsp;", tw);
				fputs("<td class=unused>&nbsp;", jp);
			}
			else
			{
				fprintf(kr, "<td>%c%c", (char) i, (char) j);
				fprintf(cn, "<td>%c%c", (char) i, (char) j);
				fprintf(tw, "<td>%c%c", (char) i, (char) j);
				fprintf(jp, "<td>%c%c", (char) i, (char) j);
			}
		}
		fputs("<td class=unused>&nbsp;\n  </table>\n", kr);
		fputs("<td class=unused>&nbsp;\n  </table>\n", cn);
		fputs("<td class=unused>&nbsp;\n  </table>\n", tw);
		fputs("<td class=unused>&nbsp;\n  </table>\n", jp);
	}

	/* Code set 2 for EUC-TW: CNS 11643-1992 plane 1-7 */

	puts("* Code set 2 for EUC-TW");

	for (pl = 0xA1; pl <= 0xB0; pl ++)
	{
		fprintf(tw, "  <h2>Second byte %02X - Plane %d</h2>\n",
		        pl, pl - 0xA0);

		for (i = 0xA1; i <= 0xFE; i ++)
		{
			fprintf(tw, "  <table><caption>Code set 2: CNS 11643-1992 Plane %d Row %X</caption>\n   <tr><th> ",
			        pl - 0xA0, i);
			for (j = 0; j < 16; j ++)
			{
				fprintf(tw, "<th>%X", j);
			}
			for (j = 0xA0; j <= 0xFE; j ++)
			{
				if (0 == (j & 0x0F))
				{
					fprintf(tw, "\n   <tr><th>%02X", j);
				}
				if (0xA0 == j)
				{
					fputs("<td class=unused>&nbsp;", tw);
				}
				else
				{
					fprintf(tw, "<td>\x8E%c%c%c",
					        (char) pl, (char) i, (char) j);
				}
			}
			fputs("<td class=unused>&nbsp;\n  </table>\n", tw);
		}
	}

	/* Code set 2 for EUC-JP: Halfwidth katakana */

	puts("* Code set 2 for EUC-JP");

	fputs("  <table><caption>Code set 2: Half-width katakana</caption>\n"
	      "   <tr><th>  ", jp);

	for (i = 0; i < 16; i ++)
	{
		fprintf(jp, "<th>%X", i);
	}

	/* Singlebyte */

	for (i = 0xA0; i <= 0xDF; i ++)
	{
		if (0 == (i & 0x0F))
		{
			fprintf(jp, "\n   <tr><th>%02X", i);
		}
		if (i > 0xA0)
		{
			fprintf(jp, "<td>\x8E%c", (char) i);
		}
		else
		{
			fprintf(jp, "<td class=unused>&nbsp; ");
		}
	}

	fputs("\n  </table>\n", jp);

	/* Code set 3 for EUC-JP: Row-cell multibyte */

	puts("* Code set 3 for EUC-JP");

	for (i = 0xA1; i <= 0xFE; i ++)
	{
		fprintf(jp, "  <table><caption>Code set 3: JIS X 0212:1990 Row %X</caption>\n   <tr><th> ", i);
		for (j = 0; j < 16; j ++)
		{
			fprintf(jp, "<th>%X", j);
		}
		for (j = 0xA0; j <= 0xFE; j ++)
		{
			if (0 == (j & 0x0F))
			{
				fprintf(jp, "\n   <tr><th>%02X", j);
			}
			if (0xA0 == j)
			{
				fputs("<td class=unused>&nbsp;", jp);
			}
			else
			{
				fprintf(jp, "<td>\x8F%c%c", (char) i, (char) j);
			}
		}
		fputs("<td class=unused>&nbsp;\n  </table>\n", jp);
	}
	/* End */

	fputs("\n </body>\n</html>\n", kr);
	fputs("\n </body>\n</html>\n", cn);
	fputs("\n </body>\n</html>\n", tw);
	fputs("\n </body>\n</html>\n", jp);
	fclose(kr);
	fclose(cn);
	fclose(tw);
	fclose(jp);

	return 0;
}
