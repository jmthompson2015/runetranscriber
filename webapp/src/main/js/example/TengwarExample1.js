/*
 * Provides an example for Tengwar runes from <a href="http://en.wikipedia.org/wiki/Tengwar">Wikipedia</a>.
 */
define([ "TengwaRune" ], function(TengwaRune)
{
    "use strict";
    var TengwarExample1 =
    {
        NAME: "Tengwar Example 1",

        IMAGE: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Tengwar.svg",

        LANGUAGE_STRING: "tengwar",

        LANGUAGE_WORDS: [ "tengwar" ],

        PHONEMES: [ [ "t", "e" ], [ "ng", "a" ], "r" ],

        RUNES: [ [ TengwaRune.ACUTE, TengwaRune.TINCO ], [ TengwaRune.THREE_DOTS, TengwaRune.UNGWE ], TengwaRune.ORE ],

        FONT_LETTERS: [ [ "R", "1" ], [ "D", "x" ], "6" ],
    };

    if (Object.freeze)
    {
        Object.freeze(TengwarExample1);
    }

    return TengwarExample1;
});
