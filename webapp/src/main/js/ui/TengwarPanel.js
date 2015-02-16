var TengwarPanel =
{
    transcriber: new TengwarToPhoneticTranscriber(),

    createCell: function(runes, languageLetter)
    {
        var properties = TengwaRune.properties;

        if (!languageLetter)
        {
            languageLetter = this.transcriber.runesToPhonemes([ runes ]);

            if (languageLetter.length === 0 || !languageLetter[0])
            {
                languageLetter = "?";
            }
        }

        var answer = "";

        if (Array.isArray(runes))
        {
            answer += "<table class=\"center table-details\">";
            answer += "<tr>";

            for (var i = 0; i < runes.length; i++)
            {
                var rune = runes[i];
                answer += "<td style=\"border: 1px solid; border-color: darkgreen; font-family: Tengwar;font-size: x-large;\">";

                if (TengwaRune.tehtar.contains(runes))
                {
                    answer += properties[TengwaRune.SHORT_CARRIER].fontLetter;
                }

                answer += properties[rune].fontLetter;
                answer += "</td>";
            }

            answer += "</tr>";

            answer += "<tr>";

            for (var i = 0; i < runes.length; i++)
            {
                var rune = runes[i];
                answer += "<td style=\"border: 1px solid; border-color: darkgreen; font-size: x-small;\">";
                answer += this.getName(rune);
                answer += "</td>";
            }

            answer += "</tr>";

            answer += "<tr>";
            answer += "<td style=\"font-size: small;\" colspan=\"";
            answer += runes.length;
            answer += "\">";
            answer += languageLetter;
            answer += "</td>";
            answer += "</tr>";
        }
        else
        {
            answer += "<table style=\"width: 100%;\">";
            answer += "<tr>";
            answer += "<td style=\"font-family: Tengwar;font-size: x-large;\">";

            if (TengwaRune.tehtar.contains(runes))
            {
                answer += properties[TengwaRune.SHORT_CARRIER].fontLetter;
            }

            answer += properties[runes].fontLetter;
            answer += "</td>";
            answer += "</tr>";

            answer += "<tr>";
            answer += "<td style=\"font-size: x-small;\">";
            answer += this.getName(runes);
            answer += "</td>";
            answer += "</tr>";

            answer += "<tr>";
            answer += "<td style=\"font-size: small;\">";
            answer += languageLetter;
            answer += "</td>";
            answer += "</tr>";
        }

        answer += "</table>";

        return answer;
    },

    createHtml: function()
    {
        var answer = "";

        answer += "<table class=\"center table-details\">";
        answer += "<tr>";
        answer += "<td></td>";
        answer += "<th class=\"table-header-cell-details\">";
        answer += "I";
        answer += "</th>";
        answer += "<th class=\"table-header-cell-details\">";
        answer += "II";
        answer += "</th>";
        answer += "<th class=\"table-header-cell-details\">";
        answer += "III";
        answer += "</th>";
        answer += "<th class=\"table-header-cell-details\">";
        answer += "IV";
        answer += "</th>";
        answer += "</tr>";

        for (var i = 0; i < 24; i++)
        {
            var rune = TengwaRune.values[i];
            answer += this.createRow(4, i, rune);
        }

        answer += "</table>";
        answer += "<br/>";
        answer += "<table class=\"center table-details\">";

        for (var i = 24; i < 36; i++)
        {
            var rune = TengwaRune.values[i];
            answer += this.createRow(4, i, rune);
        }

        answer += "</table>";
        answer += "<br/>";
        answer += "<table class=\"center table-details\">";
        var i = 24;
        answer += this.createRow(4, i++, TengwaRune.THE);
        answer += this.createRow(4, i++, TengwaRune.OF);
        answer += this.createRow(4, i++, TengwaRune.OF_THE);
        answer += this.createRow(4, i++, TengwaRune.GH);
        answer += "</table>";

        answer += "<br/>";
        answer += "<table class=\"center table-details\">";
        var i = 30;
        answer += this.createRow(5, i++, [ TengwaRune.THREE_DOTS,
                TengwaRune.THREE_UNDER_DOTS, TengwaRune.BAR ], "a");
        answer += this.createRow(5, i++,
                [ TengwaRune.DOT, TengwaRune.UNDER_DOT ], "e");
        answer += this.createRow(5, i++, [ // TengwaRune.YANTA,
        TengwaRune.ACUTE ], "i");
        answer += this.createRow(5, i++, [ TengwaRune.LEFT_CURL,
                TengwaRune.LEFT_UNDER_CURL ], "o");
        answer += this.createRow(5, i++, [ // TengwaRune.URE,
        TengwaRune.RIGHT_CURL, TengwaRune.TOP_CURL ], "u");
        answer += "</table>";

        answer += "<br/>";
        answer += this.createCell([ TengwaRune.UNDER_BAR ], "[repeat]");

        answer += "<br/>";
        answer += "<table class=\"center table-details\">";
        var i = 30;
        answer += this.createRow(5, i++, [ TengwaRune.HYPHEN ]);
        answer += this.createRow(5, i++, [ TengwaRune.SPACE ], "&nbsp;");
        answer += this.createRow(5, i++, [ TengwaRune.COMMA ]);
        answer += this.createRow(5, i++, [ TengwaRune.PERIOD ]);
        answer += this.createRow(5, i++, [ TengwaRune.NEWLINE ], "&nbsp;");
        answer += "</table>";

        return answer;
    },

    createRow: function(columns, i, runes, languageLetter)
    {
        var answer = "";
        var isRowStart = (i % columns === 0);
        var isRowEnd = ((i + 1) % columns === 0);

        if (isRowStart)
        {
            answer += "<tr>";

            if (i / columns < 6)
            {
                answer += "<th class=\"table-header-cell-details\">";
                answer += (i / columns) + 1;
                answer += "</th>";
            }
        }

        answer += "<td class=\"table-cell-details\">";
        answer += this.createCell(runes, languageLetter);
        answer += "</td>";

        if (isRowEnd)
        {
            answer += "</tr>";
        }

        return answer;
    },

    getName: function(rune)
    {
        var properties = TengwaRune.properties;
        var answer = properties[rune].name;
        answer = answer.replace(/_/g, " ");

        return answer;
    },
}

if (Object.freeze)
{
    Object.freeze(TengwarPanel)
};
