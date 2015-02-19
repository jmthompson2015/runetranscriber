var AurebeshExampleToHtml = function(runesIn)
{
    var runes = runesIn;
    var transcriber = new EnglishAurebeshTranscriber();

    this.getRunes = function()
    {
        return runes;
    }

    this.getTranscriber = function()
    {
        return transcriber;
    }
}

AurebeshExampleToHtml.prototype.generateFontRows = function()
{
    var letters = this.getTranscriber().runesToFontLetters(this.getRunes());

    var answer = "<tr>\n";
    answer += "<td class=\"table-header-cell-details\">Font</td>\n";

    for (var i = 0; i < letters.length; i++)
    {
        var letter = letters[i];

        if (letter !== "newline")
        {
            answer += "<td class=\"table-cell-aurebesh\">"

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

AurebeshExampleToHtml.prototype.generateRuneRows = function()
{
    var runes = this.getRunes();
    var properties = AurebeshRune.properties;

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

AurebeshExampleToHtml.prototype.generatePhonemeRows = function()
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
