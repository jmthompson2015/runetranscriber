package org.runetranscriber.core;

/**
 * Provides default functionality for a phoneme to rune transcriber.
 * 
 * @param <R> Rune type parameter.
 */
public final class DefaultRuneTranscriber<R extends Rune> implements RuneTranscriber<R>
{
    /** Delegate. */
    private final DefaultTranscriber<PhonemeList, Phoneme, RuneList<R>, R> delegate;

    /**
     * Construct this object.
     */
    public DefaultRuneTranscriber()
    {
        delegate = new DefaultTranscriber<PhonemeList, Phoneme, RuneList<R>, R>(new PhonemeListFactory(),
                new RuneListFactory<R>());
    }

    @Override
    public PhonemeList getFromSequence()
    {
        return new PhonemeList(delegate.getFromSequence());
    }

    @Override
    public RuneList<R> getToSequence()
    {
        return new RuneList<R>(delegate.getToSequence());
    }

    @Override
    public void put(final Phoneme phoneme, final R rune)
    {
        final PhonemeList fromSequence = new PhonemeList(phoneme);
        final RuneList<R> toSequence = new RuneList<R>(rune);

        putForward(fromSequence, toSequence);
        putReverse(fromSequence, toSequence);
    }

    @Override
    public void put(final PhonemeList fromSequence, final RuneList<R> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final Phoneme phoneme, final R rune)
    {
        final PhonemeList fromSequence = new PhonemeList(phoneme);
        final RuneList<R> toSequence = new RuneList<R>(rune);

        putForward(fromSequence, toSequence);
    }

    @Override
    public void putForward(final PhonemeList fromSequence, final RuneList<R> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final Phoneme phoneme, final R rune)
    {
        final PhonemeList fromSequence = new PhonemeList(phoneme);
        final RuneList<R> toSequence = new RuneList<R>(rune);

        putReverse(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final PhonemeList fromSequence, final RuneList<R> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public RuneList<R> transcribeForward(final PhonemeList fromSequence)
    {
        return new RuneList<R>(delegate.transcribeForward(fromSequence));
    }

    @Override
    public PhonemeList transcribeReverse(final RuneList<R> toSequence)
    {
        return new PhonemeList(delegate.transcribeReverse(toSequence));
    }
}
