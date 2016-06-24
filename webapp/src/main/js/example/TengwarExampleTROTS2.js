/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Return_of_the_Shadow">The Return Of The Shadow</a>, title page bottom.
 */
define(
        [ "TengwaRune" ],
        function(TengwaRune)
        {
            "use strict";
            var TengwarExampleTROTS2 =
            {
                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/returnoftheshadow/TROTS_TitlePage2.jpg",

                LANGUAGE_STRING: "named Bingo but afterwards Frodo, is followed from Hobbiton in the\n"
                        + "Shire through the Old Forest to Weathertop and Rivendell and ends\n"
                        + "in this volume before the tomb of Balin the Dwarf-Lord of Moria.",

                LANGUAGE_WORDS: [ "named", " ", "bingo", " ", "but", " ", "afterwards", " ", "frodo", ",", "is", " ",
                        "followed", " ", "from", " ", "hobbiton", " ", "in", " ", "the", "\n", "shire", " ", "through",
                        " ", "the", " ", "old", " ", "forest", " ", "to", " ", "weathertop", " ", "and", " ",
                        "rivendell", " ", "and", " ", "ends", "\n", "in", " ", "this", " ", "volume", " ", "before",
                        " ", "the", " ", "tomb", " ", "of", " ", "balin", " ", "the", " ", "dwarf-lord", " ", "of",
                        " ", "moria", "." ],

                PHONEMES: [ "n", [ "a", "m", "e" ], "d", " ", "b", [ "i", "ng" ], "o", " ", "b", [ "u", "t" ], " ",
                        [ "a", "f" ], "t", [ "e", "r" ], "w", [ "a", "r" ], "d", "s", " ", "f", "r", [ "o", "d" ], "o",
                        ",", [ "i", "s" ], " ", "f", [ "o", "l", "l" ], [ "o", "w", "e" ], "d", " ", "f", "r",
                        [ "o", "m" ], " ", "h", [ "o", "b", "b" ], [ "i", "t" ], [ "o", "n" ], " ", [ "i", "n" ], " ",
                        "the", "\n", "sh", [ "i", "r", "e" ], " ", "th", "r", [ "o", "u" ], "gh", " ", "the", " ",
                        [ "o", "l" ], "d", " ", "f", [ "o", "r" ], [ "e", "s" ], "t", " ", "t", "o", " ", "w",
                        [ "e", "a" ], "th", [ "e", "r" ], "t", [ "o", "p" ], " ", [ "a", "n", "d" ], " ", "r",
                        [ "i", "v" ], [ "e", "n" ], "d", [ "e", "l", "l" ], " ", [ "a", "n", "d" ], " ", [ "e", "n" ],
                        "d", "s", "\n", [ "i", "n" ], " ", "th", [ "i", "s" ], " ", "v", [ "o", "l" ],
                        [ "u", "m", "e" ], " ", [ "b", "e" ], "f", [ "o", "r", "e" ], " ", "the", " ", "t",
                        [ "o", "m" ], "b", " ", "of", " ", "b", [ "a", "l" ], [ "i", "n" ], " ", "the", " ", "d", "w",
                        [ "a", "r" ], "f", "-", "l", [ "o", "r" ], "d", " ", "of", " ", "m", [ "o", "r" ],
                        [ "i", "a" ], "." ],

                RUNES: [
                // Line 1
                // named
                TengwaRune.NUMEN, [ TengwaRune.THREE_DOTS, TengwaRune.MALTA, TengwaRune.UNDER_DOT ], TengwaRune.ANDO,
                        TengwaRune.SPACE,
                        // bingo
                        TengwaRune.UMBAR, [ TengwaRune.ACUTE, TengwaRune.NGWALME, ],
                        [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ], TengwaRune.SPACE,
                        // but
                        TengwaRune.UMBAR, [ TengwaRune.RIGHT_CURL, TengwaRune.TINCO ], TengwaRune.SPACE,
                        // afterwards
                        [ TengwaRune.THREE_DOTS, TengwaRune.FORMEN ], TengwaRune.TINCO,
                        [ TengwaRune.DOT, TengwaRune.ORE ], TengwaRune.VALA, [ TengwaRune.THREE_DOTS, TengwaRune.ORE ],
                        TengwaRune.ANDO, TengwaRune.SILME, TengwaRune.SPACE,
                        // frodo,
                        TengwaRune.FORMEN, TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.ANDO ],
                        [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ], TengwaRune.COMMA,
                        // is
                        [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.SPACE,
                        // followed
                        TengwaRune.FORMEN, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
                        [ TengwaRune.LEFT_CURL, TengwaRune.VALA, TengwaRune.UNDER_DOT ], TengwaRune.ANDO,
                        TengwaRune.SPACE,
                        // from
                        TengwaRune.FORMEN, TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.MALTA ],
                        TengwaRune.SPACE,
                        // hobbiton
                        TengwaRune.HYARMEN, [ TengwaRune.LEFT_CURL, TengwaRune.UMBAR, TengwaRune.UNDER_BAR ],
                        [ TengwaRune.ACUTE, TengwaRune.TINCO ], [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ],
                        TengwaRune.SPACE,
                        // in
                        [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.NEWLINE,

                        // Line 2
                        // shire
                        TengwaRune.HARMA, [ TengwaRune.ACUTE, TengwaRune.ROMEN, TengwaRune.UNDER_DOT ],
                        TengwaRune.SPACE,
                        // through
                        TengwaRune.THULE, TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.URE ], TengwaRune.GH,
                        TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // old
                        [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ], TengwaRune.ANDO, TengwaRune.SPACE,
                        // forest
                        TengwaRune.FORMEN, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
                        [ TengwaRune.DOT, TengwaRune.SILME ], TengwaRune.TINCO, TengwaRune.SPACE,
                        // to
                        TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ], TengwaRune.SPACE,
                        // weathertop
                        TengwaRune.VALA, [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER, TengwaRune.THREE_UNDER_DOTS ],
                        TengwaRune.ANTO, [ TengwaRune.DOT, TengwaRune.ORE ], TengwaRune.TINCO,
                        [ TengwaRune.LEFT_CURL, TengwaRune.PARMA ], TengwaRune.SPACE,
                        // and
                        [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN, TengwaRune.ANDO ], TengwaRune.SPACE,
                        // rivendell
                        TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.AMPA ], [ TengwaRune.DOT, TengwaRune.NUMEN ],
                        TengwaRune.ANDO, [ TengwaRune.DOT, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ], TengwaRune.SPACE,
                        // and
                        [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN, TengwaRune.ANDO ], TengwaRune.SPACE,
                        // ends
                        [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.ANDO, TengwaRune.SILME, TengwaRune.NEWLINE,

                        // Line 3
                        // in
                        [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // this
                        TengwaRune.ANTO, [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.SPACE,
                        // volume
                        TengwaRune.AMPA, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ],
                        [ TengwaRune.RIGHT_CURL, TengwaRune.MALTA, TengwaRune.UNDER_DOT ], TengwaRune.SPACE,
                        // before
                        [ TengwaRune.UMBAR, TengwaRune.UNDER_DOT ], TengwaRune.FORMEN,
                        [ TengwaRune.LEFT_CURL, TengwaRune.ORE, TengwaRune.UNDER_DOT ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // tomb
                        TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.MALTA ], TengwaRune.UMBAR,
                        TengwaRune.SPACE,
                        // of
                        TengwaRune.OF, TengwaRune.SPACE,
                        // balin
                        TengwaRune.UMBAR, [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ],
                        [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // dwarf
                        TengwaRune.ANDO, TengwaRune.VALA, [ TengwaRune.THREE_DOTS, TengwaRune.ORE ], TengwaRune.FORMEN,
                        TengwaRune.HYPHEN,
                        // lord
                        TengwaRune.LAMBE, [ TengwaRune.LEFT_CURL, TengwaRune.ORE ], TengwaRune.ANDO, TengwaRune.SPACE,
                        // of
                        TengwaRune.OF, TengwaRune.SPACE,
                        // moria.
                        TengwaRune.MALTA, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
                        [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.THREE_UNDER_DOTS ], TengwaRune.PERIOD, ],

                FONT_LETTERS: [ "5", [ "t", "D", "&#201;" ], "2", " ", "w", [ "b", "R" ], [ "`", "Y" ], " ", "w",
                        [ "1", "&#225;" ], " ", [ "e", "D" ], "1", [ "6", "T" ], "y", [ "6", "D" ], "2", "8", " ", "e",
                        "7", [ "2", "Y" ], [ "`", "Y" ], "&#183;", [ "8", "R" ], " ", "e", [ "j", "Y", "&#237;" ],
                        [ "y", "Y", "&#201;" ], "2", " ", "e", "7", [ "t", "Y" ], " ", "9", [ "w", "Y", "&#237;" ],
                        [ "1", "R" ], [ "5", "Y" ], " ", [ "5", "R" ], " ", "@", "d", [ "7", "R", "&#201;" ], " ", "3",
                        "7", [ ".", "Y" ], "X", " ", "@", " ", [ "j", "Y" ], "2", " ", "e", [ "7", "Y" ], [ "8", "T" ],
                        "1", " ", "1", [ "`", "Y" ], " ", "y", [ "`", "T", "&#209;" ], "4", [ "6", "T" ], "1",
                        [ "q", "Y" ], " ", [ "5", "D", "2" ], " ", "7", [ "r", "R" ], [ "5", "T" ], "2",
                        [ "j", "T", "&#237;" ], " ", [ "5", "D", "2" ], " ", [ "5", "T" ], "2", "8", [ "5", "R" ], " ",
                        "4", [ "8", "R" ], " ", "r", [ "j", "Y" ], [ "t", "&#225;", "&#201;" ], " ", [ "w", "&#201;" ],
                        "e", [ "6", "Y", "&#201;" ], " ", "@", " ", "1", [ "t", "Y" ], "w", " ", "W", " ", "w",
                        [ "j", "D" ], [ "5", "R" ], " ", "@", " ", "2", "y", [ "6", "D" ], "e", "&#183;", "j",
                        [ "6", "Y" ], "2", " ", "W", " ", "t", [ "7", "Y" ], [ "`", "R", "&#209;" ], "-" ],
            }

            if (Object.freeze)
            {
                Object.freeze(TengwarExampleTROTS2)
            };

            return TengwarExampleTROTS2;
        });
