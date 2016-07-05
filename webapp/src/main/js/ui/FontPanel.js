define([], function()
{
    var FontPanel = React.createClass(
    {
        render: function()
        {
            var rows = [];
            var max = 256;
            var start = max * this.props.page;
            var columnCount = 16;
            var rowCount = max / columnCount;

            for (var i = 0; i < rowCount; i++)
            {
                rows = rows.concat(this.createRows(start, columnCount));
                start += columnCount;
            }

            return React.DOM.table(
            {
                className: "table-details",
            }, React.DOM.tbody({}, rows));
        },

        createRows: function(start, columnCount)
        {
            var runeSet = this.props.runeSet;
            var rowCount = 4;
            var fontCells = [];
            var runeCells = [];
            var numberCells = [];
            var hexCells = [];

            // Headers.
            fontCells.push(React.DOM.td(
            {
                key: fontCells.length,
                className: "table-header-cell-details",
            }, "Font"));
            runeCells.push(React.DOM.td(
            {
                key: runeCells.length,
                className: "table-header-cell-details",
            }, "Rune"));
            numberCells.push(React.DOM.td(
            {
                key: numberCells.length,
                className: "table-header-cell-details",
            }, "Number"));
            hexCells.push(React.DOM.td(
            {
                key: hexCells.length,
                className: "table-header-cell-details",
            }, "Hex"));

            // Values.
            for (var i = 0; i < columnCount; i++)
            {
                var fontLetter = String.fromCharCode(start + i);
                var runeName = "";
                var runeKey = runeSet.runes.findByFontLetter(fontLetter);
                if (runeKey)
                {
                    runeName = runeSet.runes.properties[runeKey].name;
                }
                var hex = (start + i).toString(16).toUpperCase();
                hex = this.paddingLeft(hex, "0000");

                fontCells.push(React.DOM.td(
                {
                    key: fontCells.length,
                    className: runeSet.fontClassName + " alignCenter",
                }, fontLetter));
                runeCells.push(React.DOM.td(
                {
                    key: runeCells.length,
                    className: "table-cell-rune-name alignCenter",
                }, runeName));
                numberCells.push(React.DOM.td(
                {
                    key: numberCells.length,
                    className: "table-cell-details alignCenter",
                }, start + i));
                hexCells.push(React.DOM.td(
                {
                    key: hexCells.length,
                    className: "table-cell-details alignCenter",
                }, hex));
            }

            var rows = [];

            rows.push(React.DOM.tr(
            {
                key: rowCount * (start / columnCount) + rows.length,
            }, fontCells));
            rows.push(React.DOM.tr(
            {
                key: rowCount * (start / columnCount) + rows.length,
            }, runeCells));
            rows.push(React.DOM.tr(
            {
                key: rowCount * (start / columnCount) + rows.length,
            }, numberCells));
            rows.push(React.DOM.tr(
            {
                key: rowCount * (start / columnCount) + rows.length,
            }, hexCells));

            return rows;
        },

        paddingLeft: function(string, paddingValue)
        {
            return String(paddingValue + string).slice(-paddingValue.length);
        },
    });

    FontPanel.propTypes =
    {
        runeSet: React.PropTypes.object.isRequired,
        page: React.PropTypes.number.isRequired,
    };

    return FontPanel;
});
