/*
 * Provides an example for Tengwar runes from <a href="http://lotr.wikia.com/wiki/Unfinished_Tales">Unfinished Tales of Numenor and Middle-Earth</a>.
 */
define(
        [ "TengwaRune" ],
        function(TengwaRune)
        {
            "use strict";
            var TengwarExampleUTONAME1 =
            {
                NAME: "Tengwar Example UTONAME1",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/unfinishedtales/UTONAME_TitlePage1.jpg",

                LANGUAGE_STRING: "In this book of Unfinished Tales by John Ronald Reuel Tolkien\n"
                        + "which was brought together by Christopher Reuel Tolkien his son",

                LANGUAGE_WORDS: [ "in", " ", "this", " ", "book", " ", "of", " ", "unfinished", " ", "tales", " ",
                        "by", " ", "john", " ", "ronald", " ", "reuel", " ", "tolkien", "\n", "which", " ", "was", " ",
                        "brought", " ", "together", " ", "by", " ", "christopher", " ", "reuel", " ", "tolkien", " ",
                        "his", " ", "son" ],

                PHONEMES: [ [ "i", "n" ], " ", "th", [ "i", "s" ], " ", "b", "oo", "k", " ", "of", " ", [ "u", "n" ],
                        "f", [ "i", "n" ], [ "i", "sh" ], [ "e", "d" ], " ", "t", [ "a", "l", "e" ], "s", " ", "b",
                        "y", " ", "j", "o", "h", "n", " ", "r", [ "o", "n" ], [ "a", "l" ], "d", " ", "r", "e", "u",
                        [ "e", "l" ], " ", "t", [ "o", "l" ], "k", "i", [ "e", "n" ], "\n", "wh", [ "i", "ch" ], " ",
                        [ "w", "a" ], "s", " ", "b", "r", [ "o", "u" ], "gh", "t", " ", "t", [ "o", "g" ],
                        [ "e", "th" ], [ "e", "r" ], " ", "b", "y", " ", "k", "r", [ "i", "s" ], "t", [ "o", "f" ],
                        [ "e", "r" ], " ", "r", "e", "u", [ "e", "l" ], " ", "t", [ "o", "l" ], "k", "i", [ "e", "n" ],
                        " ", "h", [ "i", "s" ], " ", "s", [ "o", "n" ] ],

                RUNES: [
                // Line 1
                // in
                [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                // this
                TengwaRune.ANTO, [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.SPACE,
                // book
                TengwaRune.UMBAR, [ TengwaRune.LEFT_CURL, TengwaRune.LONG_CARRIER ], TengwaRune.QUESSE,
                        TengwaRune.SPACE,
                        // of
                        TengwaRune.OF, TengwaRune.SPACE,
                        // unfinished
                        [ TengwaRune.RIGHT_CURL, TengwaRune.NUMEN ], TengwaRune.FORMEN,
                        [ TengwaRune.ACUTE, TengwaRune.NUMEN ], [ TengwaRune.ACUTE, TengwaRune.HARMA ],
                        [ TengwaRune.DOT, TengwaRune.ANDO ], TengwaRune.SPACE,
                        // tales
                        TengwaRune.TINCO, [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE, TengwaRune.UNDER_DOT ],
                        TengwaRune.SILME, TengwaRune.SPACE,
                        // by
                        TengwaRune.UMBAR, TengwaRune.ANNA, TengwaRune.SPACE,
                        // john
                        TengwaRune.ANGA, [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ], TengwaRune.HYARMEN,
                        TengwaRune.NUMEN, TengwaRune.SPACE,
                        // ronald
                        TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ],
                        [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ], TengwaRune.ANDO, TengwaRune.SPACE,
                        // reuel
                        TengwaRune.ROMEN, [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ],
                        [ TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER ], [ TengwaRune.DOT, TengwaRune.LAMBE ],
                        TengwaRune.SPACE,
                        // tolkien
                        TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ], TengwaRune.QUESSE,
                        [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ], [ TengwaRune.DOT, TengwaRune.NUMEN ],
                        TengwaRune.NEWLINE,

                        // Line 2
                        // which
                        TengwaRune.HWESTA_SINDARINWA, [ TengwaRune.ACUTE, TengwaRune.CALMA ], TengwaRune.SPACE,
                        // was
                        [ TengwaRune.VALA, TengwaRune.THREE_UNDER_DOTS ], TengwaRune.SILME, TengwaRune.SPACE,
                        // brought
                        TengwaRune.UMBAR, TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.URE ], TengwaRune.GH,
                        TengwaRune.TINCO, TengwaRune.SPACE,
                        // together
                        TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.UNGWE ],
                        [ TengwaRune.DOT, TengwaRune.ANTO ], [ TengwaRune.DOT, TengwaRune.ROMEN ], TengwaRune.SPACE,
                        // by
                        TengwaRune.UMBAR, TengwaRune.ANNA, TengwaRune.SPACE,
                        // christopher
                        TengwaRune.QUESSE, TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.TINCO,
                        [ TengwaRune.LEFT_CURL, TengwaRune.FORMEN ], [ TengwaRune.DOT, TengwaRune.ROMEN ],
                        TengwaRune.SPACE,
                        // reuel
                        TengwaRune.ROMEN, [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ],
                        [ TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER ], [ TengwaRune.DOT, TengwaRune.LAMBE ],
                        TengwaRune.SPACE,
                        // tolkien
                        TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ], TengwaRune.QUESSE,
                        [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ], [ TengwaRune.DOT, TengwaRune.NUMEN ],
                        TengwaRune.SPACE,
                        // his
                        TengwaRune.HYARMEN, [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.SPACE,
                        // son
                        TengwaRune.SILME, [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ] ],

                FONT_LETTERS: [ [ "5", "R" ], " ", "4", [ "8", "R" ], " ", "w", [ "~", "Y" ], "z", " ", "W", " ",
                        [ "5", "\u00E1" ], "e", [ "5", "R" ], [ "d", "R" ], [ "2", "T" ], " ", "1",
                        [ "j", "D", "\u00C9" ], "8", " ", "w", "h", " ", "s", [ "`", "Y" ], "9", "5", " ", "7",
                        [ "5", "Y" ], [ "j", "D" ], "2", " ", "7", [ "`", "T" ], [ "`", "\u00E1" ], [ "j", "T" ], " ",
                        "1", [ "j", "Y" ], "z", [ "`", "R" ], [ "5", "T" ], "o", [ "a", "R" ], " ", [ "y", "\u00D1" ],
                        "8", " ", "w", "7", [ ".", "Y" ], "X", "1", " ", "1", [ "x", "Y" ], [ "4", "T" ], [ "7", "T" ],
                        " ", "w", "h", " ", "z", "7", [ "8", "R" ], "1", [ "e", "Y" ], [ "7", "T" ], " ", "7",
                        [ "`", "T" ], [ "`", "\u00E1" ], [ "j", "T" ], " ", "1", [ "j", "Y" ], "z", [ "`", "R" ],
                        [ "5", "T" ], " ", "9", [ "8", "R" ], " ", "8", [ "5", "Y" ] ],
            };

            if (Object.freeze)
            {
                Object.freeze(TengwarExampleUTONAME1);
            }

            return TengwarExampleUTONAME1;
        });
