define(function()
{
    var RuneTable = React.createClass(
    {
        render: function()
        {
            var rows = [];
            var cells = this.createFontRows();
            rows.push(React.DOM.tr(
            {
                key: rows.length,
            }, cells));

            cells = this.createRuneRows();
            rows.push(React.DOM.tr(
            {
                key: rows.length,
            }, cells));

            if (this.props.expectedPhonemes)
            {
                cells = this.createPhonemeRows("Expected Phoneme", this.props.expectedPhonemes);
                rows.push(React.DOM.tr(
                {
                    key: rows.length,
                }, cells));
            }

            cells = this.createPhonemeRows("Phoneme", this.props.phonemes);
            rows.push(React.DOM.tr(
            {
                key: rows.length,
            }, cells));

            if (this.props.expectedLanguageWords)
            {
                cells = this.createLanguageRows("Expected Language", this.props.expectedLanguageWords);
                rows.push(React.DOM.tr(
                {
                    key: rows.length,
                }, cells));
            }

            cells = this.createLanguageRows("Language", this.props.languageWords);
            rows.push(React.DOM.tr(
            {
                key: rows.length,
            }, cells));

            return React.DOM.table(
            {
                className: "table-details",
            }, React.DOM.tbody({}, rows));
        },

        createFontRows: function()
        {
            var letters = this.props.letters;
            var cells = [];
            cells.push(React.DOM.td(
            {
                key: cells.length,
                className: "table-header-cell-details",
            }, "Rune"));

            var runeSet = this.props.runeSet;
            var fontClassName = runeSet.fontClassName;

            letters.forEach(function(letter)
            {
                if (letter !== "newline")
                {
                    if (Array.isArray(letter))
                    {
                        var word = letter.reduce(function(previousValue, currentValue)
                        {
                            return previousValue + currentValue;
                        }, "");

                        cells.push(React.DOM.td(
                        {
                            key: cells.length,
                            className: fontClassName,
                        }, word));
                    }
                    else
                    {
                        cells.push(React.DOM.td(
                        {
                            key: cells.length,
                            className: fontClassName,
                        }, letter));
                    }
                }
            });

            return cells;
        },

        createRuneRows: function()
        {
            var runes = this.props.runes;
            var runeSet = this.props.runeSet;
            var properties = runeSet.runes.properties;
            var cells = [];
            cells.push(React.DOM.td(
            {
                key: cells.length,
                className: "table-header-cell-details",
            }, "Rune Name"));

            runes.forEach(function(rune)
            {
                if (rune !== "newline")
                {
                    if (rune === "space")
                    {
                        cells.push(React.DOM.td(
                        {
                            key: cells.length,
                            className: "table-cell-rune-name",
                        }, " "));
                    }
                    else if (rune === "period")
                    {
                        cells.push(React.DOM.td(
                        {
                            key: cells.length,
                            className: "table-cell-rune-name",
                        }, "."));
                    }
                    else if (Array.isArray(rune))
                    {
                        var word = rune.reduce(function(previousValue, currentValue, currentIndex)
                        {
                            var answer = previousValue;
                            answer += properties[currentValue].name;
                            if (currentIndex < rune.length - 1)
                            {
                                answer += "-";
                            }
                            return answer;
                        }, "");

                        cells.push(React.DOM.td(
                        {
                            key: cells.length,
                            className: "table-cell-rune-name",
                        }, word));
                    }
                    else
                    {
                        cells.push(React.DOM.td(
                        {
                            key: cells.length,
                            className: "table-cell-rune-name",
                        }, properties[rune].name));
                    }
                }
            });

            return cells;
        },

        createPhonemeRows: function(title, letters)
        {
            var cells = [];
            cells.push(React.DOM.td(
            {
                key: cells.length,
                className: "table-header-cell-details",
            }, title));

            for (var i = 0; i < letters.length; i++)
            {
                var letter = letters[i];

                if (letter !== "newline")
                {
                    if (Array.isArray(letter))
                    {
                        var word = letter.reduce(function(previousValue, currentValue)
                        {
                            return previousValue + currentValue;
                        }, "");

                        cells.push(React.DOM.td(
                        {
                            key: cells.length,
                            className: "table-cell-details",
                        }, word));
                    }
                    else
                    {
                        cells.push(React.DOM.td(
                        {
                            key: cells.length,
                            className: "table-cell-details",
                        }, letter));
                    }
                }
            }

            return cells;
        },

        createLanguageRows: function(title, words)
        {
            var runes = this.props.runes;
            var cells = [];
            cells.push(React.DOM.td(
            {
                key: cells.length,
                className: "table-header-cell-details",
            }, title));
            var start = 0;
            var runeSet = this.props.runeSet;

            words.forEach(function(word, i)
            {
                var colSpan = 1;

                if (runeSet.runes.isPunctuation(word))
                {
                    for (var j = start; j < runes.length; j++)
                    {
                        if (runeSet.runes.isPunctuation(runes[j]))
                        {
                            colSpan = j - start;
                            start = j + 1;
                            break;
                        }
                    }

                    cells.push(React.DOM.td(
                    {
                        key: cells.length,
                        className: "table-cell-details",
                        colSpan: colSpan,
                    }, words[i - 1]));

                    cells.push(React.DOM.td(
                    {
                        key: cells.length,
                        className: "table-cell-details",
                    }, word));
                }
                else if (i === words.length - 1)
                {
                    colSpan = runes.length - start;
                    cells.push(React.DOM.td(
                    {
                        key: cells.length,
                        className: "table-cell-details",
                        colSpan: colSpan,
                    }, word));
                }
            });

            return cells;
        }
    });

    RuneTable.propTypes =
    {
        runeSet: React.PropTypes.object.isRequired,
        letters: React.PropTypes.array.isRequired,
        runes: React.PropTypes.array.isRequired,
        expectedPhonemes: React.PropTypes.array,
        phonemes: React.PropTypes.array.isRequired,
        expectedLanguageWords: React.PropTypes.array,
        languageWords: React.PropTypes.array.isRequired,
    };

    return RuneTable;
});
