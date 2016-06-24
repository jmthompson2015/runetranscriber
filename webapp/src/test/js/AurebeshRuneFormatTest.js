define([ "AurebeshRune", "AurebeshRuneFormat" ], function(AurebeshRune, AurebeshRuneFormat)
{
    "use strict";
    QUnit.module("AurebeshRuneFormat");

    QUnit.test("format()", function(assert)
    {
        // Setup.
        var runes = [ AurebeshRune.TRILL, AurebeshRune.DORN, AurebeshRune.THESH ];

        // Run.
        var result = AurebeshRuneFormat.format(runes);

        // Verify.
        assert.equal(result, "TRILL-DORN-THESH");
    });

    QUnit.test("parse()", function(assert)
    {
        // Setup.
        var string = "TRILL-DORN-THESH";

        // Run.
        var result = AurebeshRuneFormat.parse(string);

        // Verify.
        var expected = [ AurebeshRune.TRILL, AurebeshRune.DORN, AurebeshRune.THESH ];
        assert.equal(result.length, 3);

        for (var i = 0; i < result.length; i++)
        {
            assert.equal(result[i], expected[i], "" + i);
        }
    });

    QUnit.test("getFontLetters()", function(assert)
    {
        // Setup.
        var runes = [ AurebeshRune.TRILL, AurebeshRune.DORN, AurebeshRune.THESH ];

        // Run.
        var result = AurebeshRuneFormat.getFontLetters(runes);

        // Verify.
        assert.equal(result, "td&#240;");
    });
});
