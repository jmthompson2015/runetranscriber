define([ "TengwaRune" ], function(TengwaRune)
{
    "use strict";
    QUnit.module("TengwaRune");

    QUnit.test("findRuneByPhoneme", function(assert)
    {
        assert.equal(TengwaRune.findRuneByPhoneme("t"), TengwaRune.TINCO);
        assert.equal(TengwaRune.findRuneByPhoneme("p"), TengwaRune.PARMA);
        assert.equal(TengwaRune.findRuneByPhoneme("ch"), TengwaRune.CALMA);
        assert.equal(TengwaRune.findRuneByPhoneme("k"), TengwaRune.QUESSE);

        assert.equal(TengwaRune.findRuneByPhoneme("r"), TengwaRune.ORE);
        assert.equal(TengwaRune.findRuneByPhoneme("w"), TengwaRune.VALA);
        assert.equal(TengwaRune.findRuneByPhoneme("y"), TengwaRune.ANNA);

        assert.equal(TengwaRune.findRuneByPhoneme("h"), TengwaRune.HYARMEN);
        assert.equal(TengwaRune.findRuneByPhoneme("wh"), TengwaRune.HWESTA_SINDARINWA);
        assert.equal(TengwaRune.findRuneByPhoneme("i"), TengwaRune.YANTA);
        assert.equal(TengwaRune.findRuneByPhoneme("u"), TengwaRune.URE);
    });

    QUnit.test("values", function(assert)
    {
        var keysLength = Object.keys(TengwaRune).length - 1 // properties
                - 1 // values
                - 1 // tehtar
                - 1 // findRuneByPhoneme
        ;

        var properties = Object.getOwnPropertyNames(TengwaRune);

        for (var i = 0; i < properties.length; i++)
        {
            var property = properties[i];

            if (property === "properties" || property === "values" || property === "tehtar" ||
                    property === "findRuneByPhoneme")
            {
                continue;
            }

            var key = TengwaRune[property];

            if (!TengwaRune.values.contains(key))
            {
                LOGGER.error("missing value for property " + property + " key " + key);
            }
        }

        assert.equal(TengwaRune.values.length, keysLength);
    });
});
