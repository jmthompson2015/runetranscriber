var TengwaRuneFormat =
{
    format: function(runes)
    {
        var answer = "";

        var properties = TengwaRune.properties;

        for (var i = 0; i < runes.length; i++)
        {
            var rune = runes[i];

            if (!rune)
            {
                LOGGER.error("Missing rune at position " + i+"; runes.length = "+runes.length+" runes = "+runes);
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
        // LOGGER.trace("names.length = " + names.length);

        for (var i = 0; i < names.length; i++)
        {
            var name = names[i];
            // LOGGER.trace("name = " + name);
            answer[answer.length] = TengwaRune[name];
        }

        return answer;
    },

    getFontLetters: function(runes)
    {
        var answer = "";

        var properties = TengwaRune.properties;

        for (var i = 0; i < runes.length; i++)
        {
            var rune = runes[i];
            answer += properties[rune].fontLetter;
        }

        return answer;
    }
};
