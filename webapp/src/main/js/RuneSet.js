define([ "AngloSaxonRune", "AurebeshRune", "CerthRune", "EnglishAngloSaxonTranscriber", "EnglishAurebeshTranscriber",
        "EnglishCirthEreborTranscriber", "EnglishKryptonianTranscriber", "EnglishTengwarTranscriber", "KryptonianRune",
        "TengwaRune", "example/AngloSaxonExample1", "example/AngloSaxonExample2", "example/AngloSaxonExample3",
        "example/AngloSaxonExample4", "example/AngloSaxonExample5", "example/AngloSaxonExample6",
        "example/AngloSaxonExample7", "example/AngloSaxonExample8", "example/AngloSaxonExampleTROTS1",
        "example/AngloSaxonExampleTROTS2", "example/AurebeshExampleSW1TPM1", "example/AurebeshExampleSW4ANH1",
        "example/CirthEreborExample1", "example/CirthEreborExample2", "example/KryptonianExampleDC1",
        "example/TengwarExample1", "example/TengwarExampleSD1", "example/TengwarExampleSD2",
        "example/TengwarExampleTLOTR2", "example/TengwarExampleTROTS1", "example/TengwarExampleTROTS2",
        "example/TengwarExampleTS1", "example/TengwarExampleTS2", "example/TengwarExampleTTOI1",
        "example/TengwarExampleTTOI2", "example/TengwarExampleTWOTR1", "example/TengwarExampleTWOTR2",
        "example/TengwarExampleUTONAME1", "example/TengwarExampleUTONAME2" ], function(AngloSaxonRune, AurebeshRune,
        CerthRune, EnglishAngloSaxonTranscriber, EnglishAurebeshTranscriber, EnglishCirthEreborTranscriber,
        EnglishKryptonianTranscriber, EnglishTengwarTranscriber, KryptonianRune, TengwaRune, AngloSaxonExample1,
        AngloSaxonExample2, AngloSaxonExample3, AngloSaxonExample4, AngloSaxonExample5, AngloSaxonExample6,
        AngloSaxonExample7, AngloSaxonExample8, AngloSaxonExampleTROTS1, AngloSaxonExampleTROTS2,
        AurebeshExampleSW1TPM1, AurebeshExampleSW4ANH1, CirthEreborExample1, CirthEreborExample2, KryptonianExampleDC1,
        TengwarExample1, TengwarExampleSD1, TengwarExampleSD2, TengwarExampleTLOTR2, TengwarExampleTROTS1,
        TengwarExampleTROTS2, TengwarExampleTS1, TengwarExampleTS2, TengwarExampleTTOI1, TengwarExampleTTOI2,
        TengwarExampleTWOTR1, TengwarExampleTWOTR2, TengwarExampleUTONAME1, TengwarExampleUTONAME2)
{
    "use strict";
    var RuneSet =
    {
        ANGLO_SAXON: "angloSaxon",
        AUREBESH: "aurebesh",
        CIRTH: "cirth",
        KRYPTONIAN: "kryptonian",
        TENGWAR: "tengwar",

        properties:
        {
            "angloSaxon":
            {
                name: "Anglo-Saxon",
                runes: AngloSaxonRune,
                transcriber: EnglishAngloSaxonTranscriber,
                fontClassName: "table-cell-anglo-saxon",
                examples: [ AngloSaxonExample1, AngloSaxonExample2, AngloSaxonExample3, AngloSaxonExample4,
                        AngloSaxonExample5, AngloSaxonExample6, AngloSaxonExample7, AngloSaxonExample8,
                        AngloSaxonExampleTROTS1, AngloSaxonExampleTROTS2 ],
                value: "angloSaxon",
            },
            "aurebesh":
            {
                name: "Aurebesh",
                runes: AurebeshRune,
                transcriber: EnglishAurebeshTranscriber,
                fontClassName: "table-cell-aurebesh",
                examples: [ AurebeshExampleSW1TPM1, AurebeshExampleSW4ANH1 ],
                value: "aurebesh",
            },
            "cirth":
            {
                name: "Cirth",
                runes: CerthRune,
                transcriber: EnglishCirthEreborTranscriber,
                fontClassName: "table-cell-cirth",
                examples: [ CirthEreborExample1, CirthEreborExample2 ],
                value: "cirth",
            },
            "kryptonian":
            {
                name: "Kryptonian",
                runes: KryptonianRune,
                transcriber: EnglishKryptonianTranscriber,
                fontClassName: "table-cell-kryptonian",
                examples: [ KryptonianExampleDC1 ],
                value: "kryptonian",
            },
            "tengwar":
            {
                name: "Tengwar",
                runes: TengwaRune,
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
    };

    if (Object.freeze)
    {
        Object.freeze(RuneSet);
    }

    return RuneSet;
});
