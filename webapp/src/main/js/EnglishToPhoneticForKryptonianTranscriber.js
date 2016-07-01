define([ "LanguageToPhoneticTranscriber" ], function(LanguageToPhoneticTranscriber)
{
    "use strict";
    var EnglishToPhoneticForKryptonianTranscriber =
    {
        languageToPhonemeMap: {},
        phonemeToLanguageMap: {},
    };

    function put(fromSequence, toSequence)
    {
        EnglishToPhoneticForKryptonianTranscriber.languageToPhonemeMap[fromSequence] = toSequence;
        EnglishToPhoneticForKryptonianTranscriber.phonemeToLanguageMap[toSequence.join("")] = [ fromSequence ];
    }

    // Consonants.
    put("b", [ "b" ]);
    put("c", [ "c" ]);
    put("d", [ "d" ]);
    put("f", [ "f" ]);
    put("g", [ "g" ]);
    put("h", [ "h" ]);
    put("j", [ "j" ]);
    put("k", [ "k" ]);
    put("l", [ "l" ]);
    put("m", [ "m" ]);
    put("n", [ "n" ]);
    put("p", [ "p" ]);
    put("q", [ "q" ]);
    put("r", [ "r" ]);
    put("s", [ "s" ]);
    put("t", [ "t" ]);
    put("v", [ "v" ]);
    put("w", [ "w" ]);
    put("x", [ "x" ]);
    put("y", [ "y" ]);
    put("z", [ "z" ]);

    // Vowels.
    put("a", [ "a" ]);
    put("e", [ "e" ]);
    put("i", [ "i" ]);
    put("o", [ "o" ]);
    put("u", [ "u" ]);

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
    put("-", [ "-" ]);
    put(",", [ "," ]);
    put(".", [ "." ]);
    put("'", [ "'" ]);
    put("\n", [ "\n" ]);

    EnglishToPhoneticForKryptonianTranscriber.delegate = new LanguageToPhoneticTranscriber(
            EnglishToPhoneticForKryptonianTranscriber.languageToPhonemeMap,
            EnglishToPhoneticForKryptonianTranscriber.phonemeToLanguageMap);

    EnglishToPhoneticForKryptonianTranscriber.languageStringToWords = function(languageString)
    {
        return EnglishToPhoneticForKryptonianTranscriber.delegate.languageStringToWords(languageString);
    };

    EnglishToPhoneticForKryptonianTranscriber.languageWordsToString = function(languageWords)
    {
        return EnglishToPhoneticForKryptonianTranscriber.delegate.languageWordsToString(languageWords);
    };

    EnglishToPhoneticForKryptonianTranscriber.transcribeForward = function(languageWords)
    {
        return EnglishToPhoneticForKryptonianTranscriber.delegate.transcribeForward(languageWords);
    };

    EnglishToPhoneticForKryptonianTranscriber.transcribeReverse = function(phonemes)
    {
        return EnglishToPhoneticForKryptonianTranscriber.delegate.transcribeReverse(phonemes);
    };

    if (Object.freeze)
    {
        Object.freeze(EnglishToPhoneticForKryptonianTranscriber);
    };

    return EnglishToPhoneticForKryptonianTranscriber;
});
