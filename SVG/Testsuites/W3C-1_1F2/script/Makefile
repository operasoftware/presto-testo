
none:
	@clear
	@echo
	@echo "+------------------------------------------------------------------+"
	@echo "|                                                                  |"
	@echo "| This suite was created on a Linux machine using the bash         |"
	@echo "|  shell, perl version 5.6, Java(TM) 2 Runtime Environment,        |"
	@echo "|  Standard Edition (build 1.4.1_02-b06), and Batik 1.5            |"
	@echo "|                                                                  |"
	@echo "| syntax make <target>                                             |"
	@echo "|                                                                  |"
	@echo "| valid targets are [all, testsuite, teststatus, images, archives, |"
	@echo "|                    matrix, harness,  queries, manifest,          |"
	@echo "|                    clean_all, clean_suite, clean_status ]        |"
	@echo "|                                                                  |"
	@echo "| make all - recreates the test suite and the test status.         |"
	@echo "|                                                                  |"
	@echo "| make testsuite - recreates the entire test suite.                |"
	@echo "|                                                                  |"
	@echo "| make teststatus - generates the test suite status                |"
	@echo "|                                                                  |"
	@echo "| make images - calls a perl script that generates a shell script  |"
	@echo "|  that requires the batik rasterizer to be installed in the path  |"
	@echo "|  and callable as 'raster' (see images.sh).  message data is      |"
	@echo "|  copied to the terminal for monitoring purposes and logged to    |"
	@echo "|  the file raster.results                                         |"
	@echo "|  Note that the process skips images that are found in the        |"
	@echo "|  directory ../imagePatches The Makefile copies all images in     |"
	@echo "|  this directory directly to the ../png directory at the end of   |"
	@echo "|  the generation cycle.                                           |"
	@echo "|                                                                  |"
	@echo "| make archives - generates the test suite archives in ../archives |"
	@echo "|                                                                  |"
	@echo "| make matrix - generates the implementation reports from the      |"
	@echo "|  xml data in directory ../status/publish                         |"
	@echo "|                                                                  |"
	@echo "| make harness - generates the clean svg files in                  |"
	@echo "|  the svg and html harnesses in ../svgHarness,                    |"
	@echo "|  ../htmlEmbedHarness, and ../htmlObjectHarness                   |"
	@echo "|                                                                  |"
	@echo "| make queries - generates the implementation report templates     |"
	@echo "|                                                                  |"
	@echo "| make manifest - generates the manifest files needed to generate  |"
	@echo "|                 the test suite                                   |"
	@echo "|                                                                  |"
	@echo "| make clean_all - removes all files in generated content          |"
	@echo "|  directories, used to make sure there is no stale content        |"
	@echo "|                                                                  |"
	@echo "| make clean_suite - cleans up the generated test suite files.     |"
	@echo "|                                                                  |"
	@echo "| make clean_status - cleans up the generated test status          |"
	@echo "|                                                                  |"
	@echo "+------------------------------------------------------------------+"
	@echo "| $Revision: 1.9 $ |"
	@echo

all: testsuite teststatus

testsuite:  clean_suite harness queries matrix images archives

clean_images:
	find ../png -type f -name \*.png -exec rm -f {} \;

clean_suite: clean_images
	find ../harness/htmlEmbed ../harness/htmlObject ../harness/htmlObjectMini ../harness/htmlSVGWeb ../harness/htmlSVGWeb_local ../harness/htmlObjectMiniApproved ../harness/htmlObjectApproved  -type f -name \*.html -exec rm -f {} \;
	find ../harness/svg ../harness/svg_animation -type f \( -name \*.svg -o -name \*.svgz \) -exec rm -f {} \;
	rm -f ../archives/*.tar.gz
	rm -f manifest.dat manifest.html
	rm -f raster.log
	rm -f ../harness/index.html
	rm -f ../status/implementation_matrix.svg ../status/implementation_matrix.html ../status/*_implementation_query.xml

clean_status:
	rm -f ../status/test_suite_status.xml
	rm -f ../status/test_suite_status.html

clean_all: clean_suite clean_status

accepted_tests:
	rm -f f11_accepted_tests.txt
	find ../svg -type f \( -name \*.svg -o -name \*.svgz \) | xargs zgrep -l status=\"accepted\" > f11_accepted_tests.txt; sed -i -e "s/.*\///g" f11_accepted_tests.txt; sort f11_accepted_tests.txt -o f11_accepted_tests.txt

all_tests:
	find ../svg -type f \( -name \*.svg -o -name \*.svgz \) > f11_published_tests.txt; sed -i -e "s/.*\///g" f11_published_tests.txt; sort f11_published_tests.txt -o f11_published_tests.txt

manifest: accepted_tests all_tests
	perl ./generate_manifest.pl f11_published_tests.txt manifest.dat manifest.html
	perl ./generate_manifest.pl f11_accepted_tests.txt manifest_accepted.dat manifest_accepted.html

images: manifest
	perl ./generate_reference_images.pl 2>&1 | tee raster.log | grep -v success	

harness: manifest
	perl ./generate_harness.pl

queries:
	perl ./generate_implementation_query.pl ./manifest_accepted.dat

matrix: manifest
	perl ./generate_implementation_matrix_svg.pl ./manifest_accepted.dat ../status/implementation_matrix.svg
	perl ./generate_implementation_matrix_html.pl ./manifest_accepted.dat ../status/implementation_matrix.html

teststatus: clean_status 
	perl ./generate_test_status.pl

archives:
	./generate_archives.sh f11_published_tests.txt
