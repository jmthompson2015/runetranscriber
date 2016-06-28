/*
 * Provides an example for Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Lord_of_the_Rings">The Lord of the
 * Rings</a>, title page bottom
 */
define(
        [ "TengwaRune" ],
        function(TengwaRune)
        {
            "use strict";
            var TengwarExampleTLOTR2 =
            {
                NAME: "Tengwar Example TLOTR2",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/lordoftherings/TLOTR_TitlePage2.jpg",

                LANGUAGE_STRING: "of Westmarch by John Ronald Reuel Tolkien. Herein is set forth\n"
                        + "the history of the War of the Ring and the Return of the King as seen by the hobbits.",

                LANGUAGE_WORDS: [ "of", " ", "westmarch", " ", "by", " ", "john", " ", "ronald", " ", "reuel", " ",
                        "tolkien", ".", "herein", " ", "is", " ", "set", " ", "forth", "\n", "the", " ", "history",
                        " ", "of the", " ", "war", " ", "of the", " ", "ring", " ", "and", " ", "the", " ", "return",
                        " ", "of the", " ", "king", " ", "as", " ", "seen", " ", "by", " ", "the", " ", "hobbits", "." ],

                PHONEMES: [ "of", " ", "w", [ "i", "s" ], "t", "m", [ "a", "r" ], "ch", " ", "b", "y", " ", "j", "h",
                        [ "o", "n" ], " ", "r", [ "o", "n" ], [ "a", "l" ], "d", " ", "r", "i", "u", [ "i", "l" ], " ",
                        "t", [ "o", "l" ], "k", "e", [ "i", "n" ], ".", "h", [ "i", "r", "e" ], [ "e", "n" ], " ",
                        [ "i", "z" ], " ", "s", [ "i", "t" ], " ", "f", [ "o", "r" ], "th", "\n", "the", " ", "h",
                        [ "i", "s" ], "t", [ "o", "r" ], "y", " ", "of the", " ", "w", [ "o", "r" ], " ", "of the",
                        " ", "r", [ "e", "ng" ], " ", "and", " ", "the", " ", "r", [ "e", "t" ], [ "u", "r" ], "n",
                        " ", "of the", " ", "k", [ "e", "ng" ], " ", [ "a", "z" ], " ", "s", "e", "e", "n", " ", "b",
                        "y", " ", "the", " ", "h", [ "o", "b", "b" ], [ "e", "t" ], "s", "." ],

                RUNES: [
                // Line 1
                // of
                TengwaRune.OF, TengwaRune.SPACE,
                // westmarch
                TengwaRune.VALA, [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.TINCO, TengwaRune.MALTA,
                        [ TengwaRune.THREE_DOTS, TengwaRune.ORE ], TengwaRune.CALMA, TengwaRune.SPACE,
                        // by
                        TengwaRune.UMBAR, [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ], TengwaRune.SPACE,
                        // john
                        TengwaRune.ANGA, TengwaRune.HYARMEN, [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ],
                        TengwaRune.SPACE,
                        // ronald
                        TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ],
                        [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ], TengwaRune.ANDO, TengwaRune.SPACE,
                        // rueul
                        TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ],
                        [ TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER ], [ TengwaRune.ACUTE, TengwaRune.LAMBE ],
                        TengwaRune.SPACE,
                        // tolkien.
                        TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ], TengwaRune.QUESSE,
                        [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ], [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
                        TengwaRune.PERIOD,
                        // herein
                        TengwaRune.HYARMEN, [ TengwaRune.ACUTE, TengwaRune.ROMEN, TengwaRune.UNDER_DOT ],
                        [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // is
                        [ TengwaRune.ACUTE, TengwaRune.ESSE ], TengwaRune.SPACE,
                        // set
                        TengwaRune.SILME, [ TengwaRune.ACUTE, TengwaRune.TINCO ], TengwaRune.SPACE,
                        // forth
                        TengwaRune.FORMEN, [ TengwaRune.LEFT_CURL, TengwaRune.ORE ], TengwaRune.THULE,
                        TengwaRune.NEWLINE,

                        // Line 2
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // history
                        TengwaRune.HYARMEN, [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.TINCO,
                        [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ], [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ],
                        TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // war
                        TengwaRune.VALA, [ TengwaRune.LEFT_CURL, TengwaRune.ORE ], TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // ring
                        TengwaRune.ROMEN, [ TengwaRune.DOT, TengwaRune.NGWALME ], TengwaRune.SPACE,
                        // and
                        [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // return
                        TengwaRune.ROMEN, [ TengwaRune.DOT, TengwaRune.TINCO ],
                        [ TengwaRune.TOP_CURL, TengwaRune.ORE ], TengwaRune.NUMEN, TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // king
                        TengwaRune.QUESSE, [ TengwaRune.DOT, TengwaRune.NGWALME ], TengwaRune.SPACE,
                        // as
                        [ TengwaRune.THREE_DOTS, TengwaRune.ESSE_NUQUERNA ], TengwaRune.SPACE,
                        // seen
                        TengwaRune.SILME, [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ],
                        [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ], TengwaRune.NUMEN, TengwaRune.SPACE,
                        // by
                        TengwaRune.UMBAR, [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // hobbits.
                        TengwaRune.HYARMEN, [ TengwaRune.LEFT_CURL, TengwaRune.UMBAR, TengwaRune.UNDER_BAR ],
                        [ TengwaRune.DOT, TengwaRune.TINCO ], TengwaRune.SILME, TengwaRune.PERIOD, ],

                FONT_LETTERS: [ "W", " ", "y", [ "8", "R" ], "1", "t", [ "6", "D" ], "a", " ", "w", [ "~", "R" ], " ",
                        "s", "9", [ "5", "Y" ], " ", "7", [ "5", "Y" ], [ "j", "D" ], "2", " ", "7", [ "`", "R" ],
                        [ "`", "&#225;" ], [ "j", "R" ], " ", "1", [ "j", "Y" ], "z", [ "`", "T" ], [ "5", "R" ], "-",
                        "9", [ "7", "R", "&#201;" ], [ "5", "T" ], " ", [ "k", "R" ], " ", "8", [ "1", "R" ], " ", "e",
                        [ "6", "Y" ], "3", "@", " ", "9", [ "8", "R" ], "1", [ "7", "Y" ], [ "~", "R" ], " ", "W?",
                        " ", "y", [ "6", "Y" ], " ", "W?", " ", "7", [ "b", "T" ], " ", [ "2", "{" ], " ", "@", " ",
                        "7", [ "1", "T" ], [ "6", "J" ], "5", " ", "W?", " ", "z", [ "b", "T" ], " ", [ ",", "D" ],
                        " ", "8", [ "`", "T" ], [ "`", "T" ], "5", " ", "w", [ "~", "R" ], " ", "@", " ", "9",
                        [ "w", "Y", "&#237;" ], [ "1", "T" ], "8", "-" ],
            };

            if (Object.freeze)
            {
                Object.freeze(TengwarExampleTLOTR2);
            }

            return TengwarExampleTLOTR2;
        });
