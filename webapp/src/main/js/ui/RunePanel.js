define([ "ui/RuneTable" ], function(RuneTable)
{
    var RunePanel = React.createClass(
    {
        render: function()
        {
            var letterRows = this.split(this.props.letters);
            var runeRows = this.split(this.props.runes, this.props.runeSet.runes.NEWLINE);
            var phonemeRows = this.split(this.props.phonemes);
            var languageWordRows = this.split(this.props.languageWords);

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
                var cell = React.DOM.td({}, React.createElement(RuneTable,
                {
                    runeSet: this.props.runeSet,
                    letters: letterRows[i],
                    runes: runeRows[i],
                    phonemes: phonemeRows[i],
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

        split: function(array, delimiter)
        {
            var answer = [];
            var myDelimiter = (delimiter ? delimiter : "\n");

            var index = array.indexOf(myDelimiter);

            if (index < 0)
            {
                answer = array;
            }
            else
            {
                var fromIndex = 0;

                while (index >= 0)
                {
                    answer.push(array.slice(fromIndex, index));
                    fromIndex = index + 1;
                    index = array.indexOf(myDelimiter, fromIndex);
                }

                answer.push(array.slice(fromIndex));
            }

            return answer;
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
