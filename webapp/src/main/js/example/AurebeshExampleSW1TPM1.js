/*
 * Provides an example for Aurebesh from <a href="http://starwars.wikia.com/wiki/List_of_use_of_Aurebesh">Wookieepedia</a>.
 */
define(
        [ "AurebeshRune" ],
        function(AurebeshRune)
        {
            "use strict";
            var AurebeshExampleSW1TPM1 =
            {
                NAME: "Aurebesh Example SW1TPM1",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/starwars/SW1TPM_turnTheShipAround.jpg",
                IMAGE_WIDTH: 400,

                LANGUAGE_STRING: "anakin\n" + "turn the ship\n" + "around and go\n" + "back homie\n" + "right away",

                LANGUAGE_WORDS: [ "anakin", "\n", "turn", " ", "the", " ", "ship", "\n", "around", " ", "and", " ",
                        "go", "\n", "back", " ", "homie", "\n", "right", " ", "away" ],

                PHONEMES: [ AurebeshRune.properties["aurek"].phoneme, AurebeshRune.properties["nern"].phoneme,
                        AurebeshRune.properties["aurek"].phoneme, AurebeshRune.properties["krill"].phoneme,
                        AurebeshRune.properties["isk"].phoneme, AurebeshRune.properties["nern"].phoneme,
                        AurebeshRune.properties["newline"].phoneme, AurebeshRune.properties["trill"].phoneme,
                        AurebeshRune.properties["usk"].phoneme, AurebeshRune.properties["resh"].phoneme,
                        AurebeshRune.properties["nern"].phoneme, AurebeshRune.properties["space"].phoneme,
                        AurebeshRune.properties["trill"].phoneme, AurebeshRune.properties["herf"].phoneme,
                        AurebeshRune.properties["esk"].phoneme, AurebeshRune.properties["space"].phoneme,
                        AurebeshRune.properties["senth"].phoneme, AurebeshRune.properties["herf"].phoneme,
                        AurebeshRune.properties["isk"].phoneme, AurebeshRune.properties["peth"].phoneme,
                        AurebeshRune.properties["newline"].phoneme, AurebeshRune.properties["aurek"].phoneme,
                        AurebeshRune.properties["resh"].phoneme, AurebeshRune.properties["osk"].phoneme,
                        AurebeshRune.properties["usk"].phoneme, AurebeshRune.properties["nern"].phoneme,
                        AurebeshRune.properties["dorn"].phoneme, AurebeshRune.properties["space"].phoneme,
                        AurebeshRune.properties["aurek"].phoneme, AurebeshRune.properties["nern"].phoneme,
                        AurebeshRune.properties["dorn"].phoneme, AurebeshRune.properties["space"].phoneme,
                        AurebeshRune.properties["grek"].phoneme, AurebeshRune.properties["osk"].phoneme,
                        AurebeshRune.properties["newline"].phoneme, AurebeshRune.properties["besh"].phoneme,
                        AurebeshRune.properties["aurek"].phoneme, AurebeshRune.properties["cresh"].phoneme,
                        AurebeshRune.properties["krill"].phoneme, AurebeshRune.properties["space"].phoneme,
                        AurebeshRune.properties["herf"].phoneme, AurebeshRune.properties["osk"].phoneme,
                        AurebeshRune.properties["mern"].phoneme, AurebeshRune.properties["isk"].phoneme,
                        AurebeshRune.properties["esk"].phoneme, AurebeshRune.properties["newline"].phoneme,
                        AurebeshRune.properties["resh"].phoneme, AurebeshRune.properties["isk"].phoneme,
                        AurebeshRune.properties["grek"].phoneme, AurebeshRune.properties["herf"].phoneme,
                        AurebeshRune.properties["trill"].phoneme, AurebeshRune.properties["space"].phoneme,
                        AurebeshRune.properties["aurek"].phoneme, AurebeshRune.properties["wesk"].phoneme,
                        AurebeshRune.properties["aurek"].phoneme, AurebeshRune.properties["yirt"].phoneme ],

                RUNES: [
                // Line 1
                // anakin
                AurebeshRune.AUREK, AurebeshRune.NERN, AurebeshRune.AUREK, AurebeshRune.KRILL, AurebeshRune.ISK,
                        AurebeshRune.NERN, AurebeshRune.NEWLINE,
                        // turn
                        AurebeshRune.TRILL, AurebeshRune.USK, AurebeshRune.RESH, AurebeshRune.NERN, AurebeshRune.SPACE,
                        // the
                        AurebeshRune.TRILL, AurebeshRune.HERF, AurebeshRune.ESK, AurebeshRune.SPACE,
                        // ship
                        AurebeshRune.SENTH, AurebeshRune.HERF, AurebeshRune.ISK, AurebeshRune.PETH,
                        AurebeshRune.NEWLINE,
                        // around
                        AurebeshRune.AUREK, AurebeshRune.RESH, AurebeshRune.OSK, AurebeshRune.USK, AurebeshRune.NERN,
                        AurebeshRune.DORN, AurebeshRune.SPACE,
                        // and
                        AurebeshRune.AUREK, AurebeshRune.NERN, AurebeshRune.DORN, AurebeshRune.SPACE,
                        // go
                        AurebeshRune.GREK, AurebeshRune.OSK, AurebeshRune.NEWLINE,
                        // back
                        AurebeshRune.BESH, AurebeshRune.AUREK, AurebeshRune.CRESH, AurebeshRune.KRILL,
                        AurebeshRune.SPACE,
                        // homie
                        AurebeshRune.HERF, AurebeshRune.OSK, AurebeshRune.MERN, AurebeshRune.ISK, AurebeshRune.ESK,
                        AurebeshRune.NEWLINE,
                        // right
                        AurebeshRune.RESH, AurebeshRune.ISK, AurebeshRune.GREK, AurebeshRune.HERF, AurebeshRune.TRILL,
                        AurebeshRune.SPACE,
                        // away
                        AurebeshRune.AUREK, AurebeshRune.WESK, AurebeshRune.AUREK, AurebeshRune.YIRT, ],

                FONT_LETTERS: [ AurebeshRune.properties["aurek"].fontLetter,
                        AurebeshRune.properties["nern"].fontLetter, AurebeshRune.properties["aurek"].fontLetter,
                        AurebeshRune.properties["krill"].fontLetter, AurebeshRune.properties["isk"].fontLetter,
                        AurebeshRune.properties["nern"].fontLetter, AurebeshRune.properties["newline"].fontLetter,
                        AurebeshRune.properties["trill"].fontLetter, AurebeshRune.properties["usk"].fontLetter,
                        AurebeshRune.properties["resh"].fontLetter, AurebeshRune.properties["nern"].fontLetter,
                        AurebeshRune.properties["space"].fontLetter, AurebeshRune.properties["trill"].fontLetter,
                        AurebeshRune.properties["herf"].fontLetter, AurebeshRune.properties["esk"].fontLetter,
                        AurebeshRune.properties["space"].fontLetter, AurebeshRune.properties["senth"].fontLetter,
                        AurebeshRune.properties["herf"].fontLetter, AurebeshRune.properties["isk"].fontLetter,
                        AurebeshRune.properties["peth"].fontLetter, AurebeshRune.properties["newline"].fontLetter,
                        AurebeshRune.properties["aurek"].fontLetter, AurebeshRune.properties["resh"].fontLetter,
                        AurebeshRune.properties["osk"].fontLetter, AurebeshRune.properties["usk"].fontLetter,
                        AurebeshRune.properties["nern"].fontLetter, AurebeshRune.properties["dorn"].fontLetter,
                        AurebeshRune.properties["space"].fontLetter, AurebeshRune.properties["aurek"].fontLetter,
                        AurebeshRune.properties["nern"].fontLetter, AurebeshRune.properties["dorn"].fontLetter,
                        AurebeshRune.properties["space"].fontLetter, AurebeshRune.properties["grek"].fontLetter,
                        AurebeshRune.properties["osk"].fontLetter, AurebeshRune.properties["newline"].fontLetter,
                        AurebeshRune.properties["besh"].fontLetter, AurebeshRune.properties["aurek"].fontLetter,
                        AurebeshRune.properties["cresh"].fontLetter, AurebeshRune.properties["krill"].fontLetter,
                        AurebeshRune.properties["space"].fontLetter, AurebeshRune.properties["herf"].fontLetter,
                        AurebeshRune.properties["osk"].fontLetter, AurebeshRune.properties["mern"].fontLetter,
                        AurebeshRune.properties["isk"].fontLetter, AurebeshRune.properties["esk"].fontLetter,
                        AurebeshRune.properties["newline"].fontLetter, AurebeshRune.properties["resh"].fontLetter,
                        AurebeshRune.properties["isk"].fontLetter, AurebeshRune.properties["grek"].fontLetter,
                        AurebeshRune.properties["herf"].fontLetter, AurebeshRune.properties["trill"].fontLetter,
                        AurebeshRune.properties["space"].fontLetter, AurebeshRune.properties["aurek"].fontLetter,
                        AurebeshRune.properties["wesk"].fontLetter, AurebeshRune.properties["aurek"].fontLetter,
                        AurebeshRune.properties["yirt"].fontLetter ],
            };

            if (Object.freeze)
            {
                Object.freeze(AurebeshExampleSW1TPM1);
            }

            return AurebeshExampleSW1TPM1;
        });
