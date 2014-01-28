#include <stdio.h>

#define isviscii(c)	((c >= 32 && c != 127) || (c == 2) || (c == 5) || \
					 (c == 6) || (c == 0x14) || (c == 0x19) || \
					 (c == 0x1E))

int main(void)
{
	int i;
	FILE *f = fopen("viscii.html", "w");
	if (!f) return 1;

	fputs("<html>\n <head>\n  <meta http-equiv=\"Content-Type\" "
	      "content=\"text/html;charset=viscii\">\n  <title>VISCII</title>\n"
	      " </head>\n <body>\n  <table>\n   <tr><th>  ", f);

	for (i = 0; i < 16; i ++)
	{
		fprintf(f, "<th>%X", i);
	}

	for (i = 0; i < 256; i ++)
	{
		if (0 == (i & 0x0F))
		{
			fprintf(f, "\n   <tr><th>%02X", i);
		}
		fprintf(f, "<td>%c", isviscii(i) ? (char) i : ' ');
	}

	fputs("\n  </table>\n </body>\n</html>\n", f);
	fclose(f);

	return 0;
}
