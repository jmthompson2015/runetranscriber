/*
 * Provides an enumeration of letters in the Tengwar alphabet.
 */
define(function()
{
    "use strict";
    var TengwaRune =
    {
        TINCO: "tinco",
        PARMA: "parma",
        CALMA: "calma",
        QUESSE: "quesse",
        ANDO: "ando",
        UMBAR: "umbar",
        ANGA: "anga",
        UNGWE: "ungwe",
        THULE: "thule",
        FORMEN: "formen",
        HARMA: "harma",
        HWESTA: "hwesta",
        ANTO: "anto",
        AMPA: "ampa",
        ANCA: "anca",
        UNQUE: "unque",
        NUMEN: "numen",
        MALTA: "malta",
        NGOLDO: "ngoldo",
        NGWALME: "ngwalme",
        ORE: "ore",
        VALA: "vala",
        ANNA: "anna",
        VILYA: "vilya",
        ROMEN: "romen",
        ARDA: "arda",
        LAMBE: "lambe",
        ALDA: "alda",
        SILME: "silme",
        SILME_NUQUERNA: "silmeNuquerna",
        ESSE: "esse",
        ESSE_NUQUERNA: "esseNuquerna",
        HYARMEN: "hyarmen",
        HWESTA_SINDARINWA: "hwestaSindarinwa",
        YANTA: "yanta",
        URE: "ure",
        THE: "the",
        OF: "of",
        OF_THE: "ofThe",
        GH: "gh",
        SHORT_CARRIER: "shortCarrier",
        LONG_CARRIER: "longCarrier",
        THREE_DOTS: "threeDots",
        THREE_UNDER_DOTS: "threeUnderDots",
        CIRCUMFLEX: "circumflex",
        ACUTE: "acute",
        DOT: "dot",
        UNDER_DOT: "underDot",
        LEFT_CURL: "leftCurl",
        LEFT_UNDER_CURL: "leftUnderCurl",
        TOP_CURL: "topCurl",
        RIGHT_CURL: "rightCurl",
        CHEVRON: "chevron",
        BAR: "bar",
        UNDER_BAR: "underBar",
        HYPHEN: "hyphen",
        SPACE: "space",
        COMMA: "comma",
        PERIOD: "period",
        NEWLINE: "newline",

        properties:
        {
            "tinco":
            {
                name: "TINCO",
                displayName: "tinco",
                nameMeaning: "metal",
                fontLetter: "1",
                phoneme: "t",
            },
            "parma":
            {
                name: "PARMA",
                displayName: "parma",
                nameMeaning: "book",
                fontLetter: "q",
                phoneme: "p",
            },
            "calma":
            {
                name: "CALMA",
                displayName: "calma",
                nameMeaning: "lamp",
                fontLetter: "a",
                phoneme: "ch",
            },
            "quesse":
            {
                name: "QUESSE",
                displayName: "quesse",
                nameMeaning: "feather",
                fontLetter: "z",
                phoneme: "k",
            },
            "ando":
            {
                name: "ANDO",
                displayName: "ando",
                nameMeaning: "gate",
                fontLetter: "2",
                phoneme: "d",
            },
            "umbar":
            {
                name: "UMBAR",
                displayName: "umbar",
                nameMeaning: "fate",
                fontLetter: "w",
                phoneme: "b",
            },
            "anga":
            {
                name: "ANGA",
                displayName: "anga",
                nameMeaning: "iron",
                fontLetter: "s",
                phoneme: "j",
            },
            "ungwe":
            {
                name: "UNGWE",
                displayName: "ungwe",
                nameMeaning: "spider's web",
                fontLetter: "x",
                phoneme: "g",
            },
            "thule":
            {
                name: "THULE",
                displayName: "thule",
                nameMeaning: "spirit or wind",
                fontLetter: "3",
                phoneme: "th",
            },
            "formen":
            {
                name: "FORMEN",
                displayName: "formen",
                nameMeaning: "north",
                fontLetter: "e",
                phoneme: "f",
            },
            "harma":
            {
                name: "HARMA",
                displayName: "harma",
                nameMeaning: "treasure or rage",
                fontLetter: "d",
                phoneme: "sh",
            },
            "hwesta":
            {
                name: "HWESTA",
                displayName: "hwesta",
                nameMeaning: "breeze",
                fontLetter: "c",
            },
            "anto":
            {
                name: "ANTO",
                displayName: "anto",
                nameMeaning: "mouth",
                fontLetter: "4",
                phoneme: "th",
            },
            "ampa":
            {
                name: "AMPA",
                displayName: "ampa",
                nameMeaning: "hook",
                fontLetter: "r",
                phoneme: "v",
            },
            "anca":
            {
                name: "ANCA",
                displayName: "anca",
                nameMeaning: "jaws",
                fontLetter: "f",
            },
            "unque":
            {
                name: "UNQUE",
                displayName: "unque",
                nameMeaning: "a hollow",
                fontLetter: "v",
            },
            "numen":
            {
                name: "NUMEN",
                displayName: "numen",
                nameMeaning: "west",
                fontLetter: "5",
                phoneme: "n",
            },
            "malta":
            {
                name: "MALTA",
                displayName: "malta",
                nameMeaning: "gold",
                fontLetter: "t",
                phoneme: "m",
            },
            "ngoldo":
            {
                name: "NGOLDO",
                displayName: "ngoldo",
                nameMeaning: "one of the Noldor",
                fontLetter: "g",
            },
            "ngwalme":
            {
                name: "NGWALME",
                displayName: "ngwalme",
                nameMeaning: "torment",
                fontLetter: "b",
                phoneme: "ng",
            },
            "ore":
            {
                name: "ORE",
                displayName: "ore",
                nameMeaning: "heart or inner mind",
                fontLetter: "6",
                phoneme: "r",
            },
            "vala":
            {
                name: "VALA",
                displayName: "vala",
                nameMeaning: "angelic power",
                fontLetter: "y",
                phoneme: "w",
            },
            "anna":
            {
                name: "ANNA",
                displayName: "anna",
                nameMeaning: "gift",
                fontLetter: "h",
                phoneme: "y",
            },
            "vilya":
            {
                name: "VILYA",
                displayName: "vilya",
                nameMeaning: "air or sky",
                fontLetter: "n",
            },
            "romen":
            {
                name: "ROMEN",
                displayName: "romen",
                nameMeaning: "east",
                fontLetter: "7",
                phoneme: "r",
            },
            "arda":
            {
                name: "ARDA",
                displayName: "arda",
                nameMeaning: "region",
                fontLetter: "u",
            },
            "lambe":
            {
                name: "LAMBE",
                displayName: "lambe",
                nameMeaning: "tongue",
                fontLetter: "j",
                phoneme: "l",
            },
            "alda":
            {
                name: "ALDA",
                displayName: "alda",
                nameMeaning: "tree",
                fontLetter: "m",
            },
            "silme":
            {
                name: "SILME",
                displayName: "silme",
                nameMeaning: "starlight",
                fontLetter: "8",
                phoneme: "s",
            },
            "silmeNuquerna":
            {
                name: "SILME_NUQUERNA",
                displayName: "silme nuquerna",
                nameMeaning: "silme reversed",
                fontLetter: "i",
                phoneme: "c",
            },
            "esse":
            {
                name: "ESSE",
                displayName: "esse",
                nameMeaning: "sunlight or name",
                fontLetter: "k",
                phoneme: "z",
            },
            "esseNuquerna":
            {
                name: "ESSE_NUQUERNA",
                displayName: "esse nuquerna",
                nameMeaning: "aze reversed",
                fontLetter: ",",
                phoneme: "z",
            },
            "hyarmen":
            {
                name: "HYARMEN",
                displayName: "hyarmen",
                nameMeaning: "south",
                fontLetter: "9",
                phoneme: "h",
            },
            "hwestaSindarinwa":
            {
                name: "HWESTA_SINDARINWA",
                displayName: "hwesta sindarinwa",
                nameMeaning: "sindarin hwesta",
                fontLetter: "o",
                phoneme: "wh",
            },
            "yanta":
            {
                name: "YANTA",
                displayName: "yanta",
                nameMeaning: "bridge",
                fontLetter: "l",
                phoneme: "i",
            },
            "ure":
            {
                name: "URE",
                displayName: "ure",
                nameMeaning: "heat",
                fontLetter: ".",
                phoneme: "u",
            },
            "the":
            {
                name: "THE",
                displayName: "the",
                nameMeaning: "the",
                fontLetter: "@",
                phoneme: "the",
            },
            "of":
            {
                name: "OF",
                displayName: "of",
                nameMeaning: "of",
                fontLetter: "W",
                phoneme: "of",
            },
            "ofThe":
            {
                name: "OF_THE",
                displayName: "of the",
                nameMeaning: "of the",
                fontLetter: "W?",
                phoneme: "of the",
            },
            "gh":
            {
                name: "GH",
                displayName: "gh",
                nameMeaning: "gh",
                fontLetter: "X",
                phoneme: "gh",
            },
            "shortCarrier":
            {
                name: "SHORT_CARRIER",
                displayName: "short_carrier",
                nameMeaning: "short vowel carrier",
                fontLetter: "`",
            },
            "longCarrier":
            {
                name: "LONG_CARRIER",
                displayName: "long_carrier",
                nameMeaning: "long vowel carrier",
                fontLetter: "~",
            },
            "threeDots":
            {
                name: "THREE_DOTS",
                displayName: "three dots",
                nameMeaning: "three dots",
                fontLetter: "D",
                phoneme: "a",
            },
            "threeUnderDots":
            {
                name: "THREE_UNDER_DOTS",
                displayName: "three under dots",
                nameMeaning: "three under dots",
                fontLetter: "\u00D1",
                phoneme: "a",
            },
            "circumflex":
            {
                name: "CIRCUMFLEX",
                displayName: "circumflex",
                nameMeaning: "circumflex",
                fontLetter: "?",
            },
            "acute":
            {
                name: "ACUTE",
                displayName: "acute",
                nameMeaning: "acute",
                fontLetter: "R",
                phoneme: "i",
            },
            "dot":
            {
                name: "DOT",
                displayName: "dot",
                nameMeaning: "dot",
                fontLetter: "T",
                phoneme: "e",
            },
            "underDot":
            {
                name: "UNDER_DOT",
                displayName: "under dot",
                nameMeaning: "under dot",
                fontLetter: "\u00C9",
                phoneme: "e",
            },
            "leftCurl":
            {
                name: "LEFT_CURL",
                displayName: "left curl",
                nameMeaning: "left curl",
                fontLetter: "Y",
                phoneme: "o",
            },
            "leftUnderCurl":
            {
                name: "LEFT_UNDER_CURL",
                displayName: "left under curl",
                nameMeaning: "left under curl",
                fontLetter: "\u00E5",
                phoneme: "o",
            },
            "topCurl":
            {
                name: "TOP_CURL",
                displayName: "top curl",
                nameMeaning: "top curl",
                fontLetter: "J",
                phoneme: "u",
            },
            "rightCurl":
            {
                name: "RIGHT_CURL",
                displayName: "right curl",
                nameMeaning: "right curl",
                fontLetter: "\u00E1",
                phoneme: "u",
            },
            "chevron":
            {
                name: "CHEVRON",
                displayName: "chevron",
                nameMeaning: "chevron",
                fontLetter: "Ù",
            },
            "bar":
            {
                name: "BAR",
                displayName: "bar",
                nameMeaning: "bar",
                fontLetter: "{",
                phoneme: "a",
            },
            "underBar":
            {
                name: "UNDER_BAR",
                displayName: "underBar",
                nameMeaning: "underBar",
                fontLetter: "\u00ED",
            },
            "hyphen":
            {
                name: "HYPHEN",
                displayName: "hyphen",
                nameMeaning: "hyphen",
                fontLetter: "\u00B7",
                phoneme: "-",
            },
            "space":
            {
                name: "SPACE",
                displayName: "space",
                nameMeaning: "space",
                fontLetter: " ",
                phoneme: " ",
            },
            "comma":
            {
                name: "COMMA",
                displayName: "comma",
                nameMeaning: "comma",
                fontLetter: "\u00B7",
                phoneme: ",",
            },
            "period":
            {
                name: "PERIOD",
                displayName: "period",
                nameMeaning: "period",
                fontLetter: "-",
                phoneme: ".",
            },
            "newline":
            {
                name: "NEWLINE",
                displayName: "newline",
                nameMeaning: "newline",
                fontLetter: "\n",
                phoneme: "\n",
            },
        },

        // Tehtar (diacritic marks)
        tehtar: [ "threeDots", "threeUnderDots", "bar", // a
        "dot", "underDot", // e
        "acute", // i
        "leftCurl", "leftUnderCurl", // o
        "rightCurl", "topCurl", // u
        "underBar", "circumflex", "chevron" // other
        ],

        findByFontLetter: function(fontLetter)
        {
            var answer;
            var values = TengwaRune.values();
            var properties = TengwaRune.properties;

            for (var j = 0; j < values.length; j++)
            {
                var rune = values[j];

                if (properties[rune].fontLetter === fontLetter)
                {
                    answer = rune;
                    break;
                }
            }

            return answer;
        },

        findByPhoneme: function(phoneme)
        {
            var answer;
            var values = TengwaRune.values();
            var properties = TengwaRune.properties;

            for (var j = 0; j < values.length; j++)
            {
                var rune = values[j];

                if (properties[rune].phoneme === phoneme)
                {
                    answer = rune;
                    break;
                }
            }

            return answer;
        },

        isPunctuation: function(rune)
        {
            return [ TengwaRune.SPACE, TengwaRune.COMMA, TengwaRune.PERIOD, TengwaRune.NEWLINE ].includes(rune) ||
                    [ " ", ",", ".", "\n" ].includes(rune);
        },

        values: function()
        {
            return Object.getOwnPropertyNames(TengwaRune.properties);
        },
    };

    if (Object.freeze)
    {
        Object.freeze(TengwaRune);
    }

    return TengwaRune;
});
