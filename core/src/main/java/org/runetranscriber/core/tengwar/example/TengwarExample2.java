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
 * Provides an example for Tengwar runes from <a href="http://ring-lord.tripod.com/tengwar/exlotrt.htm">The Lord of the
 * Rings, title page, lower inscription</a>
 */
public final class TengwarExample2 extends AbstractExample<TengwaRune, TengwaFontLetter>
{
    @Override
    protected FontLetterList<TengwaFontLetter> createFontLetters()
    {
        final TengwaFontLetter[] myFontLetters = {

                // Line 1
                // of
                TengwaFontLetter.OF,
                TengwaFontLetter.SPACE,
                // westmarch
                TengwaFontLetter.VALA,
                TengwaFontLetter.SILME,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.TINCO,
                TengwaFontLetter.MALTA,
                TengwaFontLetter.ORE,
                TengwaFontLetter.THREE_DOTS2,
                TengwaFontLetter.CALMA,
                TengwaFontLetter.SPACE,
                // by
                TengwaFontLetter.UMBAR,
                TengwaFontLetter.LONG_CARRIER,
                TengwaFontLetter.CHEVRON2,
                TengwaFontLetter.SPACE,
                // john
                TengwaFontLetter.ANGA,
                TengwaFontLetter.HYARMEN,
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.SPACE,
                // ronald
                TengwaFontLetter.ROMEN,
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.LAMBE,
                TengwaFontLetter.THREE_DOTS2,
                TengwaFontLetter.ANDO,
                TengwaFontLetter.SPACE,
                // rueul
                TengwaFontLetter.ROMEN,
                TengwaFontLetter.SHORT_CARRIER,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SHORT_CARRIER,
                TengwaFontLetter.RIGHT_CURL2,
                TengwaFontLetter.LAMBE,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SPACE,
                // tolkien.
                TengwaFontLetter.TINCO,
                TengwaFontLetter.LAMBE,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.QUESSE,
                TengwaFontLetter.SHORT_CARRIER,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.PERIOD,
                // herein
                TengwaFontLetter.HYARMEN,
                TengwaFontLetter.ROMEN,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.SPACE,
                // is
                TengwaFontLetter.ESSE,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.SPACE,
                // set
                TengwaFontLetter.SILME,
                TengwaFontLetter.TINCO,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SPACE,
                // forth
                TengwaFontLetter.FORMEN,
                TengwaFontLetter.ORE,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.THULE,
                TengwaFontLetter.NEWLINE,

                // Line 2
                // the
                TengwaFontLetter.THE,
                TengwaFontLetter.SPACE,
                // history
                TengwaFontLetter.HYARMEN,
                TengwaFontLetter.SILME,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.TINCO,
                TengwaFontLetter.ROMEN,
                TengwaFontLetter.LEFT_CURL2,
                TengwaFontLetter.LONG_CARRIER,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SPACE,
                // of the
                TengwaFontLetter.OF_THE,
                TengwaFontLetter.SPACE,
                // war
                TengwaFontLetter.VALA,
                TengwaFontLetter.ORE,
                TengwaFontLetter.THREE_DOTS2,
                TengwaFontLetter.SPACE,
                // of the
                TengwaFontLetter.OF_THE,
                TengwaFontLetter.SPACE,
                // ring
                TengwaFontLetter.ROMEN,
                TengwaFontLetter.NGWALME,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.SPACE,
                // and
                TengwaFontLetter.ANDO,
                TengwaFontLetter.UNDER_DOT2,
                TengwaFontLetter.SPACE,
                // the
                TengwaFontLetter.THE,
                TengwaFontLetter.SPACE,
                // return
                TengwaFontLetter.ROMEN,
                TengwaFontLetter.TINCO,
                TengwaFontLetter.ACUTE2,
                TengwaFontLetter.ORE,
                TengwaFontLetter.TOP_CURL2,
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.SPACE,
                // of the
                TengwaFontLetter.OF_THE,
                TengwaFontLetter.SPACE,
                // king
                TengwaFontLetter.QUESSE,
                TengwaFontLetter.NGWALME,
                TengwaFontLetter.DOT2,
                TengwaFontLetter.SPACE,
                // as
                TengwaFontLetter.ESSE_NUQUERNA,
                TengwaFontLetter.THREE_DOTS2,
                TengwaFontLetter.SPACE,
                // seen
                TengwaFontLetter.SILME, TengwaFontLetter.SHORT_CARRIER, TengwaFontLetter.ACUTE2,
                TengwaFontLetter.SHORT_CARRIER, TengwaFontLetter.ACUTE2,
                TengwaFontLetter.NUMEN,
                TengwaFontLetter.SPACE,
                // by
                TengwaFontLetter.UMBAR, TengwaFontLetter.LONG_CARRIER, TengwaFontLetter.CHEVRON2,
                TengwaFontLetter.SPACE,
                // the
                TengwaFontLetter.THE, TengwaFontLetter.SPACE,
                // hobbits.
                TengwaFontLetter.HYARMEN, TengwaFontLetter.UMBAR, TengwaFontLetter.LEFT_CURL2, TengwaFontLetter.TINCO,
                TengwaFontLetter.DOT2, TengwaFontLetter.SILME, TengwaFontLetter.PERIOD, };

        return new FontLetterList<TengwaFontLetter>(myFontLetters);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "of westmarch by john ronald reuel tolkien. herein is set forth\n"
                + "the history of the war of the ring and the return of the king as seen by the hobbits.";

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
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // history
                Phoneme.H, Phoneme.I, Phoneme.S, Phoneme.T, Phoneme.O, Phoneme.R, Phoneme.Y, Phoneme.SPACE,
                // of
                Phoneme.O, Phoneme.F, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // war
                Phoneme.W, Phoneme.A, Phoneme.R, Phoneme.SPACE,
                // of
                Phoneme.O, Phoneme.F, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // ring
                Phoneme.R, Phoneme.I, Phoneme.NG, Phoneme.SPACE,
                // and
                Phoneme.A, Phoneme.N, Phoneme.D, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // return
                Phoneme.R, Phoneme.E, Phoneme.T, Phoneme.U, Phoneme.R, Phoneme.N, Phoneme.SPACE,
                // of
                Phoneme.O, Phoneme.F, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
                // king
                Phoneme.K, Phoneme.I, Phoneme.NG, Phoneme.SPACE,
                // as
                Phoneme.A, Phoneme.Z, Phoneme.SPACE,
                // seen
                Phoneme.S, Phoneme.EE, Phoneme.N, Phoneme.SPACE,
                // by
                Phoneme.B, Phoneme.Y, Phoneme.SPACE,
                // the
                Phoneme.TH, Phoneme.E, Phoneme.SPACE,
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
                TengwaRune.OF,
                TengwaRune.SPACE,
                // westmarch
                TengwaRune.VALA,
                TengwaRune.ACUTE,
                TengwaRune.SILME,
                TengwaRune.TINCO,
                TengwaRune.MALTA,
                TengwaRune.THREE_DOTS,
                TengwaRune.ORE,
                TengwaRune.CALMA,
                TengwaRune.SPACE,
                // by
                TengwaRune.UMBAR,
                TengwaRune.CHEVRON,
                TengwaRune.LONG_CARRIER,
                TengwaRune.SPACE,
                // john
                TengwaRune.ANGA,
                TengwaRune.HYARMEN,
                TengwaRune.LEFT_CURL,
                TengwaRune.NUMEN,
                TengwaRune.SPACE,
                // ronald
                TengwaRune.ROMEN,
                TengwaRune.LEFT_CURL,
                TengwaRune.NUMEN,
                TengwaRune.THREE_DOTS,
                TengwaRune.LAMBE,
                TengwaRune.ANDO,
                TengwaRune.SPACE,
                // rueul
                TengwaRune.ROMEN,
                TengwaRune.ACUTE,
                TengwaRune.SHORT_CARRIER,
                TengwaRune.RIGHT_CURL,
                TengwaRune.SHORT_CARRIER,
                TengwaRune.ACUTE,
                TengwaRune.LAMBE,
                TengwaRune.SPACE,
                // tolkien.
                TengwaRune.TINCO,
                TengwaRune.LEFT_CURL,
                TengwaRune.LAMBE,
                TengwaRune.QUESSE,
                TengwaRune.DOT,
                TengwaRune.SHORT_CARRIER,
                TengwaRune.ACUTE,
                TengwaRune.NUMEN,
                TengwaRune.PERIOD,
                // herein
                TengwaRune.HYARMEN,
                TengwaRune.ACUTE,
                TengwaRune.ROMEN,
                TengwaRune.DOT,
                TengwaRune.NUMEN,
                TengwaRune.SPACE,
                // is
                TengwaRune.DOT,
                TengwaRune.ESSE,
                TengwaRune.SPACE,
                // set
                TengwaRune.SILME,
                TengwaRune.ACUTE,
                TengwaRune.TINCO,
                TengwaRune.SPACE,
                // forth
                TengwaRune.FORMEN,
                TengwaRune.LEFT_CURL,
                TengwaRune.ORE,
                TengwaRune.THULE,
                TengwaRune.NEWLINE,

                // Line 2
                // the
                TengwaRune.THE,
                TengwaRune.SPACE,
                // history
                TengwaRune.HYARMEN, TengwaRune.DOT, TengwaRune.SILME, TengwaRune.TINCO, TengwaRune.LEFT_CURL,
                TengwaRune.ROMEN,
                TengwaRune.ACUTE,
                TengwaRune.LONG_CARRIER,
                TengwaRune.SPACE,
                // of the
                TengwaRune.OF_THE,
                TengwaRune.SPACE,
                // war
                TengwaRune.VALA,
                TengwaRune.THREE_DOTS,
                TengwaRune.ORE,
                TengwaRune.SPACE,
                // of the
                TengwaRune.OF_THE,
                TengwaRune.SPACE,
                // ring
                TengwaRune.ROMEN,
                TengwaRune.DOT,
                TengwaRune.NGWALME,
                TengwaRune.SPACE,
                // and
                TengwaRune.UNDER_DOT,
                TengwaRune.ANDO,
                TengwaRune.SPACE,
                // the
                TengwaRune.THE,
                TengwaRune.SPACE,
                // return
                TengwaRune.ROMEN, TengwaRune.ACUTE, TengwaRune.TINCO, TengwaRune.TOP_CURL, TengwaRune.ORE,
                TengwaRune.NUMEN,
                TengwaRune.SPACE,
                // of the
                TengwaRune.OF_THE,
                TengwaRune.SPACE,
                // king
                TengwaRune.QUESSE, TengwaRune.DOT, TengwaRune.NGWALME,
                TengwaRune.SPACE,
                // as
                TengwaRune.THREE_DOTS, TengwaRune.ESSE_NUQUERNA,
                TengwaRune.SPACE,
                // seen
                TengwaRune.SILME, TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.ACUTE,
                TengwaRune.SHORT_CARRIER, TengwaRune.NUMEN, TengwaRune.SPACE,
                // by
                TengwaRune.UMBAR, TengwaRune.CHEVRON, TengwaRune.LONG_CARRIER, TengwaRune.SPACE,
                // the
                TengwaRune.THE, TengwaRune.SPACE,
                // hobbits.
                TengwaRune.HYARMEN, TengwaRune.LEFT_CURL, TengwaRune.UMBAR, TengwaRune.DOT, TengwaRune.TINCO,
                TengwaRune.SILME, TengwaRune.PERIOD, };

        return new RuneList<TengwaRune>(myRunes);
    }
}
