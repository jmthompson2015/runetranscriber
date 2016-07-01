define([ "AngloSaxonRune", "AurebeshRune", "CerthRune", "PhoneticToRuneTranscriber", "RuneSet",
        "example/AngloSaxonExample1", "example/AurebeshExampleSW1TPM1", "example/AurebeshExampleSW4ANH1",
        "example/CirthEreborExample1", "example/CirthEreborExample2" ], function(AngloSaxonRune, AurebeshRune,
        CerthRune, PhoneticToRuneTranscriber, RuneSet, AngloSaxonExample1, AurebeshExampleSW1TPM1,
        AurebeshExampleSW4ANH1, CirthEreborExample1, CirthEreborExample2)
{
    "use strict";
    QUnit.module("PhoneticToRuneTranscriber");

    QUnit.test("runesToFontLetters() AngloSaxon 1", function(assert)
    {
        runesToFontLetters(assert, RuneSet.ANGLO_SAXON, AngloSaxonExample1);
    });

    QUnit.test("runesToFontLetters() Aurebesh 1", function(assert)
    {
        runesToFontLetters(assert, RuneSet.AUREBESH, AurebeshExampleSW1TPM1);
    });

    QUnit.test("runesToFontLetters() Cirth 1", function(assert)
    {
        runesToFontLetters(assert, RuneSet.CIRTH, CirthEreborExample1);
    });

    QUnit.test("transcribeForward() AngloSaxon 1", function(assert)
    {
        transcribeForward(assert, RuneSet.ANGLO_SAXON, AngloSaxonExample1)
    });

    QUnit.test("transcribeForward() Aurebesh 1", function(assert)
    {
        transcribeForward(assert, RuneSet.AUREBESH, AurebeshExampleSW1TPM1)
    });

    QUnit.test("transcribeForward() Cirth 1", function(assert)
    {
        transcribeForward(assert, RuneSet.CIRTH, CirthEreborExample1)
    });

    QUnit.test("transcribeReverse() AngloSaxon 1", function(assert)
    {
        transcribeReverse(assert, RuneSet.ANGLO_SAXON, AngloSaxonExample1);
    });

    QUnit.test("transcribeReverse() Aurebesh 1", function(assert)
    {
        transcribeReverse(assert, RuneSet.AUREBESH, AurebeshExampleSW1TPM1);
    });

    QUnit.test("transcribeReverse() Cirth 1", function(assert)
    {
        transcribeReverse(assert, RuneSet.CIRTH, CirthEreborExample1);
    });

    function createAngloSaxonTranscriber()
    {
        var runeSet = RuneSet.properties[RuneSet.ANGLO_SAXON];
        var phonemeToRuneMap = {};
        var runeToPhonemeMap = {};

        AngloSaxonRune.values.forEach(function(runeKey)
        {
            var rune = AngloSaxonRune.properties[runeKey];
            phonemeToRuneMap[rune.phoneme] = [ runeKey ];
            runeToPhonemeMap[runeKey] = [ rune.phoneme ];
        });

        return new PhoneticToRuneTranscriber(runeSet.runes, phonemeToRuneMap, runeToPhonemeMap);
    }

    function createAurebeshTranscriber()
    {
        var runeSet = RuneSet.properties[RuneSet.AUREBESH];
        var phonemeToRuneMap = {};
        var runeToPhonemeMap = {};

        AurebeshRune.values.forEach(function(runeKey)
        {
            var rune = AurebeshRune.properties[runeKey];
            phonemeToRuneMap[rune.phoneme] = [ runeKey ];
            runeToPhonemeMap[runeKey] = [ rune.phoneme ];
        });

        phonemeToRuneMap["the"] = [ AurebeshRune.TRILL, AurebeshRune.HERF, AurebeshRune.ESK ];
        phonemeToRuneMap["ship"] = [ AurebeshRune.SENTH, AurebeshRune.HERF, AurebeshRune.ISK, AurebeshRune.PETH ];

        return new PhoneticToRuneTranscriber(runeSet.runes, phonemeToRuneMap, runeToPhonemeMap);
    }

    function createCirthTranscriber()
    {
        var runeSet = RuneSet.properties[RuneSet.CIRTH];
        var phonemeToRuneMap = {};
        var runeToPhonemeMap = {};

        CerthRune.values.forEach(function(runeKey)
        {
            var rune = CerthRune.properties[runeKey];
            phonemeToRuneMap[rune.phoneme] = [ runeKey ];
            runeToPhonemeMap[runeKey] = [ rune.phoneme ];
        });

        phonemeToRuneMap[CerthRune.properties["c34"].phoneme] = [ "c34" ];
        phonemeToRuneMap[CerthRune.properties["c36"].phoneme] = [ "c36" ];
        phonemeToRuneMap[CerthRune.properties["c48"].phoneme] = [ "c48" ];
        phonemeToRuneMap[CerthRune.properties["c50"].phoneme] = [ "c50" ];
        phonemeToRuneMap["red"] = [ CerthRune.C12, CerthRune.C46, CerthRune.C9 ];

        return new PhoneticToRuneTranscriber(runeSet.runes, phonemeToRuneMap, runeToPhonemeMap);
    }

    function createTranscriber(runeSetKey)
    {
        var transcriber;

        switch (runeSetKey)
        {
        case RuneSet.ANGLO_SAXON:
            transcriber = createAngloSaxonTranscriber();
            break;
        case RuneSet.AUREBESH:
            transcriber = createAurebeshTranscriber();
            break;
        case RuneSet.CIRTH:
            transcriber = createCirthTranscriber();
            break;
        default:
            throw "Unknown runeSetKey: " + runeSetKey;
        };

        return transcriber;
    }

    function runesToFontLetters(assert, runeSetKey, example)
    {
        // Setup.
        var runeSet = RuneSet.properties[runeSetKey];
        var runeKeys = example.RUNES;
        var fontLetters = example.FONT_LETTERS;
        var transcriber = createTranscriber(runeSetKey);

        // Run.
        var result = transcriber.runesToFontLetters(runeKeys);

        // TEMP Print the font letters.
        // var temp = "";
        // runeKeys.forEach(function(runeKey)
        // {
        // var rune = runeSet.runes.properties[runeKey];
        // var name = runeSet.name.replace("-", "");
        // temp += name + "Rune.properties[\"" + rune.displayName + "\"].fontLetter,\n";
        // });
        // console.log(temp);
        // TEMP

        // Verify.
        assert.ok(result);
        assert.equal(result.length, fontLetters.length);
        fontLetters.forEach(function(fontLetter, i)
        {
            assert.equal(result[i], fontLetter, "fontLetter: " + result[i] + " " + fontLetter);
        });
    }

    function transcribeForward(assert, runeSetKey, example)
    {
        // Setup.
        var phonemes = example.PHONEMES;
        var runeKeys = example.RUNES;
        var transcriber = createTranscriber(runeSetKey);

        // Run.
        var result = transcriber.transcribeForward(phonemes);

        // Verify.
        assert.ok(result);
        assert.equal(result.length, runeKeys.length);
        runeKeys.forEach(function(rune, i)
        {
            assert.equal(rune, result[i], "rune: " + rune + " " + result[i]);
        });
    }

    function transcribeReverse(assert, runeSetKey, example)
    {
        // Setup.
        var phonemes = example.PHONEMES;
        var runeKeys = example.RUNES;
        var transcriber = createTranscriber(runeSetKey);

        // Run.
        var result = transcriber.transcribeReverse(runeKeys);

        // Verify.
        assert.ok(result);
        assert.equal(result.length, phonemes.length);
        phonemes.forEach(function(phoneme, i)
        {
            assert.equal(phoneme, result[i], "phoneme: " + phoneme + " " + result[i]);
        });
    };
});
