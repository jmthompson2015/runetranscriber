var EnglishTengwarTranscriber = function()
{
    var forwardMap = {};
    var reverseMap = {};

    // Consonants.
    put("b", [ TengwaRune.UMBAR ]);
    put("c", [ TengwaRune.SILME_NUQUERNA ]);
    put("ch", [ TengwaRune.CALMA ]);
    put("d", [ TengwaRune.ANDO ]);
    put("f", [ TengwaRune.FORMEN ]);
    put("g", [ TengwaRune.ANGA ]);
    put("h", [ TengwaRune.HYARMEN ]);
    put("k", [ TengwaRune.QUESSE ]);
    put("l", [ TengwaRune.LAMBE ]);
    put("m", [ TengwaRune.MALTA ]);
    put("n", [ TengwaRune.NUMEN ]);
    put("ng", [ TengwaRune.NGWALME ]);
    put("p", [ TengwaRune.PARMA ]);
    put("r", [ TengwaRune.ROMEN ]);
    put("s", [ TengwaRune.SILME ]);
    put("sh", [ TengwaRune.HARMA ]);
    put("t", [ TengwaRune.TINCO ]);
    put("th", [ TengwaRune.THULE ])
    put("v", [ TengwaRune.AMPA ]);
    put("w", [ TengwaRune.VALA ]);
    put("wh", [ TengwaRune.HWESTA ]);
    put("z", [ TengwaRune.ESSE_NUQUERNA ]);

    putReverse("g", [ TengwaRune.UNGWE ]);
    putReverse("r", [ TengwaRune.ORE ]);
    putReverse("s", [ TengwaRune.ESSE ]);
    putReverse("th", [ TengwaRune.ANTO ]);
    putReverse("wh", [ TengwaRune.HWESTA_SINDARINWA ]);

    // Vowels.
    put("a", [ TengwaRune.THREE_DOTS ]);
    put("e", [ TengwaRune.DOT ]);
    put("i", [ TengwaRune.ACUTE ]);
    put("o", [ TengwaRune.LEFT_CURL ]);
    put("u", [ TengwaRune.TOP_CURL ]);
    put("y", [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ]);

    putReverse("e", [ TengwaRune.UNDER_DOT ]);
    putReverse("e", [ TengwaRune.SHORT_CARRIER ]);
    putReverse("e", [ TengwaRune.DOT, TengwaRune.LONG_CARRIER ]);
    putReverse("ea", [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER,
            TengwaRune.THREE_UNDER_DOTS ]);
    putReverse("i", [ TengwaRune.YANTA ]);
    putReverse("i", [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ]);
    putReverse("o", [ TengwaRune.LEFT_UNDER_CURL ]);
    putReverse("u", [ TengwaRune.TOP_CURL, TengwaRune.SHORT_CARRIER ]);
    putReverse("u", [ TengwaRune.URE ]);
    putReverse("y", [ TengwaRune.ANNA ]);

    // Punctuation.
    put(" ", [ TengwaRune.SPACE ]);
    put(",", [ TengwaRune.COMMA ]);
    put(".", [ TengwaRune.PERIOD ]);
    put("\n", [ TengwaRune.NEWLINE ]);

    putForward("-", [ TengwaRune.SPACE ]);

    // Abbreviations.
    put("of the", [ TengwaRune.OF_THE ]);
    put("the", [ TengwaRune.THE ]);
    put("of", [ TengwaRune.OF ]);
    put("and", [ TengwaRune.LONG_CARRIER, TengwaRune.ANDO ]);

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

    // answer = this.postProcessReverse(answer);

    return answer;
}

EnglishTengwarTranscriber.prototype.postProcessReverse = function(toSequence)
{
    // LOGGER.debug("toSequence = "+toSequence);

    var answer = toSequence;

    // The Lord Of The Rings
    // Christopher reversed 'e' and 'i' from J.R.R.?
    answer = answer.replace("wistmarch", "westmarch");
    answer = answer.replace("ghon", "john");
    answer = answer.replace("riuil", "reuel");
    answer = answer.replace("tolkein", "tolkien");
    answer = answer.replace("hiren", "herein");
    answer = answer.replace(" es ", " is ");
    answer = answer.replace("sit", "set");
    answer = answer.replace("hestory", "history");
    answer = answer.replace("reng", "ring");
    answer = answer.replace("riturn", "return");
    answer = answer.replace("keng", "king");
    answer = answer.replace("az", "as");
    answer = answer.replace("siin", "seen");
    answer = answer.replace("hobets", "hobbits");

    // The Silmarillion
    answer = answer.replace("midle erth", "middle-earth");
    answer = answer.replace("wor", "war");
    answer = answer.replace("rekovery", "recovery");
    answer = answer.replace("apended", "appended");
    answer = answer.replace("downfal", "downfall");
    answer = answer.replace("powr", "power");
    answer = answer.replace("kome", "come");

    // The Return Of The Shadow
    answer = answer.replace(".", ". ");
    answer = answer.replace("gourney", "journey");
    answer = answer.replace("hobit", "hobbit");
    answer = answer.replace("whi ", "who ");
    answer = answer.replace(",", ", ");

    return answer.trim();
}
