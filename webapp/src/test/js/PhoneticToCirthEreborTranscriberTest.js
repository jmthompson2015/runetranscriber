define(
        [ "CerthRune", "PhoneticToCirthEreborTranscriber", "example/CirthEreborExample1", "example/CirthEreborExample2" ],
        function(CerthRune, PhoneticToCirthEreborTranscriber, CirthEreborExample1, CirthEreborExample2)
        {
            "use strict";
            QUnit.module("PhoneticToCirthEreborTranscriber");

            QUnit.test("runesToFontLetters() CirthEreborExample1", function(assert)
            {
                runesToFontLetters(assert, CirthEreborExample1);
            });

            QUnit.test("runesToFontLetters() CirthEreborExample2", function(assert)
            {
                runesToFontLetters(assert, CirthEreborExample2);
            });

            QUnit.test("transcribeForward() CirthEreborExample1", function(assert)
            {
                transcribeForward(assert, CirthEreborExample1);
            });

            QUnit.test("transcribeForward() CirthEreborExample2", function(assert)
            {
                transcribeForward(assert, CirthEreborExample2);
            });

            QUnit.test("transcribeReverse() CirthEreborExample1", function(assert)
            {
                transcribeReverse(assert, CirthEreborExample1);
            });

            QUnit.test("transcribeReverse() CirthEreborExample2", function(assert)
            {
                transcribeReverse(assert, CirthEreborExample2);
            });

            function runesToFontLetters(assert, example)
            {
                // Setup.
                var runeKeys = example.RUNES;

                // Run.
                var result = PhoneticToCirthEreborTranscriber.runesToFontLetters(runeKeys);

                // Verify.
                assert.ok(result);
                var fontLetters = example.FONT_LETTERS;

                // // TEMP Print the font letters.
                // var temp = "";
                // runeKeys.forEach(function(runeKey)
                // {
                // var rune = CerthRune.properties[runeKey];
                // temp += "CerthRune.properties[\"" + rune.displayName + "\"].fontLetter,\n";
                // });
                // console.log(temp);
                // // TEMP

                assert.equal(result.length, fontLetters.length);
                fontLetters.forEach(function(fontLetter, i)
                {
                    assert.equal(result[i], fontLetter, "fontLetter: " + result[i] + " " + fontLetter);
                });
            };

            function transcribeForward(assert, example)
            {
                // Setup.
                var phonemes = example.PHONEMES;

                // Run.
                var result = PhoneticToCirthEreborTranscriber.transcribeForward(phonemes);

                // Verify.
                assert.ok(result);
                var runeKeys = example.RUNES;
                assert.equal(result.length, runeKeys.length);
                runeKeys.forEach(function(runeKey, i)
                {
                    assert.equal(result[i], runeKey, "runeKey: " + result[i] + " " + runeKey);
                });
            };

            function transcribeReverse(assert, example)
            {
                // Setup.
                var runeKeys = example.RUNES;

                // Run.
                var result = PhoneticToCirthEreborTranscriber.transcribeReverse(runeKeys);

                // Verify.
                assert.ok(result);

                // TEMP Print the phonemes.
                // var temp = "";
                // runeKeys.forEach(function(runeKey)
                // {
                // var rune = CerthRune.properties[runeKey];
                // temp += "CerthRune.properties[\"" + rune.displayName + "\"].phoneme,\n";
                // });
                // console.log(temp);
                // TEMP

                var phonemes = example.PHONEMES;
                assert.equal(result.length, phonemes.length);
                phonemes.forEach(function(phoneme, i)
                {
                    assert.equal(result[i], phoneme, "phoneme: " + result[i] + " " + phoneme);
                });
            };
        });
