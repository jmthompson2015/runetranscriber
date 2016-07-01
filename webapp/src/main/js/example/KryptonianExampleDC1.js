/*
 * Provides an example for Kryptonian runes from <a href="http://www.kryptonian.info/dccomics.html">DC Comics 2000 Superman</a>.
 *
 * <a href="http://www.supermanhomepage.com/comics/comics.php?topic=comics-kryptonian_alphabet">Kryptonian Alphabet</a>
 */
define([ "KryptonianRune" ], function(KryptonianRune)
{
    var KryptonianExampleDC1 =
    {
        NAME: "Kryptonian Example DC1",

        IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/dccomics/DC2000Example1.jpg",
        IMAGE_WIDTH: 500,

        LANGUAGE_STRING: "I dont\n" + "mean to\n" + "bother you but\n" + "with everything\n" + "thats happened\n"
                + "in kandor you look\n" + "like you could\n" + "use a friend\n" + "right now",

        LANGUAGE_WORDS: [ "i", " ", "dont", "\n", "mean", " ", "to", "\n", "bother", " ", "you", " ", "but", "\n",
                "with", " ", "everything", "\n", "thats", " ", "happened", "\n", "in", " ", "kandor", " ", "you", " ",
                "look", "\n", "like", " ", "you", " ", "could", "\n", "use", " ", "a", " ", "friend", "\n", "right",
                " ", "now" ],

        PHONEMES: [
        // i dont
        KryptonianRune.properties["i"].phoneme, KryptonianRune.properties["space"].phoneme,
                KryptonianRune.properties["d"].phoneme, KryptonianRune.properties["o"].phoneme,
                KryptonianRune.properties["n"].phoneme, KryptonianRune.properties["t"].phoneme,
                KryptonianRune.properties["newline"].phoneme,
                // mean to
                KryptonianRune.properties["m"].phoneme, KryptonianRune.properties["e"].phoneme,
                KryptonianRune.properties["a"].phoneme, KryptonianRune.properties["n"].phoneme,
                KryptonianRune.properties["space"].phoneme, KryptonianRune.properties["t"].phoneme,
                KryptonianRune.properties["o"].phoneme, KryptonianRune.properties["newline"].phoneme,
                // bother you but
                KryptonianRune.properties["b"].phoneme, KryptonianRune.properties["o"].phoneme,
                KryptonianRune.properties["t"].phoneme, KryptonianRune.properties["h"].phoneme,
                KryptonianRune.properties["e"].phoneme, KryptonianRune.properties["r"].phoneme,
                KryptonianRune.properties["space"].phoneme, KryptonianRune.properties["y"].phoneme,
                KryptonianRune.properties["o"].phoneme, KryptonianRune.properties["u"].phoneme,
                KryptonianRune.properties["space"].phoneme, KryptonianRune.properties["b"].phoneme,
                KryptonianRune.properties["u"].phoneme, KryptonianRune.properties["t"].phoneme,
                KryptonianRune.properties["newline"].phoneme,
                // with everything
                KryptonianRune.properties["w"].phoneme, KryptonianRune.properties["i"].phoneme,
                KryptonianRune.properties["t"].phoneme, KryptonianRune.properties["h"].phoneme,
                KryptonianRune.properties["space"].phoneme, KryptonianRune.properties["e"].phoneme,
                KryptonianRune.properties["v"].phoneme, KryptonianRune.properties["e"].phoneme,
                KryptonianRune.properties["r"].phoneme, KryptonianRune.properties["y"].phoneme,
                KryptonianRune.properties["t"].phoneme, KryptonianRune.properties["h"].phoneme,
                KryptonianRune.properties["i"].phoneme, KryptonianRune.properties["n"].phoneme,
                KryptonianRune.properties["g"].phoneme, KryptonianRune.properties["newline"].phoneme,
                // thats happened
                KryptonianRune.properties["t"].phoneme, KryptonianRune.properties["h"].phoneme,
                KryptonianRune.properties["a"].phoneme, KryptonianRune.properties["t"].phoneme,
                KryptonianRune.properties["s"].phoneme, KryptonianRune.properties["space"].phoneme,
                KryptonianRune.properties["h"].phoneme, KryptonianRune.properties["a"].phoneme,
                KryptonianRune.properties["p"].phoneme, KryptonianRune.properties["p"].phoneme,
                KryptonianRune.properties["e"].phoneme, KryptonianRune.properties["n"].phoneme,
                KryptonianRune.properties["e"].phoneme, KryptonianRune.properties["d"].phoneme,
                KryptonianRune.properties["newline"].phoneme,
                // in kandor you look
                KryptonianRune.properties["i"].phoneme, KryptonianRune.properties["n"].phoneme,
                KryptonianRune.properties["space"].phoneme, KryptonianRune.properties["k"].phoneme,
                KryptonianRune.properties["a"].phoneme, KryptonianRune.properties["n"].phoneme,
                KryptonianRune.properties["d"].phoneme, KryptonianRune.properties["o"].phoneme,
                KryptonianRune.properties["r"].phoneme, KryptonianRune.properties["space"].phoneme,
                KryptonianRune.properties["y"].phoneme, KryptonianRune.properties["o"].phoneme,
                KryptonianRune.properties["u"].phoneme, KryptonianRune.properties["space"].phoneme,
                KryptonianRune.properties["l"].phoneme, KryptonianRune.properties["o"].phoneme,
                KryptonianRune.properties["o"].phoneme, KryptonianRune.properties["k"].phoneme,
                KryptonianRune.properties["newline"].phoneme,
                // like you could
                KryptonianRune.properties["l"].phoneme, KryptonianRune.properties["i"].phoneme,
                KryptonianRune.properties["k"].phoneme, KryptonianRune.properties["e"].phoneme,
                KryptonianRune.properties["space"].phoneme, KryptonianRune.properties["y"].phoneme,
                KryptonianRune.properties["o"].phoneme, KryptonianRune.properties["u"].phoneme,
                KryptonianRune.properties["space"].phoneme, KryptonianRune.properties["c"].phoneme,
                KryptonianRune.properties["o"].phoneme, KryptonianRune.properties["u"].phoneme,
                KryptonianRune.properties["l"].phoneme, KryptonianRune.properties["d"].phoneme,
                KryptonianRune.properties["newline"].phoneme,
                // use a friend
                KryptonianRune.properties["u"].phoneme, KryptonianRune.properties["s"].phoneme,
                KryptonianRune.properties["e"].phoneme, KryptonianRune.properties["space"].phoneme,
                KryptonianRune.properties["a"].phoneme, KryptonianRune.properties["space"].phoneme,
                KryptonianRune.properties["f"].phoneme, KryptonianRune.properties["r"].phoneme,
                KryptonianRune.properties["i"].phoneme, KryptonianRune.properties["e"].phoneme,
                KryptonianRune.properties["n"].phoneme, KryptonianRune.properties["d"].phoneme,
                KryptonianRune.properties["newline"].phoneme,
                // right now
                KryptonianRune.properties["r"].phoneme, KryptonianRune.properties["i"].phoneme,
                KryptonianRune.properties["g"].phoneme, KryptonianRune.properties["h"].phoneme,
                KryptonianRune.properties["t"].phoneme, KryptonianRune.properties["space"].phoneme,
                KryptonianRune.properties["n"].phoneme, KryptonianRune.properties["o"].phoneme,
                KryptonianRune.properties["w"].phoneme ],

        RUNES: [
        // I
        KryptonianRune.I, KryptonianRune.SPACE,
        // dont
        KryptonianRune.D, KryptonianRune.O, KryptonianRune.N, KryptonianRune.T, KryptonianRune.NEWLINE,
        // mean
        KryptonianRune.M, KryptonianRune.E, KryptonianRune.A, KryptonianRune.N, KryptonianRune.SPACE,
        // to
        KryptonianRune.T, KryptonianRune.O, KryptonianRune.NEWLINE,
        // bother
        KryptonianRune.B, KryptonianRune.O, KryptonianRune.T, KryptonianRune.H, KryptonianRune.E, KryptonianRune.R,
                KryptonianRune.SPACE,
                // you
                KryptonianRune.Y, KryptonianRune.O, KryptonianRune.U, KryptonianRune.SPACE,
                // but
                KryptonianRune.B, KryptonianRune.U, KryptonianRune.T, KryptonianRune.NEWLINE,
                // with
                KryptonianRune.W, KryptonianRune.I, KryptonianRune.T, KryptonianRune.H, KryptonianRune.SPACE,
                // everything
                KryptonianRune.E, KryptonianRune.V, KryptonianRune.E, KryptonianRune.R, KryptonianRune.Y,
                KryptonianRune.T, KryptonianRune.H, KryptonianRune.I, KryptonianRune.N, KryptonianRune.G,
                KryptonianRune.NEWLINE,
                // thats
                KryptonianRune.T, KryptonianRune.H, KryptonianRune.A, KryptonianRune.T, KryptonianRune.S,
                KryptonianRune.SPACE,
                // happened
                KryptonianRune.H, KryptonianRune.A, KryptonianRune.P, KryptonianRune.P, KryptonianRune.E,
                KryptonianRune.N, KryptonianRune.E, KryptonianRune.D, KryptonianRune.NEWLINE,
                // in
                KryptonianRune.I, KryptonianRune.N, KryptonianRune.SPACE,
                // kandor
                KryptonianRune.K, KryptonianRune.A, KryptonianRune.N, KryptonianRune.D, KryptonianRune.O,
                KryptonianRune.R, KryptonianRune.SPACE,
                // you
                KryptonianRune.Y, KryptonianRune.O, KryptonianRune.U, KryptonianRune.SPACE,
                // look
                KryptonianRune.L, KryptonianRune.O, KryptonianRune.O, KryptonianRune.K, KryptonianRune.NEWLINE,
                // like
                KryptonianRune.L, KryptonianRune.I, KryptonianRune.K, KryptonianRune.E, KryptonianRune.SPACE,
                // you
                KryptonianRune.Y, KryptonianRune.O, KryptonianRune.U, KryptonianRune.SPACE,
                // could
                KryptonianRune.C, KryptonianRune.O, KryptonianRune.U, KryptonianRune.L, KryptonianRune.D,
                KryptonianRune.NEWLINE,
                // use
                KryptonianRune.U, KryptonianRune.S, KryptonianRune.E, KryptonianRune.SPACE,
                // a
                KryptonianRune.A, KryptonianRune.SPACE,
                // friend
                KryptonianRune.F, KryptonianRune.R, KryptonianRune.I, KryptonianRune.E, KryptonianRune.N,
                KryptonianRune.D, KryptonianRune.NEWLINE,
                // right
                KryptonianRune.R, KryptonianRune.I, KryptonianRune.G, KryptonianRune.H, KryptonianRune.T,
                KryptonianRune.SPACE,
                // now
                KryptonianRune.N, KryptonianRune.O, KryptonianRune.W ],

        FONT_LETTERS: [
        // i dont
        KryptonianRune.properties["i"].fontLetter, KryptonianRune.properties["space"].fontLetter,
                KryptonianRune.properties["d"].fontLetter, KryptonianRune.properties["o"].fontLetter,
                KryptonianRune.properties["n"].fontLetter, KryptonianRune.properties["t"].fontLetter,
                KryptonianRune.properties["newline"].fontLetter,
                // mean to
                KryptonianRune.properties["m"].fontLetter, KryptonianRune.properties["e"].fontLetter,
                KryptonianRune.properties["a"].fontLetter, KryptonianRune.properties["n"].fontLetter,
                KryptonianRune.properties["space"].fontLetter, KryptonianRune.properties["t"].fontLetter,
                KryptonianRune.properties["o"].fontLetter, KryptonianRune.properties["newline"].fontLetter,
                // bother you but
                KryptonianRune.properties["b"].fontLetter, KryptonianRune.properties["o"].fontLetter,
                KryptonianRune.properties["t"].fontLetter, KryptonianRune.properties["h"].fontLetter,
                KryptonianRune.properties["e"].fontLetter, KryptonianRune.properties["r"].fontLetter,
                KryptonianRune.properties["space"].fontLetter, KryptonianRune.properties["y"].fontLetter,
                KryptonianRune.properties["o"].fontLetter, KryptonianRune.properties["u"].fontLetter,
                KryptonianRune.properties["space"].fontLetter, KryptonianRune.properties["b"].fontLetter,
                KryptonianRune.properties["u"].fontLetter, KryptonianRune.properties["t"].fontLetter,
                KryptonianRune.properties["newline"].fontLetter,
                // with everything
                KryptonianRune.properties["w"].fontLetter, KryptonianRune.properties["i"].fontLetter,
                KryptonianRune.properties["t"].fontLetter, KryptonianRune.properties["h"].fontLetter,
                KryptonianRune.properties["space"].fontLetter, KryptonianRune.properties["e"].fontLetter,
                KryptonianRune.properties["v"].fontLetter, KryptonianRune.properties["e"].fontLetter,
                KryptonianRune.properties["r"].fontLetter, KryptonianRune.properties["y"].fontLetter,
                KryptonianRune.properties["t"].fontLetter, KryptonianRune.properties["h"].fontLetter,
                KryptonianRune.properties["i"].fontLetter, KryptonianRune.properties["n"].fontLetter,
                KryptonianRune.properties["g"].fontLetter, KryptonianRune.properties["newline"].fontLetter,
                // thats happened
                KryptonianRune.properties["t"].fontLetter, KryptonianRune.properties["h"].fontLetter,
                KryptonianRune.properties["a"].fontLetter, KryptonianRune.properties["t"].fontLetter,
                KryptonianRune.properties["s"].fontLetter, KryptonianRune.properties["space"].fontLetter,
                KryptonianRune.properties["h"].fontLetter, KryptonianRune.properties["a"].fontLetter,
                KryptonianRune.properties["p"].fontLetter, KryptonianRune.properties["p"].fontLetter,
                KryptonianRune.properties["e"].fontLetter, KryptonianRune.properties["n"].fontLetter,
                KryptonianRune.properties["e"].fontLetter, KryptonianRune.properties["d"].fontLetter,
                KryptonianRune.properties["newline"].fontLetter,
                // in kandor you look
                KryptonianRune.properties["i"].fontLetter, KryptonianRune.properties["n"].fontLetter,
                KryptonianRune.properties["space"].fontLetter, KryptonianRune.properties["k"].fontLetter,
                KryptonianRune.properties["a"].fontLetter, KryptonianRune.properties["n"].fontLetter,
                KryptonianRune.properties["d"].fontLetter, KryptonianRune.properties["o"].fontLetter,
                KryptonianRune.properties["r"].fontLetter, KryptonianRune.properties["space"].fontLetter,
                KryptonianRune.properties["y"].fontLetter, KryptonianRune.properties["o"].fontLetter,
                KryptonianRune.properties["u"].fontLetter, KryptonianRune.properties["space"].fontLetter,
                KryptonianRune.properties["l"].fontLetter, KryptonianRune.properties["o"].fontLetter,
                KryptonianRune.properties["o"].fontLetter, KryptonianRune.properties["k"].fontLetter,
                KryptonianRune.properties["newline"].fontLetter,
                // like you could
                KryptonianRune.properties["l"].fontLetter, KryptonianRune.properties["i"].fontLetter,
                KryptonianRune.properties["k"].fontLetter, KryptonianRune.properties["e"].fontLetter,
                KryptonianRune.properties["space"].fontLetter, KryptonianRune.properties["y"].fontLetter,
                KryptonianRune.properties["o"].fontLetter, KryptonianRune.properties["u"].fontLetter,
                KryptonianRune.properties["space"].fontLetter, KryptonianRune.properties["c"].fontLetter,
                KryptonianRune.properties["o"].fontLetter, KryptonianRune.properties["u"].fontLetter,
                KryptonianRune.properties["l"].fontLetter, KryptonianRune.properties["d"].fontLetter,
                KryptonianRune.properties["newline"].fontLetter,
                // use a friend
                KryptonianRune.properties["u"].fontLetter, KryptonianRune.properties["s"].fontLetter,
                KryptonianRune.properties["e"].fontLetter, KryptonianRune.properties["space"].fontLetter,
                KryptonianRune.properties["a"].fontLetter, KryptonianRune.properties["space"].fontLetter,
                KryptonianRune.properties["f"].fontLetter, KryptonianRune.properties["r"].fontLetter,
                KryptonianRune.properties["i"].fontLetter, KryptonianRune.properties["e"].fontLetter,
                KryptonianRune.properties["n"].fontLetter, KryptonianRune.properties["d"].fontLetter,
                KryptonianRune.properties["newline"].fontLetter,
                // right now
                KryptonianRune.properties["r"].fontLetter, KryptonianRune.properties["i"].fontLetter,
                KryptonianRune.properties["g"].fontLetter, KryptonianRune.properties["h"].fontLetter,
                KryptonianRune.properties["t"].fontLetter, KryptonianRune.properties["space"].fontLetter,
                KryptonianRune.properties["n"].fontLetter, KryptonianRune.properties["o"].fontLetter,
                KryptonianRune.properties["w"].fontLetter ],
    }

    if (Object.freeze)
    {
        Object.freeze(KryptonianExampleDC1);
    }

    return KryptonianExampleDC1;
});
