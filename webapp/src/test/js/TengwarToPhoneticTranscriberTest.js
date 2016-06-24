define([ "TengwaRune", "TengwarToPhoneticTranscriber", "example/TengwarExampleTS1", "example/TengwarExampleTS2",
        "example/TengwarExampleUTONAME1", "example/TengwarExampleUTONAME2", "example/TengwarExampleTROTS1",
        "example/TengwarExampleTROTS2", "example/TengwarExampleTTOI1", "example/TengwarExampleTTOI2",
        "example/TengwarExampleTWOTR1", "example/TengwarExampleTWOTR2", "example/TengwarExampleSD1",
        "example/TengwarExampleSD2", "example/TengwarExampleTLOTR2" ], function(TengwaRune,
        TengwarToPhoneticTranscriber, TengwarExampleTS1, TengwarExampleTS2, TengwarExampleUTONAME1,
        TengwarExampleUTONAME2, TengwarExampleTROTS1, TengwarExampleTROTS2, TengwarExampleTTOI1, TengwarExampleTTOI2,
        TengwarExampleTWOTR1, TengwarExampleTWOTR2, TengwarExampleSD1, TengwarExampleSD2, TengwarExampleTLOTR2)
{
    "use strict";
    QUnit.module("TengwarToPhoneticTranscriber");

    QUnit.test("runesToPhonemes() vowel + short carrier", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();
        var runes = [ [ TengwaRune.THREE_DOTS, TengwaRune.SHORT_CARRIER ], // a
        [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ], // e
        [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ], // i
        [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ], // o
        [ TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER ], // u
        ];

        // Run.
        var result = transcriber.runesToPhonemes(runes);

        // Verify.
        var expected = [ [ "a" ], [ "e" ], [ "i" ], [ "o" ], [ "u" ], ];
        verify(assert, result, expected);
    });

    QUnit.test("runesToPhonemes() vowel + short carrier + vowel", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();
        var runes = [ [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER, TengwaRune.THREE_UNDER_DOTS ], // ea
        [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.THREE_UNDER_DOTS ], // ia
        [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.UNDER_DOT ], // ie
        [ TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER, TengwaRune.UNDER_DOT ], // ue
        ];

        // Run.
        var result = transcriber.runesToPhonemes(runes);

        // Verify.
        var expected = [ [ "e", "a" ], [ "i", "a" ], [ "i", "e" ], [ "u", "e" ], ];
        verify(assert, result, expected);
    });

    QUnit.test("Example TLOTR2 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleTLOTR2.RUNES, TengwarExampleTLOTR2.PHONEMES);
    });

    QUnit.test("Example TS1 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleTS1.RUNES, TengwarExampleTS1.PHONEMES);
    });

    QUnit.test("Example TS2 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleTS2.RUNES, TengwarExampleTS2.PHONEMES);
    });

    QUnit.test("Example UTONAME1 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleUTONAME1.RUNES, TengwarExampleUTONAME1.PHONEMES);
    });

    QUnit.test("Example UTONAME2 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleUTONAME2.RUNES, TengwarExampleUTONAME2.PHONEMES);
    });

    QUnit.test("Example TROTS1 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleTROTS1.RUNES, TengwarExampleTROTS1.PHONEMES);
    });

    QUnit.test("Example TROTS2 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleTROTS2.RUNES, TengwarExampleTROTS2.PHONEMES);
    });

    QUnit.test("Example TTOI1 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleTTOI1.RUNES, TengwarExampleTTOI1.PHONEMES);
    });

    QUnit.test("Example TTOI2 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleTTOI2.RUNES, TengwarExampleTTOI2.PHONEMES);
    });

    QUnit.test("Example TWOTR1 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleTWOTR1.RUNES, TengwarExampleTWOTR1.PHONEMES);
    });

    QUnit.test("Example TWOTR2 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleTWOTR2.RUNES, TengwarExampleTWOTR2.PHONEMES);
    });

    QUnit.test("Example SD1 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleSD1.RUNES, TengwarExampleSD1.PHONEMES);
    });

    QUnit.test("Example SD2 runesToPhonemes()", function(assert)
    {
        testRunesToPhonemes(assert, TengwarExampleSD2.RUNES, TengwarExampleSD2.PHONEMES);
    });

    /*******************************************************************************************************************
     * Utility functions.
     */

    function createTranscriber()
    {
        return new TengwarToPhoneticTranscriber();
    }

    function testRunesToPhonemes(assert, runes, expected, useComparison)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.runesToPhonemes(runes);

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
