define([ "AngloSaxonRune", "util/InputValidator" ], function(AngloSaxonRune, InputValidator)
{
    var AngloSaxonAlphabetPanel = React.createClass(
    {
        render: function()
        {
            var rows = [];
            var cells = [];

            cells.push(React.DOM.td(
            {
                key: cells.length,
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

            for (var i = 0; i < 29; i++)
            {
                var cells = [];
                var number = i + 1;
                var fontLetter, displayName;
                var runeKey = AngloSaxonRune.values()[number - 1];

                if (runeKey)
                {
                    var rune = AngloSaxonRune.properties[runeKey];

                    if (rune)
                    {
                        fontLetter = rune.fontLetter;
                        displayName = rune.displayName;
                    }
                }

                cells.push(this.createNumberCell(cells.length, number));
                cells.push(this.createFontCell(cells.length, fontLetter));
                cells.push(this.createRuneCell(cells.length, displayName));

                rows.push(React.DOM.tr(
                {
                    key: rows.length,
                }, cells));
            }

            return React.DOM.table(
            {
                className: "table-details alignCenter",
            }, React.DOM.tbody({}, rows));
        },

        createPunctuationTable: function()
        {
            var rows = [];

            [ "space", "comma", "period", "apostrophe", "newline" ].forEach(function(runeKey)
            {
                var fontLetter = AngloSaxonRune.properties[runeKey].fontLetter;

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
                className: "table-details alignCenter",
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
                className: "table-cell-anglo-saxon",
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

    return AngloSaxonAlphabetPanel;
});
