/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Treason_of_Isengard">The Treason Of Isengard</a>, title page bottom.
 */
var TengwarExampleTTOI2 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/treasonofisengard/TTOI_TitlePage2.jpg",

    LANGUAGE_LETTERS: "of its ending at Calembel beside Anduin the Great river, then is\n"
            + "told of the return of Gandalf Mithrandir, of the meeting of the hobbits with\n"
            + "Fangorn and of the war upon the Riders of Rohan by the traitor Saruman.",

    RUNES: [
            // Line 1
            // of
            TengwaRune.OF,
            TengwaRune.SPACE,
            // its
            [ TengwaRune.ACUTE, TengwaRune.TINCO ],
            TengwaRune.SILME,
            TengwaRune.SPACE,
            // ending
            [ TengwaRune.DOT, TengwaRune.NUMEN ],
            TengwaRune.ANDO,
            [ TengwaRune.ACUTE, TengwaRune.NGWALME ],
            TengwaRune.SPACE,
            // at
            [ TengwaRune.THREE_DOTS, TengwaRune.TINCO ],
            TengwaRune.SPACE,
            // calembel
            TengwaRune.SILME_NUQUERNA,
            [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ],
            [ TengwaRune.DOT, TengwaRune.MALTA ],
            TengwaRune.UMBAR,
            [ TengwaRune.DOT, TengwaRune.LAMBE ],
            TengwaRune.SPACE,
            // beside
            [ TengwaRune.UMBAR, TengwaRune.UNDER_DOT ],
            TengwaRune.SILME,
            [ TengwaRune.ACUTE, TengwaRune.ANDO, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // anduin
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ],
            TengwaRune.ANDO,
            [ TengwaRune.TOP_CURL, TengwaRune.YANTA ],
            TengwaRune.NUMEN,
            TengwaRune.SPACE,
            // the
            TengwaRune.THE,
            TengwaRune.SPACE,
            // great
            TengwaRune.UNGWE,
            TengwaRune.ROMEN,
            [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER,
                    TengwaRune.THREE_UNDER_DOTS ], TengwaRune.TINCO,
            TengwaRune.SPACE,
            // river,
            TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.AMPA ],
            [ TengwaRune.DOT, TengwaRune.ORE ], TengwaRune.PERIOD,
            // then
            TengwaRune.THULE, [ TengwaRune.DOT, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // is
            [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.NEWLINE,

            // Line 2
            // told
            TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ],
            TengwaRune.ANDO, TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // return
            [ TengwaRune.ROMEN, TengwaRune.UNDER_DOT ], TengwaRune.TINCO,
            [ TengwaRune.RIGHT_CURL, TengwaRune.ORE ], TengwaRune.NUMEN,
            TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // gandalf
            TengwaRune.UNGWE, [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ],
            TengwaRune.ANDO, [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ],
            TengwaRune.FORMEN, TengwaRune.SPACE,
            // mithrandir,
            TengwaRune.MALTA, [ TengwaRune.ACUTE, TengwaRune.THULE ],
            TengwaRune.ROMEN, [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ],
            TengwaRune.ANDO, [ TengwaRune.ACUTE, TengwaRune.ROMEN ],
            TengwaRune.COMMA,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // meeting
            TengwaRune.MALTA,
            [ TengwaRune.DOT, TengwaRune.DOT, TengwaRune.TINCO ],
            [ TengwaRune.ACUTE, TengwaRune.NGWALME ], TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // hobbits
            TengwaRune.HYARMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.UMBAR, TengwaRune.UNDER_BAR ],
            [ TengwaRune.ACUTE, TengwaRune.TINCO ], TengwaRune.SILME,
            TengwaRune.SPACE,
            // with
            TengwaRune.VALA, [ TengwaRune.ACUTE, TengwaRune.THULE ],
            TengwaRune.NEWLINE,

            // Line 3
            // fangorn,
            TengwaRune.FORMEN, [ TengwaRune.THREE_DOTS, TengwaRune.NGWALME ],
            [ TengwaRune.LEFT_CURL, TengwaRune.ORE ], TengwaRune.NUMEN,
            TengwaRune.COMMA,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // war
            TengwaRune.VALA, [ TengwaRune.THREE_DOTS, TengwaRune.ORE ],
            TengwaRune.SPACE,
            // upon
            [ TengwaRune.RIGHT_CURL, TengwaRune.PARMA ],
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // riders
            TengwaRune.ROMEN, [ TengwaRune.ACUTE, TengwaRune.ANDO ],
            [ TengwaRune.DOT, TengwaRune.ORE ], TengwaRune.SILME,
            TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // rohan
            TengwaRune.ROMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ],
            TengwaRune.HYARMEN, [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // by
            TengwaRune.UMBAR, TengwaRune.ANNA, TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // traitor
            TengwaRune.TINCO, TengwaRune.ROMEN,
            [ TengwaRune.THREE_DOTS, TengwaRune.YANTA ], TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.ORE ], TengwaRune.SPACE,
            // saruman.
            TengwaRune.SILME, [ TengwaRune.THREE_DOTS, TengwaRune.ROMEN ],
            [ TengwaRune.RIGHT_CURL, TengwaRune.MALTA ],
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.PERIOD ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleTTOI2)
};
