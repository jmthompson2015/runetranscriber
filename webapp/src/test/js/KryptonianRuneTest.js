define([ "KryptonianRune" ], function(KryptonianRune)
{
    "use strict";
    QUnit.module("KryptonianRune");

    QUnit.test("findRuneByPhoneme", function(assert)
    {
        assert.equal(KryptonianRune.findRuneByPhoneme("t"), KryptonianRune.T);
        assert.equal(KryptonianRune.findRuneByPhoneme("p"), KryptonianRune.P);
        assert.equal(KryptonianRune.findRuneByPhoneme("k"), KryptonianRune.K);

        assert.equal(KryptonianRune.findRuneByPhoneme("r"), KryptonianRune.R);
        assert.equal(KryptonianRune.findRuneByPhoneme("w"), KryptonianRune.W);
        assert.equal(KryptonianRune.findRuneByPhoneme("y"), KryptonianRune.Y);

        assert.equal(KryptonianRune.findRuneByPhoneme("h"), KryptonianRune.H);
        assert.equal(KryptonianRune.findRuneByPhoneme("w"), KryptonianRune.W);
        assert.equal(KryptonianRune.findRuneByPhoneme("i"), KryptonianRune.I);
        assert.equal(KryptonianRune.findRuneByPhoneme("u"), KryptonianRune.U);
    });

    QUnit.test("isPunctuation", function(assert)
    {
        assert.ok(KryptonianRune.isPunctuation(KryptonianRune.SPACE));
        assert.ok(KryptonianRune.isPunctuation(KryptonianRune.NEWLINE));

        assert.ok(!KryptonianRune.isPunctuation(KryptonianRune.TINCO));
    });

    QUnit.test("values", function(assert)
    {
        var keysLength = Object.keys(KryptonianRune).length - 1 // properties
                - 1 // findRuneByPhoneme
                - 1 // isPunctuation
                - 1 // values
        ;

        var properties = Object.getOwnPropertyNames(KryptonianRune);

        for (var i = 0; i < properties.length; i++)
        {
            var property = properties[i];

            if ([ "properties", "values", "findRuneByPhoneme", "isPunctuation" ].includes(property))
            {
                continue;
            }

            var key = KryptonianRune[property];

            if (!KryptonianRune.values().includes(key))
            {
                LOGGER.error("missing value for property " + property + " key " + key);
            }
        }

        assert.equal(KryptonianRune.values().length, keysLength);
    });
});
