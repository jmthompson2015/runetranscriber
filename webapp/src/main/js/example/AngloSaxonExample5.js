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

                LANGUAGE_LETTERS: "The hobbit\nor\nthere and back again",

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
            };

            if (Object.freeze)
            {
                Object.freeze(AngloSaxonExample5);
            }

            return AngloSaxonExample5;
        });
