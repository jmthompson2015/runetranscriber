/*
 * Provides an example for Anglo-Saxon runes from The Return of the Shadow page 154.
 */
define(
        [ "AngloSaxonRune" ],
        function(AngloSaxonRune)
        {
            "use strict";
            var AngloSaxonExampleTROTS1 =
            {
                NAME: "Anglo-Saxon Example TROTS 1",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/returnoftheshadow/TROTS_Page154.jpg",
                IMAGE_WIDTH: 400,

                LANGUAGE_STRING: "Gandalf",

                LANGUAGE_WORDS: [ "gandalf" ],

                PHONEMES: [ AngloSaxonRune.properties["gyfu"].phoneme, AngloSaxonRune.properties["aesc"].phoneme,
                        AngloSaxonRune.properties["nyd"].phoneme, AngloSaxonRune.properties["daeg"].phoneme,
                        AngloSaxonRune.properties["aesc"].phoneme, AngloSaxonRune.properties["lagu"].phoneme,
                        AngloSaxonRune.properties["feoh"].phoneme ],

                RUNES: [ AngloSaxonRune.GYFU, AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG,
                        AngloSaxonRune.AESC, AngloSaxonRune.LAGU, AngloSaxonRune.FEOH ],

                FONT_LETTERS: [ AngloSaxonRune.properties["gyfu"].fontLetter,
                        AngloSaxonRune.properties["aesc"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["daeg"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["lagu"].fontLetter, AngloSaxonRune.properties["feoh"].fontLetter ],
            };

            if (Object.freeze)
            {
                Object.freeze(AngloSaxonExampleTROTS1);
            }

            return AngloSaxonExampleTROTS1;
        });
