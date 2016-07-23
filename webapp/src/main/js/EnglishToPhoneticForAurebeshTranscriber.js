define([ "LanguageToPhoneticTranscriber" ], function(LanguageToPhoneticTranscriber)
{
    "use strict";
    var EnglishToPhoneticForAurebeshTranscriber =
    {
        languageToPhonemeMap: {},
        phonemeToLanguageMap: {},
    };

    function put(fromSequence, toSequence)
    {
        EnglishToPhoneticForAurebeshTranscriber.languageToPhonemeMap[fromSequence] = toSequence;
        EnglishToPhoneticForAurebeshTranscriber.phonemeToLanguageMap[toSequence.join("")] = [ fromSequence ];
    }

    // Lower-case letters.
    var i;
    for (i = 0; i < 26; i++)
    {
        var letter = String.fromCharCode(97 + i);
        put(letter, [ letter ]);
    }

    // Upper-case letters.
    for (i = 0; i < 26; i++)
    {
        var letter = String.fromCharCode(65 + i);
        put(letter, [ letter ]);
    }

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

    EnglishToPhoneticForAurebeshTranscriber.delegate = new LanguageToPhoneticTranscriber(
            EnglishToPhoneticForAurebeshTranscriber.languageToPhonemeMap,
            EnglishToPhoneticForAurebeshTranscriber.phonemeToLanguageMap);

    EnglishToPhoneticForAurebeshTranscriber.languageStringToWords = function(languageString)
    {
        return EnglishToPhoneticForAurebeshTranscriber.delegate.languageStringToWords(languageString);
    };

    EnglishToPhoneticForAurebeshTranscriber.languageWordsToString = function(languageWords)
    {
        return EnglishToPhoneticForAurebeshTranscriber.delegate.languageWordsToString(languageWords);
    };

    EnglishToPhoneticForAurebeshTranscriber.transcribeForward = function(languageWords)
    {
        return EnglishToPhoneticForAurebeshTranscriber.delegate.transcribeForward(languageWords);
    };

    EnglishToPhoneticForAurebeshTranscriber.transcribeReverse = function(phonemes)
    {
        return EnglishToPhoneticForAurebeshTranscriber.delegate.transcribeReverse(phonemes);
    };

    if (Object.freeze)
    {
        Object.freeze(EnglishToPhoneticForAurebeshTranscriber);
    };

    return EnglishToPhoneticForAurebeshTranscriber;
});
