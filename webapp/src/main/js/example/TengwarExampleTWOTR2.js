/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_War_of_the_Ring_(book)">The War Of The Ring</a>, title page bottom.
 */
var TengwarExampleTWOTR2 =
{
    IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/warofthering/TWOTR_TitlePage2.jpg",

    LANGUAGE_STRING: "journey of Frodo with Samwise and Gollum to the Morannon, of the\n"
            + "meeting with Faramir, and the stairs of Cirith Ungol, of the Battle of the\n"
            + "Pelennor Fields, and of the coming of Aragorn in the fleet of Umbar.",

    LANGUAGE_WORDS: [ "journey", " ", "of", " ", "frodo", " ", "with", " ", "samwise", " ", "and", " ", "gollum", " ",
            "to", " ", "the", " ", "morannon", ",", "of the", "\n", "meeting", " ", "with", " ", "faramir", ",", "and",
            " ", "the", " ", "stairs", " ", "of", " ", "cirith", " ", "ungol", ",", "of the", " ", "battle", " ",
            "of the", "\n", "pelennor", " ", "fields", ",", "and", " ", "of the", " ", "coming", " ", "of", " ",
            "aragorn", " ", "in", " ", "the", " ", "fleet", " ", "of", " ", "umbar", "." ],

    PHONEMES: [ "j", [ "o", "u" ], "r", "n", [ "e", "y" ], " ", "of", " ", "f", "r", [ "o", "d" ], "o", " ", "w",
            [ "i", "th" ], " ", "s", [ "a", "m" ], "w", [ "i", "s", "e" ], " ", "and", " ", "g", [ "o", "l", "l" ],
            [ "u", "m" ], " ", "t", "o", " ", "the", " ", "m", [ "o", "r" ], [ "a", "n", "n" ], [ "o", "n" ], ",",
            "of the", "\n", "m", [ "e", "e", "t" ], [ "i", "ng" ], " ", "w", [ "i", "th" ], " ", "f", [ "a", "r" ],
            [ "a", "m" ], [ "i", "r" ], ",", "and", " ", "the", " ", "s", "t", "ai", "r", "s", " ", "of", " ", "k",
            [ "i", "r" ], [ "i", "th" ], " ", [ "u", "ng" ], [ "o", "l" ], ",", "of the", " ", "b", [ "a", "t", "t" ],
            [ "l", "e" ], " ", "of the", "\n", "p", [ "e", "l" ], [ "e", "n", "n" ], [ "o", "r" ], " ", "f",
            [ "i", "e" ], "l", "d", "s", ",", "and", " ", "of the", " ", "c", [ "o", "m" ], [ "i", "ng" ], " ", "of",
            " ", [ "a", "r" ], [ "a", "g" ], [ "o", "r" ], "n", " ", [ "i", "n" ], " ", "the", " ", "f", "l",
            [ "e", "e", "t" ], " ", "of", " ", [ "u", "m" ], "b", [ "a", "r" ], "." ],

    RUNES: [
    // Line 1
    // journey
    TengwaRune.ANGA, [ TengwaRune.LEFT_CURL, TengwaRune.URE ], TengwaRune.ORE, TengwaRune.NUMEN,
            [ TengwaRune.DOT, TengwaRune.ANNA ], TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // frodo
            TengwaRune.FORMEN, TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.ANDO ],
            [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ], TengwaRune.SPACE,
            // with
            TengwaRune.VALA, [ TengwaRune.ACUTE, TengwaRune.ANTO ], TengwaRune.SPACE,
            // samwise
            TengwaRune.SILME, [ TengwaRune.THREE_DOTS, TengwaRune.MALTA ], TengwaRune.VALA,
            [ TengwaRune.ACUTE, TengwaRune.SILME, TengwaRune.UNDER_DOT ], TengwaRune.SPACE,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
            // gollum
            TengwaRune.UNGWE, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
            [ TengwaRune.RIGHT_CURL, TengwaRune.MALTA ], TengwaRune.SPACE,
            // to
            TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // morannon,
            TengwaRune.MALTA, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN, TengwaRune.UNDER_BAR, ],
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ], TengwaRune.COMMA,
            // of the
            TengwaRune.OF_THE, TengwaRune.NEWLINE,

            // Line 2
            // meeting
            TengwaRune.MALTA, [ TengwaRune.DOT, TengwaRune.DOT, TengwaRune.TINCO ],
            [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SPACE,
            // with
            TengwaRune.VALA, [ TengwaRune.ACUTE, TengwaRune.ANTO ], TengwaRune.SPACE,
            // faramir,
            TengwaRune.FORMEN, [ TengwaRune.THREE_DOTS, TengwaRune.ROMEN ],
            [ TengwaRune.THREE_DOTS, TengwaRune.MALTA ], [ TengwaRune.ACUTE, TengwaRune.ROMEN ], TengwaRune.COMMA,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // stairs
            TengwaRune.SILME, TengwaRune.TINCO, [ TengwaRune.THREE_DOTS, TengwaRune.YANTA ], TengwaRune.ORE,
            TengwaRune.SILME, TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // cirith
            TengwaRune.QUESSE, [ TengwaRune.ACUTE, TengwaRune.ROMEN ], [ TengwaRune.ACUTE, TengwaRune.THULE ],
            TengwaRune.SPACE,
            // ungol,
            [ TengwaRune.RIGHT_CURL, TengwaRune.NGWALME ], [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ],
            TengwaRune.COMMA,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // battle
            TengwaRune.UMBAR, [ TengwaRune.THREE_DOTS, TengwaRune.TINCO, TengwaRune.UNDER_BAR ],
            [ TengwaRune.LAMBE, TengwaRune.UNDER_DOT ], TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.NEWLINE,

            // Line 3
            // pelennor
            TengwaRune.PARMA, [ TengwaRune.DOT, TengwaRune.LAMBE ],
            [ TengwaRune.DOT, TengwaRune.NUMEN, TengwaRune.UNDER_BAR ], [ TengwaRune.LEFT_CURL, TengwaRune.ORE ],
            TengwaRune.SPACE,
            // fields,
            TengwaRune.FORMEN, [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.UNDER_DOT ], TengwaRune.LAMBE,
            TengwaRune.ANDO, TengwaRune.SILME, TengwaRune.COMMA,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // coming
            TengwaRune.SILME_NUQUERNA, [ TengwaRune.LEFT_CURL, TengwaRune.MALTA ],
            [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // aragorn
            [ TengwaRune.THREE_DOTS, TengwaRune.ROMEN ], [ TengwaRune.THREE_DOTS, TengwaRune.UNGWE ],
            [ TengwaRune.LEFT_CURL, TengwaRune.ORE ], TengwaRune.NUMEN, TengwaRune.SPACE,
            // in
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // fleet
            TengwaRune.FORMEN, TengwaRune.LAMBE, [ TengwaRune.DOT, TengwaRune.DOT, TengwaRune.TINCO ],
            TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // umbar.
            [ TengwaRune.RIGHT_CURL, TengwaRune.MALTA ], TengwaRune.UMBAR, [ TengwaRune.THREE_DOTS, TengwaRune.ORE ],
            TengwaRune.PERIOD ],

    FONT_LETTERS: [ "s", [ ".", "Y" ], "6", "5", [ "h", "T" ], " ", "W", " ", "e", "7", [ "2", "Y" ], [ "`", "Y" ],
            " ", "y", [ "4", "R" ], " ", "8", [ "t", "D" ], "y", [ "8", "R", "&#201;" ], " ", [ "2", "{" ], " ", "x",
            [ "j", "Y", "&#237;" ], [ "t", "&#225;" ], " ", "1", [ "`", "Y" ], " ", "@", " ", "t", [ "7", "Y" ],
            [ "5", "D", "&#237;" ], [ "5", "Y" ], "&#183;", "W?", "t", [ "1", "B", "T" ], [ "b", "R" ], " ", "y",
            [ "4", "R" ], " ", "e", [ "7", "D" ], [ "t", "D" ], [ "7", "R" ], "&#183;", [ "2", "{" ], " ", "@", " ",
            "8", "1", [ "l", "D" ], "6", "8", " ", "W", " ", "z", [ "7", "R" ], [ "3", "R" ], " ", [ "b", "&#225;" ],
            [ "j", "Y" ], "&#183;", "W?", " ", "w", [ "1", "D", "&#237;" ], [ "j", "&#201;" ], " ", "W?", "q",
            [ "j", "T" ], [ "5", "T", "&#237;" ], [ "6", "Y" ], " ", "e", [ "`", "R", "&#201;" ], "j", "2", "8",
            "&#183;", [ "2", "{" ], " ", "W?", " ", "i", [ "t", "Y" ], [ "b", "R" ], " ", "W", " ", [ "7", "D" ],
            [ "x", "D" ], [ "6", "Y" ], "5", " ", [ "5", "R" ], " ", "@", " ", "e", "j", [ "1", "B", "T" ], " ", "W",
            " ", [ "t", "&#225;" ], "w", [ "6", "D" ], "-" ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleTWOTR2)
};
