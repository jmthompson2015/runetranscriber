package org.runetranscriber.core.viking.example;

import java.util.Arrays;
import java.util.List;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.ListUtilities;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.viking.AngloSaxonFontLetter;
import org.runetranscriber.core.viking.AngloSaxonRune;

/**
 * Provides an example for Anglo-Saxon runes from The Hobbit, Preface #3.
 */
public final class AngloSaxonExample7 extends AbstractExample<AngloSaxonRune>
{
    @Override
    protected List<String> createFontLetters()
    {
        final String[] myFontLetters = {
                // stand
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.TIW,
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.SPACE,
                // by
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.YR,
                AngloSaxonFontLetter.SPACE,
                // the
                AngloSaxonFontLetter.THORN,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // grey
                AngloSaxonFontLetter.GYFU,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.YR,
                AngloSaxonFontLetter.SPACE,
                // stone
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.TIW,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // hwen (when)
                AngloSaxonFontLetter.HAEGL,
                AngloSaxonFontLetter.WYNN,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.SPACE,
                // the
                AngloSaxonFontLetter.THORN,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // thrush
                AngloSaxonFontLetter.THORN,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.UR,
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.HAEGL,
                AngloSaxonFontLetter.SPACE,
                // knocks
                AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.SPACE,
                // and
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.NEWLINE,
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.SPACE,
                // the
                AngloSaxonFontLetter.THORN,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // setting
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.TIW,
                AngloSaxonFontLetter.TIW,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.ING,
                AngloSaxonFontLetter.SPACE,
                // sun
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.UR,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.SPACE,
                // with
                AngloSaxonFontLetter.WYNN,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.THORN,
                AngloSaxonFontLetter.SPACE,
                // the
                AngloSaxonFontLetter.THORN,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // last
                AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.AC,
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.TIW,
                AngloSaxonFontLetter.SPACE,
                // light
                AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.GYFU,
                AngloSaxonFontLetter.HAEGL,
                AngloSaxonFontLetter.TIW,
                AngloSaxonFontLetter.SPACE,
                // of
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.FEOH,
                AngloSaxonFontLetter.SPACE,
                // durins
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.UR,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.SPACE,
                // day
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.YR,
                AngloSaxonFontLetter.SPACE,
                AngloSaxonFontLetter.NEWLINE,
                // will
                AngloSaxonFontLetter.WYNN,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.SPACE,
                // shine
                AngloSaxonFontLetter.SIGEL, AngloSaxonFontLetter.HAEGL, AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // upon
                AngloSaxonFontLetter.UR, AngloSaxonFontLetter.PEORD, AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.SPACE,
                // the
                AngloSaxonFontLetter.THORN, AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // keyhole.
                AngloSaxonFontLetter.CEN, AngloSaxonFontLetter.EH, AngloSaxonFontLetter.YR, AngloSaxonFontLetter.HAEGL,
                AngloSaxonFontLetter.OS, AngloSaxonFontLetter.LAGU, AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.PERIOD, };

        return Arrays.asList(myFontLetters);
    }

    @Override
    protected List<String> createLanguageLetters()
    {
        final String text = "Stand by the grey stone when the thrush knocks an\n"
                + "d the setting sun with the last light of Durin's Day \n" + "will shine upon the keyhole.";

        return ListUtilities.convert(text);
    }

    /**
     * @return phonemes.
     */
    @Override
    protected List<Phoneme> createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // stand
                Phoneme.S, Phoneme.T, Phoneme.AE, Phoneme.N, Phoneme.D, Phoneme.SPACE,
                // by
                Phoneme.B, Phoneme.Y, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // grey
                Phoneme.G, Phoneme.R, Phoneme.E, Phoneme.Y, Phoneme.SPACE,
                // stone
                Phoneme.S, Phoneme.T, Phoneme.O, Phoneme.N, Phoneme.E, Phoneme.SPACE,
                // hwen (when)
                Phoneme.H, Phoneme.W, Phoneme.E, Phoneme.N, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // thrush
                Phoneme.TH, Phoneme.R, Phoneme.U, Phoneme.S, Phoneme.H, Phoneme.SPACE,
                // knocks
                Phoneme.K, Phoneme.N, Phoneme.O, Phoneme.K, Phoneme.K, Phoneme.S, Phoneme.SPACE,
                // and
                Phoneme.AE, Phoneme.N, Phoneme.NEWLINE, Phoneme.D, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // setting
                Phoneme.S, Phoneme.E, Phoneme.T, Phoneme.T, Phoneme.I, Phoneme.NG2, Phoneme.SPACE,
                // sun
                Phoneme.S, Phoneme.U, Phoneme.N, Phoneme.SPACE,
                // with
                Phoneme.W, Phoneme.I, Phoneme.TH, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // last
                Phoneme.L, Phoneme.A, Phoneme.S, Phoneme.T, Phoneme.SPACE,
                // light
                Phoneme.L, Phoneme.I, Phoneme.G, Phoneme.H, Phoneme.T, Phoneme.SPACE,
                // of
                Phoneme.O, Phoneme.F, Phoneme.SPACE,
                // durins
                Phoneme.D, Phoneme.U, Phoneme.R, Phoneme.I, Phoneme.N, Phoneme.S, Phoneme.SPACE,
                // day
                Phoneme.D, Phoneme.AE, Phoneme.Y, Phoneme.SPACE, Phoneme.NEWLINE,
                // will
                Phoneme.W, Phoneme.I, Phoneme.L, Phoneme.L, Phoneme.SPACE,
                // shine
                Phoneme.S, Phoneme.H, Phoneme.I, Phoneme.N, Phoneme.E, Phoneme.SPACE,
                // upon
                Phoneme.U, Phoneme.P, Phoneme.O, Phoneme.N, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // keyhole.
                Phoneme.K, Phoneme.E, Phoneme.Y, Phoneme.H, Phoneme.O, Phoneme.L, Phoneme.E, Phoneme.PERIOD, };

        return Phoneme.asList(myPhonemes);
    }

    /**
     * @return runes.
     */
    @Override
    protected List<AngloSaxonRune> createRunes()
    {
        final AngloSaxonRune[] myRunes = {
                // stand
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.TIW,
                AngloSaxonRune.AESC,
                AngloSaxonRune.NYD,
                AngloSaxonRune.DAEG,
                AngloSaxonRune.SPACE,
                // by
                AngloSaxonRune.BEORC,
                AngloSaxonRune.YR,
                AngloSaxonRune.SPACE,
                // the
                AngloSaxonRune.THORN,
                AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                // grey
                AngloSaxonRune.GYFU,
                AngloSaxonRune.RAD,
                AngloSaxonRune.EH,
                AngloSaxonRune.YR,
                AngloSaxonRune.SPACE,
                // stone
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.TIW,
                AngloSaxonRune.OS,
                AngloSaxonRune.NYD,
                AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                // hwen (when)
                AngloSaxonRune.HAEGL,
                AngloSaxonRune.WYNN,
                AngloSaxonRune.EH,
                AngloSaxonRune.NYD,
                AngloSaxonRune.SPACE,
                // the
                AngloSaxonRune.THORN,
                AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                // thrush
                AngloSaxonRune.THORN,
                AngloSaxonRune.RAD,
                AngloSaxonRune.UR,
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.HAEGL,
                AngloSaxonRune.SPACE,
                // knocks
                AngloSaxonRune.CEN,
                AngloSaxonRune.NYD,
                AngloSaxonRune.OS,
                AngloSaxonRune.CEN,
                AngloSaxonRune.CEN,
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.SPACE,
                // and
                AngloSaxonRune.AESC,
                AngloSaxonRune.NYD,
                AngloSaxonRune.NEWLINE,
                AngloSaxonRune.DAEG,
                AngloSaxonRune.SPACE,
                // the
                AngloSaxonRune.THORN,
                AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                // setting
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.EH,
                AngloSaxonRune.TIW,
                AngloSaxonRune.TIW,
                AngloSaxonRune.IS,
                AngloSaxonRune.ING,
                AngloSaxonRune.SPACE,
                // sun
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.UR,
                AngloSaxonRune.NYD,
                AngloSaxonRune.SPACE,
                // with
                AngloSaxonRune.WYNN,
                AngloSaxonRune.IS,
                AngloSaxonRune.THORN,
                AngloSaxonRune.SPACE,
                // the
                AngloSaxonRune.THORN,
                AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                // last
                AngloSaxonRune.LAGU,
                AngloSaxonRune.AC,
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.TIW,
                AngloSaxonRune.SPACE,
                // light
                AngloSaxonRune.LAGU,
                AngloSaxonRune.IS,
                AngloSaxonRune.GYFU,
                AngloSaxonRune.HAEGL,
                AngloSaxonRune.TIW,
                AngloSaxonRune.SPACE,
                // of
                AngloSaxonRune.OS,
                AngloSaxonRune.FEOH,
                AngloSaxonRune.SPACE,
                // durins
                AngloSaxonRune.DAEG, AngloSaxonRune.UR, AngloSaxonRune.RAD, AngloSaxonRune.IS,
                AngloSaxonRune.NYD,
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.SPACE,
                // day
                AngloSaxonRune.DAEG, AngloSaxonRune.AESC, AngloSaxonRune.YR,
                AngloSaxonRune.SPACE,
                AngloSaxonRune.NEWLINE,
                // will
                AngloSaxonRune.WYNN, AngloSaxonRune.IS, AngloSaxonRune.LAGU, AngloSaxonRune.LAGU,
                AngloSaxonRune.SPACE,
                // shine
                AngloSaxonRune.SIGEL, AngloSaxonRune.HAEGL, AngloSaxonRune.IS, AngloSaxonRune.NYD, AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                // upon
                AngloSaxonRune.UR, AngloSaxonRune.PEORD, AngloSaxonRune.OS, AngloSaxonRune.NYD, AngloSaxonRune.SPACE,
                // the
                AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // keyhole.
                AngloSaxonRune.CEN, AngloSaxonRune.EH, AngloSaxonRune.YR, AngloSaxonRune.HAEGL, AngloSaxonRune.OS,
                AngloSaxonRune.LAGU, AngloSaxonRune.EH, AngloSaxonRune.PERIOD, };

        return AngloSaxonRune.asList(myRunes);
    }
}
