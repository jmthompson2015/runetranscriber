define([ "TengwaRune", "TengwaRuneFormat" ], function(TengwaRune, TengwaRuneFormat)
{
    "use strict";
    QUnit.module("TengwaRuneFormat");

    QUnit.test("format()", function(assert)
    {
        // Setup.
        var runes = [ TengwaRune.TINCO, TengwaRune.ANDO, TengwaRune.THULE, ];

        // Run.
        var result = TengwaRuneFormat.format(runes);

        // Verify.
        assert.equal(result, "TINCO-ANDO-THULE");
    });

    QUnit.test("parse()", function(assert)
    {
        // Setup.
        var string = "TINCO-ANDO-THULE";

        // Run.
        var result = TengwaRuneFormat.parse(string);

        // Verify.
        var expected = [ TengwaRune.TINCO, TengwaRune.ANDO, TengwaRune.THULE, ];
        assert.equal(result.length, 3);

        for (var i = 0; i < result.length; i++)
        {
            assert.equal(result[i], expected[i], "" + i);
        }
    });

    QUnit.test("getFontLetters()", function(assert)
    {
        // Setup.
        var runes = [ TengwaRune.TINCO, TengwaRune.ANDO, TengwaRune.THULE, ];

        // Run.
        var result = TengwaRuneFormat.getFontLetters(runes);

        // Verify.
        assert.equal(result, "123");
    });

    QUnit.test("JMT getFontLetters()", function(assert)
    {
        // Setup.
        var runes = [ "anga", [ "dot", "formen", "underBar" ], "romen", [ "dot", "anna" ] ];

        // Run.
        var result = TengwaRuneFormat.getFontLetters(runes);

        // Verify.
        assert.equal(result, "seT&#237;7hT");
    });
});
