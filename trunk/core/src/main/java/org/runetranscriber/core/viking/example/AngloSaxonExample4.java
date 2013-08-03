package org.runetranscriber.core.viking.example;

import java.util.Arrays;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.viking.AngloSaxonFontLetter;
import org.runetranscriber.core.viking.AngloSaxonRune;

/**
 * Provides an example for Anglo-Saxon runes from The Hobbit, Thror's Map #3.
 */
public final class AngloSaxonExample4 extends AbstractExample<AngloSaxonRune>
{
    @Override
    protected FontLetterList createFontLetters()
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
                AngloSaxonFontLetter.NEWLINE,
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
                AngloSaxonFontLetter.NEWLINE,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.SPACE,
                // and
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.NYD,
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
                AngloSaxonFontLetter.NEWLINE,
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
                AngloSaxonFontLetter.NEWLINE,
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
                // will
                AngloSaxonFontLetter.WYNN,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.SPACE,
                // shine
                AngloSaxonFontLetter.SIGEL, AngloSaxonFontLetter.HAEGL, AngloSaxonFontLetter.NEWLINE,
                AngloSaxonFontLetter.IS, AngloSaxonFontLetter.NYD,
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
                AngloSaxonFontLetter.PERIOD, AngloSaxonFontLetter.NEWLINE,
                // th.
                AngloSaxonFontLetter.THORN, AngloSaxonFontLetter.PERIOD, };

        return new FontLetterList(Arrays.asList(myFontLetters));
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "Stand by the grey st\none when the thrush kn\nocks and the setting s\nun with the last light \nof Durin's Day will sh\nine upon the keyhole. \nTh.";

        return new LanguageLetterList(text);
    }

    /**
     * @return phonemes.
     */
    @Override
    protected PhonemeList createPhonemes()
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
                Phoneme.S, Phoneme.T, Phoneme.NEWLINE, Phoneme.O, Phoneme.N, Phoneme.E, Phoneme.SPACE,
                // hwen (when)
                Phoneme.H, Phoneme.W, Phoneme.E, Phoneme.N, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // thrush
                Phoneme.TH, Phoneme.R, Phoneme.U, Phoneme.S, Phoneme.H, Phoneme.SPACE,
                // knocks
                Phoneme.K, Phoneme.N, Phoneme.NEWLINE, Phoneme.O, Phoneme.K, Phoneme.K, Phoneme.S, Phoneme.SPACE,
                // and
                Phoneme.AE, Phoneme.N, Phoneme.D, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // setting
                Phoneme.S, Phoneme.E, Phoneme.T, Phoneme.T, Phoneme.I, Phoneme.NG2, Phoneme.SPACE,
                // sun
                Phoneme.S, Phoneme.NEWLINE, Phoneme.U, Phoneme.N, Phoneme.SPACE,
                // with
                Phoneme.W, Phoneme.I, Phoneme.TH, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // last
                Phoneme.L, Phoneme.A, Phoneme.S, Phoneme.T, Phoneme.SPACE,
                // light
                Phoneme.L, Phoneme.I, Phoneme.G, Phoneme.H, Phoneme.T, Phoneme.SPACE, Phoneme.NEWLINE,
                // of
                Phoneme.O, Phoneme.F, Phoneme.SPACE,
                // durins
                Phoneme.D, Phoneme.U, Phoneme.R, Phoneme.I, Phoneme.N, Phoneme.S, Phoneme.SPACE,
                // day
                Phoneme.D, Phoneme.AE, Phoneme.Y, Phoneme.SPACE,
                // will
                Phoneme.W, Phoneme.I, Phoneme.L, Phoneme.L, Phoneme.SPACE,
                // shine
                Phoneme.S, Phoneme.H, Phoneme.NEWLINE, Phoneme.I, Phoneme.N, Phoneme.E, Phoneme.SPACE,
                // upon
                Phoneme.U, Phoneme.P, Phoneme.O, Phoneme.N, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // keyhole.
                Phoneme.K, Phoneme.E, Phoneme.Y, Phoneme.H, Phoneme.O, Phoneme.L, Phoneme.E, Phoneme.PERIOD,
                Phoneme.NEWLINE,
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
                AngloSaxonRune.NEWLINE,
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
                AngloSaxonRune.NEWLINE,
                AngloSaxonRune.OS,
                AngloSaxonRune.CEN,
                AngloSaxonRune.CEN,
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.SPACE,
                // and
                AngloSaxonRune.AESC,
                AngloSaxonRune.NYD,
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
                AngloSaxonRune.NEWLINE,
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
                AngloSaxonRune.LAGU, AngloSaxonRune.AC,
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.TIW,
                AngloSaxonRune.SPACE,
                // light
                AngloSaxonRune.LAGU, AngloSaxonRune.IS, AngloSaxonRune.GYFU, AngloSaxonRune.HAEGL,
                AngloSaxonRune.TIW,
                AngloSaxonRune.SPACE,
                AngloSaxonRune.NEWLINE,
                // of
                AngloSaxonRune.OS,
                AngloSaxonRune.FEOH,
                AngloSaxonRune.SPACE,
                // durins
                AngloSaxonRune.DAEG, AngloSaxonRune.UR, AngloSaxonRune.RAD, AngloSaxonRune.IS, AngloSaxonRune.NYD,
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.SPACE,
                // day
                AngloSaxonRune.DAEG, AngloSaxonRune.AESC, AngloSaxonRune.YR,
                AngloSaxonRune.SPACE,
                // will
                AngloSaxonRune.WYNN, AngloSaxonRune.IS, AngloSaxonRune.LAGU, AngloSaxonRune.LAGU,
                AngloSaxonRune.SPACE,
                // shine
                AngloSaxonRune.SIGEL, AngloSaxonRune.HAEGL, AngloSaxonRune.NEWLINE, AngloSaxonRune.IS,
                AngloSaxonRune.NYD, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // upon
                AngloSaxonRune.UR, AngloSaxonRune.PEORD, AngloSaxonRune.OS, AngloSaxonRune.NYD, AngloSaxonRune.SPACE,
                // the
                AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // keyhole.
                AngloSaxonRune.CEN, AngloSaxonRune.EH, AngloSaxonRune.YR, AngloSaxonRune.HAEGL, AngloSaxonRune.OS,
                AngloSaxonRune.LAGU, AngloSaxonRune.EH, AngloSaxonRune.PERIOD, AngloSaxonRune.NEWLINE,
                // th.
                AngloSaxonRune.THORN, AngloSaxonRune.PERIOD, };

        return new RuneList<AngloSaxonRune>(myRunes);
    }
}
