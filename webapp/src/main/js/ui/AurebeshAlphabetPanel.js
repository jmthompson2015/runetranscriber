define([ "AurebeshRune", "util/InputValidator" ], function(AurebeshRune, InputValidator)
{
    var AurebeshAlphabetPanel = React.createClass(
    {
        render: function()
        {
            var rows = [];
            var cells = [];

            cells.push(React.DOM.td(
            {
                key: cells.length,
                className: "fontTable",
            }, this.createFontTable()));

            cells.push(React.DOM.td(
            {
                key: cells.length,
                className: "fontTable",
            }, this.createPunctuationTable()));

            rows.push(React.DOM.tr(
            {
                key: rows.length,
            }, cells));

            return React.DOM.table({}, React.DOM.tbody({}, rows));
        },

        createFontTable: function()
        {
            var rows = [];

            for (var i = 0; i < 7; i++)
            {
                var cells = [];

                for (var j = 1; j <= 7; j++)
                {
                    var number = (i * 7) + j;

                    var fontLetter;
                    var runeKey = AurebeshRune.values()[number - 1];

                    if (runeKey)
                    {
                        var rune = AurebeshRune.properties[runeKey];

                        if (rune)
                        {
                            fontLetter = rune.fontLetter;
                        }
                    }

                    cells.push(this.createNumberCell(cells.length, number));
                    cells.push(this.createFontCell(cells.length, fontLetter));
                }

                rows.push(React.DOM.tr(
                {
                    key: rows.length,
                }, cells));

                cells = [];

                for (var j = 1; j <= 7; j++)
                {
                    var number = (i * 7) + j;
                    var displayName;
                    var runeKey = AurebeshRune.values()[number - 1];

                    if (runeKey)
                    {
                        var rune = AurebeshRune.properties[runeKey];

                        if (rune)
                        {
                            displayName = rune.displayName;
                        }
                    }

                    cells.push(this.createRuneCell(cells.length, displayName));
                }

                rows.push(React.DOM.tr(
                {
                    key: rows.length,
                }, cells));
            }

            return React.DOM.table(
            {
                className: "table-details",
            }, React.DOM.tbody({}, rows));
        },

        createPunctuationTable: function()
        {
            var rows = [];

            [ "space", "comma", "period", "newline" ].forEach(function(runeKey)
            {
                var fontLetter = AurebeshRune.properties[runeKey].fontLetter;

                rows.push(React.DOM.tr(
                {
                    key: rows.length,
                }, this.createFontCell(0, fontLetter)));

                rows.push(React.DOM.tr(
                {
                    key: rows.length,
                }, this.createRuneCell(1, runeKey)));
            }, this);

            return React.DOM.table(
            {
                className: "table-details",
            }, React.DOM.tbody({}, rows));
        },

        createNumberCell: function(myKey, number)
        {
            InputValidator.validateNotNull("myKey", myKey);
            InputValidator.validateNotNull("number", number);

            return React.DOM.td(
            {
                key: myKey,
                className: "number-cell",
                rowSpan: 2,
            }, number);
        },

        createFontCell: function(myKey, fontLetter)
        {
            InputValidator.validateNotNull("myKey", myKey);
            InputValidator.validateNotNull("fontLetter", fontLetter);

            return React.DOM.td(
            {
                key: myKey,
                className: "table-cell-aurebesh",
            }, fontLetter);
        },

        createRuneCell: function(myKey, runeKey)
        {
            InputValidator.validateNotNull("myKey", myKey);
            InputValidator.validateNotNull("runeKey", runeKey);

            return React.DOM.td(
            {
                key: myKey,
                className: "rune-cell",
            }, runeKey);
        },
    });

    return AurebeshAlphabetPanel;
});
