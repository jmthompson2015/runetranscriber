package org.runetranscriber.core.cirth.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.CerthFontLetter;
import org.runetranscriber.core.cirth.CerthRune;

/**
 * Provides an example for Khuzdul (Dwarvish) to Cirth (Moria) runes from LEGO 9473 Sticker #2.
 */
public final class CirthMoriaExample2 extends AbstractExample<CerthRune, CerthFontLetter>
{
    @Override
    protected FontLetterList<CerthFontLetter> createFontLetters()
    {
        final CerthFontLetter[] myLetters = {
                // balin
                CerthFontLetter.C2, CerthFontLetter.C48, CerthFontLetter.C31, CerthFontLetter.C39, CerthFontLetter.C22,
                CerthFontLetter.NEWLINE,
                // fundinul
                CerthFontLetter.C3, CerthFontLetter.C42, CerthFontLetter.C33, CerthFontLetter.C39, CerthFontLetter.C22,
                CerthFontLetter.C42, CerthFontLetter.C31, };

        return new FontLetterList<CerthFontLetter>(myLetters);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "balin\nfundinul";

        return new LanguageLetterList(text);
    }

    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // balin
                Phoneme.B, Phoneme.A, Phoneme.L, Phoneme.I, Phoneme.N, Phoneme.NEWLINE,
                // fundinul
                Phoneme.F, Phoneme.U, Phoneme.ND, Phoneme.I, Phoneme.N, Phoneme.U, Phoneme.L, };

        return new PhonemeList(myPhonemes);
    }

    @Override
    protected RuneList<CerthRune> createRunes()
    {
        final CerthRune[] myRunes = {
                // balin
                CerthRune.C2, CerthRune.C48, CerthRune.C31, CerthRune.C39, CerthRune.C22, CerthRune.NEWLINE,
                // fundinul
                CerthRune.C3, CerthRune.C42, CerthRune.C33, CerthRune.C39, CerthRune.C22, CerthRune.C42, CerthRune.C31, };

        return new RuneList<CerthRune>(myRunes);
    }
}
