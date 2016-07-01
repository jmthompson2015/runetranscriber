define([ "ui/RuneTable" ], function(RuneTable)
{
    var RunePanel = React.createClass(
    {
        render: function()
        {
            var letterRows = this.props.letters.split();
            var runeRows = this.props.runes.split(this.props.runeSet.runes.NEWLINE);
            var expectedPhonemeRows = this.props.expectedPhonemes.split();
            var phonemeRows = this.props.phonemes.split();
            var expectedLanguageWordRows = this.props.expectedLanguageWords.split();
            var languageWordRows = this.props.languageWords.split();

            var rows = [];

            var cell = React.DOM.td({}, React.DOM.img(
            {
                src: this.props.image,
                width: 700,
            }));
            rows.push(React.DOM.tr(
            {
                key: rows.length,
            }, cell));

            for (var i = 0; i < runeRows.length; i++)
            {
                cell = React.DOM.td({}, React.createElement(RuneTable,
                {
                    runeSet: this.props.runeSet,
                    letters: letterRows[i],
                    runes: runeRows[i],
                    expectedPhonemes: expectedPhonemeRows[i],
                    phonemes: phonemeRows[i],
                    expectedLanguageWords: expectedLanguageWordRows[i],
                    languageWords: languageWordRows[i],
                }));
                rows.push(React.DOM.tr(
                {
                    key: rows.length,
                }, cell));
            }

            return React.DOM.table(
            {
                className: "table-details",
            }, React.DOM.tbody({}, rows));
        },
    });

    RunePanel.propTypes =
    {
        runeSet: React.PropTypes.object.isRequired,
        image: React.PropTypes.string.isRequired,
        letters: React.PropTypes.array.isRequired,
        runes: React.PropTypes.array.isRequired,
        phonemes: React.PropTypes.array.isRequired,
        languageWords: React.PropTypes.array.isRequired,
    };

    return RunePanel;
});
