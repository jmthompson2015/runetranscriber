/*
 * <a href="http://ring-lord.tripod.com/cirth/ex_lotr.htm">From the title page, upper inscription, Lord of the Rings</a>
 */
define(
        [ "CerthRune" ],
        function(CerthRune)
        {
            "use strict";
            var CirthEreborExample1 =
            {
                NAME: "Cirth Erebor Example 1",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/lordoftherings/TLOTR_TitlePage1.jpg",

                LANGUAGE_STRING: "the lord of the rings translated from the red book",

                LANGUAGE_WORDS: [ "the", " ", "lord", " ", "of", " ", "the", " ", "rings", " ", "translated", " ",
                        "from", " ", "the", " ", "red", " ", "book" ],

                PHONEMES: [ CerthRune.properties["c11"].phoneme, CerthRune.properties["c55"].phoneme,
                        CerthRune.properties["space"].phoneme, CerthRune.properties["c31"].phoneme,
                        CerthRune.properties["c50"].phoneme, CerthRune.properties["c12"].phoneme,
                        CerthRune.properties["c9"].phoneme, CerthRune.properties["space"].phoneme,
                        CerthRune.properties["c50"].phoneme, CerthRune.properties["c4"].phoneme,
                        CerthRune.properties["space"].phoneme, CerthRune.properties["c11"].phoneme,
                        CerthRune.properties["c55"].phoneme, CerthRune.properties["space"].phoneme,
                        CerthRune.properties["c12"].phoneme, CerthRune.properties["c39"].phoneme,
                        CerthRune.properties["c36"].phoneme, CerthRune.properties["c34"].phoneme,
                        CerthRune.properties["space"].phoneme, CerthRune.properties["c8"].phoneme,
                        CerthRune.properties["c12"].phoneme, CerthRune.properties["c48"].phoneme,
                        CerthRune.properties["c53"].phoneme, CerthRune.properties["c34"].phoneme,
                        CerthRune.properties["c31"].phoneme, CerthRune.properties["c48"].phoneme,
                        CerthRune.properties["c8"].phoneme, CerthRune.properties["c55"].phoneme,
                        CerthRune.properties["c9"].phoneme, CerthRune.properties["space"].phoneme,
                        CerthRune.properties["c3"].phoneme, CerthRune.properties["c12"].phoneme,
                        CerthRune.properties["c50"].phoneme, CerthRune.properties["c6"].phoneme,
                        CerthRune.properties["space"].phoneme, CerthRune.properties["c11"].phoneme,
                        CerthRune.properties["c55"].phoneme, CerthRune.properties["space"].phoneme,
                        CerthRune.properties["c12"].phoneme, CerthRune.properties["c46"].phoneme,
                        CerthRune.properties["c9"].phoneme, CerthRune.properties["space"].phoneme,
                        CerthRune.properties["c2"].phoneme, CerthRune.properties["c51"].phoneme,
                        CerthRune.properties["c18"].phoneme ],

                RUNES: [
                // the
                CerthRune.C11, CerthRune.C55, CerthRune.SPACE,
                // lord
                CerthRune.C31, CerthRune.C50, CerthRune.C12, CerthRune.C9, CerthRune.SPACE,
                // of
                CerthRune.C50, CerthRune.C4, CerthRune.SPACE,
                // the
                CerthRune.C11, CerthRune.C55, CerthRune.SPACE,
                // rings
                CerthRune.C12, CerthRune.C39, CerthRune.C36, CerthRune.C35, CerthRune.SPACE,
                // translated
                CerthRune.C8, CerthRune.C12, CerthRune.C48, CerthRune.C22, CerthRune.C35, CerthRune.C31, CerthRune.C48,
                        CerthRune.C8, CerthRune.C55, CerthRune.C9, CerthRune.SPACE,
                        // from
                        CerthRune.C3, CerthRune.C12, CerthRune.C50, CerthRune.C6, CerthRune.SPACE,
                        // the
                        CerthRune.C11, CerthRune.C55, CerthRune.SPACE,
                        // red
                        CerthRune.C12, CerthRune.C46, CerthRune.C9, CerthRune.SPACE,
                        // book
                        CerthRune.C2, CerthRune.C51, CerthRune.C18, ],

                FONT_LETTERS: [ CerthRune.properties["c11"].fontLetter, CerthRune.properties["c55"].fontLetter,
                        CerthRune.properties["space"].fontLetter, CerthRune.properties["c31"].fontLetter,
                        CerthRune.properties["c50"].fontLetter, CerthRune.properties["c12"].fontLetter,
                        CerthRune.properties["c9"].fontLetter, CerthRune.properties["space"].fontLetter,
                        CerthRune.properties["c50"].fontLetter, CerthRune.properties["c4"].fontLetter,
                        CerthRune.properties["space"].fontLetter, CerthRune.properties["c11"].fontLetter,
                        CerthRune.properties["c55"].fontLetter, CerthRune.properties["space"].fontLetter,
                        CerthRune.properties["c12"].fontLetter, CerthRune.properties["c39"].fontLetter,
                        CerthRune.properties["c36"].fontLetter, CerthRune.properties["c34"].fontLetter,
                        CerthRune.properties["space"].fontLetter, CerthRune.properties["c8"].fontLetter,
                        CerthRune.properties["c12"].fontLetter, CerthRune.properties["c48"].fontLetter,
                        CerthRune.properties["c53"].fontLetter, CerthRune.properties["c34"].fontLetter,
                        CerthRune.properties["c31"].fontLetter, CerthRune.properties["c48"].fontLetter,
                        CerthRune.properties["c8"].fontLetter, CerthRune.properties["c55"].fontLetter,
                        CerthRune.properties["c9"].fontLetter, CerthRune.properties["space"].fontLetter,
                        CerthRune.properties["c3"].fontLetter, CerthRune.properties["c12"].fontLetter,
                        CerthRune.properties["c50"].fontLetter, CerthRune.properties["c6"].fontLetter,
                        CerthRune.properties["space"].fontLetter, CerthRune.properties["c11"].fontLetter,
                        CerthRune.properties["c55"].fontLetter, CerthRune.properties["space"].fontLetter,
                        CerthRune.properties["c12"].fontLetter, CerthRune.properties["c46"].fontLetter,
                        CerthRune.properties["c9"].fontLetter, CerthRune.properties["space"].fontLetter,
                        CerthRune.properties["c2"].fontLetter, CerthRune.properties["c51"].fontLetter,
                        CerthRune.properties["c18"].fontLetter ],
            };

            if (Object.freeze)
            {
                Object.freeze(CirthEreborExample1);
            }

            return CirthEreborExample1;
        });
