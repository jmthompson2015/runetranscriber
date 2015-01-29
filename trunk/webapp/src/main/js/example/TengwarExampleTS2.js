/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Silmarillion">The Silmarillion</a>, title page bottom.
 */
var TengwarExampleTS2 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/silmarillion/TheSilmarillion_TitlePage2.png",

    LANGUAGE_LETTERS: "To which are appended the Downfall of Numenor and the history of the\n"
            + "Rings of Power and the Third Age in which these tales come to their end.",

    RUNES: [
    // Line 1
    // to
    [ TengwaRune.TINCO, TengwaRune.LEFT_UNDER_CURL ], TengwaRune.SPACE,
    // which
    TengwaRune.HWESTA_SINDARINWA, [ TengwaRune.ACUTE, TengwaRune.CALMA ],
            TengwaRune.SPACE,
            // are
            [ TengwaRune.THREE_DOTS, TengwaRune.ORE, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // appended
            [ TengwaRune.THREE_DOTS, TengwaRune.PARMA, TengwaRune.UNDER_BAR ],
            [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.ANDO,
            [ TengwaRune.DOT, TengwaRune.ANDO ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // downfall
            TengwaRune.ANDO, [ TengwaRune.LEFT_CURL, TengwaRune.VALA ],
            TengwaRune.NUMEN, TengwaRune.FORMEN,
            [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
            TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // numenor
            TengwaRune.NUMEN, [ TengwaRune.RIGHT_CURL, TengwaRune.MALTA ],
            [ TengwaRune.DOT, TengwaRune.NUMEN ],
            [ TengwaRune.LEFT_CURL, TengwaRune.ORE ], TengwaRune.SPACE,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // history
            TengwaRune.HYARMEN, [ TengwaRune.ACUTE, TengwaRune.SILME ],
            TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ], TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.NEWLINE,

            // Line 2
            // rings
            TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.NGWALME ],
            TengwaRune.SILME, TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // power
            TengwaRune.PARMA, [ TengwaRune.LEFT_CURL, TengwaRune.VALA ],
            TengwaRune.ORE, TengwaRune.SPACE,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // third
            TengwaRune.THULE, [ TengwaRune.ACUTE, TengwaRune.ORE ],
            TengwaRune.ANDO, TengwaRune.SPACE,
            // age
            [ TengwaRune.THREE_DOTS, TengwaRune.ANGA, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // in
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // which
            TengwaRune.HWESTA_SINDARINWA,
            [ TengwaRune.ACUTE, TengwaRune.CALMA ], TengwaRune.SPACE,
            // these
            TengwaRune.ANTO,
            [ TengwaRune.DOT, TengwaRune.SILME, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // tales
            TengwaRune.TINCO,
            [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE, TengwaRune.UNDER_DOT ],
            TengwaRune.SILME, TengwaRune.SPACE,
            // come
            TengwaRune.QUESSE,
            [ TengwaRune.LEFT_CURL, TengwaRune.MALTA, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // to
            [ TengwaRune.TINCO, TengwaRune.LEFT_UNDER_CURL ], TengwaRune.SPACE,
            // their
            TengwaRune.ANTO, [ TengwaRune.DOT, TengwaRune.YANTA ],
            TengwaRune.ORE, TengwaRune.SPACE,
            // end.
            [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.ANDO,
            TengwaRune.PERIOD ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleTS2)
};
