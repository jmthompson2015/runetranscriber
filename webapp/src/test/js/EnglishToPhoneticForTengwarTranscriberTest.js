define([ "EnglishToPhoneticForTengwarTranscriber", "example/TengwarExampleTS1", "example/TengwarExampleTS2",
        "example/TengwarExampleUTONAME1", "example/TengwarExampleUTONAME2", "example/TengwarExampleTROTS1",
        "example/TengwarExampleTROTS2", "example/TengwarExampleTTOI1", "example/TengwarExampleTTOI2",
        "example/TengwarExampleTWOTR1", "example/TengwarExampleTWOTR2", "example/TengwarExampleSD1",
        "example/TengwarExampleSD2", "example/TengwarExampleTLOTR2" ], function(EnglishToPhoneticForTengwarTranscriber,
        TengwarExampleTS1, TengwarExampleTS2, TengwarExampleUTONAME1, TengwarExampleUTONAME2, TengwarExampleTROTS1,
        TengwarExampleTROTS2, TengwarExampleTTOI1, TengwarExampleTTOI2, TengwarExampleTWOTR1, TengwarExampleTWOTR2,
        TengwarExampleSD1, TengwarExampleSD2, TengwarExampleTLOTR2)
{
    "use strict";
    QUnit.module("EnglishToPhoneticForTengwarTranscriber");

    QUnit.test("arrayToString()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();
        var array = [ "w", [ "i", "s" ], "t", "m", [ "a", "r" ], "ch" ];

        // Run.
        var result = transcriber.arrayToString(array);

        // Verify.
        assert.ok(result);
        assert.equal(result.length, 45);
        assert.equal(result, "[\"w\", [\"i\", \"s\"], \"t\", \"m\", [\"a\", \"r\"], \"ch\"]");
    });

    QUnit.test("createLanguageToPhonemeMap()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.createLanguageToPhonemeMap();
        // console.info(transcriber.mapToString(result));

        // Verify.
        assert.ok(result);
        assert.equal(Object.keys(result).length, 164);
        assert.equal(result[" "], " ");
        assert.equal(result["the"], "the");

        {
            var value = result["age"];
            assert.equal(value.length, 1);
            assert.equal(value[0][0], "a");
            assert.equal(value[0][1], "j");
            assert.equal(value[0][2], "e");
        }

        {
            var value = result["brought"];
            assert.equal(value.length, 5);
            assert.equal(value[0], "b");
            assert.equal(value[1], "r");
            assert.equal(value[2][0], "o");
            assert.equal(value[2][1], "u");
            assert.equal(value[3], "gh");
            assert.equal(value[4], "t");
        }

        {
            var value = result["son"];
            assert.equal(value.length, 2);
            assert.equal(value[0], "s");
            assert.equal(value[1][0], "o");
            assert.equal(value[1][1], "n");
        }
    });

    QUnit.test("isConsonant()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run / Verify.
        assert.ok(transcriber.isConsonant("b"));
        assert.ok(transcriber.isConsonant("c"));
        assert.ok(transcriber.isConsonant("d"));

        assert.ok(!transcriber.isConsonant("a"));
        assert.ok(!transcriber.isConsonant("e"));
        assert.ok(!transcriber.isConsonant(" "));
        assert.ok(!transcriber.isConsonant(","));
    });

    QUnit.test("isPunctuation()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run / Verify.
        assert.ok(transcriber.isPunctuation(" "));
        assert.ok(transcriber.isPunctuation(","));
        assert.ok(transcriber.isPunctuation("."));
        assert.ok(transcriber.isPunctuation("\n"));

        assert.ok(!transcriber.isPunctuation("a"));
        assert.ok(!transcriber.isPunctuation("b"));
        assert.ok(!transcriber.isPunctuation("c"));
    });

    QUnit.test("isVowel()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run / Verify.
        assert.ok(transcriber.isVowel("a"));
        assert.ok(transcriber.isVowel("e"));
        assert.ok(transcriber.isVowel("i"));
        assert.ok(transcriber.isVowel("o"));
        assert.ok(transcriber.isVowel("u"));

        assert.ok(!transcriber.isVowel("b"));
        assert.ok(!transcriber.isVowel("c"));
        assert.ok(!transcriber.isVowel(" "));
        assert.ok(!transcriber.isVowel(","));
    });

    /*******************************************************************************************************************
     * languageStringToWords()
     */

    QUnit.test("JMT languageStringToWords()", function(assert)
    {
        var input = "Jeffrey Michael Thompson";
        var expected = [ "Jeffrey", " ", "Michael", " ", "Thompson" ];

        testLanguageStringToWords(assert, input, expected);
    });

    QUnit.test("Example TLOTR2 languageStringToWords()", function(assert)
    {
        testLanguageStringToWords(assert, TengwarExampleTLOTR2.LANGUAGE_STRING.toLowerCase(),
                TengwarExampleTLOTR2.LANGUAGE_WORDS);
    });

    QUnit.test("Example TS1 languageStringToWords()", function(assert)
    {
        // Replace "of", " ", "the" with "of the"
        var expected = TengwarExampleTS1.LANGUAGE_WORDS.slice(0, 5).concat(TengwarExampleTS1.LANGUAGE_WORDS.slice(7));
        expected[4] = "of the";

        testLanguageStringToWords(assert, TengwarExampleTS1.LANGUAGE_STRING.toLowerCase(), expected);
    });

    QUnit.test("Example TS2 languageStringToWords()", function(assert)
    {
        testLanguageStringToWords(assert, TengwarExampleTS2.LANGUAGE_STRING.toLowerCase(),
                TengwarExampleTS2.LANGUAGE_WORDS);
    });

    QUnit.test("Example UTONAME1 languageStringToWords()", function(assert)
    {
        testLanguageStringToWords(assert, TengwarExampleUTONAME1.LANGUAGE_STRING.toLowerCase(),
                TengwarExampleUTONAME1.LANGUAGE_WORDS);
    });

    QUnit.test("Example UTONAME2 languageStringToWords()", function(assert)
    {
        testLanguageStringToWords(assert, TengwarExampleUTONAME2.LANGUAGE_STRING.toLowerCase(),
                TengwarExampleUTONAME2.LANGUAGE_WORDS);
    });

    QUnit.test("Example TROTS1 languageStringToWords()", function(assert)
    {
        testLanguageStringToWords(assert, TengwarExampleTROTS1.LANGUAGE_STRING.toLowerCase(),
                TengwarExampleTROTS1.LANGUAGE_WORDS);
    });

    QUnit.test("Example TROTS2 languageStringToWords()", function(assert)
    {
        testLanguageStringToWords(assert, TengwarExampleTROTS2.LANGUAGE_STRING.toLowerCase(),
                TengwarExampleTROTS2.LANGUAGE_WORDS);
    });

    QUnit.test("Example TTOI1 languageStringToWords()", function(assert)
    {
        testLanguageStringToWords(assert, TengwarExampleTTOI1.LANGUAGE_STRING.toLowerCase(),
                TengwarExampleTTOI1.LANGUAGE_WORDS);
    });

    QUnit.test("Example TTOI2 languageStringToWords()", function(assert)
    {
        testLanguageStringToWords(assert, TengwarExampleTTOI2.LANGUAGE_STRING.toLowerCase(),
                TengwarExampleTTOI2.LANGUAGE_WORDS);
    });

    QUnit.test("Example TWOTR1 languageStringToWords()", function(assert)
    {
        testLanguageStringToWords(assert, TengwarExampleTWOTR1.LANGUAGE_STRING.toLowerCase(),
                TengwarExampleTWOTR1.LANGUAGE_WORDS);
    });

    QUnit.test("Example TWOTR2 languageStringToWords()", function(assert)
    {
        testLanguageStringToWords(assert, TengwarExampleTWOTR2.LANGUAGE_STRING.toLowerCase(),
                TengwarExampleTWOTR2.LANGUAGE_WORDS);
    });

    QUnit.test("Example SD1 languageStringToWords()", function(assert)
    {
        testLanguageStringToWords(assert, TengwarExampleSD1.LANGUAGE_STRING.toLowerCase(),
                TengwarExampleSD1.LANGUAGE_WORDS);
    });

    QUnit.test("Example SD2 languageStringToWords()", function(assert)
    {
        testLanguageStringToWords(assert, TengwarExampleSD2.LANGUAGE_STRING.toLowerCase(),
                TengwarExampleSD2.LANGUAGE_WORDS);
    });

    /*******************************************************************************************************************
     * languageWordsToPhonemes()
     */

    QUnit.test("JMT languageWordsToPhonemes()", function(assert)
    {
        var input = [ "Jeffrey", " ", "Michael", " ", "Thompson" ];
        var expected = [ "j", [ "e", "f", "f" ], "r", [ "e", "y" ], " ", "m", [ "i", "c" ], "h", "a", [ "e", "l" ],
                " ", "t", "h", [ "o", "m" ], "p", "s", [ "o", "n" ] ];

        testLanguageWordsToPhonemes(assert, input, expected);
    });

    QUnit.test("Example TLOTR2 languageWordsToPhonemes()", function(assert)
    {
        // Change 'john' and reverse 'e' and 'i' mostly
        // Christopher reversed 'e' and 'i' from J.R.R.?
        var expected = [].concat(TengwarExampleTLOTR2.PHONEMES.slice(0, 13));
        expected = expected.concat([ "o", "h", "n" ]);
        expected = expected.concat(TengwarExampleTLOTR2.PHONEMES.slice(15));
        expected[23] = "e";
        expected[25] = [ "e", "l" ];
        expected[30] = "i";
        expected[31] = [ "e", "n" ];
        expected[34] = [ "e", "r", "e" ];
        expected[35] = [ "i", "n" ];
        expected[37] = [ "i", "s" ];
        expected[40] = [ "e", "t" ];
        expected[57] = [ "a", "r" ];
        expected[62] = [ "i", "ng" ];
        expected[92] = [ "i", "t" ];

        testLanguageWordsToPhonemes(assert, TengwarExampleTLOTR2.LANGUAGE_WORDS, expected);
    });

    QUnit.test("Example TS1 languageWordsToPhonemes()", function(assert)
    {
        // Change 'wor' to 'war'
        var expected = TengwarExampleTS1.PHONEMES.slice(0, 52);
        expected[expected.length] = [ "a", "r" ]; // as a subarray
        expected = expected.concat(TengwarExampleTS1.PHONEMES.slice(53));

        testLanguageWordsToPhonemes(assert, TengwarExampleTS1.LANGUAGE_WORDS, expected);
    });

    QUnit.test("Example TS2 languageWordsToPhonemes()", function(assert)
    {
        // Change 'to'.
        var expected = [ "t", "o" ];
        expected = expected.concat(TengwarExampleTS2.PHONEMES.slice(1, 74));
        expected = expected.concat([ "t", "o" ]); // not as a subarray
        expected = expected.concat(TengwarExampleTS2.PHONEMES.slice(75));

        testLanguageWordsToPhonemes(assert, TengwarExampleTS2.LANGUAGE_WORDS, expected);
    });

    QUnit.test("Example UTONAME1 languageWordsToPhonemes()", function(assert)
    {
        testLanguageWordsToPhonemes(assert, TengwarExampleUTONAME1.LANGUAGE_WORDS, TengwarExampleUTONAME1.PHONEMES);
    });

    QUnit.test("Example UTONAME2 languageWordsToPhonemes()", function(assert)
    {
        testLanguageWordsToPhonemes(assert, TengwarExampleUTONAME2.LANGUAGE_WORDS, TengwarExampleUTONAME2.PHONEMES);
    });

    QUnit.test("Example TROTS1 languageWordsToPhonemes()", function(assert)
    {
        // Change 'return'
        var expected = TengwarExampleTROTS1.PHONEMES.slice(0);
        expected[4] = "r";
        expected[5] = [ "e", "t" ];

        testLanguageWordsToPhonemes(assert, TengwarExampleTROTS1.LANGUAGE_WORDS, expected);
    });

    QUnit.test("Example TROTS2 languageWordsToPhonemes()", function(assert)
    {
        // Change 'named' and 'and'
        var expected = [ "n", [ "a", "m" ], [ "e", "d" ] ];
        expected = expected.concat(TengwarExampleTROTS2.PHONEMES.slice(3, 72));
        expected[expected.length] = "and";
        expected = expected.concat(TengwarExampleTROTS2.PHONEMES.slice(73, 80));
        expected[expected.length] = "and";
        expected = expected.concat(TengwarExampleTROTS2.PHONEMES.slice(81));

        testLanguageWordsToPhonemes(assert, TengwarExampleTROTS2.LANGUAGE_WORDS, expected);
    });

    QUnit.test("Example TTOI1 languageWordsToPhonemes()", function(assert)
    {
        testLanguageWordsToPhonemes(assert, TengwarExampleTTOI1.LANGUAGE_WORDS, TengwarExampleTTOI1.PHONEMES);
    });

    QUnit.test("Example TTOI2 languageWordsToPhonemes()", function(assert)
    {
        // Change 'return'
        var expected = TengwarExampleTTOI2.PHONEMES.slice(0);
        expected[48] = "r";
        expected[49] = [ "e", "t" ];

        testLanguageWordsToPhonemes(assert, TengwarExampleTTOI2.LANGUAGE_WORDS, expected);
    });

    QUnit.test("Example TWOTR1 languageWordsToPhonemes()", function(assert)
    {
        testLanguageWordsToPhonemes(assert, TengwarExampleTWOTR1.LANGUAGE_WORDS, TengwarExampleTWOTR1.PHONEMES);
    });

    QUnit.test("Example TWOTR2 languageWordsToPhonemes()", function(assert)
    {
        testLanguageWordsToPhonemes(assert, TengwarExampleTWOTR2.LANGUAGE_WORDS, TengwarExampleTWOTR2.PHONEMES);
    });

    QUnit.test("Example SD1 languageWordsToPhonemes()", function(assert)
    {
        testLanguageWordsToPhonemes(assert, TengwarExampleSD1.LANGUAGE_WORDS, TengwarExampleSD1.PHONEMES);
    });

    QUnit.test("Example SD2 languageWordsToPhonemes()", function(assert)
    {
        // Change 'account'
        var expected = TengwarExampleSD2.PHONEMES.slice(0, 10);
        expected[expected.length] = [ "a", "k", "k" ];
        expected[expected.length] = [ "o", "u" ];
        expected = expected.concat(TengwarExampleSD2.PHONEMES.slice(12));

        testLanguageWordsToPhonemes(assert, TengwarExampleSD2.LANGUAGE_WORDS, expected);
    });

    /*******************************************************************************************************************
     * phonemesToPhonemeWords()
     */

    QUnit.test("Example TLOTR2 phonemesToPhonemeWords()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.phonemesToPhonemeWords(TengwarExampleTLOTR2.PHONEMES);

        // Verify.
        var expected = [ "of", " ", [ "w", [ "i", "s" ], "t", "m", [ "a", "r" ], "ch" ], " ", [ "b", "y" ], " ",
                [ "j", "h", [ "o", "n" ] ], " ", [ "r", [ "o", "n" ], [ "a", "l" ], "d" ], " ",
                [ "r", "i", "u", [ "i", "l" ] ], " ", [ "t", [ "o", "l" ], "k", "e", [ "i", "n" ] ], ".",
                [ "h", [ "i", "r", "e" ], [ "e", "n" ] ], " ", [ [ "i", "z" ] ], " ", [ "s", [ "i", "t" ] ], " ",
                [ "f", [ "o", "r" ], "th" ], "\n", "the", " ", [ "h", [ "i", "s" ], "t", [ "o", "r" ], "y" ], " ",
                "of the", " ", [ "w", [ "o", "r" ] ], " ", "of the", " ", [ "r", [ "e", "ng" ] ], " ", "and", " ",
                "the", " ", [ "r", [ "e", "t" ], [ "u", "r" ], "n" ], " ", "of the", " ", [ "k", [ "e", "ng" ] ], " ",
                [ [ "a", "z" ] ], " ", [ "s", "e", "e", "n" ], " ", [ "b", "y" ], " ", "the", " ",
                [ "h", [ "o", "b", "b" ], [ "e", "t" ], "s" ], "." ];
        verify(assert, result, expected);
    });

    QUnit.test("Example TS1 phonemesToPhonemeWords()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.phonemesToPhonemeWords(TengwarExampleTS1.PHONEMES);

        // Verify.
        var expected = [ "the", " ", [ "t", [ "a", "l", "e" ], "s" ], " ", "of", " ", "the", " ",
                [ "f", [ "i", "r" ], "s", "t" ], " ", [ [ "a", "j", "e" ] ], " ", [ "wh", [ "e", "n" ] ], " ",
                [ "m", [ "o", "r" ], "g", [ "o", "th" ] ], " ", [ "d", "w", [ "e", "l" ], "t" ], " ", [ [ "i", "n" ] ],
                " ", [ "m", [ "i", "d", "d" ], [ "l", "e" ] ], " ", [ [ "e", "a" ], "r", "th" ], "\n", "and", " ",
                "the", " ", [ [ "e", "l" ], [ "v", "e" ], "s" ], " ", [ "m", [ "a", "d", "e" ] ], " ",
                [ "w", [ "o", "r" ] ], " ", [ [ "u", "p" ], [ "o", "n" ] ], " ", [ "h", [ "i", "m" ] ], " ",
                [ "f", [ "o", "r" ] ], " ", "the", " ", [ "r", [ "e", "k" ], [ "o", "v" ], [ "e", "r" ], "y" ], " ",
                "of the", " ", [ "s", [ "i", "l" ], "m", [ "a", "r" ], [ "i", "l" ], "s" ], "." ];
        verify(assert, result, expected);
    });

    QUnit.test("Example TS2 phonemesToPhonemeWords()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.phonemesToPhonemeWords(TengwarExampleTS2.PHONEMES);

        // Verify.
        var expected = [ [ [ "t", "o" ] ], " ", [ "wh", [ "i", "ch" ] ], " ", [ [ "a", "r", "e" ] ], " ",
                [ [ "a", "p", "p" ], [ "e", "n" ], "d", [ "e", "d" ] ], " ", "the", " ",
                [ "d", [ "o", "w" ], "n", "f", [ "a", "l", "l" ] ], " ", "of", " ",
                [ "n", [ "u", "m" ], [ "e", "n" ], [ "o", "r" ] ], " ", "and", " ", "the", " ",
                [ "h", [ "i", "s" ], "t", [ "o", "r" ], "y" ], " ", "of the", "\n", [ "r", [ "i", "ng" ], "s" ], " ",
                "of", " ", [ "p", [ "o", "w" ], "r" ], " ", "and", " ", "the", " ", [ "th", [ "i", "r" ], "d" ], " ",
                [ [ "a", "j", "e" ] ], " ", [ [ "i", "n" ] ], " ", [ "wh", [ "i", "ch" ] ], " ",
                [ "th", [ "e", "s", "e" ] ], " ", [ "t", [ "a", "l", "e" ], "s" ], " ", [ "k", [ "o", "m", "e" ] ],
                " ", [ [ "t", "o" ] ], " ", [ "th", [ "e", "i" ], "r" ], " ", [ [ "e", "n" ], "d" ], "." ];
        verify(assert, result, expected);
    });

    QUnit.test("Example UTONAME1 phonemesToPhonemeWords()",
            function(assert)
            {
                // Setup.
                var transcriber = createTranscriber();

                // Run.
                var result = transcriber.phonemesToPhonemeWords(TengwarExampleUTONAME1.PHONEMES);

                // Verify.
                var expected = [ [ [ "i", "n" ] ], " ", [ "th", [ "i", "s" ] ], " ", [ "b", "oo", "k" ], " ", "of",
                        " ", [ [ "u", "n" ], "f", [ "i", "n" ], [ "i", "sh" ], [ "e", "d" ] ], " ",
                        [ "t", [ "a", "l", "e" ], "s" ], " ", [ "b", "y" ], " ", [ "j", "o", "h", "n" ], " ",
                        [ "r", [ "o", "n" ], [ "a", "l" ], "d" ], " ", [ "r", "e", "u", [ "e", "l" ] ], " ",
                        [ "t", [ "o", "l" ], "k", "i", [ "e", "n" ] ], "\n", [ "wh", [ "i", "ch" ] ], " ",
                        [ [ "w", "a" ], "s" ], " ", [ "b", "r", [ "o", "u" ], "gh", "t" ], " ",
                        [ "t", [ "o", "g" ], [ "e", "th" ], [ "e", "r" ] ], " ", [ "b", "y" ], " ",
                        [ "k", "r", [ "i", "s" ], "t", [ "o", "f" ], [ "e", "r" ] ], " ",
                        [ "r", "e", "u", [ "e", "l" ] ], " ", [ "t", [ "o", "l" ], "k", "i", [ "e", "n" ] ], " ",
                        [ "h", [ "i", "s" ] ], " ", [ "s", [ "o", "n" ] ] ];
                verify(assert, result, expected);
            });

    QUnit.test("Example UTONAME2 phonemesToPhonemeWords()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.phonemesToPhonemeWords(TengwarExampleUTONAME2.PHONEMES);

        // Verify.
        var expected = [ [ [ "a", "r", "e" ] ], " ", [ "t", [ "o", "l" ], "d" ], " ", [ "m", [ "a", "n" ], "y" ], " ",
                [ "th", [ "i", "ng" ], "s" ], " ", "of", " ", [ "m", [ "e", "n" ] ], " ", "and", " ",
                [ [ "e", "l" ], [ "v", "e" ], "s" ], " ", [ [ "i", "n" ] ], " ",
                [ "n", [ "u", "m" ], [ "e", "n" ], [ "o", "r" ] ], " ", "and", " ", [ [ "i", "n" ] ], " ",
                [ "m", [ "i", "d", "d" ], [ "l", "e" ] ], "\n", [ [ "e", "a" ], "r", "th" ], " ",
                [ "f", "r", [ "o", "m" ] ], " ", "the", " ", [ [ "e", "l" ], "d", [ "e", "r" ] ], " ",
                [ "d", [ "a", "y" ], "s" ], " ", [ [ "i", "n" ] ], " ",
                [ "b", [ "e", "l" ], [ "e", "r" ], "i", [ "a", "n" ], "d" ], " ", [ "t", "o" ], " ", "the", " ",
                [ "w", [ "a", "r" ] ], " ", "of the", " ", [ "r", [ "i", "ng" ] ], " ", "and", "\n", [ [ "a", "n" ] ],
                " ", [ [ "a", "k", "k" ], [ "o", "u" ], "n", "t" ], " ", [ [ "i", "s" ] ], " ",
                [ "g", [ "i", "v" ], [ "e", "n" ] ], " ", "of the", " ",
                [ "d", "r", [ "u", "e" ], "d", "ai", [ "i", "n" ] ], " ", "the", " ",
                [ [ "i", "s" ], "t", [ "a", "r" ], "i" ], " ", "and", " ", "the", " ",
                [ "p", [ "a", "l" ], [ "a", "n" ], "t", [ "i", "r" ], "i" ], "." ];
        verify(assert, result, expected);
    });

    QUnit.test("Example TROTS1 phonemesToPhonemeWords()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.phonemesToPhonemeWords(TengwarExampleTROTS1.PHONEMES);

        // Verify.
        var expected = [ [ [ "i", "n" ] ], " ", "the", " ", [ [ "r", "e" ], "t", [ "u", "r" ], "n" ], " ", "of the",
                " ", [ "sh", [ "a", "d" ], [ "o", "w" ] ], " ", [ [ "a", "r", "e" ] ], " ",
                [ "t", "r", [ "a", "c", "e" ], "d" ], " ", "the", " ", [ "f", [ "i", "r" ], "s", "t" ], " ",
                [ "f", [ "o", "r" ], "m", "s" ], " ", "of the", " ", [ "s", "t", [ "o", "r" ], "y" ], " ", "of the",
                " ", [ "l", [ "o", "r" ], "d" ], "\n", "of the", " ", [ "r", [ "i", "ng" ], "s" ], ".",
                [ "h", [ "e", "r", "e" ], [ "i", "n" ] ], " ", "the", " ",
                [ "j", [ "o", "u" ], "r", "n", [ "e", "y" ] ], " ", "of the", " ",
                [ "h", [ "o", "b", "b" ], [ "i", "t" ] ], " ", [ "wh", "o" ], " ", [ "b", [ "o", "r", "e" ] ], " ",
                "the", " ", [ "g", "r", [ "e", "a" ], "t" ], " ", [ "r", [ "i", "ng" ] ], ",", [ [ "a", "t" ] ], " ",
                [ "f", [ "i", "r" ], "s", "t" ] ];
        verify(assert, result, expected);
    });

    QUnit.test("Example TROTS2 phonemesToPhonemeWords()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.phonemesToPhonemeWords(TengwarExampleTROTS2.PHONEMES);

        // Verify.
        var expected = [ [ "n", [ "a", "m", "e" ], "d" ], " ", [ "b", [ "i", "ng" ], "o" ], " ", [ "b", [ "u", "t" ] ],
                " ", [ [ "a", "f" ], "t", [ "e", "r" ], "w", [ "a", "r" ], "d", "s" ], " ",
                [ "f", "r", [ "o", "d" ], "o" ], ",", [ [ "i", "s" ] ], " ",
                [ "f", [ "o", "l", "l" ], [ "o", "w", "e" ], "d" ], " ", [ "f", "r", [ "o", "m" ] ], " ",
                [ "h", [ "o", "b", "b" ], [ "i", "t" ], [ "o", "n" ] ], " ", [ [ "i", "n" ] ], " ", "the", "\n",
                [ "sh", [ "i", "r", "e" ] ], " ", [ "th", "r", [ "o", "u" ], "gh" ], " ", "the", " ",
                [ [ "o", "l" ], "d" ], " ", [ "f", [ "o", "r" ], [ "e", "s" ], "t" ], " ", [ "t", "o" ], " ",
                [ "w", [ "e", "a" ], "th", [ "e", "r" ], "t", [ "o", "p" ] ], " ", [ [ "a", "n", "d" ] ], " ",
                [ "r", [ "i", "v" ], [ "e", "n" ], "d", [ "e", "l", "l" ] ], " ", [ [ "a", "n", "d" ] ], " ",
                [ [ "e", "n" ], "d", "s" ], "\n", [ [ "i", "n" ] ], " ", [ "th", [ "i", "s" ] ], " ",
                [ "v", [ "o", "l" ], [ "u", "m", "e" ] ], " ", [ [ "b", "e" ], "f", [ "o", "r", "e" ] ], " ", "the",
                " ", [ "t", [ "o", "m" ], "b" ], " ", "of", " ", [ "b", [ "a", "l" ], [ "i", "n" ] ], " ", "the", " ",
                [ "d", "w", [ "a", "r" ], "f", "-", "l", [ "o", "r" ], "d" ], " ", "of", " ",
                [ "m", [ "o", "r" ], [ "i", "a" ] ], "." ];
        verify(assert, result, expected);
    });

    QUnit.test("Example TTOI1 phonemesToPhonemeWords()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.phonemesToPhonemeWords(TengwarExampleTTOI1.PHONEMES);

        // Verify.
        var expected = [ [ [ "i", "n" ] ], " ", "the", " ", [ "t", "r", [ "e", "a" ], "s", [ "o", "n" ] ], " ", "of",
                " ", [ [ "i", "s" ], [ "e", "n" ], "g", [ "a", "r" ], "d" ], " ", "the", " ",
                [ "s", "t", [ "o", "r" ], "y" ], " ", "of the", " ",
                [ "f", [ "e", "l", "l" ], [ "o", "w" ], "sh", [ "i", "p" ] ], " ", "of the", " ",
                [ "r", [ "i", "ng" ] ], " ", [ [ "i", "s" ] ], " ", [ "t", "r", [ "a", "c", "e" ], "d" ], "\n",
                [ "f", "r", [ "o", "m" ] ], " ", [ "r", [ "i", "v" ], [ "e", "n" ], "d", [ "e", "l", "l" ] ], " ",
                [ "th", "r", [ "o", "u" ], "gh" ], " ", [ "m", [ "o", "r" ], [ "i", "a" ] ], " ", "and", " ", "the",
                " ", [ "l", [ "a", "n" ], "d" ], " ", "of", " ",
                [ "l", [ "o", "th" ], "l", [ "o", "r" ], [ "i", "e" ], "n" ], " ", [ "t", "o" ], " ", "the", " ",
                [ "d", [ "a", "y" ], "s" ] ];
        verify(assert, result, expected);
    });

    QUnit.test("Example TTOI2 phonemesToPhonemeWords()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.phonemesToPhonemeWords(TengwarExampleTTOI2.PHONEMES);

        // Verify.
        var expected = [ "of", " ", [ [ "i", "t" ], "s" ], " ", [ [ "e", "n" ], "d", [ "i", "ng" ] ], " ",
                [ [ "a", "t" ] ], " ", [ "c", [ "a", "l" ], [ "e", "m" ], "b", [ "e", "l" ] ], " ",
                [ [ "b", "e" ], "s", [ "i", "d", "e" ] ], " ", [ [ "a", "n" ], "d", [ "u", "i" ], "n" ], " ", "the",
                " ", [ "g", "r", [ "e", "a" ], "t" ], " ", [ "r", [ "i", "v" ], [ "e", "r" ] ], ".",
                [ "th", [ "e", "n" ] ], " ", [ [ "i", "s" ] ], "\n", [ "t", [ "o", "l" ], "d" ], " ", "of the", " ",
                [ [ "r", "e" ], "t", [ "u", "r" ], "n" ], " ", "of", " ",
                [ "g", [ "a", "n" ], "d", [ "a", "l" ], "f" ], " ",
                [ "m", [ "i", "th" ], "r", [ "a", "n" ], "d", [ "i", "r" ] ], ",", "of the", " ",
                [ "m", [ "e", "e", "t" ], [ "i", "ng" ] ], " ", "of the", " ",
                [ "h", [ "o", "b", "b" ], [ "i", "t" ], "s" ], " ", [ "w", [ "i", "th" ] ], "\n",
                [ "f", [ "a", "ng" ], [ "o", "r" ], "n" ], ",", "and", " ", "of the", " ", [ "w", [ "a", "r" ] ], " ",
                [ [ "u", "p" ], [ "o", "n" ] ], " ", "the", " ", [ "r", [ "i", "d" ], [ "e", "r" ], "s" ], " ", "of",
                " ", [ "r", "o", "h", [ "a", "n" ] ], " ", [ "b", "y" ], " ", "the", " ",
                [ "t", "r", "ai", "t", [ "o", "r" ] ], " ", [ "s", [ "a", "r" ], [ "u", "m" ], [ "a", "n" ] ], "." ];
        verify(assert, result, expected);
    });

    QUnit.test("Example TWOTR1 phonemesToPhonemeWords()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.phonemesToPhonemeWords(TengwarExampleTWOTR1.PHONEMES);

        // Verify.
        var expected = [ [ [ "i", "n" ] ], " ", "the", " ", [ "w", [ "a", "r" ] ], " ", "of the", " ",
                [ "r", [ "i", "ng" ] ], " ", [ [ "i", "s" ] ], " ", [ "t", "r", [ "a", "c", "e" ], "d" ], " ", "the",
                " ", [ "s", "t", [ "o", "r" ], "y" ], " ", "of the", " ",
                [ "v", [ "i", "c" ], "t", [ "o", "r" ], "y" ], " ", [ [ "a", "t" ] ], " ",
                [ "h", [ "e", "l" ], "m", "s" ], " ", [ "d", [ "e", "e", "p" ] ], "\n", "and", " ", "the", " ",
                [ "d", "r", [ "o", "w" ], "n", [ "i", "ng" ] ], " ", "of", " ",
                [ [ "i", "s" ], [ "e", "n" ], "g", [ "a", "r" ], "d" ], " ", [ "b", "y" ], " ", "the", " ",
                [ [ "e", "n" ], "t", "s" ], ",", [ "th", [ "e", "n" ] ], " ", [ [ "i", "s" ] ], " ",
                [ "t", [ "o", "l" ], "d" ], " ", "of the" ];
        verify(assert, result, expected);
    });

    QUnit.test("Example TWOTR2 phonemesToPhonemeWords()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.phonemesToPhonemeWords(TengwarExampleTWOTR2.PHONEMES);

        // Verify.
        var expected = [ [ "j", [ "o", "u" ], "r", "n", [ "e", "y" ] ], " ", "of", " ",
                [ "f", "r", [ "o", "d" ], "o" ], " ", [ "w", [ "i", "th" ] ], " ",
                [ "s", [ "a", "m" ], "w", [ "i", "s", "e" ] ], " ", "and", " ",
                [ "g", [ "o", "l", "l" ], [ "u", "m" ] ], " ", [ "t", "o" ], " ", "the", " ",
                [ "m", [ "o", "r" ], [ "a", "n", "n" ], [ "o", "n" ] ], ",", "of the", "\n",
                [ "m", [ "e", "e", "t" ], [ "i", "ng" ] ], " ", [ "w", [ "i", "th" ] ], " ",
                [ "f", [ "a", "r" ], [ "a", "m" ], [ "i", "r" ] ], ",", "and", " ", "the", " ",
                [ "s", "t", "ai", "r", "s" ], " ", "of", " ", [ "k", [ "i", "r" ], [ "i", "th" ] ], " ",
                [ [ "u", "ng" ], [ "o", "l" ] ], ",", "of the", " ", [ "b", [ "a", "t", "t" ], [ "l", "e" ] ], " ",
                "of the", "\n", [ "p", [ "e", "l" ], [ "e", "n", "n" ], [ "o", "r" ] ], " ",
                [ "f", [ "i", "e" ], "l", "d", "s" ], ",", "and", " ", "of the", " ",
                [ "c", [ "o", "m" ], [ "i", "ng" ] ], " ", "of", " ",
                [ [ "a", "r" ], [ "a", "g" ], [ "o", "r" ], "n" ], " ", [ [ "i", "n" ] ], " ", "the", " ",
                [ "f", "l", [ "e", "e", "t" ] ], " ", "of", " ", [ [ "u", "m" ], "b", [ "a", "r" ] ], "." ];
        verify(assert, result, expected);
    });

    QUnit.test("Example SD1 phonemesToPhonemeWords()",
            function(assert)
            {
                // Setup.
                var transcriber = createTranscriber();

                // Run.
                var result = transcriber.phonemesToPhonemeWords(TengwarExampleSD1.PHONEMES);

                // Verify.
                var expected = [ [ [ "i", "n" ] ], " ", [ "th", [ "i", "s" ] ], " ", [ "b", "oo", "k" ], " ",
                        [ [ "i", "s" ] ], " ", [ "t", "r", [ "a", "c", "e" ], "d" ], " ",
                        [ "f", [ "i", "r" ], "s", "t" ], " ", "the", " ", [ "s", "t", [ "o", "r" ], "y" ], " ",
                        "of the", " ", [ "d", [ "e", "s" ], "t", "r", [ "u", "k" ], "t", "i", [ "o", "n" ] ], " ",
                        "of the", "\n", [ [ "o", "n", "e" ] ], " ", [ "r", [ "i", "ng" ] ], " ", "and", " ", "the",
                        " ", [ "d", [ "o", "w" ], "n", "f", [ "a", "l", "l" ] ], " ", "of", " ",
                        [ "s", "a", [ "u", "r" ], [ "o", "n" ] ], " ", [ [ "a", "t" ] ], " ", "the", " ",
                        [ [ "e", "n" ], "d" ], " ", "of the", " ", [ "th", [ "i", "r" ], "d" ], " ",
                        [ [ "a", "j", "e" ] ], "." ];
                verify(assert, result, expected);
            });

    QUnit.test("Example SD2 phonemesToPhonemeWords()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.phonemesToPhonemeWords(TengwarExampleSD2.PHONEMES);

        // Verify.
        var expected = [ [ "th", [ "e", "n" ] ], " ", [ "f", [ "o", "l", "l" ], [ "o", "w" ], "s" ], " ",
                [ [ "a", "n" ] ], " ", [ [ "a", "k" ], [ "o", "w" ], "n", "t" ], " ", "of the", " ",
                [ [ "i", "n" ], "t", "r", [ "u", "s" ], [ "i" ], [ "o", "n" ] ], " ", "of the", " ",
                [ "k", [ "a", "t" ], [ "a", "k" ], "l", "y", "s", "m" ], " ", "of the", " ",
                [ "w", [ "e", "s" ], "t" ], "\n", [ [ "i", "n" ], "t", "o" ], " ", "the", " ",
                [ "d", [ "e", "l" ], [ "i", "b" ], [ "e", "r" ], "a", "t", "i", [ "o", "n" ], "s" ], " ", "of", " ",
                [ "c", [ "e", "r" ], "t", "a", "n" ], " ", [ "s", "k", [ "o", "l" ], [ "a", "r" ], "s" ], " ", "of",
                " ", [ [ "o", "k" ], "s", "f", [ "o", "r" ], "d" ], " ", "and", "\n", "the", " ",
                [ "f", [ "a", "l", "l" ] ], " ", "of", " ", [ "s", "a", [ "u", "r" ], [ "o", "n" ] ], " ",
                [ "n", [ "a", "m" ], [ "e", "d" ] ], " ", [ "z", [ "i", "g" ], [ "u", "r" ] ], " ", [ [ "i", "n" ] ],
                " ", "the", " ", [ "d", "r", [ "o", "w" ], "n", [ "i", "ng" ] ], " ", "of", " ",
                [ [ "a", "n" ], [ "a", "d" ], [ "u", "n", "e" ] ], "." ];
        verify(assert, result, expected);
    });

    /*******************************************************************************************************************
     * Utility functions.
     */

    function createTranscriber()
    {
        return new EnglishToPhoneticForTengwarTranscriber();
    }

    function testLanguageStringToWords(assert, string, expected, useComparison)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.languageStringToWords(string);

        // Verify.
        verify(assert, result, expected, useComparison);
    }

    function testLanguageWordsToPhonemes(assert, words, expected, useComparison)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.languageWordsToPhonemes(words);

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
