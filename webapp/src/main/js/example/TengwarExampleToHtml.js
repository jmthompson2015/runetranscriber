define([ "EnglishTengwarTranscriber", "TengwaRune" ], function(EnglishTengwarTranscriber, TengwaRune)
{
    var TengwarExampleToHtml = function(runesIn)
    {
        var runes = runesIn;
        var transcriber = new EnglishTengwarTranscriber();

        this.getRunes = function()
        {
            return runes;
        }

        this.getTranscriber = function()
        {
            return transcriber;
        }
    }

    TengwarExampleToHtml.prototype.generateFontRows = function()
    {
        var letters = this.getTranscriber().runesToFontLetters(this.getRunes());

        var answer = "<tr>\n";
        answer += "<td class=\"table-header-cell-details\">Font</td>\n";

        for (var i = 0; i < letters.length; i++)
        {
            var letter = letters[i];

            if (letter !== "newline")
            {
                answer += "<td class=\"table-cell-tengwar\">"

                if (Array.isArray(letter))
                {
                    for (var j = 0; j < letter.length; j++)
                    {
                        var letter2 = letter[j];
                        answer += letter2;
                    }
                }
                else
                {
                    answer += letter;
                }

                answer += "</td>\n"
            }
        }

        answer += "</tr>\n";

        return answer;
    }

    TengwarExampleToHtml.prototype.generateRuneRows = function()
    {
        var runes = this.getRunes();
        var properties = TengwaRune.properties;

        var answer = "<tr>\n";
        answer += "<td class=\"table-header-cell-details\">Rune</td>\n";

        for (var i = 0; i < runes.length; i++)
        {
            var rune = runes[i];

            if (rune !== "newline")
            {
                answer += "<td class=\"table-cell-rune-name\">";

                if (rune === "space")
                {
                    answer += " ";
                }
                else if (rune === "period")
                {
                    answer += ".";
                }
                else if (Array.isArray(rune))
                {
                    for (var j = 0; j < rune.length; j++)
                    {
                        var rune2 = rune[j];
                        answer += properties[rune2].name;

                        if (j < rune.length - 1)
                        {
                            answer += "-";
                        }
                    }
                }
                else
                {
                    answer += properties[rune].name;
                }

                answer += "</td>\n";
            }
        }

        answer += "</tr>\n";

        return answer;
    }

    TengwarExampleToHtml.prototype.generatePhonemeRows = function()
    {
        var letters = this.getTranscriber().runesToPhonemes(this.getRunes());

        var answer = "<tr>\n";
        answer += "<td class=\"table-header-cell-details\">Phoneme</td>\n";

        for (var i = 0; i < letters.length; i++)
        {
            var letter = letters[i];

            if (letter !== "newline")
            {
                answer += "<td class=\"table-cell-details\">";

                if (Array.isArray(letter))
                {
                    for (var j = 0; j < letter.length; j++)
                    {
                        var letter2 = letter[j];
                        answer += letter2;
                    }
                }
                else
                {
                    answer += letter;
                }

                answer += "</td>\n";
            }
        }

        answer += "</tr>\n";

        return answer;
    }

    TengwarExampleToHtml.prototype.generateLanguageRows = function()
    {
        var runes = this.getRunes();
        var words = this.getTranscriber().runesToLanguageWords(runes);

        var answer = "<tr>\n";
        answer += "<td class=\"table-header-cell-details\">Language</td>\n";
        var start = 0;

        for (var i = 0; i < words.length; i++)
        {
            var word = words[i];
            var colspan = 1;

            if (this.isPunctuation(word))
            {
                for (var j = start; j < runes.length; j++)
                {
                    if (this.isPunctuation(runes[j]))
                    {
                        colspan = j - start;
                        start = j + 1;
                        break;
                    }
                }

                answer += "<td class=\"table-cell-details\" colspan=\"";
                answer += colspan;
                answer += "\">";
                answer += words[i - 1];
                answer += "</td>\n";

                answer += "<td class=\"table-cell-details\">";
                answer += word;
                answer += "</td>\n";
            }
            else if (i === words.length - 1)
            {
                colspan = runes.length - start;

                answer += "<td class=\"table-cell-details\" colspan=\"";
                answer += colspan;
                answer += "\">";
                answer += word;
                answer += "</td>\n";
            }
        }

        answer += "</tr>\n";

        return answer;
    }

    TengwarExampleToHtml.prototype.isPunctuation = function(word)
    {
        return word === TengwaRune.SPACE || word === TengwaRune.COMMA || word === TengwaRune.PERIOD ||
                word === TengwaRune.NEWLINE || word === " " || word === "," || word === "." || word === "\n";
    }

    return TengwarExampleToHtml;
});
