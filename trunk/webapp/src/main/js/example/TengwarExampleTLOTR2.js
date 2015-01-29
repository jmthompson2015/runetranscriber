/*
 * Provides an example for Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Lord_of_the_Rings">The Lord of the
 * Rings</a>, title page bottom
 */
var TengwarExampleTLOTR2 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/lordoftherings/TLOTR_TitlePage2.jpg",

    LANGUAGE_LETTERS: "of Westmarch by John Ronald Reuel Tolkien. Herein is set forth\n"
            + "the history of the War of the Ring and the Return of the King as seen by the hobbits.",

    RUNES: [
    // Line 1
    // of
    TengwaRune.OF, TengwaRune.SPACE,
    // westmarch
    TengwaRune.VALA, [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.TINCO,
            TengwaRune.MALTA, [ TengwaRune.THREE_DOTS, TengwaRune.ORE ],
            TengwaRune.CALMA, TengwaRune.SPACE,
            // by
            TengwaRune.UMBAR, [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ],
            TengwaRune.SPACE,
            // john
            TengwaRune.ANGA, TengwaRune.HYARMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // ronald
            TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ],
            [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ], TengwaRune.ANDO,
            TengwaRune.SPACE,
            // rueul
            TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.ACUTE, TengwaRune.LAMBE ], TengwaRune.SPACE,
            // tolkien.
            TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ],
            TengwaRune.QUESSE, [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.PERIOD,
            // herein
            TengwaRune.HYARMEN,
            [ TengwaRune.ACUTE, TengwaRune.ROMEN, TengwaRune.UNDER_DOT ],
            [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // is
            [ TengwaRune.ACUTE, TengwaRune.ESSE ], TengwaRune.SPACE,
            // set
            TengwaRune.SILME, [ TengwaRune.ACUTE, TengwaRune.TINCO ],
            TengwaRune.SPACE,
            // forth
            TengwaRune.FORMEN, [ TengwaRune.LEFT_CURL, TengwaRune.ORE ],
            TengwaRune.THULE, TengwaRune.NEWLINE,

            // Line 2
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // history
            TengwaRune.HYARMEN, [ TengwaRune.ACUTE, TengwaRune.SILME ],
            TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ], TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // war
            TengwaRune.VALA, [ TengwaRune.LEFT_CURL, TengwaRune.ORE ],
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // ring
            TengwaRune.ROMEN, [ TengwaRune.DOT, TengwaRune.NGWALME ],
            TengwaRune.SPACE,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // return
            TengwaRune.ROMEN, [ TengwaRune.DOT, TengwaRune.TINCO ],
            [ TengwaRune.TOP_CURL, TengwaRune.ORE ], TengwaRune.NUMEN,
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // king
            TengwaRune.QUESSE, [ TengwaRune.DOT, TengwaRune.NGWALME ],
            TengwaRune.SPACE,
            // as
            [ TengwaRune.THREE_DOTS, TengwaRune.ESSE_NUQUERNA ],
            TengwaRune.SPACE,
            // seen
            TengwaRune.SILME, [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ], TengwaRune.NUMEN,
            TengwaRune.SPACE,
            // by
            TengwaRune.UMBAR, [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ],
            TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // hobbits.
            TengwaRune.HYARMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.UMBAR, TengwaRune.UNDER_BAR ],
            [ TengwaRune.DOT, TengwaRune.TINCO ], TengwaRune.SILME,
            TengwaRune.PERIOD, ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleTLOTR2)
};
