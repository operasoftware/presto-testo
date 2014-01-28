#include <stdio.h>
#include <string.h>
#include <errno.h>

#define FILES 2

struct
{
	const char *filename, *charset, *heading;
} data[FILES] =
{
	{ "koi8-r.html", "koi8-r", "KOI8-R" },
	{ "koi8-u.html", "koi8-u", "KOI8-U" }
};

int main(void)
{
	FILE *fp[9];
	char filename[10];
	int i, j;

	for (i = 0; i < FILES; i ++)
	{
		fp[i] = fopen(data[i].filename, "w");
		if (!fp[i])
		{
			fprintf(stderr, "Cannot open %s: %s\n", filename, strerror(errno));
			return 1;
		}

		fprintf(fp[i],
		        "<html>\n <head>\n  <meta http-equiv=\"Content-Type\" "
		        "content=\"text/html;charset=%s\">\n"
		        "  <title>%s</title>\n </head>\n <body>\n"
		        "  <table>\n   <tr><th>  ",
		        data[i].charset, data[i].heading);

		for (j = 0; j < 16; j ++)
		{
			fprintf(fp[i], "<th>%X", j);
		}
	}

	for (i = 0x80; i < 0x100; i ++)
	{
		for (j = 0; j < FILES; j ++)
		{
			if (0 == (i & 0x0F))
			{
				fprintf(fp[j], "\n   <tr><th>%X", i);
			}
			fprintf(fp[j], "<td>%c", (char) i);
		}
	}

	for (i = 0; i < FILES; i ++)
	{
		fprintf(fp[i], "\n  </table>\n </body>\n</html>\n");
		fclose(fp[i]);
	}
}
