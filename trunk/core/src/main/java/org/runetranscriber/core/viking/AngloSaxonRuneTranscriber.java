package org.runetranscriber.core.viking;

import org.runetranscriber.core.DefaultRuneTranscriber;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
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
        putReverse(new PhonemeList(Phoneme.W, Phoneme.AE, Phoneme.L, Phoneme.K), new RuneList<AngloSaxonRune>(
                AngloSaxonRune.WYNN, AngloSaxonRune.OS, AngloSaxonRune.LAGU, AngloSaxonRune.CEN));

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
    public PhonemeList getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public RuneList<AngloSaxonRune> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final Phoneme phoneme, final AngloSaxonRune rune)
    {
        delegate.put(phoneme, rune);
    }

    @Override
    public void put(final PhonemeList fromSequence, final RuneList<AngloSaxonRune> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final Phoneme phoneme, final AngloSaxonRune rune)
    {
        delegate.putForward(phoneme, rune);
    }

    @Override
    public void putForward(final PhonemeList fromSequence, final RuneList<AngloSaxonRune> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final Phoneme phoneme, final AngloSaxonRune rune)
    {
        delegate.putReverse(phoneme, rune);
    }

    @Override
    public void putReverse(final PhonemeList fromSequence, final RuneList<AngloSaxonRune> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public RuneList<AngloSaxonRune> transcribeForward(final PhonemeList fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public PhonemeList transcribeReverse(final RuneList<AngloSaxonRune> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
