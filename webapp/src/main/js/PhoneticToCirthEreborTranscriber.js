define([ "CerthRune", "PhoneticToRuneTranscriber", "util/InputValidator" ], function(CerthRune,
        PhoneticToRuneTranscriber, InputValidator)
{
    "use strict";
    var PhoneticToCirthEreborTranscriber =
    {
        phonemeToRuneMap: {},
        runeToPhonemeMap: {},
    };

    CerthRune.values().forEach(function(runeKey)
    {
        var rune = CerthRune.properties[runeKey];
        PhoneticToCirthEreborTranscriber.phonemeToRuneMap[rune.phoneme] = [ runeKey ];
        PhoneticToCirthEreborTranscriber.runeToPhonemeMap[runeKey] = [ rune.phoneme ];
    });

    PhoneticToCirthEreborTranscriber.phonemeToRuneMap["n"] = [ CerthRune.C22 ];
    PhoneticToCirthEreborTranscriber.phonemeToRuneMap["s"] = [ CerthRune.C35 ];
    PhoneticToCirthEreborTranscriber.phonemeToRuneMap["ng"] = [ CerthRune.C36 ];
    PhoneticToCirthEreborTranscriber.phonemeToRuneMap["a"] = [ CerthRune.C48 ];
    PhoneticToCirthEreborTranscriber.phonemeToRuneMap["o"] = [ CerthRune.C50 ];
    PhoneticToCirthEreborTranscriber.phonemeToRuneMap["red"] = [ CerthRune.C12, CerthRune.C46, CerthRune.C9 ];
    PhoneticToCirthEreborTranscriber.phonemeToRuneMap["son"] = [ CerthRune.C35, CerthRune.C56, CerthRune.C22 ];
    PhoneticToCirthEreborTranscriber.phonemeToRuneMap["und"] = [ CerthRune.C42, CerthRune.C33 ];
    PhoneticToCirthEreborTranscriber.phonemeToRuneMap["of"] = [ CerthRune.C50, CerthRune.C4 ];

    PhoneticToCirthEreborTranscriber.delegate = new PhoneticToRuneTranscriber(CerthRune,
            PhoneticToCirthEreborTranscriber.phonemeToRuneMap, PhoneticToCirthEreborTranscriber.runeToPhonemeMap);

    PhoneticToCirthEreborTranscriber.runesToFontLetters = function(runeKeys)
    {
        return PhoneticToCirthEreborTranscriber.delegate.runesToFontLetters(runeKeys);
    };

    PhoneticToCirthEreborTranscriber.transcribeForward = function(phonemes)
    {
        return PhoneticToCirthEreborTranscriber.delegate.transcribeForward(phonemes);
    };

    PhoneticToCirthEreborTranscriber.transcribeReverse = function(runeKeys)
    {
        return PhoneticToCirthEreborTranscriber.delegate.transcribeReverse(runeKeys);
    };

    if (Object.freeze)
    {
        Object.freeze(PhoneticToCirthEreborTranscriber);
    };

    return PhoneticToCirthEreborTranscriber;
});
