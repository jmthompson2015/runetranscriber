/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Silmarillion">The Silmarillion</a>, title page top.
 */
var TengwarExampleTS1 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/silmarillion/TheSilmarillion_TitlePage1.png",

    LANGUAGE_LETTERS: "The Tales of the First Age when Morgoth dwelt in Middle-earth\n"
            + "and the Elves made war upon him for the recovery of the Silmarils.",

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
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleTS1)
};
