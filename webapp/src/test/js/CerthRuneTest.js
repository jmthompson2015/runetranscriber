define([ "CerthRune" ], function(CerthRune)
{
    "use strict";
    QUnit.module("CerthRune");

    QUnit.test("values", function(assert)
    {
        var keysLength = Object.keys(CerthRune).length - 1 // properties
        - 1 // values
        ;

        var properties = Object.getOwnPropertyNames(CerthRune);

        for (var i = 0; i < properties.length; i++)
        {
            var property = properties[i];

            if (property === "properties" || property === "values" || property === "findRuneByPhoneme")
            {
                continue;
            }

            var key = CerthRune[property];

            if (!CerthRune.values.contains(key))
            {
                LOGGER.error("missing value for property " + property + " key " + key);
            }
        }

        assert.equal(CerthRune.values.length, keysLength);
    });
});
