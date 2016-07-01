define([ "EnglishToPhoneticForCirthEreborTranscriber", "example/CirthEreborExample1", "example/CirthEreborExample2" ],
        function(EnglishToPhoneticForCirthEreborTranscriber, CirthEreborExample1, CirthEreborExample2)
        {
            "use strict";
            QUnit.module("EnglishToPhoneticForCirthEreborTranscriber");

            // ////////////////////////////////////////////////////////////////////////
            // languageStringToWords()

            QUnit.test("languageStringToWords() CirthEreborExample1", function(assert)
            {
                languageStringToWords(assert, CirthEreborExample1);
            });

            QUnit.test("languageStringToWords() CirthEreborExample2", function(assert)
            {
                languageStringToWords(assert, CirthEreborExample2);
            });

            // ////////////////////////////////////////////////////////////////////////
            // languageWordsToString()

            QUnit.test("languageWordsToString() CirthEreborExample1", function(assert)
            {
                languageWordsToString(assert, CirthEreborExample1);
            });

            QUnit.test("languageWordsToString() CirthEreborExample2", function(assert)
            {
                languageWordsToString(assert, CirthEreborExample2);
            });

            // ////////////////////////////////////////////////////////////////////////
            // transcribeForward()

            QUnit.test("transcribeForward() CirthEreborExample1", function(assert)
            {
                transcribeForward(assert, CirthEreborExample1);
            });

            QUnit.test("transcribeForward() CirthEreborExample2", function(assert)
            {
                transcribeForward(assert, CirthEreborExample2);
            });

            // ////////////////////////////////////////////////////////////////////////
            // transcribeReverse()

            QUnit.test("transcribeReverse() CirthEreborExample1", function(assert)
            {
                transcribeReverse(assert, CirthEreborExample1);
            });

            QUnit.test("transcribeReverse() CirthEreborExample2", function(assert)
            {
                transcribeReverse(assert, CirthEreborExample2);
            });

            // ////////////////////////////////////////////////////////////////////////
            // Utility functions.

            function languageStringToWords(assert, example)
            {
                // Setup.
                var languageString = example.LANGUAGE_STRING;

                // Run.
                var result = EnglishToPhoneticForCirthEreborTranscriber.languageStringToWords(languageString);

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
                var result = EnglishToPhoneticForCirthEreborTranscriber.languageWordsToString(languageWords);

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
                var result = EnglishToPhoneticForCirthEreborTranscriber.transcribeForward(languageWords);

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
                var result = EnglishToPhoneticForCirthEreborTranscriber.transcribeReverse(phonemes);

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
