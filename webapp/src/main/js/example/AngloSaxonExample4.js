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

                LANGUAGE_LETTERS: "Stand by the grey st\none when the thrush kn\nocks and the setting s\nun with the last light \nof Durin's Day will sh\nine upon the keyhole. \nTh.",

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
                        // durins
                        AngloSaxonRune.DAEG, AngloSaxonRune.UR, AngloSaxonRune.RAD, AngloSaxonRune.IS,
                        AngloSaxonRune.NYD, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
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
                        AngloSaxonRune.NEWLINE,
                        // th.
                        AngloSaxonRune.THORN, AngloSaxonRune.PERIOD, ],
            }

            if (Object.freeze)
            {
                Object.freeze(AngloSaxonExample4)
            };

            return AngloSaxonExample4;
        });
