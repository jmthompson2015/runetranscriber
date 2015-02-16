var PhoneticToTengwarTranscriber = function()
{
    // var phonemeToRuneMap = this.createPhonemeToRuneMap();

    var phonemeToRuneMap = {};

    phonemeToRuneMap["\n"] = "newline";
    phonemeToRuneMap[" "] = "space";
    phonemeToRuneMap[[ "", "" ]] = "comma";
    phonemeToRuneMap["-"] = "hyphen";
    phonemeToRuneMap["."] = "period";
    phonemeToRuneMap["a"] = [ "threeDots", "shortCarrier" ];
    phonemeToRuneMap[[ "a", "c", "e" ]] = [ "threeDots", "silmeNuquerna",
            "underDot" ];
    phonemeToRuneMap[[ "a", "d" ]] = [ "threeDots", "ando" ];
    phonemeToRuneMap[[ "a", "d", "e" ]] = [ "threeDots", "ando", "underDot" ];
    phonemeToRuneMap[[ "a", "f" ]] = [ "threeDots", "formen" ];
    phonemeToRuneMap[[ "a", "f", "t", "e", "r" ]] = [
            [ "threeDots", "formen" ], "tinco", [ "dot", "ore" ] ];
    phonemeToRuneMap[[ "a", "g" ]] = [ "threeDots", "ungwe" ];
    phonemeToRuneMap[[ "a", "j", "e" ]] = [ "threeDots", "anga", "underDot" ];
    phonemeToRuneMap[[ "a", "k" ]] = [ "threeDots", "quesse" ];
    phonemeToRuneMap[[ "a", "l" ]] = [ "threeDots", "lambe" ];
    phonemeToRuneMap[[ "a", "l", "e" ]] = [ "threeDots", "lambe", "underDot" ];
    phonemeToRuneMap[[ "a", "m" ]] = [ "threeDots", "malta" ];
    phonemeToRuneMap[[ "a", "m", "e" ]] = [ "threeDots", "malta", "underDot" ];
    phonemeToRuneMap[[ "a", "n" ]] = [ "threeDots", "numen" ];
    phonemeToRuneMap[[ "a", "n", "d" ]] = [ "threeDots", "numen", "ando" ];
    phonemeToRuneMap[[ "a", "n", "d", "a", "l", "f" ]] = [
            [ "threeDots", "numen" ], "ando", [ "threeDots", "lambe" ],
            "formen" ];
    phonemeToRuneMap[[ "a", "n", "d", "u", "i", "n" ]] = [
            [ "threeDots", "numen" ], "ando", [ "topCurl", "yanta" ], "numen" ];
    phonemeToRuneMap[[ "a", "n", "t", "i", "r", "i" ]] = [
            [ "threeDots", "numen" ], "tinco", [ "acute", "romen" ],
            [ "acute", "shortCarrier" ] ];
    phonemeToRuneMap[[ "a", "ng" ]] = [ "threeDots", "ngwalme" ];
    phonemeToRuneMap[[ "a", "r" ]] = [ "threeDots", "romen" ];
    phonemeToRuneMap[[ "a", "r", "e" ]] = [ "threeDots", "ore", "underDot" ];
    phonemeToRuneMap[[ "a", "t" ]] = [ "threeDots", "tinco" ];
    phonemeToRuneMap[[ "a", "y" ]] = [ "threeDots", "anna" ];
    phonemeToRuneMap[[ "a", "z" ]] = [ "threeDots", "esseNuquerna" ];
    phonemeToRuneMap["ai"] = [ "threeDots", "yanta" ];
    phonemeToRuneMap["and"] = [ "bar", "ando" ];
    phonemeToRuneMap["b"] = "umbar";
    phonemeToRuneMap[[ "b", "e" ]] = [ "umbar", "underDot" ];
    phonemeToRuneMap[[ "b", "e", "f", "o", "r", "e" ]] = [
            [ "umbar", "underDot" ], "formen",
            [ "leftCurl", "ore", "underDot" ] ];
    phonemeToRuneMap[[ "b", "y" ]] = [ "umbar", "anna" ];
    phonemeToRuneMap["c"] = "silmeNuquerna";
    phonemeToRuneMap["ch"] = "calma";
    phonemeToRuneMap["d"] = "ando";
    phonemeToRuneMap["e"] = [ "dot", "shortCarrier" ];
    phonemeToRuneMap[[ "e", "a" ]] = [ "dot", "shortCarrier", "threeUnderDots" ];
    phonemeToRuneMap[[ "e", "a", "r", "th" ]] = [
            [ "dot", "shortCarrier", "threeUnderDots" ], "ore", "thule" ];
    phonemeToRuneMap[[ "e", "a", "th", "e", "r" ]] = [
            [ "dot", "shortCarrier", "threeUnderDots" ], "anto",
            [ "dot", "ore" ] ];
    phonemeToRuneMap[[ "e", "d" ]] = [ "dot", "ando" ];
    phonemeToRuneMap[[ "e", "e", "p" ]] = [ "dot", "dot", "parma" ];
    phonemeToRuneMap[[ "e", "e", "t" ]] = [ "dot", "dot", "tinco" ];
    phonemeToRuneMap[[ "e", "i" ]] = [ "dot", "yanta" ];
    phonemeToRuneMap[[ "e", "k" ]] = [ "dot", "quesse" ];
    phonemeToRuneMap[[ "e", "k", "o", "v", "e", "r", "y" ]] = [
            [ "dot", "quesse" ], [ "leftCurl", "ampa" ], [ "dot", "romen" ],
            [ "acute", "longCarrier" ] ];
    phonemeToRuneMap[[ "e", "l" ]] = [ "dot", "lambe" ];
    phonemeToRuneMap[[ "e", "m" ]] = [ "dot", "malta" ];
    phonemeToRuneMap[[ "e", "n" ]] = [ "dot", "numen" ];
    phonemeToRuneMap[[ "e", "n", "g", "a", "r", "d" ]] = [ [ "dot", "numen" ],
            "ungwe", [ "threeDots", "ore" ], "ando" ];
    phonemeToRuneMap[[ "e", "ng" ]] = [ "dot", "ngwalme" ];
    phonemeToRuneMap[[ "e", "r" ]] = [ "dot", "romen" ];
    phonemeToRuneMap[[ "e", "r", "e" ]] = [ "dot", "romen", "underDot" ];
    phonemeToRuneMap[[ "e", "r", "i", "a", "n", "d" ]] = [ [ "dot", "romen" ],
            [ "acute", "shortCarrier" ], [ "threeDots", "numen" ], "ando" ];
    phonemeToRuneMap[[ "e", "r", "t", "a", "n" ]] = [ [ "dot", "ore" ],
            "tinco", [ "threeDots", "shortCarrier" ], "numen" ];
    phonemeToRuneMap[[ "e", "s" ]] = [ "dot", "silme" ];
    phonemeToRuneMap[[ "e", "s", "e" ]] = [ "dot", "silme", "underDot" ];
    phonemeToRuneMap[[ "e", "t" ]] = [ "dot", "tinco" ];
    phonemeToRuneMap[[ "e", "th" ]] = [ "dot", "anto" ];
    phonemeToRuneMap[[ "e", "y" ]] = [ "dot", "anna" ];
    phonemeToRuneMap["f"] = "formen";
    phonemeToRuneMap[[ "f", "a", "r", "a", "m", "i", "r" ]] = [ "formen",
            [ "threeDots", "romen" ], [ "threeDots", "malta" ],
            [ "acute", "romen" ] ];
    phonemeToRuneMap[[ "f", "o", "r", "e", "s", "t" ]] = [ "formen",
            [ "leftCurl", "romen" ], [ "dot", "silme" ], "tinco" ];
    phonemeToRuneMap["g"] = "ungwe";
    phonemeToRuneMap["gh"] = "gh";
    phonemeToRuneMap["h"] = "hyarmen";
    phonemeToRuneMap["i"] = [ "acute", "shortCarrier" ];
    phonemeToRuneMap[[ "i", "a" ]] = [ "acute", "shortCarrier",
            "threeUnderDots" ];
    phonemeToRuneMap[[ "i", "b" ]] = [ "acute", "umbar" ];
    phonemeToRuneMap[[ "i", "b", "e", "r", "a", "t" ]] = [
            [ "acute", "umbar" ], [ "dot", "ore" ],
            [ "threeDots", "shortCarrier" ], "tinco" ];
    phonemeToRuneMap[[ "i", "c" ]] = [ "acute", "silmeNuquerna" ];
    phonemeToRuneMap[[ "i", "c", "h" ]] = [ [ "acute", "calma" ] ];
    phonemeToRuneMap[[ "i", "c", "t", "o", "r", "y" ]] = [
            [ "acute", "silmeNuquerna" ], "tinco", [ "leftCurl", "romen" ],
            "anna" ];
    phonemeToRuneMap[[ "i", "ch" ]] = [ "acute", "calma" ];
    phonemeToRuneMap[[ "i", "d" ]] = [ "acute", "ando" ];
    phonemeToRuneMap[[ "i", "d", "d" ]] = [ "acute", "ando", "underBar" ];
    phonemeToRuneMap[[ "i", "d", "e" ]] = [ "acute", "ando", "underDot" ];
    phonemeToRuneMap[[ "i", "e" ]] = [ "acute", "shortCarrier", "underDot" ];
    phonemeToRuneMap[[ "i", "g" ]] = [ "acute", "ungwe" ];
    phonemeToRuneMap[[ "i", "l" ]] = [ "acute", "lambe" ];
    phonemeToRuneMap[[ "i", "m" ]] = [ "acute", "malta" ];
    phonemeToRuneMap[[ "i", "n" ]] = [ "acute", "numen" ];
    phonemeToRuneMap[[ "i", "ng" ]] = [ "acute", "ngwalme" ];
    phonemeToRuneMap[[ "i", "p" ]] = [ "acute", "parma" ];
    phonemeToRuneMap[[ "i", "r" ]] = [ "acute", "ore" ];
    phonemeToRuneMap[[ "i", "r", "e" ]] = [ "acute", "romen", "underDot" ];
    phonemeToRuneMap[[ "i", "s" ]] = [ "acute", "silme" ];
    phonemeToRuneMap[[ "i", "s", "e" ]] = [ "acute", "silme", "underDot" ];
    phonemeToRuneMap[[ "i", "s", "t", "o", "r", "y" ]] = [
            [ "acute", "silme" ], "tinco", [ "leftCurl", "romen" ],
            [ "acute", "longCarrier" ] ];
    phonemeToRuneMap[[ "i", "sh" ]] = [ "acute", "harma" ];
    phonemeToRuneMap[[ "i", "t" ]] = [ "acute", "tinco" ];
    phonemeToRuneMap[[ "i", "th" ]] = [ "acute", "thule" ];
    phonemeToRuneMap[[ "i", "v" ]] = [ "acute", "ampa" ];
    phonemeToRuneMap[[ "i", "z" ]] = [ "acute", "esse" ];
    phonemeToRuneMap["j"] = "anga";
    phonemeToRuneMap["k"] = "quesse";
    phonemeToRuneMap[[ "k", "i", "r", "i", "th" ]] = [ "quesse",
            [ "acute", "romen" ], [ "acute", "thule" ] ];
    phonemeToRuneMap["l"] = "lambe";
    phonemeToRuneMap[[ "l", "a", "n", "d" ]] = [ "lambe",
            [ "threeDots", "numen" ], "ando" ];
    phonemeToRuneMap[[ "l", "e" ]] = [ "lambe", "underDot" ];
    phonemeToRuneMap[[ "l", "o", "r", "i", "e", "n" ]] = [ "lambe",
            [ "leftCurl", "romen" ], [ "acute", "shortCarrier", "underDot" ],
            "numen" ];
    phonemeToRuneMap["m"] = "malta";
    phonemeToRuneMap[[ "m", "a", "n", "y" ]] = [ "malta",
            [ "threeDots", "numen" ], "anna" ];
    phonemeToRuneMap[[ "m", "a", "r", "ch" ]] = [ "malta",
            [ "threeDots", "ore" ], "calma" ];
    phonemeToRuneMap[[ "m", "o", "r", "a", "n", "n", "o", "n" ]] = [ "malta",
            [ "leftCurl", "romen" ], [ "threeDots", "numen", "underBar" ],
            [ "leftCurl", "numen" ] ];
    phonemeToRuneMap[[ "m", "o", "r", "i", "a" ]] = [ "malta",
            [ "leftCurl", "romen" ],
            [ "acute", "shortCarrier", "threeUnderDots" ] ];
    phonemeToRuneMap["n"] = "numen";
    phonemeToRuneMap[[ "n", "u", "m", "e", "n", "o", "r" ]] = [ "numen",
            [ "rightCurl", "malta" ], [ "dot", "numen" ],
            [ "leftCurl", "romen" ] ];
    phonemeToRuneMap["o"] = [ "leftCurl", "shortCarrier" ];
    phonemeToRuneMap[[ "o", "d" ]] = [ "leftCurl", "ando" ];
    phonemeToRuneMap[[ "o", "f" ]] = [ "leftCurl", "formen" ];
    phonemeToRuneMap[[ "o", "g" ]] = [ "leftCurl", "ungwe" ];
    phonemeToRuneMap[[ "o", "k" ]] = [ "leftCurl", "quesse" ];
    phonemeToRuneMap[[ "o", "l" ]] = [ "leftCurl", "lambe" ];
    phonemeToRuneMap[[ "o", "m" ]] = [ "leftCurl", "malta" ];
    phonemeToRuneMap[[ "o", "m", "e" ]] = [ "leftCurl", "malta", "underDot" ];
    phonemeToRuneMap[[ "o", "n" ]] = [ "leftCurl", "numen" ];
    phonemeToRuneMap[[ "o", "n", "e" ]] = [ "leftCurl", "numen", "underDot" ];
    phonemeToRuneMap[[ "o", "p" ]] = [ "leftCurl", "parma" ];
    phonemeToRuneMap[[ "o", "r" ]] = [ "leftCurl", "ore" ];
    phonemeToRuneMap[[ "o", "r", "e" ]] = [ "leftCurl", "romen", "underDot" ];
    phonemeToRuneMap[[ "o", "th" ]] = [ "leftCurl", "thule" ];
    phonemeToRuneMap[[ "o", "u" ]] = [ "leftCurl", "ure" ];
    phonemeToRuneMap[[ "o", "u", "r", "n", "e", "y" ]] = [
            [ "leftCurl", "ure" ], "ore", "numen", [ "dot", "anna" ] ];
    phonemeToRuneMap[[ "o", "v" ]] = [ "leftCurl", "ampa" ];
    phonemeToRuneMap[[ "o", "w" ]] = [ "leftCurl", "vala" ];
    phonemeToRuneMap[[ "o", "w", "e" ]] = [ "leftCurl", "vala", "underDot" ];
    phonemeToRuneMap["of"] = "of";
    phonemeToRuneMap["of the"] = "ofThe";
    phonemeToRuneMap["oo"] = [ "leftCurl", "longCarrier" ];
    phonemeToRuneMap["p"] = "parma";
    phonemeToRuneMap[[ "p", "o", "w", "r" ]] = [ "parma",
            [ "leftCurl", "vala" ], "ore" ];
    phonemeToRuneMap["r"] = "romen";
    phonemeToRuneMap[[ "r", "a", "n", "d", "i", "r" ]] = [ "romen",
            [ "threeDots", "numen" ], "ando", [ "acute", "romen" ] ];
    phonemeToRuneMap[[ "r", "e" ]] = [ "romen", "underDot" ];
    phonemeToRuneMap[[ "r", "e", "t", "u", "r", "n" ]] = [ "romen",
            [ "dot", "tinco" ], [ "topCurl", "ore" ], "numen" ];
    phonemeToRuneMap[[ "r", "e", "u", "e", "l" ]] = [ "romen",
            [ "dot", "shortCarrier" ], [ "rightCurl", "shortCarrier" ],
            [ "dot", "lambe" ] ];
    phonemeToRuneMap[[ "r", "i", "d", "e", "r", "s" ]] = [ "romen",
            [ "acute", "ando" ], [ "dot", "ore" ], "silme" ];
    phonemeToRuneMap[[ "r", "i", "v", "e", "r" ]] = [ "romen",
            [ "acute", "ampa" ], [ "dot", "ore" ] ];
    phonemeToRuneMap["s"] = "silme";
    phonemeToRuneMap[[ "s", "a", "u", "r", "o", "n" ]] = [ "silme",
            [ "threeDots", "shortCarrier" ], [ "rightCurl", "romen" ],
            [ "leftCurl", "numen" ] ];
    phonemeToRuneMap[[ "s", "e", "e", "n" ]] = [ "silme",
            [ "dot", "shortCarrier" ], [ "dot", "shortCarrier" ], "numen" ];
    phonemeToRuneMap[[ "s", "k", "o", "l", "a", "r" ]] = [ "silme", "quesse",
            [ "leftCurl", "lambe" ], [ "threeDots", "ore" ] ];
    phonemeToRuneMap[[ "s", "o", "n" ]] = [ "silme", [ "leftCurl", "numen" ] ];
    phonemeToRuneMap[[ "s", "t", "ai", "r" ]] = [ "silme", "tinco",
            [ "threeDots", "yanta" ], "ore" ];
    phonemeToRuneMap[[ "s", "t", "o", "r", "y" ]] = [ "silme", "tinco",
            [ "leftCurl", "romen" ], "anna" ];
    phonemeToRuneMap["sh"] = "harma";
    phonemeToRuneMap["t"] = "tinco";
    phonemeToRuneMap[[ "t", "o" ]] = [ "tinco", [ "leftCurl", "shortCarrier" ] ];
    phonemeToRuneMap["th"] = "thule";
    phonemeToRuneMap[[ "th", "e", "i", "r" ]] = [ "anto", [ "dot", "yanta" ],
            "ore" ];
    phonemeToRuneMap[[ "th", "e", "n" ]] = [ "anto", [ "dot", "numen" ] ];
    phonemeToRuneMap[[ "th", "e", "s", "e" ]] = [ "anto",
            [ "dot", "silme", "underDot" ] ];
    phonemeToRuneMap[[ "th", "i", "s" ]] = [ "anto", [ "acute", "silme" ] ];
    phonemeToRuneMap["the"] = "the";
    phonemeToRuneMap["u"] = [ "rightCurl", "shortCarrier" ];
    phonemeToRuneMap[[ "u", "e" ]] = [ "rightCurl", "shortCarrier", "underDot" ];
    phonemeToRuneMap[[ "u", "i" ]] = [ "topCurl", "yanta" ];
    phonemeToRuneMap[[ "u", "k" ]] = [ "rightCurl", "quesse" ];
    phonemeToRuneMap[[ "u", "m" ]] = [ "rightCurl", "malta" ];
    phonemeToRuneMap[[ "u", "m", "b", "a", "r" ]] = [ [ "rightCurl", "malta" ],
            "umbar", [ "threeDots", "ore" ] ];
    phonemeToRuneMap[[ "u", "m", "e" ]] = [ "rightCurl", "malta", "underDot" ];
    phonemeToRuneMap[[ "u", "n" ]] = [ "rightCurl", "numen" ];
    phonemeToRuneMap[[ "u", "n", "e" ]] = [ "rightCurl", "numen", "underDot" ];
    phonemeToRuneMap[[ "u", "ng" ]] = [ "rightCurl", "ngwalme" ];
    phonemeToRuneMap[[ "u", "p" ]] = [ "rightCurl", "parma" ];
    phonemeToRuneMap[[ "u", "r" ]] = [ "rightCurl", "ore" ];
    phonemeToRuneMap[[ "u", "s" ]] = [ "rightCurl", "silme" ];
    phonemeToRuneMap[[ "u", "t" ]] = [ "rightCurl", "tinco" ];
    phonemeToRuneMap["v"] = "ampa";
    phonemeToRuneMap[[ "v", "e" ]] = [ "ampa", "underDot" ];
    phonemeToRuneMap["w"] = "vala";
    phonemeToRuneMap[[ "w", "a" ]] = [ "vala", "threeUnderDots" ];
    phonemeToRuneMap[[ "w", "a", "r" ]] = [ "vala", [ "threeDots", "ore" ] ];
    phonemeToRuneMap[[ "w", "i", "th" ]] = [ "vala", [ "acute", "anto" ] ];
    phonemeToRuneMap["wh"] = "hwestaSindarinwa";
    phonemeToRuneMap["y"] = "anna";
    phonemeToRuneMap["z"] = "esse";
    phonemeToRuneMap[[ "z", "i", "g", "u", "r" ]] = [ "esse",
            [ "acute", "ungwe" ], [ "rightCurl", "romen" ] ];

    this.getPhonemeToRuneMap = function()
    {
        return phonemeToRuneMap;
    }
}

PhoneticToTengwarTranscriber.prototype.createPhonemeToRuneMap = function()
{
    var answer = {};

    // Inconsistencies.
    answer["r"] = TengwaRune.ROMEN;
    answer["y"] = TengwaRune.ANNA;

    // The Silmarillon 1
    answer[[ [ "e", "a" ], "r", "th" ]] = [
            [ "dot", "shortCarrier", "threeUnderDots" ], "ore", "thule" ];
    answer[[ [ "e", "k" ], [ "o", "v" ], [ "e", "r" ], "y" ]] = [
            [ TengwaRune.DOT, TengwaRune.QUESSE ],
            [ TengwaRune.LEFT_CURL, TengwaRune.AMPA ],
            [ TengwaRune.DOT, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ] ];

    // The Silmarillon 2
    answer[[ "t", "o" ]] = [ TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER ] ];
    answer[[ [ "i", "s" ], "t", [ "o", "r" ], "y" ]] = [
            [ TengwaRune.ACUTE, TengwaRune.SILME ], TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.LONG_CARRIER ] ];
    answer[[ "p", [ "o", "w" ], "r" ]] = [ TengwaRune.PARMA,
            [ TengwaRune.LEFT_CURL, TengwaRune.VALA ], TengwaRune.ORE ];
    answer[[ "th", [ "e", "s", "e" ] ]] = [ TengwaRune.ANTO,
            [ TengwaRune.DOT, TengwaRune.SILME, TengwaRune.UNDER_DOT ] ];
    answer[[ "th", [ "e", "i" ], "r" ]] = [ TengwaRune.ANTO,
            [ TengwaRune.DOT, TengwaRune.YANTA ], TengwaRune.ORE ];

    // Unfinished Tales Of Numenor And Middle-Earth 1
    answer[[ "th", [ "i", "s" ] ]] = [ TengwaRune.ANTO,
            [ TengwaRune.ACUTE, TengwaRune.SILME ] ];
    answer[[ "b", "y" ]] = [ TengwaRune.UMBAR, TengwaRune.ANNA ];
    answer[[ "r", "e", "u", [ "e", "l" ] ]] = [ "romen",
            [ "dot", "shortCarrier" ], [ "rightCurl", "shortCarrier" ],
            [ "dot", "lambe" ] ];
    // answer[[ "r", "e" ]] = [ TengwaRune.ROMEN,
    // [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ] ];
    answer[[ "s", [ "o", "n" ] ]] = [ TengwaRune.SILME,
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ] ];

    // Unfinished Tales Of Numenor And Middle-Earth 2
    answer[[ "m", [ "a", "n" ], "y" ]] = [ TengwaRune.MALTA,
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.ANNA ];
    answer[[ "n", [ "u", "m" ], [ "e", "n" ], [ "o", "r" ] ]] = [ "numen",
            [ "rightCurl", "malta" ], [ "dot", "numen" ],
            [ "leftCurl", "romen" ] ];
    answer[[ [ "e", "r" ], "i", [ "a", "n" ], "d" ]] = [
            [ TengwaRune.DOT, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.ANDO ];
    answer[[ "w", [ "a", "r" ] ]] = [ TengwaRune.VALA,
            [ TengwaRune.THREE_DOTS, TengwaRune.ORE ] ];
    answer[[ [ "a", "n" ], "t", [ "i", "r" ], "i" ]] = [
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.TINCO,
            [ TengwaRune.ACUTE, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER ] ];

    // The Return Of The Shadow 1
    answer[[ [ "o", "u" ], "r", "n", [ "e", "y" ] ]] = [
            [ TengwaRune.LEFT_CURL, TengwaRune.URE ], TengwaRune.ORE,
            TengwaRune.NUMEN, [ TengwaRune.DOT, TengwaRune.ANNA ] ];
    answer[[ [ "a", "f" ], "t", [ "e", "r" ] ]] = [
            [ TengwaRune.THREE_DOTS, TengwaRune.FORMEN ], TengwaRune.TINCO,
            [ TengwaRune.DOT, TengwaRune.ORE ] ];
    answer[[ "s", "t", [ "o", "r" ], "y" ]] = [ TengwaRune.SILME,
            TengwaRune.TINCO, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            TengwaRune.ANNA ];

    // The Return Of The Shadow 2
    answer[[ "f", [ "o", "r" ], [ "e", "s" ], "t" ]] = [ TengwaRune.FORMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.DOT, TengwaRune.SILME ], TengwaRune.TINCO ];
    answer[[ [ "e", "a" ], "th", [ "e", "r" ] ]] = [
            [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER,
                    TengwaRune.THREE_UNDER_DOTS ], TengwaRune.ANTO,
            [ TengwaRune.DOT, TengwaRune.ORE ] ];
    answer[[ [ "b", "e" ], "f", [ "o", "r", "e" ] ]] = [
            [ TengwaRune.UMBAR, TengwaRune.UNDER_DOT ], TengwaRune.FORMEN,
            [ TengwaRune.LEFT_CURL, TengwaRune.ORE, TengwaRune.UNDER_DOT ] ];
    answer[[ "m", [ "o", "r" ], [ "i", "a" ] ]] = [
            TengwaRune.MALTA,
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER,
                    TengwaRune.THREE_UNDER_DOTS ] ];

    // The Treason Of Isengard 1
    answer[[ [ "e", "n" ], "g", [ "a", "r" ], "d" ]] = [
            [ TengwaRune.DOT, TengwaRune.NUMEN ], TengwaRune.UNGWE,
            [ TengwaRune.THREE_DOTS, TengwaRune.ORE ], TengwaRune.ANDO ];
    answer[[ "l", [ "a", "n" ], "d" ]] = [ TengwaRune.LAMBE,
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.ANDO ];
    answer[[ "l", [ "o", "r" ], [ "i", "e" ], "n" ]] = [
            TengwaRune.LAMBE,
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.UNDER_DOT ],
            TengwaRune.NUMEN ];

    // The Treason Of Isengard 2
    answer[[ [ "a", "n" ], "d", [ "u", "i" ], "n" ]] = [
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.ANDO,
            [ TengwaRune.TOP_CURL, TengwaRune.YANTA ], TengwaRune.NUMEN ];
    answer[[ "r", [ "i", "v" ], [ "e", "r" ] ]] = [ TengwaRune.ROMEN,
            [ TengwaRune.ACUTE, TengwaRune.AMPA ],
            [ TengwaRune.DOT, TengwaRune.ORE ] ];
    answer[[ [ "a", "n" ], "d", [ "a", "l" ], "f" ]] = [
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.ANDO,
            [ TengwaRune.THREE_DOTS, TengwaRune.LAMBE ], TengwaRune.FORMEN ];
    answer[[ "r", [ "a", "n" ], "d", [ "i", "r" ] ]] = [ TengwaRune.ROMEN,
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN ], TengwaRune.ANDO,
            [ TengwaRune.ACUTE, TengwaRune.ROMEN ] ];
    answer[[ "r", [ "i", "d" ], [ "e", "r" ], "s" ]] = [ TengwaRune.ROMEN,
            [ TengwaRune.ACUTE, TengwaRune.ANDO ],
            [ TengwaRune.DOT, TengwaRune.ORE ], TengwaRune.SILME ];

    // The War Of The Ring 1
    answer[[ [ "i", "c" ], "t", [ "o", "r" ], "y" ]] = [
            [ TengwaRune.ACUTE, TengwaRune.SILME_NUQUERNA ], TengwaRune.TINCO,
            [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ], TengwaRune.ANNA ];
    answer[[ "th", [ "e", "n" ] ]] = [ TengwaRune.ANTO,
            [ TengwaRune.DOT, TengwaRune.NUMEN ] ];

    // The War Of The Ring 1
    answer[[ "w", [ "i", "th" ] ]] = [ TengwaRune.VALA,
            [ TengwaRune.ACUTE, TengwaRune.ANTO ] ];
    answer[[ "m", [ "o", "r" ], [ "a", "n", "n" ], [ "o", "n" ] ]] = [
            TengwaRune.MALTA, [ TengwaRune.LEFT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.THREE_DOTS, TengwaRune.NUMEN, TengwaRune.UNDER_BAR, ],
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ] ];
    answer[[ "f", [ "a", "r" ], [ "a", "m" ], [ "i", "r" ] ]] = [
            TengwaRune.FORMEN, [ TengwaRune.THREE_DOTS, TengwaRune.ROMEN ],
            [ TengwaRune.THREE_DOTS, TengwaRune.MALTA ],
            [ TengwaRune.ACUTE, TengwaRune.ROMEN ] ];
    answer[[ "s", "t", "ai", "r" ]] = [ TengwaRune.SILME, TengwaRune.TINCO,
            [ TengwaRune.THREE_DOTS, TengwaRune.YANTA ], TengwaRune.ORE ];
    answer[[ "k", [ "i", "r" ], [ "i", "th" ] ]] = [ TengwaRune.QUESSE,
            [ TengwaRune.ACUTE, TengwaRune.ROMEN ],
            [ TengwaRune.ACUTE, TengwaRune.THULE ] ];
    answer[[ [ "u", "m" ], "b", [ "a", "r" ] ]] = [
            [ TengwaRune.RIGHT_CURL, TengwaRune.MALTA ], TengwaRune.UMBAR,
            [ TengwaRune.THREE_DOTS, TengwaRune.ORE ] ];

    // Sauron Defeated 1
    answer[[ "s", "a", [ "u", "r" ], [ "o", "n" ] ]] = [ TengwaRune.SILME,
            [ TengwaRune.THREE_DOTS, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.RIGHT_CURL, TengwaRune.ROMEN ],
            [ TengwaRune.LEFT_CURL, TengwaRune.NUMEN ] ];

    // Sauron Defeated 2
    answer[[ [ "i", "b" ], [ "e", "r" ], "a", "t" ]] = [
            [ TengwaRune.ACUTE, TengwaRune.UMBAR ],
            [ TengwaRune.DOT, TengwaRune.ORE ],
            [ TengwaRune.THREE_DOTS, TengwaRune.SHORT_CARRIER ],
            TengwaRune.TINCO, ];
    answer[[ [ "e", "r" ], "t", "a", "n" ]] = [
            [ TengwaRune.DOT, TengwaRune.ORE ], TengwaRune.TINCO,
            [ TengwaRune.THREE_DOTS, TengwaRune.SHORT_CARRIER ],
            TengwaRune.NUMEN ];
    answer[[ "s", "k", [ "o", "l" ], [ "a", "r" ] ]] = [ TengwaRune.SILME,
            TengwaRune.QUESSE, [ TengwaRune.LEFT_CURL, TengwaRune.LAMBE ],
            [ TengwaRune.THREE_DOTS, TengwaRune.ORE ] ];
    answer[[ "z", [ "i", "g" ], [ "u", "r" ] ]] = [ TengwaRune.ESSE,
            [ TengwaRune.ACUTE, TengwaRune.UNGWE ],
            [ TengwaRune.RIGHT_CURL, TengwaRune.ROMEN ] ];

    // The Lord Of The Rings 2
    answer[[ "m", [ "a", "r" ], "ch" ]] = [ TengwaRune.MALTA,
            [ TengwaRune.THREE_DOTS, TengwaRune.ORE ], TengwaRune.CALMA ];
    answer[[ "r", [ "e", "t" ], [ "u", "r" ], "n" ]] = [ "romen",
            [ "dot", "tinco" ], [ "topCurl", "ore" ], "numen" ];
    answer[[ "s", "e", "e", "n" ]] = [ TengwaRune.SILME,
            [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ],
            [ TengwaRune.DOT, TengwaRune.SHORT_CARRIER ], TengwaRune.NUMEN ];

    var examples = [ TengwarExampleTS1, TengwarExampleTS2,
            TengwarExampleUTONAME1, TengwarExampleUTONAME2,
            TengwarExampleTROTS1, TengwarExampleTROTS2, TengwarExampleTTOI1,
            TengwarExampleTTOI2, TengwarExampleTWOTR1, TengwarExampleTWOTR2,
            TengwarExampleSD1, TengwarExampleSD2,
            // TLOTR last because J.R.R. uses a different approach than
            // Christopher.
            TengwarExampleTLOTR2 ];

    var romenCount = 0;
    var oreCount = 0;
    var thuleCount = 0;
    var antoCount = 0;

    for (var i = 0; i < examples.length; i++)
    {
        var example = examples[i];
        var phonemes = example.PHONEMES;
        var runes = example.RUNES;

        for (var j = 0; j < phonemes.length; j++)
        {
            var phoneme = phonemes[j];
            var rune = runes[j];

            if (rune === TengwaRune.ANTO)
            {
                antoCount++;
            }
            else if (rune === TengwaRune.ORE)
            {
                oreCount++;
            }
            else if (rune === TengwaRune.ROMEN)
            {
                romenCount++;
            }
            else if (rune === TengwaRune.THULE)
            {
                thuleCount++;
            }

            if (answer[phoneme] === undefined)
            {
                answer[phoneme] = rune;
            }
            // else if (answer[languageWord] !== phonemeWord)
            // {
            // LOGGER.warn("different entry for _" + languageWord + "_: _"
            // + answer[languageWord] + "_ or _" + phonemeWord + "_");
            // }
        }
    }

    // LOGGER.info("romenCount = " + romenCount);
    // LOGGER.info("oreCount = " + oreCount);
    // LOGGER.info("thuleCount = " + thuleCount);
    // LOGGER.info("antoCount = " + antoCount);

    return answer;
}

PhoneticToTengwarTranscriber.prototype.createWordToCountMap = function(result)
{
    var answer = {};

    var examples = [ TengwarExampleTS1, TengwarExampleTS2,
            TengwarExampleUTONAME1, TengwarExampleUTONAME2,
            TengwarExampleTROTS1, TengwarExampleTROTS2, TengwarExampleTTOI1,
            TengwarExampleTTOI2, TengwarExampleTWOTR1, TengwarExampleTWOTR2,
            TengwarExampleSD1, TengwarExampleSD2,
            // TLOTR last because J.R.R. uses a different approach than
            // Christopher.
            TengwarExampleTLOTR2 ];

    var romenCount = 0;
    var oreCount = 0;
    var thuleCount = 0;
    var antoCount = 0;

    for (var i = 0; i < examples.length; i++)
    {
        var example = examples[i];
        var words = example.LANGUAGE_WORDS;

        for (var j = 0; j < words.length; j++)
        {
            var word = words[j];

            if (!(word === " " || word === "," || word === "." || word === "\n"))
            {
                var count = answer[word];

                if (count === undefined)
                {
                    answer[word] = 1;
                }
                else
                {
                    answer[word] = count + 1;
                }
            }
        }
    }

    return answer;
}

PhoneticToTengwarTranscriber.prototype.createWordToRuneWordMap = function()
{
    var answer = {};

    var examples = [ TengwarExampleTS1, TengwarExampleTS2,
            TengwarExampleUTONAME1, TengwarExampleUTONAME2,
            TengwarExampleTROTS1, TengwarExampleTROTS2, TengwarExampleTTOI1,
            TengwarExampleTTOI2, TengwarExampleTWOTR1, TengwarExampleTWOTR2,
            TengwarExampleSD1, TengwarExampleSD2,
            // TLOTR last because J.R.R. uses a different approach than
            // Christopher.
            TengwarExampleTLOTR2 ];

    for (var i = 0; i < examples.length; i++)
    {
        var example = examples[i];
        var words = example.LANGUAGE_WORDS;
        var runeWords = this.runesToRuneWords(example.RUNES);

        // LOGGER.debug("words.length = " + words.length);
        // LOGGER.debug("runeWords.length = " + runeWords.length);

        for (var j = 0; j < words.length; j++)
        {
            var word = words[j];
            var runeWord = runeWords[j];

            if (!(word === " " || word === "," || word === "." || word === "\n"))
            {
                var rw = answer[word];

                if (rw === undefined)
                {
                    answer[word] = [ runeWord ];
                }
                else
                {
                    // Don't store a duplicate.
                    if (!rw.contains(runeWord))
                    {
                        rw[rw.length] = runeWord;
                    }
                }
            }
        }
    }

    return answer;
}

PhoneticToTengwarTranscriber.prototype.determineFontLetter = function(rune)
{
    if (!rune) { throw new Error("rune " + rune + " is undefined"); }

    var answer;

    if (Array.isArray(rune))
    {
        answer = [];

        for (var i = 0; i < rune.length; i++)
        {
            var rune2 = rune[i];

            if (this.isPreVowel(rune2))
            {
                if (i + 2 < rune.length && rune2 === "dot"
                        && rune[i + 1] === "dot"
                        && !this.isPreVowel(rune[i + 2]))
                {
                    answer[answer.length] = this
                            .determineFontLetter(rune[i + 2]);
                    answer[answer.length] = "B"; // DOT3
                    i += 2;
                }
                else if (i + 1 < rune.length)
                {
                    answer[answer.length] = this
                            .determineFontLetter(rune[i + 1]);
                    i++;
                }

                answer[answer.length] = this.determineFontLetter(rune2);
            }
            else
            {
                answer[answer.length] = this.determineFontLetter(rune2);
            }
        }
    }
    else
    {
        var properties = TengwaRune.properties;
        try
        {
            var fontLetter = properties[rune].fontLetter;

            if (fontLetter)
            {
                answer = fontLetter;
            }
        }
        catch (e)
        {
            LOGGER.error("Unknown rune " + rune);
        }
    }

    return answer;
}

PhoneticToTengwarTranscriber.prototype.isConsonant = function(letter)
{
    return !this.isPunctuation(letter) && !this.isVowel(letter);
}

PhoneticToTengwarTranscriber.prototype.isPreVowel = function(rune)
{
    return rune === "acute" || rune === "bar" || rune === "dot"
            || rune === "leftCurl" || rune === "rightCurl"
            || rune === "threeDots" || rune === "topCurl";
}

PhoneticToTengwarTranscriber.prototype.isPunctuation = function(letter)
{
    var PUNCTUATION = [ " ", ",", ".", "\n", TengwaRune.SPACE,
            TengwaRune.COMMA, TengwaRune.PERIOD, TengwaRune.NEWLINE ];

    return PUNCTUATION.contains(letter);
}

PhoneticToTengwarTranscriber.prototype.isVowel = function(letter)
{
    var VOWELS = [ "a", "e", "i", "o", "u" ];

    return VOWELS.contains(letter);
}

PhoneticToTengwarTranscriber.prototype.phonemesToRunes = function(phonemes)
{
    var answer = [];

    var map = this.getPhonemeToRuneMap();

    for (var i = 0; i < phonemes.length; i++)
    {
        // Try four, three, two, then one phoneme.
        for (var j = 3; j >= 0; j--)
        {
            var phoneme = phonemes[i];

            if (i < phonemes.length - 1 && j > 0)
            {
                var p = [];

                for (var k = 0; k <= j; k++)
                {
                    p[p.length] = phonemes[i + k];
                }

                phoneme = p;
            }
            else
            {
                phoneme = phonemes[i];
            }
            // LOGGER.debug(i + "," + j + " phoneme = " + phoneme);

            var rune = map[phoneme];

            if (rune !== undefined)
            {
                if (j > 0)
                {
                    answer = answer.concat(rune);
                }
                else
                {
                    answer[answer.length] = rune;
                }
                i += j;
                j = -1;
            }
            else
            {
                if (Array.isArray(phoneme))
                {
                    if (phoneme.length === 3)
                    {
                        var letter0 = phoneme[0];
                        var letter1 = phoneme[1];
                        var letter2 = phoneme[2];

                        if (this.isVowel(letter0) && this.isConsonant(letter1)
                                && letter1 === letter2)
                        {
                            var rune0 = TengwaRune.findRuneByPhoneme(letter0);
                            var rune1 = TengwaRune.findRuneByPhoneme(letter1);

                            answer[answer.length] = [ rune0, rune1,
                                    TengwaRune.UNDER_BAR ];
                            i += j;
                            j = -1;
                        }
                    }
                }
                else
                {
                    // Search for the rune with the given phoneme.
                    rune = TengwaRune.findRuneByPhoneme(phoneme);

                    if (rune !== undefined)
                    {
                        answer[answer.length] = rune;
                        i += j;
                        j = -1;
                    }
                }
            }
        }
    }

    // LOGGER.debug("answer = " + answer);

    return answer;
}

PhoneticToTengwarTranscriber.prototype.runesToFontLetters = function(runes)
{
    var answer = [];

    for (var i = 0; i < runes.length; i++)
    {
        var rune = runes[i];

        if (!rune) { throw new Error("rune is undefined from " + i + " "
                + runes); }

        if (rune !== "newline")
        {
            answer[answer.length] = this.determineFontLetter(rune);
        }
    }

    return answer;
}

PhoneticToTengwarTranscriber.prototype.runesToRuneWords = function(runes)
{
    var answer = [];
    var word = [];

    for (var i = 0; i < runes.length; i++)
    {
        var letter = runes[i];

        // LOGGER.debug(i + " letter = _" + letter + "_");

        if (letter === "and" || letter === "of" || letter === "ofThe"
                || letter === "the")
        {
            answer[answer.length] = letter;
            word = [];
        }
        else if (this.isPunctuation(letter))
        {
            if (word.length > 0)
            {
                answer[answer.length] = word;
            }

            answer[answer.length] = letter;
            word = [];
        }
        else if (i === runes.length - 1 && word.length > 0)
        {
            word[word.length] = letter;
            answer[answer.length] = word;
        }
        else
        {
            word[word.length] = letter;
        }
    }

    return answer;
}

PhoneticToTengwarTranscriber.prototype.arrayToString = function(value)
{
    var answer = "";

    if (value === "\n")
    {
        answer = "\"\\n\"";
    }
    else if (typeof value === "string")
    {
        answer = "\"" + value + "\"";
    }
    else if (Array.isArray(value))
    {
        answer += "[";

        for (var j = 0; j < value.length; j++)
        {
            if (Array.isArray(value[j]))
            {
                answer += this.arrayToString(value[j]);
            }
            else
            {
                answer += "\"" + value[j] + "\"";
            }

            if (j < value.length - 1)
            {
                answer += ", ";
            }
        }

        answer += "]";
    }

    return answer;
}

PhoneticToTengwarTranscriber.prototype.mapToString = function(result)
{
    var answer = "";
    var properties = Object.getOwnPropertyNames(result);
    properties.sort();

    for (var i = 0; i < properties.length; i++)
    {
        var property = properties[i];
        var propertyString;

        if (property === "\n")
        {
            propertyString = "\"\\n\"";
        }
        // else if (Array.isArray(property) && property.length > 1)
        else if (property.indexOf(",") >= 0)
        {
            var values = property.split(",");

            propertyString = "[";

            for (var j = 0; j < values.length; j++)
            {
                var p = values[j].trim();
                propertyString += "\"" + p + "\"";

                if (j < values.length - 1)
                {
                    propertyString += ", ";
                }
            }

            propertyString += "]";
        }
        else
        {
            propertyString = "\"" + property + "\"";
        }

        var value = result[property];
        var valueString;

        if (value === "\n")
        {
            valueString = "\"\\n\"";
        }
        else if (typeof value === "string")
        {
            valueString = "\"" + value + "\"";
        }
        else if (Array.isArray(value))
        {
            valueString = this.arrayToString(value);
        }
        else
        {
            valueString = value;
        }

        answer += "phonemeToRuneMap[" + propertyString + "] = " + valueString
                + ";\n";
    }

    return answer;
}

if (Object.freeze)
{
    Object.freeze(PhoneticToTengwarTranscriber);
}
