define([ "AngloSaxonRune", "PhoneticToAngloSaxonTranscriber", "example/AngloSaxonExample1",
        "example/AngloSaxonExample2", "example/AngloSaxonExample3", "example/AngloSaxonExample4",
        "example/AngloSaxonExample5", "example/AngloSaxonExample6", "example/AngloSaxonExample7",
        "example/AngloSaxonExample8" ], function(AngloSaxonRune, PhoneticToAngloSaxonTranscriber, AngloSaxonExample1,
        AngloSaxonExample2, AngloSaxonExample3, AngloSaxonExample4, AngloSaxonExample5, AngloSaxonExample6,
        AngloSaxonExample7, AngloSaxonExample8)
{
    "use strict";
    QUnit.module("PhoneticToAngloSaxonTranscriber");

    QUnit.test("runesToFontLetters() AngloSaxonExample1", function(assert)
    {
        runesToFontLetters(assert, AngloSaxonExample1);
    });

    QUnit.test("runesToFontLetters() AngloSaxonExample2", function(assert)
    {
        runesToFontLetters(assert, AngloSaxonExample2);
    });

    QUnit.test("runesToFontLetters() AngloSaxonExample3", function(assert)
    {
        runesToFontLetters(assert, AngloSaxonExample3);
    });

    QUnit.test("runesToFontLetters() AngloSaxonExample4", function(assert)
    {
        runesToFontLetters(assert, AngloSaxonExample4);
    });

    QUnit.test("runesToFontLetters() AngloSaxonExample5", function(assert)
    {
        runesToFontLetters(assert, AngloSaxonExample5);
    });

    QUnit.test("runesToFontLetters() AngloSaxonExample6", function(assert)
    {
        runesToFontLetters(assert, AngloSaxonExample6);
    });

    QUnit.test("runesToFontLetters() AngloSaxonExample7", function(assert)
    {
        runesToFontLetters(assert, AngloSaxonExample7);
    });

    QUnit.test("runesToFontLetters() AngloSaxonExample8", function(assert)
    {
        runesToFontLetters(assert, AngloSaxonExample8);
    });

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

    function runesToFontLetters(assert, example)
    {
        // Setup.
        var runeKeys = example.RUNES;

        // Run.
        var result = PhoneticToAngloSaxonTranscriber.runesToFontLetters(runeKeys);

        // Verify.
        assert.ok(result);
        var fontLetters = example.FONT_LETTERS;

        // // TEMP Print the font letters.
        // var temp = "";
        // runeKeys.forEach(function(runeKey)
        // {
        // var rune = AngloSaxonRune.properties[runeKey];
        // temp += "AngloSaxonRune.properties[\"" + rune.displayName + "\"].fontLetter,\n";
        // });
        // console.log(temp);
        // // TEMP

        assert.equal(result.length, fontLetters.length);
        fontLetters.forEach(function(fontLetter, i)
        {
            assert.equal(result[i], fontLetter, "fontLetter: " + result[i] + " " + fontLetter);
        });
    };

    function transcribeForward(assert, example)
    {
        // Setup.
        var phonemes = example.PHONEMES;

        // Run.
        var result = PhoneticToAngloSaxonTranscriber.transcribeForward(phonemes);

        // Verify.
        assert.ok(result);
        var runeKeys = example.RUNES;
        assert.equal(result.length, runeKeys.length);
        runeKeys.forEach(function(runeKey, i)
        {
            assert.equal(result[i], runeKey, "runeKey: " + result[i] + " " + runeKey);
        });
    };

    function transcribeReverse(assert, example)
    {
        // Setup.
        var runeKeys = example.RUNES;

        // Run.
        var result = PhoneticToAngloSaxonTranscriber.transcribeReverse(runeKeys);

        // Verify.
        assert.ok(result);

        // TEMP Print the phonemes.
        // var temp = "";
        // runeKeys.forEach(function(runeKey)
        // {
        // var rune = AngloSaxonRune.properties[runeKey];
        // temp += "AngloSaxonRune.properties[\"" + rune.displayName + "\"].phoneme,\n";
        // });
        // console.log(temp);
        // TEMP

        var phonemes = example.PHONEMES;
        assert.equal(result.length, phonemes.length);
        phonemes.forEach(function(phoneme, i)
        {
            assert.equal(result[i], phoneme, "phoneme: " + result[i] + " " + phoneme);
        });
    };
});
