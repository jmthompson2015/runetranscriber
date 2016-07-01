/*
 * Provides a transcriber for <a href="http://en.wikipedia.org/wiki/Anglo-Saxon_runes">anglo saxon runes</a>.
 */
define([ "EnglishToPhoneticForAngloSaxonTranscriber", "PhoneticToAngloSaxonTranscriber" ], function(
        EnglishToPhoneticForAngloSaxonTranscriber, PhoneticToAngloSaxonTranscriber)
{
    "use strict";
    var EnglishAngloSaxonTranscriber = function()
    {
        this.languageToPhoneticTranscriber = function()
        {
            return EnglishToPhoneticForAngloSaxonTranscriber;
        };

        this.phoneticToRuneTranscriber = function()
        {
            return PhoneticToAngloSaxonTranscriber;
        };
    };

    EnglishAngloSaxonTranscriber.prototype.phonemesToLanguageWords = function(phonemes)
    {
        return this.languageToPhoneticTranscriber().transcribeReverse(phonemes);
    };

    EnglishAngloSaxonTranscriber.prototype.runesToFontLetters = function(runeKeys)
    {
        return this.phoneticToRuneTranscriber().runesToFontLetters(runeKeys);
    };

    EnglishAngloSaxonTranscriber.prototype.runesToPhonemes = function(runeKeys)
    {
        return this.phoneticToRuneTranscriber().transcribeReverse(runeKeys);
    };

    EnglishAngloSaxonTranscriber.prototype.transcribeForward = function(languageString)
    {
        var languageWords = this.languageToPhoneticTranscriber().languageStringToWords(languageString);
        var phonemes = this.languageToPhoneticTranscriber().transcribeForward(languageWords);
        var runeKeys = this.phoneticToRuneTranscriber().transcribeForward(phonemes);

        return runeKeys;
    };

    EnglishAngloSaxonTranscriber.prototype.transcribeReverse = function(runeKeys)
    {
        var phonemes = this.phoneticToRuneTranscriber().transcribeReverse(runeKeys);
        var languageWords = this.languageToPhoneticTranscriber().transcribeReverse(phonemes);
        var languageString = this.languageToPhoneticTranscriber().languageWordsToString(languageWords);

        return languageString;
    };

    return EnglishAngloSaxonTranscriber;
});
