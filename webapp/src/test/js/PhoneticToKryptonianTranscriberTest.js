define([ "KryptonianRune", "PhoneticToKryptonianTranscriber", "example/KryptonianExampleDC1" ], function(
        KryptonianRune, PhoneticToKryptonianTranscriber, KryptonianExampleDC1)
{
    "use strict";
    QUnit.module("PhoneticToKryptonianTranscriber");

    QUnit.test("runesToFontLetters() KryptonianExampleDC1", function(assert)
    {
        runesToFontLetters(assert, KryptonianExampleDC1);
    });

    QUnit.test("transcribeForward() KryptonianExampleDC1", function(assert)
    {
        transcribeForward(assert, KryptonianExampleDC1);
    });

    QUnit.test("transcribeReverse() KryptonianExampleDC1", function(assert)
    {
        transcribeReverse(assert, KryptonianExampleDC1);
    });

    function runesToFontLetters(assert, example)
    {
        // Setup.
        var runeKeys = example.RUNES;

        // Run.
        var result = PhoneticToKryptonianTranscriber.runesToFontLetters(runeKeys);

        // Verify.
        assert.ok(result);
        var fontLetters = example.FONT_LETTERS;

        // // TEMP Print the font letters.
        // var temp = "";
        // runeKeys.forEach(function(runeKey)
        // {
        // var rune = KryptonianRune.properties[runeKey];
        // temp += "KryptonianRune.properties[\"" + rune.displayName + "\"].fontLetter,\n";
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
        var result = PhoneticToKryptonianTranscriber.transcribeForward(phonemes);

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
        var result = PhoneticToKryptonianTranscriber.transcribeReverse(runeKeys);

        // Verify.
        assert.ok(result);

        // TEMP Print the phonemes.
        // var temp = "";
        // runeKeys.forEach(function(runeKey)
        // {
        // var rune = KryptonianRune.properties[runeKey];
        // temp += "KryptonianRune.properties[\"" + rune.displayName + "\"].phoneme,\n";
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
