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
            };

            if (Object.freeze)
            {
                Object.freeze(AurebeshExampleSW4ANH1);
            }

            return AurebeshExampleSW4ANH1;
        });
