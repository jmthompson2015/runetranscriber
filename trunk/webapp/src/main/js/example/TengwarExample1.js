/*
 * Provides an example for Tengwar runes from <a href="http://en.wikipedia.org/wiki/Tengwar">Wikipedia</a>.
 */
var TengwarExample1 =
{
    LANGUAGE_LETTERS: "tengwar",

    RUNES: [ TengwaRune.TINCO, TengwaRune.ACUTE, TengwaRune.UNGWE,
            TengwaRune.THREE_DOTS, TengwaRune.ORE, ],
}

if (Object.freeze)
{
    Object.freeze(TengwarExample1)
};
