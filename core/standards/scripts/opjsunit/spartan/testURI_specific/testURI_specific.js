function testDecodeURI_0() {
  //Invalid 2-byte sequence (this would decode to \u0000 which should be
  //represented as a 1 byte sequence)
  //Throwing here seems like the most logical and safest thing to do
  assertThrows(URIError, decodeURI, "%C0%80");
}
testDecodeURI_0.metadata = {
  bug:"CARAKAN-117"
};

function testDecodeURI_1() {
  //Invalid 3-byte sequence (this would decode to \u0000 which should be
  //represented as a 1 byte sequence)
  //Throwing here seems like the most logical and safest thing to do
  assertThrows(URIError, decodeURI, "%E0%80%80");
}
testDecodeURI_1.metadata = {
  bug:"CARAKAN-117"
};

function testDecodeURI_2() {
  //Invalid 4-byte sequence (this would decode to \u0000 which should be
  //represented as a 1 byte sequence)
  //Throwing here seems like the most logical and safest thing to do
  assertThrows(URIError, decodeURI, "%F0%80%80%80");
}
testDecodeURI_2.metadata = {
  bug:"CARAKAN-117"
};

function testDecodeURIComponent_0() {
  //Invalid 2-byte sequence (this would decode to \u0000 which should be
  //represented as a 1 byte sequence)
  //Throwing here seems like the most logical and safest thing to do
  assertThrows(URIError, decodeURIComponent, "%C0%80");
}
testDecodeURIComponent_0.metadata = {
  bug:"CARAKAN-117"
};

function testDecodeURIComponent_1() {
  //Invalid 3-byte sequence (this would decode to \u0000 which should be
  //represented as a 1 byte sequence)
  //Throwing here seems like the most logical and safest thing to do
  assertThrows(URIError, decodeURIComponent, "%E0%80%80");
}
testDecodeURIComponent_1.metadata = {
  bug:"CARAKAN-117"
};

function testDecodeURIComponent_2() {
  //Invalid 4-byte sequence (this would decode to \u0000 which should be
  //represented as a 1 byte sequence)
  //Throwing here seems like the most logical and safest thing to do
  assertThrows(URIError, decodeURIComponent, "%F0%80%80%80");
}
testDecodeURIComponent_2.metadata = {
  bug:"CARAKAN-117"
};
