define(
        [ "PhoneticToTengwarTranscriber", "TengwaRune", "example/TengwarExampleTS1", "example/TengwarExampleTS2",
                "example/TengwarExampleUTONAME1", "example/TengwarExampleUTONAME2", "example/TengwarExampleTROTS1",
                "example/TengwarExampleTROTS2", "example/TengwarExampleTTOI1", "example/TengwarExampleTTOI2",
                "example/TengwarExampleTWOTR1", "example/TengwarExampleTWOTR2", "example/TengwarExampleSD1",
                "example/TengwarExampleSD2", "example/TengwarExampleTLOTR2" ],
        function(PhoneticToTengwarTranscriber, TengwaRune, TengwarExampleTS1, TengwarExampleTS2,
                TengwarExampleUTONAME1, TengwarExampleUTONAME2, TengwarExampleTROTS1, TengwarExampleTROTS2,
                TengwarExampleTTOI1, TengwarExampleTTOI2, TengwarExampleTWOTR1, TengwarExampleTWOTR2,
                TengwarExampleSD1, TengwarExampleSD2, TengwarExampleTLOTR2)
        {
            "use strict";
            QUnit.module("PhoneticToTengwarTranscriber");

            QUnit.test("isConsonant()", function(assert)
            {
                // Setup.
                var transcriber = createTranscriber();

                // Run / Verify.
                assert.ok(!transcriber.isConsonant("a"));
                assert.ok(!transcriber.isConsonant("e"));
                assert.ok(!transcriber.isConsonant("i"));
                assert.ok(!transcriber.isConsonant("o"));
                assert.ok(!transcriber.isConsonant("u"));

                assert.ok(!transcriber.isConsonant(" "));
                assert.ok(!transcriber.isConsonant(","));
                assert.ok(!transcriber.isConsonant("."));

                assert.ok(transcriber.isConsonant("b"));
                assert.ok(transcriber.isConsonant("c"));
                assert.ok(transcriber.isConsonant("d"));
                assert.ok(transcriber.isConsonant("f"));
                assert.ok(transcriber.isConsonant("g"));
                assert.ok(transcriber.isConsonant("h"));
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

                assert.ok(!transcriber.isVowel(" "));
                assert.ok(!transcriber.isVowel(","));
                assert.ok(!transcriber.isVowel("."));

                assert.ok(!transcriber.isVowel("b"));
                assert.ok(!transcriber.isVowel("c"));
                assert.ok(!transcriber.isVowel("d"));
                assert.ok(!transcriber.isVowel("f"));
                assert.ok(!transcriber.isVowel("g"));
                assert.ok(!transcriber.isVowel("h"));
            });

            /***********************************************************************************************************
             * phonemesToRunes()
             */

            QUnit.test("JMT phonemesToRunes()", function(assert)
            {
                var input = [ "j", [ "e", "f", "f" ], "r", [ "e", "y" ], " ", "m", [ "i", "c" ], "h", "a",
                        [ "e", "l" ], " ", "t", "h", [ "o", "m" ], "p", "s", [ "o", "n" ] ];
                var expected = [ "anga", [ "dot", "formen", "underBar" ], "romen", [ "dot", "anna" ], "space",

                "malta", [ "acute", "calma" ], [ "threeDots", "shortCarrier" ], [ "dot", "lambe" ], "space",

                "tinco", "hyarmen", [ "leftCurl", "malta" ], "parma", "silme", [ "leftCurl", "numen" ] ];

                testPhonemesToRunes(assert, input, expected);
            });

            QUnit.test("Example TLOTR2 phonemesToRunes()", function(assert)
            {
                // Change 'by'
                var expected = TengwarExampleTLOTR2.RUNES.slice(0);
                expected[10] = TengwaRune.ANNA;
                expected[85] = TengwaRune.ANNA;
                /*
                 * for (var i = 0; i < expected.length; i++) { LOGGER.debug(i + " " + expected[i]); }
                 */
                testPhonemesToRunes(assert, TengwarExampleTLOTR2.PHONEMES, expected);
            });

            QUnit.test("Example TS1 phonemesToRunes()", function(assert)
            {
                testPhonemesToRunes(assert, TengwarExampleTS1.PHONEMES, TengwarExampleTS1.RUNES);
            });

            QUnit.test("Example TS2 phonemesToRunes()", function(assert)
            {
                // Change 'to'
                var input = [ "t", "o" ];
                input = input.concat(TengwarExampleTS2.PHONEMES.slice(1, 74));
                input[input.length] = "t";
                input[input.length] = "o";
                input = input.concat(TengwarExampleTS2.PHONEMES.slice(75));
                /*
                 * for (var i = 0; i < input.length; i++) { LOGGER.debug(i + " " + input[i]); }
                 */
                var expected = [ TengwaRune.TINCO ];
                expected[expected.length] = [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ];
                expected = expected.concat(TengwarExampleTS2.RUNES.slice(1, 74));
                expected[expected.length] = TengwaRune.TINCO;
                expected[expected.length] = [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ];
                expected = expected.concat(TengwarExampleTS2.RUNES.slice(75));
                expected[26] = [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ];
                /*
                 * for (var i = 0; i < expected.length; i++) { LOGGER.debug(i + " " + expected[i]); }
                 */
                testPhonemesToRunes(assert, input, expected);
            });

            QUnit.test("Example UTONAME1 phonemesToRunes()", function(assert)
            {
                testPhonemesToRunes(assert, TengwarExampleUTONAME1.PHONEMES, TengwarExampleUTONAME1.RUNES);
            });

            QUnit.test("Example UTONAME2 phonemesToRunes()", function(assert)
            {
                // Change 'are' and 'earth'
                var expected = [ [ TengwaRune.THREE_DOTS, TengwaRune.ORE, TengwaRune.UNDER_DOT ] ];
                var expected = expected.concat(TengwarExampleUTONAME2.RUNES.slice(1));
                expected[41] = TengwaRune.ORE;
                /*
                 * for (var i = 0; i < expected.length; i++) { LOGGER.debug(i + " " + expected[i]); }
                 */
                testPhonemesToRunes(assert, TengwarExampleUTONAME2.PHONEMES, expected);
            });

            QUnit.test("Example TROTS1 phonemesToRunes()", function(assert)
            {
                // Change 'return'
                var expected = TengwarExampleTROTS1.RUNES.slice(0);
                expected[4] = TengwaRune.ROMEN;
                expected[5] = [ TengwaRune.DOT, TengwaRune.TINCO ];
                expected[6] = [ TengwaRune.TOP_CURL, TengwaRune.ORE ];
                /*
                 * for (var i = 0; i < expected.length; i++) { LOGGER.debug(i + " " + expected[i]); }
                 */
                testPhonemesToRunes(assert, TengwarExampleTROTS1.PHONEMES, expected);
            });

            QUnit.test("Example TROTS2 phonemesToRunes()", function(assert)
            {
                testPhonemesToRunes(assert, TengwarExampleTROTS2.PHONEMES, TengwarExampleTROTS2.RUNES);
            });

            QUnit.test("Example TTOI1 phonemesToRunes()", function(assert)
            {
                testPhonemesToRunes(assert, TengwarExampleTTOI1.PHONEMES, TengwarExampleTTOI1.RUNES);
            });

            QUnit.test("Example TTOI2 phonemesToRunes()", function(assert)
            {
                // Change 'then'
                var expected = TengwarExampleTTOI2.RUNES.slice(0);
                expected[37] = TengwaRune.ANTO;
                expected[82] = [ TengwaRune.ACUTE, TengwaRune.ANTO ];
                // Change 'return'
                expected[48] = TengwaRune.ROMEN;
                expected[49] = [ TengwaRune.DOT, TengwaRune.TINCO ];
                expected[50] = [ TengwaRune.TOP_CURL, TengwaRune.ORE ];
                /*
                 * for (var i = 0; i < expected.length; i++) { LOGGER.debug(i + " " + expected[i]); }
                 */
                testPhonemesToRunes(assert, TengwarExampleTTOI2.PHONEMES, expected);
            });

            QUnit.test("Example TWOTR1 phonemesToRunes()", function(assert)
            {
                testPhonemesToRunes(assert, TengwarExampleTWOTR1.PHONEMES, TengwarExampleTWOTR1.RUNES);
            });

            QUnit.test("Example TWOTR2 phonemesToRunes()", function(assert)
            {
                testPhonemesToRunes(assert, TengwarExampleTWOTR2.PHONEMES, TengwarExampleTWOTR2.RUNES);
            });

            QUnit.test("Example SD1 phonemesToRunes()", function(assert)
            {
                testPhonemesToRunes(assert, TengwarExampleSD1.PHONEMES, TengwarExampleSD1.RUNES);
            });

            QUnit.test("Example SD2 phonemesToRunes()", function(assert)
            {
                testPhonemesToRunes(assert, TengwarExampleSD2.PHONEMES, TengwarExampleSD2.RUNES);
            });

            /***********************************************************************************************************
             * runesToFontLetters()
             */

            QUnit.test("runesToFontLetters() JMT", function(assert)
            {
                var input = [ "anga", [ "dot", "formen", "underBar" ], "romen", [ "dot", "anna" ], "space",

                "malta", [ "acute", "calma" ], [ "threeDots", "shortCarrier" ], [ "dot", "lambe" ], "space",

                "tinco", "hyarmen", [ "leftCurl", "malta" ], "parma", "silme", [ "leftCurl", "numen" ] ];
                var expected = [ "s", [ "e", "T", "\u00ED" ], "7", [ "h", "T" ], " ",

                "t", [ "a", "R" ], [ "`", "D" ], [ "j", "T" ], " ",

                "1", "9", [ "t", "Y" ], "q", "8", [ "5", "Y" ] ];

                testRunesToFontLetters(assert, input, expected);
            });

            QUnit.test("runesToFontLetters()", function(assert)
            {
                // Setup.
                var transcriber = createTranscriber();
                var runes = [ [ TengwaRune.ROMEN, TengwaRune.UNDER_DOT ], [ TengwaRune.RIGHT_CURL, TengwaRune.ORE ] ];

                // Run.
                var result = transcriber.runesToFontLetters(runes);

                // Verify.
                var expected = [ [ "7", "\u00C9" ], [ "6", "\u00E1" ] ];
                verify(assert, result, expected);
            });

            QUnit.test("runesToFontLetters() vowel + short carrier", function(assert)
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
                var result = transcriber.runesToFontLetters(runes);

                // Verify.
                var expected = [ [ "`", "D" ], [ "`", "T" ], [ "`", "R" ], [ "`", "Y" ], [ "`", "\u00E1" ], ];
                verify(assert, result, expected);
            });

            QUnit.test("Example TLOTR2 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleTLOTR2.RUNES, TengwarExampleTLOTR2.FONT_LETTERS);
            });

            QUnit.test("Example TS1 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleTS1.RUNES, TengwarExampleTS1.FONT_LETTERS);
            });

            QUnit.test("Example TS2 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleTS2.RUNES, TengwarExampleTS2.FONT_LETTERS);
            });

            QUnit.test("Example UTONAME1 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleUTONAME1.RUNES, TengwarExampleUTONAME1.FONT_LETTERS);
            });

            QUnit.test("Example UTONAME2 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleUTONAME2.RUNES, TengwarExampleUTONAME2.FONT_LETTERS);
            });

            QUnit.test("Example TROTS1 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleTROTS1.RUNES, TengwarExampleTROTS1.FONT_LETTERS);
            });

            QUnit.test("Example TROTS2 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleTROTS2.RUNES, TengwarExampleTROTS2.FONT_LETTERS);
            });

            QUnit.test("Example TTOI1 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleTTOI1.RUNES, TengwarExampleTTOI1.FONT_LETTERS);
            });

            QUnit.test("Example TTOI2 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleTTOI2.RUNES, TengwarExampleTTOI2.FONT_LETTERS);
            });

            QUnit.test("Example TWOTR1 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleTWOTR1.RUNES, TengwarExampleTWOTR1.FONT_LETTERS);
            });

            QUnit.test("Example TWOTR2 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleTWOTR2.RUNES, TengwarExampleTWOTR2.FONT_LETTERS);
            });

            QUnit.test("Example SD1 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleSD1.RUNES, TengwarExampleSD1.FONT_LETTERS);
            });

            QUnit.test("Example SD2 runesToFontLetters()", function(assert)
            {
                testRunesToFontLetters(assert, TengwarExampleSD2.RUNES, TengwarExampleSD2.FONT_LETTERS);
            });

            /***********************************************************************************************************
             * runesToRuneWords()
             */

            QUnit.test("Example TLOTR2 runesToRuneWords()",
                    function(assert)
                    {
                        // Setup.
                        var transcriber = createTranscriber();

                        // Run.
                        var result = transcriber.runesToRuneWords(TengwarExampleTLOTR2.RUNES);

                        // Verify.
                        assert.equal(result.length, TengwarExampleTLOTR2.LANGUAGE_WORDS.length);
                        var expected = [
                                "of",
                                "space",
                                [ "vala", [ "acute", "silme" ], "tinco", "malta", [ "threeDots", "ore" ], "calma" ],
                                "space",
                                [ "umbar", [ "acute", "longCarrier" ] ],
                                "space",
                                [ "anga", "hyarmen", [ "leftCurl", "numen" ] ],
                                "space",
                                [ "romen", [ "leftCurl", "numen" ], [ "threeDots", "lambe" ], "ando" ],
                                "space",
                                [ "romen", [ "acute", "shortCarrier" ], [ "rightCurl", "shortCarrier" ],
                                        [ "acute", "lambe" ] ],
                                "space",
                                [ "tinco", [ "leftCurl", "lambe" ], "quesse", [ "dot", "shortCarrier" ],
                                        [ "acute", "numen" ] ],
                                "period",
                                [ "hyarmen", [ "acute", "romen", "underDot" ], [ "dot", "numen" ] ],
                                "space",
                                [ [ "acute", "esse" ] ],
                                "space",
                                [ "silme", [ "acute", "tinco" ] ],
                                "space",
                                [ "formen", [ "leftCurl", "ore" ], "thule" ],
                                "newline",
                                "the",
                                "space",
                                [ "hyarmen", [ "acute", "silme" ], "tinco", [ "leftCurl", "romen" ],
                                        [ "acute", "longCarrier" ] ], "space", "ofThe", "space",
                                [ "vala", [ "leftCurl", "ore" ] ], "space", "ofThe", "space",
                                [ "romen", [ "dot", "ngwalme" ] ], "space", [ [ "bar", "ando" ] ], "space", "the",
                                "space", [ "romen", [ "dot", "tinco" ], [ "topCurl", "ore" ], "numen" ], "space",
                                "ofThe", "space", [ "quesse", [ "dot", "ngwalme" ] ], "space",
                                [ [ "threeDots", "esseNuquerna" ] ], "space",
                                [ "silme", [ "dot", "shortCarrier" ], [ "dot", "shortCarrier" ], "numen" ], "space",
                                [ "umbar", [ "acute", "longCarrier" ] ], "space", "the", "space",
                                [ "hyarmen", [ "leftCurl", "umbar", "underBar" ], [ "dot", "tinco" ], "silme" ],
                                "period" ];
                        verify(assert, result, expected);
                    });

            QUnit.test("Example TS1 runesToRuneWords()", function(assert)
            {
                // Setup.
                var transcriber = createTranscriber();

                // Run.
                var result = transcriber.runesToRuneWords(TengwarExampleTS1.RUNES);

                // Verify.
                assert.equal(result.length, TengwarExampleTS1.LANGUAGE_WORDS.length);
                var expected = [
                        "the",
                        "space",
                        [ "tinco", [ "threeDots", "lambe", "underDot" ], "silme" ],
                        "space",
                        "of",
                        "space",
                        "the",
                        "space",
                        [ "formen", [ "acute", "ore" ], "silme", "tinco" ],
                        "space",
                        [ [ "threeDots", "anga", "underDot" ] ],
                        "space",
                        [ "hwestaSindarinwa", [ "dot", "numen" ] ],
                        "space",
                        [ "malta", [ "leftCurl", "ore" ], "ungwe", [ "leftCurl", "thule" ] ],
                        "space",
                        [ "ando", "vala", [ "dot", "lambe" ], "tinco" ],
                        "space",
                        [ [ "acute", "numen" ] ],
                        "space",
                        [ "malta", [ "acute", "ando", "underBar" ], [ "lambe", "underDot" ] ],
                        "space",
                        [ [ "dot", "shortCarrier", "threeUnderDots" ], "ore", "thule" ],
                        "newline",
                        [ [ "bar", "ando" ] ],
                        "space",
                        "the",
                        "space",
                        [ [ "dot", "lambe" ], [ "ampa", "underDot" ], "silme" ],
                        "space",
                        [ "malta", [ "threeDots", "ando", "underDot" ] ],
                        "space",
                        [ "vala", [ "leftCurl", "ore" ] ],
                        "space",
                        [ [ "rightCurl", "parma" ], [ "leftCurl", "numen" ] ],
                        "space",
                        [ "hyarmen", [ "acute", "malta" ] ],
                        "space",
                        [ "formen", [ "leftCurl", "ore" ] ],
                        "space",
                        "the",
                        "space",
                        [ "romen", [ "dot", "quesse" ], [ "leftCurl", "ampa" ], [ "dot", "romen" ],
                                [ "acute", "longCarrier" ] ],
                        "space",
                        "ofThe",
                        "space",
                        [ "silme", [ "acute", "lambe" ], "malta", [ "threeDots", "romen" ], [ "acute", "lambe" ],
                                "silme" ], "period" ];
                verify(assert, result, expected);
            });

            QUnit
                    .test(
                            "Example TS2 runesToRuneWords()",
                            function(assert)
                            {
                                // Setup.
                                var transcriber = createTranscriber();

                                // Run.
                                var result = transcriber.runesToRuneWords(TengwarExampleTS2.RUNES);

                                // Verify.
                                assert.equal(result.length, TengwarExampleTS2.LANGUAGE_WORDS.length);
                                var expected = [
                                        [ [ "tinco", "leftUnderCurl" ] ],
                                        "space",
                                        [ "hwestaSindarinwa", [ "acute", "calma" ] ],
                                        "space",
                                        [ [ "threeDots", "ore", "underDot" ] ],
                                        "space",
                                        [ [ "threeDots", "parma", "underBar" ], [ "dot", "numen" ], "ando",
                                                [ "dot", "ando" ] ],
                                        "space",
                                        "the",
                                        "space",
                                        [ "ando", [ "leftCurl", "vala" ], "numen", "formen",
                                                [ "threeDots", "lambe", "underBar" ] ],
                                        "space",
                                        "of",
                                        "space",
                                        [ "numen", [ "rightCurl", "malta" ], [ "dot", "numen" ], [ "leftCurl", "ore" ] ],
                                        "space",
                                        [ [ "bar", "ando" ] ],
                                        "space",
                                        "the",
                                        "space",
                                        [ "hyarmen", [ "acute", "silme" ], "tinco", [ "leftCurl", "romen" ],
                                                [ "acute", "longCarrier" ] ], "space", "ofThe", "newline",
                                        [ "romen", [ "acute", "ngwalme" ], "silme" ], "space", "of", "space",
                                        [ "parma", [ "leftCurl", "vala" ], "ore" ], "space", [ [ "bar", "ando" ] ],
                                        "space", "the", "space", [ "thule", [ "acute", "ore" ], "ando" ], "space",
                                        [ [ "threeDots", "anga", "underDot" ] ], "space", [ [ "acute", "numen" ] ],
                                        "space", [ "hwestaSindarinwa", [ "acute", "calma" ] ], "space",
                                        [ "anto", [ "dot", "silme", "underDot" ] ], "space",
                                        [ "tinco", [ "threeDots", "lambe", "underDot" ], "silme" ], "space",
                                        [ "quesse", [ "leftCurl", "malta", "underDot" ] ], "space",
                                        [ [ "tinco", "leftUnderCurl" ] ], "space",
                                        [ "anto", [ "dot", "yanta" ], "ore" ], "space", [ [ "dot", "numen" ], "ando" ],
                                        "period" ];
                                verify(assert, result, expected);
                            });

            QUnit.test("Example UTONAME1 runesToRuneWords()",
                    function(assert)
                    {
                        // Setup.
                        var transcriber = createTranscriber();

                        // Run.
                        var result = transcriber.runesToRuneWords(TengwarExampleUTONAME1.RUNES);

                        // Verify.
                        assert.equal(result.length, TengwarExampleUTONAME1.LANGUAGE_WORDS.length);
                        var expected = [
                                [ [ "acute", "numen" ] ],
                                "space",
                                [ "anto", [ "acute", "silme" ] ],
                                "space",
                                [ "umbar", [ "leftCurl", "longCarrier" ], "quesse" ],
                                "space",
                                "of",
                                "space",
                                [ [ "rightCurl", "numen" ], "formen", [ "acute", "numen" ], [ "acute", "harma" ],
                                        [ "dot", "ando" ] ],
                                "space",
                                [ "tinco", [ "threeDots", "lambe", "underDot" ], "silme" ],
                                "space",
                                [ "umbar", "anna" ],
                                "space",
                                [ "anga", [ "leftCurl", "shortCarrier" ], "hyarmen", "numen" ],
                                "space",
                                [ "romen", [ "leftCurl", "numen" ], [ "threeDots", "lambe" ], "ando" ],
                                "space",
                                [ "romen", [ "dot", "shortCarrier" ], [ "rightCurl", "shortCarrier" ],
                                        [ "dot", "lambe" ] ],
                                "space",
                                [ "tinco", [ "leftCurl", "lambe" ], "quesse", [ "acute", "shortCarrier" ],
                                        [ "dot", "numen" ] ],
                                "newline",
                                [ "hwestaSindarinwa", [ "acute", "calma" ] ],
                                "space",
                                [ [ "vala", "threeUnderDots" ], "silme" ],
                                "space",
                                [ "umbar", "romen", [ "leftCurl", "ure" ], "gh", "tinco" ],
                                "space",
                                [ "tinco", [ "leftCurl", "ungwe" ], [ "dot", "anto" ], [ "dot", "romen" ] ],
                                "space",
                                [ "umbar", "anna" ],
                                "space",
                                [ "quesse", "romen", [ "acute", "silme" ], "tinco", [ "leftCurl", "formen" ],
                                        [ "dot", "romen" ] ],
                                "space",
                                [ "romen", [ "dot", "shortCarrier" ], [ "rightCurl", "shortCarrier" ],
                                        [ "dot", "lambe" ] ],
                                "space",
                                [ "tinco", [ "leftCurl", "lambe" ], "quesse", [ "acute", "shortCarrier" ],
                                        [ "dot", "numen" ] ], "space", [ "hyarmen", [ "acute", "silme" ] ], "space",
                                [ "silme", [ "leftCurl", "numen" ] ] ];
                        verify(assert, result, expected);
                    });

            QUnit.test("Example UTONAME2 runesToRuneWords()", function(assert)
            {
                // Setup.
                var transcriber = createTranscriber();

                // Run.
                var result = transcriber.runesToRuneWords(TengwarExampleUTONAME2.RUNES);

                // Verify.
                assert.equal(result.length, TengwarExampleUTONAME2.LANGUAGE_WORDS.length);
                var expected = [
                        [ [ "threeDots", "romen", "underDot" ] ],
                        "space",
                        [ "tinco", [ "leftCurl", "lambe" ], "ando" ],
                        "space",
                        [ "malta", [ "threeDots", "numen" ], "anna" ],
                        "space",
                        [ "thule", [ "acute", "ngwalme" ], "silme" ],
                        "space",
                        "of",
                        "space",
                        [ "malta", [ "dot", "numen" ] ],
                        "space",
                        [ [ "bar", "ando" ] ],
                        "space",
                        [ [ "dot", "lambe" ], [ "ampa", "underDot" ], "silme" ],
                        "space",
                        [ [ "acute", "numen" ] ],
                        "space",
                        [ "numen", [ "rightCurl", "malta" ], [ "dot", "numen" ], [ "leftCurl", "romen" ] ],
                        "space",
                        [ [ "bar", "ando" ] ],
                        "space",
                        [ [ "acute", "numen" ] ],
                        "space",
                        [ "malta", [ "acute", "ando", "underBar" ], [ "lambe", "underDot" ] ],
                        "newline",
                        [ [ "dot", "shortCarrier", "threeUnderDots" ], "romen", "thule" ],
                        "space",
                        [ "formen", "romen", [ "leftCurl", "malta" ] ],
                        "space",
                        "the",
                        "space",
                        [ [ "dot", "lambe" ], "ando", [ "dot", "romen" ] ],
                        "space",
                        [ "ando", [ "threeDots", "anna" ], "silme" ],
                        "space",
                        [ [ "acute", "numen" ] ],
                        "space",
                        [ "umbar", [ "dot", "lambe" ], [ "dot", "romen" ], [ "acute", "shortCarrier" ],
                                [ "threeDots", "numen" ], "ando" ],
                        "space",
                        [ "tinco", [ "leftCurl", "shortCarrier" ] ],
                        "space",
                        "the",
                        "space",
                        [ "vala", [ "threeDots", "ore" ] ],
                        "space",
                        "ofThe",
                        "space",
                        [ "romen", [ "acute", "ngwalme" ] ],
                        "space",
                        [ [ "bar", "ando" ] ],
                        "newline",
                        [ [ "threeDots", "numen" ] ],
                        "space",
                        [ [ "threeDots", "quesse", "underBar" ], [ "leftCurl", "ure" ], "numen", "tinco" ],
                        "space",
                        [ [ "acute", "silme" ] ],
                        "space",
                        [ "ungwe", [ "acute", "ampa" ], [ "dot", "numen" ] ],
                        "space",
                        "ofThe",
                        "space",
                        [ "ando", "romen", [ "rightCurl", "shortCarrier", "underDot" ], "ando",
                                [ "threeDots", "yanta" ], [ "acute", "numen" ] ],
                        "space",
                        "the",
                        "space",
                        [ [ "acute", "silme" ], "tinco", [ "threeDots", "romen" ], [ "acute", "shortCarrier" ] ],
                        "space",
                        [ [ "bar", "ando" ] ],
                        "space",
                        "the",
                        "space",
                        [ "parma", [ "threeDots", "lambe" ], [ "threeDots", "numen" ], "tinco", [ "acute", "romen" ],
                                [ "acute", "shortCarrier" ] ], "period" ];
                verify(assert, result, expected);
            });

            QUnit.test("Example TROTS1 runesToRuneWords()", function(assert)
            {
                // Setup.
                var transcriber = createTranscriber();

                // Run.
                var result = transcriber.runesToRuneWords(TengwarExampleTROTS1.RUNES);

                // Verify.
                assert.equal(result.length, TengwarExampleTROTS1.LANGUAGE_WORDS.length);
                var expected = [ [ [ "acute", "numen" ] ], "space", "the", "space",
                        [ [ "romen", "underDot" ], "tinco", [ "rightCurl", "ore" ], "numen" ], "space", "ofThe",
                        "space", [ "harma", [ "threeDots", "ando" ], [ "leftCurl", "vala" ] ], "space",
                        [ [ "threeDots", "ore", "underDot" ] ], "space",
                        [ "tinco", "romen", [ "threeDots", "silmeNuquerna", "underDot" ], "ando" ], "space", "the",
                        "space", [ "formen", [ "acute", "ore" ], "silme", "tinco" ], "space",
                        [ "formen", [ "leftCurl", "ore" ], "malta", "silme" ], "space", "ofThe", "space",
                        [ "silme", "tinco", [ "leftCurl", "romen" ], "anna" ], "space", "ofThe", "space",
                        [ "lambe", [ "leftCurl", "ore" ], "ando" ], "newline", "ofThe", "space",
                        [ "romen", [ "acute", "ngwalme" ], "silme" ], "period",
                        [ "hyarmen", [ "dot", "romen", "underDot" ], [ "acute", "numen" ] ], "space", "the", "space",
                        [ "anga", [ "leftCurl", "ure" ], "ore", "numen", [ "dot", "anna" ] ], "space", "ofThe",
                        "space", [ "hyarmen", [ "leftCurl", "umbar", "underBar" ], [ "acute", "tinco" ] ], "space",
                        [ "hwestaSindarinwa", [ "leftCurl", "shortCarrier" ] ], "space",
                        [ "umbar", [ "leftCurl", "romen", "underDot" ] ], "space", "the", "space",
                        [ "ungwe", "romen", [ "dot", "shortCarrier", "threeUnderDots" ], "tinco" ], "space",
                        [ "romen", [ "acute", "ngwalme" ] ], "comma", [ [ "threeDots", "tinco" ] ], "space",
                        [ "formen", [ "acute", "ore" ], "silme", "tinco" ] ];
                verify(assert, result, expected);
            });

            QUnit.test("Example TROTS2 runesToRuneWords()",
                    function(assert)
                    {
                        // Setup.
                        var transcriber = createTranscriber();

                        // Run.
                        var result = transcriber.runesToRuneWords(TengwarExampleTROTS2.RUNES);

                        // Verify.
                        assert.equal(result.length, TengwarExampleTROTS2.LANGUAGE_WORDS.length);
                        var expected = [
                                [ "numen", [ "threeDots", "malta", "underDot" ], "ando" ],
                                "space",
                                [ "umbar", [ "acute", "ngwalme" ], [ "leftCurl", "shortCarrier" ] ],
                                "space",
                                [ "umbar", [ "rightCurl", "tinco" ] ],
                                "space",
                                [ [ "threeDots", "formen" ], "tinco", [ "dot", "ore" ], "vala", [ "threeDots", "ore" ],
                                        "ando", "silme" ],
                                "space",
                                [ "formen", "romen", [ "leftCurl", "ando" ], [ "leftCurl", "shortCarrier" ] ],
                                "comma",
                                [ [ "acute", "silme" ] ],
                                "space",
                                [ "formen", [ "leftCurl", "lambe", "underBar" ], [ "leftCurl", "vala", "underDot" ],
                                        "ando" ],
                                "space",
                                [ "formen", "romen", [ "leftCurl", "malta" ] ],
                                "space",
                                [ "hyarmen", [ "leftCurl", "umbar", "underBar" ], [ "acute", "tinco" ],
                                        [ "leftCurl", "numen" ] ],
                                "space",
                                [ [ "acute", "numen" ] ],
                                "space",
                                "the",
                                "newline",
                                [ "harma", [ "acute", "romen", "underDot" ] ],
                                "space",
                                [ "thule", "romen", [ "leftCurl", "ure" ], "gh" ],
                                "space",
                                "the",
                                "space",
                                [ [ "leftCurl", "lambe" ], "ando" ],
                                "space",
                                [ "formen", [ "leftCurl", "romen" ], [ "dot", "silme" ], "tinco" ],
                                "space",
                                [ "tinco", [ "leftCurl", "shortCarrier" ] ],
                                "space",
                                [ "vala", [ "dot", "shortCarrier", "threeUnderDots" ], "anto", [ "dot", "ore" ],
                                        "tinco", [ "leftCurl", "parma" ] ],
                                "space",
                                [ [ "threeDots", "numen", "ando" ] ],
                                "space",
                                [ "romen", [ "acute", "ampa" ], [ "dot", "numen" ], "ando",
                                        [ "dot", "lambe", "underBar" ] ],
                                "space",
                                [ [ "threeDots", "numen", "ando" ] ],
                                "space",
                                [ [ "dot", "numen" ], "ando", "silme" ],
                                "newline",
                                [ [ "acute", "numen" ] ],
                                "space",
                                [ "anto", [ "acute", "silme" ] ],
                                "space",
                                [ "ampa", [ "leftCurl", "lambe" ], [ "rightCurl", "malta", "underDot" ] ],
                                "space",
                                [ [ "umbar", "underDot" ], "formen", [ "leftCurl", "ore", "underDot" ] ],
                                "space",
                                "the",
                                "space",
                                [ "tinco", [ "leftCurl", "malta" ], "umbar" ],
                                "space",
                                "of",
                                "space",
                                [ "umbar", [ "threeDots", "lambe" ], [ "acute", "numen" ] ],
                                "space",
                                "the",
                                "space",
                                [ "ando", "vala", [ "threeDots", "ore" ], "formen", "hyphen", "lambe",
                                        [ "leftCurl", "ore" ], "ando" ], "space", "of", "space",
                                [ "malta", [ "leftCurl", "romen" ], [ "acute", "shortCarrier", "threeUnderDots" ] ],
                                "period" ];
                        verify(assert, result, expected);
                    });

            QUnit.test("Example TTOI1 runesToRuneWords()", function(assert)
            {
                // Setup.
                var transcriber = createTranscriber();

                // Run.
                var result = transcriber.runesToRuneWords(TengwarExampleTTOI1.RUNES);

                // Verify.
                assert.equal(result.length, TengwarExampleTTOI1.LANGUAGE_WORDS.length);
                var expected = [
                        [ [ "acute", "numen" ] ],
                        "space",
                        "the",
                        "space",
                        [ "tinco", "romen", [ "dot", "shortCarrier", "threeUnderDots" ], "silme",
                                [ "leftCurl", "numen" ] ],
                        "space",
                        "of",
                        "space",
                        [ [ "acute", "silme" ], [ "dot", "numen" ], "ungwe", [ "threeDots", "ore" ], "ando" ],
                        "space",
                        "the",
                        "space",
                        [ "silme", "tinco", [ "leftCurl", "romen" ], "anna" ],
                        "space",
                        "ofThe",
                        "space",
                        [ "formen", [ "dot", "lambe", "underBar" ], [ "leftCurl", "vala" ], "harma",
                                [ "acute", "parma" ] ],
                        "space",
                        "ofThe",
                        "space",
                        [ "romen", [ "acute", "ngwalme" ] ],
                        "space",
                        [ [ "acute", "silme" ] ],
                        "space",
                        [ "tinco", "romen", [ "threeDots", "silmeNuquerna", "underDot" ], "ando" ],
                        "newline",
                        [ "formen", "romen", [ "leftCurl", "malta" ] ],
                        "space",
                        [ "romen", [ "acute", "ampa" ], [ "dot", "numen" ], "ando", [ "dot", "lambe", "underBar" ] ],
                        "space",
                        [ "thule", "romen", [ "leftCurl", "ure" ], "gh" ],
                        "space",
                        [ "malta", [ "leftCurl", "romen" ], [ "acute", "shortCarrier", "threeUnderDots" ] ],
                        "space",
                        [ [ "bar", "ando" ] ],
                        "space",
                        "the",
                        "space",
                        [ "lambe", [ "threeDots", "numen" ], "ando" ],
                        "space",
                        "of",
                        "space",
                        [ "lambe", [ "leftCurl", "thule" ], "lambe", [ "leftCurl", "romen" ],
                                [ "acute", "shortCarrier", "underDot" ], "numen" ], "space",
                        [ "tinco", [ "leftCurl", "shortCarrier" ] ], "space", "the", "space",
                        [ "ando", [ "threeDots", "anna" ], "silme" ] ];
                verify(assert, result, expected);
            });

            QUnit.test("Example TTOI2 runesToRuneWords()", function(assert)
            {
                // Setup.
                var transcriber = createTranscriber();

                // Run.
                var result = transcriber.runesToRuneWords(TengwarExampleTTOI2.RUNES);

                // Verify.
                assert.equal(result.length, TengwarExampleTTOI2.LANGUAGE_WORDS.length);
                var expected = [
                        "of",
                        "space",
                        [ [ "acute", "tinco" ], "silme" ],
                        "space",
                        [ [ "dot", "numen" ], "ando", [ "acute", "ngwalme" ] ],
                        "space",
                        [ [ "threeDots", "tinco" ] ],
                        "space",
                        [ "silmeNuquerna", [ "threeDots", "lambe" ], [ "dot", "malta" ], "umbar", [ "dot", "lambe" ] ],
                        "space",
                        [ [ "umbar", "underDot" ], "silme", [ "acute", "ando", "underDot" ] ],
                        "space",
                        [ [ "threeDots", "numen" ], "ando", [ "topCurl", "yanta" ], "numen" ],
                        "space",
                        "the",
                        "space",
                        [ "ungwe", "romen", [ "dot", "shortCarrier", "threeUnderDots" ], "tinco" ],
                        "space",
                        [ "romen", [ "acute", "ampa" ], [ "dot", "ore" ] ],
                        "period",
                        [ "thule", [ "dot", "numen" ] ],
                        "space",
                        [ [ "acute", "silme" ] ],
                        "newline",
                        [ "tinco", [ "leftCurl", "lambe" ], "ando" ],
                        "space",
                        "ofThe",
                        "space",
                        [ [ "romen", "underDot" ], "tinco", [ "rightCurl", "ore" ], "numen" ],
                        "space",
                        "of",
                        "space",
                        [ "ungwe", [ "threeDots", "numen" ], "ando", [ "threeDots", "lambe" ], "formen" ],
                        "space",
                        [ "malta", [ "acute", "thule" ], "romen", [ "threeDots", "numen" ], "ando",
                                [ "acute", "romen" ] ], "comma", "ofThe", "space",
                        [ "malta", [ "dot", "dot", "tinco" ], [ "acute", "ngwalme" ] ], "space", "ofThe", "space",
                        [ "hyarmen", [ "leftCurl", "umbar", "underBar" ], [ "acute", "tinco" ], "silme" ], "space",
                        [ "vala", [ "acute", "thule" ] ], "newline",
                        [ "formen", [ "threeDots", "ngwalme" ], [ "leftCurl", "ore" ], "numen" ], "comma",
                        [ [ "bar", "ando" ] ], "space", "ofThe", "space", [ "vala", [ "threeDots", "ore" ] ], "space",
                        [ [ "rightCurl", "parma" ], [ "leftCurl", "numen" ] ], "space", "the", "space",
                        [ "romen", [ "acute", "ando" ], [ "dot", "ore" ], "silme" ], "space", "of", "space",
                        [ "romen", [ "leftCurl", "shortCarrier" ], "hyarmen", [ "threeDots", "numen" ] ], "space",
                        [ "umbar", "anna" ], "space", "the", "space",
                        [ "tinco", "romen", [ "threeDots", "yanta" ], "tinco", [ "leftCurl", "ore" ] ], "space",
                        [ "silme", [ "threeDots", "romen" ], [ "rightCurl", "malta" ], [ "threeDots", "numen" ] ],
                        "period" ];
                verify(assert, result, expected);
            });

            QUnit.test("Example TWOTR1 runesToRuneWords()", function(assert)
            {
                // Setup.
                var transcriber = createTranscriber();

                // Run.
                var result = transcriber.runesToRuneWords(TengwarExampleTWOTR1.RUNES);

                // Verify.
                assert.equal(result.length, TengwarExampleTWOTR1.LANGUAGE_WORDS.length);
                var expected = [ [ [ "acute", "numen" ] ], "space", "the", "space", [ "vala", [ "threeDots", "ore" ] ],
                        "space", "ofThe", "space", [ "romen", [ "acute", "ngwalme" ] ], "space",
                        [ [ "acute", "silme" ] ], "space",
                        [ "tinco", "romen", [ "threeDots", "silmeNuquerna", "underDot" ], "ando" ], "space", "the",
                        "space", [ "silme", "tinco", [ "leftCurl", "romen" ], "anna" ], "space", "ofThe", "space",
                        [ "ampa", [ "acute", "silmeNuquerna" ], "tinco", [ "leftCurl", "romen" ], "anna" ], "space",
                        [ [ "threeDots", "tinco" ] ], "space", [ "hyarmen", [ "dot", "lambe" ], "malta", "silme" ],
                        "space", [ "ando", [ "dot", "dot", "parma" ] ], "newline", [ [ "bar", "ando" ] ], "space",
                        "the", "space", [ "ando", "romen", [ "leftCurl", "vala" ], "numen", [ "acute", "ngwalme" ] ],
                        "space", "of", "space",
                        [ [ "acute", "silme" ], [ "dot", "numen" ], "ungwe", [ "threeDots", "ore" ], "ando" ], "space",
                        [ "umbar", "anna" ], "space", "the", "space", [ [ "dot", "numen" ], "tinco", "silme" ],
                        "comma", [ "anto", [ "dot", "numen" ] ], "space", [ [ "acute", "silme" ] ], "space",
                        [ "tinco", [ "leftCurl", "lambe" ], "ando" ], "space", "ofThe" ];
                verify(assert, result, expected);
            });

            QUnit.test("Example TWOTR2 runesToRuneWords()", function(assert)
            {
                // Setup.
                var transcriber = createTranscriber();

                // Run.
                var result = transcriber.runesToRuneWords(TengwarExampleTWOTR2.RUNES);

                // Verify.
                assert.equal(result.length, TengwarExampleTWOTR2.LANGUAGE_WORDS.length);
                var expected = [
                        [ "anga", [ "leftCurl", "ure" ], "ore", "numen", [ "dot", "anna" ] ],
                        "space",
                        "of",
                        "space",
                        [ "formen", "romen", [ "leftCurl", "ando" ], [ "leftCurl", "shortCarrier" ] ],
                        "space",
                        [ "vala", [ "acute", "anto" ] ],
                        "space",
                        [ "silme", [ "threeDots", "malta" ], "vala", [ "acute", "silme", "underDot" ] ],
                        "space",
                        [ [ "bar", "ando" ] ],
                        "space",
                        [ "ungwe", [ "leftCurl", "lambe", "underBar" ], [ "rightCurl", "malta" ] ],
                        "space",
                        [ "tinco", [ "leftCurl", "shortCarrier" ] ],
                        "space",
                        "the",
                        "space",
                        [ "malta", [ "leftCurl", "romen" ], [ "threeDots", "numen", "underBar" ],
                                [ "leftCurl", "numen" ] ], "comma", "ofThe", "newline",
                        [ "malta", [ "dot", "dot", "tinco" ], [ "acute", "ngwalme" ] ], "space",
                        [ "vala", [ "acute", "anto" ] ], "space",
                        [ "formen", [ "threeDots", "romen" ], [ "threeDots", "malta" ], [ "acute", "romen" ] ],
                        "comma", [ [ "bar", "ando" ] ], "space", "the", "space",
                        [ "silme", "tinco", [ "threeDots", "yanta" ], "ore", "silme" ], "space", "of", "space",
                        [ "quesse", [ "acute", "romen" ], [ "acute", "thule" ] ], "space",
                        [ [ "rightCurl", "ngwalme" ], [ "leftCurl", "lambe" ] ], "comma", "ofThe", "space",
                        [ "umbar", [ "threeDots", "tinco", "underBar" ], [ "lambe", "underDot" ] ], "space", "ofThe",
                        "newline",
                        [ "parma", [ "dot", "lambe" ], [ "dot", "numen", "underBar" ], [ "leftCurl", "ore" ] ],
                        "space", [ "formen", [ "acute", "shortCarrier", "underDot" ], "lambe", "ando", "silme" ],
                        "comma", [ [ "bar", "ando" ] ], "space", "ofThe", "space",
                        [ "silmeNuquerna", [ "leftCurl", "malta" ], [ "acute", "ngwalme" ] ], "space", "of", "space",
                        [ [ "threeDots", "romen" ], [ "threeDots", "ungwe" ], [ "leftCurl", "ore" ], "numen" ],
                        "space", [ [ "acute", "numen" ] ], "space", "the", "space",
                        [ "formen", "lambe", [ "dot", "dot", "tinco" ] ], "space", "of", "space",
                        [ [ "rightCurl", "malta" ], "umbar", [ "threeDots", "ore" ] ], "period" ];
                verify(assert, result, expected);
            });

            QUnit.test("Example SD1 runesToRuneWords()",
                    function(assert)
                    {
                        // Setup.
                        var transcriber = createTranscriber();

                        // Run.
                        var result = transcriber.runesToRuneWords(TengwarExampleSD1.RUNES);

                        // Verify.
                        assert.equal(result.length, TengwarExampleSD1.LANGUAGE_WORDS.length);
                        var expected = [
                                [ [ "acute", "numen" ] ],
                                "space",
                                [ "anto", [ "acute", "silme" ] ],
                                "space",
                                [ "umbar", [ "leftCurl", "longCarrier" ], "quesse" ],
                                "space",
                                [ [ "acute", "silme" ] ],
                                "space",
                                [ "tinco", "romen", [ "threeDots", "silmeNuquerna", "underDot" ], "ando" ],
                                "space",
                                [ "formen", [ "acute", "ore" ], "silme", "tinco" ],
                                "space",
                                "the",
                                "space",
                                [ "silme", "tinco", [ "leftCurl", "romen" ], "anna" ],
                                "space",
                                "ofThe",
                                "space",
                                [ "ando", [ "dot", "silme" ], "tinco", "romen", [ "rightCurl", "quesse" ], "tinco",
                                        [ "acute", "shortCarrier" ], [ "leftCurl", "numen" ] ],
                                "space",
                                "ofThe",
                                "newline",
                                [ [ "leftCurl", "numen", "underDot" ] ],
                                "space",
                                [ "romen", [ "acute", "ngwalme" ] ],
                                "space",
                                [ [ "bar", "ando" ] ],
                                "space",
                                "the",
                                "space",
                                [ "ando", [ "leftCurl", "vala" ], "numen", "formen",
                                        [ "threeDots", "lambe", "underBar" ] ],
                                "space",
                                "of",
                                "space",
                                [ "silme", [ "threeDots", "shortCarrier" ], [ "rightCurl", "romen" ],
                                        [ "leftCurl", "numen" ] ], "space", [ [ "threeDots", "tinco" ] ], "space",
                                "the", "space", [ [ "dot", "numen" ], "ando" ], "space", "ofThe", "space",
                                [ "thule", [ "acute", "ore" ], "ando" ], "space",
                                [ [ "threeDots", "anga", "underDot" ] ], "period" ];
                        verify(assert, result, expected);
                    });

            QUnit
                    .test(
                            "Example SD2 runesToRuneWords()",
                            function(assert)
                            {
                                // Setup.
                                var transcriber = createTranscriber();

                                // Run.
                                var result = transcriber.runesToRuneWords(TengwarExampleSD2.RUNES);

                                // Verify.
                                assert.equal(result.length, TengwarExampleSD2.LANGUAGE_WORDS.length);
                                var expected = [
                                        [ "anto", [ "dot", "numen" ] ],
                                        "space",
                                        [ "formen", [ "leftCurl", "lambe", "underBar" ], [ "leftCurl", "vala" ],
                                                "silme" ],
                                        "space",
                                        [ [ "threeDots", "numen" ] ],
                                        "space",
                                        [ [ "threeDots", "quesse" ], [ "leftCurl", "vala" ], "numen", "tinco" ],
                                        "space",
                                        "ofThe",
                                        "space",
                                        [ [ "acute", "numen" ], "tinco", "romen", [ "rightCurl", "silme" ],
                                                [ "acute", "shortCarrier" ], [ "leftCurl", "numen" ] ],
                                        "space",
                                        "ofThe",
                                        "space",
                                        [ "quesse", [ "threeDots", "tinco" ], [ "threeDots", "quesse" ], "lambe",
                                                "anna", "silme", "malta" ],
                                        "space",
                                        "ofThe",
                                        "space",
                                        [ "vala", [ "dot", "silme" ], "tinco" ],
                                        "newline",
                                        [ [ "acute", "numen" ], "tinco", [ "leftCurl", "shortCarrier" ] ],
                                        "space",
                                        "the",
                                        "space",
                                        [ "ando", [ "dot", "lambe" ], [ "acute", "umbar" ], [ "dot", "ore" ],
                                                [ "threeDots", "shortCarrier" ], "tinco", [ "acute", "shortCarrier" ],
                                                [ "leftCurl", "numen" ], "silme" ],
                                        "space",
                                        "of",
                                        "space",
                                        [ "silmeNuquerna", [ "dot", "ore" ], "tinco", [ "threeDots", "shortCarrier" ],
                                                "numen" ],
                                        "space",
                                        [ "silme", "quesse", [ "leftCurl", "lambe" ], [ "threeDots", "ore" ], "silme" ],
                                        "space",
                                        "of",
                                        "space",
                                        [ [ "leftCurl", "quesse" ], "silme", "formen", [ "leftCurl", "ore" ], "ando" ],
                                        "space",
                                        [ [ "bar", "ando" ] ],
                                        "newline",
                                        "the",
                                        "space",
                                        [ "formen", [ "threeDots", "lambe", "underBar" ] ],
                                        "space",
                                        "of",
                                        "space",
                                        [ "silme", [ "threeDots", "shortCarrier" ], [ "rightCurl", "romen" ],
                                                [ "leftCurl", "numen" ] ],
                                        "space",
                                        [ "numen", [ "threeDots", "malta" ], [ "dot", "ando" ] ],
                                        "space",
                                        [ "esse", [ "acute", "ungwe" ], [ "rightCurl", "romen" ] ],
                                        "space",
                                        [ [ "acute", "numen" ] ],
                                        "space",
                                        "the",
                                        "space",
                                        [ "ando", "romen", [ "leftCurl", "vala" ], "numen", [ "acute", "ngwalme" ] ],
                                        "space",
                                        "of",
                                        "space",
                                        [ [ "threeDots", "numen" ], [ "threeDots", "ando" ],
                                                [ "rightCurl", "numen", "underDot" ] ], "period" ];
                                verify(assert, result, expected);
                            });

            /***********************************************************************************************************
             * Utility functions.
             */

            function createTranscriber()
            {
                return new PhoneticToTengwarTranscriber();
            }

            function testPhonemesToRunes(assert, phonemes, expected, useComparison)
            {
                // Setup.
                var transcriber = createTranscriber();

                // Run.
                var result = transcriber.phonemesToRunes(phonemes);

                // Verify.
                verify(assert, result, expected, useComparison);
            }

            function testRunesToFontLetters(assert, runes, expected, useComparison)
            {
                // Setup.
                var transcriber = createTranscriber();

                // Run.
                var result = transcriber.runesToFontLetters(runes);

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
