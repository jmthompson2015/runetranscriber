/*
 * Provides an example for Tengwar runes from <a href="http://lotr.wikia.com/wiki/Sauron_Defeated">Sauron Defeated</a>.
 */
define(
        [ "TengwaRune" ],
        function(TengwaRune)
        {
            "use strict";
            var TengwarExampleSD1 =
            {
                NAME: "Tengwar Example SD1",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/saurondefeated/SD_TitlePage1.jpg",

                LANGUAGE_STRING: "In this book is traced first the story of the destruction of the\n"
                        + "One Ring and the Downfall of Sauron at the End of the Third Age.",

                LANGUAGE_WORDS: [ "in", " ", "this", " ", "book", " ", "is", " ", "traced", " ", "first", " ", "the",
                        " ", "story", " ", "of the", " ", "destruction", " ", "of the", "\n", "one", " ", "ring", " ",
                        "and", " ", "the", " ", "downfall", " ", "of", " ", "sauron", " ", "at", " ", "the", " ",
                        "end", " ", "of the", " ", "third", " ", "age", "." ],

                PHONEMES: [ [ "i", "n" ], " ", "th", [ "i", "s" ], " ", "b", "oo", "k", " ", [ "i", "s" ], " ", "t",
                        "r", [ "a", "c", "e" ], "d", " ", "f", [ "i", "r" ], "s", "t", " ", "the", " ", "s", "t",
                        [ "o", "r" ], "y", " ", "of the", " ", "d", [ "e", "s" ], "t", "r", [ "u", "k" ], "t", "i",
                        [ "o", "n" ], " ", "of the", "\n", [ "o", "n", "e" ], " ", "r", [ "i", "ng" ], " ", "and", " ",
                        "the", " ", "d", [ "o", "w" ], "n", "f", [ "a", "l", "l" ], " ", "of", " ", "s", "a",
                        [ "u", "r" ], [ "o", "n" ], " ", [ "a", "t" ], " ", "the", " ", [ "e", "n" ], "d", " ",
                        "of the", " ", "th", [ "i", "r" ], "d", " ", [ "a", "j", "e" ], "." ],

                RUNES: [
                // Line 1
                // in
                [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                // this
                TengwaRune.ANTO, [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.SPACE,
                // book
                TengwaRune.UMBAR, [ TengwaRune.LEFT_CURL, TengwaRune.LONG_CARRIER ], TengwaRune.QUESSE,
                        TengwaRune.SPACE,
                        // is
                        [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.SPACE,
                        // traced
                        TengwaRune.TINCO, TengwaRune.ROMEN,
                        [ TengwaRune.THREE_DOTS, TengwaRune.SILME_NUQUERNA, TengwaRune.UNDER_DOT ], TengwaRune.ANDO,
                        TengwaRune.SPACE,
                        // first
                        TengwaRune.FORMEN, [ TengwaRune.ACUTE, TengwaRune.ORE ], TengwaRune.SILME, TengwaRune.TINCO,
                        TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // story
                        TengwaRune.SILME, TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
                        TengwaRune.ANNA, TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // destruction
                        TengwaRune.ANDO, [ TengwaRune.DOT, TengwaRune.SILME ], TengwaRune.TINCO, TengwaRune.ROMEN,
                        [ TengwaRune.RIGHT_CURL, TengwaRune.QUESSE ], TengwaRune.TINCO,
                        [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ], [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ],
                        TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.NEWLINE,

                        // Line 2
                        // one
                        [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN, TengwaRune.UNDER_DOT ], TengwaRune.SPACE,
                        // ring
                        TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SPACE,
                        // and
                        [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // downfall
                        TengwaRune.ANDO, [ TengwaRune.LEFT_CURL, TengwaRune.VALA ], TengwaRune.NUMEN,
                        TengwaRune.FORMEN, [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
                        TengwaRune.SPACE,
                        // of
                        TengwaRune.OF, TengwaRune.SPACE,
                        // sauron
                        TengwaRune.SILME, [ TengwaRune.THREE_DOTS, TengwaRune.SHORT_CARRIER ],
                        [ TengwaRune.RIGHT_CURL, TengwaRune.ROMEN ], [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ],
                        TengwaRune.SPACE,
                        // at
                        [ TengwaRune.THREE_DOTS, TengwaRune.TINCO ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // end
                        [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.ANDO, TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // third
                        TengwaRune.THULE, [ TengwaRune.ACUTE, TengwaRune.ORE ], TengwaRune.ANDO, TengwaRune.SPACE,
                        // age.
                        [ TengwaRune.THREE_DOTS, TengwaRune.ANGA, TengwaRune.UNDER_DOT ], TengwaRune.PERIOD, ],

                FONT_LETTERS: [ [ "5", "R" ], " ", "4", [ "8", "R" ], " ", "w", [ "~", "Y" ], "z", " ", [ "8", "R" ],
                        " ", "1", "7", [ "i", "D", "&#201;" ], "2", " ", "e", [ "6", "R" ], "8", "1", " ", "@", " ",
                        "8", "1", [ "7", "Y" ], "h", " ", "W?", " ", "2", [ "8", "T" ], "1", "7", [ "z", "&#225;" ],
                        "1", [ "`", "R" ], [ "5", "Y" ], " ", "W?", [ "5", "Y", "&#201;" ], " ", "7", [ "b", "R" ],
                        " ", [ "2", "{" ], " ", "@", " ", "2", [ "y", "Y" ], "5", "e", [ "j", "D", "&#237;" ], " ",
                        "W", " ", "8", [ "`", "D" ], [ "7", "&#225;" ], [ "5", "Y" ], " ", [ "1", "D" ], " ", "@", " ",
                        [ "5", "T" ], "2", " ", "W?", " ", "3", [ "6", "R" ], "2", " ", [ "s", "D", "&#201;" ], "-" ],
            };

            if (Object.freeze)
            {
                Object.freeze(TengwarExampleSD1);
            }

            return TengwarExampleSD1;
        });
