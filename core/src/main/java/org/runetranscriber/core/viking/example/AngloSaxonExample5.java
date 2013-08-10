package org.runetranscriber.core.viking.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.viking.AngloSaxonFontLetter;
import org.runetranscriber.core.viking.AngloSaxonRune;

/**
 * Provides an example for Anglo-Saxon runes from The Hobbit, Preface #1.
 */
public final class AngloSaxonExample5 extends AbstractExample<AngloSaxonRune, AngloSaxonFontLetter>
{
    @Override
    protected FontLetterList<AngloSaxonFontLetter> createFontLetters()
    {
        final AngloSaxonFontLetter[] myFontLetters = {
                // the
                AngloSaxonFontLetter.THORN,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // hobbit
                AngloSaxonFontLetter.HAEGL,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.TIW,
                AngloSaxonFontLetter.NEWLINE,
                // or
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.NEWLINE,
                // there
                AngloSaxonFontLetter.THORN, AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // and
                AngloSaxonFontLetter.AESC, AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.SPACE,
                // back
                AngloSaxonFontLetter.BEORC, AngloSaxonFontLetter.AESC, AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.CEN, AngloSaxonFontLetter.SPACE,
                // again
                AngloSaxonFontLetter.AESC, AngloSaxonFontLetter.GYFU, AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.IS, AngloSaxonFontLetter.NYD, };

        return new FontLetterList<AngloSaxonFontLetter>(myFontLetters);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "The hobbit\nor\nthere and back again";

        return new LanguageLetterList(text);
    }

    /**
     * @return phonemes.
     */
    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // The
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // hobbit
                Phoneme.H, Phoneme.O, Phoneme.B, Phoneme.B, Phoneme.I, Phoneme.T, Phoneme.NEWLINE,
                // or
                Phoneme.O, Phoneme.R, Phoneme.NEWLINE,
                // there
                Phoneme.TH, Phoneme.E, Phoneme.R, Phoneme.E, Phoneme.SPACE,
                // and
                Phoneme.AE, Phoneme.N, Phoneme.D, Phoneme.SPACE,
                // back
                Phoneme.B, Phoneme.AE, Phoneme.K, Phoneme.K, Phoneme.SPACE,
                // again
                Phoneme.AE, Phoneme.G, Phoneme.AE, Phoneme.I, Phoneme.N, };

        return new PhonemeList(myPhonemes);
    }

    /**
     * @return runes.
     */
    @Override
    protected RuneList<AngloSaxonRune> createRunes()
    {
        final AngloSaxonRune[] myRunes = {
                // the
                AngloSaxonRune.THORN, AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                // hobbit
                AngloSaxonRune.HAEGL, AngloSaxonRune.OS, AngloSaxonRune.BEORC, AngloSaxonRune.BEORC, AngloSaxonRune.IS,
                AngloSaxonRune.TIW, AngloSaxonRune.NEWLINE,
                // or
                AngloSaxonRune.OS, AngloSaxonRune.RAD, AngloSaxonRune.NEWLINE,
                // there
                AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.RAD, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // and
                AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                // back
                AngloSaxonRune.BEORC, AngloSaxonRune.AESC, AngloSaxonRune.CEN, AngloSaxonRune.CEN,
                AngloSaxonRune.SPACE,
                // again
                AngloSaxonRune.AESC, AngloSaxonRune.GYFU, AngloSaxonRune.AESC, AngloSaxonRune.IS, AngloSaxonRune.NYD, };

        return new RuneList<AngloSaxonRune>(myRunes);
    }
}
