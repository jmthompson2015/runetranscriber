/*
 * Provides an example for Anglo-Saxon runes from The Hobbit, Preface #2.
 */
define([ "AngloSaxonRune" ], function(AngloSaxonRune)
{
    "use strict";
    var AngloSaxonExample6 =
    {
        NAME: "Anglo-Saxon Example 6",

        LANGUAGE_LETTERS: "Five feet high the door and three may walk abreast. Th. Th.",

        RUNES: [
        // five
        AngloSaxonRune.FEOH, AngloSaxonRune.IS, AngloSaxonRune.UR, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
        // feet
        AngloSaxonRune.FEOH, AngloSaxonRune.EOEL, AngloSaxonRune.TIW, AngloSaxonRune.SPACE,
        // high
        AngloSaxonRune.HAEGL, AngloSaxonRune.IS, AngloSaxonRune.GYFU, AngloSaxonRune.HAEGL, AngloSaxonRune.SPACE,
        // the
        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
        // door
        AngloSaxonRune.DAEG, AngloSaxonRune.OS, AngloSaxonRune.RAD, AngloSaxonRune.SPACE,
        // and
        AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
        // three
        AngloSaxonRune.THORN, AngloSaxonRune.RAD, AngloSaxonRune.EOEL, AngloSaxonRune.SPACE,
        // may
        AngloSaxonRune.MANN, AngloSaxonRune.AESC, AngloSaxonRune.YR, AngloSaxonRune.SPACE,
        // walk
        AngloSaxonRune.WYNN, AngloSaxonRune.AESC, AngloSaxonRune.LAGU, AngloSaxonRune.CEN, AngloSaxonRune.SPACE,
        // abreast.
        AngloSaxonRune.AESC, AngloSaxonRune.BEORC, AngloSaxonRune.RAD, AngloSaxonRune.EH, AngloSaxonRune.AESC,
                AngloSaxonRune.SIGEL, AngloSaxonRune.TIW, AngloSaxonRune.PERIOD,
                // th.
                AngloSaxonRune.THORN, AngloSaxonRune.PERIOD,
                // th.
                AngloSaxonRune.THORN, AngloSaxonRune.PERIOD, ],
    }

    if (Object.freeze)
    {
        Object.freeze(AngloSaxonExample6)
    };

    return AngloSaxonExample6;
});
