var EnglishTengwarTranscriber2 = function()
{
    var runeToLanguageMap = {};

    // Runes.
    runeToLanguageMap[TengwaRune.THREE_DOTS] = "a";
    runeToLanguageMap[TengwaRune.THREE_UNDER_DOTS] = "a";
    runeToLanguageMap[TengwaRune.UMBAR] = "b";
    runeToLanguageMap[TengwaRune.SILME_NUQUERNA] = "c";
    runeToLanguageMap[TengwaRune.CALMA] = "ch";
    runeToLanguageMap[TengwaRune.ANDO] = "d";
    runeToLanguageMap[TengwaRune.DOT] = "e";
    runeToLanguageMap[TengwaRune.UNDER_DOT] = "e";
    runeToLanguageMap[TengwaRune.FORMEN] = "f";
    runeToLanguageMap[TengwaRune.UNGWE] = "g";
    runeToLanguageMap[TengwaRune.HYARMEN] = "h";
    runeToLanguageMap[TengwaRune.ACUTE] = "i";
    runeToLanguageMap[TengwaRune.YANTA] = "i";
    runeToLanguageMap[TengwaRune.ANGA] = "j";
    runeToLanguageMap[TengwaRune.QUESSE] = "k";
    runeToLanguageMap[TengwaRune.LAMBE] = "l";
    runeToLanguageMap[TengwaRune.MALTA] = "m";
    runeToLanguageMap[TengwaRune.NUMEN] = "n";
    runeToLanguageMap[TengwaRune.NGWALME] = "ng";
    runeToLanguageMap[TengwaRune.LEFT_CURL] = "o";
    runeToLanguageMap[TengwaRune.LEFT_UNDER_CURL] = "o";
    runeToLanguageMap[TengwaRune.OF] = "of";
    runeToLanguageMap[TengwaRune.OF_THE] = "of the";
    runeToLanguageMap[TengwaRune.PARMA] = "p";
    runeToLanguageMap[TengwaRune.ORE] = "r";
    runeToLanguageMap[TengwaRune.ROMEN] = "r";
    runeToLanguageMap[TengwaRune.SILME] = "s";
    runeToLanguageMap[TengwaRune.HARMA] = "sh";
    runeToLanguageMap[TengwaRune.TINCO] = "t";
    runeToLanguageMap[TengwaRune.ANTO] = "th";
    runeToLanguageMap[TengwaRune.THULE] = "th";
    runeToLanguageMap[TengwaRune.THE] = "the";
    runeToLanguageMap[TengwaRune.RIGHT_CURL] = "u";
    runeToLanguageMap[TengwaRune.URE] = "u";
    runeToLanguageMap[TengwaRune.TOP_CURL] = "u";
    runeToLanguageMap[TengwaRune.AMPA] = "v";
    runeToLanguageMap[TengwaRune.VALA] = "w";
    runeToLanguageMap[TengwaRune.HWESTA_SINDARINWA] = "wh";
    runeToLanguageMap[TengwaRune.ANNA] = "y";
    runeToLanguageMap[TengwaRune.ESSE] = "z";
    runeToLanguageMap[TengwaRune.ESSE_NUQUERNA] = "z";

    // runeToLanguageMap[TengwaRune.HWESTA] = "?";
    // runeToLanguageMap[TengwaRune.ANCA] = "?";
    // runeToLanguageMap[TengwaRune.UNQUE] = "?";
    // runeToLanguageMap[TengwaRune.NGOLDO] = "?";
    // runeToLanguageMap[TengwaRune.VILYA] = "?";
    // runeToLanguageMap[TengwaRune.ARDA] = "?";
    // runeToLanguageMap[TengwaRune.ALDA] = "?";
    // runeToLanguageMap[TengwaRune.ESSE_NUQUERNA] = "?";
    // runeToLanguageMap[TengwaRune.CIRCUMFLEX] = "?";
    // runeToLanguageMap[TengwaRune.CHEVRON] = "?";
    // runeToLanguageMap[TengwaRune.BAR] = "?";
    // runeToLanguageMap[TengwaRune.UNDER_BAR] = "?";
    // runeToLanguageMap[TengwaRune.SHORT_CARRIER] = "?";
    // runeToLanguageMap[TengwaRune.LONG_CARRIER] = "?";

    // Punctuation.
    runeToLanguageMap[TengwaRune.HYPHEN] = "-";
    runeToLanguageMap[TengwaRune.SPACE] = " ";
    runeToLanguageMap[TengwaRune.COMMA] = ",";
    runeToLanguageMap[TengwaRune.PERIOD] = ".";
    runeToLanguageMap[TengwaRune.NEWLINE] = "\n";

    // Combinations.
    runeToLanguageMap[[ TengwaRune.THREE_DOTS, TengwaRune.SHORT_CARRIER ]] = "a";
    runeToLanguageMap[[ TengwaRune.THREE_DOTS, TengwaRune.YANTA ]] = "ai";
    runeToLanguageMap[[ TengwaRune.BAR, TengwaRune.ANDO ]] = "and";
    runeToLanguageMap[[ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ]] = "e";
    runeToLanguageMap[[ TengwaRune.DOT, TengwaRune.SHORT_CARRIER,
            TengwaRune.THREE_UNDER_DOTS ]] = "ea";
    runeToLanguageMap[[ TengwaRune.DOT, TengwaRune.DOT ]] = "ee";
    runeToLanguageMap[[ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ]] = "i";
    runeToLanguageMap[[ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER,
            TengwaRune.THREE_UNDER_DOTS ]] = "ia";
    runeToLanguageMap[[ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER,
            TengwaRune.UNDER_DOT ]] = "ie";
    runeToLanguageMap[[ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ]] = "o";
    runeToLanguageMap[[ TengwaRune.LEFT_CURL, TengwaRune.LONG_CARRIER ]] = "oo";
    runeToLanguageMap[[ TengwaRune.LEFT_CURL, TengwaRune.QUESSE,
            TengwaRune.LEFT_UNDER_CURL ]] = "ox";
    runeToLanguageMap[[ TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER ]] = "u";
    runeToLanguageMap[[ TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER,
            TengwaRune.UNDER_DOT ]] = "ue";
    runeToLanguageMap[[ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ]] = "y";

    // Check for missing entries.
    // {
    // var values = TengwaRune.values;
    // var properties = TengwaRune.properties;
    //
    // for (var i = 0; i < values.length; i++)
    // {
    // var rune = values[i];
    //
    // if (!runeToLanguageMap[rune])
    // {
    // LOGGER.error("Missing language letter for "
    // + properties[rune].name);
    // }
    // }
    // }

    this.getRuneToLanguageMap = function()
    {
        return runeToLanguageMap;
    }
}

EnglishTengwarTranscriber2.prototype.determineFontLetter = function(rune)
{
    if (!rune) { throw new Error("rune " + rune + " is undefined"); }

    var answer;

    if (Array.isArray(rune))
    {
        answer = [];

        for (var i = 0; i < rune.length; i++)
        {
            var rune2 = rune[i];

            if (this.isPreVowel(rune2))
            {
                if (i + 2 < rune.length && rune2 === "dot"
                        && rune[i + 1] === "dot"
                        && !this.isPreVowel(rune[i + 2]))
                {
                    answer[answer.length] = this
                            .determineFontLetter(rune[i + 2]);
                    answer[answer.length] = "B"; // DOT3
                    i += 2;
                }
                else if (i + 1 < rune.length)
                {
                    answer[answer.length] = this
                            .determineFontLetter(rune[i + 1]);
                    i++;
                }

                answer[answer.length] = this.determineFontLetter(rune2);
            }
            else
            {
                answer[answer.length] = this.determineFontLetter(rune2);
            }
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

EnglishTengwarTranscriber2.prototype.determineLanguageLetter = function(rune)
{
    var answer;

    var map = this.getRuneToLanguageMap();
    var letter = map[rune];

    if (letter)
    {
        answer = letter;
    }
    else if (Array.isArray(rune))
    {
        answer = [];

        for (var i = 0; i < rune.length; i++)
        {
            if (rune[i] === "underBar" && i - 1 >= 0)
            {
                // Repeat the previous letter.
                answer[answer.length] = this
                        .determineLanguageLetter(rune[i - 1]);
            }
            else
            {
                answer[answer.length] = this.determineLanguageLetter(rune[i]);
            }
        }
    }
    else
    {
        answer = "?";
    }

    return answer;
}

EnglishTengwarTranscriber2.prototype.isPreVowel = function(rune)
{
    return rune === "acute" || rune === "bar" || rune === "dot"
            || rune === "leftCurl" || rune === "rightCurl"
            || rune === "threeDots" || rune === "topCurl";
}

EnglishTengwarTranscriber2.prototype.runesToFontLetters = function(runes)
{
    var answer = [];

    for (var i = 0; i < runes.length; i++)
    {
        var rune = runes[i];

        if (!rune) { throw new Error("rune is undefined from " + i + " "
                + runes); }

        if (rune !== "newline")
        {
            answer[answer.length] = this.determineFontLetter(rune);
        }
    }

    return answer;
}

EnglishTengwarTranscriber2.prototype.runesToLanguageLetters = function(runes)
{
    var answer = [];

    for (var i = 0; i < runes.length; i++)
    {
        var rune = runes[i];

        if (rune !== "newline")
        {
            if (rune === "underBar" && i - 1 >= 0)
            {
                // Repeat the previous letter.
                answer[answer.length] = runes[i - 1];
            }
            else
            {
                answer[answer.length] = this.determineLanguageLetter(rune);
            }
        }
    }

    return answer;
}

if (Object.freeze)
{
    Object.freeze(EnglishTengwarTranscriber2);
}
