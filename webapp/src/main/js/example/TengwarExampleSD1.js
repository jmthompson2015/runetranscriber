/*
 * Provides an example for Tengwar runes from <a href="http://lotr.wikia.com/wiki/Sauron_Defeated">Sauron Defeated</a>.
 */
var TengwarExampleSD1 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/saurondefeated/SD_TitlePage1.jpg",

    LANGUAGE_LETTERS: "In this book is traced first the story of the destruction of the\n"
            + "One Ring and the Downfall of Sauron at the End of the Third Age.",

    RUNES: [
            // Line 1
            // in
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // this
            TengwaRune.ANTO,
            [ TengwaRune.ACUTE, TengwaRune.SILME ],
            TengwaRune.SPACE,
            // book
            TengwaRune.UMBAR,
            [ TengwaRune.LEFT_CURL, TengwaRune.LONG_CARRIER ],
            TengwaRune.QUESSE,
            TengwaRune.SPACE,
            // is
            [ TengwaRune.ACUTE, TengwaRune.SILME ],
            TengwaRune.SPACE,
            // traced
            TengwaRune.TINCO,
            TengwaRune.ROMEN,
            [ TengwaRune.THREE_DOTS, TengwaRune.SILME_NUQUERNA,
                    TengwaRune.UNDER_DOT ], TengwaRune.ANDO, TengwaRune.SPACE,
            // first
            TengwaRune.FORMEN, [ TengwaRune.ACUTE, TengwaRune.ORE ],
            TengwaRune.SILME, TengwaRune.TINCO, TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // story
            TengwaRune.SILME, TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ], TengwaRune.ANNA,
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // destruction
            TengwaRune.ANDO, [ TengwaRune.DOT, TengwaRune.SILME ],
            TengwaRune.TINCO, TengwaRune.ROMEN,
            [ TengwaRune.RIGHT_CURL, TengwaRune.QUESSE ], TengwaRune.TINCO,
            [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.NEWLINE,

            // Line 2
            // one
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // ring
            TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.NGWALME ],
            TengwaRune.SPACE,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // downfall
            TengwaRune.ANDO, [ TengwaRune.LEFT_CURL, TengwaRune.VALA ],
            TengwaRune.NUMEN, TengwaRune.FORMEN,
            [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
            TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // sauron
            TengwaRune.SILME,
            [ TengwaRune.THREE_DOTS, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.RIGHT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // at
            [ TengwaRune.THREE_DOTS, TengwaRune.TINCO ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // end
            [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.ANDO,
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // third
            TengwaRune.THULE, [ TengwaRune.ACUTE, TengwaRune.ORE ],
            TengwaRune.ANDO, TengwaRune.SPACE,
            // age.
            [ TengwaRune.THREE_DOTS, TengwaRune.ANGA, TengwaRune.UNDER_DOT ],
            TengwaRune.PERIOD, ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleSD1)
};
