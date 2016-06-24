/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_War_of_the_Ring_(book)">The War Of The Ring</a>, title page top.
 */
define(
        [ "TengwaRune" ],
        function(TengwaRune)
        {
            "use strict";
            var TengwarExampleTWOTR1 =
            {
                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/warofthering/TWOTR_TitlePage1.jpg",

                LANGUAGE_STRING: "In the War of the Ring is traced the story of the victory at Helms Deep\n"
                        + "and the drowning of Isengard by the Ents, then is told of the",

                LANGUAGE_WORDS: [ "in", " ", "the", " ", "war", " ", "of the", " ", "ring", " ", "is", " ", "traced",
                        " ", "the", " ", "story", " ", "of the", " ", "victory", " ", "at", " ", "helms", " ", "deep",
                        "\n", "and", " ", "the", " ", "drowning", " ", "of", " ", "isengard", " ", "by", " ", "the",
                        " ", "ents", ",", "then", " ", "is", " ", "told", " ", "of the" ],

                PHONEMES: [ [ "i", "n" ], " ", "the", " ", "w", [ "a", "r" ], " ", "of the", " ", "r", [ "i", "ng" ],
                        " ", [ "i", "s" ], " ", "t", "r", [ "a", "c", "e" ], "d", " ", "the", " ", "s", "t",
                        [ "o", "r" ], "y", " ", "of the", " ", "v", [ "i", "c" ], "t", [ "o", "r" ], "y", " ",
                        [ "a", "t" ], " ", "h", [ "e", "l" ], "m", "s", " ", "d", [ "e", "e", "p" ], "\n", "and", " ",
                        "the", " ", "d", "r", [ "o", "w" ], "n", [ "i", "ng" ], " ", "of", " ", [ "i", "s" ],
                        [ "e", "n" ], "g", [ "a", "r" ], "d", " ", "b", "y", " ", "the", " ", [ "e", "n" ], "t", "s",
                        ",", "th", [ "e", "n" ], " ", [ "i", "s" ], " ", "t", [ "o", "l" ], "d", " ", "of the" ],

                RUNES: [
                // Line 1
                // in
                [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                // the
                TengwaRune.THE, TengwaRune.SPACE,
                // war
                TengwaRune.VALA, [ TengwaRune.THREE_DOTS, TengwaRune.ORE ], TengwaRune.SPACE,
                // of the
                TengwaRune.OF_THE, TengwaRune.SPACE,
                // ring
                TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SPACE,
                // is
                [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.SPACE,
                // traced
                TengwaRune.TINCO, TengwaRune.ROMEN,
                        [ TengwaRune.THREE_DOTS, TengwaRune.SILME_NUQUERNA, TengwaRune.UNDER_DOT ], TengwaRune.ANDO,
                        TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // story
                        TengwaRune.SILME, TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
                        TengwaRune.ANNA, TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // victory
                        TengwaRune.AMPA, [ TengwaRune.ACUTE, TengwaRune.SILME_NUQUERNA ], TengwaRune.TINCO,
                        [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ], TengwaRune.ANNA, TengwaRune.SPACE,
                        // at
                        [ TengwaRune.THREE_DOTS, TengwaRune.TINCO ], TengwaRune.SPACE,
                        // helms
                        TengwaRune.HYARMEN, [ TengwaRune.DOT, TengwaRune.LAMBE ], TengwaRune.MALTA, TengwaRune.SILME,
                        TengwaRune.SPACE,
                        // deep
                        TengwaRune.ANDO, [ TengwaRune.DOT, TengwaRune.DOT, TengwaRune.PARMA ], TengwaRune.NEWLINE,

                        // Line 2
                        // and
                        [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // drowning
                        TengwaRune.ANDO, TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.VALA ], TengwaRune.NUMEN,
                        [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SPACE,
                        // of
                        TengwaRune.OF, TengwaRune.SPACE,
                        // isengard
                        [ TengwaRune.ACUTE, TengwaRune.SILME ], [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.UNGWE,
                        [ TengwaRune.THREE_DOTS, TengwaRune.ORE ], TengwaRune.ANDO, TengwaRune.SPACE,
                        // by
                        TengwaRune.UMBAR, TengwaRune.ANNA, TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // ents,
                        [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.TINCO, TengwaRune.SILME, TengwaRune.COMMA,
                        // then
                        TengwaRune.ANTO, [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // is
                        [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.SPACE,
                        // told
                        TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ], TengwaRune.ANDO,
                        TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, ],

                FONT_LETTERS: [ [ "5", "R" ], " ", "@", " ", "y", [ "6", "D" ], " ", "W?", " ", "7", [ "b", "R" ], " ",
                        [ "8", "R" ], " ", "1", "7", [ "i", "D", "&#201;" ], "2", " ", "@", " ", "8", "1",
                        [ "7", "Y" ], "h", " ", "W?", " ", "r", [ "i", "R" ], "1", [ "7", "Y" ], "h", " ",
                        [ "1", "D" ], " ", "9", [ "j", "T" ], "t", "8", " ", "2", [ "q", "B", "T" ], [ "2", "{" ], " ",
                        "@", " ", "2", "7", [ "y", "Y" ], "5", [ "b", "R" ], " ", "W", " ", [ "8", "R" ], [ "5", "T" ],
                        "x", [ "6", "D" ], "2", " ", "w", "h", " ", "@", " ", [ "5", "T" ], "1", "8", "&#183;", "4",
                        [ "5", "T" ], " ", [ "8", "R" ], " ", "1", [ "j", "Y" ], "2", " ", "W?" ],
            }

            if (Object.freeze)
            {
                Object.freeze(TengwarExampleTWOTR1)
            };

            return TengwarExampleTWOTR1;
        });
