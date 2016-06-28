/*
 * Provides an example for Anglo-Saxon runes from LEGO 9473 Sticker #1.
 */
define([ "AngloSaxonRune" ], function(AngloSaxonRune)
{
    "use strict";
    var AngloSaxonExample8 =
    {
        NAME: "Anglo-Saxon Example 8",

        IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/lego9473/lego1.png",

        LANGUAGE_LETTERS: "Djordje was here",

        RUNES: [
        // djordje
        AngloSaxonRune.DAEG, AngloSaxonRune.IS, AngloSaxonRune.OS, AngloSaxonRune.RAD, AngloSaxonRune.DAEG,
                AngloSaxonRune.IS, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // was
                AngloSaxonRune.WYNN, AngloSaxonRune.AESC, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                // here
                AngloSaxonRune.HAEGL, AngloSaxonRune.EH, AngloSaxonRune.RAD, AngloSaxonRune.EH, ],
    };

    if (Object.freeze)
    {
        Object.freeze(AngloSaxonExample8);
    }

    return AngloSaxonExample8;
});
