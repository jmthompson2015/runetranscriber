define([ "AurebeshRune", "AurebeshRuneFormat" ], function(AurebeshRune, AurebeshRuneFormat)
{
    "use strict";
    var EnglishAurebeshTranscriber = function()
    {
        var forwardMap = {};
        var reverseMap = {};

        this.getFormatter = function()
        {
            return AurebeshRuneFormat;
        }

        this.getForwardMap = function()
        {
            return forwardMap;
        }

        this.getMaxForwardKeyLength = function()
        {
            return 1;
        }

        this.getMaxReverseKeyLength = function()
        {
            return 1;
        }

        this.getReverseMap = function()
        {
            return reverseMap;
        }

        var values = AurebeshRune.values;
        var properties = AurebeshRune.properties;

        for (var i = 0; i < 26; i++)
        {
            var rune = values[i];
            var phoneme = properties[rune].phoneme;
            put(phoneme, rune);
        }

        // Numbers.
        put("0", AurebeshRune.ZERO);
        put("1", AurebeshRune.ONE);
        put("2", AurebeshRune.TWO);
        put("3", AurebeshRune.THREE);
        put("4", AurebeshRune.FOUR);
        put("5", AurebeshRune.FIVE);
        put("6", AurebeshRune.SIX);
        put("7", AurebeshRune.SEVEN);
        put("8", AurebeshRune.EIGHT);
        put("9", AurebeshRune.NINE);

        // Punctuation.
        put("-", AurebeshRune.HYPHEN);
        put("(", AurebeshRune.LEFT_PAREN);
        put(")", AurebeshRune.RIGHT_PAREN);
        put(" ", AurebeshRune.SPACE);
        put(",", AurebeshRune.COMMA);
        put(".", AurebeshRune.PERIOD);
        put("\n", AurebeshRune.NEWLINE);

        function put(fromSequence, toSequence)
        {
            forwardMap[fromSequence] = toSequence;
            reverseMap[toSequence] = fromSequence;
        }
    }

    EnglishAurebeshTranscriber.prototype.determineFontLetter = function(rune)
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
            var properties = AurebeshRune.properties;
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

    EnglishAurebeshTranscriber.prototype.determinePhoneme = function(rune)
    {
        var answer = "?";

        var map = this.getReverseMap();
        var letter = map[rune];

        if (letter)
        {
            answer = letter;
        }
        else
        {
            if (Array.isArray(rune))
            {
                answer = [];

                for (var i = 0; i < rune.length; i++)
                {
                    answer[answer.length] = this.determinePhoneme(rune[i]);
                }
            }
            else
            {
                var properties = AurebeshRune.properties;
                var phoneme = properties[rune].phoneme;

                answer = phoneme;
            }
        }

        return answer;
    }

    EnglishAurebeshTranscriber.prototype.runesToFontLetters = function(runes)
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

    EnglishAurebeshTranscriber.prototype.runesToPhonemes = function(runes)
    {
        var answer = [];

        for (var i = 0; i < runes.length; i++)
        {
            var rune = runes[i];
            answer[answer.length] = this.determinePhoneme(rune);
        }

        return answer;
    }

    /**
     * @param fromSequence
     *            From sequence.
     * 
     * @return a list of elements representing the input.
     */
    EnglishAurebeshTranscriber.prototype.transcribeForward = function(fromSequence)
    {
        var answer = [];

        var forwardMap = this.getForwardMap();
        var start = 0;
        var end = fromSequence.length;
        var maxKeyLength = this.getMaxForwardKeyLength();

        for (var i = start; i < end; i++)
        {
            for (var j = Math.min(end - i, maxKeyLength); j > 0; j--)
            {
                var word = fromSequence.slice(i, i + j).toLowerCase();

                if (forwardMap[word] != null)
                {
                    answer[answer.length] = forwardMap[word];
                    i += j - 1;
                    j = -1;
                }

                if (j == 1)
                {
                    LOGGER.info("Missing transcription for language letter '" + word + "'");
                }
            }
        }

        return answer;
    }

    /**
     * @param toSequence
     *            To sequence.
     * 
     * @return a list of elements representing the input.
     */
    EnglishAurebeshTranscriber.prototype.transcribeReverse = function(toSequence)
    {
        var answer = "";

        var reverseMap = this.getReverseMap();
        var formatter = this.getFormatter();
        var start = 0;
        var end = toSequence.length;
        var maxKeyLength = this.getMaxReverseKeyLength();

        for (var i = start; i < end; i++)
        {
            for (var j = Math.min(end - i, maxKeyLength); j > 0; j--)
            {
                var word = toSequence.slice(i, i + j);

                if (reverseMap[word] != null)
                {
                    answer += reverseMap[word];
                    i += j - 1;
                    j = -1;
                }

                if (j == 1)
                {
                    LOGGER.info("Missing transcription for rune '" + word + "'");
                }
            }
        }

        return answer;
    }

    return EnglishAurebeshTranscriber;
});
