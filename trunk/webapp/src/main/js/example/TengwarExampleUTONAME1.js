/*
 * Provides an example for Tengwar runes from <a href="http://lotr.wikia.com/wiki/Unfinished_Tales">Unfinished Tales of Numenor and Middle-Earth</a>.
 */
var TengwarExampleUTONAME1 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/unfinishedtales/UTONAME_TitlePage1.jpg",

    LANGUAGE_LETTERS: "In this book of Unfinished Tales by John Ronald Reuel Tolkien\n"
            + "which was brought together by Christopher Reuel Tolkien his son",

    RUNES: [
    // Line 1
    // in
    [ TengwaRune.ACUTE, TengwaRune.NUMEN ], TengwaRune.SPACE,
    // this
    TengwaRune.ANTO, [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.SPACE,
    // book
    TengwaRune.UMBAR, [ TengwaRune.LEFT_CURL, TengwaRune.LONG_CARRIER ],
            TengwaRune.QUESSE, TengwaRune.SPACE,
            // of
            TengwaRune.OF, TengwaRune.SPACE,
            // unfinished
            [ TengwaRune.RIGHT_CURL, TengwaRune.NUMEN ], TengwaRune.FORMEN,
            [ TengwaRune.ACUTE, TengwaRune.NUMEN ],
            [ TengwaRune.ACUTE, TengwaRune.HARMA ],
            [ TengwaRune.DOT, TengwaRune.ANDO ], TengwaRune.SPACE,
            // tales
            TengwaRune.TINCO,
            [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE, TengwaRune.UNDER_DOT ],
            TengwaRune.SILME, TengwaRune.SPACE,
            // by
            TengwaRune.UMBAR, TengwaRune.ANNA, TengwaRune.SPACE,
            // john
            TengwaRune.ANGA,
            [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ],
            TengwaRune.HYARMEN, TengwaRune.NUMEN, TengwaRune.SPACE,
            // ronald
            TengwaRune.ROMEN, [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ],
            [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ], TengwaRune.ANDO,
            TengwaRune.SPACE,
            // reuel
            TengwaRune.ROMEN, [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.DOT, TengwaRune.LAMBE ], TengwaRune.SPACE,
            // tolkien
            TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ],
            TengwaRune.QUESSE, [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.NEWLINE,

            // Line 2
            // which
            TengwaRune.HWESTA_SINDARINWA,
            [ TengwaRune.ACUTE, TengwaRune.CALMA ], TengwaRune.SPACE,
            // was
            [ TengwaRune.VALA, TengwaRune.THREE_UNDER_DOTS ], TengwaRune.SILME,
            TengwaRune.SPACE,
            // brought
            TengwaRune.UMBAR, TengwaRune.ROMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.URE ], TengwaRune.GH,
            TengwaRune.TINCO, TengwaRune.SPACE,
            // together
            TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.UNGWE ],
            [ TengwaRune.DOT, TengwaRune.ANTO ],
            [ TengwaRune.DOT, TengwaRune.ROMEN ], TengwaRune.SPACE,
            // by
            TengwaRune.UMBAR, TengwaRune.ANNA, TengwaRune.SPACE,
            // christopher
            TengwaRune.QUESSE, TengwaRune.ROMEN,
            [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.FORMEN ],
            [ TengwaRune.DOT, TengwaRune.ROMEN ], TengwaRune.SPACE,
            // reuel
            TengwaRune.ROMEN, [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.DOT, TengwaRune.LAMBE ], TengwaRune.SPACE,
            // tolkien
            TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ],
            TengwaRune.QUESSE, [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.SPACE,
            // his
            TengwaRune.HYARMEN, [ TengwaRune.ACUTE, TengwaRune.SILME ],
            TengwaRune.SPACE,
            // son
            TengwaRune.SILME, [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ] ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleUTONAME1)
};
