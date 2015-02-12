var TengwarToPhoneticTranscriber = function()
{
    var runeToPhonemeMap = {};

    // Combinations.
    runeToPhonemeMap[[ TengwaRune.THREE_DOTS, TengwaRune.YANTA ]] = "ai";
    runeToPhonemeMap[[ TengwaRune.BAR, TengwaRune.ANDO ]] = "and";
    runeToPhonemeMap[[ TengwaRune.DOT, TengwaRune.DOT ]] = "ee";
    runeToPhonemeMap[[ TengwaRune.LEFT_CURL, TengwaRune.LONG_CARRIER ]] = "oo";
    runeToPhonemeMap[[ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ]] = "y";

    this.getRuneToPhonemeMap = function()
    {
        return runeToPhonemeMap;
    }
}

TengwarToPhoneticTranscriber.prototype.determinePhoneme = function(rune)
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

TengwarToPhoneticTranscriber.prototype.runesToPhonemes = function(runes)
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
    Object.freeze(TengwarToPhoneticTranscriber);
}
