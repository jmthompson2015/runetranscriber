/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Return_of_the_Shadow">The Return Of The Shadow</a>, title page top.
 */
define(
        [ "TengwaRune" ],
        function(TengwaRune)
        {
            "use strict";
            var TengwarExampleTROTS1 =
            {
                NAME: "Tengwar Example TROTS1",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/returnoftheshadow/TROTS_TitlePage1.jpg",

                LANGUAGE_STRING: "In the Return of the Shadow are traced the first forms of the story of the Lord\n"
                        + "of the Rings. Herein the journey of the hobbit who bore the Great Ring, at first",

                LANGUAGE_WORDS: [ "in", " ", "the", " ", "return", " ", "of the", " ", "shadow", " ", "are", " ",
                        "traced", " ", "the", " ", "first", " ", "forms", " ", "of the", " ", "story", " ", "of the",
                        " ", "lord", "\n", "of the", " ", "rings", ".", "herein", " ", "the", " ", "journey", " ",
                        "of the", " ", "hobbit", " ", "who", " ", "bore", " ", "the", " ", "great", " ", "ring", ",",
                        "at", " ", "first" ],

                PHONEMES: [ [ "i", "n" ], " ", "the", " ", [ "r", "e" ], "t", [ "u", "r" ], "n", " ", "of the", " ",
                        "sh", [ "a", "d" ], [ "o", "w" ], " ", [ "a", "r", "e" ], " ", "t", "r", [ "a", "c", "e" ],
                        "d", " ", "the", " ", "f", [ "i", "r" ], "s", "t", " ", "f", [ "o", "r" ], "m", "s", " ",
                        "of the", " ", "s", "t", [ "o", "r" ], "y", " ", "of the", " ", "l", [ "o", "r" ], "d", "\n",
                        "of the", " ", "r", [ "i", "ng" ], "s", ".", "h", [ "e", "r", "e" ], [ "i", "n" ], " ", "the",
                        " ", "j", [ "o", "u" ], "r", "n", [ "e", "y" ], " ", "of the", " ", "h", [ "o", "b", "b" ],
                        [ "i", "t" ], " ", "wh", "o", " ", "b", [ "o", "r", "e" ], " ", "the", " ", "g", "r",
                        [ "e", "a" ], "t", " ", "r", [ "i", "ng" ], ",", [ "a", "t" ], " ", "f", [ "i", "r" ], "s", "t" ],

                RUNES: [
                // Line 1
                // in
                [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                // the
                TengwaRune.THE, TengwaRune.SPACE,
                // return
                [ TengwaRune.ROMEN, TengwaRune.UNDER_DOT ], TengwaRune.TINCO,
                        [ TengwaRune.RIGHT_CURL, TengwaRune.ORE ], TengwaRune.NUMEN, TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // shadow
                        TengwaRune.HARMA, [ TengwaRune.THREE_DOTS, TengwaRune.ANDO ],
                        [ TengwaRune.LEFT_CURL, TengwaRune.VALA ], TengwaRune.SPACE,
                        // are
                        [ TengwaRune.THREE_DOTS, TengwaRune.ORE, TengwaRune.UNDER_DOT ], TengwaRune.SPACE,
                        // traced
                        TengwaRune.TINCO, TengwaRune.ROMEN,
                        [ TengwaRune.THREE_DOTS, TengwaRune.SILME_NUQUERNA, TengwaRune.UNDER_DOT ], TengwaRune.ANDO,
                        TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // first
                        TengwaRune.FORMEN, [ TengwaRune.ACUTE, TengwaRune.ORE ], TengwaRune.SILME, TengwaRune.TINCO,
                        TengwaRune.SPACE,
                        // form
                        TengwaRune.FORMEN, [ TengwaRune.LEFT_CURL, TengwaRune.ORE ], TengwaRune.MALTA,
                        TengwaRune.SILME, TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // story
                        TengwaRune.SILME, TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
                        TengwaRune.ANNA, TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // lord
                        TengwaRune.LAMBE, [ TengwaRune.LEFT_CURL, TengwaRune.ORE ], TengwaRune.ANDO,
                        TengwaRune.NEWLINE,

                        // Line 2
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // rings
                        TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SILME,
                        TengwaRune.PERIOD,
                        // herein
                        TengwaRune.HYARMEN, [ TengwaRune.DOT, TengwaRune.ROMEN, TengwaRune.UNDER_DOT ],
                        [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // journey
                        TengwaRune.ANGA, [ TengwaRune.LEFT_CURL, TengwaRune.URE ], TengwaRune.ORE, TengwaRune.NUMEN,
                        [ TengwaRune.DOT, TengwaRune.ANNA ], TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // hobbit
                        TengwaRune.HYARMEN, [ TengwaRune.LEFT_CURL, TengwaRune.UMBAR, TengwaRune.UNDER_BAR ],
                        [ TengwaRune.ACUTE, TengwaRune.TINCO ], TengwaRune.SPACE,
                        // who
                        TengwaRune.HWESTA_SINDARINWA, [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ],
                        TengwaRune.SPACE,
                        // bore
                        TengwaRune.UMBAR, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN, TengwaRune.UNDER_DOT ],
                        TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // great
                        TengwaRune.UNGWE, TengwaRune.ROMEN,
                        [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER, TengwaRune.THREE_UNDER_DOTS ], TengwaRune.TINCO,
                        TengwaRune.SPACE,
                        // ring
                        TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.COMMA,
                        // at
                        [ TengwaRune.THREE_DOTS, TengwaRune.TINCO ], TengwaRune.SPACE,
                        // first
                        TengwaRune.FORMEN, [ TengwaRune.ACUTE, TengwaRune.ORE ], TengwaRune.SILME, TengwaRune.TINCO, ],

                FONT_LETTERS: [ [ "5", "R" ], " ", "@", " ", [ "7", "\u00C9" ], "1", [ "6", "\u00E1" ], "5", " ", "W?",
                        " ", "d", [ "2", "D" ], [ "y", "Y" ], " ", [ "6", "D", "\u00C9" ], " ", "1", "7",
                        [ "i", "D", "\u00C9" ], "2", " ", "@", " ", "e", [ "6", "R" ], "8", "1", " ", "e",
                        [ "6", "Y" ], "t", "8", " ", "W?", " ", "8", "1", [ "7", "Y" ], "h", " ", "W?", " ", "j",
                        [ "6", "Y" ], "2", "W?", " ", "7", [ "b", "R" ], "8", "-", "9", [ "7", "T", "\u00C9" ],
                        [ "5", "R" ], " ", "@", " ", "s", [ ".", "Y" ], "6", "5", [ "h", "T" ], " ", "W?", " ", "9",
                        [ "w", "Y", "\u00ED" ], [ "1", "R" ], " ", "o", [ "`", "Y" ], " ", "w", [ "7", "Y", "\u00C9" ],
                        " ", "@", " ", "x", "7", [ "`", "T", "\u00D1" ], "1", " ", "7", [ "b", "R" ], "\u00B7",
                        [ "1", "D" ], " ", "e", [ "6", "R" ], "8", "1" ],
            };

            if (Object.freeze)
            {
                Object.freeze(TengwarExampleTROTS1);
            }

            return TengwarExampleTROTS1;
        });
