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

                LANGUAGE_STRING: "anakin\n" + "turn the ship\n" + "around and go\n" + "back homie\n" + "right away",

                LANGUAGE_WORDS: [ "anakin", "\n", "turn", "the", "ship", "\n", "around", "and", "go", "\n", "back",
                        "homie", "\n", "right", "away" ],

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
            }

            if (Object.freeze)
            {
                Object.freeze(AurebeshExampleSW1TPM1)
            };

            return AurebeshExampleSW1TPM1;
        });
