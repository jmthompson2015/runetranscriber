define(function()
{
    "use strict";
    QUnit.module("ArrayAugments");

    QUnit.test("contains()", function(assert)
    {
        // Setup.
        var array = [ "a", "b", [ "c", "d" ] ];

        // Run / Verify.
        assert.ok(array.contains("a"));
        assert.ok(array.contains("b"));
        assert.ok(!array.contains("c"));
        assert.ok(!array.contains("d"));

        assert.ok(!array.contains([ "a", "b" ]));
        assert.ok(array.contains([ "c", "d" ]));
        assert.ok(!array.contains([ "e", "f" ]));
    });

    QUnit.test("equals()", function(assert)
    {
        // Setup.
        var a = [ 1, 2, 3 ];
        var b = [ 3, 2, 1 ];
        var c = new Array(1, 2, 3);

        // Run / Verify.
        assert.ok(a.equals(a));
        assert.ok(!a.equals(b));
        assert.ok(a.equals(c));

        assert.ok(!b.equals(a));
        assert.ok(b.equals(b));
        assert.ok(!b.equals(c));

        assert.ok(c.equals(a));
        assert.ok(!c.equals(b));
        assert.ok(c.equals(c));
    });

    QUnit.test("equals() subarray", function(assert)
    {
        // Setup.
        var a = [ 1, 2, [ 3, 4 ] ];
        var b = [ 3, 2, [ 1, 0 ] ];
        var c = new Array(1, 2, [ 3, 4 ]);

        // Run / Verify.
        assert.ok(a.equals(a));
        assert.ok(!a.equals(b));
        assert.ok(a.equals(c));

        assert.ok(!b.equals(a));
        assert.ok(b.equals(b));
        assert.ok(!b.equals(c));

        assert.ok(c.equals(a));
        assert.ok(!c.equals(b));
        assert.ok(c.equals(c));
    });

    QUnit.test("split() 1", function(assert)
    {
        // Setup.
        var array = [ "a", "b",  "c", "d" ];

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
