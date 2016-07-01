define([ "EnglishAurebeshTranscriber", "example/AurebeshExampleSW1TPM1", "example/AurebeshExampleSW4ANH1" ], function(
        EnglishAurebeshTranscriber, AurebeshExampleSW1TPM1, AurebeshExampleSW4ANH1)
{
    "use strict";
    QUnit.module("EnglishAurebeshTranscriber");

    // ////////////////////////////////////////////////////////////////////////
    // transcribeForward()

    QUnit.test("transcribeForward() AurebeshExampleSW1TPM1", function(assert)
    {
        var expected = [];
        testTranscribeForward(assert, AurebeshExampleSW1TPM1.LANGUAGE_STRING, AurebeshExampleSW1TPM1.RUNES);
    });

    QUnit.test("transcribeForward() AurebeshExampleSW4ANH1", function(assert)
    {
        var expected = [];
        testTranscribeForward(assert, AurebeshExampleSW4ANH1.LANGUAGE_STRING, AurebeshExampleSW4ANH1.RUNES);
    });

    // ////////////////////////////////////////////////////////////////////////
    // transcribeReverse()

    QUnit.test("transcribeReverse() AurebeshExampleSW1TPM1", function(assert)
    {
        testTranscribeReverse(assert, AurebeshExampleSW1TPM1.RUNES, AurebeshExampleSW1TPM1.LANGUAGE_STRING
                .toLowerCase(), true);
    });

    QUnit.test("transcribeReverse() AurebeshExampleSW4ANH1", function(assert)
    {
        testTranscribeReverse(assert, AurebeshExampleSW4ANH1.RUNES, AurebeshExampleSW4ANH1.LANGUAGE_STRING
                .toLowerCase(), true);
    });

    // ////////////////////////////////////////////////////////////////////////
    // Utility functions.

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
