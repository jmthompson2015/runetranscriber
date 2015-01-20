/*
 * Provides a transcriber for <a href="http://ring-lord.tripod.com/cirth/angerthaserebor.htm">Cirth Angerthas Erebor
 * runes</a>.
 */
var EnglishCirthEreborTranscriber = function()
{
    var forwardMap = {};
    var reverseMap = {};

    // Consonants.
    put("b", [ CerthRune.C2 ]);
    put("d", [ CerthRune.C9 ]);
    put("f", [ CerthRune.C3 ]);
    put("k", [ CerthRune.C18 ]);
    put("l", [ CerthRune.C31 ]);
    put("m", [ CerthRune.C6 ]);
    put("n", [ CerthRune.C53 ]);
    put("ng", [ CerthRune.C36 ]);
    put("r", [ CerthRune.C12 ]);
    put("s", [ CerthRune.C34 ]);
    put("t", [ CerthRune.C8 ]);
    put("th", [ CerthRune.C11 ]);
    put("v", [ CerthRune.C4 ]);

    // Vowels.
    put("a", [ CerthRune.C48 ]);
    put("e", [ CerthRune.C55 ]);
    put("i", [ CerthRune.C39 ]);
    put("o", [ CerthRune.C50 ]);
    put("oo", [ CerthRune.C51 ]);

    // Punctuation.
    put(" ", [ CerthRune.SPACE ]);

    put("red", [ CerthRune.C12, CerthRune.C46, CerthRune.C9 ]);
    put("son", [ CerthRune.C34, CerthRune.C56, CerthRune.C53 ]);
    put("und", [ CerthRune.C42, CerthRune.C33 ]);
    put("of", [ CerthRune.C50, CerthRune.C4 ]);

    var maxForwardKeyLength = determineMaxForwardKeyLength();
    var maxReverseKeyLength = determineMaxReverseKeyLength();

    this.getFormatter = function()
    {
        return CerthRuneFormat;
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

    function put(fromSequence, toSequence)
    {
        forwardMap[fromSequence] = toSequence;
        reverseMap[CerthRuneFormat.format(toSequence)] = fromSequence;
    }
}

/**
 * @param fromSequence
 *            From sequence.
 * 
 * @return a list of elements representing the input.
 */
EnglishCirthEreborTranscriber.prototype.transcribeForward = function(
        fromSequence)
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
            var word = fromSequence.slice(i, i + j);
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
                LOGGER.info("Missing transcription for language letter '"
                        + word + "'");
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
EnglishCirthEreborTranscriber.prototype.transcribeReverse = function(toSequence)
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

    return answer;
}
