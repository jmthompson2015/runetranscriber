define([ "AurebeshRune", "PhoneticToAurebeshTranscriber", "example/AurebeshExampleSW1TPM1",
        "example/AurebeshExampleSW4ANH1" ], function(AurebeshRune, PhoneticToAurebeshTranscriber,
        AurebeshExampleSW1TPM1, AurebeshExampleSW4ANH1)
{
    "use strict";
    QUnit.module("PhoneticToAurebeshTranscriber");

    QUnit.test("runesToFontLetters() AurebeshExampleSW1TPM1", function(assert)
    {
        runesToFontLetters(assert, AurebeshExampleSW1TPM1);
    });

    QUnit.test("runesToFontLetters() AurebeshExampleSW4ANH1", function(assert)
    {
        runesToFontLetters(assert, AurebeshExampleSW4ANH1);
    });

    QUnit.test("transcribeForward() AurebeshExampleSW1TPM1", function(assert)
    {
        transcribeForward(assert, AurebeshExampleSW1TPM1);
    });

    QUnit.test("transcribeForward() AurebeshExampleSW4ANH1", function(assert)
    {
        transcribeForward(assert, AurebeshExampleSW4ANH1);
    });

    QUnit.test("transcribeReverse() AurebeshExampleSW1TPM1", function(assert)
    {
        transcribeReverse(assert, AurebeshExampleSW1TPM1);
    });

    QUnit.test("transcribeReverse() AurebeshExampleSW4ANH1", function(assert)
    {
        transcribeReverse(assert, AurebeshExampleSW4ANH1);
    });

    function runesToFontLetters(assert, example)
    {
        // Setup.
        var runeKeys = example.RUNES;

        // Run.
        var result = PhoneticToAurebeshTranscriber.runesToFontLetters(runeKeys);

        // Verify.
        assert.ok(result);
        var fontLetters = example.FONT_LETTERS;

        // // TEMP Print the font letters.
        // var temp = "";
        // runeKeys.forEach(function(runeKey)
        // {
        // var rune = AurebeshRune.properties[runeKey];
        // temp += "AurebeshRune.properties[\"" + rune.displayName + "\"].fontLetter,\n";
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
        var result = PhoneticToAurebeshTranscriber.transcribeForward(phonemes);

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
        var result = PhoneticToAurebeshTranscriber.transcribeReverse(runeKeys);

        // Verify.
        assert.ok(result);

        // TEMP Print the phonemes.
        // var temp = "";
        // runeKeys.forEach(function(runeKey)
        // {
        // var rune = AurebeshRune.properties[runeKey];
        // temp += "AurebeshRune.properties[\"" + rune.displayName + "\"].phoneme,\n";
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
