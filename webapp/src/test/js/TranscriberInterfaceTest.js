define([ "EnglishAngloSaxonTranscriber", "EnglishAurebeshTranscriber", "EnglishCirthEreborTranscriber",
        "EnglishKryptonianTranscriber", "EnglishTengwarTranscriber" ], function(EnglishAngloSaxonTranscriber,
        EnglishAurebeshTranscriber, EnglishCirthEreborTranscriber, EnglishKryptonianTranscriber,
        EnglishTengwarTranscriber)
{
    "use strict";
    QUnit.module("Transcriber interface");

    QUnit.test("Transcriber interface", function(assert)
    {
        // Setup.
        var transcriber0 = new EnglishAngloSaxonTranscriber();
        var transcriber1 = new EnglishAurebeshTranscriber();
        var transcriber2 = new EnglishCirthEreborTranscriber();
        var transcriber3 = new EnglishKryptonianTranscriber();
        var transcriber4 = new EnglishTengwarTranscriber();
        var transcribers = [ transcriber0, transcriber1, transcriber2, transcriber3, transcriber4 ];

        // Run / Verify.
        transcribers.forEach(function(transcriber)
        {
            // Verify the functions exist.
            assert.ok(transcriber.phonemesToLanguageWords, (typeof transcriber) + ".phonemesToLanguageWords");
            assert.ok(transcriber.runesToFontLetters, (typeof transcriber) + ".runesToFontLetters");
            assert.ok(transcriber.runesToPhonemes, (typeof transcriber) + ".runesToPhonemes");
            assert.ok(transcriber.transcribeForward, (typeof transcriber) + ".transcribeForward");
            assert.ok(transcriber.transcribeReverse, (typeof transcriber) + ".transcribeReverse");
        });
    });
});
