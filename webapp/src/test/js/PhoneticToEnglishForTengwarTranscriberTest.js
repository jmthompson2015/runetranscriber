define([ "PhoneticToEnglishForTengwarTranscriber", "example/TengwarExampleTS1", "example/TengwarExampleTS2",
        "example/TengwarExampleUTONAME1", "example/TengwarExampleUTONAME2", "example/TengwarExampleTROTS1",
        "example/TengwarExampleTROTS2", "example/TengwarExampleTTOI1", "example/TengwarExampleTTOI2",
        "example/TengwarExampleTWOTR1", "example/TengwarExampleTWOTR2", "example/TengwarExampleSD1",
        "example/TengwarExampleSD2", "example/TengwarExampleTLOTR2" ], function(PhoneticToEnglishForTengwarTranscriber,
        TengwarExampleTS1, TengwarExampleTS2, TengwarExampleUTONAME1, TengwarExampleUTONAME2, TengwarExampleTROTS1,
        TengwarExampleTROTS2, TengwarExampleTTOI1, TengwarExampleTTOI2, TengwarExampleTWOTR1, TengwarExampleTWOTR2,
        TengwarExampleSD1, TengwarExampleSD2, TengwarExampleTLOTR2)
{
    "use strict";
    QUnit.module("PhoneticToEnglishForTengwarTranscriber");

    QUnit.test("Example TLOTR2 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleTLOTR2.LANGUAGE_WORDS, TengwarExampleTLOTR2.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example TS1 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleTS1.LANGUAGE_WORDS, TengwarExampleTS1.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example TS2 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleTS2.LANGUAGE_WORDS, TengwarExampleTS2.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example UTONAME1 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleUTONAME1.LANGUAGE_WORDS, TengwarExampleUTONAME1.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example UTONAME2 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleUTONAME2.LANGUAGE_WORDS, TengwarExampleUTONAME2.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example TROTS1 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleTROTS1.LANGUAGE_WORDS, TengwarExampleTROTS1.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example TROTS2 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleTROTS2.LANGUAGE_WORDS, TengwarExampleTROTS2.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example TTOI1 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleTTOI1.LANGUAGE_WORDS, TengwarExampleTTOI1.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example TTOI2 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleTTOI2.LANGUAGE_WORDS, TengwarExampleTTOI2.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example TWOTR1 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleTWOTR1.LANGUAGE_WORDS, TengwarExampleTWOTR1.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example TWOTR2 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleTWOTR2.LANGUAGE_WORDS, TengwarExampleTWOTR2.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example SD1 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleSD1.LANGUAGE_WORDS, TengwarExampleSD1.LANGUAGE_STRING
                .toLowerCase());
    });

    QUnit.test("Example SD2 languageWordsToString()", function(assert)
    {
        testLanguageWordsToString(assert, TengwarExampleSD2.LANGUAGE_WORDS, TengwarExampleSD2.LANGUAGE_STRING
                .toLowerCase());
    });

    /*******************************************************************************************************************
     * phonemesToLanguageWords()
     */

    QUnit.test("Example TLOTR2 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleTLOTR2.PHONEMES, TengwarExampleTLOTR2.LANGUAGE_WORDS);
    });

    QUnit.test("Example TS1 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleTS1.PHONEMES, TengwarExampleTS1.LANGUAGE_WORDS);
    });

    QUnit.test("Example TS2 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleTS2.PHONEMES, TengwarExampleTS2.LANGUAGE_WORDS);
    });

    QUnit.test("Example UTONAME1 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleUTONAME1.PHONEMES, TengwarExampleUTONAME1.LANGUAGE_WORDS);
    });

    QUnit.test("Example UTONAME2 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleUTONAME2.PHONEMES, TengwarExampleUTONAME2.LANGUAGE_WORDS);
    });

    QUnit.test("Example TROTS1 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleTROTS1.PHONEMES, TengwarExampleTROTS1.LANGUAGE_WORDS);
    });

    QUnit.test("Example TROTS2 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleTROTS2.PHONEMES, TengwarExampleTROTS2.LANGUAGE_WORDS);
    });

    QUnit.test("Example TTOI1 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleTTOI1.PHONEMES, TengwarExampleTTOI1.LANGUAGE_WORDS);
    });

    QUnit.test("Example TTOI2 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleTTOI2.PHONEMES, TengwarExampleTTOI2.LANGUAGE_WORDS);
    });

    QUnit.test("Example TWOTR1 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleTWOTR1.PHONEMES, TengwarExampleTWOTR1.LANGUAGE_WORDS);
    });

    QUnit.test("Example TWOTR2 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleTWOTR2.PHONEMES, TengwarExampleTWOTR2.LANGUAGE_WORDS);
    });

    QUnit.test("Example SD1 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleSD1.PHONEMES, TengwarExampleSD1.LANGUAGE_WORDS);
    });

    QUnit.test("Example SD2 phonemesToLanguageWords()", function(assert)
    {
        testPhonemesToLanguageWords(assert, TengwarExampleSD2.PHONEMES, TengwarExampleSD2.LANGUAGE_WORDS);
    });

    /*******************************************************************************************************************
     * Utility functions.
     */

    function createTranscriber()
    {
        return new PhoneticToEnglishForTengwarTranscriber();
    }

    function testLanguageWordsToString(assert, words, expected)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.languageWordsToString(words);

        // Verify.
        assert.ok(result);
        assert.equal(result.length, expected.length);
        assert.equal(result, expected);
    }

    function testPhonemesToLanguageWords(assert, phonemes, expected, useComparison)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.phonemesToLanguageWords(phonemes);

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
