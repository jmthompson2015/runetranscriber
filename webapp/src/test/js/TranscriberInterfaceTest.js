define([ "EnglishAngloSaxonTranscriber", "EnglishAurebeshTranscriber", "EnglishCirthEreborTranscriber",
        "EnglishTengwarTranscriber" ], function(EnglishAngloSaxonTranscriber, EnglishAurebeshTranscriber,
        EnglishCirthEreborTranscriber, EnglishTengwarTranscriber)
{
    "use strict";
    QUnit.module("Transcriber interface");

    QUnit.test("Transcriber interface", function(assert)
    {
        // Setup.
        var transcriber0 = new EnglishAngloSaxonTranscriber();
        var transcriber1 = new EnglishAurebeshTranscriber();
        var transcriber2 = new EnglishCirthEreborTranscriber();
        var transcriber3 = new EnglishTengwarTranscriber();
        var transcribers = [ transcriber0, transcriber1, transcriber2, transcriber3 ];

        // Run / Verify.
        for (var i = 0; i < transcribers.length; i++)
        {
            var transcriber = transcribers[i];

            // Verify the functions exist.
            assert.ok(transcriber.getFormatter, (typeof transcriber) + ".getFormatter");
            assert.ok(transcriber.getForwardMap, (typeof transcriber) + ".getForwardMap");
            assert.ok(transcriber.getMaxForwardKeyLength, (typeof transcriber) + ".getMaxForwardKeyLength");
            assert.ok(transcriber.getMaxReverseKeyLength, (typeof transcriber) + ".getMaxReverseKeyLength");
            assert.ok(transcriber.getReverseMap, (typeof transcriber) + ".getReverseMap");
            assert.ok(transcriber.transcribeForward, (typeof transcriber) + ".transcribeForward");
            assert.ok(transcriber.transcribeReverse, (typeof transcriber) + ".transcribeReverse");
        }
    });
});
