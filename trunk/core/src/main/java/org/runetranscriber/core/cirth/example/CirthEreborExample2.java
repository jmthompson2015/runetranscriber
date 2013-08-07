package org.runetranscriber.core.cirth.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.Certh;

/**
 * <a href="http://ring-lord.tripod.com/cirth/ex_moria2.htm">Balin's tomb, lower inscription</a>
 */
public final class CirthEreborExample2 extends AbstractExample<Certh>
{
    @Override
    protected FontLetterList createFontLetters()
    {
        final String answer = "balin.s}n.ov.fuDin.lord.ov.moria";

        return new FontLetterList(answer);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "balin son of fundin lord of moria";

        return new LanguageLetterList(text);
    }

    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // balin
                Phoneme.B, Phoneme.A, Phoneme.L, Phoneme.I, Phoneme.N, Phoneme.SPACE,
                // son
                Phoneme.S, Phoneme.SCHWA2, Phoneme.N, Phoneme.SPACE,
                // of
                Phoneme.O, Phoneme.V, Phoneme.SPACE,
                // fundin
                Phoneme.F, Phoneme.U, Phoneme.ND, Phoneme.I, Phoneme.N, Phoneme.SPACE,
                // lord
                Phoneme.L, Phoneme.O, Phoneme.R, Phoneme.D, Phoneme.SPACE,
                // of
                Phoneme.O, Phoneme.V, Phoneme.SPACE,
                // moria
                Phoneme.M, Phoneme.O, Phoneme.R, Phoneme.I, Phoneme.A };

        return new PhonemeList(myPhonemes);
    }

    @Override
    protected RuneList<Certh> createRunes()
    {
        final Certh[] myRunes = { Certh.B, Certh.A, Certh.L, Certh.I, Certh.C22, Certh.SPACE, Certh.C35, Certh.C56,
                Certh.C22, Certh.SPACE, Certh.O, Certh.V, Certh.SPACE, Certh.F, Certh.U, Certh.C33, Certh.I, Certh.C22,
                Certh.SPACE, Certh.L, Certh.O, Certh.C12, Certh.D, Certh.SPACE, Certh.O, Certh.V, Certh.SPACE, Certh.M,
                Certh.O, Certh.C12, Certh.I, Certh.A, };

        return new RuneList<Certh>(myRunes);
    }
}
