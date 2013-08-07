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
 * <a href="http://ring-lord.tripod.com/cirth/ex_lotr.htm">From the title page, upper inscription, Lord of the Rings</a>
 */
public final class CirthEreborExample1 extends AbstractExample<Certh>
{
    @Override
    protected FontLetterList createFontLetters()
    {
        final String[] myLetters = {
                // the
                CirthFontLetter.C11,
                CirthFontLetter.C55,
                CirthFontLetter.SPACE,
                // lord
                CirthFontLetter.C31,
                CirthFontLetter.C50,
                CirthFontLetter.C12,
                CirthFontLetter.C9,
                CirthFontLetter.SPACE,
                // of
                CirthFontLetter.C50,
                CirthFontLetter.C4,
                CirthFontLetter.SPACE,
                // the
                CirthFontLetter.C11,
                CirthFontLetter.C55,
                CirthFontLetter.SPACE,
                // rings
                CirthFontLetter.C12, CirthFontLetter.C39,
                CirthFontLetter.C36,
                CirthFontLetter.C35,
                CirthFontLetter.SPACE,
                // translated
                CirthFontLetter.C8, CirthFontLetter.C12, CirthFontLetter.C48, CirthFontLetter.C22, CirthFontLetter.C35,
                CirthFontLetter.C31, CirthFontLetter.C48, CirthFontLetter.C8, CirthFontLetter.C55, CirthFontLetter.C9,
                CirthFontLetter.SPACE,
                // from
                CirthFontLetter.C3, CirthFontLetter.C12, CirthFontLetter.C50, CirthFontLetter.C6,
                CirthFontLetter.SPACE,
                // the
                CirthFontLetter.C11, CirthFontLetter.C55, CirthFontLetter.SPACE,
                // red
                CirthFontLetter.C12, CirthFontLetter.C46, CirthFontLetter.C9, CirthFontLetter.SPACE,
                // book
                CirthFontLetter.C2, CirthFontLetter.C51, CirthFontLetter.C18, };

        return new FontLetterList(myLetters);
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
        final Certh[] myRunes = {
                // the
                Certh.C11, Certh.C55, Certh.SPACE,
                // lord
                Certh.C31, Certh.C50, Certh.C12, Certh.C9, Certh.SPACE,
                // of
                Certh.C50, Certh.C4, Certh.SPACE,
                // the
                Certh.C11, Certh.C55, Certh.SPACE,
                // rings
                Certh.C12, Certh.C39, Certh.C36, Certh.C35, Certh.SPACE,
                // translated
                Certh.C8, Certh.C12, Certh.C48, Certh.C22, Certh.C35, Certh.C31, Certh.C48, Certh.C8, Certh.C55,
                Certh.C9, Certh.SPACE,
                // from
                Certh.C3, Certh.C12, Certh.C50, Certh.C6, Certh.SPACE,
                // the
                Certh.C11, Certh.C55, Certh.SPACE,
                // red
                Certh.C12, Certh.C46, Certh.C9, Certh.SPACE,
                // book
                Certh.C2, Certh.C51, Certh.C18, };

        return new RuneList<Certh>(myRunes);
    }
}
