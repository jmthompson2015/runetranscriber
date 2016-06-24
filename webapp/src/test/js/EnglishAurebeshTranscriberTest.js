define([ "EnglishAurebeshTranscriber", "example/AurebeshExampleSW1TPM1", "example/AurebeshExampleSW4ANH1" ], function(
        EnglishAurebeshTranscriber, AurebeshExampleSW1TPM1, AurebeshExampleSW4ANH1)
{
    "use strict";
    QUnit.module("EnglishAurebeshTranscriber");

    QUnit.test("getMaxForwardKeyLength()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.getMaxForwardKeyLength();

        // Verify.
        assert.equal(result, 1);
    });

    QUnit.test("getMaxReverseKeyLength()", function(assert)
    {
        // Setup.
        var transcriber = createTranscriber();

        // Run.
        var result = transcriber.getMaxReverseKeyLength();

        // Verify.
        assert.equal(result, 1);
    });

    /*******************************************************************************************************************
     * transcribeForward()
     */

    QUnit.test("Example SW1TPM1 transcribeForward()", function(assert)
    {
        var expected = [];
        testTranscribeForward(assert, AurebeshExampleSW1TPM1.LANGUAGE_STRING, AurebeshExampleSW1TPM1.RUNES);
    });

    QUnit.test("Example SW4ANH1 transcribeForward()", function(assert)
    {
        var expected = [];
        testTranscribeForward(assert, AurebeshExampleSW4ANH1.LANGUAGE_STRING, AurebeshExampleSW4ANH1.RUNES);
    });

    /*******************************************************************************************************************
     * transcribeReverse()
     */

    QUnit.test("Example SW1TPM1 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, AurebeshExampleSW1TPM1.RUNES, AurebeshExampleSW1TPM1.LANGUAGE_STRING
                .toLowerCase(), true);
    });

    QUnit.test("Example SW4ANH1 transcribeReverse()", function(assert)
    {
        testTranscribeReverse(assert, AurebeshExampleSW4ANH1.RUNES, AurebeshExampleSW4ANH1.LANGUAGE_STRING
                .toLowerCase(), true);
    });

    /*******************************************************************************************************************
     * Utility functions.
     */

    function createTranscriber()
    {
        return new EnglishAurebeshTranscriber();
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
