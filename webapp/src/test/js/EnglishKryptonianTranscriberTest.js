define([ "EnglishKryptonianTranscriber", "example/KryptonianExampleDC1" ], function(EnglishKryptonianTranscriber,
        KryptonianExampleDC1)
{
    "use strict";
    QUnit.module("EnglishKryptonianTranscriber");

    // ////////////////////////////////////////////////////////////////////////
    // transcribeForward()

    QUnit.test("transcribeForward() KryptonianExampleDC1", function(assert)
    {
        var expected = [];
        testTranscribeForward(assert, KryptonianExampleDC1.LANGUAGE_STRING, KryptonianExampleDC1.RUNES);
    });

    // ////////////////////////////////////////////////////////////////////////
    // transcribeReverse()

    QUnit.test("transcribeReverse() KryptonianExampleDC1", function(assert)
    {
        testTranscribeReverse(assert, KryptonianExampleDC1.RUNES, KryptonianExampleDC1.LANGUAGE_STRING.toLowerCase(),
                true);
    });

    // ////////////////////////////////////////////////////////////////////////
    // Utility functions.

    function createTranscriber()
    {
        return new EnglishKryptonianTranscriber();
    }

    function testTranscribeForward(assert, string, expected, useComparison)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.transcribeForward(string);

        // Verify.
        verify(assert, result, expected, useComparison);
    }

    function testTranscribeReverse(assert, runes, expected, useComparison)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.transcribeReverse(runes);

        // Verify.
        verify(assert, result, expected, useComparison);
    }

    function verify(assert, result, expected, useComparison)
    {
        assert.ok(result);
        assert.equal(result.length, expected.length);

        if (useComparison)
        {
            assert.equal(result, expected);
        }

        for (var i = 0; i < expected.length; i++)
        {
            if (Array.isArray(expected[i]))
            {
                verify(assert, result[i], expected[i], useComparison);
            }
            else
            {
                assert.equal(result[i], expected[i]);
            }
        }
    }
});
