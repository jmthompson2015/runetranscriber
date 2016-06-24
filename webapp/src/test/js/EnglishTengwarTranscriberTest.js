define([ "EnglishTengwarTranscriber", "example/TengwarExampleTS1", "example/TengwarExampleTS2",
        "example/TengwarExampleUTONAME1", "example/TengwarExampleUTONAME2", "example/TengwarExampleTROTS1",
        "example/TengwarExampleTROTS2", "example/TengwarExampleTTOI1", "example/TengwarExampleTTOI2",
        "example/TengwarExampleTWOTR1", "example/TengwarExampleTWOTR2", "example/TengwarExampleSD1",
        "example/TengwarExampleSD2", "example/TengwarExampleTLOTR2" ], function(EnglishTengwarTranscriber,
        TengwarExampleTS1, TengwarExampleTS2, TengwarExampleUTONAME1, TengwarExampleUTONAME2, TengwarExampleTROTS1,
        TengwarExampleTROTS2, TengwarExampleTTOI1, TengwarExampleTTOI2, TengwarExampleTWOTR1, TengwarExampleTWOTR2,
        TengwarExampleSD1, TengwarExampleSD2, TengwarExampleTLOTR2)
{
    "use strict";
    QUnit.module("EnglishTengwarTranscriber");

    QUnit.test("getMaxForwardKeyLength()", function(assert)
    {
        // Setup.
        var transcriber = new EnglishTengwarTranscriber();

        // Run.
        var result = transcriber.getMaxForwardKeyLength();

        // Verify.
        assert.equal(result, 0);
    });

    QUnit.test("getMaxReverseKeyLength()", function(assert)
    {
        // Setup.
        var transcriber = new EnglishTengwarTranscriber();

        // Run.
        var result = transcriber.getMaxReverseKeyLength();

        // Verify.
        assert.equal(result, 0);
    });

    /*******************************************************************************************************************
     * transcribeForward()
     */

    QUnit.test("Example TLOTR2 transcribeForward()",
            function(assert)
            {
                // var expected = TengwarExampleTLOTR2.RUNES;
                var expected = [ "of", "space", "vala", [ "acute", "silme" ], "tinco", "malta", [ "threeDots", "ore" ],
                        "calma", "space", "umbar", "anna", "space", "anga", [ "leftCurl", "shortCarrier" ], "hyarmen",
                        "numen", "space", "romen", [ "leftCurl", "numen" ], [ "threeDots", "lambe" ], "ando", "space",
                        "romen", [ "dot", "shortCarrier" ], [ "rightCurl", "shortCarrier" ], [ "dot", "lambe" ],
                        "space", "tinco", [ "leftCurl", "lambe" ], "quesse", [ "acute", "shortCarrier" ],
                        [ "dot", "numen" ], "period", "hyarmen", [ "dot", "romen", "underDot" ], [ "acute", "numen" ],
                        "space", [ "acute", "silme" ], "space", "silme", [ "dot", "tinco" ], "space", "formen",
                        [ "leftCurl", "ore" ], "thule", "newline", "the", "space", "hyarmen", [ "acute", "silme" ],
                        "tinco", [ "leftCurl", "romen" ], [ "acute", "longCarrier" ], "space", "ofThe", "space",
                        "vala", [ "threeDots", "ore" ], "space", "ofThe", "space", "romen", [ "acute", "ngwalme" ],
                        "space", [ "bar", "ando" ], "space", "the", "space", "romen", [ "dot", "tinco" ],
                        [ "topCurl", "ore" ], "numen", "space", "ofThe", "space", "quesse", [ "dot", "ngwalme" ],
                        "space", [ "threeDots", "esseNuquerna" ], "space", "silme", [ "dot", "shortCarrier" ],
                        [ "dot", "shortCarrier" ], "numen", "space", "umbar", "anna", "space", "the", "space",
                        "hyarmen", [ "leftCurl", "umbar", "underBar" ], [ "acute", "tinco" ], "silme", "period" ];
                testTranscribeForward(assert, TengwarExampleTLOTR2.LANGUAGE_STRING, expected);
            });

    QUnit.test("Example TS1 transcribeForward()", function(assert)
    {
        var expected = [ "the", "space", "tinco", [ "threeDots", "lambe", "underDot" ], "silme", "space", "ofThe",
                "space", "formen", [ "acute", "ore" ], "silme", "tinco", "space", [ "threeDots", "anga", "underDot" ],
                "space", "hwestaSindarinwa", [ "dot", "numen" ], "space", "malta", [ "leftCurl", "ore" ], "ungwe",
                [ "leftCurl", "thule" ], "space", "ando", "vala", [ "dot", "lambe" ], "tinco", "space",
                [ "acute", "numen" ], "space", "malta", [ "acute", "ando", "underBar" ], [ "lambe", "underDot" ],
                "space", [ "dot", "shortCarrier", "threeUnderDots" ], "ore", "thule", "newline", [ "bar", "ando" ],
                "space", "the", "space", [ "dot", "lambe" ], [ "ampa", "underDot" ], "silme", "space", "malta",
                [ "threeDots", "ando", "underDot" ], "space", "vala", [ "threeDots", "ore" ], "space",
                [ "rightCurl", "parma" ], [ "leftCurl", "numen" ], "space", "hyarmen", [ "acute", "malta" ], "space",
                "formen", [ "leftCurl", "ore" ], "space", "the", "space", "romen", [ "dot", "quesse" ],
                [ "leftCurl", "ampa" ], [ "dot", "romen" ], [ "acute", "longCarrier" ], "space", "ofThe", "space",
                "silme", [ "acute", "lambe" ], "malta", [ "threeDots", "romen" ], [ "acute", "lambe" ], "silme",
                "period" ];
        testTranscribeForward(assert, TengwarExampleTS1.LANGUAGE_STRING, expected);
    });

    QUnit.test("Example TS2 transcribeForward()", function(assert)
    {
        var expected = [ "tinco", [ "leftCurl", "shortCarrier" ], "space", "hwestaSindarinwa", [ "acute", "calma" ],
                "space", [ "threeDots", "ore", "underDot" ], "space", [ "threeDots", "parma", "underBar" ],
                [ "dot", "numen" ], "ando", [ "dot", "ando" ], "space", "the", "space", "ando", [ "leftCurl", "vala" ],
                "numen", "formen", [ "threeDots", "lambe", "underBar" ], "space", "of", "space", "numen",
                [ "rightCurl", "malta" ], [ "dot", "numen" ], [ "leftCurl", "romen" ], "space", [ "bar", "ando" ],
                "space", "the", "space", "hyarmen", [ "acute", "silme" ], "tinco", [ "leftCurl", "romen" ],
                [ "acute", "longCarrier" ], "space", "ofThe", "newline", "romen", [ "acute", "ngwalme" ], "silme",
                "space", "of", "space", "parma", [ "leftCurl", "vala" ], "ore", "space", [ "bar", "ando" ], "space",
                "the", "space", "thule", [ "acute", "ore" ], "ando", "space", [ "threeDots", "anga", "underDot" ],
                "space", [ "acute", "numen" ], "space", "hwestaSindarinwa", [ "acute", "calma" ], "space", "anto",
                [ "dot", "silme", "underDot" ], "space", "tinco", [ "threeDots", "lambe", "underDot" ], "silme",
                "space", "quesse", [ "leftCurl", "malta", "underDot" ], "space", "tinco",
                [ "leftCurl", "shortCarrier" ], "space", "anto", [ "dot", "yanta" ], "ore", "space",
                [ "dot", "numen" ], "ando", "period" ];
        testTranscribeForward(assert, TengwarExampleTS2.LANGUAGE_STRING, expected);
    });

    QUnit.test("Example UTONAME1 transcribeForward()", function(assert)
    {
        var expected = [ [ "acute", "numen" ], "space", "anto", [ "acute", "silme" ], "space", "umbar",
                [ "leftCurl", "longCarrier" ], "quesse", "space", "of", "space", [ "rightCurl", "numen" ], "formen",
                [ "acute", "numen" ], [ "acute", "harma" ], [ "dot", "ando" ], "space", "tinco",
                [ "threeDots", "lambe", "underDot" ], "silme", "space", "umbar", "anna", "space", "anga",
                [ "leftCurl", "shortCarrier" ], "hyarmen", "numen", "space", "romen", [ "leftCurl", "numen" ],
                [ "threeDots", "lambe" ], "ando", "space", "romen", [ "dot", "shortCarrier" ],
                [ "rightCurl", "shortCarrier" ], [ "dot", "lambe" ], "space", "tinco", [ "leftCurl", "lambe" ],
                "quesse", [ "acute", "shortCarrier" ], [ "dot", "numen" ], "newline", "hwestaSindarinwa",
                [ "acute", "calma" ], "space", [ "vala", "threeUnderDots" ], "silme", "space", "umbar", "romen",
                [ "leftCurl", "ure" ], "gh", "tinco", "space", "tinco", [ "leftCurl", "ungwe" ], [ "dot", "anto" ],
                [ "dot", "romen" ], "space", "umbar", "anna", "space", "quesse", "romen", [ "acute", "silme" ],
                "tinco", [ "leftCurl", "formen" ], [ "dot", "romen" ], "space", "romen", [ "dot", "shortCarrier" ],
                [ "rightCurl", "shortCarrier" ], [ "dot", "lambe" ], "space", "tinco", [ "leftCurl", "lambe" ],
                "quesse", [ "acute", "shortCarrier" ], [ "dot", "numen" ], "space", "hyarmen", [ "acute", "silme" ],
                "space", "silme", [ "leftCurl", "numen" ] ];
        testTranscribeForward(assert, TengwarExampleUTONAME1.LANGUAGE_STRING, expected);
    });

    QUnit.skip("Example UTONAME2 transcribeForward()", function(assert)
    {
        var expected = [ [ "threeDots", "ore", "underDot" ], "space", "tinco", [ "leftCurl", "lambe" ], "ando",
                "space", "malta", [ "threeDots", "numen" ], "anna", "space", "thule", [ "acute", "ngwalme" ], "silme",
                "space", "of", "space", "malta", [ "dot", "numen" ], "space", [ "bar", "ando" ], "space",
                [ "dot", "lambe" ], [ "ampa", "underDot" ], "silme", "space", [ "acute", "numen" ], "space",
                [ "rightCurl", "malta" ], [ "dot", "numen" ], "malta", [ "dot", "numen" ], "space", [ "bar", "ando" ],
                "space", [ "acute", "numen" ], "space", [ "acute", "ando", "underBar" ], "lambe", "underDot",
                "newline", [ "threeDots", "romen" ], "tinco", "hyarmen", "space", "formen", "romen",
                [ "leftCurl", "malta" ], "space", "the", "space", [ "dot", "lambe" ], "ando", [ "dot", "romen" ],
                "space", "ando", [ "threeDots", "anna" ], "silme", "space", [ "acute", "numen" ], "space",
                [ "dot", "lambe" ], [ "dot", "romen" ], [ "acute", "shortCarrier" ], [ "bar", "ando" ], "space",
                "tinco", [ "leftCurl", "shortCarrier" ], "space", "the", "space", [ "threeDots", "romen" ], "space",
                "ofThe", "space", [ "acute", "numen" ], "space", [ "bar", "ando" ], "newline",
                [ "threeDots", "numen" ], "space", [ "threeDots", "quesse", "underBar" ], [ "leftCurl", "ure" ],
                "numen", "tinco", "space", [ "acute", "silme" ], "space", "ungwe", [ "acute", "ampa" ],
                [ "dot", "numen" ], "space", "ofThe", "space", "romen", [ "rightCurl", "shortCarrier" ],
                [ "dot", "ando" ], [ "threeDots", "shortCarrier" ], [ "acute", "numen" ], "space", "the", "space",
                "silme", "tinco", "space", [ "bar", "ando" ], "space", "the", "space", [ "threeDots", "lambe" ],
                [ "threeDots", "numen" ], [ "acute", "shortCarrier" ], "period" ];
        var useComparison = true;
        testTranscribeForward(assert, TengwarExampleUTONAME2.LANGUAGE_STRING, expected, useComparison);
    });

    QUnit.test("Example TROTS1 transcribeForward()", function(assert)
    {
        var expected = [ [ "acute", "numen" ], "space", "the", "space", "romen", [ "dot", "tinco" ],
                [ "topCurl", "ore" ], "numen", "space", "ofThe", "space", "harma", [ "threeDots", "ando" ],
                [ "leftCurl", "vala" ], "space", [ "threeDots", "ore", "underDot" ], "space", "tinco", "romen",
                [ "threeDots", "silmeNuquerna", "underDot" ], "ando", "space", "the", "space", "formen",
                [ "acute", "ore" ], "silme", "tinco", "space", "formen", [ "leftCurl", "ore" ], "malta", "silme",
                "space", "ofThe", "space", "silme", "tinco", [ "leftCurl", "romen" ], "anna", "space", "ofThe",
                "space", "lambe", [ "leftCurl", "ore" ], "ando", "newline", "ofThe", "space", "romen",
                [ "acute", "ngwalme" ], "silme", "period", "hyarmen", [ "dot", "romen", "underDot" ],
                [ "acute", "numen" ], "space", "the", "space", "anga", [ "leftCurl", "ure" ], "ore", "numen",
                [ "dot", "anna" ], "space", "ofThe", "space", "hyarmen", [ "leftCurl", "umbar", "underBar" ],
                [ "acute", "tinco" ], "space", "hwestaSindarinwa", [ "leftCurl", "shortCarrier" ], "space", "umbar",
                [ "leftCurl", "romen", "underDot" ], "space", "the", "space", "ungwe", "romen",
                [ "dot", "shortCarrier", "threeUnderDots" ], "tinco", "space", "romen", [ "acute", "ngwalme" ],
                "comma", [ "threeDots", "tinco" ], "space", "formen", [ "acute", "ore" ], "silme", "tinco" ];
        testTranscribeForward(assert, TengwarExampleTROTS1.LANGUAGE_STRING, expected);
    });

    QUnit.skip("Example TROTS2 transcribeForward()", function(assert)
    {
        var expected = [ "numen", [ "threeDots", "malta" ], [ "dot", "ando" ], "space", [ "acute", "numen" ],
                [ "leftCurl", "shortCarrier" ], "space", "umbar", [ "rightCurl", "tinco" ], "space",
                [ "threeDots", "formen" ], "tinco", [ "dot", "ore" ], "vala", [ "threeDots", "ore" ], "ando", "silme",
                "space", "romen", "comma", [ "acute", "silme" ], "space", "formen",
                [ "leftCurl", "lambe", "underBar" ], [ "leftCurl", "vala", "underDot" ], "ando", "space", "formen",
                "romen", [ "leftCurl", "malta" ], "space", [ "leftCurl", "umbar", "underBar" ], [ "acute", "tinco" ],
                [ "leftCurl", "numen" ], "space", [ "acute", "numen" ], "space", "the", "newline", "hyarmen",
                [ "acute", "romen", "underDot" ], "space", "thule", "romen", [ "leftCurl", "ure" ], "gh", "space",
                "the", "space", "lambe", "ando", "space", [ "leftCurl", "romen", "underDot" ], "silme", "tinco",
                "space", "tinco", [ "leftCurl", "shortCarrier" ], "space", [ "dot", "shortCarrier" ],
                [ "threeDots", "tinco" ], "the", "tinco", [ "leftCurl", "shortCarrier" ], "space", [ "bar", "ando" ],
                "space", [ "acute", "ampa" ], [ "dot", "numen" ], "ando", "space", [ "bar", "ando" ], "space",
                [ "dot", "numen" ], "ando", "silme", "newline", [ "acute", "numen" ], "space", "anto",
                [ "acute", "silme" ], "space", "ampa", [ "leftCurl", "lambe" ], [ "rightCurl", "malta", "underDot" ],
                "space", [ "umbar", "underDot" ], "formen", [ "leftCurl", "ore", "underDot" ], "space", "the", "space",
                "tinco", [ "leftCurl", "malta" ], "umbar", "space", "of", "space", [ "threeDots", "lambe" ],
                [ "acute", "numen" ], "space", "the", "space", "vala", [ "threeDots", "ore" ], "hyphen",
                [ "leftCurl", "ore" ], "ando", "space", "of", "space", [ "leftCurl", "ore" ], "acute", "shortCarrier",
                "threeUnderDots", "period" ];
        var useComparison = true;
        testTranscribeForward(assert, TengwarExampleTROTS2.LANGUAGE_STRING, expected, useComparison);
    });

    QUnit.test("Example TTOI1 transcribeForward()", function(assert)
    {
        var expected = [ [ "acute", "numen" ], "space", "the", "space", "tinco", "romen",
                [ "dot", "shortCarrier", "threeUnderDots" ], "silme", [ "leftCurl", "numen" ], "space", "of", "space",
                [ "acute", "silme" ], [ "dot", "numen" ], "ungwe", [ "threeDots", "ore" ], "ando", "space", "the",
                "space", "silme", "tinco", [ "leftCurl", "romen" ], "anna", "space", "ofThe", "space", "formen",
                [ "dot", "lambe", "underBar" ], [ "leftCurl", "vala" ], "harma", [ "acute", "parma" ], "space",
                "ofThe", "space", "romen", [ "acute", "ngwalme" ], "space", [ "acute", "silme" ], "space", "tinco",
                "romen", [ "threeDots", "silmeNuquerna", "underDot" ], "ando", "newline", "formen", "romen",
                [ "leftCurl", "malta" ], "space", "romen", [ "acute", "ampa" ], [ "dot", "numen" ], "ando",
                [ "dot", "lambe", "underBar" ], "space", "thule", "romen", [ "leftCurl", "ure" ], "gh", "space",
                "malta", [ "leftCurl", "romen" ], [ "acute", "shortCarrier", "threeUnderDots" ], "space",
                [ "bar", "ando" ], "space", "the", "space", "lambe", [ "threeDots", "numen" ], "ando", "space", "of",
                "space", "lambe", [ "leftCurl", "thule" ], "lambe", [ "leftCurl", "romen" ],
                [ "acute", "shortCarrier", "underDot" ], "numen", "space", "tinco", [ "leftCurl", "shortCarrier" ],
                "space", "the", "space", "ando", [ "threeDots", "anna" ], "silme" ];
        testTranscribeForward(assert, TengwarExampleTTOI1.LANGUAGE_STRING, expected);
    });

    QUnit.skip("Example TTOI2 transcribeForward()", function(assert)
    {
        var expected = [ "of", "space", [ "acute", "tinco" ], "silme", "space", [ "dot", "numen" ], "ando",
                [ "acute", "ngwalme" ], "space", [ "threeDots", "tinco" ], "space", [ "threeDots", "lambe" ],
                [ "dot", "malta" ], "umbar", [ "dot", "lambe" ], "space", [ "umbar", "underDot" ], "silme",
                [ "acute", "ando", "underDot" ], "space", "numen", "ando", [ "rightCurl", "shortCarrier" ],
                [ "acute", "numen" ], "space", "the", "space", "romen", "underDot", [ "threeDots", "tinco" ], "space",
                "romen", [ "acute", "ampa" ], [ "dot", "ore" ], "period", "hyarmen", [ "dot", "numen" ], "space",
                [ "acute", "silme" ], "newline", "tinco", [ "leftCurl", "lambe" ], "ando", "space", "ofThe", "space",
                "romen", [ "dot", "tinco" ], [ "topCurl", "ore" ], "numen", "space", "of", "space", [ "bar", "ando" ],
                "lambe", "formen", "space", [ "acute", "tinco" ], "hyarmen", "romen", [ "bar", "ando" ], "comma",
                "ofThe", "space", "malta", [ "dot", "dot", "tinco" ], [ "acute", "ngwalme" ], "space", "ofThe",
                "space", "hyarmen", [ "leftCurl", "umbar", "underBar" ], [ "acute", "tinco" ], "silme", "space",
                "vala", [ "acute", "anto" ], "newline", [ "threeDots", "numen" ], [ "leftCurl", "ore" ], "numen",
                "comma", [ "bar", "ando" ], "space", "ofThe", "space", "vala", [ "threeDots", "ore" ], "space",
                [ "rightCurl", "parma" ], [ "leftCurl", "numen" ], "space", "the", "space", [ "acute", "ando" ],
                [ "dot", "romen" ], "silme", "space", "of", "space", [ "threeDots", "numen" ], "space", "umbar",
                "anna", "space", "the", "space", "tinco", "romen", [ "threeDots", "yanta" ], "tinco",
                [ "leftCurl", "ore" ], "space", [ "threeDots", "romen" ], [ "rightCurl", "malta" ],
                [ "threeDots", "numen" ], "period" ];
        var useComparison = true;
        testTranscribeForward(assert, TengwarExampleTTOI2.LANGUAGE_STRING, expected, useComparison);
    });

    QUnit.test("Example TWOTR1 transcribeForward()", function(assert)
    {
        var expected = [ [ "acute", "numen" ], "space", "the", "space", "vala", [ "threeDots", "ore" ], "space",
                "ofThe", "space", "romen", [ "acute", "ngwalme" ], "space", [ "acute", "silme" ], "space", "tinco",
                "romen", [ "threeDots", "silmeNuquerna", "underDot" ], "ando", "space", "the", "space", "silme",
                "tinco", [ "leftCurl", "romen" ], "anna", "space", "ofThe", "space", "ampa",
                [ "acute", "silmeNuquerna" ], "tinco", [ "leftCurl", "romen" ], "anna", "space",
                [ "threeDots", "tinco" ], "space", "hyarmen", [ "dot", "lambe" ], "malta", "silme", "space", "ando",
                [ "dot", "dot", "parma" ], "newline", [ "bar", "ando" ], "space", "the", "space", "ando", "romen",
                [ "leftCurl", "vala" ], "numen", [ "acute", "ngwalme" ], "space", "of", "space", [ "acute", "silme" ],
                [ "dot", "numen" ], "ungwe", [ "threeDots", "ore" ], "ando", "space", "umbar", "anna", "space", "the",
                "space", [ "dot", "numen" ], "tinco", "silme", "comma", "anto", [ "dot", "numen" ], "space",
                [ "acute", "silme" ], "space", "tinco", [ "leftCurl", "lambe" ], "ando", "space", "ofThe" ];
        testTranscribeForward(assert, TengwarExampleTWOTR1.LANGUAGE_STRING, expected);
    });

    QUnit.skip("Example TWOTR2 transcribeForward()", function(assert)
    {
        var expected = [ "anga", [ "leftCurl", "ure" ], "ore", "numen", [ "dot", "anna" ], "space", "of", "space",
                "romen", "space", "vala", [ "acute", "anto" ], "space", [ "threeDots", "malta" ], "vala",
                [ "acute", "silme" ], "space", [ "bar", "ando" ], "space", [ "leftCurl", "lambe", "underBar" ],
                [ "rightCurl", "malta" ], "space", "tinco", [ "leftCurl", "shortCarrier" ], "space", "the", "space",
                [ "leftCurl", "ore" ], [ "threeDots", "numen" ], "comma", "ofThe", "newline", "malta",
                [ "dot", "dot", "tinco" ], [ "acute", "ngwalme" ], "space", "vala", [ "acute", "anto" ], "space",
                [ "threeDots", "romen" ], [ "threeDots", "malta" ], [ "acute", "ore" ], "comma", [ "bar", "ando" ],
                "space", "the", "space", "silme", "tinco", [ "threeDots", "yanta" ], "ore", "silme", "space", "of",
                "space", [ "acute", "ore" ], [ "acute", "tinco" ], "hyarmen", "space", "numen", "ungwe",
                [ "leftCurl", "lambe" ], "comma", "ofThe", "space", [ "threeDots", "tinco" ], "lambe", "underDot",
                "space", "ofThe", "newline", [ "dot", "lambe" ], [ "dot", "numen", "underBar" ], [ "leftCurl", "ore" ],
                "space", [ "acute", "shortCarrier" ], [ "dot", "lambe" ], "ando", "silme", "comma", [ "bar", "ando" ],
                "space", "ofThe", "space", "silmeNuquerna", [ "leftCurl", "malta" ], [ "acute", "ngwalme" ], "space",
                "of", "space", "romen", [ "threeDots", "ungwe" ], [ "leftCurl", "ore" ], "numen", "space",
                [ "acute", "numen" ], "space", "the", "space", "formen", "lambe", [ "dot", "dot", "tinco" ], "space",
                "of", "space", "malta", "umbar", [ "threeDots", "romen" ], "period" ];
        var useComparison = true;
        testTranscribeForward(assert, TengwarExampleTWOTR2.LANGUAGE_STRING, expected, useComparison);
    });

    QUnit.test("Example SD1 transcribeForward()", function(assert)
    {
        var expected = [ [ "acute", "numen" ], "space", "anto", [ "acute", "silme" ], "space", "umbar",
                [ "leftCurl", "longCarrier" ], "quesse", "space", [ "acute", "silme" ], "space", "tinco", "romen",
                [ "threeDots", "silmeNuquerna", "underDot" ], "ando", "space", "formen", [ "acute", "ore" ], "silme",
                "tinco", "space", "the", "space", "silme", "tinco", [ "leftCurl", "romen" ], "anna", "space", "ofThe",
                "space", "ando", [ "dot", "silme" ], "tinco", "romen", [ "rightCurl", "quesse" ], "tinco",
                [ "acute", "shortCarrier" ], [ "leftCurl", "numen" ], "space", "ofThe", "newline",
                [ "leftCurl", "numen", "underDot" ], "space", "romen", [ "acute", "ngwalme" ], "space",
                [ "bar", "ando" ], "space", "the", "space", "ando", [ "leftCurl", "vala" ], "numen", "formen",
                [ "threeDots", "lambe", "underBar" ], "space", "of", "space", "silme", [ "threeDots", "shortCarrier" ],
                [ "rightCurl", "romen" ], [ "leftCurl", "numen" ], "space", [ "threeDots", "tinco" ], "space", "the",
                "space", [ "dot", "numen" ], "ando", "space", "ofThe", "space", "thule", [ "acute", "ore" ], "ando",
                "space", [ "threeDots", "anga", "underDot" ], "period" ];
        testTranscribeForward(assert, TengwarExampleSD1.LANGUAGE_STRING, expected);
    });

    QUnit.skip("Example SD2 transcribeForward()", function(assert)
    {
        var expected = [ "hyarmen", [ "dot", "numen" ], "space", "formen", [ "leftCurl", "lambe", "underBar" ],
                [ "leftCurl", "vala" ], "silme", "space", [ "threeDots", "numen" ], "space",
                [ "threeDots", "quesse", "underBar" ], [ "leftCurl", "ure" ], "numen", "tinco", "space", "ofThe",
                "space", [ "acute", "numen" ], "tinco", "romen", [ "rightCurl", "silme" ], [ "acute", "shortCarrier" ],
                [ "leftCurl", "numen" ], "space", "ofThe", "space", [ "threeDots", "tinco" ], "silmeNuquerna", "lambe",
                "anna", "silme", "malta", "space", "ofThe", "space", [ "dot", "silme" ], "tinco", "newline",
                [ "acute", "numen" ], "tinco", [ "leftCurl", "shortCarrier" ], "space", "the", "space", "ando",
                [ "dot", "lambe" ], [ "acute", "umbar" ], [ "dot", "ore" ], [ "threeDots", "shortCarrier" ], "tinco",
                [ "acute", "shortCarrier" ], [ "leftCurl", "numen" ], "silme", "space", "of", "space", "silmeNuquerna",
                [ "dot", "ore" ], "tinco", [ "threeDots", "shortCarrier" ], "numen", "space", "silme", "quesse",
                [ "leftCurl", "lambe" ], [ "threeDots", "ore" ], "silme", "space", "of", "space", "formen",
                [ "leftCurl", "ore" ], "space", [ "bar", "ando" ], "newline", "the", "space",
                [ "threeDots", "lambe", "underBar" ], "space", "of", "space", [ "threeDots", "shortCarrier" ],
                [ "rightCurl", "ore" ], [ "leftCurl", "numen" ], "space", "numen", [ "threeDots", "malta" ],
                [ "dot", "ando" ], "space", [ "acute", "ungwe" ], [ "rightCurl", "ore" ], "space",
                [ "acute", "numen" ], "space", "the", "space", "romen", [ "leftCurl", "vala" ], "numen",
                [ "acute", "numen" ], "space", "of", "space", "numen", [ "threeDots", "ando" ],
                [ "rightCurl", "numen", "underDot" ], "period" ];
        var useComparison = true;
        testTranscribeForward(assert, TengwarExampleSD2.LANGUAGE_STRING, expected, useComparison);
    });

    /*******************************************************************************************************************
     * transcribeReverse()
     */

    QUnit.test("Example TLOTR2 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleTLOTR2.RUNES, TengwarExampleTLOTR2.LANGUAGE_STRING.toLowerCase());
    });

    QUnit.test("Example TS1 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleTS1.RUNES, TengwarExampleTS1.LANGUAGE_STRING.toLowerCase());
    });

    QUnit.test("Example TS2 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleTS2.RUNES, TengwarExampleTS2.LANGUAGE_STRING.toLowerCase());
    });

    QUnit.test("Example UTONAME1 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleUTONAME1.RUNES, TengwarExampleUTONAME1.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example UTONAME2 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleUTONAME2.RUNES, TengwarExampleUTONAME2.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example TROTS1 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleTROTS1.RUNES, TengwarExampleTROTS1.LANGUAGE_STRING.toLowerCase());
    });

    QUnit.test("Example TROTS2 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleTROTS2.RUNES, TengwarExampleTROTS2.LANGUAGE_STRING.toLowerCase());
    });

    QUnit.test("Example TTOI1 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleTTOI1.RUNES, TengwarExampleTTOI1.LANGUAGE_STRING.toLowerCase());
    });

    QUnit.test("Example TTOI2 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleTTOI2.RUNES, TengwarExampleTTOI2.LANGUAGE_STRING.toLowerCase());
    });

    QUnit.test("Example TWOTR1 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleTWOTR1.RUNES, TengwarExampleTWOTR1.LANGUAGE_STRING.toLowerCase());
    });

    QUnit.test("Example TWOTR2 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleTWOTR2.RUNES, TengwarExampleTWOTR2.LANGUAGE_STRING.toLowerCase());
    });

    QUnit.test("Example SD1 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleSD1.RUNES, TengwarExampleSD1.LANGUAGE_STRING.toLowerCase());
    });

    QUnit.test("Example SD2 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, TengwarExampleSD2.RUNES, TengwarExampleSD2.LANGUAGE_STRING.toLowerCase());
    });

    /*******************************************************************************************************************
     * Utility functions.
     */

    function createTranscriber()
    {
        return new EnglishTengwarTranscriber();
    }

    function testTranscribeForward(assert, string, expected, useComparison)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.transcribeForward(string);

        // Verify.
        verify(assert, result, expected, useComparison);
    }

    function testTranscribeReverse(assert, runes, expected, useComparison)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.transcribeReverse(runes);

        // Verify.
        verify(assert, result, expected, useComparison);
    }

    function verify(assert, result, expected, useComparison)
    {
        assert.ok(result);
        assert.equal(result.length, expected.length);

        if (useComparison)
        {
            assert.equal(result, expected);
        }

        for (var i = 0; i < expected.length; i++)
        {
            if (Array.isArray(expected[i]))
            {
                verify(assert, result[i], expected[i], useComparison);
            }
            else
            {
                assert.equal(result[i], expected[i]);
            }
        }
    }
});
