define([ "EnglishToPhoneticForAngloSaxonTranscriber", "example/AngloSaxonExample1", "example/AngloSaxonExample2",
        "example/AngloSaxonExample3", "example/AngloSaxonExample4", "example/AngloSaxonExample5",
        "example/AngloSaxonExample6", "example/AngloSaxonExample7", "example/AngloSaxonExample8" ], function(
        EnglishToPhoneticForAngloSaxonTranscriber, AngloSaxonExample1, AngloSaxonExample2, AngloSaxonExample3,
        AngloSaxonExample4, AngloSaxonExample5, AngloSaxonExample6, AngloSaxonExample7, AngloSaxonExample8)
{
    "use strict";
    QUnit.module("EnglishToPhoneticForAngloSaxonTranscriber");

    // ////////////////////////////////////////////////////////////////////////
    // languageStringToWords()

    QUnit.test("languageStringToWords() AngloSaxonExample1", function(assert)
    {
        languageStringToWords(assert, AngloSaxonExample1);
    });

    QUnit.test("languageStringToWords() AngloSaxonExample2", function(assert)
    {
        languageStringToWords(assert, AngloSaxonExample2);
    });

    QUnit.test("languageStringToWords() AngloSaxonExample3", function(assert)
    {
        languageStringToWords(assert, AngloSaxonExample3);
    });

    QUnit.test("languageStringToWords() AngloSaxonExample4", function(assert)
    {
        languageStringToWords(assert, AngloSaxonExample4);
    });

    QUnit.test("languageStringToWords() AngloSaxonExample5", function(assert)
    {
        languageStringToWords(assert, AngloSaxonExample5);
    });

    QUnit.test("languageStringToWords() AngloSaxonExample6", function(assert)
    {
        languageStringToWords(assert, AngloSaxonExample6);
    });

    QUnit.test("languageStringToWords() AngloSaxonExample7", function(assert)
    {
        languageStringToWords(assert, AngloSaxonExample7);
    });

    QUnit.test("languageStringToWords() AngloSaxonExample8", function(assert)
    {
        languageStringToWords(assert, AngloSaxonExample8);
    });

    // ////////////////////////////////////////////////////////////////////////
    // languageWordsToString()

    QUnit.test("languageWordsToString() AngloSaxonExample1", function(assert)
    {
        languageWordsToString(assert, AngloSaxonExample1);
    });

    QUnit.test("languageWordsToString() AngloSaxonExample2", function(assert)
    {
        languageWordsToString(assert, AngloSaxonExample2);
    });

    QUnit.test("languageWordsToString() AngloSaxonExample3", function(assert)
    {
        languageWordsToString(assert, AngloSaxonExample3);
    });

    QUnit.test("languageWordsToString() AngloSaxonExample4", function(assert)
    {
        languageWordsToString(assert, AngloSaxonExample4);
    });

    QUnit.test("languageWordsToString() AngloSaxonExample5", function(assert)
    {
        languageWordsToString(assert, AngloSaxonExample5);
    });

    QUnit.test("languageWordsToString() AngloSaxonExample6", function(assert)
    {
        languageWordsToString(assert, AngloSaxonExample6);
    });

    QUnit.test("languageWordsToString() AngloSaxonExample7", function(assert)
    {
        languageWordsToString(assert, AngloSaxonExample7);
    });

    QUnit.test("languageWordsToString() AngloSaxonExample8", function(assert)
    {
        languageWordsToString(assert, AngloSaxonExample8);
    });

    // ////////////////////////////////////////////////////////////////////////
    // transcribeForward()

    QUnit.test("transcribeForward() AngloSaxonExample1", function(assert)
    {
        transcribeForward(assert, AngloSaxonExample1);
    });

    QUnit.test("transcribeForward() AngloSaxonExample2", function(assert)
    {
        transcribeForward(assert, AngloSaxonExample2);
    });

    QUnit.test("transcribeForward() AngloSaxonExample3", function(assert)
    {
        transcribeForward(assert, AngloSaxonExample3);
    });

    QUnit.test("transcribeForward() AngloSaxonExample4", function(assert)
    {
        transcribeForward(assert, AngloSaxonExample4);
    });

    QUnit.test("transcribeForward() AngloSaxonExample5", function(assert)
    {
        transcribeForward(assert, AngloSaxonExample5);
    });

    QUnit.test("transcribeForward() AngloSaxonExample6", function(assert)
    {
        transcribeForward(assert, AngloSaxonExample6);
    });

    QUnit.test("transcribeForward() AngloSaxonExample7", function(assert)
    {
        transcribeForward(assert, AngloSaxonExample7);
    });

    QUnit.test("transcribeForward() AngloSaxonExample8", function(assert)
    {
        transcribeForward(assert, AngloSaxonExample8);
    });

    // ////////////////////////////////////////////////////////////////////////
    // transcribeReverse()

    QUnit.test("transcribeReverse() AngloSaxonExample1", function(assert)
    {
        transcribeReverse(assert, AngloSaxonExample1);
    });

    QUnit.test("transcribeReverse() AngloSaxonExample2", function(assert)
    {
        transcribeReverse(assert, AngloSaxonExample2);
    });

    QUnit.test("transcribeReverse() AngloSaxonExample3", function(assert)
    {
        transcribeReverse(assert, AngloSaxonExample3);
    });

    QUnit.test("transcribeReverse() AngloSaxonExample4", function(assert)
    {
        transcribeReverse(assert, AngloSaxonExample4);
    });

    QUnit.test("transcribeReverse() AngloSaxonExample5", function(assert)
    {
        transcribeReverse(assert, AngloSaxonExample5);
    });

    QUnit.test("transcribeReverse() AngloSaxonExample6", function(assert)
    {
        transcribeReverse(assert, AngloSaxonExample6);
    });

    QUnit.test("transcribeReverse() AngloSaxonExample7", function(assert)
    {
        transcribeReverse(assert, AngloSaxonExample7);
    });

    QUnit.test("transcribeReverse() AngloSaxonExample8", function(assert)
    {
        transcribeReverse(assert, AngloSaxonExample8);
    });

    // ////////////////////////////////////////////////////////////////////////
    // Utility functions.

    function languageStringToWords(assert, example)
    {
        // Setup.
        var languageString = example.LANGUAGE_STRING;

        // Run.
        var result = EnglishToPhoneticForAngloSaxonTranscriber.languageStringToWords(languageString);

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
        var result = EnglishToPhoneticForAngloSaxonTranscriber.languageWordsToString(languageWords);

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
        var result = EnglishToPhoneticForAngloSaxonTranscriber.transcribeForward(languageWords);

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
        var result = EnglishToPhoneticForAngloSaxonTranscriber.transcribeReverse(phonemes);

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
