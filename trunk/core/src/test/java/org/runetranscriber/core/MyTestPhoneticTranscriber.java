package org.runetranscriber.core;

/**
 * Provides a test implementation of a phonetic transcriber.
 */
public final class MyTestPhoneticTranscriber implements PhoneticTranscriber
{
    /** Delegate. */
    private final DefaultPhoneticTranscriber delegate = new DefaultPhoneticTranscriber();

    /**
     * Construct this object.
     */
    public MyTestPhoneticTranscriber()
    {
        super();

        put("th", Phoneme.TH);

        put("e", Phoneme.E);
        put("o", Phoneme.O);
        put("b", Phoneme.B);
        put("i", Phoneme.I);
        put("r", Phoneme.R);
        put("a", Phoneme.A);
        put("n", Phoneme.N);
        put("d", Phoneme.D);
        put("c", Phoneme.K);
        put("k", Phoneme.K);
        put("g", Phoneme.G);
        put("n", Phoneme.N);
        put("t", Phoneme.T);
        put("h", Phoneme.H);

        put(" ", Phoneme.SPACE);
        put(",", Phoneme.COMMA);
        put(".", Phoneme.PERIOD);
        put("\n", Phoneme.NEWLINE);
    }

    @Override
    public LanguageLetterList getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public PhonemeList getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final LanguageLetterList fromSequence, final PhonemeList toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void put(final String fromString, final Phoneme... toSequence)
    {
        delegate.put(fromString, toSequence);
    }

    @Override
    public void putForward(final LanguageLetterList fromSequence, final PhonemeList toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putForward(final String string, final Phoneme phoneme)
    {
        delegate.putForward(string, phoneme);
    }

    @Override
    public void putReverse(final LanguageLetterList fromSequence, final PhonemeList toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final String string, final Phoneme... phonemes)
    {
        delegate.putReverse(string, phonemes);
    }

    @Override
    public PhonemeList transcribeForward(final LanguageLetterList input)
    {
        return delegate.transcribeForward(input);
    }

    @Override
    public LanguageLetterList transcribeReverse(final PhonemeList input)
    {
        return delegate.transcribeReverse(input);
    }
}
