package org.runetranscriber.core.tengwar;

import org.runetranscriber.core.DefaultRuneTranscriber;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.RuneTranscriber;

/**
 * Provides a transcriber for <a href="http://en.wikipedia.org/wiki/Anglo-Saxon_runes">anglo saxon runes</a>.
 */
public final class TengwarRuneTranscriber implements RuneTranscriber<TengwaRune>
{
    /** Delegate. */
    private final DefaultRuneTranscriber<TengwaRune> delegate = new DefaultRuneTranscriber<TengwaRune>();

    /**
     * Construct this object.
     */
    public TengwarRuneTranscriber()
    {
        // as
        put(new Phoneme[] { Phoneme.A, Phoneme.Z, Phoneme.SPACE, }, TengwaRune.THREE_DOTS, TengwaRune.ESSE_NUQUERNA,
                TengwaRune.SPACE);

        // by
        put(new Phoneme[] { Phoneme.B, Phoneme.Y, Phoneme.SPACE, }, TengwaRune.UMBAR, TengwaRune.CHEVRON,
                TengwaRune.LONG_CARRIER, TengwaRune.SPACE);

        // forth
        put(new Phoneme[] { Phoneme.F, Phoneme.O, Phoneme.R, Phoneme.TH, }, TengwaRune.FORMEN, TengwaRune.LEFT_CURL,
                TengwaRune.ORE, TengwaRune.THULE);

        // ien.
        put(new Phoneme[] { Phoneme.I, Phoneme.E, Phoneme.N, Phoneme.PERIOD, }, TengwaRune.DOT,
                TengwaRune.SHORT_CARRIER, TengwaRune.ACUTE, TengwaRune.NUMEN, TengwaRune.PERIOD);

        // john
        put(new Phoneme[] { Phoneme.J, Phoneme.O, Phoneme.H, Phoneme.N, Phoneme.SPACE, }, TengwaRune.ANGA,
                TengwaRune.HYARMEN, TengwaRune.LEFT_CURL, TengwaRune.NUMEN, TengwaRune.SPACE);

        // march
        put(new Phoneme[] { Phoneme.M, Phoneme.A, Phoneme.R, Phoneme.CH, }, TengwaRune.MALTA, TengwaRune.THREE_DOTS,
                TengwaRune.ORE, TengwaRune.CALMA);

        // reuel
        put(new Phoneme[] { Phoneme.R, Phoneme.E, Phoneme.U, Phoneme.E, Phoneme.L, Phoneme.SPACE, }, TengwaRune.ROMEN,
                TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER,
                TengwaRune.ACUTE, TengwaRune.LAMBE, TengwaRune.SPACE);

        // ur
        put(new Phoneme[] { Phoneme.U, Phoneme.R, }, TengwaRune.TOP_CURL, TengwaRune.ORE);

        // war
        put(new Phoneme[] { Phoneme.W, Phoneme.A, Phoneme.R, }, TengwaRune.VALA, TengwaRune.THREE_DOTS, TengwaRune.ORE);

        // and
        put(new Phoneme[] { Phoneme.A, Phoneme.N, Phoneme.D, }, TengwaRune.UNDER_DOT, TengwaRune.ANDO);

        // Shorthand letters.
        // of the
        put(new Phoneme[] { Phoneme.O, Phoneme.F, Phoneme.SPACE, Phoneme.TH, Phoneme.E, Phoneme.SPACE, },
                TengwaRune.OF_THE, TengwaRune.SPACE);
        putReverse(new Phoneme[] { Phoneme.O, Phoneme.F, Phoneme.SPACE, Phoneme.TH, Phoneme.E, }, TengwaRune.OF_THE);

        // of
        put(new Phoneme[] { Phoneme.O, Phoneme.F, Phoneme.SPACE, }, TengwaRune.OF, TengwaRune.SPACE);
        putReverse(new Phoneme[] { Phoneme.O, Phoneme.F, }, TengwaRune.OF);

        // the
        put(new Phoneme[] { Phoneme.TH, Phoneme.E, Phoneme.SPACE, }, TengwaRune.THE, TengwaRune.SPACE);
        putReverse(new Phoneme[] { Phoneme.TH, Phoneme.E, }, TengwaRune.THE);

        // Consonants.
        put(Phoneme.T, TengwaRune.TINCO);
        put(Phoneme.P, TengwaRune.PARMA);
        put(Phoneme.CH, TengwaRune.CALMA);
        put(Phoneme.K, TengwaRune.QUESSE);
        put(Phoneme.D, TengwaRune.ANDO);
        put(Phoneme.B, TengwaRune.UMBAR);
        put(Phoneme.J, TengwaRune.ANGA);
        put(Phoneme.G, TengwaRune.UNGWE);
        put(Phoneme.TH, TengwaRune.THULE);
        put(Phoneme.F, TengwaRune.FORMEN);
        put(Phoneme.SH, TengwaRune.HARMA);
        put(Phoneme.KH, TengwaRune.HWESTA);
        put(Phoneme.DH, TengwaRune.ANTO);
        put(Phoneme.V, TengwaRune.AMPA);
        put(Phoneme.ZH, TengwaRune.ANCA);
        put(Phoneme.GH, TengwaRune.UNQUE);
        put(Phoneme.N, TengwaRune.NUMEN);
        put(Phoneme.M, TengwaRune.MALTA);
        put(Phoneme.NG2, TengwaRune.NGOLDO);
        put(Phoneme.NG, TengwaRune.NGWALME);
        put(Phoneme.R, TengwaRune.ORE);
        put(Phoneme.W, TengwaRune.VALA);
        // put(Phoneme.Y, Tengwa.ANNA);
        // put(Phoneme.Y, Tengwa.VILYA);

        // Additional letters.
        put(Phoneme.R, TengwaRune.ROMEN);
        put(Phoneme.RH, TengwaRune.ARDA);
        put(Phoneme.L, TengwaRune.LAMBE);
        put(Phoneme.LH, TengwaRune.ALDA);
        put(Phoneme.S, TengwaRune.SILME);
        // put(Phoneme.S, TengwaRune.SILME_NUQUERNA);
        put(Phoneme.Z, TengwaRune.ESSE);
        // put(Phoneme.Z, TengwaRune.ESSE_NUQUERNA);
        put(Phoneme.H, TengwaRune.HYARMEN);
        put(Phoneme.HW, TengwaRune.HWESTA_SINDARINWA);
        // put(Phoneme.Y, TengwaRune.YANTA);
        // put(Phoneme.W, TengwaRune.URE);

        put(Phoneme.EE, TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER, TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER);
        put(Phoneme.Y, TengwaRune.ACUTE, TengwaRune.LONG_CARRIER);
        putReverse(Phoneme.Z, TengwaRune.ESSE_NUQUERNA);

        // Vowels.
        putReverse(Phoneme.A, TengwaRune.THREE_DOTS, TengwaRune.SHORT_CARRIER);
        putReverse(Phoneme.A, TengwaRune.THREE_UNDER_DOTS, TengwaRune.SHORT_CARRIER);
        putReverse(Phoneme.A, TengwaRune.CIRCUMFLEX, TengwaRune.SHORT_CARRIER);
        putReverse(Phoneme.E, TengwaRune.ACUTE, TengwaRune.SHORT_CARRIER);
        putReverse(Phoneme.I, TengwaRune.DOT, TengwaRune.SHORT_CARRIER);
        putReverse(Phoneme.I, TengwaRune.UNDER_DOT, TengwaRune.SHORT_CARRIER);
        putReverse(Phoneme.O, TengwaRune.LEFT_CURL, TengwaRune.SHORT_CARRIER);
        putReverse(Phoneme.O, TengwaRune.LEFT_UNDER_CURL, TengwaRune.SHORT_CARRIER);
        putReverse(Phoneme.U, TengwaRune.TOP_CURL, TengwaRune.SHORT_CARRIER);
        putReverse(Phoneme.U, TengwaRune.RIGHT_CURL, TengwaRune.SHORT_CARRIER);
        putReverse(Phoneme.Y, TengwaRune.CHEVRON, TengwaRune.SHORT_CARRIER);

        putReverse(Phoneme.A, TengwaRune.THREE_UNDER_DOTS);
        putReverse(Phoneme.A, TengwaRune.CIRCUMFLEX);
        putReverse(Phoneme.I, TengwaRune.UNDER_DOT);
        putReverse(Phoneme.O, TengwaRune.LEFT_UNDER_CURL);
        putReverse(Phoneme.U, TengwaRune.TOP_CURL);
        putReverse(Phoneme.Y, TengwaRune.CHEVRON);

        put(Phoneme.A, TengwaRune.THREE_DOTS);
        put(Phoneme.E, TengwaRune.ACUTE);
        put(Phoneme.I, TengwaRune.DOT);
        put(Phoneme.O, TengwaRune.LEFT_CURL);
        put(Phoneme.U, TengwaRune.RIGHT_CURL);

        // Punctuation.
        put(Phoneme.SPACE, TengwaRune.SPACE);
        put(Phoneme.COMMA, TengwaRune.COMMA);
        put(Phoneme.PERIOD, TengwaRune.PERIOD);
        put(Phoneme.NEWLINE, TengwaRune.NEWLINE);

        putForward(Phoneme.HYPHEN, null);
    }

    @Override
    public PhonemeList getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public RuneList<TengwaRune> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final Phoneme phoneme, final TengwaRune rune)
    {
        delegate.put(phoneme, rune);
    }

    @Override
    public void put(final PhonemeList fromSequence, final RuneList<TengwaRune> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final Phoneme phoneme, final TengwaRune rune)
    {
        delegate.putForward(phoneme, rune);
    }

    @Override
    public void putForward(final PhonemeList fromSequence, final RuneList<TengwaRune> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final Phoneme phoneme, final TengwaRune rune)
    {
        delegate.putReverse(phoneme, rune);
    }

    @Override
    public void putReverse(final PhonemeList fromSequence, final RuneList<TengwaRune> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public RuneList<TengwaRune> transcribeForward(final PhonemeList fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public PhonemeList transcribeReverse(final RuneList<TengwaRune> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }

    /**
     * @param phoneme From phoneme.
     * @param runes To runes.
     */
    private void put(final Phoneme phoneme, final TengwaRune... runes)
    {
        final PhonemeList fromSequence = new PhonemeList(phoneme);
        final RuneList<TengwaRune> toSequence = new RuneList<TengwaRune>(runes);

        put(fromSequence, toSequence);
    }

    /**
     * @param phonemes From phonemes.
     * @param runes To runes.
     */
    private void put(final Phoneme[] phonemes, final TengwaRune... runes)
    {
        final PhonemeList fromSequence = new PhonemeList(phonemes);
        final RuneList<TengwaRune> toSequence = new RuneList<TengwaRune>(runes);

        put(fromSequence, toSequence);
    }

    /**
     * @param phoneme From phonemes.
     * @param runes To runes.
     */
    private void putReverse(final Phoneme phoneme, final TengwaRune... runes)
    {
        final PhonemeList fromSequence = new PhonemeList(phoneme);
        final RuneList<TengwaRune> toSequence = new RuneList<TengwaRune>(runes);

        putReverse(fromSequence, toSequence);
    }

    /**
     * @param phonemes From phonemes.
     * @param runes To runes.
     */
    private void putReverse(final Phoneme[] phonemes, final TengwaRune... runes)
    {
        final PhonemeList fromSequence = new PhonemeList(phonemes);
        final RuneList<TengwaRune> toSequence = new RuneList<TengwaRune>(runes);

        putReverse(fromSequence, toSequence);
    }
}
