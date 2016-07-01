define([ "AngloSaxonRune", "PhoneticToRuneTranscriber", "util/InputValidator" ], function(AngloSaxonRune,
        PhoneticToRuneTranscriber, InputValidator)
{
    "use strict";
    var PhoneticToAngloSaxonTranscriber =
    {
        phonemeToRuneMap: {},
        runeToPhonemeMap: {},
    };

    function put(fromSequence, toSequence)
    {
        PhoneticToAngloSaxonTranscriber.phonemeToRuneMap[fromSequence.join("")] = toSequence;
        PhoneticToAngloSaxonTranscriber.runeToPhonemeMap[toSequence.join("")] = fromSequence;
    }

    AngloSaxonRune.values.forEach(function(runeKey)
    {
        var rune = AngloSaxonRune.properties[runeKey];
        put([ rune.phoneme ], [ runeKey ]);
    });

    put([ "f", "i", "v", "e" ], [ AngloSaxonRune.FEOH, AngloSaxonRune.IS, AngloSaxonRune.UR, AngloSaxonRune.EH ]);
    put([ "w", "h", "e", "n" ], [ AngloSaxonRune.HAEGL, AngloSaxonRune.WYNN, AngloSaxonRune.EH, AngloSaxonRune.NYD ]);

    PhoneticToAngloSaxonTranscriber.delegate = new PhoneticToRuneTranscriber(AngloSaxonRune,
            PhoneticToAngloSaxonTranscriber.phonemeToRuneMap, PhoneticToAngloSaxonTranscriber.runeToPhonemeMap);

    PhoneticToAngloSaxonTranscriber.runesToFontLetters = function(runeKeys)
    {
        return PhoneticToAngloSaxonTranscriber.delegate.runesToFontLetters(runeKeys);
    };

    PhoneticToAngloSaxonTranscriber.transcribeForward = function(phonemes)
    {
        return PhoneticToAngloSaxonTranscriber.delegate.transcribeForward(phonemes);
    };

    PhoneticToAngloSaxonTranscriber.transcribeReverse = function(runeKeys)
    {
        return PhoneticToAngloSaxonTranscriber.delegate.transcribeReverse(runeKeys);
    };

    if (Object.freeze)
    {
        Object.freeze(PhoneticToAngloSaxonTranscriber);
    };

    return PhoneticToAngloSaxonTranscriber;
});
