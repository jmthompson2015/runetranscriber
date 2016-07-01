define(
        [ "EnglishToPhoneticForAurebeshTranscriber", "example/AurebeshExampleSW1TPM1", "example/AurebeshExampleSW4ANH1" ],
        function(EnglishToPhoneticForAurebeshTranscriber, AurebeshExampleSW1TPM1, AurebeshExampleSW4ANH1)
        {
            "use strict";
            QUnit.module("EnglishToPhoneticForAurebeshTranscriber");

            // ////////////////////////////////////////////////////////////////////////
            // languageStringToWords()

            QUnit.test("languageStringToWords() AurebeshExampleSW1TPM1", function(assert)
            {
                languageStringToWords(assert, AurebeshExampleSW1TPM1);
            });

            QUnit.test("languageStringToWords() AurebeshExampleSW4ANH1", function(assert)
            {
                languageStringToWords(assert, AurebeshExampleSW4ANH1);
            });

            // ////////////////////////////////////////////////////////////////////////
            // languageWordsToString()

            QUnit.test("languageWordsToString() AurebeshExampleSW1TPM1", function(assert)
            {
                languageWordsToString(assert, AurebeshExampleSW1TPM1);
            });

            QUnit.test("languageWordsToString() AurebeshExampleSW4ANH1", function(assert)
            {
                languageWordsToString(assert, AurebeshExampleSW4ANH1);
            });

            // ////////////////////////////////////////////////////////////////////////
            // transcribeForward()

            QUnit.test("transcribeForward() AurebeshExampleSW1TPM1", function(assert)
            {
                transcribeForward(assert, AurebeshExampleSW1TPM1);
            });

            QUnit.test("transcribeForward() AurebeshExampleSW4ANH1", function(assert)
            {
                transcribeForward(assert, AurebeshExampleSW4ANH1);
            });

            // ////////////////////////////////////////////////////////////////////////
            // transcribeReverse()

            QUnit.test("transcribeReverse() AurebeshExampleSW1TPM1", function(assert)
            {
                transcribeReverse(assert, AurebeshExampleSW1TPM1);
            });

            QUnit.test("transcribeReverse() AurebeshExampleSW4ANH1", function(assert)
            {
                transcribeReverse(assert, AurebeshExampleSW4ANH1);
            });

            // ////////////////////////////////////////////////////////////////////////
            // Utility functions.

            function languageStringToWords(assert, example)
            {
                // Setup.
                var languageString = example.LANGUAGE_STRING;

                // Run.
                var result = EnglishToPhoneticForAurebeshTranscriber.languageStringToWords(languageString);

                // Verify.
                assert.ok(result);
                var languageWords = example.LANGUAGE_WORDS;
                assert.equal(result.length, languageWords.length);
                languageWords.forEach(function(languageWord, i)
                {
                    assert.equal(result[i], languageWord, "languageWord = " + result[i] + " " + languageWord);
                });
            };

            function languageWordsToString(assert, example)
            {
                // Setup.
                var languageWords = example.LANGUAGE_WORDS;

                // Run.
                var result = EnglishToPhoneticForAurebeshTranscriber.languageWordsToString(languageWords);

                // Verify.
                assert.ok(result);
                var languageString = example.LANGUAGE_STRING.toLowerCase();
                assert.equal(result, languageString);
            };

            function transcribeForward(assert, example)
            {
                // Setup.
                var languageWords = example.LANGUAGE_WORDS;

                // Run.
                var result = EnglishToPhoneticForAurebeshTranscriber.transcribeForward(languageWords);

                // Verify.
                assert.ok(result);
                var phonemes = example.PHONEMES;
                assert.equal(result.length, phonemes.length);
                phonemes.forEach(function(phoneme, i)
                {
                    assert.equal(result[i], phoneme, "phoneme = " + result[i] + " " + phoneme);
                });
            };

            function transcribeReverse(assert, example)
            {
                // Setup.
                var phonemes = example.PHONEMES;

                // Run.
                var result = EnglishToPhoneticForAurebeshTranscriber.transcribeReverse(phonemes);

                // Verify.
                assert.ok(result);
                var languageWords = example.LANGUAGE_WORDS;
                assert.equal(result.length, languageWords.length);
                languageWords.forEach(function(languageWord, i)
                {
                    assert.equal(result[i], languageWord, "languageWord = " + result[i] + " " + languageWord);
                });
            };
        });
