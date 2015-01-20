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
        final TengwaFontLetter[] answer = {
                // Line 1
                // to
                TengwaFontLetter.TINCO,
                TengwaFontLetter.LEFT_UNDER_CURL2,
                TengwaFontLetter.SPACE,
                // which
                TengwaFontLetter.HWESTA,
                TengwaFontLetter.CALMA,
                TengwaFontLetter.ACUTE2,
                // are
                TengwaFontLetter.ORE,
                TengwaFontLetter.THREE_DOTS2,
                TengwaFontLetter.UNDER_DOT2,
                TengwaFontLetter.SPACE,
                // appended
                TengwaFontLetter.PARMA,
                TengwaFontLetter.THREE_DOTS2,
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.ANDO,
                TengwaFontLetter.ANDO,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.SPACE,
                // the
                TengwaFontLetter.THE,
                TengwaFontLetter.SPACE,
                // downfall
                TengwaFontLetter.ANDO,
                TengwaFontLetter.VALA,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.FORMEN,
                TengwaFontLetter.LAMBE,
                TengwaFontLetter.THREE_DOTS2,
                TengwaFontLetter.SPACE,
                // of
                TengwaFontLetter.OF,
                TengwaFontLetter.SPACE,
                // numenor
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.MALTA,
                TengwaFontLetter.TOP_CURL2,
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.ORE,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.SPACE,
                // and
                TengwaFontLetter.ANDO,
                TengwaFontLetter.SPACE,
                // the
                TengwaFontLetter.THE,
                TengwaFontLetter.SPACE,
                // history
                TengwaFontLetter.HYARMEN,
                TengwaFontLetter.SILME,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.TINCO,
                TengwaFontLetter.ROMEN,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.LONG_CARRIER,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SPACE,
                // of the
                TengwaFontLetter.OF_THE,
                TengwaFontLetter.SPACE,

                // Line 2
                // rings
                TengwaFontLetter.ROMEN,
                TengwaFontLetter.NGWALME,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SILME,
                TengwaFontLetter.SPACE,
                // of
                TengwaFontLetter.OF,
                TengwaFontLetter.SPACE,
                // power
                TengwaFontLetter.PARMA,
                TengwaFontLetter.VALA,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.ORE,
                TengwaFontLetter.SPACE,
                // and
                TengwaFontLetter.ANDO,
                TengwaFontLetter.SPACE,
                // the
                TengwaFontLetter.THE,
                TengwaFontLetter.SPACE,
                // third
                TengwaFontLetter.THULE,
                TengwaFontLetter.ORE,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.ANDO,
                TengwaFontLetter.SPACE,
                // age
                TengwaFontLetter.ANGA,
                TengwaFontLetter.THREE_DOTS2,
                TengwaFontLetter.UNDER_DOT2,
                TengwaFontLetter.SPACE,
                // in
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SPACE,
                // which
                TengwaFontLetter.HWESTA,
                TengwaFontLetter.CALMA,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SPACE,
                // these
                TengwaFontLetter.ANTO, TengwaFontLetter.SILME,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.UNDER_DOT2,
                TengwaFontLetter.SPACE,
                // tales
                TengwaFontLetter.TINCO, TengwaFontLetter.LAMBE, TengwaFontLetter.THREE_DOTS2,
                TengwaFontLetter.UNDER_DOT2, TengwaFontLetter.SILME,
                TengwaFontLetter.SPACE,
                // come
                TengwaFontLetter.QUESSE, TengwaFontLetter.MALTA, TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.UNDER_DOT2, TengwaFontLetter.SPACE,
                // to
                TengwaFontLetter.TINCO, TengwaFontLetter.LEFT_UNDER_CURL2, TengwaFontLetter.SPACE,
                // their
                TengwaFontLetter.ANTO, TengwaFontLetter.YANTA, TengwaFontLetter.DOT2, TengwaFontLetter.ORE,
                TengwaFontLetter.SPACE,
                // end
                TengwaFontLetter.NUMEN, TengwaFontLetter.DOT2, TengwaFontLetter.ANDO, };

        return new FontLetterList<TengwaFontLetter>(answer);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "To which are appended the Downfall of Nœmenor and the history of the Rings of Power and the Third Age in which these tales come to their end.";

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
                // to
                TengwaRune.TINCO,
                TengwaRune.LEFT_UNDER_CURL,
                TengwaRune.SPACE,
                // which
                TengwaRune.HWESTA,
                TengwaRune.ACUTE,
                TengwaRune.CALMA,
                // are
                TengwaRune.THREE_DOTS,
                TengwaRune.ORE,
                TengwaRune.UNDER_DOT,
                TengwaRune.SPACE,
                // appended
                TengwaRune.THREE_DOTS, TengwaRune.PARMA,
                TengwaRune.DOT,
                TengwaRune.NUMEN,
                TengwaRune.ANDO,
                TengwaRune.DOT,
                TengwaRune.ANDO,
                TengwaRune.SPACE,
                // the
                TengwaRune.THE,
                TengwaRune.SPACE,
                // downfall
                TengwaRune.ANDO, TengwaRune.LEFT_CURL, TengwaRune.VALA, TengwaRune.NUMEN,
                TengwaRune.FORMEN,
                TengwaRune.THREE_DOTS,
                TengwaRune.LAMBE,
                TengwaRune.SPACE,
                // of
                TengwaRune.OF,
                TengwaRune.SPACE,
                // numenor
                TengwaRune.NUMEN, TengwaRune.TOP_CURL, TengwaRune.MALTA, TengwaRune.DOT, TengwaRune.NUMEN,
                TengwaRune.LEFT_CURL, TengwaRune.ORE,
                TengwaRune.SPACE,
                // and
                TengwaRune.ANDO,
                TengwaRune.SPACE,
                // the
                TengwaRune.THE,
                TengwaRune.SPACE,
                // history
                TengwaRune.HYARMEN, TengwaRune.ACUTE, TengwaRune.SILME, TengwaRune.TINCO, TengwaRune.LEFT_CURL,
                TengwaRune.ROMEN, TengwaRune.ACUTE, TengwaRune.LONG_CARRIER, TengwaRune.SPACE,
                // of the
                TengwaRune.OF_THE,
                TengwaRune.SPACE,

                // Line 2
                // rings
                TengwaRune.ROMEN, TengwaRune.ACUTE, TengwaRune.NGWALME, TengwaRune.SILME, TengwaRune.SPACE,
                // of
                TengwaRune.OF, TengwaRune.SPACE,
                // power
                TengwaRune.PARMA, TengwaRune.LEFT_CURL, TengwaRune.VALA, TengwaRune.ORE, TengwaRune.SPACE,
                // and
                TengwaRune.ANDO, TengwaRune.SPACE,
                // the
                TengwaRune.THE, TengwaRune.SPACE,
                // third
                TengwaRune.THULE, TengwaRune.ACUTE, TengwaRune.ORE, TengwaRune.ANDO, TengwaRune.SPACE,
                // age
                TengwaRune.THREE_DOTS, TengwaRune.ANGA, TengwaRune.UNDER_DOT, TengwaRune.SPACE,
                // in
                TengwaRune.ACUTE, TengwaRune.NUMEN, TengwaRune.SPACE,
                // which
                TengwaRune.HWESTA, TengwaRune.ACUTE, TengwaRune.CALMA, TengwaRune.SPACE,
                // these
                TengwaRune.ANTO, TengwaRune.DOT, TengwaRune.SILME, TengwaRune.UNDER_DOT, TengwaRune.SPACE,
                // tales
                TengwaRune.TINCO, TengwaRune.THREE_DOTS, TengwaRune.LAMBE, TengwaRune.UNDER_DOT, TengwaRune.SILME,
                TengwaRune.SPACE,
                // come
                TengwaRune.QUESSE, TengwaRune.LEFT_CURL, TengwaRune.MALTA, TengwaRune.UNDER_DOT, TengwaRune.SPACE,
                // to
                TengwaRune.TINCO, TengwaRune.LEFT_UNDER_CURL, TengwaRune.SPACE,
                // their
                TengwaRune.ANTO, TengwaRune.DOT, TengwaRune.YANTA, TengwaRune.ORE, TengwaRune.SPACE,
                // end
                TengwaRune.DOT, TengwaRune.NUMEN, TengwaRune.ANDO, };

        return new RuneList<TengwaRune>(myRunes);
    }
}
