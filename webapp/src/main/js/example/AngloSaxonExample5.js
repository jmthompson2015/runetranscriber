/*
 * Provides an example for Anglo-Saxon runes from The Hobbit, Preface #1.
 */
define(
        [ "AngloSaxonRune" ],
        function(AngloSaxonRune)
        {
            "use strict";
            var AngloSaxonExample5 =
            {
                NAME: "Anglo-Saxon Example 5",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/hobbit/TheHobbit_Preface1.jpg",

                LANGUAGE_STRING: "The hobbit\nor\nthere and back again",

                LANGUAGE_WORDS: [ "the", " ", "hobbit", "\n", "or", "\n", "there", " ", "and", " ", "back", " ",
                        "again" ],

                PHONEMES: [ AngloSaxonRune.properties["thorn"].phoneme, AngloSaxonRune.properties["eh"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme, AngloSaxonRune.properties["haegl"].phoneme,
                        AngloSaxonRune.properties["os"].phoneme, AngloSaxonRune.properties["beorc"].phoneme,
                        AngloSaxonRune.properties["beorc"].phoneme, AngloSaxonRune.properties["is"].phoneme,
                        AngloSaxonRune.properties["tiw"].phoneme, AngloSaxonRune.properties["newline"].phoneme,
                        AngloSaxonRune.properties["os"].phoneme, AngloSaxonRune.properties["rad"].phoneme,
                        AngloSaxonRune.properties["newline"].phoneme, AngloSaxonRune.properties["thorn"].phoneme,
                        AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["rad"].phoneme,
                        AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["aesc"].phoneme, AngloSaxonRune.properties["nyd"].phoneme,
                        AngloSaxonRune.properties["daeg"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["beorc"].phoneme, AngloSaxonRune.properties["aesc"].phoneme,
                        AngloSaxonRune.properties["cen"].phoneme, AngloSaxonRune.properties["cen"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme, AngloSaxonRune.properties["aesc"].phoneme,
                        AngloSaxonRune.properties["gyfu"].phoneme, AngloSaxonRune.properties["aesc"].phoneme,
                        AngloSaxonRune.properties["is"].phoneme, AngloSaxonRune.properties["nyd"].phoneme ],

                RUNES: [
                // the
                AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // hobbit
                AngloSaxonRune.HAEGL, AngloSaxonRune.OS, AngloSaxonRune.BEORC, AngloSaxonRune.BEORC, AngloSaxonRune.IS,
                        AngloSaxonRune.TIW, AngloSaxonRune.NEWLINE,
                        // or
                        AngloSaxonRune.OS, AngloSaxonRune.RAD, AngloSaxonRune.NEWLINE,
                        // there
                        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.RAD, AngloSaxonRune.EH,
                        AngloSaxonRune.SPACE,
                        // and
                        AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                        // back
                        AngloSaxonRune.BEORC, AngloSaxonRune.AESC, AngloSaxonRune.CEN, AngloSaxonRune.CEN,
                        AngloSaxonRune.SPACE,
                        // again
                        AngloSaxonRune.AESC, AngloSaxonRune.GYFU, AngloSaxonRune.AESC, AngloSaxonRune.IS,
                        AngloSaxonRune.NYD, ],

                FONT_LETTERS: [ AngloSaxonRune.properties["thorn"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["haegl"].fontLetter, AngloSaxonRune.properties["os"].fontLetter,
                        AngloSaxonRune.properties["beorc"].fontLetter, AngloSaxonRune.properties["beorc"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["tiw"].fontLetter,
                        AngloSaxonRune.properties["newline"].fontLetter, AngloSaxonRune.properties["os"].fontLetter,
                        AngloSaxonRune.properties["rad"].fontLetter, AngloSaxonRune.properties["newline"].fontLetter,
                        AngloSaxonRune.properties["thorn"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["rad"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["daeg"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["beorc"].fontLetter,
                        AngloSaxonRune.properties["aesc"].fontLetter, AngloSaxonRune.properties["cen"].fontLetter,
                        AngloSaxonRune.properties["cen"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["aesc"].fontLetter, AngloSaxonRune.properties["gyfu"].fontLetter,
                        AngloSaxonRune.properties["aesc"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter ],
            };

            if (Object.freeze)
            {
                Object.freeze(AngloSaxonExample5);
            }

            return AngloSaxonExample5;
        });
