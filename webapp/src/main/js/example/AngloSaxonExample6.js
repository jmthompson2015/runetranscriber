/*
 * Provides an example for Anglo-Saxon runes from The Hobbit, Preface #2.
 */
define(
        [ "AngloSaxonRune" ],
        function(AngloSaxonRune)
        {
            "use strict";
            var AngloSaxonExample6 =
            {
                NAME: "Anglo-Saxon Example 6",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/hobbit/TheHobbit_Preface2.jpg",

                LANGUAGE_STRING: "Five feet high the door and three may walk abreast. Th. Th.",

                LANGUAGE_WORDS: [ "five", " ", "feet", " ", "high", " ", "the", " ", "door", " ", "and", " ", "three",
                        " ", "may", " ", "walk", " ", "abreast", ".", " ", "th", ".", " ", "th", "." ],

                PHONEMES: [ AngloSaxonRune.properties["feoh"].phoneme, AngloSaxonRune.properties["is"].phoneme, "v",
                        AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["feoh"].phoneme, AngloSaxonRune.properties["eoel"].phoneme,
                        AngloSaxonRune.properties["tiw"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["haegl"].phoneme, AngloSaxonRune.properties["is"].phoneme,
                        AngloSaxonRune.properties["gyfu"].phoneme, AngloSaxonRune.properties["haegl"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme, AngloSaxonRune.properties["thorn"].phoneme,
                        AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["daeg"].phoneme, AngloSaxonRune.properties["os"].phoneme,
                        AngloSaxonRune.properties["rad"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["aesc"].phoneme, AngloSaxonRune.properties["nyd"].phoneme,
                        AngloSaxonRune.properties["daeg"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["thorn"].phoneme, AngloSaxonRune.properties["rad"].phoneme,
                        AngloSaxonRune.properties["eoel"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["mann"].phoneme, AngloSaxonRune.properties["aesc"].phoneme,
                        AngloSaxonRune.properties["yr"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["wynn"].phoneme, AngloSaxonRune.properties["aesc"].phoneme,
                        AngloSaxonRune.properties["lagu"].phoneme, AngloSaxonRune.properties["cen"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme,
                        // abreast.
                        AngloSaxonRune.properties["aesc"].phoneme, AngloSaxonRune.properties["beorc"].phoneme,
                        AngloSaxonRune.properties["rad"].phoneme, AngloSaxonRune.properties["eh"].phoneme,
                        AngloSaxonRune.properties["aesc"].phoneme, AngloSaxonRune.properties["sigel"].phoneme,
                        AngloSaxonRune.properties["tiw"].phoneme, AngloSaxonRune.properties["period"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme,
                        // th.
                        AngloSaxonRune.properties["thorn"].phoneme, AngloSaxonRune.properties["period"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme,
                        // th.
                        AngloSaxonRune.properties["thorn"].phoneme, AngloSaxonRune.properties["period"].phoneme ],

                RUNES: [
                // five
                AngloSaxonRune.FEOH, AngloSaxonRune.IS, AngloSaxonRune.UR, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // feet
                AngloSaxonRune.FEOH, AngloSaxonRune.EOEL, AngloSaxonRune.TIW, AngloSaxonRune.SPACE,
                // high
                AngloSaxonRune.HAEGL, AngloSaxonRune.IS, AngloSaxonRune.GYFU, AngloSaxonRune.HAEGL,
                        AngloSaxonRune.SPACE,
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
                        AngloSaxonRune.WYNN, AngloSaxonRune.AESC, AngloSaxonRune.LAGU, AngloSaxonRune.CEN,
                        AngloSaxonRune.SPACE,
                        // abreast.
                        AngloSaxonRune.AESC, AngloSaxonRune.BEORC, AngloSaxonRune.RAD, AngloSaxonRune.EH,
                        AngloSaxonRune.AESC, AngloSaxonRune.SIGEL, AngloSaxonRune.TIW, AngloSaxonRune.PERIOD,
                        AngloSaxonRune.SPACE,
                        // th.
                        AngloSaxonRune.THORN, AngloSaxonRune.PERIOD, AngloSaxonRune.SPACE,
                        // th.
                        AngloSaxonRune.THORN, AngloSaxonRune.PERIOD, ],

                FONT_LETTERS: [ AngloSaxonRune.properties["feoh"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["ur"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["feoh"].fontLetter, AngloSaxonRune.properties["eoel"].fontLetter,
                        AngloSaxonRune.properties["tiw"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["haegl"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["gyfu"].fontLetter, AngloSaxonRune.properties["haegl"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["thorn"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["daeg"].fontLetter, AngloSaxonRune.properties["os"].fontLetter,
                        AngloSaxonRune.properties["rad"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["aesc"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["daeg"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["thorn"].fontLetter, AngloSaxonRune.properties["rad"].fontLetter,
                        AngloSaxonRune.properties["eoel"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["mann"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["yr"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["wynn"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["lagu"].fontLetter, AngloSaxonRune.properties["cen"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter,
                        // abreast.
                        AngloSaxonRune.properties["aesc"].fontLetter, AngloSaxonRune.properties["beorc"].fontLetter,
                        AngloSaxonRune.properties["rad"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["aesc"].fontLetter, AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["tiw"].fontLetter, AngloSaxonRune.properties["period"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter,
                        // th.
                        AngloSaxonRune.properties["thorn"].fontLetter, AngloSaxonRune.properties["period"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter,
                        // th.
                        AngloSaxonRune.properties["thorn"].fontLetter, AngloSaxonRune.properties["period"].fontLetter ],
            };

            if (Object.freeze)
            {
                Object.freeze(AngloSaxonExample6);
            }

            return AngloSaxonExample6;
        });
