/*
 * Provides an example for Anglo-Saxon runes from The Hobbit, Thror's Map #1.
 */
define([ "AngloSaxonRune" ], function(AngloSaxonRune)
{
    "use strict";
    var AngloSaxonExample2 =
    {
        NAME: "Anglo-Saxon Example 2",

        LANGUAGE_LETTERS: "ESWN",

        RUNES: [
        // e
        AngloSaxonRune.EH,
        // s
        AngloSaxonRune.SIGEL,
        // w
        AngloSaxonRune.WYNN,
        // n
        AngloSaxonRune.NYD, ],
    }

    if (Object.freeze)
    {
        Object.freeze(AngloSaxonExample2)
    };

    return AngloSaxonExample2;
});
