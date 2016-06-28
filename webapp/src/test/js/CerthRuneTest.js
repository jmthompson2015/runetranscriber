define([ "CerthRune" ], function(CerthRune)
{
    "use strict";
    QUnit.module("CerthRune");

    QUnit.test("isPunctuation", function(assert)
    {
        assert.ok(CerthRune.isPunctuation(CerthRune.SPACE));
        assert.ok(CerthRune.isPunctuation(CerthRune.COMMA));
        assert.ok(CerthRune.isPunctuation(CerthRune.PERIOD));
        assert.ok(CerthRune.isPunctuation(CerthRune.NEWLINE));

        assert.ok(!CerthRune.isPunctuation(CerthRune.TINCO));
    });

    QUnit.test("values", function(assert)
    {
        var keysLength = Object.keys(CerthRune).length - 1 // properties
        - 1 // values
        - 1 // isPunctuation
        ;

        var properties = Object.getOwnPropertyNames(CerthRune);

        for (var i = 0; i < properties.length; i++)
        {
            var property = properties[i];

            if ([ "properties", "values", "findRuneByPhoneme", "isPunctuation" ].includes(property))
            {
                continue;
            }

            var key = CerthRune[property];

            if (!CerthRune.values.includes(key))
            {
                LOGGER.error("missing value for property " + property + " key " + key);
            }
        }

        assert.equal(CerthRune.values.length, keysLength);
    });
});
