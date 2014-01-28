author: kaz@opera.com

Tests in this folder are intended to test the conversion accuracy by compariong  
raw data in various encodings and their corresponding code points in Unicode. 
The tests were originally created in 2002 for Symbian team with actual character 
outputs for visual verification, and updated in 2007 to the current format to 
test (almost) purely encoding conversions without relying on visual outputs.

It is important that browsers understand the given encoding scheme through the 
meta charset and properly decode the test files in order to make this useful. 

These tests do not require any additional fonts for visual verification of 
characters to be tested. However, any code points that failed to match the 
expected Unicode code points will be displayed where additional fonts may be 
useful to have.