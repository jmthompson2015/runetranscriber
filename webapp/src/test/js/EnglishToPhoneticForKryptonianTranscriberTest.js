define([ "EnglishToPhoneticForKryptonianTranscriber", "example/KryptonianExampleDC1" ], function(
        EnglishToPhoneticForKryptonianTranscriber, KryptonianExampleDC1)
{
    "use strict";
    QUnit.module("EnglishToPhoneticForKryptonianTranscriber");

    // ////////////////////////////////////////////////////////////////////////
    // languageStringToWords()

    QUnit.test("languageStringToWords() KryptonianExampleDC1", function(assert)
    {
        languageStringToWords(assert, KryptonianExampleDC1);
    });

    // ////////////////////////////////////////////////////////////////////////
    // languageWordsToString()

    QUnit.test("languageWordsToString() KryptonianExampleDC1", function(assert)
    {
        languageWordsToString(assert, KryptonianExampleDC1);
    });

    // ////////////////////////////////////////////////////////////////////////
    // transcribeForward()

    QUnit.test("transcribeForward() KryptonianExampleDC1", function(assert)
    {
        transcribeForward(assert, KryptonianExampleDC1);
    });

    // ////////////////////////////////////////////////////////////////////////
    // transcribeReverse()

    QUnit.test("transcribeReverse() KryptonianExampleDC1", function(assert)
    {
        transcribeReverse(assert, KryptonianExampleDC1);
    });

    // ////////////////////////////////////////////////////////////////////////
    // Utility functions.

    function languageStringToWords(assert, example)
    {
        // Setup.
        var languageString = example.LANGUAGE_STRING;

        // Run.
        var result = EnglishToPhoneticForKryptonianTranscriber.languageStringToWords(languageString);

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
        var result = EnglishToPhoneticForKryptonianTranscriber.languageWordsToString(languageWords);

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
        var result = EnglishToPhoneticForKryptonianTranscriber.transcribeForward(languageWords);

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
        var result = EnglishToPhoneticForKryptonianTranscriber.transcribeReverse(phonemes);

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
