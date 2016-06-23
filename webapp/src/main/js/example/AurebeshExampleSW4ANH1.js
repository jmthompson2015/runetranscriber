/*
 * Provides an example for Aurebesh from <a href="http://starwars.wikia.com/wiki/Aurebesh#Behind_the_scenes">Wookieepedia</a>.
 */
var AurebeshExampleSW4ANH1 =
{
    IMAGE: "https://runetranscriber.googlecode.com/svn/trunk/core/doc/images/starwars/SW4ANH_tractorBeam.jpg",

    LANGUAGE_STRING: "power\n" + "tractor beam 12 sec n6",

    RUNES: [
    // Line 1
    // power
    AurebeshRune.PETH, AurebeshRune.OSK, AurebeshRune.WESK, AurebeshRune.ESK,
            AurebeshRune.RESH, AurebeshRune.NEWLINE,
            // tractor
            AurebeshRune.TRILL, AurebeshRune.RESH, AurebeshRune.AUREK,
            AurebeshRune.CRESH, AurebeshRune.TRILL, AurebeshRune.OSK,
            AurebeshRune.RESH, AurebeshRune.SPACE,
            // beam
            AurebeshRune.BESH, AurebeshRune.ESK, AurebeshRune.AUREK,
            AurebeshRune.MERN, AurebeshRune.SPACE,
            // 12
            AurebeshRune.ONE, AurebeshRune.TWO, AurebeshRune.SPACE,
            // sec
            AurebeshRune.SENTH, AurebeshRune.ESK, AurebeshRune.CRESH,
            AurebeshRune.SPACE,
            // n6)
            AurebeshRune.NERN, AurebeshRune.SIX, ],
}