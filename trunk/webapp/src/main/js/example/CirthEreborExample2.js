/*
 * <a href="http://ring-lord.tripod.com/cirth/ex_moria2.htm">Balin's tomb, lower inscription</a>
 */
var CirthEreborExample2 =
{
    LANGUAGE_LETTERS: "balin son of fundin lord of moria",

    RUNES: [
            // balin
            CerthRune.C2, CerthRune.C48, CerthRune.C31, CerthRune.C39, CerthRune.C53, CerthRune.SPACE,
            // son
            CerthRune.C34, CerthRune.C56, CerthRune.C53, CerthRune.SPACE,
            // of
            CerthRune.C50, CerthRune.C4, CerthRune.SPACE,
            // fundin
            CerthRune.C3, CerthRune.C42, CerthRune.C33, CerthRune.C39, CerthRune.C53, CerthRune.SPACE,
            // lord
            CerthRune.C31, CerthRune.C50, CerthRune.C12, CerthRune.C9, CerthRune.SPACE,
            // of
            CerthRune.C50, CerthRune.C4, CerthRune.SPACE,
            // moria
            CerthRune.C6, CerthRune.C50, CerthRune.C12, CerthRune.C39, CerthRune.C48, ],
}

if (Object.freeze)
{
    Object.freeze(CirthEreborExample1)
};
