define([ "LanguageToPhoneticTranscriber" ], function(LanguageToPhoneticTranscriber)
{
    "use strict";
    var EnglishToPhoneticForCirthEreborTranscriber =
    {
        languageToPhonemeMap: {},
        phonemeToLanguageMap: {},

    };

    function put(fromSequence, toSequence)
    {
        EnglishToPhoneticForCirthEreborTranscriber.languageToPhonemeMap[fromSequence] = toSequence;
        EnglishToPhoneticForCirthEreborTranscriber.phonemeToLanguageMap[toSequence.join("")] = [ fromSequence ];
    }

    // Consonants.
    put("b", [ "b" ]);
    put("d", [ "d" ]);
    put("f", [ "f" ]);
    put("k", [ "k" ]);
    put("l", [ "l" ]);
    put("m", [ "m" ]);
    put("n", [ "n" ]);
    put("ng", [ "ng" ]);
    put("r", [ "r" ]);
    put("s", [ "s" ]);
    put("t", [ "t" ]);

    // Vowels.
    put("a", [ "a" ]);
    put("e", [ "e" ]);
    put("i", [ "i" ]);
    put("o", [ "o" ]);

    // Punctuation.
    put(" ", [ " " ]);

    put("the", [ "dh", "e" ]);
    put("of", [ "o", "v" ]);
    put("oo", [ "oo" ]);
    put("und", [ "u", "nd" ]);

    EnglishToPhoneticForCirthEreborTranscriber.delegate = new LanguageToPhoneticTranscriber(
            EnglishToPhoneticForCirthEreborTranscriber.languageToPhonemeMap,
            EnglishToPhoneticForCirthEreborTranscriber.phonemeToLanguageMap);

    EnglishToPhoneticForCirthEreborTranscriber.languageStringToWords = function(languageString)
    {
        return EnglishToPhoneticForCirthEreborTranscriber.delegate.languageStringToWords(languageString);
    };

    EnglishToPhoneticForCirthEreborTranscriber.languageWordsToString = function(languageWords)
    {
        return EnglishToPhoneticForCirthEreborTranscriber.delegate.languageWordsToString(languageWords);
    };

    EnglishToPhoneticForCirthEreborTranscriber.transcribeForward = function(languageWords)
    {
        return EnglishToPhoneticForCirthEreborTranscriber.delegate.transcribeForward(languageWords);
    };

    EnglishToPhoneticForCirthEreborTranscriber.transcribeReverse = function(phonemes)
    {
        return EnglishToPhoneticForCirthEreborTranscriber.delegate.transcribeReverse(phonemes);
    };

    if (Object.freeze)
    {
        Object.freeze(EnglishToPhoneticForCirthEreborTranscriber);
    };

    return EnglishToPhoneticForCirthEreborTranscriber;
});
