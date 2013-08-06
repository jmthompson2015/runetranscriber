package org.runetranscriber.core;

/**
 * Provides a test implementation of a rune transcriber.
 */
public final class MyTestRuneTranscriber implements RuneTranscriber<MyTestRune>
{
    /** Delegate. */
    private final DefaultRuneTranscriber<MyTestRune> delegate = new DefaultRuneTranscriber<MyTestRune>();

    /**
     * Construct this object.
     */
    public MyTestRuneTranscriber()
    {
        put(Phoneme.TH, MyTestRune.T, MyTestRune.H);
        put(Phoneme.E, MyTestRune.E);
        put(Phoneme.H, MyTestRune.H);
        put(Phoneme.O, MyTestRune.O);
        put(Phoneme.B, MyTestRune.B);
        put(Phoneme.I, MyTestRune.I);
        put(Phoneme.T, MyTestRune.T);
        put(Phoneme.R, MyTestRune.R);
        put(Phoneme.A, MyTestRune.A);
        put(Phoneme.N, MyTestRune.N);
        put(Phoneme.D, MyTestRune.D);
        put(Phoneme.K, MyTestRune.K);
        put(Phoneme.G, MyTestRune.G);
        put(Phoneme.N, MyTestRune.N);

        put(Phoneme.SPACE, MyTestRune.SPACE);
        put(Phoneme.COMMA, MyTestRune.COMMA);
        put(Phoneme.PERIOD, MyTestRune.PERIOD);
        put(Phoneme.NEWLINE, MyTestRune.NEWLINE);
    }

    @Override
    public PhonemeList getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public RuneList<MyTestRune> getToSequence()
    {
        return delegate.getToSequence();
    }

    /**
     * @param phoneme Phoneme.
     * @param runes Runes.
     */
    public void put(final Phoneme phoneme, final MyTestRune... runes)
    {
        final PhonemeList fromSequence = new PhonemeList(phoneme);
        final RuneList<MyTestRune> toSequence = new RuneList<MyTestRune>(runes);

        put(fromSequence, toSequence);
    }

    @Override
    public void put(final Phoneme phoneme, final MyTestRune rune)
    {
        delegate.put(phoneme, rune);
    }

    @Override
    public void put(final PhonemeList fromSequence, final RuneList<MyTestRune> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final Phoneme phoneme, final MyTestRune rune)
    {
        delegate.putForward(phoneme, rune);
    }

    @Override
    public void putForward(final PhonemeList fromSequence, final RuneList<MyTestRune> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final Phoneme phoneme, final MyTestRune rune)
    {
        delegate.putReverse(phoneme, rune);
    }

    @Override
    public void putReverse(final PhonemeList fromSequence, final RuneList<MyTestRune> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public RuneList<MyTestRune> transcribeForward(final PhonemeList fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public PhonemeList transcribeReverse(final RuneList<MyTestRune> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
