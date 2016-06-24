define([ "CerthRune", "CerthRuneFormat" ], function(CerthRune, CerthRuneFormat)
{
    "use strict";
    QUnit.module("CerthRuneFormat");

    QUnit.test("format()", function(assert)
    {
        // Setup.
        var runes = [ CerthRune.C1, CerthRune.C2, CerthRune.C3, ];

        // Run.
        var result = CerthRuneFormat.format(runes);

        // Verify.
        assert.equal(result, "C1-C2-C3");
    });

    QUnit.test("parse()", function(assert)
    {
        // Setup.
        var string = "C1-C2-C3";

        // Run.
        var result = CerthRuneFormat.parse(string);

        // Verify.
        var expected = [ CerthRune.C1, CerthRune.C2, CerthRune.C3, ];
        assert.equal(result.length, 3);

        for (var i = 0; i < result.length; i++)
        {
            assert.equal(result[i], expected[i], "" + i);
        }
    });

    QUnit.test("getFontLetters()", function(assert)
    {
        // Setup.
        var runes = [ CerthRune.C1, CerthRune.C2, CerthRune.C3, ];

        // Run.
        var result = CerthRuneFormat.getFontLetters(runes);

        // Verify.
        assert.equal(result, "pbf");
    });
});
