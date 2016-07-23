define([ "LanguageToPhoneticTranscriber" ], function(LanguageToPhoneticTranscriber)
{
    "use strict";
    var EnglishToPhoneticForAngloSaxonTranscriber =
    {
        languageToPhonemeMap: {},
        phonemeToLanguageMap: {},
    };

    function put(fromSequence, toSequence)
    {
        EnglishToPhoneticForAngloSaxonTranscriber.languageToPhonemeMap[fromSequence] = toSequence;
        EnglishToPhoneticForAngloSaxonTranscriber.phonemeToLanguageMap[toSequence.join("")] = [ fromSequence ];
    }

    // Consonants.
    put("b", [ "b" ]);
    put("c", [ "k" ]);
    put("d", [ "d" ]);
    put("f", [ "f" ]);
    put("g", [ "g" ]);
    put("h", [ "h" ]);
    put("j", [ "i" ]);
    put("k", [ "k" ]);
    put("l", [ "l" ]);
    put("m", [ "m" ]);
    put("n", [ "n" ]);
    put("ng", [ "ng" ]);
    put("p", [ "p" ]);
    put("q", [ "q" ]);
    put("r", [ "r" ]);
    put("s", [ "s" ]);
    put("t", [ "t" ]);
    put("th", [ "th" ]);
    put("v", [ "v" ]);
    put("w", [ "w" ]);
    put("x", [ "x" ]);
    put("y", [ "y" ]);
    put("z", [ "z" ]);

    // Vowels.
    put("a", [ "ae" ]);
    put("e", [ "e" ]);
    put("i", [ "i" ]);
    put("o", [ "o" ]);
    put("u", [ "u" ]);
    put("ea", [ "ea" ]);
    put("eo", [ "eo" ]);
    put("ee", [ "oe" ]);

    // Punctuation.
    put(" ", [ " " ]);
    put(",", [ "," ]);
    put(".", [ "." ]);
    put("'", [ "'" ]);
    put("\n", [ "\n" ]);

    put("abreast", [ "ae", "b", "r", "e", "ae", "s", "t" ]);
    put("door", [ "d", "o", "r" ]);
    put("last", [ "l", "a", "s", "t" ]);
    EnglishToPhoneticForAngloSaxonTranscriber.phonemeToLanguageMap["kk"] = "ck";
    EnglishToPhoneticForAngloSaxonTranscriber.phonemeToLanguageMap["rekord"] = "record";
    EnglishToPhoneticForAngloSaxonTranscriber.phonemeToLanguageMap["iourney"] = "journey";
    EnglishToPhoneticForAngloSaxonTranscriber.phonemeToLanguageMap["kompiled"] = "compiled";
    EnglishToPhoneticForAngloSaxonTranscriber.phonemeToLanguageMap["i r r"] = "j r r";
    EnglishToPhoneticForAngloSaxonTranscriber.phonemeToLanguageMap["diordie"] = "djordje";

    EnglishToPhoneticForAngloSaxonTranscriber.delegate = new LanguageToPhoneticTranscriber(
            EnglishToPhoneticForAngloSaxonTranscriber.languageToPhonemeMap,
            EnglishToPhoneticForAngloSaxonTranscriber.phonemeToLanguageMap);

    EnglishToPhoneticForAngloSaxonTranscriber.languageStringToWords = function(languageString)
    {
        var myLanguageString = languageString.toLowerCase();

        return EnglishToPhoneticForAngloSaxonTranscriber.delegate.languageStringToWords(myLanguageString);
    };

    EnglishToPhoneticForAngloSaxonTranscriber.languageWordsToString = function(languageWords)
    {
        return EnglishToPhoneticForAngloSaxonTranscriber.delegate.languageWordsToString(languageWords);
    };

    EnglishToPhoneticForAngloSaxonTranscriber.transcribeForward = function(languageWords)
    {
        return EnglishToPhoneticForAngloSaxonTranscriber.delegate.transcribeForward(languageWords);
    };

    EnglishToPhoneticForAngloSaxonTranscriber.transcribeReverse = function(phonemes)
    {
        return EnglishToPhoneticForAngloSaxonTranscriber.delegate.transcribeReverse(phonemes);
    };

    if (Object.freeze)
    {
        Object.freeze(EnglishToPhoneticForAngloSaxonTranscriber);
    };

    return EnglishToPhoneticForAngloSaxonTranscriber;
});
