define([ "LanguageToPhoneticTranscriber", "RuneSet", "example/AurebeshExampleSW1TPM1" ], function(
        LanguageToPhoneticTranscriber, RuneSet, AurebeshExampleSW1TPM1)
{
    "use strict";
    QUnit.module("LanguageToPhoneticTranscriber");

    QUnit.test("languageStringToWords() AurebeshExampleSW1TPM1", function(assert)
    {
        languageStringToWords(assert, RuneSet.AUREBESH, AurebeshExampleSW1TPM1);
    });

    QUnit.test("languageWordsToString() AurebeshExampleSW1TPM1", function(assert)
    {
        languageWordsToString(assert, RuneSet.AUREBESH, AurebeshExampleSW1TPM1);
    });

    QUnit.test("transcribeForward() AurebeshExampleSW1TPM1", function(assert)
    {
        transcribeForward(assert, RuneSet.AUREBESH, AurebeshExampleSW1TPM1);
    });

    QUnit.test("transcribeReverse() AurebeshExampleSW1TPM1", function(assert)
    {
        transcribeReverse(assert, RuneSet.AUREBESH, AurebeshExampleSW1TPM1);
    });

    function createAurebeshTranscriber()
    {
        var languageToPhonemeMap = {};
        var phonemeToLanguageMap = {};

        function put(fromSequence, toSequence)
        {
            languageToPhonemeMap[fromSequence] = toSequence;
            phonemeToLanguageMap[toSequence.join("")] = [ fromSequence ];
        }

        // Lower-case letters.
        put("a", [ "a" ]);
        put("b", [ "b" ]);
        put("c", [ "c" ]);
        put("d", [ "d" ]);
        put("e", [ "e" ]);
        put("f", [ "f" ]);
        put("g", [ "g" ]);
        put("h", [ "h" ]);
        put("i", [ "i" ]);
        put("j", [ "j" ]);
        put("k", [ "k" ]);
        put("l", [ "l" ]);
        put("m", [ "m" ]);
        put("n", [ "n" ]);
        put("o", [ "o" ]);
        put("p", [ "p" ]);
        put("q", [ "q" ]);
        put("r", [ "r" ]);
        put("s", [ "s" ]);
        put("t", [ "t" ]);
        put("u", [ "u" ]);
        put("v", [ "v" ]);
        put("w", [ "w" ]);
        put("x", [ "x" ]);
        put("y", [ "y" ]);
        put("z", [ "z" ]);

        // Upper-case letters.
        put("A", [ "A" ]);
        put("K", [ "K" ]);

        // Numbers.
        put("0", [ "0" ]);
        put("1", [ "1" ]);
        put("2", [ "2" ]);
        put("3", [ "3" ]);
        put("4", [ "4" ]);
        put("5", [ "5" ]);
        put("6", [ "6" ]);
        put("7", [ "7" ]);
        put("8", [ "8" ]);
        put("9", [ "9" ]);

        // Punctuation.
        put(" ", [ " " ]);
        put("\n", [ "\n" ]);

        return new LanguageToPhoneticTranscriber(languageToPhonemeMap, phonemeToLanguageMap);
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

    function languageStringToWords(assert, runeSetKey, example)
    {
        // Setup.
        var languageString = example.LANGUAGE_STRING;
        var transcriber = createTranscriber(runeSetKey);

        // Run.
        var result = transcriber.languageStringToWords(languageString);

        // Verify.
        assert.ok(result);
        var languageWords = example.LANGUAGE_WORDS;
        assert.equal(result.length, languageWords.length);
        languageWords.forEach(function(languageWord, i)
        {
            assert.equal(result[i], languageWord, "languageWord = " + result[i] + " " + languageWord);
        });
    };

    function languageWordsToString(assert, runeSetKey, example)
    {
        // Setup.
        var languageWords = example.LANGUAGE_WORDS;
        var transcriber = createTranscriber(runeSetKey);

        // Run.
        var result = transcriber.languageWordsToString(languageWords);

        // Verify.
        assert.ok(result);
        var languageString = example.LANGUAGE_STRING;
        assert.equal(result, languageString);
    };

    function transcribeForward(assert, runeSetKey, example)
    {
        // Setup.
        var languageWords = example.LANGUAGE_WORDS;
        var transcriber = createTranscriber(runeSetKey);

        // Run.
        var result = transcriber.transcribeForward(languageWords);

        // Verify.
        assert.ok(result);
        var phonemes = example.PHONEMES;
        assert.equal(result.length, phonemes.length);
        phonemes.forEach(function(phoneme, i)
        {
            assert.equal(result[i], phoneme, "phoneme = " + result[i] + " " + phoneme);
        });
    };

    function transcribeReverse(assert, runeSetKey, example)
    {
        // Setup.
        var phonemes = example.PHONEMES;
        var transcriber = createTranscriber(runeSetKey);

        // Run.
        var result = transcriber.transcribeReverse(phonemes);

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
