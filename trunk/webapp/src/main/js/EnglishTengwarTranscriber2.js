var EnglishTengwarTranscriber2 = function()
{
    var runeToPhonemeMap = {};

    // Combinations.
    runeToPhonemeMap[[ TengwaRune.THREE_DOTS, TengwaRune.YANTA ]] = "ai";
    runeToPhonemeMap[[ TengwaRune.BAR, TengwaRune.ANDO ]] = "and";
    runeToPhonemeMap[[ TengwaRune.DOT, TengwaRune.DOT ]] = "ee";
    runeToPhonemeMap[[ TengwaRune.LEFT_CURL, TengwaRune.LONG_CARRIER ]] = "oo";
    runeToPhonemeMap[[ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ]] = "y";

    // Check for missing entries.
    // {
    // var values = TengwaRune.values;
    // var properties = TengwaRune.properties;
    //
    // for (var i = 0; i < values.length; i++)
    // {
    // var rune = values[i];
    //
    // if (!runeToPhonemeMap[rune])
    // {
    // LOGGER.error("Missing language letter for "
    // + properties[rune].name);
    // }
    // }
    // }

    var phonemeToLanguageMap = {};

    // The Lord Of The Rings
    // Christopher reversed 'e' and 'i' from J.R.R.?
    phonemeToLanguageMap["az"] = "as";
    phonemeToLanguageMap["hireen"] = "herein";
    phonemeToLanguageMap["hobbets"] = "hobbits";
    phonemeToLanguageMap["iz"] = "is";
    phonemeToLanguageMap["jhon"] = "john";
    phonemeToLanguageMap["keng"] = "king";
    phonemeToLanguageMap["riuil"] = "reuel";
    phonemeToLanguageMap["reng"] = "ring";
    phonemeToLanguageMap["sit"] = "set";
    phonemeToLanguageMap["tolkein"] = "tolkien";
    phonemeToLanguageMap["wor"] = "war";
    phonemeToLanguageMap["wistmarch"] = "westmarch";

    // The Silmarillion
    phonemeToLanguageMap["aje"] = "age";
    phonemeToLanguageMap["kome"] = "come";
    phonemeToLanguageMap["powr"] = "power";
    phonemeToLanguageMap["rekovery"] = "recovery";

    // Unfinished Tales Of Numenor And Middle-Earth
    phonemeToLanguageMap["akkount"] = "account";
    phonemeToLanguageMap["kristofer"] = "christopher";
    phonemeToLanguageMap["druedaiin"] = "druedain";

    // The War Of The Ring
    phonemeToLanguageMap["kirith"] = "cirith";

    // Sauron Defeated
    phonemeToLanguageMap["akownt"] = "account";
    phonemeToLanguageMap["kataklysm"] = "cataclysm";
    phonemeToLanguageMap["certan"] = "certain";
    phonemeToLanguageMap["destruktion"] = "destruction";
    phonemeToLanguageMap["oksford"] = "oxford";
    phonemeToLanguageMap["skolars"] = "scholars";

    this.getPhonemeToLanguageMap = function()
    {
        return phonemeToLanguageMap;
    }

    this.getRuneToPhonemeMap = function()
    {
        return runeToPhonemeMap;
    }
}

EnglishTengwarTranscriber2.prototype.convertWord = function(word)
{
    var answer = word;
    var map = this.getPhonemeToLanguageMap();
    var word2 = map[word];

    if (word2)
    {
        answer = word2;
    }

    return answer;
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

EnglishTengwarTranscriber2.prototype.determineLanguageLetter = function(phoneme)
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
    else
    {
        answer = phoneme;
    }

    return answer;
}

EnglishTengwarTranscriber2.prototype.determinePhoneme = function(rune)
{
    var answer = "?";

    var map = this.getRuneToPhonemeMap();
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

            if (rune.length === 2 && rune[1] == "shortCarrier")
            {
                answer[answer.length] = this.determinePhoneme(rune[0]);
            }
            else if (rune.length === 3 && rune[1] == "shortCarrier")
            {
                answer[answer.length] = this.determinePhoneme(rune[0]);
                answer[answer.length] = this.determinePhoneme(rune[2]);
            }
            else
            {
                for (var i = 0; i < rune.length; i++)
                {
                    if (rune[i] === "underBar" && i - 1 >= 0)
                    {
                        // Repeat the previous letter.
                        answer[answer.length] = this
                                .determinePhoneme(rune[i - 1]);
                    }
                    else
                    {
                        answer[answer.length] = this.determinePhoneme(rune[i]);
                    }
                }
            }
        }
        else
        {
            var properties = TengwaRune.properties;
            var phoneme = properties[rune].phoneme;

            answer = phoneme;
        }
    }

    return answer;
}

EnglishTengwarTranscriber2.prototype.isPreVowel = function(rune)
{
    return rune === "acute" || rune === "bar" || rune === "dot"
            || rune === "leftCurl" || rune === "rightCurl"
            || rune === "threeDots" || rune === "topCurl";
}

EnglishTengwarTranscriber2.prototype.languageStringToWords = function(string)
{
    var answer = [];
    var word = "";

    for (var i = 0; i < string.length; i++)
    {
        var letter = string.charAt(i);

        if (word === "of" && string.substring(i, i + 4) === " the")
        {
            answer[answer.length] = "of the";
            i += 4;

            if (i < string.length)
            {
                letter = string.charAt(i);
                answer[answer.length] = letter;
                word = "";
            }
        }
        else if (letter === " " || letter === "," || letter === "."
                || letter === "\n")
        {
            if (word !== "")
            {
                answer[answer.length] = word;
                answer[answer.length] = letter;
                word = "";
            }
        }
        else if (i === string.length - 1 && word !== "")
        {
            word += letter;
            answer[answer.length] = word;
        }
        else
        {
            word += letter;
        }
    }

    return answer;
}

EnglishTengwarTranscriber2.prototype.languageWordsToString = function(words)
{
    var answer = "";

    for (var i = 0; i < words.length; i++)
    {
        var word = words[i];
        answer += word;

        if ((word === "," || word === ".") && i < words.length - 1)
        {
            answer += " ";
        }
    }

    return answer;
}

EnglishTengwarTranscriber2.prototype.phonemesToLanguageWords = function(
        phonemes)
{
    var answer = [];

    var word = "";

    for (var i = 0; i < phonemes.length; i++)
    {
        var phoneme = phonemes[i];

        if (phoneme === " " || phoneme === "," || phoneme === "."
                || phoneme === "\n")
        {
            answer[answer.length] = this.convertWord(word);
            answer[answer.length] = phoneme;
            word = "";
        }
        else if (i === phonemes.length - 1)
        {
            word += this.determineLanguageLetter(phoneme);
            answer[answer.length] = this.convertWord(word);
        }
        else
        {
            word += this.determineLanguageLetter(phoneme);
        }
    }

    return answer;
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

EnglishTengwarTranscriber2.prototype.runesToLanguageWords = function(runes)
{
    var phonemes = this.runesToPhonemes(runes);
    var answer = this.phonemesToLanguageWords(phonemes);

    return answer;
}

EnglishTengwarTranscriber2.prototype.runesToPhonemes = function(runes)
{
    var answer = [];

    for (var i = 0; i < runes.length; i++)
    {
        var rune = runes[i];

        if (rune === "underBar" && i - 1 >= 0)
        {
            // Repeat the previous letter.
            answer[answer.length] = runes[i - 1];
        }
        else
        {
            answer[answer.length] = this.determinePhoneme(rune);
        }
    }

    return answer;
}

if (Object.freeze)
{
    Object.freeze(EnglishTengwarTranscriber2);
}
