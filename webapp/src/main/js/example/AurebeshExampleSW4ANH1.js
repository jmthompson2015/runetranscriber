/*
 * Provides an example for Aurebesh from <a href="http://starwars.wikia.com/wiki/Aurebesh#Behind_the_scenes">Wookieepedia</a>.
 */
define(
        [ "AurebeshRune" ],
        function(AurebeshRune)
        {
            "use strict";
            var AurebeshExampleSW4ANH1 =
            {
                NAME: "Aurebesh Example SW4ANH1",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/starwars/SW4ANH_tractorBeam.jpg",

                LANGUAGE_STRING: "power\n" + "tractor beam 12 sec n6",

                LANGUAGE_WORDS: [ "power", "\n", "tractor", " ", "beam", " ", "12", " ", "sec", " ", "n6" ],

                PHONEMES: [ AurebeshRune.properties["peth"].phoneme, AurebeshRune.properties["osk"].phoneme,
                        AurebeshRune.properties["wesk"].phoneme, AurebeshRune.properties["esk"].phoneme,
                        AurebeshRune.properties["resh"].phoneme, AurebeshRune.properties["newline"].phoneme,
                        AurebeshRune.properties["trill"].phoneme, AurebeshRune.properties["resh"].phoneme,
                        AurebeshRune.properties["aurek"].phoneme, AurebeshRune.properties["cresh"].phoneme,
                        AurebeshRune.properties["trill"].phoneme, AurebeshRune.properties["osk"].phoneme,
                        AurebeshRune.properties["resh"].phoneme, AurebeshRune.properties["space"].phoneme,
                        AurebeshRune.properties["besh"].phoneme, AurebeshRune.properties["esk"].phoneme,
                        AurebeshRune.properties["aurek"].phoneme, AurebeshRune.properties["mern"].phoneme,
                        AurebeshRune.properties["space"].phoneme, AurebeshRune.properties["one"].phoneme,
                        AurebeshRune.properties["two"].phoneme, AurebeshRune.properties["space"].phoneme,
                        AurebeshRune.properties["senth"].phoneme, AurebeshRune.properties["esk"].phoneme,
                        AurebeshRune.properties["cresh"].phoneme, AurebeshRune.properties["space"].phoneme,
                        AurebeshRune.properties["nern"].phoneme, AurebeshRune.properties["six"].phoneme ],

                RUNES: [
                // Line 1
                // power
                AurebeshRune.PETH, AurebeshRune.OSK, AurebeshRune.WESK, AurebeshRune.ESK, AurebeshRune.RESH,
                        AurebeshRune.NEWLINE,
                        // tractor
                        AurebeshRune.TRILL, AurebeshRune.RESH, AurebeshRune.AUREK, AurebeshRune.CRESH,
                        AurebeshRune.TRILL, AurebeshRune.OSK, AurebeshRune.RESH, AurebeshRune.SPACE,
                        // beam
                        AurebeshRune.BESH, AurebeshRune.ESK, AurebeshRune.AUREK, AurebeshRune.MERN, AurebeshRune.SPACE,
                        // 12
                        AurebeshRune.ONE, AurebeshRune.TWO, AurebeshRune.SPACE,
                        // sec
                        AurebeshRune.SENTH, AurebeshRune.ESK, AurebeshRune.CRESH, AurebeshRune.SPACE,
                        // n6)
                        AurebeshRune.NERN, AurebeshRune.SIX, ],

                FONT_LETTERS: [ AurebeshRune.properties["peth"].fontLetter, AurebeshRune.properties["osk"].fontLetter,
                        AurebeshRune.properties["wesk"].fontLetter, AurebeshRune.properties["esk"].fontLetter,
                        AurebeshRune.properties["resh"].fontLetter, AurebeshRune.properties["newline"].fontLetter,
                        AurebeshRune.properties["trill"].fontLetter, AurebeshRune.properties["resh"].fontLetter,
                        AurebeshRune.properties["aurek"].fontLetter, AurebeshRune.properties["cresh"].fontLetter,
                        AurebeshRune.properties["trill"].fontLetter, AurebeshRune.properties["osk"].fontLetter,
                        AurebeshRune.properties["resh"].fontLetter, AurebeshRune.properties["space"].fontLetter,
                        AurebeshRune.properties["besh"].fontLetter, AurebeshRune.properties["esk"].fontLetter,
                        AurebeshRune.properties["aurek"].fontLetter, AurebeshRune.properties["mern"].fontLetter,
                        AurebeshRune.properties["space"].fontLetter, AurebeshRune.properties["one"].fontLetter,
                        AurebeshRune.properties["two"].fontLetter, AurebeshRune.properties["space"].fontLetter,
                        AurebeshRune.properties["senth"].fontLetter, AurebeshRune.properties["esk"].fontLetter,
                        AurebeshRune.properties["cresh"].fontLetter, AurebeshRune.properties["space"].fontLetter,
                        AurebeshRune.properties["nern"].fontLetter, AurebeshRune.properties["six"].fontLetter ],
            };

            if (Object.freeze)
            {
                Object.freeze(AurebeshExampleSW4ANH1);
            }

            return AurebeshExampleSW4ANH1;
        });
