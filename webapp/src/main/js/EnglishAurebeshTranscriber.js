define([ "EnglishToPhoneticForAurebeshTranscriber", "PhoneticToAurebeshTranscriber" ], function(
        EnglishToPhoneticForAurebeshTranscriber, PhoneticToAurebeshTranscriber)
{
    "use strict";
    var EnglishAurebeshTranscriber = function()
    {
        this.languageToPhoneticTranscriber = function()
        {
            return EnglishToPhoneticForAurebeshTranscriber;
        };

        this.phoneticToRuneTranscriber = function()
        {
            return PhoneticToAurebeshTranscriber;
        };
    };

    EnglishAurebeshTranscriber.prototype.phonemesToLanguageWords = function(phonemes)
    {
        return this.languageToPhoneticTranscriber().transcribeReverse(phonemes);
    };

    EnglishAurebeshTranscriber.prototype.runesToFontLetters = function(runeKeys)
    {
        return this.phoneticToRuneTranscriber().runesToFontLetters(runeKeys);
    };

    EnglishAurebeshTranscriber.prototype.runesToPhonemes = function(runeKeys)
    {
        return this.phoneticToRuneTranscriber().transcribeReverse(runeKeys);
    };

    EnglishAurebeshTranscriber.prototype.transcribeForward = function(languageString)
    {
        var languageWords = this.languageToPhoneticTranscriber().languageStringToWords(languageString);
        var phonemes = this.languageToPhoneticTranscriber().transcribeForward(languageWords);
        var runeKeys = this.phoneticToRuneTranscriber().transcribeForward(phonemes);

        return runeKeys;
    };

    EnglishAurebeshTranscriber.prototype.transcribeReverse = function(runeKeys)
    {
        var phonemes = this.phoneticToRuneTranscriber().transcribeReverse(runeKeys);
        var languageWords = this.languageToPhoneticTranscriber().transcribeReverse(phonemes);
        var languageString = this.languageToPhoneticTranscriber().languageWordsToString(languageWords);

        return languageString;
    };

    return EnglishAurebeshTranscriber;
});
