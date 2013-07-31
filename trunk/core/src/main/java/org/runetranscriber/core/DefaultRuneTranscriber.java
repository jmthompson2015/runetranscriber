package org.runetranscriber.core;

import java.util.Collections;
import java.util.List;

/**
 * Provides default functionality for a phoneme to rune transcriber.
 * 
 * @param <R> Rune type parameter.
 */
public final class DefaultRuneTranscriber<R extends Rune> implements RuneTranscriber<R>
{
    /** Delegate. */
    private final DefaultTranscriber<Phoneme, R> delegate = new DefaultTranscriber<Phoneme, R>();

    @Override
    public List<Phoneme> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public List<R> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final List<Phoneme> fromSequence, final List<R> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void put(final Phoneme phoneme, final R rune)
    {
        final List<Phoneme> fromSequence = Collections.singletonList(phoneme);
        final List<R> toSequence = Collections.singletonList(rune);

        putForward(fromSequence, toSequence);
        putReverse(fromSequence, toSequence);
    }

    @Override
    public void putForward(final List<Phoneme> fromSequence, final List<R> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putForward(final Phoneme phoneme, final R rune)
    {
        final List<Phoneme> fromSequence = Collections.singletonList(phoneme);
        final List<R> toSequence = Collections.singletonList(rune);

        putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final List<Phoneme> fromSequence, final List<R> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final Phoneme phoneme, final R rune)
    {
        final List<Phoneme> fromSequence = Collections.singletonList(phoneme);
        final List<R> toSequence = Collections.singletonList(rune);

        putReverse(fromSequence, toSequence);
    }

    @Override
    public List<R> transcribeForward(final List<Phoneme> fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public List<Phoneme> transcribeReverse(final List<R> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
