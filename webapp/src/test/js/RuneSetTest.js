define([ "AngloSaxonRune", "AngloSaxonRuneFormat", "AurebeshRune", "AurebeshRuneFormat", "CerthRune",
        "CerthRuneFormat", "RuneSet", "TengwaRune", "TengwaRuneFormat", "EnglishAngloSaxonTranscriber",
        "EnglishAurebeshTranscriber", "EnglishCirthEreborTranscriber", "EnglishTengwarTranscriber" ], function(
        AngloSaxonRune, AngloSaxonRuneFormat, AurebeshRune, AurebeshRuneFormat, CerthRune, CerthRuneFormat, RuneSet,
        TengwaRune, TengwaRuneFormat, EnglishAngloSaxonTranscriber, EnglishAurebeshTranscriber,
        EnglishCirthEreborTranscriber, EnglishTengwarTranscriber)
{
    "use strict";
    QUnit.module("RuneSet");

    QUnit.test("RuneSet properties Anglo-Saxon", function(assert)
    {
        var runeSet = RuneSet.ANGLO_SAXON;
        var properties = RuneSet.properties[runeSet];
        assert.equal(properties.name, "Anglo-Saxon");
        assert.equal(properties.runes, AngloSaxonRune);
        assert.equal(properties.formatter, AngloSaxonRuneFormat);
        assert.equal(properties.transcriber, EnglishAngloSaxonTranscriber);
        assert.equal(properties.value, runeSet);
    });

    QUnit.test("keys and values", function(assert)
    {
        // Setup.

        // Run.
        var result = RuneSet.values();
        var ownPropertyNames = Object.getOwnPropertyNames(RuneSet);

        // Verify.
        ownPropertyNames.forEach(function(key)
        {
            var key2 = RuneSet[key];

            if (key !== "properties" && typeof key2 === "string")
            {
                assert.ok(RuneSet.properties[key2], "Missing value for key = " + key);
            }
        });

        result.forEach(function(value)
        {
            var p = ownPropertyNames.filter(function(key)
            {
                return RuneSet[key] === value;
            });

            assert.equal(p.length, 1, "Missing key for value = " + value);
        });
    });

    QUnit.test("values()", function(assert)
    {
        // Run.
        var result = RuneSet.values();

        // Verify.
        assert.ok(result);
        assert.equal(result.length, 5);
        assert.equal(result[0], "angloSaxon");
        assert.equal(result[1], "aurebesh");
        assert.equal(result[2], "cirth");
        assert.equal(result[3], "kryptonian");
        assert.equal(result[4], "tengwar");

        var properties = Object.getOwnPropertyNames(RuneSet);
        var count = properties.length - 1 - // properties
        1; // values
        assert.equal(result.length, count);
    });
});
