package org.runetranscriber.core;

import java.util.Collections;
import java.util.List;

/**
 * Provides a test implementation of a rune transcriber.
 */
public class MyTestRuneTranscriber implements RuneTranscriber<MyTestRune>
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
    public List<Phoneme> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public List<MyTestRune> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final List<Phoneme> fromSequence, final List<MyTestRune> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    /**
     * @param phoneme Phoneme.
     * @param runes Runes.
     */
    public void put(final Phoneme phoneme, final MyTestRune... runes)
    {
        final List<Phoneme> fromSequence = Collections.singletonList(phoneme);
        final List<MyTestRune> toSequence = MyTestRune.asList(runes);

        put(fromSequence, toSequence);
    }

    @Override
    public void put(final Phoneme phoneme, final MyTestRune rune)
    {
        delegate.put(phoneme, rune);
    }

    @Override
    public void putForward(final List<Phoneme> fromSequence, final List<MyTestRune> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putForward(final Phoneme phoneme, final MyTestRune rune)
    {
        delegate.putForward(phoneme, rune);
    }

    @Override
    public void putReverse(final List<Phoneme> fromSequence, final List<MyTestRune> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final Phoneme phoneme, final MyTestRune rune)
    {
        delegate.putReverse(phoneme, rune);
    }

    @Override
    public List<MyTestRune> transcribeForward(final List<Phoneme> fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public List<Phoneme> transcribeReverse(final List<MyTestRune> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
