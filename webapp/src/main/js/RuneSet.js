define([ "AngloSaxonRune", "AngloSaxonRuneFormat", "AurebeshRune", "AurebeshRuneFormat", "CerthRune",
        "CerthRuneFormat", "TengwaRune", "TengwaRuneFormat", "EnglishAngloSaxonTranscriber",
        "EnglishAurebeshTranscriber", "EnglishCirthEreborTranscriber", "EnglishTengwarTranscriber",
        "example/AngloSaxonExample1", "example/AngloSaxonExample2", "example/AngloSaxonExample3",
        "example/AngloSaxonExample4", "example/AngloSaxonExample5", "example/AngloSaxonExample6",
        "example/AngloSaxonExample7", "example/AngloSaxonExample8", "example/AurebeshExampleSW1TPM1",
        "example/AurebeshExampleSW4ANH1", "example/CirthEreborExample1", "example/CirthEreborExample2",
        "example/TengwarExample1", "example/TengwarExampleSD1", "example/TengwarExampleSD2",
        "example/TengwarExampleTLOTR2", "example/TengwarExampleTROTS1", "example/TengwarExampleTROTS2",
        "example/TengwarExampleTS1", "example/TengwarExampleTS2", "example/TengwarExampleTTOI1",
        "example/TengwarExampleTTOI2", "example/TengwarExampleTWOTR1", "example/TengwarExampleTWOTR2",
        "example/TengwarExampleUTONAME1", "example/TengwarExampleUTONAME2" ], function(AngloSaxonRune,
        AngloSaxonRuneFormat, AurebeshRune, AurebeshRuneFormat, CerthRune, CerthRuneFormat, TengwaRune,
        TengwaRuneFormat, EnglishAngloSaxonTranscriber, EnglishAurebeshTranscriber, EnglishCirthEreborTranscriber,
        EnglishTengwarTranscriber, AngloSaxonExample1, AngloSaxonExample2, AngloSaxonExample3, AngloSaxonExample4,
        AngloSaxonExample5, AngloSaxonExample6, AngloSaxonExample7, AngloSaxonExample8, AurebeshExampleSW1TPM1,
        AurebeshExampleSW4ANH1, CirthEreborExample1, CirthEreborExample2, TengwarExample1, TengwarExampleSD1,
        TengwarExampleSD2, TengwarExampleTLOTR2, TengwarExampleTROTS1, TengwarExampleTROTS2, TengwarExampleTS1,
        TengwarExampleTS2, TengwarExampleTTOI1, TengwarExampleTTOI2, TengwarExampleTWOTR1, TengwarExampleTWOTR2,
        TengwarExampleUTONAME1, TengwarExampleUTONAME2)
{
    "use strict";
    var RuneSet =
    {
        ANGLO_SAXON: "angloSaxon",
        AUREBESH: "aurebesh",
        CIRTH: "cirth",
        TENGWAR: "tengwar",

        properties:
        {
            "angloSaxon":
            {
                name: "Anglo-Saxon",
                runes: AngloSaxonRune,
                formatter: AngloSaxonRuneFormat,
                transcriber: EnglishAngloSaxonTranscriber,
                fontClassName: "table-cell-anglo-saxon",
                examples: [ AngloSaxonExample1, AngloSaxonExample2, AngloSaxonExample3, AngloSaxonExample4,
                        AngloSaxonExample5, AngloSaxonExample6, AngloSaxonExample7, AngloSaxonExample8 ],
                value: "angloSaxon",
            },
            "aurebesh":
            {
                name: "Aurebesh",
                runes: AurebeshRune,
                formatter: AurebeshRuneFormat,
                transcriber: EnglishAurebeshTranscriber,
                fontClassName: "table-cell-aurebesh",
                examples: [ AurebeshExampleSW1TPM1, AurebeshExampleSW4ANH1 ],
                value: "aurebesh",
            },
            "cirth":
            {
                name: "Cirth",
                runes: CerthRune,
                formatter: CerthRuneFormat,
                transcriber: EnglishCirthEreborTranscriber,
                fontClassName: "table-cell-cirth",
                examples: [ CirthEreborExample1, CirthEreborExample2 ],
                value: "cirth",
            },
            "tengwar":
            {
                name: "Tengwar",
                runes: TengwaRune,
                formatter: TengwaRuneFormat,
                transcriber: EnglishTengwarTranscriber,
                fontClassName: "table-cell-tengwar",
                examples: [ TengwarExample1, TengwarExampleSD1, TengwarExampleSD2, TengwarExampleTLOTR2,
                        TengwarExampleTROTS1, TengwarExampleTROTS2, TengwarExampleTS1, TengwarExampleTS2,
                        TengwarExampleTTOI1, TengwarExampleTTOI2, TengwarExampleTWOTR1, TengwarExampleTWOTR2,
                        TengwarExampleUTONAME1, TengwarExampleUTONAME2 ],
                value: "tengwar",
            },
        },

        values: function()
        {
            return Object.getOwnPropertyNames(RuneSet.properties);
        },
    }

    if (Object.freeze)
    {
        Object.freeze(RuneSet);
    }

    return RuneSet;
});
