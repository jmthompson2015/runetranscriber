package org.runetranscriber.core.tengwar.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.tengwar.TengwaFontLetter;
import org.runetranscriber.core.tengwar.TengwaRune;

/**
 * Provides an example of Tengwar runes from The Silmarillion, title page top.
 */
public final class TengwarExample3 extends AbstractExample<TengwaRune, TengwaFontLetter>
{
    @Override
    protected FontLetterList<TengwaFontLetter> createFontLetters()
    {
        final TengwaFontLetter[] answer = {
                // Line 1
                // the
                TengwaFontLetter.THE,
                TengwaFontLetter.SPACE,
                // tales
                TengwaFontLetter.TINCO,
                TengwaFontLetter.LAMBE,
                TengwaFontLetter.THREE_DOTS2,
                TengwaFontLetter.UNDER_DOT2,
                TengwaFontLetter.SILME,
                TengwaFontLetter.SPACE,
                // of
                TengwaFontLetter.OF,
                TengwaFontLetter.SPACE,
                // the
                TengwaFontLetter.THE,
                TengwaFontLetter.SPACE,
                // first
                TengwaFontLetter.FORMEN,
                TengwaFontLetter.ORE,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SILME,
                TengwaFontLetter.TINCO,
                TengwaFontLetter.SPACE,
                // age
                TengwaFontLetter.ANGA,
                TengwaFontLetter.THREE_DOTS2,
                TengwaFontLetter.UNDER_DOT2,
                TengwaFontLetter.SPACE,
                // when
                TengwaFontLetter.HWESTA,
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.SPACE,
                // morgoth
                TengwaFontLetter.MALTA,
                TengwaFontLetter.ORE,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.UNGWE,
                TengwaFontLetter.THULE,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.SPACE,
                // dwelt
                TengwaFontLetter.ANDO,
                TengwaFontLetter.VALA,
                TengwaFontLetter.LAMBE,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.TINCO,
                TengwaFontLetter.SPACE,
                // in
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SPACE,
                // middle-earth
                TengwaFontLetter.MALTA,
                TengwaFontLetter.ANDO,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.LAMBE,
                TengwaFontLetter.SPACE,
                TengwaFontLetter.SHORT_CARRIER,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.ORE,
                TengwaFontLetter.THULE,
                TengwaFontLetter.NEWLINE,

                // Line 2
                // and
                TengwaFontLetter.ANDO,
                TengwaFontLetter.SPACE,
                // the
                TengwaFontLetter.THE,
                TengwaFontLetter.SPACE,
                // elves
                TengwaFontLetter.LAMBE,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.AMPA,
                TengwaFontLetter.UNDER_DOT2,
                TengwaFontLetter.SILME,
                TengwaFontLetter.SPACE,
                // made
                TengwaFontLetter.MALTA,
                TengwaFontLetter.ANDO,
                TengwaFontLetter.THREE_DOTS2,
                TengwaFontLetter.UNDER_DOT2,
                TengwaFontLetter.SPACE,
                // war
                TengwaFontLetter.VALA,
                TengwaFontLetter.ORE,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.SPACE,
                // upon
                TengwaFontLetter.PARMA,
                TengwaFontLetter.TOP_CURL2,
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SPACE,
                // him
                TengwaFontLetter.HYARMEN,
                TengwaFontLetter.MALTA,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SPACE,
                // for
                TengwaFontLetter.FORMEN,
                TengwaFontLetter.ORE,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.SPACE,
                // the
                TengwaFontLetter.THE,
                TengwaFontLetter.SPACE,
                // recovery
                TengwaFontLetter.ROMEN, TengwaFontLetter.QUESSE, TengwaFontLetter.DOT2, TengwaFontLetter.AMPA,
                TengwaFontLetter.LEFT_CURL2, TengwaFontLetter.ROMEN, TengwaFontLetter.DOT2,
                TengwaFontLetter.LONG_CARRIER, TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SPACE,
                // of the
                TengwaFontLetter.OF_THE,
                TengwaFontLetter.SPACE,
                // silmarils.
                TengwaFontLetter.SILME, TengwaFontLetter.LAMBE, TengwaFontLetter.ACUTE2, TengwaFontLetter.MALTA,
                TengwaFontLetter.ROMEN, TengwaFontLetter.THREE_DOTS2, TengwaFontLetter.LAMBE, TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SILME, TengwaFontLetter.PERIOD, };

        return new FontLetterList<TengwaFontLetter>(answer);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "The Tales of the First Age when Morgoth dwelt in Middle-earth\n"
                + "and the Elves made war upon him for the recovery of the Silmarils.";

        return new LanguageLetterList(text);
    }

    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // Line 1
                // the
                Phoneme.DH, Phoneme.SPACE,
                // tales
                Phoneme.T, Phoneme.A, Phoneme.L, Phoneme.E, Phoneme.S, Phoneme.SPACE,
                // of
                Phoneme.O, Phoneme.F, Phoneme.SPACE,
                // the
                Phoneme.DH, Phoneme.SPACE,
                // first
                Phoneme.F, Phoneme.I, Phoneme.R, Phoneme.S, Phoneme.T, Phoneme.SPACE,
                // age
                Phoneme.A, Phoneme.G, Phoneme.E, Phoneme.SPACE,
                // when
                Phoneme.W, Phoneme.H, Phoneme.E, Phoneme.N, Phoneme.SPACE,
                // morgoth
                Phoneme.M, Phoneme.O, Phoneme.R, Phoneme.G, Phoneme.O, Phoneme.TH, Phoneme.SPACE,
                // dwelt
                Phoneme.D, Phoneme.W, Phoneme.E, Phoneme.L, Phoneme.T, Phoneme.SPACE,
                // in
                Phoneme.I, Phoneme.N, Phoneme.SPACE,
                // middle-earth
                Phoneme.M, Phoneme.I, Phoneme.D, Phoneme.D, Phoneme.L, Phoneme.E, Phoneme.HYPHEN, Phoneme.E, Phoneme.A,
                Phoneme.R, Phoneme.TH, Phoneme.NEWLINE,

                // Line 2
                // and
                Phoneme.A, Phoneme.N, Phoneme.D, Phoneme.SPACE,
                // the
                Phoneme.DH, Phoneme.SPACE,
                // elves
                Phoneme.E, Phoneme.L, Phoneme.V, Phoneme.E, Phoneme.S, Phoneme.SPACE,
                // made
                Phoneme.M, Phoneme.A, Phoneme.D, Phoneme.E, Phoneme.SPACE,
                // war
                Phoneme.W, Phoneme.A, Phoneme.R, Phoneme.SPACE,
                // upon
                Phoneme.U, Phoneme.P, Phoneme.O, Phoneme.N, Phoneme.SPACE,
                // him
                Phoneme.H, Phoneme.I, Phoneme.M, Phoneme.SPACE,
                // for
                Phoneme.F, Phoneme.O, Phoneme.R, Phoneme.SPACE,
                // the
                Phoneme.DH, Phoneme.SPACE,
                // recovery
                Phoneme.R, Phoneme.E, Phoneme.K, Phoneme.O, Phoneme.V, Phoneme.E, Phoneme.R, Phoneme.Y, Phoneme.SPACE,
                // of
                Phoneme.O, Phoneme.F, Phoneme.SPACE,
                // the
                Phoneme.DH, Phoneme.SPACE,
                // simarils.
                Phoneme.S, Phoneme.I, Phoneme.M, Phoneme.A, Phoneme.R, Phoneme.I, Phoneme.L, Phoneme.S, Phoneme.PERIOD, };

        return new PhonemeList(myPhonemes);
    }

    @Override
    protected RuneList<TengwaRune> createRunes()
    {
        final TengwaRune[] myRunes = {
                // Line 1
                // the
                TengwaRune.THE,
                TengwaRune.SPACE,
                // tales
                TengwaRune.TINCO,
                TengwaRune.THREE_DOTS,
                TengwaRune.LAMBE,
                TengwaRune.UNDER_DOT,
                TengwaRune.SILME,
                TengwaRune.SPACE,
                // of
                TengwaRune.OF,
                TengwaRune.SPACE,
                // the
                TengwaRune.THE,
                TengwaRune.SPACE,
                // first
                TengwaRune.FORMEN,
                TengwaRune.ACUTE,
                TengwaRune.ORE,
                TengwaRune.SILME,
                TengwaRune.TINCO,
                TengwaRune.SPACE,
                // age
                TengwaRune.THREE_DOTS,
                TengwaRune.ANGA,
                TengwaRune.UNDER_DOT,
                TengwaRune.SPACE,
                // when
                TengwaRune.HWESTA,
                TengwaRune.DOT,
                TengwaRune.NUMEN,
                TengwaRune.SPACE,
                // morgoth
                TengwaRune.MALTA, TengwaRune.LEFT_CURL, TengwaRune.ORE,
                TengwaRune.UNGWE,
                TengwaRune.LEFT_CURL,
                TengwaRune.THULE,
                TengwaRune.SPACE,
                // dwelt
                TengwaRune.ANDO, TengwaRune.VALA,
                TengwaRune.DOT,
                TengwaRune.LAMBE,
                TengwaRune.TINCO,
                TengwaRune.SPACE,
                // in
                TengwaRune.ACUTE,
                TengwaRune.NUMEN,
                TengwaRune.SPACE,
                // middle-earth
                TengwaRune.MALTA, TengwaRune.ACUTE,
                TengwaRune.ANDO,
                TengwaRune.LAMBE,
                TengwaRune.SPACE,
                TengwaRune.DOT,
                TengwaRune.SHORT_CARRIER,
                TengwaRune.ORE,
                TengwaRune.THULE,
                TengwaRune.NEWLINE,

                // Line 2
                // and
                TengwaRune.ANDO,
                TengwaRune.SPACE,
                // the
                TengwaRune.THE,
                TengwaRune.SPACE,
                // elves
                TengwaRune.DOT, TengwaRune.LAMBE, TengwaRune.AMPA, TengwaRune.UNDER_DOT,
                TengwaRune.SILME,
                TengwaRune.SPACE,
                // made
                TengwaRune.MALTA, TengwaRune.THREE_DOTS, TengwaRune.ANDO, TengwaRune.UNDER_DOT,
                TengwaRune.SPACE,
                // war
                TengwaRune.VALA, TengwaRune.LEFT_CURL, TengwaRune.ORE,
                TengwaRune.SPACE,
                // upon
                TengwaRune.TOP_CURL, TengwaRune.PARMA, TengwaRune.ACUTE, TengwaRune.NUMEN,
                TengwaRune.SPACE,
                // him
                TengwaRune.HYARMEN, TengwaRune.ACUTE, TengwaRune.MALTA,
                TengwaRune.SPACE,
                // for
                TengwaRune.FORMEN, TengwaRune.LEFT_CURL, TengwaRune.ORE,
                TengwaRune.SPACE,
                // the
                TengwaRune.THE,
                TengwaRune.SPACE,
                // recovery
                TengwaRune.ROMEN, TengwaRune.DOT, TengwaRune.QUESSE, TengwaRune.LEFT_CURL, TengwaRune.AMPA,
                TengwaRune.DOT, TengwaRune.ROMEN, TengwaRune.ACUTE, TengwaRune.LONG_CARRIER, TengwaRune.SPACE,
                // of the
                TengwaRune.OF_THE, TengwaRune.SPACE,
                // silmarils.
                TengwaRune.SILME, TengwaRune.ACUTE, TengwaRune.LAMBE, TengwaRune.MALTA, TengwaRune.THREE_DOTS,
                TengwaRune.ROMEN, TengwaRune.ACUTE, TengwaRune.LAMBE, TengwaRune.SILME, TengwaRune.PERIOD, };

        return new RuneList<TengwaRune>(myRunes);
    }
}
