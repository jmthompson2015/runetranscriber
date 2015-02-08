/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Silmarillion">The Silmarillion</a>, title page top.
 */
var TengwarExampleTS1 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/silmarillion/TheSilmarillion_TitlePage1.png",

    LANGUAGE_STRING: "The Tales of the First Age when Morgoth dwelt in Middle-earth\n"
            + "and the Elves made war upon him for the recovery of the Silmarils.",

    LANGUAGE_WORDS: [ "the", " ", "tales", " ", "of", " ", "the", " ", "first",
            " ", "age", " ", "when", " ", "morgoth", " ", "dwelt", " ", "in",
            " ", "middle", " ", "earth", "\n", "and", " ", "the", " ", "elves",
            " ", "made", " ", "war", " ", "upon", " ", "him", " ", "for", " ",
            "the", " ", "recovery", " ", "of the", " ", "silmarils", "." ],

    PHONEMES: [ "the", " ", "t", [ "a", "l", "e" ], "s", " ", "of", " ", "the",
            " ", "f", [ "i", "r" ], "s", "t", " ", [ "a", "j", "e" ], " ",
            "wh", [ "e", "n" ], " ", "m", [ "o", "r" ], "g", [ "o", "th" ],
            " ", "d", "w", [ "e", "l" ], "t", " ", [ "i", "n" ], " ", "m",
            [ "i", "d", "d" ], [ "l", "e" ], " ", [ "e", "a" ], "r", "th",
            "\n", "and", " ", "the", " ", [ "e", "l" ], [ "v", "e" ], "s", " ",
            "m", [ "a", "d", "e" ], " ", "w", [ "o", "r" ], " ", [ "u", "p" ],
            [ "o", "n" ], " ", "h", [ "i", "m" ], " ", "f", [ "o", "r" ], " ",
            "the", " ", "r", [ "e", "k" ], [ "o", "v" ], [ "e", "r" ], "y",
            " ", "of the", " ", "s", [ "i", "l" ], "m", [ "a", "r" ],
            [ "i", "l" ], "s", "." ],

    RUNES: [ // Line 1
            // the
            TengwaRune.THE,
            TengwaRune.SPACE,
            // tales
            TengwaRune.TINCO,
            [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE, TengwaRune.UNDER_DOT ],
            TengwaRune.SILME,
            TengwaRune.SPACE,
            // of
            TengwaRune.OF,
            TengwaRune.SPACE,
            // the
            TengwaRune.THE,
            TengwaRune.SPACE,
            // first
            TengwaRune.FORMEN,
            [ TengwaRune.ACUTE, TengwaRune.ORE ],
            TengwaRune.SILME,
            TengwaRune.TINCO,
            TengwaRune.SPACE,
            // age
            [ TengwaRune.THREE_DOTS, TengwaRune.ANGA, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // when
            TengwaRune.HWESTA_SINDARINWA,
            [ TengwaRune.DOT, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // morgoth
            TengwaRune.MALTA,
            [ TengwaRune.LEFT_CURL, TengwaRune.ORE ],
            TengwaRune.UNGWE,
            [ TengwaRune.LEFT_CURL, TengwaRune.THULE ],
            TengwaRune.SPACE,
            // dwelt
            TengwaRune.ANDO,
            TengwaRune.VALA,
            [ TengwaRune.DOT, TengwaRune.LAMBE ],
            TengwaRune.TINCO,
            TengwaRune.SPACE,
            // in
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // middle
            TengwaRune.MALTA,
            [ TengwaRune.ACUTE, TengwaRune.ANDO, TengwaRune.UNDER_BAR ],
            [ TengwaRune.LAMBE, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // earth
            [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER,
                    TengwaRune.THREE_UNDER_DOTS ], TengwaRune.ORE,
            TengwaRune.THULE, TengwaRune.NEWLINE,

            // Line 2
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // elves
            [ TengwaRune.DOT, TengwaRune.LAMBE ],
            [ TengwaRune.AMPA, TengwaRune.UNDER_DOT ], TengwaRune.SILME,
            TengwaRune.SPACE,
            // made
            TengwaRune.MALTA,
            [ TengwaRune.THREE_DOTS, TengwaRune.ANDO, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // war
            TengwaRune.VALA, [ TengwaRune.LEFT_CURL, TengwaRune.ORE ],
            TengwaRune.SPACE,
            // upon
            [ TengwaRune.RIGHT_CURL, TengwaRune.PARMA ],
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // him
            TengwaRune.HYARMEN, [ TengwaRune.ACUTE, TengwaRune.MALTA ],
            TengwaRune.SPACE,
            // for
            TengwaRune.FORMEN, [ TengwaRune.LEFT_CURL, TengwaRune.ORE ],
            TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // recovery
            TengwaRune.ROMEN, [ TengwaRune.DOT, TengwaRune.QUESSE ],
            [ TengwaRune.LEFT_CURL, TengwaRune.AMPA ],
            [ TengwaRune.DOT, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ], TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // silmarils.
            TengwaRune.SILME, [ TengwaRune.ACUTE, TengwaRune.LAMBE ],
            TengwaRune.MALTA, [ TengwaRune.THREE_DOTS, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.LAMBE ], TengwaRune.SILME,
            TengwaRune.PERIOD ],

    FONT_LETTERS: [ "@", " ", "1", [ "j", "D", "&#201;" ], "8", " ", "W", " ",
            "@", " ", "e", [ "6", "R" ], "8", "1", " ", [ "s", "D", "&#201;" ],
            " ", "o", [ "5", "T" ], " ", "t", [ "6", "Y" ], "x", [ "3", "Y" ],
            " ", "2", "y", [ "j", "T" ], "1", " ", [ "5", "R" ], " ", "t",
            [ "2", "R", "&#237;" ], [ "j", "&#201;" ], " ",
            [ "`", "T", "&#209;" ], "6", "3", [ "2", "{" ], " ", "@", " ",
            [ "j", "T" ], [ "r", "&#201;" ], "8", " ", "t",
            [ "2", "D", "&#201;" ], " ", "y", [ "6", "Y" ], " ",
            [ "q", "&#225;" ], [ "5", "Y" ], " ", "9", [ "t", "R" ], " ", "e",
            [ "6", "Y" ], " ", "@", " ", "7", [ "z", "T" ], [ "r", "Y" ],
            [ "7", "T" ], [ "~", "R" ], " ", "W?", " ", "8", [ "j", "R" ], "t",
            [ "7", "D" ], [ "j", "R" ], "8", "-" ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleTS1)
};
