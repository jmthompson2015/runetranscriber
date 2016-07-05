define([ "AurebeshRune" ], function(AurebeshRune)
{
    "use strict";
    QUnit.module("AurebeshRune");

    QUnit.test("findByFontLetter()", function(assert)
    {
        assert.ok(AurebeshRune.findByFontLetter("a"), AurebeshRune.AUREK);
    });

    QUnit.test("findByPhoneme", function(assert)
    {
        assert.equal(AurebeshRune.findByPhoneme("t"), AurebeshRune.TRILL);
        assert.equal(AurebeshRune.findByPhoneme("p"), AurebeshRune.PETH);
        assert.equal(AurebeshRune.findByPhoneme("ch"), AurebeshRune.CHEREK);
        assert.equal(AurebeshRune.findByPhoneme("k"), AurebeshRune.KRILL);

        assert.equal(AurebeshRune.findByPhoneme("r"), AurebeshRune.RESH);
        assert.equal(AurebeshRune.findByPhoneme("w"), AurebeshRune.WESK);
        assert.equal(AurebeshRune.findByPhoneme("y"), AurebeshRune.YIRT);

        assert.equal(AurebeshRune.findByPhoneme("h"), AurebeshRune.HERF);
        assert.equal(AurebeshRune.findByPhoneme("w"), AurebeshRune.WESK);
        assert.equal(AurebeshRune.findByPhoneme("i"), AurebeshRune.ISK);
        assert.equal(AurebeshRune.findByPhoneme("u"), AurebeshRune.USK);
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
                - 1 // findByFontLetter
                - 1 // findByPhoneme
                - 1 // isPunctuation
                - 1 // values
        ;

        var properties = Object.getOwnPropertyNames(AurebeshRune);

        for (var i = 0; i < properties.length; i++)
        {
            var property = properties[i];

            if ([ "properties", "values", "findByFontLetter", "findByPhoneme", "isPunctuation" ].includes(property))
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
