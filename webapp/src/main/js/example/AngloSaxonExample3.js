/*
 * Provides an example for Anglo-Saxon runes from The Hobbit, Thror's Map #2 by pointing finger.
 */
define([ "AngloSaxonRune" ], function(AngloSaxonRune)
{
    "use strict";
    var AngloSaxonExample3 =
    {
        NAME: "Anglo-Saxon Example 3",

        LANGUAGE_LETTERS: "Five\nfeet high\nthe door an\nd three may\nwalk abre\nast. Th. Th.",

        RUNES: [
        // five
        AngloSaxonRune.FEOH, AngloSaxonRune.IS, AngloSaxonRune.UR, AngloSaxonRune.EH, AngloSaxonRune.NEWLINE,
        // feet
        AngloSaxonRune.FEOH, AngloSaxonRune.EOEL, AngloSaxonRune.TIW, AngloSaxonRune.SPACE,
        // high
        AngloSaxonRune.HAEGL, AngloSaxonRune.IS, AngloSaxonRune.GYFU, AngloSaxonRune.HAEGL, AngloSaxonRune.NEWLINE,
        // the
        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
        // door
        AngloSaxonRune.DAEG, AngloSaxonRune.OS, AngloSaxonRune.RAD, AngloSaxonRune.SPACE,
        // and
        AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.NEWLINE, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
        // three
        AngloSaxonRune.THORN, AngloSaxonRune.RAD, AngloSaxonRune.EOEL, AngloSaxonRune.SPACE,
        // may
        AngloSaxonRune.MANN, AngloSaxonRune.AESC, AngloSaxonRune.YR, AngloSaxonRune.NEWLINE,
        // walk
        AngloSaxonRune.WYNN,
        // map has AngloSaxonRune.OS, preface has AngloSaxonRune.AESC
        AngloSaxonRune.AESC, AngloSaxonRune.LAGU, AngloSaxonRune.CEN, AngloSaxonRune.SPACE,
        // abreast.
        AngloSaxonRune.AESC, AngloSaxonRune.BEORC, AngloSaxonRune.RAD, AngloSaxonRune.EH, AngloSaxonRune.NEWLINE,
                AngloSaxonRune.AESC, AngloSaxonRune.SIGEL, AngloSaxonRune.TIW, AngloSaxonRune.PERIOD,
                // th.
                AngloSaxonRune.THORN, AngloSaxonRune.PERIOD,
                // th.
                AngloSaxonRune.THORN, AngloSaxonRune.PERIOD, ],
    }

    if (Object.freeze)
    {
        Object.freeze(AngloSaxonExample3)
    };

    return AngloSaxonExample3;
});
