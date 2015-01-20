/*
 * Provides an example for Tengwar runes from <a href="http://ring-lord.tripod.com/tengwar/exlotrt.htm">The Lord of the
 * Rings, title page, lower inscription</a>
 */
var TengwarExample2 =
{
    LANGUAGE_LETTERS: "of westmarch by john ronald reuel tolkien. herein is set forth\n"
            + "the history of the war of the ring and the return of the king as seen by the hobbits.",

    RUNES: [
    // Line 1
    // of
    TengwaRune.OF, TengwaRune.SPACE,
    // westmarch
    TengwaRune.VALA, TengwaRune.ACUTE, TengwaRune.SILME, TengwaRune.TINCO,
            TengwaRune.MALTA, TengwaRune.THREE_DOTS, TengwaRune.ORE,
            TengwaRune.CALMA, TengwaRune.SPACE,
            // by
            TengwaRune.UMBAR, TengwaRune.CHEVRON, TengwaRune.LONG_CARRIER,
            TengwaRune.SPACE,
            // john
            TengwaRune.ANGA, TengwaRune.HYARMEN, TengwaRune.LEFT_CURL,
            TengwaRune.NUMEN, TengwaRune.SPACE,
            // ronald
            TengwaRune.ROMEN, TengwaRune.LEFT_CURL, TengwaRune.NUMEN,
            TengwaRune.THREE_DOTS, TengwaRune.LAMBE, TengwaRune.ANDO,
            TengwaRune.SPACE,
            // rueul
            TengwaRune.ROMEN, TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER,
            TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER, TengwaRune.ACUTE,
            TengwaRune.LAMBE, TengwaRune.SPACE,
            // tolkien.
            TengwaRune.TINCO, TengwaRune.LEFT_CURL, TengwaRune.LAMBE,
            TengwaRune.QUESSE, TengwaRune.DOT, TengwaRune.SHORT_CARRIER,
            TengwaRune.ACUTE, TengwaRune.NUMEN, TengwaRune.PERIOD,
            TengwaRune.SPACE,
            // herein
            TengwaRune.HYARMEN, TengwaRune.ACUTE, TengwaRune.ROMEN,
            TengwaRune.DOT, TengwaRune.NUMEN, TengwaRune.SPACE,
            // is
            TengwaRune.DOT, TengwaRune.ESSE, TengwaRune.SPACE,
            // set
            TengwaRune.SILME, TengwaRune.ACUTE, TengwaRune.TINCO,
            TengwaRune.SPACE,
            // forth
            TengwaRune.FORMEN, TengwaRune.LEFT_CURL, TengwaRune.ORE,
            TengwaRune.THULE, TengwaRune.NEWLINE,

            // Line 2
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // history
            TengwaRune.HYARMEN, TengwaRune.DOT, TengwaRune.SILME,
            TengwaRune.TINCO, TengwaRune.LEFT_CURL, TengwaRune.ROMEN,
            TengwaRune.ACUTE, TengwaRune.LONG_CARRIER, TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // war
            TengwaRune.VALA, TengwaRune.THREE_DOTS, TengwaRune.ORE,
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // ring
            TengwaRune.ROMEN, TengwaRune.DOT, TengwaRune.NGWALME,
            TengwaRune.SPACE,
            // and
            TengwaRune.UNDER_DOT, TengwaRune.ANDO, TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // return
            TengwaRune.ROMEN, TengwaRune.ACUTE, TengwaRune.TINCO,
            TengwaRune.TOP_CURL, TengwaRune.ORE, TengwaRune.NUMEN,
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // king
            TengwaRune.QUESSE, TengwaRune.DOT, TengwaRune.NGWALME,
            TengwaRune.SPACE,
            // as
            TengwaRune.THREE_DOTS, TengwaRune.ESSE_NUQUERNA, TengwaRune.SPACE,
            // seen
            TengwaRune.SILME, TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER,
            TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.NUMEN,
            TengwaRune.SPACE,
            // by
            TengwaRune.UMBAR, TengwaRune.CHEVRON, TengwaRune.LONG_CARRIER,
            TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // hobbits.
            TengwaRune.HYARMEN, TengwaRune.LEFT_CURL, TengwaRune.UMBAR,
            TengwaRune.DOT, TengwaRune.TINCO, TengwaRune.SILME,
            TengwaRune.PERIOD, ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExample2)
};
