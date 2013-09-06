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
        final TengwaFontLetter[] answer = {};

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
                TengwaRune.ANTO,
                TengwaRune.SPACE,
                // tales
                TengwaRune.TINCO,
                TengwaRune.CIRCUMFLEX,
                TengwaRune.LAMBE,
                TengwaRune.ACUTE,
                TengwaRune.SILME,
                TengwaRune.SPACE,
                // of
                TengwaRune.LEFT_CURL,
                TengwaRune.FORMEN,
                TengwaRune.SPACE,
                // the
                TengwaRune.ANTO,
                TengwaRune.SPACE,
                // first
                TengwaRune.FORMEN,
                TengwaRune.DOT,
                TengwaRune.ORE,
                TengwaRune.SILME,
                TengwaRune.TINCO,
                TengwaRune.SPACE,
                // age
                TengwaRune.CIRCUMFLEX,
                TengwaRune.UNGWE,
                TengwaRune.ACUTE,
                TengwaRune.SPACE,
                // when
                TengwaRune.HWESTA_SINDARINWA,
                TengwaRune.DOT,
                TengwaRune.NUMEN,
                TengwaRune.SPACE,
                // morgoth
                TengwaRune.MALTA,
                TengwaRune.LEFT_CURL,
                TengwaRune.ORE,
                TengwaRune.UNGWE,
                TengwaRune.LEFT_CURL,
                TengwaRune.THULE,
                TengwaRune.SPACE,
                // dwelt
                TengwaRune.ANDO,
                TengwaRune.VALA,
                TengwaRune.ACUTE,
                TengwaRune.LAMBE,
                TengwaRune.TINCO,
                TengwaRune.SPACE,
                // in
                TengwaRune.DOT,
                TengwaRune.NUMEN,
                TengwaRune.SPACE,
                // middle-earth
                TengwaRune.MALTA, TengwaRune.DOT, TengwaRune.ANDO, TengwaRune.ANDO, TengwaRune.LAMBE,
                TengwaRune.ACUTE,
                TengwaRune.SPACE,
                TengwaRune.DOT,
                TengwaRune.SHORT_CARRIER,
                TengwaRune.ORE,
                TengwaRune.THULE,
                TengwaRune.NEWLINE,

                // Line 2
                // and
                TengwaRune.CIRCUMFLEX,
                TengwaRune.NUMEN,
                TengwaRune.ANDO,
                TengwaRune.SPACE,
                // the
                TengwaRune.ANTO,
                TengwaRune.SPACE,
                // elves
                TengwaRune.ACUTE, TengwaRune.LAMBE, TengwaRune.AMPA, TengwaRune.ACUTE,
                TengwaRune.SILME,
                TengwaRune.SPACE,
                // made
                TengwaRune.MALTA, TengwaRune.CIRCUMFLEX, TengwaRune.ANDO, TengwaRune.ACUTE,
                TengwaRune.SPACE,
                // war
                TengwaRune.VALA, TengwaRune.CIRCUMFLEX, TengwaRune.ORE,
                TengwaRune.SPACE,
                // upon
                TengwaRune.RIGHT_CURL, TengwaRune.PARMA, TengwaRune.LEFT_CURL, TengwaRune.NUMEN,
                TengwaRune.SPACE,
                // him
                TengwaRune.HYARMEN, TengwaRune.DOT, TengwaRune.MALTA,
                TengwaRune.SPACE,
                // for
                TengwaRune.FORMEN, TengwaRune.LEFT_CURL, TengwaRune.ORE,
                TengwaRune.SPACE,
                // the
                TengwaRune.ANTO,
                TengwaRune.SPACE,
                // recovery
                TengwaRune.ROMEN, TengwaRune.ACUTE, TengwaRune.QUESSE, TengwaRune.LEFT_CURL, TengwaRune.AMPA,
                TengwaRune.ACUTE, TengwaRune.ROMEN, TengwaRune.ACUTE, TengwaRune.LONG_CARRIER, TengwaRune.SPACE,
                // of
                TengwaRune.LEFT_CURL, TengwaRune.FORMEN, TengwaRune.SPACE,
                // the
                TengwaRune.ANTO, TengwaRune.SPACE,
                // silmarils.
                TengwaRune.SILME, TengwaRune.DOT, TengwaRune.LAMBE, TengwaRune.MALTA, TengwaRune.CIRCUMFLEX,
                TengwaRune.ROMEN, TengwaRune.DOT, TengwaRune.LAMBE, TengwaRune.SILME, TengwaRune.PERIOD, };

        return new RuneList<TengwaRune>(myRunes);
    }
}
