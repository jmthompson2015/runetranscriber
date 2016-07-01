/*
 * Provides an example for Anglo-Saxon runes from The Hobbit, Thror's Map #1.
 */
define(
        [ "AngloSaxonRune" ],
        function(AngloSaxonRune)
        {
            "use strict";
            var AngloSaxonExample2 =
            {
                NAME: "Anglo-Saxon Example 2",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/hobbit/TheHobbit_ThrorsMap1EastTop.jpg",
                IMAGE_WIDTH: 200,

                LANGUAGE_STRING: "E S W N",

                LANGUAGE_WORDS: [ "e", " ", "s", " ", "w", " ", "n" ],

                PHONEMES: [ AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["sigel"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["wynn"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["nyd"].phoneme ],

                RUNES: [
                // e
                AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // s
                AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                // w
                AngloSaxonRune.WYNN, AngloSaxonRune.SPACE,
                // n
                AngloSaxonRune.NYD, ],

                FONT_LETTERS: [ AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["wynn"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter ],
            };

            if (Object.freeze)
            {
                Object.freeze(AngloSaxonExample2);
            }

            return AngloSaxonExample2;
        });
