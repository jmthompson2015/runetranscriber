package org.runetranscriber.core.cirth.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.Constants;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.Certh;

/**
 * <a href="http://ring-lord.tripod.com/cirth/ex_lotr.htm">From the title page, upper inscription, Lord of the Rings</a>
 */
public final class CirthEreborExample1 extends AbstractExample<Certh>
{
    @Override
    protected FontLetterList createFontLetters()
    {
        final String answer = Constants.SMALL_LETTER_ETH + "‘.lord.ov." + Constants.SMALL_LETTER_ETH
                + "‘.riNs.translat‘d.from." + Constants.SMALL_LETTER_ETH + "‘.red.bOk";

        return new FontLetterList(answer);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "the lord of the rings translated from the red book";

        return new LanguageLetterList(text);
    }

    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // the
                Phoneme.DH, Phoneme.SCHWA, Phoneme.SPACE,
                // lord
                Phoneme.L, Phoneme.O, Phoneme.R, Phoneme.D, Phoneme.SPACE,
                // of
                Phoneme.O, Phoneme.V, Phoneme.SPACE,
                // the
                Phoneme.DH, Phoneme.SCHWA, Phoneme.SPACE,
                // rings
                Phoneme.R, Phoneme.I, Phoneme.NG2, Phoneme.S, Phoneme.SPACE,
                // translated
                Phoneme.T, Phoneme.R, Phoneme.A, Phoneme.N, Phoneme.S, Phoneme.L, Phoneme.A, Phoneme.T, Phoneme.SCHWA2,
                Phoneme.D, Phoneme.SPACE,
                // from
                Phoneme.F, Phoneme.R, Phoneme.O, Phoneme.M, Phoneme.SPACE,
                // the
                Phoneme.DH, Phoneme.SCHWA, Phoneme.SPACE,
                // red
                Phoneme.R, Phoneme.E, Phoneme.D, Phoneme.SPACE,
                // book
                Phoneme.B, Phoneme.OO, Phoneme.K };

        return new PhonemeList(myPhonemes);
    }

    @Override
    protected RuneList<Certh> createRunes()
    {
        final Certh[] myRunes = { Certh.DH, Certh.C55, Certh.SPACE, Certh.L, Certh.O, Certh.C12, Certh.D, Certh.SPACE,
                Certh.O, Certh.V, Certh.SPACE, Certh.DH, Certh.C55, Certh.SPACE, Certh.C12, Certh.I, Certh.C36,
                Certh.C35, Certh.SPACE, Certh.T, Certh.C12, Certh.A, Certh.C22, Certh.C35, Certh.L, Certh.A, Certh.T,
                Certh.C55, Certh.D, Certh.SPACE, Certh.F, Certh.C12, Certh.O, Certh.M, Certh.SPACE, Certh.DH,
                Certh.C55, Certh.SPACE, Certh.C12, Certh.E, Certh.D, Certh.SPACE, Certh.B, Certh.OO, Certh.K, };

        return new RuneList<Certh>(myRunes);
    }
}
