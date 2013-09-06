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
 * Provides an example of Tengwar runes from The Silmarillion, title page bottom.
 */
public final class TengwarExample4 extends AbstractExample<TengwaRune, TengwaFontLetter>
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
        final String text = "to which are appended the Downfall of Nœmenor and the history of the Rings of Power and the Third Age in which these tales come to their end.";

        return new LanguageLetterList(text);
    }

    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // Line 1
                // of
                Phoneme.O, Phoneme.F, Phoneme.SPACE,
                // westmarch
                Phoneme.W, Phoneme.E, Phoneme.S, Phoneme.T, Phoneme.M, Phoneme.A, Phoneme.R, Phoneme.CH, Phoneme.SPACE,
                // by
                Phoneme.B, Phoneme.Y, Phoneme.SPACE,
                // john
                Phoneme.J, Phoneme.O, Phoneme.H, Phoneme.N, Phoneme.SPACE,
                // ronald
                Phoneme.R, Phoneme.O, Phoneme.N, Phoneme.A, Phoneme.L, Phoneme.D, Phoneme.SPACE,
                // reuel
                Phoneme.R, Phoneme.E, Phoneme.U, Phoneme.E, Phoneme.L, Phoneme.SPACE,
                // tolkien.
                Phoneme.T, Phoneme.O, Phoneme.L, Phoneme.K, Phoneme.I, Phoneme.E, Phoneme.N, Phoneme.PERIOD,
                // herein
                Phoneme.H, Phoneme.E, Phoneme.R, Phoneme.I, Phoneme.N, Phoneme.SPACE,
                // is
                Phoneme.I, Phoneme.Z, Phoneme.SPACE,
                // set
                Phoneme.S, Phoneme.E, Phoneme.T, Phoneme.SPACE,
                // forth
                Phoneme.F, Phoneme.O, Phoneme.R, Phoneme.TH, Phoneme.NEWLINE,

                // Line 2
                // the
                Phoneme.DH, Phoneme.SPACE,
                // history
                Phoneme.H, Phoneme.I, Phoneme.S, Phoneme.T, Phoneme.O, Phoneme.R, Phoneme.EE, Phoneme.SPACE,
                // of
                Phoneme.O, Phoneme.F, Phoneme.SPACE,
                // the
                Phoneme.DH, Phoneme.SPACE,
                // war
                Phoneme.W, Phoneme.A, Phoneme.R, Phoneme.SPACE,
                // of
                Phoneme.O, Phoneme.F, Phoneme.SPACE,
                // the
                Phoneme.DH, Phoneme.SPACE,
                // ring
                Phoneme.R, Phoneme.I, Phoneme.NG, Phoneme.SPACE,
                // and
                Phoneme.A, Phoneme.N, Phoneme.D, Phoneme.SPACE,
                // the
                Phoneme.DH, Phoneme.SPACE,
                // return
                Phoneme.R, Phoneme.E, Phoneme.T, Phoneme.U, Phoneme.R, Phoneme.N, Phoneme.SPACE,
                // of
                Phoneme.O, Phoneme.F, Phoneme.SPACE,
                // the
                Phoneme.DH, Phoneme.SPACE,
                // king
                Phoneme.K, Phoneme.I, Phoneme.NG, Phoneme.SPACE,
                // as
                Phoneme.A, Phoneme.Z, Phoneme.SPACE,
                // seen
                Phoneme.S, Phoneme.EE, Phoneme.N, Phoneme.SPACE,
                // by
                Phoneme.B, Phoneme.Y, Phoneme.SPACE,
                // the
                Phoneme.DH, Phoneme.SPACE,
                // hobbits.
                Phoneme.H, Phoneme.O, Phoneme.B, Phoneme.I, Phoneme.T, Phoneme.S, Phoneme.PERIOD };

        return new PhonemeList(myPhonemes);
    }

    @Override
    protected RuneList<TengwaRune> createRunes()
    {
        final TengwaRune[] myRunes = {

                // Line 1
                // of
                TengwaRune.FORMEN,
                TengwaRune.LEFT_CURL,
                TengwaRune.SPACE,
                // westmarch
                TengwaRune.VALA,
                TengwaRune.SILME,
                TengwaRune.ACUTE,
                TengwaRune.TINCO,
                TengwaRune.MALTA,
                TengwaRune.ORE,
                TengwaRune.CIRCUMFLEX,
                TengwaRune.CALMA,
                TengwaRune.SPACE,
                // by
                TengwaRune.UMBAR,
                TengwaRune.LONG_CARRIER,
                TengwaRune.DOT,
                TengwaRune.SPACE,
                // john
                TengwaRune.ANGA,
                TengwaRune.HYARMEN,
                TengwaRune.NUMEN,
                TengwaRune.LEFT_CURL,
                TengwaRune.SPACE,
                // ronald
                TengwaRune.ROMEN,
                TengwaRune.NUMEN,
                TengwaRune.LEFT_CURL,
                TengwaRune.LAMBE,
                TengwaRune.CIRCUMFLEX,
                TengwaRune.ANDO,
                TengwaRune.SPACE,
                // rueul
                TengwaRune.ROMEN,
                TengwaRune.SHORT_CARRIER,
                TengwaRune.ACUTE,
                TengwaRune.SHORT_CARRIER,
                TengwaRune.RIGHT_CURL,
                TengwaRune.LAMBE,
                TengwaRune.ACUTE,
                TengwaRune.SPACE,
                // tolkien.
                TengwaRune.TINCO,
                TengwaRune.LAMBE,
                TengwaRune.LEFT_CURL,
                TengwaRune.QUESSE,
                TengwaRune.SHORT_CARRIER,
                TengwaRune.DOT,
                TengwaRune.NUMEN,
                TengwaRune.ACUTE,
                TengwaRune.PERIOD,
                // herein
                TengwaRune.HYARMEN,
                TengwaRune.ROMEN,
                TengwaRune.ACUTE,
                TengwaRune.NUMEN,
                TengwaRune.DOT,
                TengwaRune.SPACE,
                // is
                TengwaRune.ESSE,
                TengwaRune.DOT,
                TengwaRune.SPACE,
                // set
                TengwaRune.SILME,
                TengwaRune.TINCO,
                TengwaRune.ACUTE,
                TengwaRune.SPACE,
                // forth
                TengwaRune.FORMEN,
                TengwaRune.ORE,
                TengwaRune.LEFT_CURL,
                TengwaRune.THULE,
                TengwaRune.NEWLINE,

                // Line 2
                // the
                TengwaRune.ANTO,
                TengwaRune.SPACE,
                // history
                TengwaRune.HYARMEN, TengwaRune.SILME, TengwaRune.DOT, TengwaRune.TINCO, TengwaRune.ROMEN,
                TengwaRune.LEFT_CURL,
                TengwaRune.LONG_CARRIER,
                TengwaRune.ACUTE,
                TengwaRune.SPACE,
                // of
                TengwaRune.FORMEN,
                TengwaRune.LEFT_CURL,
                TengwaRune.SPACE,
                // the
                TengwaRune.ANTO,
                TengwaRune.SPACE,
                // war
                TengwaRune.VALA,
                TengwaRune.ORE,
                TengwaRune.CIRCUMFLEX,
                TengwaRune.SPACE,
                // of
                TengwaRune.FORMEN,
                TengwaRune.LEFT_CURL,
                TengwaRune.SPACE,
                // the
                TengwaRune.ANTO,
                TengwaRune.SPACE,
                // ring
                TengwaRune.ROMEN, TengwaRune.NGWALME,
                TengwaRune.DOT,
                TengwaRune.SPACE,
                // and
                TengwaRune.NUMEN,
                TengwaRune.CIRCUMFLEX,
                TengwaRune.ANDO,
                TengwaRune.SPACE,
                // the
                TengwaRune.ANTO,
                TengwaRune.SPACE,
                // return
                TengwaRune.ROMEN, TengwaRune.TINCO, TengwaRune.ACUTE, TengwaRune.ORE, TengwaRune.RIGHT_CURL,
                TengwaRune.NUMEN,
                TengwaRune.SPACE,
                // of
                TengwaRune.FORMEN, TengwaRune.LEFT_CURL,
                TengwaRune.SPACE,
                // the
                TengwaRune.ANTO,
                TengwaRune.SPACE,
                // king
                TengwaRune.QUESSE, TengwaRune.NGWALME, TengwaRune.DOT,
                TengwaRune.SPACE,
                // as
                TengwaRune.ESSE_NUQUERNA, TengwaRune.CIRCUMFLEX,
                TengwaRune.SPACE,
                // seen
                TengwaRune.SILME, TengwaRune.SHORT_CARRIER, TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER,
                TengwaRune.ACUTE, TengwaRune.NUMEN, TengwaRune.SPACE,
                // by
                TengwaRune.UMBAR, TengwaRune.LONG_CARRIER, TengwaRune.DOT, TengwaRune.SPACE,
                // the
                TengwaRune.ANTO, TengwaRune.SPACE,
                // hobbits.
                TengwaRune.HYARMEN, TengwaRune.UMBAR, TengwaRune.LEFT_CURL, TengwaRune.TINCO, TengwaRune.DOT,
                TengwaRune.SILME, TengwaRune.PERIOD, };

        return new RuneList<TengwaRune>(myRunes);
    }
}
