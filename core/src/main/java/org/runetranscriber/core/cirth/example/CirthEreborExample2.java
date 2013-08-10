package org.runetranscriber.core.cirth.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.CerthRune;
import org.runetranscriber.core.cirth.CerthFontLetter;

/**
 * <a href="http://ring-lord.tripod.com/cirth/ex_moria2.htm">Balin's tomb, lower inscription</a>
 */
public final class CirthEreborExample2 extends AbstractExample<CerthRune, CerthFontLetter>
{
    @Override
    protected FontLetterList<CerthFontLetter> createFontLetters()
    {
        final CerthFontLetter[] myLetters = {
                // balin
                CerthFontLetter.C2, CerthFontLetter.C48, CerthFontLetter.C31, CerthFontLetter.C39,
                CerthFontLetter.C53,
                CerthFontLetter.SPACE,
                // son
                CerthFontLetter.C34, CerthFontLetter.C56, CerthFontLetter.C53,
                CerthFontLetter.SPACE,
                // of
                CerthFontLetter.C50, CerthFontLetter.C4,
                CerthFontLetter.SPACE,
                // fundin
                CerthFontLetter.C3, CerthFontLetter.C42, CerthFontLetter.C33, CerthFontLetter.C39, CerthFontLetter.C53,
                CerthFontLetter.SPACE,
                // lord
                CerthFontLetter.C31, CerthFontLetter.C50, CerthFontLetter.C12, CerthFontLetter.C9,
                CerthFontLetter.SPACE,
                // of
                CerthFontLetter.C50, CerthFontLetter.C4, CerthFontLetter.SPACE,
                // moria
                CerthFontLetter.C6, CerthFontLetter.C50, CerthFontLetter.C12, CerthFontLetter.C39, CerthFontLetter.C48, };

        return new FontLetterList<CerthFontLetter>(myLetters);
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
    protected RuneList<CerthRune> createRunes()
    {
        final CerthRune[] myRunes = {
                // balin
                CerthRune.C2, CerthRune.C48, CerthRune.C31, CerthRune.C39, CerthRune.C53, CerthRune.SPACE,
                // son
                CerthRune.C34, CerthRune.C56, CerthRune.C53, CerthRune.SPACE,
                // of
                CerthRune.C50, CerthRune.C4, CerthRune.SPACE,
                // fundin
                CerthRune.C3, CerthRune.C42, CerthRune.C33, CerthRune.C39, CerthRune.C53, CerthRune.SPACE,
                // lord
                CerthRune.C31, CerthRune.C50, CerthRune.C12, CerthRune.C9, CerthRune.SPACE,
                // of
                CerthRune.C50, CerthRune.C4, CerthRune.SPACE,
                // moria
                CerthRune.C6, CerthRune.C50, CerthRune.C12, CerthRune.C39, CerthRune.C48, };

        return new RuneList<CerthRune>(myRunes);
    }
}
