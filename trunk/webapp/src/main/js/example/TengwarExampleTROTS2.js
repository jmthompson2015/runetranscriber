/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Return_of_the_Shadow">The Return Of The Shadow</a>, title page bottom.
 */
var TengwarExampleTROTS2 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/returnoftheshadow/TROTS_TitlePage2.jpg",

    LANGUAGE_LETTERS: "named Bingo but afterwards Frodo, is followed from Hobbiton in the\n"
            + "Shire through the Old Forest to Weathertop and Rivendell, and ends\n"
            + "in this volume before the tomb of Balin the Dwarf-Lord of Moria.",

    RUNES: [
            // Line 1
            // named
            TengwaRune.NUMEN,
            [ TengwaRune.THREE_DOTS, TengwaRune.MALTA, TengwaRune.UNDER_DOT ],
            TengwaRune.ANDO,
            TengwaRune.SPACE,
            // bingo
            TengwaRune.UMBAR,
            [ TengwaRune.ACUTE, TengwaRune.NGWALME, ],
            [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ],
            TengwaRune.SPACE,
            // but
            TengwaRune.UMBAR,
            [ TengwaRune.RIGHT_CURL, TengwaRune.TINCO ],
            TengwaRune.SPACE,
            // afterwards
            [ TengwaRune.THREE_DOTS, TengwaRune.FORMEN ],
            TengwaRune.TINCO,
            [ TengwaRune.DOT, TengwaRune.ORE ],
            TengwaRune.VALA,
            [ TengwaRune.THREE_DOTS, TengwaRune.ORE ],
            TengwaRune.ANDO,
            TengwaRune.SILME,
            TengwaRune.SPACE,
            // frodo,
            TengwaRune.FORMEN,
            TengwaRune.ROMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.ANDO ],
            [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ],
            TengwaRune.COMMA,
            // is
            [ TengwaRune.ACUTE, TengwaRune.SILME ],
            TengwaRune.SPACE,
            // followed
            TengwaRune.FORMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
            [ TengwaRune.LEFT_CURL, TengwaRune.VALA, TengwaRune.UNDER_DOT ],
            TengwaRune.ANDO,
            TengwaRune.SPACE,
            // from
            TengwaRune.FORMEN,
            TengwaRune.ROMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.MALTA ],
            TengwaRune.SPACE,
            // hobbiton
            TengwaRune.HYARMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.UMBAR, TengwaRune.UNDER_BAR ],
            [ TengwaRune.ACUTE, TengwaRune.TINCO ],
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // in
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // the
            TengwaRune.THE,
            TengwaRune.NEWLINE,

            // Line 2
            // shire
            TengwaRune.HARMA,
            [ TengwaRune.ACUTE, TengwaRune.ROMEN, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // through
            TengwaRune.THULE,
            TengwaRune.ROMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.URE ],
            TengwaRune.GH,
            TengwaRune.SPACE,
            // the
            TengwaRune.THE,
            TengwaRune.SPACE,
            // old
            [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ],
            TengwaRune.ANDO,
            TengwaRune.SPACE,
            // forrest
            TengwaRune.FORMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.DOT, TengwaRune.SILME ],
            TengwaRune.TINCO,
            TengwaRune.SPACE,
            // to
            TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ],
            TengwaRune.SPACE,
            // weathertop
            TengwaRune.VALA,
            [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER,
                    TengwaRune.THREE_UNDER_DOTS ],
            TengwaRune.ANTO,
            [ TengwaRune.DOT, TengwaRune.ORE ],
            TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.PARMA ],
            TengwaRune.SPACE,
            // and
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN, TengwaRune.ANDO ],
            TengwaRune.SPACE,
            // rivendell
            TengwaRune.ROMEN,
            [ TengwaRune.ACUTE, TengwaRune.AMPA ],
            [ TengwaRune.DOT, TengwaRune.NUMEN ],
            TengwaRune.ANDO,
            [ TengwaRune.DOT, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
            TengwaRune.SPACE,
            // and
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN, TengwaRune.ANDO ],
            TengwaRune.SPACE,
            // ends
            [ TengwaRune.DOT, TengwaRune.NUMEN ],
            TengwaRune.ANDO,
            TengwaRune.SILME,
            TengwaRune.NEWLINE,

            // Line 3
            // in
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // this
            TengwaRune.ANTO,
            [ TengwaRune.ACUTE, TengwaRune.SILME ],
            TengwaRune.SPACE,
            // volume
            TengwaRune.AMPA,
            [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ],
            [ TengwaRune.RIGHT_CURL, TengwaRune.MALTA, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // before
            [ TengwaRune.UMBAR, TengwaRune.UNDER_DOT ],
            TengwaRune.FORMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.ORE, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // the
            TengwaRune.THE,
            TengwaRune.SPACE,
            // tomb
            TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.MALTA ],
            TengwaRune.UMBAR,
            TengwaRune.SPACE,
            // of
            TengwaRune.OF,
            TengwaRune.SPACE,
            // balin
            TengwaRune.UMBAR,
            [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ],
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // the
            TengwaRune.THE,
            TengwaRune.SPACE,
            // dwarf
            TengwaRune.ANDO,
            TengwaRune.VALA,
            [ TengwaRune.THREE_DOTS, TengwaRune.ORE ],
            TengwaRune.FORMEN,
            TengwaRune.HYPHEN,
            // lord
            TengwaRune.LAMBE,
            [ TengwaRune.LEFT_CURL, TengwaRune.ORE ],
            TengwaRune.ANDO,
            TengwaRune.SPACE,
            // of
            TengwaRune.OF,
            TengwaRune.SPACE,
            // moria.
            TengwaRune.MALTA,
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER,
                    TengwaRune.THREE_UNDER_DOTS ], TengwaRune.PERIOD, ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleTROTS2)
};
