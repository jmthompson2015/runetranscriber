define([ "TengwaRune" ], function(TengwaRune)
{
    "use strict";
    QUnit.module("TengwaRune");

    QUnit.test("findByPhoneme", function(assert)
    {
        assert.equal(TengwaRune.findByPhoneme("t"), TengwaRune.TINCO);
        assert.equal(TengwaRune.findByPhoneme("p"), TengwaRune.PARMA);
        assert.equal(TengwaRune.findByPhoneme("ch"), TengwaRune.CALMA);
        assert.equal(TengwaRune.findByPhoneme("k"), TengwaRune.QUESSE);

        assert.equal(TengwaRune.findByPhoneme("r"), TengwaRune.ORE);
        assert.equal(TengwaRune.findByPhoneme("w"), TengwaRune.VALA);
        assert.equal(TengwaRune.findByPhoneme("y"), TengwaRune.ANNA);

        assert.equal(TengwaRune.findByPhoneme("h"), TengwaRune.HYARMEN);
        assert.equal(TengwaRune.findByPhoneme("wh"), TengwaRune.HWESTA_SINDARINWA);
        assert.equal(TengwaRune.findByPhoneme("i"), TengwaRune.YANTA);
        assert.equal(TengwaRune.findByPhoneme("u"), TengwaRune.URE);
    });

    QUnit.test("isPunctuation", function(assert)
    {
        assert.ok(TengwaRune.isPunctuation(TengwaRune.SPACE));
        assert.ok(TengwaRune.isPunctuation(TengwaRune.COMMA));
        assert.ok(TengwaRune.isPunctuation(TengwaRune.PERIOD));
        assert.ok(TengwaRune.isPunctuation(TengwaRune.NEWLINE));

        assert.ok(!TengwaRune.isPunctuation(TengwaRune.TINCO));
    });

    QUnit.test("values", function(assert)
    {
        var keysLength = Object.keys(TengwaRune).length - 1 // properties
                - 1 // tehtar
                - 1 // findByFontLetter
                - 1 // findByPhoneme
                - 1 // isPunctuation
                - 1 // values
        ;

        var properties = Object.getOwnPropertyNames(TengwaRune);

        for (var i = 0; i < properties.length; i++)
        {
            var property = properties[i];

            if ([ "properties", "values", "tehtar", "findByFontLetter", "findByPhoneme", "isPunctuation" ]
                    .includes(property))
            {
                continue;
            }

            var key = TengwaRune[property];

            if (!TengwaRune.values().includes(key))
            {
                LOGGER.error("missing value for property " + property + " key " + key);
            }
        }

        assert.equal(TengwaRune.values().length, keysLength);
    });
});
