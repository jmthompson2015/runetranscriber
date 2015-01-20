var EnglishTengwarTranscriber = function()
{
    var forwardMap = {};
    var reverseMap = {};

    // Consonants.
    put("ch", [ TengwaRune.CALMA ]);

    put("b", [ TengwaRune.UMBAR ]);
    put("d", [ TengwaRune.ANDO ]);
    put("f", [ TengwaRune.FORMEN ]);
    put("h", [ TengwaRune.HYARMEN ]);
    put("k", [ TengwaRune.QUESSE ]);
    put("l", [ TengwaRune.LAMBE ]);
    put("m", [ TengwaRune.MALTA ]);
    put("n", [ TengwaRune.NUMEN ]);
    put("ng", [ TengwaRune.NGWALME, ]);
    put("r", [ TengwaRune.ROMEN ]);
    put("s", [ TengwaRune.ESSE ]);
    put("s", [ TengwaRune.SILME ]);
    put("t", [ TengwaRune.TINCO ]);
    put("w", [ TengwaRune.VALA ]);

    // Vowels.
    put("a", [ TengwaRune.THREE_DOTS ]);
    put("e", [ TengwaRune.ACUTE ]);
    put("i", [ TengwaRune.DOT ]);
    put("o", [ TengwaRune.LEFT_CURL ]);
    put("y", [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ]);

    // Punctuation.
    put(" ", [ TengwaRune.SPACE ]);
    put(".", [ TengwaRune.PERIOD ]);
    put("\n", [ TengwaRune.NEWLINE ]);

    put("of the ", [ TengwaRune.OF_THE, TengwaRune.SPACE, ]);
    put("march ", [ TengwaRune.MALTA, TengwaRune.THREE_DOTS, TengwaRune.ORE,
            TengwaRune.CALMA, TengwaRune.SPACE, ]);
    put("the ", [ TengwaRune.THE, TengwaRune.SPACE, ]);
    put("of ", [ TengwaRune.OF, TengwaRune.SPACE, ]);
    put("ur", [ TengwaRune.TOP_CURL, TengwaRune.ORE, ]);
    put("ee", [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.ACUTE,
            TengwaRune.SHORT_CARRIER, ]);
    put("by ", [ TengwaRune.UMBAR, TengwaRune.CHEVRON, TengwaRune.LONG_CARRIER,
            TengwaRune.SPACE, ]);
    put("john ", [ TengwaRune.ANGA, TengwaRune.HYARMEN, TengwaRune.LEFT_CURL,
            TengwaRune.NUMEN, TengwaRune.SPACE, ]);
    put("reuel ", [ TengwaRune.ROMEN, TengwaRune.ACUTE,
            TengwaRune.SHORT_CARRIER, TengwaRune.RIGHT_CURL,
            TengwaRune.SHORT_CARRIER, TengwaRune.ACUTE, TengwaRune.LAMBE,
            TengwaRune.SPACE ]);
    put("ien.", [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER, TengwaRune.ACUTE,
            TengwaRune.NUMEN, TengwaRune.PERIOD, ]);
    put("herein ", [ TengwaRune.HYARMEN, TengwaRune.ACUTE, TengwaRune.ROMEN,
            TengwaRune.DOT, TengwaRune.NUMEN, TengwaRune.SPACE, ]);
    put("is ", [ TengwaRune.DOT, TengwaRune.ESSE, TengwaRune.SPACE, ]);
    put("and ", [ TengwaRune.UNDER_DOT, TengwaRune.ANDO, TengwaRune.SPACE, ]);
    put("as ", [ TengwaRune.THREE_DOTS, TengwaRune.ESSE_NUQUERNA,
            TengwaRune.SPACE, ]);
    put("forth", [ TengwaRune.FORMEN, TengwaRune.LEFT_CURL, TengwaRune.ORE,
            TengwaRune.THULE, ]);
    put("war", [ TengwaRune.VALA, TengwaRune.THREE_DOTS, TengwaRune.ORE, ]);
    put("hobbit", [ TengwaRune.HYARMEN, TengwaRune.LEFT_CURL, TengwaRune.UMBAR,
            TengwaRune.DOT, TengwaRune.TINCO ]);
    put("tengwar", [ TengwaRune.TINCO, TengwaRune.ACUTE, TengwaRune.UNGWE,
            TengwaRune.THREE_DOTS, TengwaRune.ORE, ]);

    putReverse("r", [ TengwaRune.ORE ]);

    var maxForwardKeyLength = determineMaxForwardKeyLength();
    var maxReverseKeyLength = determineMaxReverseKeyLength();

    this.getFormatter = function()
    {
        return TengwaRuneFormat;
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

        return answer;
    }

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
        var key = TengwaRuneFormat.format(toSequence);
        reverseMap[key] = fromSequence;
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
EnglishTengwarTranscriber.prototype.transcribeReverse = function(toSequence)
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
