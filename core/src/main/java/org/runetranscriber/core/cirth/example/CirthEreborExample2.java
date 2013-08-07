package org.runetranscriber.core.cirth.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.Certh;
import org.runetranscriber.core.cirth.CirthFontLetter;

/**
 * <a href="http://ring-lord.tripod.com/cirth/ex_moria2.htm">Balin's tomb, lower inscription</a>
 */
public final class CirthEreborExample2 extends AbstractExample<Certh>
{
    @Override
    protected FontLetterList createFontLetters()
    {
        final String[] myLetters = {
                // balin
                CirthFontLetter.C2, CirthFontLetter.C48, CirthFontLetter.C31, CirthFontLetter.C39,
                CirthFontLetter.C53,
                CirthFontLetter.SPACE,
                // son
                CirthFontLetter.C34, CirthFontLetter.C56, CirthFontLetter.C53,
                CirthFontLetter.SPACE,
                // of
                CirthFontLetter.C50, CirthFontLetter.C4,
                CirthFontLetter.SPACE,
                // fundin
                CirthFontLetter.C3, CirthFontLetter.C42, CirthFontLetter.C33, CirthFontLetter.C39, CirthFontLetter.C53,
                CirthFontLetter.SPACE,
                // lord
                CirthFontLetter.C31, CirthFontLetter.C50, CirthFontLetter.C12, CirthFontLetter.C9,
                CirthFontLetter.SPACE,
                // of
                CirthFontLetter.C50, CirthFontLetter.C4, CirthFontLetter.SPACE,
                // moria
                CirthFontLetter.C6, CirthFontLetter.C50, CirthFontLetter.C12, CirthFontLetter.C39, CirthFontLetter.C48, };

        return new FontLetterList(myLetters);
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
        final Certh[] myRunes = {
                // balin
                Certh.C2, Certh.C48, Certh.C31, Certh.C39, Certh.C53, Certh.SPACE,
                // son
                Certh.C34, Certh.C56, Certh.C53, Certh.SPACE,
                // of
                Certh.C50, Certh.C4, Certh.SPACE,
                // fundin
                Certh.C3, Certh.C42, Certh.C33, Certh.C39, Certh.C53, Certh.SPACE,
                // lord
                Certh.C31, Certh.C50, Certh.C12, Certh.C9, Certh.SPACE,
                // of
                Certh.C50, Certh.C4, Certh.SPACE,
                // moria
                Certh.C6, Certh.C50, Certh.C12, Certh.C39, Certh.C48, };

        return new RuneList<Certh>(myRunes);
    }
}
