/*
 * Provides an enumeration of letters in the Kryptonian alphabet.
 */
define(function()
{
    var KryptonianRune =
    {
        A: "a",
        B: "b",
        C: "c",
        D: "d",
        E: "e",
        F: "f",
        G: "g",
        H: "h",
        I: "i",
        J: "j",
        K: "k",
        L: "l",
        M: "m",
        N: "n",
        O: "o",
        P: "p",
        Q: "q",
        R: "r",
        S: "s",
        T: "t",
        U: "u",
        V: "v",
        W: "w",
        X: "x",
        Y: "y",
        Z: "z",

        ONE: "one",
        TWO: "two",
        THREE: "three",
        FOUR: "four",
        FIVE: "five",
        SIX: "six",
        SEVEN: "seven",
        EIGHT: "eight",
        NINE: "nine",
        ZERO: "zero",

        SPACE: "space",
        NEWLINE: "newline",

        properties:
        {
            "a":
            {
                name: "A",
                displayName: "a",
                fontLetter: "a",
                phoneme: "a",
            },
            "b":
            {
                name: "B",
                displayName: "b",
                fontLetter: "b",
                phoneme: "b",
            },
            "c":
            {
                name: "C",
                displayName: "c",
                fontLetter: "c",
                phoneme: "c",
            },
            "d":
            {
                name: "D",
                displayName: "d",
                fontLetter: "d",
                phoneme: "d",
            },
            "e":
            {
                name: "E",
                displayName: "e",
                fontLetter: "e",
                phoneme: "e",
            },
            "f":
            {
                name: "F",
                displayName: "f",
                fontLetter: "f",
                phoneme: "f",
            },
            "g":
            {
                name: "G",
                displayName: "g",
                fontLetter: "g",
                phoneme: "g",
            },
            "h":
            {
                name: "H",
                displayName: "h",
                fontLetter: "h",
                phoneme: "h",
            },
            "i":
            {
                name: "I",
                displayName: "i",
                fontLetter: "i",
                phoneme: "i",
            },
            "j":
            {
                name: "J",
                displayName: "j",
                fontLetter: "j",
                phoneme: "j",
            },
            "k":
            {
                name: "K",
                displayName: "k",
                fontLetter: "k",
                phoneme: "k",
            },
            "l":
            {
                name: "L",
                displayName: "l",
                fontLetter: "l",
                phoneme: "l",
            },
            "m":
            {
                name: "M",
                displayName: "m",
                fontLetter: "m",
                phoneme: "m",
            },
            "n":
            {
                name: "N",
                displayName: "n",
                fontLetter: "n",
                phoneme: "n",
            },
            "o":
            {
                name: "O",
                displayName: "o",
                fontLetter: "o",
                phoneme: "o",
            },
            "p":
            {
                name: "P",
                displayName: "p",
                fontLetter: "p",
                phoneme: "p",
            },
            "q":
            {
                name: "Q",
                displayName: "q",
                fontLetter: "q",
                phoneme: "q",
            },
            "r":
            {
                name: "R",
                displayName: "r",
                fontLetter: "r",
                phoneme: "r",
            },
            "s":
            {
                name: "S",
                displayName: "s",
                fontLetter: "s",
                phoneme: "s",
            },
            "t":
            {
                name: "T",
                displayName: "t",
                fontLetter: "t",
                phoneme: "t",
            },
            "u":
            {
                name: "U",
                displayName: "u",
                fontLetter: "u",
                phoneme: "u",
            },
            "v":
            {
                name: "V",
                displayName: "v",
                fontLetter: "v",
                phoneme: "v",
            },
            "w":
            {
                name: "W",
                displayName: "w",
                fontLetter: "w",
                phoneme: "w",
            },
            "x":
            {
                name: "X",
                displayName: "x",
                fontLetter: "x",
                phoneme: "x",
            },
            "y":
            {
                name: "Y",
                displayName: "y",
                fontLetter: "y",
                phoneme: "y",
            },
            "z":
            {
                name: "Z",
                displayName: "z",
                fontLetter: "z",
                phoneme: "z",
            },

            "zero":
            {
                name: "ZERO",
                displayName: "zero",
                fontLetter: "0",
                phoneme: "0",
            },
            "one":
            {
                name: "ONE",
                displayName: "one",
                fontLetter: "1",
                phoneme: "1",
            },
            "two":
            {
                name: "TWO",
                displayName: "two",
                fontLetter: "2",
                phoneme: "2",
            },
            "three":
            {
                name: "THREE",
                displayName: "three",
                fontLetter: "3",
                phoneme: "3",
            },
            "four":
            {
                name: "FOUR",
                displayName: "four",
                fontLetter: "4",
                phoneme: "4",
            },
            "five":
            {
                name: "FIVE",
                displayName: "five",
                fontLetter: "5",
                phoneme: "5",
            },
            "six":
            {
                name: "SIX",
                displayName: "six",
                fontLetter: "6",
                phoneme: "6",
            },
            "seven":
            {
                name: "SEVEN",
                displayName: "seven",
                fontLetter: "7",
                phoneme: "7",
            },
            "eight":
            {
                name: "EIGHT",
                displayName: "eight",
                fontLetter: "8",
                phoneme: "8",
            },
            "nine":
            {
                name: "NINE",
                displayName: "nine",
                fontLetter: "9",
                phoneme: "9",
            },

            "space":
            {
                name: "SPACE",
                displayName: "space",
                fontLetter: " ",
                phoneme: " ",
            },
            "newline":
            {
                name: "NEWLINE",
                displayName: "newline",
                fontLetter: "\n",
                phoneme: "\n",
            },
        },

        findByFontLetter: function(fontLetter)
        {
            var answer;
            var values = KryptonianRune.values();
            var properties = KryptonianRune.properties;

            for (var j = 0; j < values.length; j++)
            {
                var runeKey = values[j];

                if (properties[runeKey].fontLetter === fontLetter)
                {
                    answer = runeKey;
                    break;
                }
            }

            return answer;
        },

        findByPhoneme: function(phoneme)
        {
            var answer;
            var values = KryptonianRune.values();
            var properties = KryptonianRune.properties;

            for (var j = 0; j < values.length; j++)
            {
                var runeKey = values[j];

                if (properties[runeKey].phoneme === phoneme)
                {
                    answer = runeKey;
                    break;
                }
            }

            return answer;
        },

        isPunctuation: function(rune)
        {
            return [ KryptonianRune.SPACE, KryptonianRune.NEWLINE ].includes(rune) || [ " ", "\n" ].includes(rune);
        },

        values: function()
        {
            return Object.getOwnPropertyNames(KryptonianRune.properties);
        },
    }

    if (Object.freeze)
    {
        Object.freeze(KryptonianRune);
    }

    return KryptonianRune;
});
