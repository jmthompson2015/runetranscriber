define([ "EnglishCirthEreborTranscriber", "example/CirthEreborExample1", "example/CirthEreborExample2" ], function(
        EnglishCirthEreborTranscriber, CirthEreborExample1, CirthEreborExample2)
{
    "use strict";
    QUnit.module("EnglishCirthEreborTranscriber");

    QUnit.test("getMaxForwardKeyLength()", function(assert)
    {
        // Setup.
        var transcriber = new EnglishCirthEreborTranscriber();

        // Run.
        var result = transcriber.getMaxForwardKeyLength();

        // Verify.
        assert.equal(result, 3);
    });

    QUnit.test("getMaxReverseKeyLength()", function(assert)
    {
        // Setup.
        var transcriber = new EnglishCirthEreborTranscriber();

        // Run.
        var result = transcriber.getMaxReverseKeyLength();

        // Verify.
        assert.equal(result, 3);
    });

    QUnit.test("Example1 transcribeForward()", function(assert)
    {
        // Setup.
        var transcriber = new EnglishCirthEreborTranscriber();
        var fromSequence = CirthEreborExample1.LANGUAGE_LETTERS;

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

    QUnit.test("Example2 transcribeForward()", function(assert)
    {
        // Setup.
        var transcriber = new EnglishCirthEreborTranscriber();
        var fromSequence = CirthEreborExample2.LANGUAGE_LETTERS;

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

    QUnit.test("Example1 transcribeReverse()", function(assert)
    {
        // Setup.
        var transcriber = new EnglishCirthEreborTranscriber();
        var toSequence = CirthEreborExample1.RUNES;

        // Run.
        var fromSequence = transcriber.transcribeReverse(toSequence);

        // Verify.
        assert.ok(fromSequence);
        var expected = CirthEreborExample1.LANGUAGE_LETTERS;
        assert.equal(fromSequence.length, expected.length);
        assert.equal(fromSequence, expected);
    });

    QUnit.test("Example2 transcribeReverse()", function(assert)
    {
        // Setup.
        var transcriber = new EnglishCirthEreborTranscriber();
        var toSequence = CirthEreborExample2.RUNES;

        // Run.
        var fromSequence = transcriber.transcribeReverse(toSequence);

        // Verify.
        assert.ok(fromSequence);
        var expected = CirthEreborExample2.LANGUAGE_LETTERS;
        assert.equal(fromSequence.length, expected.length);
        assert.equal(fromSequence, expected);
    });
});
