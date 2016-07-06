define([ "TengwaRune", "util/InputValidator" ], function(TengwaRune, InputValidator)
{
    var TengwarAlphabetPanel = React.createClass(
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
            }, this.createVowelTable()));

            cells.push(React.DOM.td(
            {
                key: cells.length,
                className: "fontTable",
            }, this.createPunctuationTable()));

            cells.push(React.DOM.td(
            {
                key: cells.length,
                className: "fontTable",
            }, this.createAbbreviationTable()));

            rows.push(React.DOM.tr(
            {
                key: rows.length,
            }, cells));

            return React.DOM.table({}, React.DOM.tbody({}, rows));
        },

        createFontTable: function()
        {
            var rows = [];

            for (var i = 0; i < 9; i++)
            {
                var cells = [];

                for (var j = 1; j <= 4; j++)
                {
                    var number = (i * 4) + j;
                    var runeKey = TengwaRune.values()[number - 1];
                    var rune = TengwaRune.properties[runeKey];
                    var fontLetter = rune.fontLetter;

                    cells.push(this.createNumberCell(cells.length, number));
                    cells.push(this.createFontCell(cells.length, fontLetter));
                }

                rows.push(React.DOM.tr(
                {
                    key: rows.length,
                }, cells));

                cells = [];

                for (var j = 1; j <= 4; j++)
                {
                    var number = (i * 4) + j;
                    var runeKey = TengwaRune.values()[number - 1];
                    var rune = TengwaRune.properties[runeKey];
                    var displayName = rune.displayName;

                    cells.push(this.createRuneCell(cells.length, displayName));
                }

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

        createVowelTable: function()
        {
            var rows = [];

            rows = rows.concat(this.createVowelRows([ "threeDots", "threeUnderDots", "bar" ], 10, "a")); // a
            rows = rows.concat(this.createVowelRows([ "dot", "underDot" ], 20, "e")); // e
            rows = rows.concat(this.createVowelRows([ "acute" ], 30, "i")); // i
            rows = rows.concat(this.createVowelRows([ "leftCurl", "leftUnderCurl" ], 40, "o")); // o
            rows = rows.concat(this.createVowelRows([ "rightCurl", "topCurl" ], 50, "u")); // u

            return React.DOM.table(
            {
                className: "table-details alignCenter",
            }, React.DOM.tbody({}, rows));
        },

        createVowelRows: function(runeKeys, start, label)
        {
            var cells0 = [];
            var cells1 = [];
            var shortCarrier = TengwaRune.properties.shortCarrier.fontLetter;

            cells0.push(this.createNumberCell(0, label));

            runeKeys.forEach(function(runeKey, i)
            {
                var rune = TengwaRune.properties[runeKey];
                var fontLetter = rune.fontLetter;
                var displayName = rune.displayName;
                var myKey = 3 * (i + 1);

                cells0.push(this.createFontCell(myKey + 1, shortCarrier + fontLetter));
                cells1.push(this.createRuneCell(myKey + 2, displayName));
            }, this);

            var rows = [];

            rows.push(React.DOM.tr(
            {
                key: start + rows.length,
            }, cells0));
            rows.push(React.DOM.tr(
            {
                key: start + rows.length,
            }, cells1));

            return rows;
        },

        createPunctuationTable: function()
        {
            var rows = [];

            [ "space", "comma", "period", "newline" ].forEach(function(runeKey)
            {
                var fontLetter = TengwaRune.properties[runeKey].fontLetter;

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

        createAbbreviationTable: function()
        {
            var rows = [];

            [ "the", "of", "ofThe", "gh" ].forEach(function(runeKey)
            {
                var rune = TengwaRune.properties[runeKey];
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
                className: "table-cell-tengwar",
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

    return TengwarAlphabetPanel;
});
