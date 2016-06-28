define([ "AngloSaxonRune" ], function(AngloSaxonRune)
{
    "use strict";
    QUnit.module("AngloSaxonRune");

    QUnit.test("isPunctuation", function(assert)
    {
        assert.ok(AngloSaxonRune.isPunctuation(AngloSaxonRune.SPACE));
        assert.ok(AngloSaxonRune.isPunctuation(AngloSaxonRune.COMMA));
        assert.ok(AngloSaxonRune.isPunctuation(AngloSaxonRune.PERIOD));
        assert.ok(AngloSaxonRune.isPunctuation(AngloSaxonRune.NEWLINE));

        assert.ok(!AngloSaxonRune.isPunctuation(AngloSaxonRune.TINCO));
    });

    QUnit.test("values", function(assert)
    {
        var keysLength = Object.keys(AngloSaxonRune).length - 1 // properties
        - 1 // values
        - 1 // isPunctuation
        ;

        var properties = Object.getOwnPropertyNames(AngloSaxonRune);

        for (var i = 0; i < properties.length; i++)
        {
            var property = properties[i];

            if (property === "properties" || property === "values" || property === "findRuneByPhoneme")
            {
                continue;
            }

            var key = AngloSaxonRune[property];

            if (!AngloSaxonRune.values.contains(key))
            {
                LOGGER.error("missing value for property " + property + " key " + key);
            }
        }

        assert.equal(AngloSaxonRune.values.length, keysLength);
    });
});
