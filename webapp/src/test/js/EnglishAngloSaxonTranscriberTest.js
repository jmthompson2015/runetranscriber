define([ "AngloSaxonRune", "EnglishAngloSaxonTranscriber", "example/AngloSaxonExample1", "example/AngloSaxonExample2",
        "example/AngloSaxonExample3", "example/AngloSaxonExample4", "example/AngloSaxonExample5",
        "example/AngloSaxonExample6", "example/AngloSaxonExample7", "example/AngloSaxonExample8" ], function(
        AngloSaxonRune, EnglishAngloSaxonTranscriber, AngloSaxonExample1, AngloSaxonExample2, AngloSaxonExample3,
        AngloSaxonExample4, AngloSaxonExample5, AngloSaxonExample6, AngloSaxonExample7, AngloSaxonExample8)
{
    "use strict";
    QUnit.module("EnglishAngloSaxonTranscriber");

    // ////////////////////////////////////////////////////////////////////////
    // phonemesToLanguageWords()

    QUnit.test("phonemesToLanguageWords() AngloSaxonExample1", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var phonemes = AngloSaxonExample1.PHONEMES;

        // Run.
        var result = transcriber.phonemesToLanguageWords(phonemes);

        // Verify.
        assert.ok(result);
        var expected = AngloSaxonExample1.LANGUAGE_WORDS;
        assert.equal(result.length, expected.length);

        for (var i = 0; i < result.length; i++)
        {
            assert.equal(result[i], expected[i], "" + i);
        }
    });

    // ////////////////////////////////////////////////////////////////////////
    // runesToFontLetters()

    QUnit.test("runesToFontLetters() AngloSaxonExample1", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var runes = AngloSaxonExample1.RUNES;

        // Run.
        var result = transcriber.runesToFontLetters(runes);

        // Verify.
        assert.ok(result);
        var expected = runes.map(function(runeKey)
        {
            var rune = AngloSaxonRune.properties[runeKey];
            return rune.fontLetter;
        });
        assert.equal(result.length, expected.length);

        for (var i = 0; i < result.length; i++)
        {
            assert.equal(result[i], expected[i], "" + i);
        }
    });

    // ////////////////////////////////////////////////////////////////////////
    // runesToPhonemes()

    QUnit.test("runesToPhonemes() AngloSaxonExample1", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var runes = AngloSaxonExample1.RUNES;

        // Run.
        var result = transcriber.runesToPhonemes(runes);

        // Verify.
        assert.ok(result);
        var expected = AngloSaxonExample1.PHONEMES;
        assert.equal(result.length, expected.length);

        for (var i = 0; i < result.length; i++)
        {
            assert.equal(result[i], expected[i], "" + i);
        }
    });

    // ////////////////////////////////////////////////////////////////////////
    // transcribeForward()

    QUnit.test("transcribeForward() AngloSaxonExample1", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var fromSequence = AngloSaxonExample1.LANGUAGE_STRING;

        // Run.
        var result = transcriber.transcribeForward(fromSequence);

        // Verify.
        assert.ok(result);
        var expected = AngloSaxonExample1.RUNES;
        assert.equal(result.length, expected.length);

        for (var i = 0; i < result.length; i++)
        {
            assert.equal(result[i], expected[i], "" + i);
        }
    });

    QUnit.test("transcribeForward() AngloSaxonExample2", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var fromSequence = AngloSaxonExample2.LANGUAGE_STRING;

        // Run.
        var toSequence = transcriber.transcribeForward(fromSequence);

        // Verify.
        assert.ok(toSequence);
        var expected = AngloSaxonExample2.RUNES;
        assert.equal(toSequence.length, expected.length);

        for (var i = 0; i < toSequence.length; i++)
        {
            assert.equal(toSequence[i], expected[i], "" + i);
        }
    });

    QUnit.test("transcribeForward() AngloSaxonExample3", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var fromSequence = AngloSaxonExample3.LANGUAGE_STRING;

        // Run.
        var toSequence = transcriber.transcribeForward(fromSequence);

        // Verify.
        assert.ok(toSequence);
        var expected = AngloSaxonExample3.RUNES;
        assert.equal(toSequence.length, expected.length);

        for (var i = 0; i < toSequence.length; i++)
        {
            assert.equal(toSequence[i], expected[i], "" + i);
        }
    });

    QUnit.test("transcribeForward() AngloSaxonExample4", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var fromSequence = AngloSaxonExample4.LANGUAGE_STRING;

        // Run.
        var toSequence = transcriber.transcribeForward(fromSequence);

        // Verify.
        assert.ok(toSequence);
        var expected = AngloSaxonExample4.RUNES;
        assert.equal(toSequence.length, expected.length);

        for (var i = 0; i < toSequence.length; i++)
        {
            assert.equal(toSequence[i], expected[i], "" + i);
        }
    });

    QUnit.test("transcribeForward() AngloSaxonExample5", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var fromSequence = AngloSaxonExample5.LANGUAGE_STRING;

        // Run.
        var toSequence = transcriber.transcribeForward(fromSequence);

        // Verify.
        assert.ok(toSequence);
        var expected = AngloSaxonExample5.RUNES;
        assert.equal(toSequence.length, expected.length);

        for (var i = 0; i < toSequence.length; i++)
        {
            assert.equal(toSequence[i], expected[i], "" + i);
        }
    });

    QUnit.test("transcribeForward() AngloSaxonExample6", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var fromSequence = AngloSaxonExample6.LANGUAGE_STRING;

        // Run.
        var toSequence = transcriber.transcribeForward(fromSequence);

        // Verify.
        assert.ok(toSequence);
        var expected = AngloSaxonExample6.RUNES;
        assert.equal(toSequence.length, expected.length);

        for (var i = 0; i < toSequence.length; i++)
        {
            assert.equal(toSequence[i], expected[i], "" + i);
        }
    });

    QUnit.test("transcribeForward() AngloSaxonExample7", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var fromSequence = AngloSaxonExample7.LANGUAGE_STRING;

        // Run.
        var toSequence = transcriber.transcribeForward(fromSequence);

        // Verify.
        assert.ok(toSequence);
        var expected = AngloSaxonExample7.RUNES;
        assert.equal(toSequence.length, expected.length);

        for (var i = 0; i < toSequence.length; i++)
        {
            assert.equal(toSequence[i], expected[i], "" + i);
        }
    });

    QUnit.test("transcribeForward() AngloSaxonExample8", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var fromSequence = AngloSaxonExample8.LANGUAGE_STRING;

        // Run.
        var toSequence = transcriber.transcribeForward(fromSequence);

        // Verify.
        assert.ok(toSequence);
        var expected = AngloSaxonExample8.RUNES;
        assert.equal(toSequence.length, expected.length);

        for (var i = 0; i < toSequence.length; i++)
        {
            assert.equal(toSequence[i], expected[i], "" + i);
        }
    });

    // ////////////////////////////////////////////////////////////////////////
    // transcribeReverse()

    QUnit.test("transcribeReverse() AngloSaxonExample1", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var toSequence = AngloSaxonExample1.RUNES;

        // Run.
        var fromSequence = transcriber.transcribeReverse(toSequence);

        // Verify.
        assert.ok(fromSequence);
        var expected = AngloSaxonExample1.LANGUAGE_STRING.toLowerCase();
        assert.equal(fromSequence.length, expected.length);
        assert.equal(fromSequence, expected);
    });

    QUnit.test("transcribeReverse() AngloSaxonExample2", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var toSequence = AngloSaxonExample2.RUNES;

        // Run.
        var fromSequence = transcriber.transcribeReverse(toSequence);

        // Verify.
        assert.ok(fromSequence);
        var expected = AngloSaxonExample2.LANGUAGE_STRING.toLowerCase();
        expected = expected.replace("'", "");
        assert.equal(fromSequence.length, expected.length);
        assert.equal(fromSequence, expected);
    });

    QUnit.test("transcribeReverse() AngloSaxonExample3", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var toSequence = AngloSaxonExample3.RUNES;

        // Run.
        var fromSequence = transcriber.transcribeReverse(toSequence);

        // Verify.
        assert.ok(fromSequence);
        var expected = AngloSaxonExample3.LANGUAGE_STRING.toLowerCase();
        expected = expected.replace("'", "");
        assert.equal(fromSequence.length, expected.length);
        assert.equal(fromSequence, expected);
    });

    QUnit.test("transcribeReverse() AngloSaxonExample4", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var toSequence = AngloSaxonExample4.RUNES;

        // Run.
        var fromSequence = transcriber.transcribeReverse(toSequence);

        // Verify.
        assert.ok(fromSequence);
        var expected = AngloSaxonExample4.LANGUAGE_STRING.toLowerCase();
        assert.equal(fromSequence.length, expected.length);
        assert.equal(fromSequence, expected);
    });

    QUnit.test("transcribeReverse() AngloSaxonExample5", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var toSequence = AngloSaxonExample5.RUNES;

        // Run.
        var fromSequence = transcriber.transcribeReverse(toSequence);

        // Verify.
        assert.ok(fromSequence);
        var expected = AngloSaxonExample5.LANGUAGE_STRING.toLowerCase();
        expected = expected.replace("'", "");
        assert.equal(fromSequence.length, expected.length);
        assert.equal(fromSequence, expected);
    });

    QUnit.test("transcribeReverse() AngloSaxonExample6", function(assert)
    {
        // Setup.
        var transcriber = new EnglishAngloSaxonTranscriber();
        var toSequence = AngloSaxonExample6.RUNES;

        // Run.
        var fromSequence = transcriber.transcribeReverse(toSequence);

        // Verify.
        assert.ok(fromSequence);
        var expected = AngloSaxonExample6.LANGUAGE_STRING.toLowerCase();
        expected = expected.replace("'", "");
        assert.equal(fromSequence.length, expected.length);
        assert.equal(fromSequence, expected);
    });
});
