#include <stdio.h>

int main(int argc, char *argv[])
{
	FILE *inf, *outf;
	int c, d;
	
	if (argc != 3)
	{
		printf("Usage: %s input output\n", argv[0]);
		return 1;
	}

	inf = fopen(argv[1], "r");
	if (!inf)
	{
		perror("Cannot open input");
		return 2;
	}
	outf = fopen(argv[2], "w");
	if (!inf)
	{
		perror("Cannot write output");
		return 3;
	}

	while (EOF != (c = fgetc(inf)))
	{
		d = fgetc(inf);
		fputc(d, outf);
		fputc(c, outf);
	}

	fclose(inf);
	fclose(outf);
	return 0;
}