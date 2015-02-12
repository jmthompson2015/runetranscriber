/*
 * Provides an example for Tengwar runes from <a href="http://lotr.wikia.com/wiki/Sauron_Defeated">Sauron Defeated</a>.
 */
var TengwarExampleSD2 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/saurondefeated/SD_TitlePage2.jpg",

    LANGUAGE_STRING: "Then follows an account of the intrusion of the Cataclysm of the West\n"
            + "into the deliberations of certain scholars of Oxford and\n"
            + "the Fall of Sauron named Zigur in the Drowning of Anadune.",

    LANGUAGE_WORDS: [ "then", " ", "follows", " ", "an", " ", "account", " ",
            "of the", " ", "intrusion", " ", "of the", " ", "cataclysm", " ",
            "of the", " ", "west", "\n", "into", " ", "the", " ",
            "deliberations", " ", "of", " ", "certain", " ", "scholars", " ",
            "of", " ", "oxford", " ", "and", "\n", "the", " ", "fall", " ",
            "of", " ", "sauron", " ", "named", " ", "zigur", " ", "in", " ",
            "the", " ", "drowning", " ", "of", " ", "anadune", "." ],

    PHONEMES: [ "th", [ "e", "n" ], " ", "f", [ "o", "l", "l" ], [ "o", "w" ],
            "s", " ", [ "a", "n" ], " ", [ "a", "k" ], [ "o", "w" ], "n", "t",
            " ", "of the", " ", [ "i", "n" ], "t", "r", [ "u", "s" ], [ "i" ],
            [ "o", "n" ], " ", "of the", " ", "k", [ "a", "t" ], [ "a", "k" ],
            "l", "y", "s", "m", " ", "of the", " ", "w", [ "e", "s" ], "t",
            "\n", [ "i", "n" ], "t", "o", " ", "the", " ", "d",
            [ "e", "l" ], [ "i", "b" ], [ "e", "r" ], "a", "t",  "i",
            [ "o", "n" ], "s", " ", "of", " ", "c", [ "e", "r" ], "t", "a",
            "n", " ", "s", "k", [ "o", "l" ], [ "a", "r" ], "s", " ", "of",
            " ", [ "o", "k" ], "s", "f", [ "o", "r" ], "d", " ", "and", "\n",
            "the", " ", "f", [ "a", "l", "l" ], " ", "of", " ", "s", "a",
            [ "u", "r" ], [ "o", "n" ], " ", "n", [ "a", "m" ], [ "e", "d" ],
            " ", "z", [ "i", "g" ], [ "u", "r" ], " ", [ "i", "n" ], " ",
            "the", " ", "d", "r", [ "o", "w" ], "n", [ "i", "ng" ], " ", "of",
            " ", [ "a", "n" ], [ "a", "d" ], [ "u", "n", "e" ], "." ],

    RUNES: [
    // Line 1
    // then
    TengwaRune.ANTO, [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.SPACE,
    // follows
    TengwaRune.FORMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
            [ TengwaRune.LEFT_CURL, TengwaRune.VALA ], TengwaRune.SILME,
            TengwaRune.SPACE,
            // an
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // account
            [ TengwaRune.THREE_DOTS, TengwaRune.QUESSE ],
            [ TengwaRune.LEFT_CURL, TengwaRune.VALA ], TengwaRune.NUMEN,
            TengwaRune.TINCO, TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // intrusion
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.TINCO,
            TengwaRune.ROMEN, [ TengwaRune.RIGHT_CURL, TengwaRune.SILME ],
            [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // cataclysm
            TengwaRune.QUESSE, [ TengwaRune.THREE_DOTS, TengwaRune.TINCO ],
            [ TengwaRune.THREE_DOTS, TengwaRune.QUESSE ], TengwaRune.LAMBE,
            TengwaRune.ANNA, TengwaRune.SILME, TengwaRune.MALTA,
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // west
            TengwaRune.VALA, [ TengwaRune.DOT, TengwaRune.SILME ],
            TengwaRune.TINCO, TengwaRune.NEWLINE,

            // Line 2
            // into
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ],
            TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // deliberations
            TengwaRune.ANDO, [ TengwaRune.DOT, TengwaRune.LAMBE ],
            [ TengwaRune.ACUTE, TengwaRune.UMBAR ],
            [ TengwaRune.DOT, TengwaRune.ORE ],
            [ TengwaRune.THREE_DOTS, TengwaRune.SHORT_CARRIER ],
            TengwaRune.TINCO, [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ], TengwaRune.SILME,
            TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // certain
            TengwaRune.SILME_NUQUERNA, [ TengwaRune.DOT, TengwaRune.ORE ],
            TengwaRune.TINCO,
            [ TengwaRune.THREE_DOTS, TengwaRune.SHORT_CARRIER ],
            TengwaRune.NUMEN, TengwaRune.SPACE,
            // scholars
            TengwaRune.SILME, TengwaRune.QUESSE,
            [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ],
            [ TengwaRune.THREE_DOTS, TengwaRune.ORE ], TengwaRune.SILME,
            TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // oxford
            [ TengwaRune.LEFT_CURL, TengwaRune.QUESSE ], TengwaRune.SILME,
            TengwaRune.FORMEN, [ TengwaRune.LEFT_CURL, TengwaRune.ORE ],
            TengwaRune.ANDO, TengwaRune.SPACE,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.NEWLINE,

            // Line 3
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // fall
            TengwaRune.FORMEN,
            [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
            TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // sauron
            TengwaRune.SILME,
            [ TengwaRune.THREE_DOTS, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.RIGHT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // named
            TengwaRune.NUMEN, [ TengwaRune.THREE_DOTS, TengwaRune.MALTA ],
            [ TengwaRune.DOT, TengwaRune.ANDO ], TengwaRune.SPACE,
            // zigur
            TengwaRune.ESSE, [ TengwaRune.ACUTE, TengwaRune.UNGWE ],
            [ TengwaRune.RIGHT_CURL, TengwaRune.ROMEN ], TengwaRune.SPACE,
            // in
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // drowning
            TengwaRune.ANDO, TengwaRune.ROMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.VALA ], TengwaRune.NUMEN,
            [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // anadune.
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ],
            [ TengwaRune.THREE_DOTS, TengwaRune.ANDO ],
            [ TengwaRune.RIGHT_CURL, TengwaRune.NUMEN, TengwaRune.UNDER_DOT ],
            TengwaRune.PERIOD, ],

    FONT_LETTERS: [ "4", [ "5", "T" ], " ", "e", [ "j", "Y", "&#237;" ],
            [ "y", "Y" ], "8", " ", [ "5", "D" ], " ", [ "z", "D" ],
            [ "y", "Y" ], "5", "1", " ", "W?", " ", [ "5", "R" ], "1", "7",
            [ "8", "&#225;" ], [ "`", "R" ], [ "5", "Y" ], " ", "W?", " ", "z",
            [ "1", "D" ], [ "z", "D" ], "j", "h", "8", "t", " ", "W?", " ",
            "y", [ "8", "T" ], "1", [ "5", "R" ], "1", [ "`", "Y" ], " ", "@",
            " ", "2", [ "j", "T" ], [ "w", "R" ], [ "6", "T" ], [ "`", "D" ],
            "1", [ "`", "R" ], [ "5", "Y" ], "8", " ", "W", " ", "i",
            [ "6", "T" ], "1", [ "`", "D" ], "5", " ", "8", "z", [ "j", "Y" ],
            [ "6", "D" ], "8", " ", "W", " ", [ "z", "Y" ], "8", "e",
            [ "6", "Y" ], "2", " ", [ "2", "{" ], "@", " ", "e",
            [ "j", "D", "&#237;" ], " ", "W", " ", "8", [ "`", "D" ],
            [ "7", "&#225;" ], [ "5", "Y" ], " ", "5", [ "t", "D" ],
            [ "2", "T" ], " ", "k", [ "x", "R" ], [ "7", "&#225;" ], " ",
            [ "5", "R" ], " ", "@", " ", "2", "7", [ "y", "Y" ], "5",
            [ "b", "R" ], " ", "W", " ", [ "5", "D" ], [ "2", "D" ],
            [ "5", "&#225;", "&#201;" ], "-" ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleSD2)
};
