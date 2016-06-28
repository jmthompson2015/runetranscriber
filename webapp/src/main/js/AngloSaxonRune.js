/*
 * Provides an enumeration of runes in the Anglo-Saxon runic alphabet.
 */
define(function()
{
    "use strict";
    var AngloSaxonRune =
    {
        FEOH: "feoh",
        UR: "ur",
        THORN: "thorn",
        OS: "os",
        RAD: "rad",
        CEN: "cen",
        GYFU: "gyfu",
        WYNN: "wynn",
        HAEGL: "haegl",
        NYD: "nyd",
        IS: "is",
        GER: "ger",
        EOH: "eoh",
        PEORD: "peord",
        EOLH: "eolh",
        SIGEL: "sigel",
        TIW: "tiw",
        BEORC: "beorc",
        EH: "eh",
        MANN: "mann",
        LAGU: "lagu",
        ING: "ing",
        EOEL: "eoel",
        DAEG: "daeg",
        AC: "ac",
        AESC: "aesc",
        YR: "yr",
        IOR: "ior",
        EAR: "ear",
        SPACE: "space",
        COMMA: "comma",
        PERIOD: "period",
        NEWLINE: "newline",

        properties:
        {
            "feoh":
            {
                name: "FEOH",
                displayName: "feoh",
                fontLetter: "\u16a0",
                phoneme: "f",
            },
            "ur":
            {
                name: "UR",
                displayName: "ur",
                fontLetter: "\u16a2",
                phoneme: "u",
            },
            "thorn":
            {
                name: "THORN",
                displayName: "thorn",
                fontLetter: "\u16a6",
                phoneme: "th",
            },
            "os":
            {
                name: "OS",
                displayName: "os",
                fontLetter: "\u16a9",
                phoneme: "o",
            },
            "rad":
            {
                name: "RAD",
                displayName: "rad",
                fontLetter: "\u16b1",
                phoneme: "r",
            },
            "cen":
            {
                name: "CEN",
                displayName: "cen",
                fontLetter: "\u16b3",
                phoneme: "k",
            },
            "gyfu":
            {
                name: "GYFU",
                displayName: "gyfu",
                fontLetter: "\u16b7",
                phoneme: "g",
            },
            "wynn":
            {
                name: "WYNN",
                displayName: "wynn",
                fontLetter: "\u16b9",
                phoneme: "w",
            },
            "haegl":
            {
                name: "HAEGL",
                displayName: "haegl",
                fontLetter: "\u16bb",
                phoneme: "h",
            },
            "nyd":
            {
                name: "NYD",
                displayName: "nyd",
                fontLetter: "\u16be",
                phoneme: "n",
            },
            "is":
            {
                name: "IS",
                displayName: "is",
                fontLetter: "\u16c1",
                phoneme: "i",
            },
            "ger":
            {
                name: "GER",
                displayName: "ger",
                fontLetter: "\u16c4",
                phoneme: "j",
            },
            "eoh":
            {
                name: "EOH",
                displayName: "eoh",
                fontLetter: "\u16c7",
                phoneme: "eo",
            },
            "peord":
            {
                name: "PEORD",
                displayName: "peord",
                fontLetter: "\u16c8",
                phoneme: "p",
            },
            "eolh":
            {
                name: "EOLH",
                displayName: "eolh",
                fontLetter: "\u16c9",
                phoneme: "x",
            },
            "sigel":
            {
                name: "SIGEL",
                displayName: "sigel",
                fontLetter: "\u16cb",
                phoneme: "s",
            },
            "tiw":
            {
                name: "TIW",
                displayName: "tiw",
                fontLetter: "\u16cf",
                phoneme: "t",
            },
            "beorc":
            {
                name: "BEORC",
                displayName: "beorc",
                fontLetter: "\u16d2",
                phoneme: "b",
            },
            "eh":
            {
                name: "EH",
                displayName: "eh",
                fontLetter: "\u16d6",
                phoneme: "e",
            },
            "mann":
            {
                name: "MANN",
                displayName: "mann",
                fontLetter: "\u16d7",
                phoneme: "m",
            },
            "lagu":
            {
                name: "LAGU",
                displayName: "lagu",
                fontLetter: "\u16da",
                phoneme: "l",
            },
            "ing":
            {
                name: "ING",
                displayName: "ing",
                fontLetter: "\u16dd",
                phoneme: "ng",
            },
            "eoel":
            {
                name: "EOEL",
                displayName: "eoel",
                fontLetter: "\u16df",
                phoneme: "oe",
            },
            "daeg":
            {
                name: "DAEG",
                displayName: "daeg",
                fontLetter: "\u16de",
                phoneme: "d",
            },
            "ac":
            {
                name: "AC",
                displayName: "ac",
                fontLetter: "\u16aa",
                phoneme: "a",
            },
            "aesc":
            {
                name: "AESC",
                displayName: "aesc",
                fontLetter: "\u16ab",
                phoneme: "ae",
            },
            "yr":
            {
                name: "YR",
                displayName: "yr",
                fontLetter: "\u16a3",
                phoneme: "y",
            },
            "ior":
            {
                name: "IOR",
                displayName: "ior",
                fontLetter: "\u16bc",
                phoneme: "ia",
            },
            "ear":
            {
                name: "EAR",
                displayName: "ear",
                fontLetter: "\u16e0",
                phoneme: "ea",
            },
            "space":
            {
                name: "SPACE",
                displayName: "space",
                fontLetter: "\u16eb",
                phoneme: " ",
            },
            "comma":
            {
                name: "COMMA",
                displayName: "comma",
                fontLetter: "\u16ec",
                phoneme: ",",
            },
            "period":
            {
                name: "PERIOD",
                displayName: "period",
                fontLetter: "\u1392",
                phoneme: ".",
            },
            "newline":
            {
                name: "NEWLINE",
                displayName: "newline",
                fontLetter: "\n",
                phoneme: "\n",
            },
        },

        values: [ "feoh", "ur", "thorn", "os", "rad", "cen", "gyfu", "wynn", "haegl", "nyd", "is", "ger", "eoh",
                "peord", "eolh", "sigel", "tiw", "beorc", "eh", "mann", "lagu", "ing", "eoel", "daeg", "ac", "aesc",
                "yr", "ior", "ear", "space", "comma", "period", "newline", ],

        isPunctuation: function(rune)
        {
            return [ AngloSaxonRune.SPACE, AngloSaxonRune.COMMA, AngloSaxonRune.PERIOD, AngloSaxonRune.NEWLINE ]
                    .includes(rune) ||
                    [ " ", ",", ".", "\n" ].includes(rune);
        }
    };

    if (Object.freeze)
    {
        Object.freeze(AngloSaxonRune);
    }

    return AngloSaxonRune;
});
