var AurebeshRuneFormat =
{
    format: function(runes)
    {
        var answer = "";

        var properties = AurebeshRune.properties;

        for (var i = 0; i < runes.length; i++)
        {
            var rune = runes[i];

            if (!rune)
            {
                LOGGER.error("Missing rune at position " + i
                        + "; runes.length = " + runes.length + " runes = "
                        + runes);
            }

            answer += properties[rune].name;

            if (i < runes.length - 1)
            {
                answer += "-";
            }
        }

        return answer;
    },

    parse: function(string)
    {
        var answer = [];

        var names = string.split("-");

        for (var i = 0; i < names.length; i++)
        {
            var name = names[i];
            answer[answer.length] = AurebeshRune[name];
        }

        return answer;
    },

    getFontLetters: function(runes)
    {
        var answer = "";

        var transcriber = new EnglishAurebeshTranscriber();
        var properties = AurebeshRune.properties;

        for (var i = 0; i < runes.length; i++)
        {
            var rune = runes[i];

            var letter = transcriber.determineFontLetter(rune);

            if (Array.isArray(letter))
            {
                for (var j = 0; j < letter.length; j++)
                {
                    answer += letter[j];
                }
            }
            else
            {
                answer += letter;
            }
        }

        return answer;
    }
}
