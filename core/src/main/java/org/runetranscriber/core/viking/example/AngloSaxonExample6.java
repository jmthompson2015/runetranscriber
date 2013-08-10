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
 * Provides an example for Anglo-Saxon runes from The Hobbit, Preface #2.
 */
public final class AngloSaxonExample6 extends AbstractExample<AngloSaxonRune, AngloSaxonFontLetter>
{
    @Override
    protected FontLetterList<AngloSaxonFontLetter> createFontLetters()
    {
        final AngloSaxonFontLetter[] myFontLetters = {
                // five
                AngloSaxonFontLetter.FEOH,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.UR,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // feet
                AngloSaxonFontLetter.FEOH,
                AngloSaxonFontLetter.EOEL,
                AngloSaxonFontLetter.TIW,
                AngloSaxonFontLetter.SPACE,
                // high
                AngloSaxonFontLetter.HAEGL,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.GYFU,
                AngloSaxonFontLetter.HAEGL,
                AngloSaxonFontLetter.SPACE,
                // the
                AngloSaxonFontLetter.THORN,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // door
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.SPACE,
                // and
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.SPACE,
                // three
                AngloSaxonFontLetter.THORN,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.EOEL,
                AngloSaxonFontLetter.SPACE,
                // may
                AngloSaxonFontLetter.MANN,
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.YR,
                AngloSaxonFontLetter.SPACE,
                // walk
                AngloSaxonFontLetter.WYNN, AngloSaxonFontLetter.OS, AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.SPACE,
                // abreast.
                AngloSaxonFontLetter.AESC, AngloSaxonFontLetter.BEORC, AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.EH, AngloSaxonFontLetter.AESC, AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.TIW, AngloSaxonFontLetter.PERIOD,
                // th.
                AngloSaxonFontLetter.THORN, AngloSaxonFontLetter.PERIOD,
                // th.
                AngloSaxonFontLetter.THORN, AngloSaxonFontLetter.PERIOD, };

        return new FontLetterList<AngloSaxonFontLetter>(myFontLetters);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "Five feet high the door and three may walk abreast. Th. Th.";

        return new LanguageLetterList(text);
    }

    /**
     * @return phonemes.
     */
    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // five
                Phoneme.F, Phoneme.I, Phoneme.V, Phoneme.E, Phoneme.SPACE,
                // feet
                Phoneme.F, Phoneme.OE, Phoneme.T, Phoneme.SPACE,
                // high
                Phoneme.H, Phoneme.I, Phoneme.G, Phoneme.H, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // door
                Phoneme.D, Phoneme.O, Phoneme.R, Phoneme.SPACE,
                // and
                Phoneme.AE, Phoneme.N, Phoneme.D, Phoneme.SPACE,
                // three
                Phoneme.TH, Phoneme.R, Phoneme.OE, Phoneme.SPACE,
                // may
                Phoneme.M, Phoneme.AE, Phoneme.Y, Phoneme.SPACE,
                // walk
                Phoneme.W, Phoneme.O, Phoneme.L, Phoneme.K, Phoneme.SPACE,
                // abreast.
                Phoneme.AE, Phoneme.B, Phoneme.R, Phoneme.E, Phoneme.AE, Phoneme.S, Phoneme.T, Phoneme.PERIOD,
                // th.
                Phoneme.TH, Phoneme.PERIOD,
                // th.
                Phoneme.TH, Phoneme.PERIOD, };

        return new PhonemeList(myPhonemes);
    }

    /**
     * @return runes.
     */
    @Override
    protected RuneList<AngloSaxonRune> createRunes()
    {
        final AngloSaxonRune[] myRunes = {
                // five
                AngloSaxonRune.FEOH, AngloSaxonRune.IS, AngloSaxonRune.UR, AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                // feet
                AngloSaxonRune.FEOH, AngloSaxonRune.EOEL, AngloSaxonRune.TIW,
                AngloSaxonRune.SPACE,
                // high
                AngloSaxonRune.HAEGL, AngloSaxonRune.IS, AngloSaxonRune.GYFU, AngloSaxonRune.HAEGL,
                AngloSaxonRune.SPACE,
                // the
                AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // door
                AngloSaxonRune.DAEG, AngloSaxonRune.OS, AngloSaxonRune.RAD, AngloSaxonRune.SPACE,
                // and
                AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                // three
                AngloSaxonRune.THORN, AngloSaxonRune.RAD, AngloSaxonRune.EOEL, AngloSaxonRune.SPACE,
                // may
                AngloSaxonRune.MANN, AngloSaxonRune.AESC, AngloSaxonRune.YR, AngloSaxonRune.SPACE,
                // walk
                AngloSaxonRune.WYNN, AngloSaxonRune.OS, AngloSaxonRune.LAGU, AngloSaxonRune.CEN, AngloSaxonRune.SPACE,
                // abreast.
                AngloSaxonRune.AESC, AngloSaxonRune.BEORC, AngloSaxonRune.RAD, AngloSaxonRune.EH, AngloSaxonRune.AESC,
                AngloSaxonRune.SIGEL, AngloSaxonRune.TIW, AngloSaxonRune.PERIOD,
                // th.
                AngloSaxonRune.THORN, AngloSaxonRune.PERIOD,
                // th.
                AngloSaxonRune.THORN, AngloSaxonRune.PERIOD, };

        return new RuneList<AngloSaxonRune>(myRunes);
    }
}
