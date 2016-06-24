define([ "AngloSaxonRune" ], function(AngloSaxonRune)
{
    "use strict";
    var AngloSaxonRuneFormat =
    {
        format: function(runes)
        {
            var answer = "";

            var properties = AngloSaxonRune.properties;

            for (var i = 0; i < runes.length; i++)
            {
                var rune = runes[i];
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
                answer[answer.length] = AngloSaxonRune[name];
            }

            return answer;
        },

        getFontLetters: function(runes)
        {
            var answer = "";

            var properties = AngloSaxonRune.properties;

            for (var i = 0; i < runes.length; i++)
            {
                var rune = runes[i];
                answer += properties[rune].fontLetter;
            }

            return answer;
        }
    };

    return AngloSaxonRuneFormat;
});
