package org.runetranscriber.core.viking.example;

import java.util.Arrays;
import java.util.List;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.ListUtilities;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.viking.AngloSaxonFontLetter;
import org.runetranscriber.core.viking.AngloSaxonRune;

/**
 * Provides an example for Anglo-Saxon runes from The Hobbit, Thror's Map #2 by pointing finger.
 */
public final class AngloSaxonExample3 extends AbstractExample<AngloSaxonRune>
{
    @Override
    protected List<String> createFontLetters()
    {
        final String[] myFontLetters = {
                // five
                AngloSaxonFontLetter.FEOH,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.UR,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.NEWLINE,
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
                AngloSaxonFontLetter.NEWLINE,
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
                AngloSaxonFontLetter.NEWLINE,
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
                AngloSaxonFontLetter.NEWLINE,
                // walk
                AngloSaxonFontLetter.WYNN, AngloSaxonFontLetter.OS, AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.SPACE,
                // abreast.
                AngloSaxonFontLetter.AESC, AngloSaxonFontLetter.BEORC, AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.EH, AngloSaxonFontLetter.NEWLINE, AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.SIGEL, AngloSaxonFontLetter.TIW, AngloSaxonFontLetter.PERIOD,
                // th.
                AngloSaxonFontLetter.THORN, AngloSaxonFontLetter.PERIOD,
                // th.
                AngloSaxonFontLetter.THORN, AngloSaxonFontLetter.PERIOD, };

        return Arrays.asList(myFontLetters);
    }

    @Override
    protected List<String> createLanguageLetters()
    {
        final String text = "Five\nfeet high\nthe door an\nd three may\nwalk abre\nast. Th. Th.";

        return ListUtilities.convert(text);
    }

    /**
     * @return phonemes.
     */
    @Override
    protected List<Phoneme> createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // five
                Phoneme.F, Phoneme.I, Phoneme.V, Phoneme.E, Phoneme.NEWLINE,
                // feet
                Phoneme.F, Phoneme.OE, Phoneme.T, Phoneme.SPACE,
                // high
                Phoneme.H, Phoneme.I, Phoneme.G, Phoneme.H, Phoneme.NEWLINE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // door
                Phoneme.D, Phoneme.O, Phoneme.R, Phoneme.SPACE,
                // and
                Phoneme.AE, Phoneme.N, Phoneme.NEWLINE, Phoneme.D, Phoneme.SPACE,
                // three
                Phoneme.TH, Phoneme.R, Phoneme.OE, Phoneme.SPACE,
                // may
                Phoneme.M, Phoneme.AE, Phoneme.Y, Phoneme.NEWLINE,
                // walk
                Phoneme.W, Phoneme.O, Phoneme.L, Phoneme.K, Phoneme.SPACE,
                // abreast.
                Phoneme.AE, Phoneme.B, Phoneme.R, Phoneme.E, Phoneme.NEWLINE, Phoneme.AE, Phoneme.S, Phoneme.T,
                Phoneme.PERIOD,
                // th.
                Phoneme.TH, Phoneme.PERIOD,
                // th.
                Phoneme.TH, Phoneme.PERIOD, };

        return Phoneme.asList(myPhonemes);
    }

    /**
     * @return runes.
     */
    @Override
    protected List<AngloSaxonRune> createRunes()
    {
        final AngloSaxonRune[] myRunes = {
                // five
                AngloSaxonRune.FEOH, AngloSaxonRune.IS,
                AngloSaxonRune.UR,
                AngloSaxonRune.EH,
                AngloSaxonRune.NEWLINE,
                // feet
                AngloSaxonRune.FEOH,
                AngloSaxonRune.EOEL,
                AngloSaxonRune.TIW,
                AngloSaxonRune.SPACE,
                // high
                AngloSaxonRune.HAEGL, AngloSaxonRune.IS,
                AngloSaxonRune.GYFU,
                AngloSaxonRune.HAEGL,
                AngloSaxonRune.NEWLINE,
                // the
                AngloSaxonRune.THORN,
                AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                // door
                AngloSaxonRune.DAEG, AngloSaxonRune.OS,
                AngloSaxonRune.RAD,
                AngloSaxonRune.SPACE,
                // and
                AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.NEWLINE,
                AngloSaxonRune.DAEG,
                AngloSaxonRune.SPACE,
                // three
                AngloSaxonRune.THORN, AngloSaxonRune.RAD, AngloSaxonRune.EOEL,
                AngloSaxonRune.SPACE,
                // may
                AngloSaxonRune.MANN, AngloSaxonRune.AESC, AngloSaxonRune.YR,
                AngloSaxonRune.NEWLINE,
                // walk
                AngloSaxonRune.WYNN, AngloSaxonRune.OS, AngloSaxonRune.LAGU, AngloSaxonRune.CEN,
                AngloSaxonRune.SPACE,
                // abreast.
                AngloSaxonRune.AESC, AngloSaxonRune.BEORC, AngloSaxonRune.RAD, AngloSaxonRune.EH,
                AngloSaxonRune.NEWLINE, AngloSaxonRune.AESC, AngloSaxonRune.SIGEL, AngloSaxonRune.TIW,
                AngloSaxonRune.PERIOD,
                // th.
                AngloSaxonRune.THORN, AngloSaxonRune.PERIOD,
                // th.
                AngloSaxonRune.THORN, AngloSaxonRune.PERIOD, };

        return AngloSaxonRune.asList(myRunes);
    }
}
