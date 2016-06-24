/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Treason_of_Isengard">The Treason Of Isengard</a>, title page bottom.
 */
define(
        [ "TengwaRune" ],
        function(TengwaRune)
        {
            "use strict";
            var TengwarExampleTTOI2 =
            {
                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/treasonofisengard/TTOI_TitlePage2.jpg",

                LANGUAGE_STRING: "of its ending at Calembel beside Anduin the Great river. Then is\n"
                        + "told of the return of Gandalf Mithrandir, of the meeting of the hobbits with\n"
                        + "Fangorn, and of the war upon the Riders of Rohan by the traitor Saruman.",

                LANGUAGE_WORDS: [ "of", " ", "its", " ", "ending", " ", "at", " ", "calembel", " ", "beside", " ",
                        "anduin", " ", "the", " ", "great", " ", "river", ".", "then", " ", "is", "\n", "told", " ",
                        "of the", " ", "return", " ", "of", " ", "gandalf", " ", "mithrandir", ",", "of the", " ",
                        "meeting", " ", "of the", " ", "hobbits", " ", "with", "\n", "fangorn", ",", "and", " ",
                        "of the", " ", "war", " ", "upon", " ", "the", " ", "riders", " ", "of", " ", "rohan", " ",
                        "by", " ", "the", " ", "traitor", " ", "saruman", "." ],

                PHONEMES: [ "of", " ", [ "i", "t" ], "s", " ", [ "e", "n" ], "d", [ "i", "ng" ], " ", [ "a", "t" ],
                        " ", "c", [ "a", "l" ], [ "e", "m" ], "b", [ "e", "l" ], " ", [ "b", "e" ], "s",
                        [ "i", "d", "e" ], " ", [ "a", "n" ], "d", [ "u", "i" ], "n", " ", "the", " ", "g", "r",
                        [ "e", "a" ], "t", " ", "r", [ "i", "v" ], [ "e", "r" ], ".", "th", [ "e", "n" ], " ",
                        [ "i", "s" ], "\n", "t", [ "o", "l" ], "d", " ", "of the", " ", [ "r", "e" ], "t",
                        [ "u", "r" ], "n", " ", "of", " ", "g", [ "a", "n" ], "d", [ "a", "l" ], "f", " ", "m",
                        [ "i", "th" ], "r", [ "a", "n" ], "d", [ "i", "r" ], ",", "of the", " ", "m",
                        [ "e", "e", "t" ], [ "i", "ng" ], " ", "of the", " ", "h", [ "o", "b", "b" ], [ "i", "t" ],
                        "s", " ", "w", [ "i", "th" ], "\n", "f", [ "a", "ng" ], [ "o", "r" ], "n", ",", "and", " ",
                        "of the", " ", "w", [ "a", "r" ], " ", [ "u", "p" ], [ "o", "n" ], " ", "the", " ", "r",
                        [ "i", "d" ], [ "e", "r" ], "s", " ", "of", " ", "r", "o", "h", [ "a", "n" ], " ", "b", "y",
                        " ", "the", " ", "t", "r", "ai", "t", [ "o", "r" ], " ", "s", [ "a", "r" ], [ "u", "m" ],
                        [ "a", "n" ], "." ],

                RUNES: [
                // Line 1
                // of
                TengwaRune.OF, TengwaRune.SPACE,
                // its
                [ TengwaRune.ACUTE, TengwaRune.TINCO ], TengwaRune.SILME, TengwaRune.SPACE,
                // ending
                [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.ANDO, [ TengwaRune.ACUTE, TengwaRune.NGWALME ],
                        TengwaRune.SPACE,
                        // at
                        [ TengwaRune.THREE_DOTS, TengwaRune.TINCO ], TengwaRune.SPACE,
                        // calembel
                        TengwaRune.SILME_NUQUERNA, [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ],
                        [ TengwaRune.DOT, TengwaRune.MALTA ], TengwaRune.UMBAR, [ TengwaRune.DOT, TengwaRune.LAMBE ],
                        TengwaRune.SPACE,
                        // beside
                        [ TengwaRune.UMBAR, TengwaRune.UNDER_DOT ], TengwaRune.SILME,
                        [ TengwaRune.ACUTE, TengwaRune.ANDO, TengwaRune.UNDER_DOT ], TengwaRune.SPACE,
                        // anduin
                        [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.ANDO,
                        [ TengwaRune.TOP_CURL, TengwaRune.YANTA ], TengwaRune.NUMEN, TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // great
                        TengwaRune.UNGWE, TengwaRune.ROMEN,
                        [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER, TengwaRune.THREE_UNDER_DOTS ], TengwaRune.TINCO,
                        TengwaRune.SPACE,
                        // river,
                        TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.AMPA ], [ TengwaRune.DOT, TengwaRune.ORE ],
                        TengwaRune.PERIOD,
                        // then
                        TengwaRune.THULE, [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // is
                        [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.NEWLINE,

                        // Line 2
                        // told
                        TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ], TengwaRune.ANDO,
                        TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // return
                        [ TengwaRune.ROMEN, TengwaRune.UNDER_DOT ], TengwaRune.TINCO,
                        [ TengwaRune.RIGHT_CURL, TengwaRune.ORE ], TengwaRune.NUMEN, TengwaRune.SPACE,
                        // of
                        TengwaRune.OF, TengwaRune.SPACE,
                        // gandalf
                        TengwaRune.UNGWE, [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.ANDO,
                        [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ], TengwaRune.FORMEN, TengwaRune.SPACE,
                        // mithrandir,
                        TengwaRune.MALTA, [ TengwaRune.ACUTE, TengwaRune.THULE ], TengwaRune.ROMEN,
                        [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.ANDO,
                        [ TengwaRune.ACUTE, TengwaRune.ROMEN ], TengwaRune.COMMA,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // meeting
                        TengwaRune.MALTA, [ TengwaRune.DOT, TengwaRune.DOT, TengwaRune.TINCO ],
                        [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // hobbits
                        TengwaRune.HYARMEN, [ TengwaRune.LEFT_CURL, TengwaRune.UMBAR, TengwaRune.UNDER_BAR ],
                        [ TengwaRune.ACUTE, TengwaRune.TINCO ], TengwaRune.SILME, TengwaRune.SPACE,
                        // with
                        TengwaRune.VALA, [ TengwaRune.ACUTE, TengwaRune.THULE ], TengwaRune.NEWLINE,

                        // Line 3
                        // fangorn,
                        TengwaRune.FORMEN, [ TengwaRune.THREE_DOTS, TengwaRune.NGWALME ],
                        [ TengwaRune.LEFT_CURL, TengwaRune.ORE ], TengwaRune.NUMEN, TengwaRune.COMMA,
                        // and
                        [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // war
                        TengwaRune.VALA, [ TengwaRune.THREE_DOTS, TengwaRune.ORE ], TengwaRune.SPACE,
                        // upon
                        [ TengwaRune.RIGHT_CURL, TengwaRune.PARMA ], [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ],
                        TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // riders
                        TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.ANDO ], [ TengwaRune.DOT, TengwaRune.ORE ],
                        TengwaRune.SILME, TengwaRune.SPACE,
                        // of
                        TengwaRune.OF, TengwaRune.SPACE,
                        // rohan
                        TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ], TengwaRune.HYARMEN,
                        [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // by
                        TengwaRune.UMBAR, TengwaRune.ANNA, TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // traitor
                        TengwaRune.TINCO, TengwaRune.ROMEN, [ TengwaRune.THREE_DOTS, TengwaRune.YANTA ],
                        TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.ORE ], TengwaRune.SPACE,
                        // saruman.
                        TengwaRune.SILME, [ TengwaRune.THREE_DOTS, TengwaRune.ROMEN ],
                        [ TengwaRune.RIGHT_CURL, TengwaRune.MALTA ], [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ],
                        TengwaRune.PERIOD ],

                FONT_LETTERS: [ "W", " ", [ "1", "R" ], "8", " ", [ "5", "T" ], "2", [ "b", "R" ], " ", [ "1", "D" ],
                        " ", "i", [ "j", "D" ], [ "t", "T" ], "w", [ "j", "T" ], " ", [ "w", "&#201;" ], "8",
                        [ "2", "R", "&#201;" ], " ", [ "5", "D" ], "2", [ "l", "J" ], "5", " ", "@", " ", "x", "7",
                        [ "`", "T", "&#209;" ], "1", " ", "7", [ "r", "R" ], [ "6", "T" ], "-", "3", [ "5", "T" ], " ",
                        [ "8", "R" ], "1", [ "j", "Y" ], "2", " ", "W?", " ", [ "7", "&#201;" ], "1",
                        [ "6", "&#225;" ], "5", " ", "W", " ", "x", [ "5", "D" ], "2", [ "j", "D" ], "e", " ", "t",
                        [ "3", "R" ], "7", [ "5", "D" ], "2", [ "7", "R" ], "&#183;", "W?", " ", "t",
                        [ "1", "B", "T" ], [ "b", "R" ], " ", "W?", " ", "9", [ "w", "Y", "&#237;" ], [ "1", "R" ],
                        "8", " ", "y", [ "3", "R" ], "e", [ "b", "D" ], [ "6", "Y" ], "5", "&#183;", [ "2", "{" ], " ",
                        "W?", " ", "y", [ "6", "D" ], " ", [ "q", "&#225;" ], [ "5", "Y" ], " ", "@", " ", "7",
                        [ "2", "R" ], [ "6", "T" ], "8", " ", "W", " ", "7", [ "`", "Y" ], "9", [ "5", "D" ], " ", "w",
                        "h", " ", "@", " ", "1", "7", [ "l", "D" ], "1", [ "6", "Y" ], " ", "8", [ "7", "D" ],
                        [ "t", "&#225;" ], [ "5", "D" ], "-" ],
            }

            if (Object.freeze)
            {
                Object.freeze(TengwarExampleTTOI2)
            };

            return TengwarExampleTTOI2;
        });
