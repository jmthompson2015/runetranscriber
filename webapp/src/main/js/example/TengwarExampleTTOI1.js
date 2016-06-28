/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Treason_of_Isengard">The Treason Of Isengard</a>, title page top.
 */
define(
        [ "TengwaRune" ],
        function(TengwaRune)
        {
            "use strict";
            var TengwarExampleTTOI1 =
            {
                NAME: "Tengwar Example TTOI1",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/treasonofisengard/TTOI_TitlePage1.jpg",

                LANGUAGE_STRING: "In the Treason of Isengard the story of the Fellowship of the Ring is traced\n"
                        + "from Rivendell through Moria and the Land of Lothlorien to the days",

                LANGUAGE_WORDS: [ "in", " ", "the", " ", "treason", " ", "of", " ", "isengard", " ", "the", " ",
                        "story", " ", "of the", " ", "fellowship", " ", "of the", " ", "ring", " ", "is", " ",
                        "traced", "\n", "from", " ", "rivendell", " ", "through", " ", "moria", " ", "and", " ", "the",
                        " ", "land", " ", "of", " ", "lothlorien", " ", "to", " ", "the", " ", "days" ],

                PHONEMES: [ [ "i", "n" ], " ", "the", " ", "t", "r", [ "e", "a" ], "s", [ "o", "n" ], " ", "of", " ",
                        [ "i", "s" ], [ "e", "n" ], "g", [ "a", "r" ], "d", " ", "the", " ", "s", "t", [ "o", "r" ],
                        "y", " ", "of the", " ", "f", [ "e", "l", "l" ], [ "o", "w" ], "sh", [ "i", "p" ], " ",
                        "of the", " ", "r", [ "i", "ng" ], " ", [ "i", "s" ], " ", "t", "r", [ "a", "c", "e" ], "d",
                        "\n", "f", "r", [ "o", "m" ], " ", "r", [ "i", "v" ], [ "e", "n" ], "d", [ "e", "l", "l" ],
                        " ", "th", "r", [ "o", "u" ], "gh", " ", "m", [ "o", "r" ], [ "i", "a" ], " ", "and", " ",
                        "the", " ", "l", [ "a", "n" ], "d", " ", "of", " ", "l", [ "o", "th" ], "l", [ "o", "r" ],
                        [ "i", "e" ], "n", " ", "t", "o", " ", "the", " ", "d", [ "a", "y" ], "s" ],

                RUNES: [
                // Line 1
                // in
                [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                // the
                TengwaRune.THE, TengwaRune.SPACE,
                // treason
                TengwaRune.TINCO, TengwaRune.ROMEN,
                        [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER, TengwaRune.THREE_UNDER_DOTS ], TengwaRune.SILME,
                        [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // of
                        TengwaRune.OF, TengwaRune.SPACE,
                        // isengard
                        [ TengwaRune.ACUTE, TengwaRune.SILME ], [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.UNGWE,
                        [ TengwaRune.THREE_DOTS, TengwaRune.ORE ], TengwaRune.ANDO, TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // story
                        TengwaRune.SILME, TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
                        TengwaRune.ANNA, TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // fellowship
                        TengwaRune.FORMEN, [ TengwaRune.DOT, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
                        [ TengwaRune.LEFT_CURL, TengwaRune.VALA ], TengwaRune.HARMA,
                        [ TengwaRune.ACUTE, TengwaRune.PARMA ], TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // ring
                        TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SPACE,
                        // is
                        [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.SPACE,
                        // traced
                        TengwaRune.TINCO, TengwaRune.ROMEN,
                        [ TengwaRune.THREE_DOTS, TengwaRune.SILME_NUQUERNA, TengwaRune.UNDER_DOT ], TengwaRune.ANDO,
                        TengwaRune.NEWLINE,

                        // Line 2
                        // from
                        TengwaRune.FORMEN, TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.MALTA ],
                        TengwaRune.SPACE,
                        // rivendell
                        TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.AMPA ], [ TengwaRune.DOT, TengwaRune.NUMEN ],
                        TengwaRune.ANDO, [ TengwaRune.DOT, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ], TengwaRune.SPACE,
                        // through
                        TengwaRune.THULE, TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.URE ], TengwaRune.GH,
                        TengwaRune.SPACE,
                        // moria
                        TengwaRune.MALTA, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
                        [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.THREE_UNDER_DOTS ], TengwaRune.SPACE,
                        // and
                        [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // land
                        TengwaRune.LAMBE, [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.ANDO,
                        TengwaRune.SPACE,
                        // of
                        TengwaRune.OF, TengwaRune.SPACE,
                        // lothlorien
                        TengwaRune.LAMBE, [ TengwaRune.LEFT_CURL, TengwaRune.THULE ], TengwaRune.LAMBE,
                        [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
                        [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.UNDER_DOT ], TengwaRune.NUMEN,
                        TengwaRune.SPACE,
                        // to
                        TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // days
                        TengwaRune.ANDO, [ TengwaRune.THREE_DOTS, TengwaRune.ANNA ], TengwaRune.SILME ],

                FONT_LETTERS: [ [ "5", "R" ], " ", "@", " ", "1", "7", [ "`", "T", "&#209;" ], "8", [ "5", "Y" ], " ",
                        "W", " ", [ "8", "R" ], [ "5", "T" ], "x", [ "6", "D" ], "2", " ", "@", " ", "8", "1",
                        [ "7", "Y" ], "h", " ", "W?", " ", "e", [ "j", "T", "&#237;" ], [ "y", "Y" ], "d",
                        [ "q", "R" ], " ", "W?", " ", "7", [ "b", "R" ], " ", [ "8", "R" ], " ", "1", "7",
                        [ "i", "D", "&#201;" ], "2", "e", "7", [ "t", "Y" ], " ", "7", [ "r", "R" ], [ "5", "T" ], "2",
                        [ "j", "T", "&#237;" ], " ", "3", "7", [ ".", "Y" ], "X", " ", "t", [ "7", "Y" ],
                        [ "`", "R", "&#209;" ], " ", [ "2", "{" ], " ", "@", " ", "j", [ "5", "D" ], "2", " ", "W",
                        " ", "j", [ "3", "Y" ], "j", [ "7", "Y" ], [ "`", "R", "&#201;" ], "5", " ", "1", [ "`", "Y" ],
                        " ", "@", " ", "2", [ "h", "D" ], "8" ],
            }

            if (Object.freeze)
            {
                Object.freeze(TengwarExampleTTOI1)
            };

            return TengwarExampleTTOI1;
        });
