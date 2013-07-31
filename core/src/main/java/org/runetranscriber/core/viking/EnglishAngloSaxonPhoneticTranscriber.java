package org.runetranscriber.core.viking;

import java.util.List;

import org.runetranscriber.core.DefaultPhoneticTranscriber;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhoneticTranscriber;

/**
 * Provides an English phonetic transcriber for Anglo-Saxon runes.
 */
public final class EnglishAngloSaxonPhoneticTranscriber implements PhoneticTranscriber
{
    /** Delegate. */
    private final DefaultPhoneticTranscriber delegate = new DefaultPhoneticTranscriber();

    /**
     * Construct this object.
     */
    public EnglishAngloSaxonPhoneticTranscriber()
    {
        putReverse("record", Phoneme.R, Phoneme.E, Phoneme.K, Phoneme.O, Phoneme.R, Phoneme.D);
        putReverse("comp", Phoneme.K, Phoneme.O, Phoneme.M, Phoneme.P);
        putReverse("door", Phoneme.D, Phoneme.O, Phoneme.R);
        putReverse("ck", Phoneme.K, Phoneme.K);

        put("last", Phoneme.L, Phoneme.A, Phoneme.S, Phoneme.T);
        put("walk", Phoneme.W, Phoneme.O, Phoneme.L, Phoneme.K);
        put("when", Phoneme.H, Phoneme.W, Phoneme.E, Phoneme.N);

        put("ear", Phoneme.EA, Phoneme.R);

        put("ee", Phoneme.OE);
        put("eo", Phoneme.EO);
        put("ng", Phoneme.NG2);
        put("oo", Phoneme.O);
        put("th", Phoneme.TH);

        put("a", Phoneme.AE);
        put("b", Phoneme.B);
        put("c", Phoneme.K);
        put("d", Phoneme.D);
        put("e", Phoneme.E);
        put("f", Phoneme.F);
        put("g", Phoneme.G);
        put("h", Phoneme.H);
        put("i", Phoneme.I);
        put("j", Phoneme.J);
        put("k", Phoneme.K);
        put("l", Phoneme.L);
        put("m", Phoneme.M);
        put("n", Phoneme.N);
        put("o", Phoneme.O);
        put("p", Phoneme.P);
        put("r", Phoneme.R);
        put("s", Phoneme.S);
        put("t", Phoneme.T);
        put("u", Phoneme.U);
        put("v", Phoneme.V);
        put("w", Phoneme.W);
        put("y", Phoneme.Y);

        // Punctuation.
        put(", ", Phoneme.COMMA);
        put(". ", Phoneme.PERIOD);
        put(" ", Phoneme.SPACE);
        put("\n", Phoneme.NEWLINE);

        putForward(",", Phoneme.COMMA);
        putForward(".", Phoneme.PERIOD);
        putForward("'s", Phoneme.S);
    }

    @Override
    public List<String> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public List<Phoneme> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final List<String> fromSequence, final List<Phoneme> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void put(final String fromString, final Phoneme... toSequence)
    {
        delegate.put(fromString, toSequence);
    }

    @Override
    public void putForward(final List<String> fromSequence, final List<Phoneme> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putForward(final String string, final Phoneme phoneme)
    {
        delegate.putForward(string, phoneme);
    }

    @Override
    public void putReverse(final List<String> fromSequence, final List<Phoneme> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final String string, final Phoneme... phonemes)
    {
        delegate.putReverse(string, phonemes);
    }

    @Override
    public List<Phoneme> transcribeForward(final List<String> input)
    {
        return delegate.transcribeForward(input);
    }

    @Override
    public List<String> transcribeReverse(final List<Phoneme> input)
    {
        return delegate.transcribeReverse(input);
    }
}
