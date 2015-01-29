/*
 * Provides an example for Tengwar runes from <a href="http://lotr.wikia.com/wiki/Unfinished_Tales">Unfinished Tales of Numenor and Middle-Earth</a>.
 */
var TengwarExampleUTONAME2 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/unfinishedtales/UTONAME_TitlePage2.jpg",

    LANGUAGE_LETTERS: "are told many things of men and elves in Numenor and in Middle\n"
            + "Earth from the elder days in Beleriand to the War of the Ring and\n"
            + "an account is given of the Druedain the Istari and the Palantiri.",

    RUNES: [
            // Line 1
            // are
            [ TengwaRune.THREE_DOTS, TengwaRune.ROMEN, TengwaRune.UNDER_DOT ],
            TengwaRune.SPACE,
            // told
            TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ],
            TengwaRune.ANDO,
            TengwaRune.SPACE,
            // many
            TengwaRune.MALTA,
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ],
            TengwaRune.ANNA,
            TengwaRune.SPACE,
            // things
            TengwaRune.THULE,
            [ TengwaRune.ACUTE, TengwaRune.NGWALME ],
            TengwaRune.SILME,
            TengwaRune.SPACE,
            // of
            TengwaRune.OF,
            TengwaRune.SPACE,
            // men
            TengwaRune.MALTA,
            [ TengwaRune.DOT, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ],
            TengwaRune.SPACE,
            // elves
            [ TengwaRune.DOT, TengwaRune.LAMBE ],
            [ TengwaRune.AMPA, TengwaRune.UNDER_DOT ],
            TengwaRune.SILME,
            TengwaRune.SPACE,
            // in
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // numenor
            TengwaRune.NUMEN,
            [ TengwaRune.RIGHT_CURL, TengwaRune.MALTA ],
            [ TengwaRune.DOT, TengwaRune.NUMEN ],
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            TengwaRune.SPACE,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ],
            TengwaRune.SPACE,
            // in
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // middle
            TengwaRune.MALTA,
            [ TengwaRune.ACUTE, TengwaRune.ANDO, TengwaRune.UNDER_BAR ],
            [ TengwaRune.LAMBE, TengwaRune.UNDER_DOT ],
            TengwaRune.NEWLINE,

            // Line 2
            // earth
            [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER,
                    TengwaRune.THREE_UNDER_DOTS ],
            TengwaRune.ROMEN,
            TengwaRune.THULE,
            TengwaRune.SPACE,
            // from
            TengwaRune.FORMEN,
            TengwaRune.ROMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.MALTA ],
            TengwaRune.SPACE,
            // the
            TengwaRune.THE,
            TengwaRune.SPACE,
            // elder
            [ TengwaRune.DOT, TengwaRune.LAMBE ],
            TengwaRune.ANDO,
            [ TengwaRune.DOT, TengwaRune.ROMEN ],
            TengwaRune.SPACE,
            // days
            TengwaRune.ANDO,
            [ TengwaRune.THREE_DOTS, TengwaRune.ANNA ],
            TengwaRune.SILME,
            TengwaRune.SPACE,
            // in
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // beleriand
            TengwaRune.UMBAR,
            [ TengwaRune.DOT, TengwaRune.LAMBE ],
            [ TengwaRune.DOT, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ],
            TengwaRune.ANDO,
            TengwaRune.SPACE,
            // to
            TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ],
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
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ],
            TengwaRune.NEWLINE,

            // Line 3
            // an
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // account
            [ TengwaRune.THREE_DOTS, TengwaRune.QUESSE, TengwaRune.UNDER_BAR ],
            [ TengwaRune.LEFT_CURL, TengwaRune.URE ],
            TengwaRune.NUMEN,
            TengwaRune.TINCO,
            TengwaRune.SPACE,
            // is
            [ TengwaRune.ACUTE, TengwaRune.SILME ],
            TengwaRune.SPACE,
            // given
            TengwaRune.UNGWE,
            [ TengwaRune.ACUTE, TengwaRune.AMPA ],
            [ TengwaRune.DOT, TengwaRune.NUMEN ],
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE,
            TengwaRune.SPACE,
            // druedain
            TengwaRune.ANDO,
            TengwaRune.ROMEN,
            [ TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER,
                    TengwaRune.UNDER_DOT ], TengwaRune.ANDO,
            [ TengwaRune.THREE_DOTS, TengwaRune.YANTA ],
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // istari
            [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.TINCO,
            [ TengwaRune.THREE_DOTS, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ], TengwaRune.SPACE,
            // and
            [ TengwaRune.BAR, TengwaRune.ANDO ], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // palantiri.
            TengwaRune.PARMA, [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ],
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.TINCO,
            [ TengwaRune.ACUTE, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ], TengwaRune.PERIOD ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleUTONAME2)
};
