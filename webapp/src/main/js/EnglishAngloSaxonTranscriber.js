/*
 * Provides a transcriber for <a href="http://en.wikipedia.org/wiki/Anglo-Saxon_runes">anglo saxon runes</a>.
 */
define([ "AngloSaxonRune", "AngloSaxonRuneFormat" ], function(AngloSaxonRune, AngloSaxonRuneFormat)
{
    "use strict";
    var EnglishAngloSaxonTranscriber = function()
    {
        var forwardMap = {};
        var reverseMap = {};

        // Consonants.
        put("b", [ AngloSaxonRune.BEORC ]);
        put("c", [ AngloSaxonRune.CEN ]);
        put("d", [ AngloSaxonRune.DAEG ]);
        put("f", [ AngloSaxonRune.FEOH ]);
        put("g", [ AngloSaxonRune.GYFU ]);
        put("h", [ AngloSaxonRune.HAEGL ]);
        put("k", [ AngloSaxonRune.CEN ]);
        put("l", [ AngloSaxonRune.LAGU ]);
        put("m", [ AngloSaxonRune.MANN ]);
        put("n", [ AngloSaxonRune.NYD ]);
        put("ng", [ AngloSaxonRune.ING ]);
        put("p", [ AngloSaxonRune.PEORD ]);
        put("r", [ AngloSaxonRune.RAD ]);
        put("s", [ AngloSaxonRune.SIGEL ]);
        put("t", [ AngloSaxonRune.TIW ]);
        put("th", [ AngloSaxonRune.THORN ]);
        put("w", [ AngloSaxonRune.WYNN ]);
        put("y", [ AngloSaxonRune.YR ]);

        // Vowels.
        put("a", [ AngloSaxonRune.AESC ]);
        put("e", [ AngloSaxonRune.EH ]);
        put("i", [ AngloSaxonRune.IS ]);
        put("o", [ AngloSaxonRune.OS ]);
        put("u", [ AngloSaxonRune.UR ]);
        put("ea", [ AngloSaxonRune.EAR ]);
        put("ee", [ AngloSaxonRune.EOEL ]);
        put("eo", [ AngloSaxonRune.EOH ]);

        // Punctuation.
        put(" ", [ AngloSaxonRune.SPACE ]);
        put(", ", [ AngloSaxonRune.COMMA ]);
        put(". ", [ AngloSaxonRune.PERIOD ]);
        put("\n", [ AngloSaxonRune.NEWLINE ]);

        put("when", [ AngloSaxonRune.HAEGL, AngloSaxonRune.WYNN, AngloSaxonRune.EH, AngloSaxonRune.NYD ]);
        put("abreast", [ AngloSaxonRune.AESC, AngloSaxonRune.BEORC, AngloSaxonRune.RAD, AngloSaxonRune.EH,
                AngloSaxonRune.AESC, AngloSaxonRune.SIGEL, AngloSaxonRune.TIW ]);
        put("last", [ AngloSaxonRune.LAGU, AngloSaxonRune.AC, AngloSaxonRune.SIGEL, AngloSaxonRune.TIW ]);

        putForward("j", [ AngloSaxonRune.IS ]);
        putForward("v", [ AngloSaxonRune.UR ]);
        putForward("'s", [ AngloSaxonRune.SIGEL ]);
        putForward("oo", [ AngloSaxonRune.OS ]);
        putForward(".", [ AngloSaxonRune.PERIOD ]);

        putReverse("ck", [ AngloSaxonRune.CEN, AngloSaxonRune.CEN ]);
        putReverse("record", [ AngloSaxonRune.RAD, AngloSaxonRune.EH, AngloSaxonRune.CEN, AngloSaxonRune.OS,
                AngloSaxonRune.RAD, AngloSaxonRune.DAEG ]);
        putReverse("journey", [ AngloSaxonRune.IS, AngloSaxonRune.OS, AngloSaxonRune.UR, AngloSaxonRune.RAD,
                AngloSaxonRune.NYD, AngloSaxonRune.EH, AngloSaxonRune.YR ]);
        putReverse("compile", [ AngloSaxonRune.CEN, AngloSaxonRune.OS, AngloSaxonRune.MANN, AngloSaxonRune.PEORD,
                AngloSaxonRune.IS, AngloSaxonRune.LAGU, AngloSaxonRune.EH ]);
        putReverse("j r r", [ AngloSaxonRune.IS, AngloSaxonRune.SPACE, AngloSaxonRune.RAD, AngloSaxonRune.SPACE,
                AngloSaxonRune.RAD ]);
        putReverse("five", [ AngloSaxonRune.FEOH, AngloSaxonRune.IS, AngloSaxonRune.UR, AngloSaxonRune.EH ]);
        putReverse("door", [ AngloSaxonRune.DAEG, AngloSaxonRune.OS, AngloSaxonRune.RAD ]);

        var maxForwardKeyLength = determineMaxForwardKeyLength();
        var maxReverseKeyLength = determineMaxReverseKeyLength();

        this.getFormatter = function()
        {
            return AngloSaxonRuneFormat;
        }

        this.getForwardMap = function()
        {
            return forwardMap;
        }

        this.getMaxForwardKeyLength = function()
        {
            return maxForwardKeyLength;
        }

        this.getMaxReverseKeyLength = function()
        {
            return maxReverseKeyLength;
        }

        this.getReverseMap = function()
        {
            return reverseMap;
        }

        function determineMaxForwardKeyLength()
        {
            var answer = 0;

            for ( var key in forwardMap)
            {
                if (key.length > answer)
                {
                    answer = key.length;
                }
            }

            // LOGGER.debug("maxForwardKeyLength = "+answer);

            return answer;
        }

        function determineMaxReverseKeyLength()
        {
            var answer = 0;

            for ( var key in reverseMap)
            {
                var keyLength = (key.match(/-/g) || []).length + 1;
                // LOGGER.trace("key = " + key + " keyLength = " + keyLength);

                if (keyLength > answer)
                {
                    answer = keyLength;
                }
            }

            // LOGGER.debug("maxReverseKeyLength = "+answer);

            return answer;
        }

        // function put(fromSequence, toSequence)
        // {
        // forwardMap[fromSequence] = toSequence;
        // reverseMap[AngloSaxonRuneFormat.format(toSequence)] = fromSequence;
        // }

        function put(fromSequence, toSequence)
        {
            putForward(fromSequence, toSequence);
            putReverse(fromSequence, toSequence);
        }

        function putForward(fromSequence, toSequence)
        {
            forwardMap[fromSequence] = toSequence;
        }

        function putReverse(fromSequence, toSequence)
        {
            var key = AngloSaxonRuneFormat.format(toSequence);
            reverseMap[key] = fromSequence;
        }
    }

    EnglishAngloSaxonTranscriber.prototype.determineFontLetter = function(rune)
    {
        if (!rune) { throw new Error("rune " + rune + " is undefined"); }

        var answer;

        if (Array.isArray(rune))
        {
            answer = [];

            for (var i = 0; i < rune.length; i++)
            {
                var rune2 = rune[i];
                answer.push(this.determineFontLetter(rune2));
            }
        }
        else
        {
            var properties = AngloSaxonRune.properties;
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

    EnglishAngloSaxonTranscriber.prototype.determineLanguageLetter = function(phoneme)
    {
        var answer;

        if (Array.isArray(phoneme))
        {
            answer = "";

            for (var i = 0; i < phoneme.length; i++)
            {
                answer += this.determineLanguageLetter(phoneme[i]);
            }
        }
        else if (phoneme === "ae")
        {
            answer = "a";
        }
        else
        {
            answer = phoneme;
        }

        return answer;
    }

    EnglishAngloSaxonTranscriber.prototype.determinePhoneme = function(rune)
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
                    answer.push(this.determinePhoneme(rune[i]));
                }
            }
            else
            {
                var properties = AngloSaxonRune.properties;
                if (!properties[rune]) { throw "No properties found for rune: " + rune; }
                var phoneme = properties[rune].phoneme;

                answer = phoneme;
            }
        }

        return answer;
    }

    EnglishAngloSaxonTranscriber.prototype.phonemesToLanguageWords = function(phonemes)
    {
        var answer = [];

        var word = "";

        for (var i = 0; i < phonemes.length; i++)
        {
            var phoneme = phonemes[i];

            if ([ " ", ",", ".", "\n" ].includes(phoneme))
            {
                answer.push(word);
                answer.push(phoneme);
                word = "";
            }
            else if (i === phonemes.length - 1)
            {
                word += this.determineLanguageLetter(phoneme);
                answer.push(word);
            }
            else
            {
                word += this.determineLanguageLetter(phoneme);
            }
        }

        return answer;
    }

    EnglishAngloSaxonTranscriber.prototype.runesToFontLetters = function(runes)
    {
        var answer = [];

        for (var i = 0; i < runes.length; i++)
        {
            var rune = runes[i];

            if (!rune) { throw new Error("rune is undefined from " + i + " " + runes); }

            // if (rune !== "newline")
            {
                answer.push(this.determineFontLetter(rune));
            }
        }

        return answer;
    }

    EnglishAngloSaxonTranscriber.prototype.runesToPhonemes = function(runes)
    {
        var answer = [];

        for (var i = 0; i < runes.length; i++)
        {
            var rune = runes[i];
            answer.push(this.determinePhoneme(rune));
        }

        return answer;
    }

    /**
     * @param fromSequence
     *            From sequence.
     * 
     * @return a list of elements representing the input.
     */
    EnglishAngloSaxonTranscriber.prototype.transcribeForward = function(fromSequence)
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
                // LOGGER.trace(i + "," + j + " word = '" + word + "'");

                if (forwardMap[word] != null)
                {
                    // addAll
                    Array.prototype.push.apply(answer, forwardMap[word]);
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
    EnglishAngloSaxonTranscriber.prototype.transcribeReverse = function(toSequence)
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
                var word = formatter.format(toSequence.slice(i, i + j));
                // LOGGER.trace(i + "," + j + " word = '" + word + "'");

                if (reverseMap[word] != null)
                {
                    // addAll
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

        return answer.trim();
    }

    return EnglishAngloSaxonTranscriber;
});
