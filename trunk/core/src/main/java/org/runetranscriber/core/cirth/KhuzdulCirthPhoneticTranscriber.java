package org.runetranscriber.core.cirth;

import org.runetranscriber.core.Constants;
import org.runetranscriber.core.DefaultPhoneticTranscriber;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.PhoneticTranscriber;

/**
 * Provides a Khuzdul phonetic transcriber for Cirth runes.
 */
public final class KhuzdulCirthPhoneticTranscriber implements PhoneticTranscriber
{
    /** Delegate. */
    private final DefaultPhoneticTranscriber delegate = new DefaultPhoneticTranscriber();

    /**
     * Construct this object.
     */
    public KhuzdulCirthPhoneticTranscriber()
    {
        put("kh", Phoneme.K, Phoneme.PLUS_H);
        put("nd", Phoneme.ND);

        put("a", Phoneme.A);
        put("b", Phoneme.B);
        put("c", Phoneme.K);
        put("d", Phoneme.D);
        put("e", Phoneme.E);
        put("f", Phoneme.F);
        put("g", Phoneme.G);
        put("i", Phoneme.I);
        put("k", Phoneme.K);
        put("l", Phoneme.L);
        put("m", Phoneme.M);
        put("n", Phoneme.N);
        put("o", Phoneme.O);
        put("r", Phoneme.R);
        put("s", Phoneme.S);
        put("t", Phoneme.T);
        put("u", Phoneme.U);
        put("z", Phoneme.Z);

        put(Constants.U_MACRON, Phoneme.UU);

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
