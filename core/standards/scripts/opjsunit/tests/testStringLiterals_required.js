/*
 * Tests for octal escapes:
 * 
 *  OctalEscapeSequence ::
 *      OctalDigit [lookahead ∉ DecimalDigit]
 *      ZeroToThree OctalDigit [lookahead ∉ DecimalDigit]
 *      FourToSeven OctalDigit
 *      ZeroToThree OctalDigit OctalDigit
 *
 * However, both cases of [lookahead ∉ DecimalDigit] need to be
 * [lookahead ∉ OctalDigit] to be compatible with other implementations.
 * 
 */

// OctalDigit [lookahead ∉ OctalDigit]
function testOctalEscape_0() {
  assertEquals("\x00abc", "\0abc");
}

function testOctalEscape_1() {
  assertEquals("\x05abc", "\5abc");
}

function testOctalEscape_2() {
  assertEquals("\x07abc", "\7abc");
}

function testOctalEscape_3() {
  assertEquals("\x009abc", "\09abc");
}

function testOctalEscape_4() {
  assertEquals("\x059abc", "\59abc");
}

function testOctalEscape_5() {
  assertEquals("\x079abc", "\79abc");
}

// These should match EscapeSequence -> NonEscapeCharacter but don't as that
// again uses DecimalDigit and not OctalDigit, and again isn't compatible
// with implementations.
function testOctalEscape_6() {
  assertEquals("8abc", "\8abc");
}

function testOctalEscape_7() {
  assertEquals("89abc", "\89abc");
}

// ZeroToThree OctalDigit [lookahead ∉ OctalDigit]
function testOctalEscape_8() {
  assertEquals("\x00abc", "\00abc");
}

function testOctalEscape_9() {
  assertEquals("\x01abc", "\01abc");
}

function testOctalEscape_10() {
  assertEquals("\x05abc", "\05abc");
}

function testOctalEscape_11() {
  assertEquals("\x07abc", "\07abc");
}

function testOctalEscape_12() {
  assertEquals("\x08abc", "\10abc");
}

function testOctalEscape_13() {
  assertEquals("\x0Dabc", "\15abc");
}

function testOctalEscape_14() {
  assertEquals("\x0Fabc", "\17abc");
}

function testOctalEscape_15() {
  assertEquals("\x009abc", "\009abc");
}

function testOctalEscape_16() {
  assertEquals("\x059abc", "\059abc");
}

function testOctalEscape_17() {
  assertEquals("\x079abc", "\079abc");
}

function testOctalEscape_18() {
  assertEquals("\x089abc", "\109abc");
}

function testOctalEscape_19() {
  assertEquals("\x0D9abc", "\159abc");
}

function testOctalEscape_20() {
  assertEquals("\x0F9abc", "\179abc");
}

// FourToSeven OctalDigit
function testOctalEscape_21() {
  assertEquals("\x20abc", "\40abc");
}

function testOctalEscape_22() {
  assertEquals("\x25abc", "\45abc");
}

function testOctalEscape_23() {
  assertEquals("\x27abc", "\47abc");
}

function testOctalEscape_24() {
  assertEquals("\x38abc", "\70abc");
}

function testOctalEscape_25() {
  assertEquals("\x3Dabc", "\75abc");
}

function testOctalEscape_26() {
  assertEquals("\x3Fabc", "\77abc");
}

function testOctalEscape_27() {
  assertEquals("\x203abc", "\403abc");
}

function testOctalEscape_28() {
  assertEquals("\x253abc", "\453abc");
}

function testOctalEscape_29() {
  assertEquals("\x273abc", "\473abc");
}

function testOctalEscape_30() {
  assertEquals("\x383abc", "\703abc");
}

function testOctalEscape_31() {
  assertEquals("\x3D3abc", "\753abc");
}

function testOctalEscape_32() {
  assertEquals("\x3F3abc", "\773abc");
}

function testOctalEscape_34() {
  assertEquals("\x209abc", "\409abc");
}

function testOctalEscape_35() {
  assertEquals("\x259abc", "\459abc");
}

function testOctalEscape_36() {
  assertEquals("\x279abc", "\479abc");
}

function testOctalEscape_37() {
  assertEquals("\x389abc", "\709abc");
}

function testOctalEscape_38() {
  assertEquals("\x3D9abc", "\759abc");
}

function testOctalEscape_39() {
  assertEquals("\x3F9abc", "\779abc");
}

// ZeroToThree OctalDigit OctalDigit
function testOctalEscape_40() {
  assertEquals("\x00abc", "\000abc");
}

function testOctalEscape_41() {
  assertEquals("\x01abc", "\001abc");
}

function testOctalEscape_42() {
  assertEquals("\x05abc", "\005abc");
}

function testOctalEscape_43() {
  assertEquals("\x07abc", "\007abc");
}

function testOctalEscape_44() {
  assertEquals("\x08abc", "\010abc");
}

function testOctalEscape_45() {
  assertEquals("\x0Dabc", "\015abc");
}

function testOctalEscape_46() {
  assertEquals("\x0Fabc", "\017abc");
}

function testOctalEscape_47() {
  assertEquals("\x40abc", "\100abc");
}

function testOctalEscape_48() {
  assertEquals("\x45abc", "\105abc");
}

function testOctalEscape_49() {
  assertEquals("\x47abc", "\107abc");
}

function testOctalEscape_50() {
  assertEquals("\x68abc", "\150abc");
}

function testOctalEscape_51() {
  assertEquals("\x6Dabc", "\155abc");
}

function testOctalEscape_52() {
  assertEquals("\x6Fabc", "\157abc");
}

function testOctalEscape_53() {
  assertEquals("\x003abc", "\0003abc");
}

function testOctalEscape_54() {
  assertEquals("\x013abc", "\0013abc");
}

function testOctalEscape_55() {
  assertEquals("\x053abc", "\0053abc");
}

function testOctalEscape_56() {
  assertEquals("\x073abc", "\0073abc");
}

function testOctalEscape_57() {
  assertEquals("\x083abc", "\0103abc");
}

function testOctalEscape_58() {
  assertEquals("\x0D3abc", "\0153abc");
}

function testOctalEscape_59() {
  assertEquals("\x0F3abc", "\0173abc");
}

function testOctalEscape_60() {
  assertEquals("\x403abc", "\1003abc");
}

function testOctalEscape_61() {
  assertEquals("\x453abc", "\1053abc");
}

function testOctalEscape_62() {
  assertEquals("\x473abc", "\1073abc");
}

function testOctalEscape_63() {
  assertEquals("\x683abc", "\1503abc");
}

function testOctalEscape_64() {
  assertEquals("\x6D3abc", "\1553abc");
}

function testOctalEscape_65() {
  assertEquals("\x6F3abc", "\1573abc");
}

function testOctalEscape_66() {
  assertEquals("\x009abc", "\0009abc");
}

function testOctalEscape_67() {
  assertEquals("\x019abc", "\0019abc");
}

function testOctalEscape_68() {
  assertEquals("\x059abc", "\0059abc");
}

function testOctalEscape_69() {
  assertEquals("\x079abc", "\0079abc");
}

function testOctalEscape_70() {
  assertEquals("\x089abc", "\0109abc");
}

function testOctalEscape_71() {
  assertEquals("\x0D9abc", "\0159abc");
}

function testOctalEscape_72() {
  assertEquals("\x0F9abc", "\0179abc");
}

function testOctalEscape_73() {
  assertEquals("\x409abc", "\1009abc");
}

function testOctalEscape_74() {
  assertEquals("\x459abc", "\1059abc");
}

function testOctalEscape_75() {
  assertEquals("\x479abc", "\1079abc");
}

function testOctalEscape_76() {
  assertEquals("\x689abc", "\1509abc");
}

function testOctalEscape_77() {
  assertEquals("\x6D9abc", "\1559abc");
}

function testOctalEscape_78() {
  assertEquals("\x6F9abc", "\1579abc");
}
