/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Silmarillion">The Silmarillion</a>, title page bottom.
 */
define(
        [ "TengwaRune" ],
        function(TengwaRune)
        {
            "use strict";
            var TengwarExampleTS2 =
            {
                NAME: "Tengwar Example TS2",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/silmarillion/TheSilmarillion_TitlePage2.png",

                LANGUAGE_STRING: "To which are appended the Downfall of Numenor and the history of the\n"
                        + "Rings of Power and the Third Age in which these tales come to their end.",

                LANGUAGE_WORDS: [ "to", " ", "which", " ", "are", " ", "appended", " ", "the", " ", "downfall", " ",
                        "of", " ", "numenor", " ", "and", " ", "the", " ", "history", " ", "of the", "\n", "rings",
                        " ", "of", " ", "power", " ", "and", " ", "the", " ", "third", " ", "age", " ", "in", " ",
                        "which", " ", "these", " ", "tales", " ", "come", " ", "to", " ", "their", " ", "end", "." ],

                PHONEMES: [ [ "t", "o" ], " ", "wh", [ "i", "ch" ], " ", [ "a", "r", "e" ], " ", [ "a", "p", "p" ],
                        [ "e", "n" ], "d", [ "e", "d" ], " ", "the", " ", "d", [ "o", "w" ], "n", "f",
                        [ "a", "l", "l" ], " ", "of", " ", "n", [ "u", "m" ], [ "e", "n" ], [ "o", "r" ], " ", "and",
                        " ", "the", " ", "h", [ "i", "s" ], "t", [ "o", "r" ], "y", " ", "of the", "\n", "r",
                        [ "i", "ng" ], "s", " ", "of", " ", "p", [ "o", "w" ], "r", " ", "and", " ", "the", " ", "th",
                        [ "i", "r" ], "d", " ", [ "a", "j", "e" ], " ", [ "i", "n" ], " ", "wh", [ "i", "ch" ], " ",
                        "th", [ "e", "s", "e" ], " ", "t", [ "a", "l", "e" ], "s", " ", "k", [ "o", "m", "e" ], " ",
                        [ "t", "o" ], " ", "th", [ "e", "i" ], "r", " ", [ "e", "n" ], "d", "." ],

                RUNES: [
                // Line 1
                // to
                [ TengwaRune.TINCO, TengwaRune.LEFT_UNDER_CURL ], TengwaRune.SPACE,
                // which
                TengwaRune.HWESTA_SINDARINWA, [ TengwaRune.ACUTE, TengwaRune.CALMA ], TengwaRune.SPACE,
                // are
                [ TengwaRune.THREE_DOTS, TengwaRune.ORE, TengwaRune.UNDER_DOT ], TengwaRune.SPACE,
                // appended
                [ TengwaRune.THREE_DOTS, TengwaRune.PARMA, TengwaRune.UNDER_BAR ],
                        [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.ANDO, [ TengwaRune.DOT, TengwaRune.ANDO ],
                        TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // downfall
                        TengwaRune.ANDO, [ TengwaRune.LEFT_CURL, TengwaRune.VALA ], TengwaRune.NUMEN,
                        TengwaRune.FORMEN, [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
                        TengwaRune.SPACE,
                        // of
                        TengwaRune.OF, TengwaRune.SPACE,
                        // numenor
                        TengwaRune.NUMEN, [ TengwaRune.RIGHT_CURL, TengwaRune.MALTA ],
                        [ TengwaRune.DOT, TengwaRune.NUMEN ], [ TengwaRune.LEFT_CURL, TengwaRune.ORE ],
                        TengwaRune.SPACE,
                        // and
                        [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // history
                        TengwaRune.HYARMEN, [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.TINCO,
                        [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ], [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ],
                        TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.NEWLINE,

                        // Line 2
                        // rings
                        TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SILME, TengwaRune.SPACE,
                        // of
                        TengwaRune.OF, TengwaRune.SPACE,
                        // power
                        TengwaRune.PARMA, [ TengwaRune.LEFT_CURL, TengwaRune.VALA ], TengwaRune.ORE, TengwaRune.SPACE,
                        // and
                        [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // third
                        TengwaRune.THULE, [ TengwaRune.ACUTE, TengwaRune.ORE ], TengwaRune.ANDO, TengwaRune.SPACE,
                        // age
                        [ TengwaRune.THREE_DOTS, TengwaRune.ANGA, TengwaRune.UNDER_DOT ], TengwaRune.SPACE,
                        // in
                        [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // which
                        TengwaRune.HWESTA_SINDARINWA, [ TengwaRune.ACUTE, TengwaRune.CALMA ], TengwaRune.SPACE,
                        // these
                        TengwaRune.ANTO, [ TengwaRune.DOT, TengwaRune.SILME, TengwaRune.UNDER_DOT ], TengwaRune.SPACE,
                        // tales
                        TengwaRune.TINCO, [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE, TengwaRune.UNDER_DOT ],
                        TengwaRune.SILME, TengwaRune.SPACE,
                        // come
                        TengwaRune.QUESSE, [ TengwaRune.LEFT_CURL, TengwaRune.MALTA, TengwaRune.UNDER_DOT ],
                        TengwaRune.SPACE,
                        // to
                        [ TengwaRune.TINCO, TengwaRune.LEFT_UNDER_CURL ], TengwaRune.SPACE,
                        // their
                        TengwaRune.ANTO, [ TengwaRune.DOT, TengwaRune.YANTA ], TengwaRune.ORE, TengwaRune.SPACE,
                        // end.
                        [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.ANDO, TengwaRune.PERIOD ],

                FONT_LETTERS: [ [ "1", "\u00E5" ], " ", "o", [ "a", "R" ], " ", [ "6", "D", "\u00C9" ], " ",
                        [ "q", "D", "\u00ED" ], [ "5", "T" ], "2", [ "2", "T" ], " ", "@", " ", "2", [ "y", "Y" ], "5",
                        "e", [ "j", "D", "\u00ED" ], " ", "W", " ", "5", [ "t", "\u00E1" ], [ "5", "T" ], [ "6", "Y" ],
                        " ", [ "2", "{" ], " ", "@", " ", "9", [ "8", "R" ], "1", [ "7", "Y" ], [ "~", "R" ], " ",
                        "W?", "7", [ "b", "R" ], "8", " ", "W", " ", "q", [ "y", "Y" ], "6", " ", [ "2", "{" ], " ",
                        "@", " ", "3", [ "6", "R" ], "2", " ", [ "s", "D", "\u00C9" ], " ", [ "5", "R" ], " ", "o",
                        [ "a", "R" ], " ", "4", [ "8", "T", "\u00C9" ], " ", "1", [ "j", "D", "\u00C9" ], "8", " ",
                        "z", [ "t", "Y", "\u00C9" ], " ", [ "1", "\u00E5" ], " ", "4", [ "l", "T" ], "6", " ",
                        [ "5", "T" ], "2", "-" ],
            };

            if (Object.freeze)
            {
                Object.freeze(TengwarExampleTS2);
            }

            return TengwarExampleTS2;
        });
