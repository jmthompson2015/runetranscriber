/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_War_of_the_Ring_(book)">The War Of The Ring</a>, title page top.
 */
var TengwarExampleTWOTR1 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/warofthering/TWOTR_TitlePage1.jpg",

    LANGUAGE_LETTERS: "In the War of the Ring is traced the story of the victory at Helm's Deep\n"
            + "and the drowning of Isengard by the Ents, then is told of the",

    RUNES: [
            // Line 1
            // in
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // the
            TengwaRune.THE,
            TengwaRune.SPACE,
            // war
            TengwaRune.VALA,
            [ TengwaRune.THREE_DOTS, TengwaRune.ORE ],
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE,
            TengwaRune.SPACE,
            // ring
            TengwaRune.ROMEN,
            [ TengwaRune.ACUTE, TengwaRune.NGWALME ],
            TengwaRune.SPACE,
            // is
            [ TengwaRune.ACUTE, TengwaRune.SILME ],
            TengwaRune.SPACE,
            // traced
            TengwaRune.TINCO,
            TengwaRune.ROMEN,
            [ TengwaRune.THREE_DOTS, TengwaRune.SILME_NUQUERNA,
                    TengwaRune.UNDER_DOT ], TengwaRune.ANDO, TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // story
            TengwaRune.SILME, TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ], TengwaRune.ANNA,
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // history
            TengwaRune.AMPA, [ TengwaRune.ACUTE, TengwaRune.SILME_NUQUERNA ],
            TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            TengwaRune.ANNA, TengwaRune.SPACE,
            // at
            [ TengwaRune.THREE_DOTS, TengwaRune.TINCO ], TengwaRune.SPACE,
            // helms
            TengwaRune.HYARMEN, [ TengwaRune.DOT, TengwaRune.LAMBE ],
            TengwaRune.MALTA, TengwaRune.SILME, TengwaRune.SPACE,
            // deep
            TengwaRune.ANDO,
            [ TengwaRune.DOT, TengwaRune.DOT, TengwaRune.PARMA ],
            TengwaRune.NEWLINE,

            // Line 2
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // drowning
            TengwaRune.ANDO, TengwaRune.ROMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.VALA ], TengwaRune.NUMEN,
            [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // isengard
            [ TengwaRune.ACUTE, TengwaRune.SILME ],
            [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.UNGWE,
            [ TengwaRune.THREE_DOTS, TengwaRune.ORE ], TengwaRune.ANDO,
            TengwaRune.SPACE,
            // by
            TengwaRune.UMBAR, TengwaRune.ANNA, TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // ents,
            [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.TINCO,
            TengwaRune.SILME, TengwaRune.COMMA,
            // then
            TengwaRune.ANTO, [ TengwaRune.DOT, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // is
            [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.SPACE,
            // told
            TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ],
            TengwaRune.ANDO, TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleTWOTR1)
};
