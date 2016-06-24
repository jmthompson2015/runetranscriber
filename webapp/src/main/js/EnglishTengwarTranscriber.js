define([ "EnglishToPhoneticForTengwarTranscriber", "PhoneticToEnglishForTengwarTranscriber",
        "PhoneticToTengwarTranscriber", "TengwaRune", "TengwarToPhoneticTranscriber" ], function(
        EnglishToPhoneticForTengwarTranscriber, PhoneticToEnglishForTengwarTranscriber, PhoneticToTengwarTranscriber,
        TengwaRune, TengwarToPhoneticTranscriber)
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

    EnglishTengwarTranscriber.prototype.determineFontLetter = function(rune)
    {
        if (!rune) { throw new Error("rune " + rune + " is undefined"); }

        var answer;

        if (Array.isArray(rune))
        {
            answer = [];

            for (var i = 0; i < rune.length; i++)
            {
                var rune2 = rune[i];
                answer[answer.length] = this.determineFontLetter(rune2);
            }
        }
        else
        {
            var properties = TengwaRune.properties;
            try
            {
                var fontLetter = properties[rune].fontLetter;

                if (fontLetter)
                {
                    answer = fontLetter;
                }
            }
            catch (e)
            {
                LOGGER.error("Unknown rune " + rune);
            }
        }

        return answer;
    }

    EnglishTengwarTranscriber.prototype.runesToFontLetters = function(runes)
    {
        var answer = [];

        for (var i = 0; i < runes.length; i++)
        {
            var rune = runes[i];

            if (!rune) { throw new Error("rune is undefined from " + i + " " + runes); }

            if (rune !== "newline")
            {
                answer[answer.length] = this.determineFontLetter(rune);
            }
        }

        return answer;
    }

    EnglishTengwarTranscriber.prototype.runesToLanguageWords = function(runes)
    {
        var phonemes = this.runesToPhonemes(runes);
        var phonemesToLanguageTranscriber = new PhoneticToEnglishForTengwarTranscriber();
        var languageWords = phonemesToLanguageTranscriber.phonemesToLanguageWords(phonemes);

        return languageWords;
    }

    EnglishTengwarTranscriber.prototype.runesToPhonemes = function(runes)
    {
        var runesToPhonemesTranscriber = new TengwarToPhoneticTranscriber();
        var phonemes = runesToPhonemesTranscriber.runesToPhonemes(runes);

        return phonemes;
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
