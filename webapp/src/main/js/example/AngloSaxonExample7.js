/*
 * Provides an example for Anglo-Saxon runes from The Hobbit, Preface #3.
 */
define(
        [ "AngloSaxonRune" ],
        function(AngloSaxonRune)
        {
            "use strict";
            var AngloSaxonExample7 =
            {
                NAME: "Anglo-Saxon Example 7",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/hobbit/TheHobbit_Preface3.jpg",

                LANGUAGE_STRING: "Stand by the grey stone when the thrush knocks an\n"
                        + "d the setting sun with the last light of Durin's Day \n" + "will shine upon the keyhole.",

                LANGUAGE_WORDS: [ "stand", " ", "by", " ", "the", " ", "grey", " ", "stone", " ", "when", " ", "the",
                        " ", "thrush", " ", "knocks", " ", "an", "\n", "d", " ", "the", " ", "setting", " ", "sun",
                        " ", "with", " ", "the", " ", "last", " ", "light", " ", "of", " ", "durin", "'", "s", " ",
                        "day", " ", "\n", "will", " ", "shine", " ", "upon", " ", "the", " ", "keyhole", "." ],

                PHONEMES: [ AngloSaxonRune.properties["sigel"].phoneme, AngloSaxonRune.properties["tiw"].phoneme,
                        AngloSaxonRune.properties["aesc"].phoneme, AngloSaxonRune.properties["nyd"].phoneme,
                        AngloSaxonRune.properties["daeg"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["beorc"].phoneme, AngloSaxonRune.properties["yr"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme, AngloSaxonRune.properties["thorn"].phoneme,
                        AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["gyfu"].phoneme, AngloSaxonRune.properties["rad"].phoneme,
                        AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["yr"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme, AngloSaxonRune.properties["sigel"].phoneme,
                        AngloSaxonRune.properties["tiw"].phoneme, AngloSaxonRune.properties["os"].phoneme,
                        AngloSaxonRune.properties["nyd"].phoneme, AngloSaxonRune.properties["eh"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme,
                        // when
                        "w", "h", AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["nyd"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme, AngloSaxonRune.properties["thorn"].phoneme,
                        AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["thorn"].phoneme, AngloSaxonRune.properties["rad"].phoneme,
                        AngloSaxonRune.properties["ur"].phoneme, AngloSaxonRune.properties["sigel"].phoneme,
                        AngloSaxonRune.properties["haegl"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["cen"].phoneme, AngloSaxonRune.properties["nyd"].phoneme,
                        AngloSaxonRune.properties["os"].phoneme, AngloSaxonRune.properties["cen"].phoneme,
                        AngloSaxonRune.properties["cen"].phoneme, AngloSaxonRune.properties["sigel"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme, AngloSaxonRune.properties["aesc"].phoneme,
                        AngloSaxonRune.properties["nyd"].phoneme, AngloSaxonRune.properties["newline"].phoneme,
                        AngloSaxonRune.properties["daeg"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["thorn"].phoneme, AngloSaxonRune.properties["eh"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme, AngloSaxonRune.properties["sigel"].phoneme,
                        AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["tiw"].phoneme,
                        AngloSaxonRune.properties["tiw"].phoneme, AngloSaxonRune.properties["is"].phoneme,
                        AngloSaxonRune.properties["ing"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["sigel"].phoneme, AngloSaxonRune.properties["ur"].phoneme,
                        AngloSaxonRune.properties["nyd"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["wynn"].phoneme, AngloSaxonRune.properties["is"].phoneme,
                        AngloSaxonRune.properties["thorn"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["thorn"].phoneme, AngloSaxonRune.properties["eh"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme, AngloSaxonRune.properties["lagu"].phoneme,
                        AngloSaxonRune.properties["ac"].phoneme, AngloSaxonRune.properties["sigel"].phoneme,
                        AngloSaxonRune.properties["tiw"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["lagu"].phoneme, AngloSaxonRune.properties["is"].phoneme,
                        AngloSaxonRune.properties["gyfu"].phoneme, AngloSaxonRune.properties["haegl"].phoneme,
                        AngloSaxonRune.properties["tiw"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["os"].phoneme, AngloSaxonRune.properties["feoh"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme,
                        // durin's
                        AngloSaxonRune.properties["daeg"].phoneme, AngloSaxonRune.properties["ur"].phoneme,
                        AngloSaxonRune.properties["rad"].phoneme, AngloSaxonRune.properties["is"].phoneme,
                        AngloSaxonRune.properties["nyd"].phoneme, "'", AngloSaxonRune.properties["sigel"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme,
                        // day
                        AngloSaxonRune.properties["daeg"].phoneme, AngloSaxonRune.properties["aesc"].phoneme,
                        AngloSaxonRune.properties["yr"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["newline"].phoneme, AngloSaxonRune.properties["wynn"].phoneme,
                        AngloSaxonRune.properties["is"].phoneme, AngloSaxonRune.properties["lagu"].phoneme,
                        AngloSaxonRune.properties["lagu"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["sigel"].phoneme, AngloSaxonRune.properties["haegl"].phoneme,
                        AngloSaxonRune.properties["is"].phoneme, AngloSaxonRune.properties["nyd"].phoneme,
                        AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["ur"].phoneme, AngloSaxonRune.properties["peord"].phoneme,
                        AngloSaxonRune.properties["os"].phoneme, AngloSaxonRune.properties["nyd"].phoneme,
                        AngloSaxonRune.properties["space"].phoneme, AngloSaxonRune.properties["thorn"].phoneme,
                        AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["space"].phoneme,
                        AngloSaxonRune.properties["cen"].phoneme, AngloSaxonRune.properties["eh"].phoneme,
                        AngloSaxonRune.properties["yr"].phoneme, AngloSaxonRune.properties["haegl"].phoneme,
                        AngloSaxonRune.properties["os"].phoneme, AngloSaxonRune.properties["lagu"].phoneme,
                        AngloSaxonRune.properties["eh"].phoneme, AngloSaxonRune.properties["period"].phoneme ],

                RUNES: [
                // stand
                AngloSaxonRune.SIGEL, AngloSaxonRune.TIW, AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG,
                        AngloSaxonRune.SPACE,
                        // by
                        AngloSaxonRune.BEORC, AngloSaxonRune.YR, AngloSaxonRune.SPACE,
                        // the
                        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // grey
                        AngloSaxonRune.GYFU, AngloSaxonRune.RAD, AngloSaxonRune.EH, AngloSaxonRune.YR,
                        AngloSaxonRune.SPACE,
                        // stone
                        AngloSaxonRune.SIGEL, AngloSaxonRune.TIW, AngloSaxonRune.OS, AngloSaxonRune.NYD,
                        AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // hwen (when)
                        AngloSaxonRune.HAEGL, AngloSaxonRune.WYNN, AngloSaxonRune.EH, AngloSaxonRune.NYD,
                        AngloSaxonRune.SPACE,
                        // the
                        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // thrush
                        AngloSaxonRune.THORN, AngloSaxonRune.RAD, AngloSaxonRune.UR, AngloSaxonRune.SIGEL,
                        AngloSaxonRune.HAEGL, AngloSaxonRune.SPACE,
                        // knocks
                        AngloSaxonRune.CEN, AngloSaxonRune.NYD, AngloSaxonRune.OS, AngloSaxonRune.CEN,
                        AngloSaxonRune.CEN, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                        // and
                        AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.NEWLINE, AngloSaxonRune.DAEG,
                        AngloSaxonRune.SPACE,
                        // the
                        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // setting
                        AngloSaxonRune.SIGEL, AngloSaxonRune.EH, AngloSaxonRune.TIW, AngloSaxonRune.TIW,
                        AngloSaxonRune.IS, AngloSaxonRune.ING, AngloSaxonRune.SPACE,
                        // sun
                        AngloSaxonRune.SIGEL, AngloSaxonRune.UR, AngloSaxonRune.NYD, AngloSaxonRune.SPACE,
                        // with
                        AngloSaxonRune.WYNN, AngloSaxonRune.IS, AngloSaxonRune.THORN, AngloSaxonRune.SPACE,
                        // the
                        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // last
                        AngloSaxonRune.LAGU, AngloSaxonRune.AC, AngloSaxonRune.SIGEL, AngloSaxonRune.TIW,
                        AngloSaxonRune.SPACE,
                        // light
                        AngloSaxonRune.LAGU, AngloSaxonRune.IS, AngloSaxonRune.GYFU, AngloSaxonRune.HAEGL,
                        AngloSaxonRune.TIW, AngloSaxonRune.SPACE,
                        // of
                        AngloSaxonRune.OS, AngloSaxonRune.FEOH, AngloSaxonRune.SPACE,
                        // durin's
                        AngloSaxonRune.DAEG, AngloSaxonRune.UR, AngloSaxonRune.RAD, AngloSaxonRune.IS,
                        AngloSaxonRune.NYD, AngloSaxonRune.APOSTROPHE, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                        // day
                        AngloSaxonRune.DAEG, AngloSaxonRune.AESC, AngloSaxonRune.YR, AngloSaxonRune.SPACE,
                        AngloSaxonRune.NEWLINE,
                        // will
                        AngloSaxonRune.WYNN, AngloSaxonRune.IS, AngloSaxonRune.LAGU, AngloSaxonRune.LAGU,
                        AngloSaxonRune.SPACE,
                        // shine
                        AngloSaxonRune.SIGEL, AngloSaxonRune.HAEGL, AngloSaxonRune.IS, AngloSaxonRune.NYD,
                        AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // upon
                        AngloSaxonRune.UR, AngloSaxonRune.PEORD, AngloSaxonRune.OS, AngloSaxonRune.NYD,
                        AngloSaxonRune.SPACE,
                        // the
                        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // keyhole.
                        AngloSaxonRune.CEN, AngloSaxonRune.EH, AngloSaxonRune.YR, AngloSaxonRune.HAEGL,
                        AngloSaxonRune.OS, AngloSaxonRune.LAGU, AngloSaxonRune.EH, AngloSaxonRune.PERIOD, ],

                FONT_LETTERS: [ AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["tiw"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["daeg"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["beorc"].fontLetter,
                        AngloSaxonRune.properties["yr"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["thorn"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["gyfu"].fontLetter,
                        AngloSaxonRune.properties["rad"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["yr"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["sigel"].fontLetter, AngloSaxonRune.properties["tiw"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["haegl"].fontLetter, AngloSaxonRune.properties["wynn"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["thorn"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["thorn"].fontLetter, AngloSaxonRune.properties["rad"].fontLetter,
                        AngloSaxonRune.properties["ur"].fontLetter, AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["haegl"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["cen"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["cen"].fontLetter,
                        AngloSaxonRune.properties["cen"].fontLetter, AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["newline"].fontLetter,
                        AngloSaxonRune.properties["daeg"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["thorn"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["tiw"].fontLetter,
                        AngloSaxonRune.properties["tiw"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["ing"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["sigel"].fontLetter, AngloSaxonRune.properties["ur"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["wynn"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["thorn"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["thorn"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["lagu"].fontLetter,
                        AngloSaxonRune.properties["ac"].fontLetter, AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["tiw"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["lagu"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["gyfu"].fontLetter, AngloSaxonRune.properties["haegl"].fontLetter,
                        AngloSaxonRune.properties["tiw"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["feoh"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter,
                        // durin's
                        AngloSaxonRune.properties["daeg"].fontLetter, AngloSaxonRune.properties["ur"].fontLetter,
                        AngloSaxonRune.properties["rad"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, "", AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter,
                        // day
                        AngloSaxonRune.properties["daeg"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["yr"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["newline"].fontLetter, AngloSaxonRune.properties["wynn"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["lagu"].fontLetter,
                        AngloSaxonRune.properties["lagu"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["sigel"].fontLetter, AngloSaxonRune.properties["haegl"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["ur"].fontLetter, AngloSaxonRune.properties["peord"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["thorn"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["cen"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["yr"].fontLetter, AngloSaxonRune.properties["haegl"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["lagu"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["period"].fontLetter ],
            };

            if (Object.freeze)
            {
                Object.freeze(AngloSaxonExample7);
            }

            return AngloSaxonExample7;
        });
