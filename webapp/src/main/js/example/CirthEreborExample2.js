/*
 * <a href="http://ring-lord.tripod.com/cirth/ex_moria2.htm">Balin's tomb, lower inscription</a>
 */
define(
        [ "CerthRune" ],
        function(CerthRune)
        {
            "use strict";
            var CirthEreborExample2 =
            {
                NAME: "Cirth Erebor Example 2",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/lordoftherings/TLOTR_BalinsTomb_CirthErebor.jpg",

                LANGUAGE_STRING: "balin son of fundin lord of moria",

                LANGUAGE_WORDS: [ "balin", " ", "son", " ", "of", " ", "fundin", " ", "lord", " ", "of", " ", "moria" ],

                PHONEMES: [ CerthRune.properties["c2"].phoneme, CerthRune.properties["c48"].phoneme,
                        CerthRune.properties["c31"].phoneme, CerthRune.properties["c39"].phoneme,
                        CerthRune.properties["c53"].phoneme, CerthRune.properties["space"].phoneme,
                        CerthRune.properties["c34"].phoneme, CerthRune.properties["c56"].phoneme,
                        CerthRune.properties["c53"].phoneme, CerthRune.properties["space"].phoneme,
                        CerthRune.properties["c50"].phoneme, CerthRune.properties["c4"].phoneme,
                        CerthRune.properties["space"].phoneme, CerthRune.properties["c3"].phoneme,
                        CerthRune.properties["c42"].phoneme, CerthRune.properties["c33"].phoneme,
                        CerthRune.properties["c39"].phoneme, CerthRune.properties["c53"].phoneme,
                        CerthRune.properties["space"].phoneme, CerthRune.properties["c31"].phoneme,
                        CerthRune.properties["c50"].phoneme, CerthRune.properties["c12"].phoneme,
                        CerthRune.properties["c9"].phoneme, CerthRune.properties["space"].phoneme,
                        CerthRune.properties["c50"].phoneme, CerthRune.properties["c4"].phoneme,
                        CerthRune.properties["space"].phoneme, CerthRune.properties["c6"].phoneme,
                        CerthRune.properties["c50"].phoneme, CerthRune.properties["c12"].phoneme,
                        CerthRune.properties["c39"].phoneme, CerthRune.properties["c48"].phoneme ],

                RUNES: [
                // balin
                CerthRune.C2, CerthRune.C48, CerthRune.C31, CerthRune.C39, CerthRune.C22, CerthRune.SPACE,
                // son
                CerthRune.C35, CerthRune.C56, CerthRune.C22, CerthRune.SPACE,
                // of
                CerthRune.C50, CerthRune.C4, CerthRune.SPACE,
                // fundin
                CerthRune.C3, CerthRune.C42, CerthRune.C33, CerthRune.C39, CerthRune.C22, CerthRune.SPACE,
                // lord
                CerthRune.C31, CerthRune.C50, CerthRune.C12, CerthRune.C9, CerthRune.SPACE,
                // of
                CerthRune.C50, CerthRune.C4, CerthRune.SPACE,
                // moria
                CerthRune.C6, CerthRune.C50, CerthRune.C12, CerthRune.C39, CerthRune.C48, ],

                FONT_LETTERS: [
                // balin
                CerthRune.properties["c2"].fontLetter, CerthRune.properties["c48"].fontLetter,
                        CerthRune.properties["c31"].fontLetter, CerthRune.properties["c39"].fontLetter,
                        CerthRune.properties["c22"].fontLetter, CerthRune.properties["space"].fontLetter,
                        // son
                        CerthRune.properties["c35"].fontLetter, CerthRune.properties["c56"].fontLetter,
                        CerthRune.properties["c22"].fontLetter, CerthRune.properties["space"].fontLetter,
                        // of
                        CerthRune.properties["c50"].fontLetter, CerthRune.properties["c4"].fontLetter,
                        CerthRune.properties["space"].fontLetter,
                        // fundin
                        CerthRune.properties["c3"].fontLetter, CerthRune.properties["c42"].fontLetter,
                        CerthRune.properties["c33"].fontLetter, CerthRune.properties["c39"].fontLetter,
                        CerthRune.properties["c22"].fontLetter, CerthRune.properties["space"].fontLetter,
                        // lord
                        CerthRune.properties["c31"].fontLetter, CerthRune.properties["c50"].fontLetter,
                        CerthRune.properties["c12"].fontLetter, CerthRune.properties["c9"].fontLetter,
                        CerthRune.properties["space"].fontLetter,
                        // of
                        CerthRune.properties["c50"].fontLetter, CerthRune.properties["c4"].fontLetter,
                        CerthRune.properties["space"].fontLetter,
                        // moria
                        CerthRune.properties["c6"].fontLetter, CerthRune.properties["c50"].fontLetter,
                        CerthRune.properties["c12"].fontLetter, CerthRune.properties["c39"].fontLetter,
                        CerthRune.properties["c48"].fontLetter ],
            };

            if (Object.freeze)
            {
                Object.freeze(CirthEreborExample2);
            }

            return CirthEreborExample2;
        });
