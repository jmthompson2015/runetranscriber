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
 * Khuzdul (Dwarvish) to Cirth Moria.
 * 
 * <a href="http://ring-lord.tripod.com/cirth/ex_moria1.htm">Balin's Tomb, upper inscription</a>
 */
public final class CirthMoriaExample1 extends AbstractExample<Certh>
{
    @Override
    protected FontLetterList createFontLetters()
    {
        final String answer = "balin.fuDinul.uzbadk|azaddUmu";

        return new FontLetterList(answer);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "balin fundinul uzbadkhazadd" + Constants.U_MACRON + "mu";

        return new LanguageLetterList(text);
    }

    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = { Phoneme.B, Phoneme.A, Phoneme.L, Phoneme.I, Phoneme.N, Phoneme.SPACE, Phoneme.F,
                Phoneme.U, Phoneme.ND, Phoneme.I, Phoneme.N, Phoneme.U, Phoneme.L, Phoneme.SPACE, Phoneme.U, Phoneme.Z,
                Phoneme.B, Phoneme.A, Phoneme.D, Phoneme.K, Phoneme.PLUS_H, Phoneme.A, Phoneme.Z, Phoneme.A, Phoneme.D,
                Phoneme.D, Phoneme.UU, Phoneme.M, Phoneme.U, };

        return new PhonemeList(myPhonemes);
    }

    @Override
    protected RuneList<Certh> createRunes()
    {
        final Certh[] myRunes = { Certh.B, Certh.A, Certh.L, Certh.I, Certh.C22, Certh.SPACE, Certh.F, Certh.U,
                Certh.C33, Certh.I, Certh.C22, Certh.U, Certh.L, Certh.SPACE, Certh.U, Certh.C17, Certh.B, Certh.A,
                Certh.D, Certh.K, Certh.C59, Certh.A, Certh.C17, Certh.A, Certh.D, Certh.D, Certh.C43, Certh.M,
                Certh.U, };

        return new RuneList<Certh>(myRunes);
    }
}
