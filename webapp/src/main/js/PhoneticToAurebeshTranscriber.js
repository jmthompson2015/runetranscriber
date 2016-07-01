define([ "AurebeshRune", "PhoneticToRuneTranscriber", "util/InputValidator" ], function(AurebeshRune,
        PhoneticToRuneTranscriber, InputValidator)
{
    "use strict";
    var PhoneticToAurebeshTranscriber =
    {
        phonemeToRuneMap: {},
        runeToPhonemeMap: {},
    };

    AurebeshRune.values.forEach(function(runeKey)
    {
        var rune = AurebeshRune.properties[runeKey];
        PhoneticToAurebeshTranscriber.phonemeToRuneMap[rune.phoneme] = [ runeKey ];
        PhoneticToAurebeshTranscriber.runeToPhonemeMap[runeKey] = [ rune.phoneme ];

        PhoneticToAurebeshTranscriber.phonemeToRuneMap["the"] = [ AurebeshRune.TRILL, AurebeshRune.HERF,
                AurebeshRune.ESK ];
        PhoneticToAurebeshTranscriber.phonemeToRuneMap["ship"] = [ AurebeshRune.SENTH, AurebeshRune.HERF,
                AurebeshRune.ISK, AurebeshRune.PETH ];
    });

    PhoneticToAurebeshTranscriber.delegate = new PhoneticToRuneTranscriber(AurebeshRune,
            PhoneticToAurebeshTranscriber.phonemeToRuneMap, PhoneticToAurebeshTranscriber.runeToPhonemeMap);

    PhoneticToAurebeshTranscriber.runesToFontLetters = function(runeKeys)
    {
        return PhoneticToAurebeshTranscriber.delegate.runesToFontLetters(runeKeys);
    };

    PhoneticToAurebeshTranscriber.transcribeForward = function(phonemes)
    {
        return PhoneticToAurebeshTranscriber.delegate.transcribeForward(phonemes);
    };

    PhoneticToAurebeshTranscriber.transcribeReverse = function(runeKeys)
    {
        return PhoneticToAurebeshTranscriber.delegate.transcribeReverse(runeKeys);
    };

    if (Object.freeze)
    {
        Object.freeze(PhoneticToAurebeshTranscriber);
    };

    return PhoneticToAurebeshTranscriber;
});
