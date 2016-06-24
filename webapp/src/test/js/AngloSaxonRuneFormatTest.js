define([ "AngloSaxonRune", "AngloSaxonRuneFormat" ], function(AngloSaxonRune, AngloSaxonRuneFormat)
{
    "use strict";
    QUnit.module("AngloSaxonRuneFormat");

    QUnit.test("format()", function(assert)
    {
        // Setup.
        var runes = [ AngloSaxonRune.FEOH, AngloSaxonRune.UR, AngloSaxonRune.THORN ];

        // Run.
        var result = AngloSaxonRuneFormat.format(runes);

        // Verify.
        assert.equal(result, "FEOH-UR-THORN");
    });

    QUnit.test("parse()", function(assert)
    {
        // Setup.
        var string = "FEOH-UR-THORN";

        // Run.
        var result = AngloSaxonRuneFormat.parse(string);

        // Verify.
        var expected = [ AngloSaxonRune.FEOH, AngloSaxonRune.UR, AngloSaxonRune.THORN ];
        assert.equal(result.length, 3);

        for (var i = 0; i < result.length; i++)
        {
            assert.equal(result[i], expected[i], "" + i);
        }
    });

    QUnit.test("getFontLetters()", function(assert)
    {
        // Setup.
        var runes = [ AngloSaxonRune.FEOH, AngloSaxonRune.UR, AngloSaxonRune.THORN ];

        // Run.
        var result = AngloSaxonRuneFormat.getFontLetters(runes);

        // Verify.
        assert.equal(result, "\u16a0\u16a2\u16a6");
    });
});
