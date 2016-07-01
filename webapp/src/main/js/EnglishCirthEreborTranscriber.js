/*
 * Provides a transcriber for <a href="http://ring-lord.tripod.com/cirth/angerthaserebor.htm">Cirth Angerthas Erebor
 * runes</a>.
 */
define([ "EnglishToPhoneticForCirthEreborTranscriber", "PhoneticToCirthEreborTranscriber" ], function(
        EnglishToPhoneticForCirthEreborTranscriber, PhoneticToCirthEreborTranscriber)
{
    "use strict";
    var EnglishCirthEreborTranscriber = function()
    {
        this.languageToPhoneticTranscriber = function()
        {
            return EnglishToPhoneticForCirthEreborTranscriber;
        };

        this.phoneticToRuneTranscriber = function()
        {
            return PhoneticToCirthEreborTranscriber;
        };
    };

    EnglishCirthEreborTranscriber.prototype.phonemesToLanguageWords = function(phonemes)
    {
        return this.languageToPhoneticTranscriber().transcribeReverse(phonemes);
    };

    EnglishCirthEreborTranscriber.prototype.runesToFontLetters = function(runeKeys)
    {
        return this.phoneticToRuneTranscriber().runesToFontLetters(runeKeys);
    };

    EnglishCirthEreborTranscriber.prototype.runesToPhonemes = function(runeKeys)
    {
        return this.phoneticToRuneTranscriber().transcribeReverse(runeKeys);
    };

    EnglishCirthEreborTranscriber.prototype.transcribeForward = function(languageString)
    {
        var languageWords = this.languageToPhoneticTranscriber().languageStringToWords(languageString);
        var phonemes = this.languageToPhoneticTranscriber().transcribeForward(languageWords);
        var runeKeys = this.phoneticToRuneTranscriber().transcribeForward(phonemes);

        return runeKeys;
    };

    EnglishCirthEreborTranscriber.prototype.transcribeReverse = function(runeKeys)
    {
        var phonemes = this.phoneticToRuneTranscriber().transcribeReverse(runeKeys);
        var languageWords = this.languageToPhoneticTranscriber().transcribeReverse(phonemes);
        var languageString = this.languageToPhoneticTranscriber().languageWordsToString(languageWords);

        return languageString;
    };

    return EnglishCirthEreborTranscriber;
});
