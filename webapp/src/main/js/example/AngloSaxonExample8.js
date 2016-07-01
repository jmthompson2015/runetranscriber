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
        IMAGE_WIDTH: 400,

        LANGUAGE_STRING: "Djordje was here",

        LANGUAGE_WORDS: [ "djordje", " ", "was", " ", "here" ],

        PHONEMES: [ AngloSaxonRune.properties["daeg"].phoneme, AngloSaxonRune.properties["is"].phoneme,
                AngloSaxonRune.properties["os"].phoneme, AngloSaxonRune.properties["rad"].phoneme,
                AngloSaxonRune.properties["daeg"].phoneme, AngloSaxonRune.properties["is"].phoneme,
                AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                AngloSaxonRune.properties["wynn"].phoneme, AngloSaxonRune.properties["aesc"].phoneme,
                AngloSaxonRune.properties["sigel"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                AngloSaxonRune.properties["haegl"].phoneme, AngloSaxonRune.properties["eh"].phoneme,
                AngloSaxonRune.properties["rad"].phoneme, AngloSaxonRune.properties["eh"].phoneme ],

        RUNES: [
        // djordje
        AngloSaxonRune.DAEG, AngloSaxonRune.IS, AngloSaxonRune.OS, AngloSaxonRune.RAD, AngloSaxonRune.DAEG,
                AngloSaxonRune.IS, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // was
                AngloSaxonRune.WYNN, AngloSaxonRune.AESC, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                // here
                AngloSaxonRune.HAEGL, AngloSaxonRune.EH, AngloSaxonRune.RAD, AngloSaxonRune.EH, ],

        FONT_LETTERS: [ AngloSaxonRune.properties["daeg"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["rad"].fontLetter,
                AngloSaxonRune.properties["daeg"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                AngloSaxonRune.properties["wynn"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                AngloSaxonRune.properties["sigel"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                AngloSaxonRune.properties["haegl"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                AngloSaxonRune.properties["rad"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter ],
    };

    if (Object.freeze)
    {
        Object.freeze(AngloSaxonExample8);
    }

    return AngloSaxonExample8;
});
