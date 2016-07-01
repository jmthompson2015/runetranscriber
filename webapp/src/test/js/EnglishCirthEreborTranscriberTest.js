define([ "EnglishCirthEreborTranscriber", "example/CirthEreborExample1", "example/CirthEreborExample2" ], function(
        EnglishCirthEreborTranscriber, CirthEreborExample1, CirthEreborExample2)
{
    "use strict";
    QUnit.module("EnglishCirthEreborTranscriber");

    // ////////////////////////////////////////////////////////////////////////
    // transcribeForward()

    QUnit.test("transcribeForward() CirthEreborExample1", function(assert)
    {
        // Setup.
        var transcriber = new EnglishCirthEreborTranscriber();
        var fromSequence = CirthEreborExample1.LANGUAGE_STRING;

        // Run.
        var toSequence = transcriber.transcribeForward(fromSequence);

        // Verify.
        assert.ok(toSequence);
        var expected = CirthEreborExample1.RUNES;
        // assert.equal(toSequence, expected);
        assert.equal(toSequence.length, expected.length);

        for (var i = 0; i < toSequence.length; i++)
        {
            assert.equal(toSequence[i], expected[i], "" + i);
        }
    });

    QUnit.test("transcribeForward() CirthEreborExample2", function(assert)
    {
        // Setup.
        var transcriber = new EnglishCirthEreborTranscriber();
        var fromSequence = CirthEreborExample2.LANGUAGE_STRING;

        // Run.
        var toSequence = transcriber.transcribeForward(fromSequence);

        // Verify.
        assert.ok(toSequence);
        var expected = CirthEreborExample2.RUNES;
        // assert.equal(toSequence, expected);
        assert.equal(toSequence.length, expected.length);

        for (var i = 0; i < toSequence.length; i++)
        {
            assert.equal(toSequence[i], expected[i], "" + i);
        }
    });

    // ////////////////////////////////////////////////////////////////////////
    // transcribeReverse()

    QUnit.test("transcribeReverse() CirthEreborExample1", function(assert)
    {
        // Setup.
        var transcriber = new EnglishCirthEreborTranscriber();
        var toSequence = CirthEreborExample1.RUNES;

        // Run.
        var fromSequence = transcriber.transcribeReverse(toSequence);

        // Verify.
        assert.ok(fromSequence);
        var expected = CirthEreborExample1.LANGUAGE_STRING;
        assert.equal(fromSequence.length, expected.length);
        assert.equal(fromSequence, expected);
    });

    QUnit.test("transcribeReverse() CirthEreborExample2", function(assert)
    {
        // Setup.
        var transcriber = new EnglishCirthEreborTranscriber();
        var toSequence = CirthEreborExample2.RUNES;

        // Run.
        var fromSequence = transcriber.transcribeReverse(toSequence);

        // Verify.
        assert.ok(fromSequence);
        var expected = CirthEreborExample2.LANGUAGE_STRING;
        assert.equal(fromSequence.length, expected.length);
        assert.equal(fromSequence, expected);
    });
});
