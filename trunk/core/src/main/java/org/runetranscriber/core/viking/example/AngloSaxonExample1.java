package org.runetranscriber.core.viking.example;

import java.util.Arrays;
import java.util.List;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.ListUtilities;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.viking.AngloSaxonFontLetter;
import org.runetranscriber.core.viking.AngloSaxonRune;

/**
 * Provides an example for Anglo-Saxon runes from The Hobbit, Title Pages 1-2.
 */
public final class AngloSaxonExample1 extends AbstractExample<AngloSaxonRune>
{
    @Override
    protected List<String> createFontLetters()
    {
        final String[] myFontLetters = {
                // Top 1 line 1
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
                AngloSaxonFontLetter.COMMA,
                // or
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.COMMA,
                // there
                AngloSaxonFontLetter.THORN,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // and
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.SPACE,
                AngloSaxonFontLetter.NEWLINE,

                // Top 2 line 1
                // back
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.SPACE,
                // again
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.GYFU,
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.PERIOD,
                // being
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.ING,
                AngloSaxonFontLetter.SPACE,
                // the
                AngloSaxonFontLetter.THORN,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                AngloSaxonFontLetter.NEWLINE,

                // Top 1 line 2
                // record
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.SPACE,
                // of
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.FEOH,
                AngloSaxonFontLetter.SPACE,
                // a
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.SPACE,
                // years
                AngloSaxonFontLetter.YR,
                AngloSaxonFontLetter.EAR,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.SPACE,
                // journey
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.UR,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.YR,
                AngloSaxonFontLetter.SPACE,
                AngloSaxonFontLetter.NEWLINE,

                // Top 2 line 2
                // made
                AngloSaxonFontLetter.MANN,
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // by
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.YR,
                AngloSaxonFontLetter.SPACE,
                // bilbo
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.SPACE,
                // baggins
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.GYFU,
                AngloSaxonFontLetter.GYFU,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.SPACE,
                // of
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.FEOH,
                AngloSaxonFontLetter.SPACE,
                AngloSaxonFontLetter.NEWLINE,

                // Bottom 1 line 1
                // hobbiton
                AngloSaxonFontLetter.HAEGL,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.TIW,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.PERIOD,
                // compiled
                AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.MANN,
                AngloSaxonFontLetter.PEORD,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.SPACE,
                // from
                AngloSaxonFontLetter.FEOH,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.MANN,
                AngloSaxonFontLetter.SPACE,
                // his
                AngloSaxonFontLetter.HAEGL,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.SPACE,
                AngloSaxonFontLetter.NEWLINE,

                // Bottom 2 line 1
                // memoirs
                AngloSaxonFontLetter.MANN,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.MANN,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.SPACE,
                // by
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.YR,
                AngloSaxonFontLetter.SPACE,
                // j r r
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.SPACE,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.SPACE,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.SPACE,
                // tolkien.
                AngloSaxonFontLetter.TIW,
                AngloSaxonFontLetter.OS,
                AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.CEN,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.PERIOD,
                AngloSaxonFontLetter.NEWLINE,

                // Bottom 1 line 2
                // and
                AngloSaxonFontLetter.AESC,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.SPACE,
                // published
                AngloSaxonFontLetter.PEORD,
                AngloSaxonFontLetter.UR,
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.HAEGL,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.SPACE,
                // by
                AngloSaxonFontLetter.BEORC,
                AngloSaxonFontLetter.YR,
                AngloSaxonFontLetter.SPACE,
                // george
                AngloSaxonFontLetter.GYFU,
                AngloSaxonFontLetter.EOH,
                AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.GYFU,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                AngloSaxonFontLetter.NEWLINE,

                // Bottom 2 line 2
                // allen
                AngloSaxonFontLetter.AESC, AngloSaxonFontLetter.LAGU, AngloSaxonFontLetter.LAGU,
                AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.SPACE,
                // and
                AngloSaxonFontLetter.AESC, AngloSaxonFontLetter.NYD,
                AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.SPACE,
                // unwin
                AngloSaxonFontLetter.UR, AngloSaxonFontLetter.NYD, AngloSaxonFontLetter.WYNN, AngloSaxonFontLetter.IS,
                AngloSaxonFontLetter.NYD, AngloSaxonFontLetter.SPACE,
                // ltd.
                AngloSaxonFontLetter.LAGU, AngloSaxonFontLetter.TIW, AngloSaxonFontLetter.DAEG,
                AngloSaxonFontLetter.PERIOD, };

        return Arrays.asList(myFontLetters);
    }

    @Override
    protected List<String> createLanguageLetters()
    {
        final String text =
        // Top 1 line 1
        "The hobbit, or, there and \n"
        // Top 2 line 1
                + "back again. Being the \n"
                // Top 1 line 2
                + "record of a year's journey \n"
                // Top 2 line 2
                + "made by Bilbo Baggins of \n"
                // Bottom 1 line 1
                + "Hobbiton. Compiled from his \n"
                // Bottom 2 line 1
                + "memoirs by J R R Tolkien. \n"
                // Bottom 1 line 2
                + "And published by George \n"
                // Bottom 2 line 2
                + "Allen and Unwin Ltd.";

        return ListUtilities.convert(text);
    }

    /**
     * @return phonemes.
     */
    @Override
    protected List<Phoneme> createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // Top 1 line 1
                // the
                Phoneme.TH,
                Phoneme.E,
                Phoneme.SPACE,
                // hobbit
                Phoneme.H, Phoneme.O, Phoneme.B, Phoneme.B, Phoneme.I,
                Phoneme.T,
                Phoneme.COMMA,
                // or
                Phoneme.O,
                Phoneme.R,
                Phoneme.COMMA,
                // there
                Phoneme.TH, Phoneme.E,
                Phoneme.R,
                Phoneme.E,
                Phoneme.SPACE,
                // and
                Phoneme.AE,
                Phoneme.N,
                Phoneme.D,
                Phoneme.SPACE,
                Phoneme.NEWLINE,

                // Top 2 line 1
                // back
                Phoneme.B, Phoneme.AE, Phoneme.K,
                Phoneme.K,
                Phoneme.SPACE,
                // again
                Phoneme.AE, Phoneme.G, Phoneme.AE, Phoneme.I,
                Phoneme.N,
                Phoneme.PERIOD,
                // being
                Phoneme.B,
                Phoneme.E,
                Phoneme.I,
                Phoneme.NG2,
                Phoneme.SPACE,
                // the
                Phoneme.TH,
                Phoneme.E,
                Phoneme.SPACE,
                Phoneme.NEWLINE,

                // Top 1 line 2
                // record
                Phoneme.R, Phoneme.E, Phoneme.K, Phoneme.O,
                Phoneme.R,
                Phoneme.D,
                Phoneme.SPACE,
                // of
                Phoneme.O,
                Phoneme.F,
                Phoneme.SPACE,
                // a
                Phoneme.AE,
                Phoneme.SPACE,
                // years
                Phoneme.Y, Phoneme.EA, Phoneme.R,
                Phoneme.S,
                Phoneme.SPACE,
                // journey
                Phoneme.J, Phoneme.O, Phoneme.U, Phoneme.R, Phoneme.N,
                Phoneme.E,
                Phoneme.Y,
                Phoneme.SPACE,
                Phoneme.NEWLINE,

                // Top 2 line 2
                // made
                Phoneme.M, Phoneme.AE, Phoneme.D, Phoneme.E,
                Phoneme.SPACE,
                // by
                Phoneme.B, Phoneme.Y,
                Phoneme.SPACE,
                // bilbo
                Phoneme.B, Phoneme.I, Phoneme.L, Phoneme.B, Phoneme.O,
                Phoneme.SPACE,
                // baggins
                Phoneme.B, Phoneme.AE, Phoneme.G, Phoneme.G, Phoneme.I, Phoneme.N, Phoneme.S,
                Phoneme.SPACE,
                // of
                Phoneme.O,
                Phoneme.F,
                Phoneme.SPACE,
                Phoneme.NEWLINE,

                // Bottom 1 line 1
                // hobbiton.
                Phoneme.H, Phoneme.O, Phoneme.B, Phoneme.B, Phoneme.I, Phoneme.T, Phoneme.O, Phoneme.N,
                Phoneme.PERIOD,
                // compiled
                Phoneme.K, Phoneme.O, Phoneme.M, Phoneme.P, Phoneme.I, Phoneme.L, Phoneme.E, Phoneme.D,
                Phoneme.SPACE,
                // from
                Phoneme.F, Phoneme.R, Phoneme.O, Phoneme.M,
                Phoneme.SPACE,
                // his
                Phoneme.H, Phoneme.I,
                Phoneme.S,
                Phoneme.SPACE,
                Phoneme.NEWLINE,

                // Bottom 2 line 1
                // memoirs
                Phoneme.M, Phoneme.E, Phoneme.M, Phoneme.O, Phoneme.I, Phoneme.R, Phoneme.S,
                Phoneme.SPACE,
                // by
                Phoneme.B, Phoneme.Y,
                Phoneme.SPACE,
                // j r r
                Phoneme.J, Phoneme.SPACE, Phoneme.R, Phoneme.SPACE, Phoneme.R,
                Phoneme.SPACE,
                // tolkien.
                Phoneme.T, Phoneme.O, Phoneme.L, Phoneme.K, Phoneme.I, Phoneme.E, Phoneme.N,
                Phoneme.PERIOD,
                Phoneme.NEWLINE,

                // Bottom 1 line 2
                // and
                Phoneme.AE, Phoneme.N, Phoneme.D, Phoneme.SPACE,
                // published
                Phoneme.P, Phoneme.U, Phoneme.B, Phoneme.L, Phoneme.I, Phoneme.S, Phoneme.H, Phoneme.E, Phoneme.D,
                Phoneme.SPACE,
                // by
                Phoneme.B, Phoneme.Y, Phoneme.SPACE,
                // george
                Phoneme.G, Phoneme.EO, Phoneme.R, Phoneme.G, Phoneme.E, Phoneme.SPACE, Phoneme.NEWLINE,

                // Bottom 2 line 2
                // allen
                Phoneme.AE, Phoneme.L, Phoneme.L, Phoneme.E, Phoneme.N, Phoneme.SPACE,
                // and
                Phoneme.AE, Phoneme.N, Phoneme.D, Phoneme.SPACE,
                // unwin
                Phoneme.U, Phoneme.N, Phoneme.W, Phoneme.I, Phoneme.N, Phoneme.SPACE,
                // ltd.
                Phoneme.L, Phoneme.T, Phoneme.D, Phoneme.PERIOD,

        };

        return Phoneme.asList(myPhonemes);
    }

    /**
     * @return runes.
     */
    @Override
    protected List<AngloSaxonRune> createRunes()
    {
        final AngloSaxonRune[] myRunes = {
                // Top 1 line 1
                // the
                AngloSaxonRune.THORN,
                AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                // hobbit
                AngloSaxonRune.HAEGL,
                AngloSaxonRune.OS,
                AngloSaxonRune.BEORC,
                AngloSaxonRune.BEORC,
                AngloSaxonRune.IS,
                AngloSaxonRune.TIW,
                AngloSaxonRune.COMMA,
                // or
                AngloSaxonRune.OS,
                AngloSaxonRune.RAD,
                AngloSaxonRune.COMMA,
                // there
                AngloSaxonRune.THORN,
                AngloSaxonRune.EH,
                AngloSaxonRune.RAD,
                AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                // and
                AngloSaxonRune.AESC,
                AngloSaxonRune.NYD,
                AngloSaxonRune.DAEG,
                AngloSaxonRune.SPACE,
                AngloSaxonRune.NEWLINE,

                // Top 2 line 1
                // back
                AngloSaxonRune.BEORC,
                AngloSaxonRune.AESC,
                AngloSaxonRune.CEN,
                AngloSaxonRune.CEN,
                AngloSaxonRune.SPACE,
                // again
                AngloSaxonRune.AESC,
                AngloSaxonRune.GYFU,
                AngloSaxonRune.AESC,
                AngloSaxonRune.IS,
                AngloSaxonRune.NYD,
                AngloSaxonRune.PERIOD,
                // being
                AngloSaxonRune.BEORC,
                AngloSaxonRune.EH,
                AngloSaxonRune.IS,
                AngloSaxonRune.ING,
                AngloSaxonRune.SPACE,
                // the
                AngloSaxonRune.THORN,
                AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                AngloSaxonRune.NEWLINE,

                // Top 1 line 2
                // record
                AngloSaxonRune.RAD,
                AngloSaxonRune.EH,
                AngloSaxonRune.CEN,
                AngloSaxonRune.OS,
                AngloSaxonRune.RAD,
                AngloSaxonRune.DAEG,
                AngloSaxonRune.SPACE,
                // of
                AngloSaxonRune.OS,
                AngloSaxonRune.FEOH,
                AngloSaxonRune.SPACE,
                // a
                AngloSaxonRune.AESC,
                AngloSaxonRune.SPACE,
                // year's
                AngloSaxonRune.YR,
                AngloSaxonRune.EAR,
                AngloSaxonRune.RAD,
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.SPACE,
                // journey
                AngloSaxonRune.IS,
                AngloSaxonRune.OS,
                AngloSaxonRune.UR,
                AngloSaxonRune.RAD,
                AngloSaxonRune.NYD,
                AngloSaxonRune.EH,
                AngloSaxonRune.YR,
                AngloSaxonRune.SPACE,
                AngloSaxonRune.NEWLINE,

                // Top 2 line 2
                // made
                AngloSaxonRune.MANN,
                AngloSaxonRune.AESC,
                AngloSaxonRune.DAEG,
                AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                // by
                AngloSaxonRune.BEORC,
                AngloSaxonRune.YR,
                AngloSaxonRune.SPACE,
                // bilbo
                AngloSaxonRune.BEORC,
                AngloSaxonRune.IS,
                AngloSaxonRune.LAGU,
                AngloSaxonRune.BEORC,
                AngloSaxonRune.OS,
                AngloSaxonRune.SPACE,
                // baggins
                AngloSaxonRune.BEORC,
                AngloSaxonRune.AESC,
                AngloSaxonRune.GYFU,
                AngloSaxonRune.GYFU,
                AngloSaxonRune.IS,
                AngloSaxonRune.NYD,
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.SPACE,
                // of
                AngloSaxonRune.OS,
                AngloSaxonRune.FEOH,
                AngloSaxonRune.SPACE,
                AngloSaxonRune.NEWLINE,

                // Bottom 1 line 1
                // hobbiton
                AngloSaxonRune.HAEGL,
                AngloSaxonRune.OS,
                AngloSaxonRune.BEORC,
                AngloSaxonRune.BEORC,
                AngloSaxonRune.IS,
                AngloSaxonRune.TIW,
                AngloSaxonRune.OS,
                AngloSaxonRune.NYD,
                AngloSaxonRune.PERIOD,
                // compiled
                AngloSaxonRune.CEN,
                AngloSaxonRune.OS,
                AngloSaxonRune.MANN,
                AngloSaxonRune.PEORD,
                AngloSaxonRune.IS,
                AngloSaxonRune.LAGU,
                AngloSaxonRune.EH,
                AngloSaxonRune.DAEG,
                AngloSaxonRune.SPACE,
                // from
                AngloSaxonRune.FEOH,
                AngloSaxonRune.RAD,
                AngloSaxonRune.OS,
                AngloSaxonRune.MANN,
                AngloSaxonRune.SPACE,
                // his
                AngloSaxonRune.HAEGL,
                AngloSaxonRune.IS,
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.SPACE,
                AngloSaxonRune.NEWLINE,

                // Bottom 2 line 1
                // memoirs
                AngloSaxonRune.MANN,
                AngloSaxonRune.EH,
                AngloSaxonRune.MANN,
                AngloSaxonRune.OS,
                AngloSaxonRune.IS,
                AngloSaxonRune.RAD,
                AngloSaxonRune.SIGEL,
                AngloSaxonRune.SPACE,
                // by
                AngloSaxonRune.BEORC,
                AngloSaxonRune.YR,
                AngloSaxonRune.SPACE,
                // j r r
                AngloSaxonRune.IS,
                AngloSaxonRune.SPACE,
                AngloSaxonRune.RAD,
                AngloSaxonRune.SPACE,
                AngloSaxonRune.RAD,
                AngloSaxonRune.SPACE,
                // tolkien.
                AngloSaxonRune.TIW,
                AngloSaxonRune.OS,
                AngloSaxonRune.LAGU,
                AngloSaxonRune.CEN,
                AngloSaxonRune.IS,
                AngloSaxonRune.EH,
                AngloSaxonRune.NYD,
                AngloSaxonRune.PERIOD,
                AngloSaxonRune.NEWLINE,

                // Bottom 1 line 2
                // and
                AngloSaxonRune.AESC,
                AngloSaxonRune.NYD,
                AngloSaxonRune.DAEG,
                AngloSaxonRune.SPACE,
                // published
                AngloSaxonRune.PEORD, AngloSaxonRune.UR, AngloSaxonRune.BEORC, AngloSaxonRune.LAGU, AngloSaxonRune.IS,
                AngloSaxonRune.SIGEL, AngloSaxonRune.HAEGL,
                AngloSaxonRune.EH,
                AngloSaxonRune.DAEG,
                AngloSaxonRune.SPACE,
                // by
                AngloSaxonRune.BEORC,
                AngloSaxonRune.YR,
                AngloSaxonRune.SPACE,
                // george
                AngloSaxonRune.GYFU, AngloSaxonRune.EOH, AngloSaxonRune.RAD,
                AngloSaxonRune.GYFU,
                AngloSaxonRune.EH,
                AngloSaxonRune.SPACE,
                AngloSaxonRune.NEWLINE,

                // Bottom 2 line 2
                // allen
                AngloSaxonRune.AESC, AngloSaxonRune.LAGU, AngloSaxonRune.LAGU, AngloSaxonRune.EH, AngloSaxonRune.NYD,
                AngloSaxonRune.SPACE,
                // and
                AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                // unwin
                AngloSaxonRune.UR, AngloSaxonRune.NYD, AngloSaxonRune.WYNN, AngloSaxonRune.IS, AngloSaxonRune.NYD,
                AngloSaxonRune.SPACE,
                // ltd.
                AngloSaxonRune.LAGU, AngloSaxonRune.TIW, AngloSaxonRune.DAEG, AngloSaxonRune.PERIOD, };

        return AngloSaxonRune.asList(myRunes);
    }
}
