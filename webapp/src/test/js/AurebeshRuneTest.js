define([ "AurebeshRune" ], function(AurebeshRune)
{
    "use strict";
    QUnit.module("AurebeshRune");

    QUnit.test("findRuneByPhoneme", function(assert)
    {
        assert.equal(AurebeshRune.findRuneByPhoneme("t"), AurebeshRune.TRILL);
        assert.equal(AurebeshRune.findRuneByPhoneme("p"), AurebeshRune.PETH);
        assert.equal(AurebeshRune.findRuneByPhoneme("ch"), AurebeshRune.CHEREK);
        assert.equal(AurebeshRune.findRuneByPhoneme("k"), AurebeshRune.KRILL);

        assert.equal(AurebeshRune.findRuneByPhoneme("r"), AurebeshRune.RESH);
        assert.equal(AurebeshRune.findRuneByPhoneme("w"), AurebeshRune.WESK);
        assert.equal(AurebeshRune.findRuneByPhoneme("y"), AurebeshRune.YIRT);

        assert.equal(AurebeshRune.findRuneByPhoneme("h"), AurebeshRune.HERF);
        assert.equal(AurebeshRune.findRuneByPhoneme("w"), AurebeshRune.WESK);
        assert.equal(AurebeshRune.findRuneByPhoneme("i"), AurebeshRune.ISK);
        assert.equal(AurebeshRune.findRuneByPhoneme("u"), AurebeshRune.USK);
    });

    QUnit.test("isPunctuation", function(assert)
    {
        assert.ok(AurebeshRune.isPunctuation(AurebeshRune.SPACE));
        assert.ok(AurebeshRune.isPunctuation(AurebeshRune.COMMA));
        assert.ok(AurebeshRune.isPunctuation(AurebeshRune.PERIOD));
        assert.ok(AurebeshRune.isPunctuation(AurebeshRune.NEWLINE));

        assert.ok(!AurebeshRune.isPunctuation(AurebeshRune.TINCO));
    });

    QUnit.test("values", function(assert)
    {
        var keysLength = Object.keys(AurebeshRune).length - 1 // properties
                - 1 // values
                - 1 // findRuneByPhoneme
                - 1 // isPunctuation
        ;

        var properties = Object.getOwnPropertyNames(AurebeshRune);

        for (var i = 0; i < properties.length; i++)
        {
            var property = properties[i];

            if ([ "properties", "values", "findRuneByPhoneme", "isPunctuation" ].includes(property))
            {
                continue;
            }

            var key = AurebeshRune[property];

            if (!AurebeshRune.values().includes(key))
            {
                LOGGER.error("missing value for property " + property + " key " + key);
            }
        }

        assert.equal(AurebeshRune.values().length, keysLength);
    });
});
