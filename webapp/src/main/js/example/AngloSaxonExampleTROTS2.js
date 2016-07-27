/*
 * Provides an example for Anglo-Saxon runes from The Return of the Shadow page 194.
 */
define(
        [ "AngloSaxonRune" ],
        function(AngloSaxonRune)
        {
            "use strict";
            var AngloSaxonExampleTROTS2 =
            {
                NAME: "Anglo-Saxon Example TROTS 2",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/returnoftheshadow/TROTS_Page194.jpg",
                IMAGE_WIDTH: 150,

                LANGUAGE_STRING: "G B",

                LANGUAGE_WORDS: [ "g", " ", "b" ],

                PHONEMES: [ AngloSaxonRune.properties["gyfu"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["beorc"].phoneme ],

                RUNES: [ AngloSaxonRune.GYFU, AngloSaxonRune.SPACE, AngloSaxonRune.BEORC ],

                FONT_LETTERS: [ AngloSaxonRune.properties["gyfu"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["beorc"].fontLetter ],
            };

            if (Object.freeze)
            {
                Object.freeze(AngloSaxonExampleTROTS2);
            }

            return AngloSaxonExampleTROTS2;
        });
