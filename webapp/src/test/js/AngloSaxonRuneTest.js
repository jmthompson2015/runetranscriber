define([ "AngloSaxonRune" ], function(AngloSaxonRune)
{
    "use strict";
    QUnit.module("AngloSaxonRune");

    QUnit.test("findByFontLetter()", function(assert)
    {
        assert.ok(AngloSaxonRune.findByFontLetter("\u16a3"), AngloSaxonRune.YR);
    });

    QUnit.test("findByPhoneme()", function(assert)
    {
        assert.ok(AngloSaxonRune.findByPhoneme("y"), AngloSaxonRune.YR);
    });

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
                - 1 // findByFontLetter
                - 1 // findByPhoneme
                - 1 // isPunctuation
                - 1 // values
        ;

        var properties = Object.getOwnPropertyNames(AngloSaxonRune);

        for (var i = 0; i < properties.length; i++)
        {
            var property = properties[i];

            if ([ "properties", "values", "findByFontLetter", "findByPhoneme", "isPunctuation" ].includes(property))
            {
                continue;
            }

            var key = AngloSaxonRune[property];

            if (!AngloSaxonRune.values().includes(key))
            {
                LOGGER.error("missing value for property " + property + " key " + key);
            }
        }

        assert.equal(AngloSaxonRune.values().length, keysLength);
    });
});
