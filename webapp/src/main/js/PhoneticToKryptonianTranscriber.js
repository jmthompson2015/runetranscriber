define([ "KryptonianRune", "PhoneticToRuneTranscriber" ], function(KryptonianRune, PhoneticToRuneTranscriber)
{
    "use strict";
    var PhoneticToKryptonianTranscriber =
    {
        phonemeToRuneMap: {},
        runeToPhonemeMap: {},
    };

    KryptonianRune.values().forEach(function(runeKey)
    {
        var rune = KryptonianRune.properties[runeKey];
        PhoneticToKryptonianTranscriber.phonemeToRuneMap[rune.phoneme] = [ runeKey ];
        PhoneticToKryptonianTranscriber.runeToPhonemeMap[runeKey] = [ rune.phoneme ];
    });

    PhoneticToKryptonianTranscriber.delegate = new PhoneticToRuneTranscriber(KryptonianRune,
            PhoneticToKryptonianTranscriber.phonemeToRuneMap, PhoneticToKryptonianTranscriber.runeToPhonemeMap);

    PhoneticToKryptonianTranscriber.runesToFontLetters = function(runeKeys)
    {
        return PhoneticToKryptonianTranscriber.delegate.runesToFontLetters(runeKeys);
    };

    PhoneticToKryptonianTranscriber.transcribeForward = function(phonemes)
    {
        return PhoneticToKryptonianTranscriber.delegate.transcribeForward(phonemes);
    };

    PhoneticToKryptonianTranscriber.transcribeReverse = function(runeKeys)
    {
        return PhoneticToKryptonianTranscriber.delegate.transcribeReverse(runeKeys);
    };

    if (Object.freeze)
    {
        Object.freeze(PhoneticToKryptonianTranscriber);
    };

    return PhoneticToKryptonianTranscriber;
});
