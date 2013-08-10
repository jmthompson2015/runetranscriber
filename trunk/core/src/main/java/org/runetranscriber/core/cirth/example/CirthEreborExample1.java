package org.runetranscriber.core.cirth.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.Certh;
import org.runetranscriber.core.cirth.CerthFontLetter;

/**
 * <a href="http://ring-lord.tripod.com/cirth/ex_lotr.htm">From the title page, upper inscription, Lord of the Rings</a>
 */
public final class CirthEreborExample1 extends AbstractExample<Certh, CerthFontLetter>
{
    @Override
    protected FontLetterList<CerthFontLetter> createFontLetters()
    {
        final CerthFontLetter[] myLetters = {
                // the
                CerthFontLetter.C11,
                CerthFontLetter.C55,
                CerthFontLetter.SPACE,
                // lord
                CerthFontLetter.C31,
                CerthFontLetter.C50,
                CerthFontLetter.C12,
                CerthFontLetter.C9,
                CerthFontLetter.SPACE,
                // of
                CerthFontLetter.C50,
                CerthFontLetter.C4,
                CerthFontLetter.SPACE,
                // the
                CerthFontLetter.C11,
                CerthFontLetter.C55,
                CerthFontLetter.SPACE,
                // rings
                CerthFontLetter.C12, CerthFontLetter.C39,
                CerthFontLetter.C36,
                CerthFontLetter.C34,
                CerthFontLetter.SPACE,
                // translated
                CerthFontLetter.C8, CerthFontLetter.C12, CerthFontLetter.C48, CerthFontLetter.C53, CerthFontLetter.C34,
                CerthFontLetter.C31, CerthFontLetter.C48, CerthFontLetter.C8, CerthFontLetter.C55, CerthFontLetter.C9,
                CerthFontLetter.SPACE,
                // from
                CerthFontLetter.C3, CerthFontLetter.C12, CerthFontLetter.C50, CerthFontLetter.C6,
                CerthFontLetter.SPACE,
                // the
                CerthFontLetter.C11, CerthFontLetter.C55, CerthFontLetter.SPACE,
                // red
                CerthFontLetter.C12, CerthFontLetter.C46, CerthFontLetter.C9, CerthFontLetter.SPACE,
                // book
                CerthFontLetter.C2, CerthFontLetter.C51, CerthFontLetter.C18, };

        return new FontLetterList<CerthFontLetter>(myLetters);
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
                Phoneme.T, Phoneme.R, Phoneme.A, Phoneme.N, Phoneme.S, Phoneme.L, Phoneme.A, Phoneme.T, Phoneme.SCHWA,
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
                Certh.C12, Certh.C39, Certh.C36, Certh.C34, Certh.SPACE,
                // translated
                Certh.C8, Certh.C12, Certh.C48, Certh.C53, Certh.C34, Certh.C31, Certh.C48, Certh.C8, Certh.C55,
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
