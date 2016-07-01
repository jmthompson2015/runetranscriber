/*
 * Provides an example for Anglo-Saxon runes from The Hobbit, Thror's Map #3.
 */
define(
        [ "AngloSaxonRune" ],
        function(AngloSaxonRune)
        {
            "use strict";
            var AngloSaxonExample4 =
            {
                NAME: "Anglo-Saxon Example 4",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/hobbit/TheHobbit_ThrorsMap3.jpg",

                LANGUAGE_STRING: "Stand by the grey st\none when the thrush kn\nocks and the setting s\nun with the last light \nof Durin's Day will sh\nine upon the keyhole. \nTh.",

                LANGUAGE_WORDS: [ "stand", " ", "by", " ", "the", " ", "grey", " ", "st", "\n", "one", " ", "when",
                        " ", "the", " ", "thrush", " ", "kn", "\n", "ocks", " ", "and", " ", "the", " ", "setting",
                        " ", "s", "\n", "un", " ", "with", " ", "the", " ", "last", " ", "light", " ", "\n", "of", " ",
                        "durin", "'", "s", " ", "day", " ", "will", " ", "sh", "\n", "ine", " ", "upon", " ", "the",
                        " ", "keyhole", ".", " ", "\n", "th", "." ],

                PHONEMES: [
                // stand
                AngloSaxonRune.properties["sigel"].phoneme, AngloSaxonRune.properties["tiw"].phoneme,
                        AngloSaxonRune.properties["aesc"].phoneme, "n", AngloSaxonRune.properties["daeg"].phoneme, " ",
                        // by
                        AngloSaxonRune.properties["beorc"].phoneme, "y", " ",
                        // the
                        "th", "e", " ",
                        // grey
                        AngloSaxonRune.properties["gyfu"].phoneme, AngloSaxonRune.properties["rad"].phoneme, "e", "y",
                        " ",
                        // stone
                        AngloSaxonRune.properties["sigel"].phoneme, AngloSaxonRune.properties["tiw"].phoneme, "\n",
                        "o", "n", "e", " ",
                        // when
                        "w", "h", "e", "n", " ",
                        // the
                        "th", "e", " ",
                        // thrush
                        "th", AngloSaxonRune.properties["rad"].phoneme, AngloSaxonRune.properties["ur"].phoneme,
                        AngloSaxonRune.properties["sigel"].phoneme, "h", " ",
                        // knocks
                        "k", "n", "\n", "o", "k", "k", AngloSaxonRune.properties["sigel"].phoneme, " ",
                        // and
                        AngloSaxonRune.properties["aesc"].phoneme, "n", AngloSaxonRune.properties["daeg"].phoneme, " ",
                        // the
                        "th", "e", " ",
                        // setting
                        AngloSaxonRune.properties["sigel"].phoneme, "e", AngloSaxonRune.properties["tiw"].phoneme,
                        AngloSaxonRune.properties["tiw"].phoneme, AngloSaxonRune.properties["is"].phoneme,
                        AngloSaxonRune.properties["ing"].phoneme, " ",
                        // sun
                        AngloSaxonRune.properties["sigel"].phoneme, "\n", AngloSaxonRune.properties["ur"].phoneme, "n",
                        " ",
                        // with
                        AngloSaxonRune.properties["wynn"].phoneme, AngloSaxonRune.properties["is"].phoneme, "th", " ",
                        // the
                        "th", "e", " ",
                        // last
                        "l", AngloSaxonRune.properties["ac"].phoneme, AngloSaxonRune.properties["sigel"].phoneme,
                        AngloSaxonRune.properties["tiw"].phoneme, " ",
                        // light
                        "l", AngloSaxonRune.properties["is"].phoneme, AngloSaxonRune.properties["gyfu"].phoneme, "h",
                        AngloSaxonRune.properties["tiw"].phoneme, " ", "\n",
                        // of
                        "o", AngloSaxonRune.properties["feoh"].phoneme, " ",
                        // durin's
                        AngloSaxonRune.properties["daeg"].phoneme, AngloSaxonRune.properties["ur"].phoneme,
                        AngloSaxonRune.properties["rad"].phoneme, AngloSaxonRune.properties["is"].phoneme, "n", "'",
                        AngloSaxonRune.properties["sigel"].phoneme, " ",
                        // day
                        AngloSaxonRune.properties["daeg"].phoneme, AngloSaxonRune.properties["aesc"].phoneme, "y", " ",
                        // will
                        AngloSaxonRune.properties["wynn"].phoneme, AngloSaxonRune.properties["is"].phoneme, "l", "l",
                        " ",
                        // shine
                        AngloSaxonRune.properties["sigel"].phoneme, "h", "\n", AngloSaxonRune.properties["is"].phoneme,
                        "n", "e", " ",
                        // upon
                        AngloSaxonRune.properties["ur"].phoneme, AngloSaxonRune.properties["peord"].phoneme, "o", "n",
                        " ",
                        // the
                        "th", "e", " ",
                        // keyhole.
                        "k", "e", "y", "h", "o", "l", "e", ".", " ", "\n",
                        // th.
                        "th", "." ],

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
                        AngloSaxonRune.SIGEL, AngloSaxonRune.TIW, AngloSaxonRune.NEWLINE, AngloSaxonRune.OS,
                        AngloSaxonRune.NYD, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // hwen (when)
                        AngloSaxonRune.HAEGL, AngloSaxonRune.WYNN, AngloSaxonRune.EH, AngloSaxonRune.NYD,
                        AngloSaxonRune.SPACE,
                        // the
                        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // thrush
                        AngloSaxonRune.THORN, AngloSaxonRune.RAD, AngloSaxonRune.UR, AngloSaxonRune.SIGEL,
                        AngloSaxonRune.HAEGL, AngloSaxonRune.SPACE,
                        // knocks
                        AngloSaxonRune.CEN, AngloSaxonRune.NYD, AngloSaxonRune.NEWLINE, AngloSaxonRune.OS,
                        AngloSaxonRune.CEN, AngloSaxonRune.CEN, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                        // and
                        AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                        // the
                        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // setting
                        AngloSaxonRune.SIGEL, AngloSaxonRune.EH, AngloSaxonRune.TIW, AngloSaxonRune.TIW,
                        AngloSaxonRune.IS, AngloSaxonRune.ING, AngloSaxonRune.SPACE,
                        // sun
                        AngloSaxonRune.SIGEL, AngloSaxonRune.NEWLINE, AngloSaxonRune.UR, AngloSaxonRune.NYD,
                        AngloSaxonRune.SPACE,
                        // with
                        AngloSaxonRune.WYNN, AngloSaxonRune.IS, AngloSaxonRune.THORN, AngloSaxonRune.SPACE,
                        // the
                        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // last
                        AngloSaxonRune.LAGU, AngloSaxonRune.AC, AngloSaxonRune.SIGEL, AngloSaxonRune.TIW,
                        AngloSaxonRune.SPACE,
                        // light
                        AngloSaxonRune.LAGU, AngloSaxonRune.IS, AngloSaxonRune.GYFU, AngloSaxonRune.HAEGL,
                        AngloSaxonRune.TIW, AngloSaxonRune.SPACE, AngloSaxonRune.NEWLINE,
                        // of
                        AngloSaxonRune.OS, AngloSaxonRune.FEOH, AngloSaxonRune.SPACE,
                        // durin's
                        AngloSaxonRune.DAEG, AngloSaxonRune.UR, AngloSaxonRune.RAD, AngloSaxonRune.IS,
                        AngloSaxonRune.NYD, AngloSaxonRune.APOSTROPHE, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                        // day
                        AngloSaxonRune.DAEG, AngloSaxonRune.AESC, AngloSaxonRune.YR, AngloSaxonRune.SPACE,
                        // will
                        AngloSaxonRune.WYNN, AngloSaxonRune.IS, AngloSaxonRune.LAGU, AngloSaxonRune.LAGU,
                        AngloSaxonRune.SPACE,
                        // shine
                        AngloSaxonRune.SIGEL, AngloSaxonRune.HAEGL, AngloSaxonRune.NEWLINE, AngloSaxonRune.IS,
                        AngloSaxonRune.NYD, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // upon
                        AngloSaxonRune.UR, AngloSaxonRune.PEORD, AngloSaxonRune.OS, AngloSaxonRune.NYD,
                        AngloSaxonRune.SPACE,
                        // the
                        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                        // keyhole.
                        AngloSaxonRune.CEN, AngloSaxonRune.EH, AngloSaxonRune.YR, AngloSaxonRune.HAEGL,
                        AngloSaxonRune.OS, AngloSaxonRune.LAGU, AngloSaxonRune.EH, AngloSaxonRune.PERIOD,
                        AngloSaxonRune.SPACE, AngloSaxonRune.NEWLINE,
                        // th.
                        AngloSaxonRune.THORN, AngloSaxonRune.PERIOD, ],

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
                        AngloSaxonRune.properties["newline"].fontLetter, AngloSaxonRune.properties["os"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["haegl"].fontLetter,
                        AngloSaxonRune.properties["wynn"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["thorn"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["thorn"].fontLetter,
                        AngloSaxonRune.properties["rad"].fontLetter, AngloSaxonRune.properties["ur"].fontLetter,
                        AngloSaxonRune.properties["sigel"].fontLetter, AngloSaxonRune.properties["haegl"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["cen"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["newline"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["cen"].fontLetter,
                        AngloSaxonRune.properties["cen"].fontLetter, AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["daeg"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["thorn"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["sigel"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["tiw"].fontLetter, AngloSaxonRune.properties["tiw"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["ing"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["newline"].fontLetter, AngloSaxonRune.properties["ur"].fontLetter,
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
                        AngloSaxonRune.properties["newline"].fontLetter, AngloSaxonRune.properties["os"].fontLetter,
                        AngloSaxonRune.properties["feoh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        // durin's
                        AngloSaxonRune.properties["daeg"].fontLetter, AngloSaxonRune.properties["ur"].fontLetter,
                        AngloSaxonRune.properties["rad"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, "", AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter,
                        // day
                        AngloSaxonRune.properties["daeg"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["yr"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["wynn"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["lagu"].fontLetter, AngloSaxonRune.properties["lagu"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["haegl"].fontLetter, AngloSaxonRune.properties["newline"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["ur"].fontLetter, AngloSaxonRune.properties["peord"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["thorn"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["cen"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["yr"].fontLetter, AngloSaxonRune.properties["haegl"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["lagu"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["period"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["newline"].fontLetter,
                        AngloSaxonRune.properties["thorn"].fontLetter, AngloSaxonRune.properties["period"].fontLetter ],
            };

            if (Object.freeze)
            {
                Object.freeze(AngloSaxonExample4);
            }

            return AngloSaxonExample4;
        });
