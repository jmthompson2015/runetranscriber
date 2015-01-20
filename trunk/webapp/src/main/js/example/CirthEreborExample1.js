/*
 * <a href="http://ring-lord.tripod.com/cirth/ex_lotr.htm">From the title page, upper inscription, Lord of the Rings</a>
 */
var CirthEreborExample1 =
{
    LANGUAGE_LETTERS: "the lord of the rings translated from the red book",

    RUNES: [
    // the
    CerthRune.C11, CerthRune.C55, CerthRune.SPACE,
    // lord
    CerthRune.C31, CerthRune.C50, CerthRune.C12, CerthRune.C9, CerthRune.SPACE,
    // of
    CerthRune.C50, CerthRune.C4, CerthRune.SPACE,
    // the
    CerthRune.C11, CerthRune.C55, CerthRune.SPACE,
    // rings
    CerthRune.C12, CerthRune.C39, CerthRune.C36, CerthRune.C34,
            CerthRune.SPACE,
            // translated
            CerthRune.C8, CerthRune.C12, CerthRune.C48, CerthRune.C53,
            CerthRune.C34, CerthRune.C31, CerthRune.C48, CerthRune.C8,
            CerthRune.C55, CerthRune.C9, CerthRune.SPACE,
            // from
            CerthRune.C3, CerthRune.C12, CerthRune.C50, CerthRune.C6,
            CerthRune.SPACE,
            // the
            CerthRune.C11, CerthRune.C55, CerthRune.SPACE,
            // red
            CerthRune.C12, CerthRune.C46, CerthRune.C9, CerthRune.SPACE,
            // book
            CerthRune.C2, CerthRune.C51, CerthRune.C18, ],
}

if (Object.freeze)
{
    Object.freeze(CirthEreborExample1)
};
