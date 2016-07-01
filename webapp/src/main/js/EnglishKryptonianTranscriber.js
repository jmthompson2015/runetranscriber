define([ "EnglishToPhoneticForKryptonianTranscriber", "PhoneticToKryptonianTranscriber" ], function(
        EnglishToPhoneticForKryptonianTranscriber, PhoneticToKryptonianTranscriber)
{
    var EnglishKryptonianTranscriber = function()
    {
        this.languageToPhoneticTranscriber = function()
        {
            return EnglishToPhoneticForKryptonianTranscriber;
        };

        this.phoneticToRuneTranscriber = function()
        {
            return PhoneticToKryptonianTranscriber;
        };
    };

    EnglishKryptonianTranscriber.prototype.phonemesToLanguageWords = function(phonemes)
    {
        return this.languageToPhoneticTranscriber().transcribeReverse(phonemes);
    };

    EnglishKryptonianTranscriber.prototype.runesToFontLetters = function(runeKeys)
    {
        return this.phoneticToRuneTranscriber().runesToFontLetters(runeKeys);
    };

    EnglishKryptonianTranscriber.prototype.runesToPhonemes = function(runeKeys)
    {
        return this.phoneticToRuneTranscriber().transcribeReverse(runeKeys);
    };

    EnglishKryptonianTranscriber.prototype.transcribeForward = function(languageString)
    {
        var languageWords = this.languageToPhoneticTranscriber().languageStringToWords(languageString);
        var phonemes = this.languageToPhoneticTranscriber().transcribeForward(languageWords);
        var runeKeys = this.phoneticToRuneTranscriber().transcribeForward(phonemes);

        return runeKeys;
    };

    EnglishKryptonianTranscriber.prototype.transcribeReverse = function(runeKeys)
    {
        var phonemes = this.phoneticToRuneTranscriber().transcribeReverse(runeKeys);
        var languageWords = this.languageToPhoneticTranscriber().transcribeReverse(phonemes);
        var languageString = this.languageToPhoneticTranscriber().languageWordsToString(languageWords);

        return languageString;
    };

    return EnglishKryptonianTranscriber;
});
