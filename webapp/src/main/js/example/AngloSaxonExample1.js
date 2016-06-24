/*
 * <a href="http://ring-lord.tripod.com/cirth/ex_lotr.htm">From the title page, upper inscription, Lord of the Rings</a>
 */
define([ "AngloSaxonRune", "AngloSaxonRuneFormat" ], function(AngloSaxonRune, AngloSaxonRuneFormat)
{
    "use strict";
    var AngloSaxonExample1 =
    {
        LANGUAGE_LETTERS:
        // Top 1 line 1
        "The hobbit, or, there and \n"
        // Top 2 line 1
        + "back again. Being the \n"
        // Top 1 line 2
        + "record of a year's journey \n"
        // Top 2 line 2
        + "made by Bilbo Baggins of \n"
        // Bottom 1 line 1
        + "Hobbiton. Compiled from his \n"
        // Bottom 2 line 1
        + "memoirs by J R R Tolkien. \n"
        // Bottom 1 line 2
        + "And published by George \n"
        // Bottom 2 line 2
        + "Allen and Unwin Ltd.",

        RUNES: [
        // Top 1 line 1
        // the
        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
        // hobbit
        AngloSaxonRune.HAEGL, AngloSaxonRune.OS, AngloSaxonRune.BEORC, AngloSaxonRune.BEORC, AngloSaxonRune.IS,
                AngloSaxonRune.TIW, AngloSaxonRune.COMMA,
                // or
                AngloSaxonRune.OS, AngloSaxonRune.RAD, AngloSaxonRune.COMMA,
                // there
                AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.RAD, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // and
                AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                AngloSaxonRune.NEWLINE,

                // Top 2 line 1
                // back
                AngloSaxonRune.BEORC, AngloSaxonRune.AESC, AngloSaxonRune.CEN, AngloSaxonRune.CEN,
                AngloSaxonRune.SPACE,
                // again
                AngloSaxonRune.AESC, AngloSaxonRune.GYFU, AngloSaxonRune.AESC, AngloSaxonRune.IS, AngloSaxonRune.NYD,
                AngloSaxonRune.PERIOD,
                // being
                AngloSaxonRune.BEORC, AngloSaxonRune.EH, AngloSaxonRune.IS, AngloSaxonRune.ING, AngloSaxonRune.SPACE,
                // the
                AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE, AngloSaxonRune.NEWLINE,

                // Top 1 line 2
                // record
                AngloSaxonRune.RAD, AngloSaxonRune.EH, AngloSaxonRune.CEN, AngloSaxonRune.OS, AngloSaxonRune.RAD,
                AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                // of
                AngloSaxonRune.OS, AngloSaxonRune.FEOH, AngloSaxonRune.SPACE,
                // a
                AngloSaxonRune.AESC, AngloSaxonRune.SPACE,
                // year's
                AngloSaxonRune.YR, AngloSaxonRune.EAR, AngloSaxonRune.RAD, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                // journey
                AngloSaxonRune.IS, AngloSaxonRune.OS, AngloSaxonRune.UR, AngloSaxonRune.RAD, AngloSaxonRune.NYD,
                AngloSaxonRune.EH, AngloSaxonRune.YR, AngloSaxonRune.SPACE, AngloSaxonRune.NEWLINE,

                // Top 2 line 2
                // made
                AngloSaxonRune.MANN, AngloSaxonRune.AESC, AngloSaxonRune.DAEG, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // by
                AngloSaxonRune.BEORC, AngloSaxonRune.YR, AngloSaxonRune.SPACE,
                // bilbo
                AngloSaxonRune.BEORC, AngloSaxonRune.IS, AngloSaxonRune.LAGU, AngloSaxonRune.BEORC, AngloSaxonRune.OS,
                AngloSaxonRune.SPACE,
                // baggins
                AngloSaxonRune.BEORC, AngloSaxonRune.AESC, AngloSaxonRune.GYFU, AngloSaxonRune.GYFU, AngloSaxonRune.IS,
                AngloSaxonRune.NYD, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                // of
                AngloSaxonRune.OS, AngloSaxonRune.FEOH, AngloSaxonRune.SPACE, AngloSaxonRune.NEWLINE,

                // Bottom 1 line 1
                // hobbiton
                AngloSaxonRune.HAEGL, AngloSaxonRune.OS, AngloSaxonRune.BEORC, AngloSaxonRune.BEORC, AngloSaxonRune.IS,
                AngloSaxonRune.TIW, AngloSaxonRune.OS, AngloSaxonRune.NYD, AngloSaxonRune.PERIOD,
                // compiled
                AngloSaxonRune.CEN, AngloSaxonRune.OS, AngloSaxonRune.MANN, AngloSaxonRune.PEORD, AngloSaxonRune.IS,
                AngloSaxonRune.LAGU, AngloSaxonRune.EH, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                // from
                AngloSaxonRune.FEOH, AngloSaxonRune.RAD, AngloSaxonRune.OS, AngloSaxonRune.MANN, AngloSaxonRune.SPACE,
                // his
                AngloSaxonRune.HAEGL, AngloSaxonRune.IS, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                AngloSaxonRune.NEWLINE,

                // Bottom 2 line 1
                // memoirs
                AngloSaxonRune.MANN, AngloSaxonRune.EH, AngloSaxonRune.MANN, AngloSaxonRune.OS, AngloSaxonRune.IS,
                AngloSaxonRune.RAD, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                // by
                AngloSaxonRune.BEORC, AngloSaxonRune.YR, AngloSaxonRune.SPACE,
                // j r r
                AngloSaxonRune.IS, AngloSaxonRune.SPACE, AngloSaxonRune.RAD, AngloSaxonRune.SPACE, AngloSaxonRune.RAD,
                AngloSaxonRune.SPACE,
                // tolkien.
                AngloSaxonRune.TIW, AngloSaxonRune.OS, AngloSaxonRune.LAGU, AngloSaxonRune.CEN, AngloSaxonRune.IS,
                AngloSaxonRune.EH, AngloSaxonRune.NYD, AngloSaxonRune.PERIOD, AngloSaxonRune.NEWLINE,

                // Bottom 1 line 2
                // and
                AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                // published
                AngloSaxonRune.PEORD, AngloSaxonRune.UR, AngloSaxonRune.BEORC, AngloSaxonRune.LAGU, AngloSaxonRune.IS,
                AngloSaxonRune.SIGEL, AngloSaxonRune.HAEGL, AngloSaxonRune.EH, AngloSaxonRune.DAEG,
                AngloSaxonRune.SPACE,
                // by
                AngloSaxonRune.BEORC, AngloSaxonRune.YR, AngloSaxonRune.SPACE,
                // george
                AngloSaxonRune.GYFU, AngloSaxonRune.EOH, AngloSaxonRune.RAD, AngloSaxonRune.GYFU, AngloSaxonRune.EH,
                AngloSaxonRune.SPACE, AngloSaxonRune.NEWLINE,

                // Bottom 2 line 2
                // allen
                AngloSaxonRune.AESC, AngloSaxonRune.LAGU, AngloSaxonRune.LAGU, AngloSaxonRune.EH, AngloSaxonRune.NYD,
                AngloSaxonRune.SPACE,
                // and
                AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                // unwin
                AngloSaxonRune.UR, AngloSaxonRune.NYD, AngloSaxonRune.WYNN, AngloSaxonRune.IS, AngloSaxonRune.NYD,
                AngloSaxonRune.SPACE,
                // ltd.
                AngloSaxonRune.LAGU, AngloSaxonRune.TIW, AngloSaxonRune.DAEG, AngloSaxonRune.PERIOD, ],
    }

    if (Object.freeze)
    {
        Object.freeze(AngloSaxonExample1)
    };

    return AngloSaxonExample1;
});
