define([ "KryptonianRune" ], function(KryptonianRune)
{
    "use strict";
    QUnit.module("KryptonianRune");

    QUnit.test("findByFontLetter()", function(assert)
    {
        assert.ok(KryptonianRune.findByFontLetter("a"), KryptonianRune.A);
    });

    QUnit.test("findByPhoneme", function(assert)
    {
        assert.equal(KryptonianRune.findByPhoneme("t"), KryptonianRune.T);
        assert.equal(KryptonianRune.findByPhoneme("p"), KryptonianRune.P);
        assert.equal(KryptonianRune.findByPhoneme("k"), KryptonianRune.K);

        assert.equal(KryptonianRune.findByPhoneme("r"), KryptonianRune.R);
        assert.equal(KryptonianRune.findByPhoneme("w"), KryptonianRune.W);
        assert.equal(KryptonianRune.findByPhoneme("y"), KryptonianRune.Y);

        assert.equal(KryptonianRune.findByPhoneme("h"), KryptonianRune.H);
        assert.equal(KryptonianRune.findByPhoneme("w"), KryptonianRune.W);
        assert.equal(KryptonianRune.findByPhoneme("i"), KryptonianRune.I);
        assert.equal(KryptonianRune.findByPhoneme("u"), KryptonianRune.U);
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
                - 1 // findByFontLetter
                - 1 // findByPhoneme
                - 1 // isPunctuation
                - 1 // values
        ;

        var properties = Object.getOwnPropertyNames(KryptonianRune);

        for (var i = 0; i < properties.length; i++)
        {
            var property = properties[i];

            if ([ "properties", "values", "findByFontLetter", "findByPhoneme", "isPunctuation" ].includes(property))
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
