define(function()
{
    "use strict";
    QUnit.module("ArrayAugments");

    QUnit.test("split() 1", function(assert)
    {
        // Setup.
        var array = [ "a", "b", "c", "d" ];

        // Run.
        var result = array.split();

        // Verify.
        assert.ok(result);
        assert.equal(result.length, 1);
        assert.equal(result[0][0], "a");
        assert.equal(result[0][1], "b");
        assert.equal(result[0][2], "c");
        assert.equal(result[0][3], "d");
    });

    QUnit.test("split() 2", function(assert)
    {
        // Setup.
        var array = [ "a", "b", "\n", "c", "d" ];

        // Run.
        var result = array.split();

        // Verify.
        assert.ok(result);
        assert.equal(result.length, 2);
        assert.equal(result[0][0], "a");
        assert.equal(result[0][1], "b");
        assert.equal(result[1][0], "c");
        assert.equal(result[1][1], "d");
    });
});
