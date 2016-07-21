define([ "CerthRune", "util/InputValidator" ], function(CerthRune, InputValidator)
{
    var CirthAlphabetPanel = React.createClass(
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
            }, this.createPhonemeTable()));

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

            for (var i = 1; i <= 15; i++)
            {
                var cells = [];

                for (var j = 0; j < 4; j++)
                {
                    var number = (j * 15) + i;
                    var rune = CerthRune.properties["c" + number];
                    var fontLetter = rune.fontLetter;

                    cells.push(this.createNumberCell(cells.length, number));
                    cells.push(this.createFontCell(cells.length, fontLetter));
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

        createPhonemeTable: function()
        {
            var rows = [];

            for (var i = 1; i <= 15; i++)
            {
                var cells = [];

                for (var j = 0; j < 4; j++)
                {
                    var number = (j * 15) + i;
                    var rune = CerthRune.properties["c" + number];
                    var phoneme = rune.phoneme;

                    cells.push(this.createNumberCell(cells.length, number));
                    cells.push(this.createPhonemeCell(cells.length, phoneme));
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
                var rune = CerthRune.properties[runeKey];
                var fontLetter = rune.fontLetter;
                var displayName = rune.displayName;

                rows.push(React.DOM.tr(
                {
                    key: rows.length,
                }, this.createFontCell(0, fontLetter)));

                rows.push(React.DOM.tr(
                {
                    key: rows.length,
                }, this.createRuneCell(1, displayName)));
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
            }, number);
        },

        createFontCell: function(myKey, fontLetter)
        {
            InputValidator.validateNotNull("myKey", myKey);
            InputValidator.validateNotNull("fontLetter", fontLetter);

            return React.DOM.td(
            {
                key: myKey,
                className: "table-cell-cirth",
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

        createPhonemeCell: function(myKey, phoneme)
        {
            InputValidator.validateNotNull("myKey", myKey);
            InputValidator.validateNotNull("phoneme", phoneme);

            return React.DOM.td(
            {
                key: myKey,
                className: "phoneme-cell",
            }, phoneme);
        },
    });

    return CirthAlphabetPanel;
});
