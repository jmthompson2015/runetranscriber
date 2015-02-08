/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Treason_of_Isengard">The Treason Of Isengard</a>, title page top.
 */
var TengwarExampleTTOI1 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/treasonofisengard/TTOI_TitlePage1.jpg",

    LANGUAGE_LETTERS: "In the Treason of Isengard the story of the Fellowship of the Ring is traced\n"
            + "from Rivendell through Moria and the Land of Lothlorien to the days",

    RUNES: [
            // Line 1
            // in
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // the
            TengwaRune.THE,
            TengwaRune.SPACE,
            // treason
            TengwaRune.TINCO,
            TengwaRune.ROMEN,
            [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER,
                    TengwaRune.THREE_UNDER_DOTS ],
            TengwaRune.SILME,
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // of
            TengwaRune.OF,
            TengwaRune.SPACE,
            // isengard
            [ TengwaRune.ACUTE, TengwaRune.SILME ],
            [ TengwaRune.DOT, TengwaRune.NUMEN ],
            TengwaRune.UNGWE,
            [ TengwaRune.THREE_DOTS, TengwaRune.ORE ],
            TengwaRune.ANDO,
            TengwaRune.SPACE,
            // the
            TengwaRune.THE,
            TengwaRune.SPACE,
            // story
            TengwaRune.SILME,
            TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            TengwaRune.ANNA,
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE,
            TengwaRune.SPACE,
            // fellowship
            TengwaRune.FORMEN,
            [ TengwaRune.DOT, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
            [ TengwaRune.LEFT_CURL, TengwaRune.VALA ],
            TengwaRune.HARMA,
            [ TengwaRune.ACUTE, TengwaRune.PARMA ],
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
                    TengwaRune.UNDER_DOT ],
            TengwaRune.ANDO,
            TengwaRune.NEWLINE,

            // Line 2
            // from
            TengwaRune.FORMEN,
            TengwaRune.ROMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.MALTA ],
            TengwaRune.SPACE,
            // rivendell
            TengwaRune.ROMEN,
            [ TengwaRune.ACUTE, TengwaRune.AMPA ],
            [ TengwaRune.DOT, TengwaRune.NUMEN ],
            TengwaRune.ANDO,
            [ TengwaRune.DOT, TengwaRune.LAMBE, TengwaRune.UNDER_BAR ],
            TengwaRune.SPACE,
            // through
            TengwaRune.THULE,
            TengwaRune.ROMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.URE ],
            TengwaRune.GH,
            TengwaRune.SPACE,
            // moria
            TengwaRune.MALTA,
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER,
                    TengwaRune.THREE_UNDER_DOTS ],
            TengwaRune.SPACE,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ],
            TengwaRune.SPACE,
            // the
            TengwaRune.THE,
            TengwaRune.SPACE,
            // land
            TengwaRune.LAMBE,
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ],
            TengwaRune.ANDO,
            TengwaRune.SPACE,
            // of
            TengwaRune.OF,
            TengwaRune.SPACE,
            // lothlorien
            TengwaRune.LAMBE,
            [ TengwaRune.LEFT_CURL, TengwaRune.THULE ],
            TengwaRune.LAMBE,
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.UNDER_DOT ],
            TengwaRune.NUMEN, TengwaRune.SPACE,
            // to
            TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ],
            TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // days
            TengwaRune.ANDO, [ TengwaRune.THREE_DOTS, TengwaRune.ANNA ],
            TengwaRune.SILME ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleTTOI1)
};
