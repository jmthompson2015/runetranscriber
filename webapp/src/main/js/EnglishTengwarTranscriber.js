define([ "EnglishToPhoneticForTengwarTranscriber", "PhoneticToTengwarTranscriber", "TengwaRune",
        "TengwarToPhoneticTranscriber" ], function(EnglishToPhoneticForTengwarTranscriber,
        PhoneticToTengwarTranscriber, TengwaRune, TengwarToPhoneticTranscriber)
{
    "use strict";
    var EnglishTengwarTranscriber = function()
    {
        this.getFormatter = function()
        {
            return TengwaRuneFormat;
        }

        this.getForwardMap = function()
        {
            return {};
        }

        this.getMaxForwardKeyLength = function()
        {
            return 0;
        }

        this.getMaxReverseKeyLength = function()
        {
            return 0;
        }

        this.getReverseMap = function()
        {
            return {};
        }
    }

    /**
     * @param fromSequence
     *            From sequence.
     * 
     * @return a list of elements representing the input.
     */
    EnglishTengwarTranscriber.prototype.transcribeForward = function(fromSequence)
    {
        var languageToPhonemesTranscriber = new EnglishToPhoneticForTengwarTranscriber();
        var languageWords = languageToPhonemesTranscriber.languageStringToWords(fromSequence);
        var phonemes = languageToPhonemesTranscriber.languageWordsToPhonemes(languageWords);

        var phonemesToRunesTranscriber = new PhoneticToTengwarTranscriber();
        var runes = phonemesToRunesTranscriber.phonemesToRunes(phonemes);

        return runes;
    }

    /**
     * @param toSequence
     *            To sequence.
     * 
     * @return a list of elements representing the input.
     */
    EnglishTengwarTranscriber.prototype.transcribeReverse = function(toSequence)
    {
        var runesToPhonemesTranscriber = new TengwarToPhoneticTranscriber();
        var phonemes = runesToPhonemesTranscriber.runesToPhonemes(toSequence);

        var phonemesToLanguageTranscriber = new PhoneticToEnglishForTengwarTranscriber();
        var languageWords = phonemesToLanguageTranscriber.phonemesToLanguageWords(phonemes);
        var languageString = phonemesToLanguageTranscriber.languageWordsToString(languageWords);

        return languageString;
    }

    return EnglishTengwarTranscriber;
});
