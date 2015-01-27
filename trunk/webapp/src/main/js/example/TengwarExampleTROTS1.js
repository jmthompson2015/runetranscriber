/*
 * Provides an example of Tengwar runes from <a href="http://lotr.wikia.com/wiki/The_Return_of_the_Shadow">The Return Of The Shadow</a>, title page top.
 */
var TengwarExampleTROTS1 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/returnoftheshadow/TROTS_TitlePage1.jpg",

    LANGUAGE_LETTERS: "In the Return of the Shadow are traced the first forms of the story of the Lord\n"
            + "of the Rings. Herein the journey of the hobbit who bore the Great Ring, at first",

    RUNES: [
    // Line 1
    // in
    [TengwaRune.ACUTE, TengwaRune.NUMEN], TengwaRune.SPACE,
    // the
    TengwaRune.THE, TengwaRune.SPACE,
    // return
    [TengwaRune.ROMEN, TengwaRune.UNDER_DOT], TengwaRune.TINCO,
            [TengwaRune.RIGHT_CURL, TengwaRune.ORE], TengwaRune.NUMEN,
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // shadow
            TengwaRune.HARMA, [TengwaRune.THREE_DOTS, TengwaRune.ANDO],
            [TengwaRune.LEFT_CURL, TengwaRune.VALA], TengwaRune.SPACE,
            // are
            [TengwaRune.THREE_DOTS, TengwaRune.ORE, TengwaRune.UNDER_DOT],
            TengwaRune.SPACE,
            // traced
            TengwaRune.TINCO, TengwaRune.ROMEN, [TengwaRune.THREE_DOTS,
            TengwaRune.SILME_NUQUERNA, TengwaRune.UNDER_DOT], TengwaRune.ANDO,
            TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // first
            TengwaRune.FORMEN, [TengwaRune.ACUTE, TengwaRune.ORE],
            TengwaRune.SILME, TengwaRune.TINCO, TengwaRune.SPACE,
            // form
            TengwaRune.FORMEN, [TengwaRune.LEFT_CURL, TengwaRune.ORE],
            TengwaRune.MALTA, TengwaRune.SILME, TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // story
            TengwaRune.SILME, TengwaRune.TINCO, [TengwaRune.LEFT_CURL,
            TengwaRune.ROMEN], TengwaRune.ANNA, TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // lord
            TengwaRune.LAMBE, [TengwaRune.LEFT_CURL, TengwaRune.ORE],
            TengwaRune.ANDO, TengwaRune.NEWLINE,

            // Line 2
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // rings
            TengwaRune.ROMEN, [TengwaRune.ACUTE, TengwaRune.NGWALME],
            TengwaRune.SILME, TengwaRune.PERIOD,
            // herein
            TengwaRune.HYARMEN, [TengwaRune.DOT, TengwaRune.ROMEN,
            TengwaRune.UNDER_DOT], [TengwaRune.ACUTE, TengwaRune.NUMEN],
            TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // journey
            TengwaRune.ANGA, [TengwaRune.LEFT_CURL, TengwaRune.URE],
            TengwaRune.ORE, TengwaRune.NUMEN, [TengwaRune.DOT, TengwaRune.ANNA],
            TengwaRune.SPACE,
            // of the
            TengwaRune.OF_THE, TengwaRune.SPACE,
            // hobbit
            TengwaRune.HYARMEN, [TengwaRune.LEFT_CURL, TengwaRune.UMBAR, TengwaRune.UNDER_BAR],
            [TengwaRune.ACUTE, TengwaRune.TINCO], TengwaRune.SPACE,
            // who
            TengwaRune.HWESTA_SINDARINWA, [TengwaRune.LEFT_CURL,
            TengwaRune.SHORT_CARRIER], TengwaRune.SPACE,
            // bore
            TengwaRune.UMBAR, [TengwaRune.LEFT_CURL, TengwaRune.ROMEN,
            TengwaRune.UNDER_DOT], TengwaRune.SPACE,
            // the
            TengwaRune.THE, TengwaRune.SPACE,
            // great
            TengwaRune.UNGWE, TengwaRune.ROMEN, [TengwaRune.DOT,
            TengwaRune.SHORT_CARRIER, TengwaRune.THREE_UNDER_DOTS],
            TengwaRune.TINCO, TengwaRune.SPACE,
            // ring
            TengwaRune.ROMEN, [TengwaRune.ACUTE, TengwaRune.NGWALME],
            TengwaRune.COMMA,
            // at
            [TengwaRune.THREE_DOTS, TengwaRune.TINCO], TengwaRune.SPACE,
            // first
            TengwaRune.FORMEN, [TengwaRune.ACUTE, TengwaRune.ORE],
            TengwaRune.SILME, TengwaRune.TINCO, ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExampleTROTS1)
};
