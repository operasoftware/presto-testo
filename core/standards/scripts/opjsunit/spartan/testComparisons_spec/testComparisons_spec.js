
function getNull() {
   return null;
}

function getUndefined() {
   return undefined;
}

function testWhileComparison_0() {
    var i=0;
    while(null == null) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_1() {
    var i=0;
    while(null == getNull()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_2() {
    var i=0;
    while(getNull() == null) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_3() {
    var i=0;
    while(getNull() == getNull()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_4() {
    var i=0;
    while(null == undefined) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_5() {
    var i=0;
    while(undefined == null) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_6() {
    var i=0;
    while(getNull() == undefined) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_7() {
    var i=0;
    while(undefined == getNull()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_8() {
    var i=0;
    while(null == getUndefined()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_9() {
    var i=0;
    while(getUndefined() == null) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_10() {
    var i=0;
    while(getNull() == getUndefined()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_11() {
    var i=0;
    while(getUndefined() == getNull()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_12() {
    var i=0;
    while(undefined == undefined) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_13() {
    var i=0;
    while(undefined == getUndefined()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_14() {
    var i=0;
    while(getUndefined() == undefined) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_15() {
    var i=0;
    while(getUndefined() == getUndefined()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_16() {
    var i=0;
    while(null === null) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_17() {
    var i=0;
    while(null === getNull()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_18() {
    var i=0;
    while(getNull() === null) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_19() {
    var i=0;
    while(getNull() === getNull()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_20() {
    var i=0;
    while(null === undefined) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_21() {
    var i=0;
    while(undefined === null) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_22() {
    var i=0;
    while(getNull() === undefined) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_23() {
    var i=0;
    while(undefined === getNull()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_24() {
    var i=0;
    while(null === getUndefined()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_25() {
    var i=0;
    while(getUndefined() === null) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_26() {
    var i=0;
    while(getNull() === getUndefined()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_27() {
    var i=0;
    while(getUndefined() === getNull()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_28() {
    var i=0;
    while(undefined === undefined) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_29() {
    var i=0;
    while(undefined === getUndefined()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_30() {
    var i=0;
    while(getUndefined() === undefined) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_31() {
    var i=0;
    while(getUndefined() === getUndefined()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_32() {
    var i=0;
    while(null != null) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_33() {
    var i=0;
    while(null != getNull()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_34() {
    var i=0;
    while(getNull() != null) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_35() {
    var i=0;
    while(getNull() != getNull()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_36() {
    var i=0;
    while(null != undefined) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_37() {
    var i=0;
    while(undefined != null) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_38() {
    var i=0;
    while(getNull() != undefined) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_39() {
    var i=0;
    while(undefined != getNull()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_40() {
    var i=0;
    while(null != getUndefined()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_41() {
    var i=0;
    while(getUndefined() != null) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_42() {
    var i=0;
    while(getNull() != getUndefined()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_43() {
    var i=0;
    while(getUndefined() != getNull()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_44() {
    var i=0;
    while(undefined != undefined) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_45() {
    var i=0;
    while(undefined != getUndefined()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_46() {
    var i=0;
    while(getUndefined() != undefined) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_47() {
    var i=0;
    while(getUndefined() != getUndefined()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_48() {
    var i=0;
    while(null !== null) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_49() {
    var i=0;
    while(null !== getNull()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_50() {
    var i=0;
    while(getNull() !== null) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_51() {
    var i=0;
    while(getNull() !== getNull()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_52() {
    var i=0;
    while(null !== undefined) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_53() {
    var i=0;
    while(undefined !== null) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_54() {
    var i=0;
    while(getNull() !== undefined) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_55() {
    var i=0;
    while(undefined !== getNull()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_56() {
    var i=0;
    while(null !== getUndefined()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_57() {
    var i=0;
    while(getUndefined() !== null) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_58() {
    var i=0;
    while(getNull() !== getUndefined()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_59() {
    var i=0;
    while(getUndefined() !== getNull()) {
      i++;
      if (i==3) {break;}
    }
    assertEquals(3,i);
}

function testWhileComparison_60() {
    var i=0;
    while(undefined !== undefined) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_61() {
    var i=0;
    while(undefined !== getUndefined()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_62() {
    var i=0;
    while(getUndefined() !== undefined) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testWhileComparison_63() {
    var i=0;
    while(getUndefined() !== getUndefined()) {
       i++;
       assertUnreached();
    }
    i++;
    assertEquals(1,i);
}

function testDoWhileComparison_0() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null == null);
    assertEquals(3,i);
}


function testDoWhileComparison_1() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null == getNull());
    assertEquals(3,i);
}


function testDoWhileComparison_2() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() == null);
    assertEquals(3,i);
}


function testDoWhileComparison_3() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() == getNull());
    assertEquals(3,i);
}


function testDoWhileComparison_4() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null == undefined);
    assertEquals(3,i);
}


function testDoWhileComparison_5() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined == null);
    assertEquals(3,i);
}


function testDoWhileComparison_6() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() == undefined);
    assertEquals(3,i);
}


function testDoWhileComparison_7() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined == getNull());
    assertEquals(3,i);
}


function testDoWhileComparison_8() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null == getUndefined());
    assertEquals(3,i);
}


function testDoWhileComparison_9() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() == null);
    assertEquals(3,i);
}


function testDoWhileComparison_10() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() == getUndefined());
    assertEquals(3,i);
}


function testDoWhileComparison_11() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() == getNull());
    assertEquals(3,i);
}


function testDoWhileComparison_12() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined == undefined);
    assertEquals(3,i);
}


function testDoWhileComparison_13() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined == getUndefined());
    assertEquals(3,i);
}


function testDoWhileComparison_14() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() == undefined);
    assertEquals(3,i);
}


function testDoWhileComparison_15() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() == getUndefined());
    assertEquals(3,i);
}


function testDoWhileComparison_16() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null === null);
    assertEquals(3,i);
}


function testDoWhileComparison_17() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null === getNull());
    assertEquals(3,i);
}


function testDoWhileComparison_18() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() === null);
    assertEquals(3,i);
}


function testDoWhileComparison_19() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() === getNull());
    assertEquals(3,i);
}


function testDoWhileComparison_20() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null === undefined);
    assertEquals(1,i);
}


function testDoWhileComparison_21() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined === null);
    assertEquals(1,i);
}


function testDoWhileComparison_22() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() === undefined);
    assertEquals(1,i);
}


function testDoWhileComparison_23() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined === getNull());
    assertEquals(1,i);
}


function testDoWhileComparison_24() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null === getUndefined());
    assertEquals(1,i);
}


function testDoWhileComparison_25() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() === null);
    assertEquals(1,i);
}


function testDoWhileComparison_26() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() === getUndefined());
    assertEquals(1,i);
}


function testDoWhileComparison_27() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() === getNull());
    assertEquals(1,i);
}


function testDoWhileComparison_28() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined === undefined);
    assertEquals(3,i);
}


function testDoWhileComparison_29() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined === getUndefined());
    assertEquals(3,i);
}


function testDoWhileComparison_30() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() === undefined);
    assertEquals(3,i);
}


function testDoWhileComparison_31() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() === getUndefined());
    assertEquals(3,i);
}


function testDoWhileComparison_32() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null != null);
    assertEquals(1,i);
}


function testDoWhileComparison_33() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null != getNull());
    assertEquals(1,i);
}


function testDoWhileComparison_34() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() != null);
    assertEquals(1,i);
}


function testDoWhileComparison_35() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() != getNull());
    assertEquals(1,i);
}


function testDoWhileComparison_36() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null != undefined);
    assertEquals(1,i);
}


function testDoWhileComparison_37() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined != null);
    assertEquals(1,i);
}


function testDoWhileComparison_38() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() != undefined);
    assertEquals(1,i);
}


function testDoWhileComparison_39() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined != getNull());
    assertEquals(1,i);
}


function testDoWhileComparison_40() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null != getUndefined());
    assertEquals(1,i);
}


function testDoWhileComparison_41() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() != null);
    assertEquals(1,i);
}


function testDoWhileComparison_42() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() != getUndefined());
    assertEquals(1,i);
}


function testDoWhileComparison_43() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() != getNull());
    assertEquals(1,i);
}


function testDoWhileComparison_44() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined != undefined);
    assertEquals(1,i);
}


function testDoWhileComparison_45() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined != getUndefined());
    assertEquals(1,i);
}


function testDoWhileComparison_46() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() != undefined);
    assertEquals(1,i);
}


function testDoWhileComparison_47() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() != getUndefined());
    assertEquals(1,i);
}


function testDoWhileComparison_48() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null !== null);
    assertEquals(1,i);
}


function testDoWhileComparison_49() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null !== getNull());
    assertEquals(1,i);
}


function testDoWhileComparison_50() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() !== null);
    assertEquals(1,i);
}


function testDoWhileComparison_51() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() !== getNull());
    assertEquals(1,i);
}


function testDoWhileComparison_52() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null !== undefined);
    assertEquals(3,i);
}


function testDoWhileComparison_53() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined !== null);
    assertEquals(3,i);
}


function testDoWhileComparison_54() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() !== undefined);
    assertEquals(3,i);
}


function testDoWhileComparison_55() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined !== getNull());
    assertEquals(3,i);
}


function testDoWhileComparison_56() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(null !== getUndefined());
    assertEquals(3,i);
}


function testDoWhileComparison_57() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() !== null);
    assertEquals(3,i);
}


function testDoWhileComparison_58() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getNull() !== getUndefined());
    assertEquals(3,i);
}


function testDoWhileComparison_59() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() !== getNull());
    assertEquals(3,i);
}


function testDoWhileComparison_60() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined !== undefined);
    assertEquals(1,i);
}


function testDoWhileComparison_61() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(undefined !== getUndefined());
    assertEquals(1,i);
}


function testDoWhileComparison_62() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() !== undefined);
    assertEquals(1,i);
}


function testDoWhileComparison_63() {
    var i=0;
    do {
      i++;
      if (i==3) {break;}
    } while(getUndefined() !== getUndefined());
    assertEquals(1,i);
}


function testIfComparison_0() {
    var i=0;
    if ( null == null ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_1() {
    var i=0;
    if ( null == getNull() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_2() {
    var i=0;
    if ( getNull() == null ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_3() {
    var i=0;
    if ( getNull() == getNull() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_4() {
    var i=0;
    if ( null == undefined ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_5() {
    var i=0;
    if ( undefined == null ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_6() {
    var i=0;
    if ( getNull() == undefined ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_7() {
    var i=0;
    if ( undefined == getNull() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_8() {
    var i=0;
    if ( null == getUndefined() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_9() {
    var i=0;
    if ( getUndefined() == null ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_10() {
    var i=0;
    if ( getNull() == getUndefined() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_11() {
    var i=0;
    if ( getUndefined() == getNull() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_12() {
    var i=0;
    if ( undefined == undefined ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_13() {
    var i=0;
    if ( undefined == getUndefined() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_14() {
    var i=0;
    if ( getUndefined() == undefined ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_15() {
    var i=0;
    if ( getUndefined() == getUndefined() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_16() {
    var i=0;
    if ( null === null ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_17() {
    var i=0;
    if ( null === getNull() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_18() {
    var i=0;
    if ( getNull() === null ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_19() {
    var i=0;
    if ( getNull() === getNull() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_20() {
    var i=0;
    if ( null === undefined ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_21() {
    var i=0;
    if ( undefined === null ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_22() {
    var i=0;
    if ( getNull() === undefined ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_23() {
    var i=0;
    if ( undefined === getNull() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_24() {
    var i=0;
    if ( null === getUndefined() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_25() {
    var i=0;
    if ( getUndefined() === null ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_26() {
    var i=0;
    if ( getNull() === getUndefined() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_27() {
    var i=0;
    if ( getUndefined() === getNull() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_28() {
    var i=0;
    if ( undefined === undefined ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_29() {
    var i=0;
    if ( undefined === getUndefined() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_30() {
    var i=0;
    if ( getUndefined() === undefined ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_31() {
    var i=0;
    if ( getUndefined() === getUndefined() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_32() {
    var i=0;
    if ( null != null ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_33() {
    var i=0;
    if ( null != getNull() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_34() {
    var i=0;
    if ( getNull() != null ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_35() {
    var i=0;
    if ( getNull() != getNull() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_36() {
    var i=0;
    if ( null != undefined ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_37() {
    var i=0;
    if ( undefined != null ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_38() {
    var i=0;
    if ( getNull() != undefined ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_39() {
    var i=0;
    if ( undefined != getNull() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_40() {
    var i=0;
    if ( null != getUndefined() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_41() {
    var i=0;
    if ( getUndefined() != null ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_42() {
    var i=0;
    if ( getNull() != getUndefined() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_43() {
    var i=0;
    if ( getUndefined() != getNull() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_44() {
    var i=0;
    if ( undefined != undefined ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_45() {
    var i=0;
    if ( undefined != getUndefined() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_46() {
    var i=0;
    if ( getUndefined() != undefined ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_47() {
    var i=0;
    if ( getUndefined() != getUndefined() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_48() {
    var i=0;
    if ( null !== null ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_49() {
    var i=0;
    if ( null !== getNull() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_50() {
    var i=0;
    if ( getNull() !== null ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_51() {
    var i=0;
    if ( getNull() !== getNull() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_52() {
    var i=0;
    if ( null !== undefined ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_53() {
    var i=0;
    if ( undefined !== null ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_54() {
    var i=0;
    if ( getNull() !== undefined ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_55() {
    var i=0;
    if ( undefined !== getNull() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_56() {
    var i=0;
    if ( null !== getUndefined() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_57() {
    var i=0;
    if ( getUndefined() !== null ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_58() {
    var i=0;
    if ( getNull() !== getUndefined() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_59() {
    var i=0;
    if ( getUndefined() !== getNull() ) {
      i++;
    } else {
      assertUnreached();
    }
    assertEquals(1,i);
}


function testIfComparison_60() {
    var i=0;
    if ( undefined !== undefined ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_61() {
    var i=0;
    if ( undefined !== getUndefined() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_62() {
    var i=0;
    if ( getUndefined() !== undefined ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}


function testIfComparison_63() {
    var i=0;
    if ( getUndefined() !== getUndefined() ) {
      assertUnreached();
    } else {
      i++
    }
    assertEquals(1,i);
}

function testIfComparison_64() {
    function add(a, b, c)
    {
	a = a + b;
	if (0 <= c)
	    return true;
	return a;
    }

    add(10, 2.5, 0.5);
    for (var i = 0; i < 500; ++i)
	assertEquals(add(10, 2.5), 12.5);
}

function testLessThan_0() {
  var x = Object.create(null);
  assertThrows(TypeError(), function () { return x < 2; });
}
testLessThan_0.metadata = {
  bug: "CORE-46136"
};

function testLessThanEqual_0() {
  var x = Object.create(null);
  assertThrows(TypeError(), function () { return x <= 2; });
}
testLessThanEqual_0.metadata = {
  bug: "CORE-46136"
};

function testGreaterThan_0() {
  var x = Object.create(null);
  assertThrows(TypeError(), function () { return x > 2; });
}
testGreaterThan_0.metadata = {
  bug: "CORE-46136"
};

function testGreaterThanEqual_0() {
  var x = Object.create(null);
  assertThrows(TypeError(), function () { return x >= 4; });
}
testGreaterThanEqual_0.metadata = {
  bug: "CORE-46136"
};

