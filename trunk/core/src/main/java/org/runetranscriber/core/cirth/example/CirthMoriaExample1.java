package org.runetranscriber.core.cirth.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.Constants;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.Certh;
import org.runetranscriber.core.cirth.CerthFontLetter;

/**
 * Khuzdul (Dwarvish) to Cirth Moria.
 * 
 * <a href="http://ring-lord.tripod.com/cirth/ex_moria1.htm">Balin's Tomb, upper inscription</a>
 */
public final class CirthMoriaExample1 extends AbstractExample<Certh, CerthFontLetter>
{
    @Override
    protected FontLetterList<CerthFontLetter> createFontLetters()
    {
        final CerthFontLetter[] myLetters = {
                // balin
                CerthFontLetter.C2, CerthFontLetter.C48,
                CerthFontLetter.C31,
                CerthFontLetter.C39,
                CerthFontLetter.C22,
                CerthFontLetter.NEWLINE,
                // fundinul
                CerthFontLetter.C3, CerthFontLetter.C42, CerthFontLetter.C33, CerthFontLetter.C39, CerthFontLetter.C22,
                CerthFontLetter.C42,
                CerthFontLetter.C31,
                CerthFontLetter.NEWLINE,
                // uzbadkhazaddumu
                CerthFontLetter.C42, CerthFontLetter.C17, CerthFontLetter.C2, CerthFontLetter.C48, CerthFontLetter.C9,
                CerthFontLetter.C18, CerthFontLetter.C59, CerthFontLetter.C48, CerthFontLetter.C17,
                CerthFontLetter.C48, CerthFontLetter.C9, CerthFontLetter.C9, CerthFontLetter.C43, CerthFontLetter.C6,
                CerthFontLetter.C42, };

        return new FontLetterList<CerthFontLetter>(myLetters);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "balin\nfundinul\nuzbadkhazadd" + Constants.U_MACRON + "mu";

        return new LanguageLetterList(text);
    }

    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // balin
                Phoneme.B, Phoneme.A, Phoneme.L, Phoneme.I, Phoneme.N, Phoneme.NEWLINE,
                // fundinul
                Phoneme.F, Phoneme.U, Phoneme.ND, Phoneme.I, Phoneme.N, Phoneme.U, Phoneme.L, Phoneme.NEWLINE,
                // uzbadkhazaddumu
                Phoneme.U, Phoneme.Z, Phoneme.B, Phoneme.A, Phoneme.D, Phoneme.K, Phoneme.PLUS_H, Phoneme.A, Phoneme.Z,
                Phoneme.A, Phoneme.D, Phoneme.D, Phoneme.UU, Phoneme.M, Phoneme.U, };

        return new PhonemeList(myPhonemes);
    }

    @Override
    protected RuneList<Certh> createRunes()
    {
        final Certh[] myRunes = {
                // balin
                Certh.C2, Certh.C48, Certh.C31, Certh.C39, Certh.C22, Certh.NEWLINE,
                // fundinul
                Certh.C3, Certh.C42, Certh.C33, Certh.C39, Certh.C22, Certh.C42, Certh.C31, Certh.NEWLINE,
                // uzbadkhazaddumu
                Certh.C42, Certh.C17, Certh.C2, Certh.C48, Certh.C9, Certh.C18, Certh.C59, Certh.C48, Certh.C17,
                Certh.C48, Certh.C9, Certh.C9, Certh.C43, Certh.C6, Certh.C42, };

        return new RuneList<Certh>(myRunes);
    }
}
