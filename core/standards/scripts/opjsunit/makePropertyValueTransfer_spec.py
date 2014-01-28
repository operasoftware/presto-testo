import json, itertools

initial = ("ESI_GET", "ESI_GETI_IMM", "ESI_GETN_IMM", "ESI_GET_LEXICAL", "ESI_GET_GLOBAL")
middle = ("ESI_GET", "ESI_GETI_IMM", "ESI_GETN_IMM")
end = ("ESI_GET", "ESI_GETI_IMM", "ESI_GETN_IMM", "ESI_PUT", "ESI_PUTI_IMM", "ESI_PUTN_IMM")

indexed = frozenset(["ESI_GETI_IMM", "ESI_PUTI_IMM"])
named = frozenset(["ESI_GETN_IMM", "ESI_PUTN_IMM"])
varied = frozenset(["ESI_GET", "ESI_PUT"])

def main():
    print "//opjsunit: run_tests_individually"
    print "var x;"
    number = 0
    for props in range(2, 4):
        instructionsProduct = []
        args = [initial]
        for prop in range(props-2):
            args.append(middle)
        args.append(end)
        instructionsProduct.extend(itertools.product(*args))
        for instructionList in instructionsProduct:
            createTest(number, instructionList, None, None, None)
            number += 1
            for k in range(1, getObjectDepth(instructionList)):
                createTest(number, instructionList, "TypeError", "non-object", k)
                number += 1
            for k in range(2, getObjectDepth(instructionList)):
                createTest(number, instructionList, "TypeError", "property-no-longer-exists", k)
                number += 1
            createTest(number, instructionList, None, "property-no-longer-exists", getObjectDepth(instructionList))
            number += 1
            for k in range(1, getObjectDepth(instructionList)):
                createTest(number, instructionList, None, "class-changed", k)
                number += 1
            for k in [i for i, inst in enumerate(instructionList) if inst in ("ESI_GET", "ESI_GETI_IMM")]:
                if instructionList[0] not in ("ESI_GET_LEXICAL", "ESI_GET_GLOBAL"):
                    k += 1
                createTest(number, instructionList, None, "becomes-sparse", k)
                number += 1

def getObjectDepth(instructions):
    if instructions[0] in ("ESI_GET_LEXICAL", "ESI_GET_GLOBAL"):
        return len(instructions)
    else:
        return len(instructions) + 1

def constructPropertyAccessor(obj):
    nextChangable = "a"
    result = [obj[0]]
    for prop in obj[1:]:
        if prop == None:
            result.append("[%s]" % nextChangable)
            nextChangable = chr(ord(nextChangable) + 1)
        elif prop.isalpha():
            result.append(".%s" % prop)
        else:
            result.append("[%s]" % json.dumps(prop))
    return "".join(result)

def createTest(number, instructions, expectedError = None, failure = None, failDepth = None):
    indent = ""
    print "function testPropertyValueTransfer_%i() {" % number
    indent += "  "
    print "%s// Instructions: %s." % (indent, ", ".join(instructions))
    if failure:
        print "%s// Failure: %s at depth %i." % (indent, failure, failDepth)
    
    if expectedError != None:
        print "%sfunction test(){" % indent
        indent += "  "

    if (instructions[0] != "ESI_GET_GLOBAL"):
        print "%svar x;" % indent
    
    if instructions[0] in ("ESI_GET_GLOBAL", "ESI_GET_LEXICAL"):
        relevantInstructions = instructions[1:]
    else:
        relevantInstructions = instructions

    obj = {}
    currentObj = obj
    struct = ["x"]
    for next_int in relevantInstructions:
        if next_int in indexed:
            currentObj["0"] = {}
            currentObj["c"] = 2
            currentObj = currentObj["0"]
            struct.append("0")
        elif next_int in named:
            currentObj["a"] = {}
            currentObj["c"] = 2
            currentObj = currentObj["a"]
            struct.append("a")
        elif next_int in varied:
            currentObj["0"] = {}
            currentObj["1"] = currentObj["0"]
            currentObj["c"] = 2
            currentObj = currentObj["0"]
            struct.append(None)

    def setValues(obj):
        if "1" in obj:
            if not obj["0"].keys():
                obj["0"] = obj["1"] = 1
            else:
                setValues(obj["0"])
        elif "0" in obj:
            if not obj["0"].keys():
                obj["0"] = 1
            else:
                setValues(obj["0"])
        else:
            if not obj["a"].keys():
                obj["a"] = 1
            else:
                setValues(obj["a"])
    setValues(obj)
    
    print "%sx = %s;" % (indent, json.dumps(obj))

    if instructions[0] == "ESI_GET_LEXICAL":
        print "%s(function(){" % indent
        indent += "  "

    print "%sfor (var i = 0; i < 100; i++) {" % indent
    indent += "  "

    nextChangable = "a"
    for prop in struct:
        if prop == None:
            print "%svar %s = i %% 2;" % (indent, nextChangable)
            nextChangable = chr(ord(nextChangable) + 1)
    
    if failure != None:
        print "%sif (i === 99) {" % indent
        indent += "  "
        if failure == "non-object":
            print "%s%s = null;" % (indent, constructPropertyAccessor(struct[:failDepth]))
        elif failure == "class-changed":
            print "%sdelete %s.c;" % (indent, constructPropertyAccessor(struct[:failDepth]))
        elif failure == "property-no-longer-exists":
            print "%sdelete %s;" % (indent, constructPropertyAccessor(struct[:failDepth]))
        elif failure == "becomes-sparse":
            print "%s%s[10000] = 2;" % (indent, constructPropertyAccessor(struct[:failDepth]))
        else:
            raise Exception("Unknown failure")
        indent = indent[:-2]
        print "%s}" % indent

    if instructions[-1][:7] == "ESI_PUT":
        print "%s%s = 42;" % (indent, constructPropertyAccessor(struct))

    if expectedError == None:
        if failure in ("class-changed", "property-no-longer-exists", "becomes-sparse", None) and instructions[-1][:7] == "ESI_PUT":
            print "%sassertEquals(42, %s);" % (indent, constructPropertyAccessor(struct))
        elif failure == "property-no-longer-exists" and instructions[-1][:7] == "ESI_GET":
            print "%sassertEquals(i === 99 ? undefined : 1, %s);" % (indent, constructPropertyAccessor(struct))
        elif failure in ("class-changed", "becomes-sparse", None):
            print "%sassertEquals(1, %s);" % (indent, constructPropertyAccessor(struct))
        else:
            raise Exception("No expectedError, no asserts")
    elif instructions[-1][:7] == "ESI_GET":
        print "%s%s;" % (indent, constructPropertyAccessor(struct))
    
    indent = indent[:-2]
    print "%s}" % indent

    if instructions[0] == "ESI_GET_LEXICAL":
        indent = indent[:-2]
        print "%s})();" % indent
    
    if expectedError != None:
        indent = indent[:-2]
        print "%s}" % indent
        print "%sassertThrows(%s, test);" % (indent, expectedError)

    indent = indent[:-2]
    print "%s}" % indent
    print
    
    assert(indent == "")

if __name__ == "__main__":
    main()
