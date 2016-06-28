/*
 * Provides an example for Tengwar runes from <a href="http://lotr.wikia.com/wiki/Unfinished_Tales">Unfinished Tales of Numenor and Middle-Earth</a>.
 */
define(
        [ "TengwaRune" ],
        function(TengwaRune)
        {
            "use strict";
            var TengwarExampleUTONAME2 =
            {
                NAME: "Tengwar Example UTONAME2",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/unfinishedtales/UTONAME_TitlePage2.jpg",

                LANGUAGE_STRING: "are told many things of men and elves in Numenor and in Middle\n"
                        + "Earth from the elder days in Beleriand to the War of the Ring and\n"
                        + "an account is given of the Druedain the Istari and the Palantiri.",

                LANGUAGE_WORDS: [ "are", " ", "told", " ", "many", " ", "things", " ", "of", " ", "men", " ", "and",
                        " ", "elves", " ", "in", " ", "numenor", " ", "and", " ", "in", " ", "middle", "\n", "earth",
                        " ", "from", " ", "the", " ", "elder", " ", "days", " ", "in", " ", "beleriand", " ", "to",
                        " ", "the", " ", "war", " ", "of the", " ", "ring", " ", "and", "\n", "an", " ", "account",
                        " ", "is", " ", "given", " ", "of the", " ", "druedain", " ", "the", " ", "istari", " ", "and",
                        " ", "the", " ", "palantiri", "." ],

                PHONEMES: [ [ "a", "r", "e" ], " ", "t", [ "o", "l" ], "d", " ", "m", [ "a", "n" ], "y", " ", "th",
                        [ "i", "ng" ], "s", " ", "of", " ", "m", [ "e", "n" ], " ", "and", " ", [ "e", "l" ],
                        [ "v", "e" ], "s", " ", [ "i", "n" ], " ", "n", [ "u", "m" ], [ "e", "n" ], [ "o", "r" ], " ",
                        "and", " ", [ "i", "n" ], " ", "m", [ "i", "d", "d" ], [ "l", "e" ], "\n", [ "e", "a" ], "r",
                        "th", " ", "f", "r", [ "o", "m" ], " ", "the", " ", [ "e", "l" ], "d", [ "e", "r" ], " ", "d",
                        [ "a", "y" ], "s", " ", [ "i", "n" ], " ", "b", [ "e", "l" ], [ "e", "r" ], "i", [ "a", "n" ],
                        "d", " ", "t", "o", " ", "the", " ", "w", [ "a", "r" ], " ", "of the", " ", "r", [ "i", "ng" ],
                        " ", "and", "\n", [ "a", "n" ], " ", [ "a", "k", "k" ], [ "o", "u" ], "n", "t", " ",
                        [ "i", "s" ], " ", "g", [ "i", "v" ], [ "e", "n" ], " ", "of the", " ", "d", "r", [ "u", "e" ],
                        "d", "ai", [ "i", "n" ], " ", "the", " ", [ "i", "s" ], "t", [ "a", "r" ], "i", " ", "and",
                        " ", "the", " ", "p", [ "a", "l" ], [ "a", "n" ], "t", [ "i", "r" ], "i", "." ],

                RUNES: [
                // Line 1
                // are
                [ TengwaRune.THREE_DOTS, TengwaRune.ROMEN, TengwaRune.UNDER_DOT ], TengwaRune.SPACE,
                // told
                TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ], TengwaRune.ANDO, TengwaRune.SPACE,
                // many
                TengwaRune.MALTA, [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.ANNA, TengwaRune.SPACE,
                // things
                TengwaRune.THULE, [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SILME, TengwaRune.SPACE,
                // of
                TengwaRune.OF, TengwaRune.SPACE,
                // men
                TengwaRune.MALTA, [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.SPACE,
                // and
                [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
                // elves
                [ TengwaRune.DOT, TengwaRune.LAMBE ], [ TengwaRune.AMPA, TengwaRune.UNDER_DOT ], TengwaRune.SILME,
                        TengwaRune.SPACE,
                        // in
                        [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // numenor
                        TengwaRune.NUMEN, [ TengwaRune.RIGHT_CURL, TengwaRune.MALTA ],
                        [ TengwaRune.DOT, TengwaRune.NUMEN ], [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
                        TengwaRune.SPACE,
                        // and
                        [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
                        // in
                        [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // middle
                        TengwaRune.MALTA, [ TengwaRune.ACUTE, TengwaRune.ANDO, TengwaRune.UNDER_BAR ],
                        [ TengwaRune.LAMBE, TengwaRune.UNDER_DOT ], TengwaRune.NEWLINE,

                        // Line 2
                        // earth
                        [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER, TengwaRune.THREE_UNDER_DOTS ], TengwaRune.ROMEN,
                        TengwaRune.THULE, TengwaRune.SPACE,
                        // from
                        TengwaRune.FORMEN, TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.MALTA ],
                        TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // elder
                        [ TengwaRune.DOT, TengwaRune.LAMBE ], TengwaRune.ANDO, [ TengwaRune.DOT, TengwaRune.ROMEN ],
                        TengwaRune.SPACE,
                        // days
                        TengwaRune.ANDO, [ TengwaRune.THREE_DOTS, TengwaRune.ANNA ], TengwaRune.SILME,
                        TengwaRune.SPACE,
                        // in
                        [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // beleriand
                        TengwaRune.UMBAR, [ TengwaRune.DOT, TengwaRune.LAMBE ], [ TengwaRune.DOT, TengwaRune.ROMEN ],
                        [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ], [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ],
                        TengwaRune.ANDO, TengwaRune.SPACE,
                        // to
                        TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // war
                        TengwaRune.VALA, [ TengwaRune.THREE_DOTS, TengwaRune.ORE ], TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // ring
                        TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SPACE,
                        // and
                        [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.NEWLINE,

                        // Line 3
                        // an
                        [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.SPACE,
                        // account
                        [ TengwaRune.THREE_DOTS, TengwaRune.QUESSE, TengwaRune.UNDER_BAR ],
                        [ TengwaRune.LEFT_CURL, TengwaRune.URE ], TengwaRune.NUMEN, TengwaRune.TINCO, TengwaRune.SPACE,
                        // is
                        [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.SPACE,
                        // given
                        TengwaRune.UNGWE, [ TengwaRune.ACUTE, TengwaRune.AMPA ], [ TengwaRune.DOT, TengwaRune.NUMEN ],
                        TengwaRune.SPACE,
                        // of the
                        TengwaRune.OF_THE, TengwaRune.SPACE,
                        // druedain
                        TengwaRune.ANDO, TengwaRune.ROMEN,
                        [ TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER, TengwaRune.UNDER_DOT ], TengwaRune.ANDO,
                        [ TengwaRune.THREE_DOTS, TengwaRune.YANTA ], [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
                        TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // istari
                        [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.TINCO,
                        [ TengwaRune.THREE_DOTS, TengwaRune.ROMEN ], [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ],
                        TengwaRune.SPACE,
                        // and
                        [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
                        // the
                        TengwaRune.THE, TengwaRune.SPACE,
                        // palantiri.
                        TengwaRune.PARMA, [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ],
                        [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.TINCO,
                        [ TengwaRune.ACUTE, TengwaRune.ROMEN ], [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ],
                        TengwaRune.PERIOD ],

                FONT_LETTERS: [ [ "7", "D", "&#201;" ], " ", "1", [ "j", "Y" ], "2", " ", "t", [ "5", "D" ], "h", " ",
                        "3", [ "b", "R" ], "8", " ", "W", " ", "t", [ "5", "T" ], " ", [ "2", "{" ], " ", [ "j", "T" ],
                        [ "r", "&#201;" ], "8", " ", [ "5", "R" ], " ", "5", [ "t", "&#225;" ], [ "5", "T" ],
                        [ "7", "Y" ], " ", [ "2", "{" ], " ", [ "5", "R" ], " ", "t", [ "2", "R", "&#237;" ],
                        [ "j", "&#201;" ], [ "`", "T", "&#209;" ], "7", "3", " ", "e", "7", [ "t", "Y" ], " ", "@",
                        " ", [ "j", "T" ], "2", [ "7", "T" ], " ", "2", [ "h", "D" ], "8", " ", [ "5", "R" ], " ", "w",
                        [ "j", "T" ], [ "7", "T" ], [ "`", "R" ], [ "5", "D" ], "2", " ", "1", [ "`", "Y" ], " ", "@",
                        " ", "y", [ "6", "D" ], " ", "W?", " ", "7", [ "b", "R" ], " ", [ "2", "{" ], [ "5", "D" ],
                        " ", [ "z", "D", "&#237;" ], [ ".", "Y" ], "5", "1", " ", [ "8", "R" ], " ", "x", [ "r", "R" ],
                        [ "5", "T" ], " ", "W?", " ", "2", "7", [ "`", "&#225;", "&#201;" ], "2", [ "l", "D" ],
                        [ "5", "R" ], " ", "@", " ", [ "8", "R" ], "1", [ "7", "D" ], [ "`", "R" ], " ", [ "2", "{" ],
                        " ", "@", " ", "q", [ "j", "D" ], [ "5", "D" ], "1", [ "7", "R" ], [ "`", "R" ], "-" ],
            };

            if (Object.freeze)
            {
                Object.freeze(TengwarExampleUTONAME2);
            }

            return TengwarExampleUTONAME2;
        });
