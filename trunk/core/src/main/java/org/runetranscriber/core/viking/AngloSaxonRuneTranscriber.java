package org.runetranscriber.core.viking;

import java.util.List;

import org.runetranscriber.core.DefaultRuneTranscriber;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.RuneTranscriber;

/**
 * Provides a transcriber for <a href="http://en.wikipedia.org/wiki/Anglo-Saxon_runes">anglo saxon runes</a>.
 */
public final class AngloSaxonRuneTranscriber implements RuneTranscriber<AngloSaxonRune>
{
    /** Delegate. */
    private final DefaultRuneTranscriber<AngloSaxonRune> delegate = new DefaultRuneTranscriber<AngloSaxonRune>();

    /**
     * Construct this object.
     */
    public AngloSaxonRuneTranscriber()
    {
        put(Phoneme.F, AngloSaxonRune.FEOH);
        put(Phoneme.U, AngloSaxonRune.UR);
        put(Phoneme.TH, AngloSaxonRune.THORN);
        put(Phoneme.O, AngloSaxonRune.OS);
        put(Phoneme.R, AngloSaxonRune.RAD);
        put(Phoneme.K, AngloSaxonRune.CEN);
        put(Phoneme.G, AngloSaxonRune.GYFU);
        put(Phoneme.W, AngloSaxonRune.WYNN);
        put(Phoneme.H, AngloSaxonRune.HAEGL);
        put(Phoneme.N, AngloSaxonRune.NYD);
        put(Phoneme.I, AngloSaxonRune.IS);
        put(Phoneme.EO, AngloSaxonRune.EOH);
        put(Phoneme.P, AngloSaxonRune.PEORD);
        // put(Phoneme.KS, AngloSaxonRune.EOLH);
        put(Phoneme.S, AngloSaxonRune.SIGEL);
        put(Phoneme.T, AngloSaxonRune.TIW);
        put(Phoneme.B, AngloSaxonRune.BEORC);
        put(Phoneme.E, AngloSaxonRune.EH);
        put(Phoneme.M, AngloSaxonRune.MANN);
        put(Phoneme.L, AngloSaxonRune.LAGU);
        put(Phoneme.NG2, AngloSaxonRune.ING);
        put(Phoneme.OE, AngloSaxonRune.EOEL);
        put(Phoneme.D, AngloSaxonRune.DAEG);
        put(Phoneme.A, AngloSaxonRune.AC);
        put(Phoneme.AE, AngloSaxonRune.AESC);
        put(Phoneme.Y, AngloSaxonRune.YR);
        // put(Phoneme.IA, AngloSaxonRune.IOR);
        put(Phoneme.EA, AngloSaxonRune.EAR);

        putForward(Phoneme.J, AngloSaxonRune.IS);
        putForward(Phoneme.V, AngloSaxonRune.UR);

        put(Phoneme.SPACE, AngloSaxonRune.SPACE);
        put(Phoneme.COMMA, AngloSaxonRune.COMMA);
        put(Phoneme.PERIOD, AngloSaxonRune.PERIOD);
        put(Phoneme.NEWLINE, AngloSaxonRune.NEWLINE);
    }

    @Override
    public List<Phoneme> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public List<AngloSaxonRune> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final List<Phoneme> fromSequence, final List<AngloSaxonRune> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void put(final Phoneme phoneme, final AngloSaxonRune rune)
    {
        delegate.put(phoneme, rune);
    }

    @Override
    public void putForward(final List<Phoneme> fromSequence, final List<AngloSaxonRune> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putForward(final Phoneme phoneme, final AngloSaxonRune rune)
    {
        delegate.putForward(phoneme, rune);
    }

    @Override
    public void putReverse(final List<Phoneme> fromSequence, final List<AngloSaxonRune> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final Phoneme phoneme, final AngloSaxonRune rune)
    {
        delegate.putReverse(phoneme, rune);
    }

    @Override
    public List<AngloSaxonRune> transcribeForward(final List<Phoneme> fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public List<Phoneme> transcribeReverse(final List<AngloSaxonRune> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
