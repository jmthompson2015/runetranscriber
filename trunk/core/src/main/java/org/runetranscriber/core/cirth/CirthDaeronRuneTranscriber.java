package org.runetranscriber.core.cirth;

import org.runetranscriber.core.DefaultRuneTranscriber;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.RuneTranscriber;

/**
 * Provides a transcriber for <a href="http://ring-lord.tripod.com/cirth/angerthasdaeron.htm">Cirth Angerthas Daeron
 * runes</a>.
 */
public final class CirthDaeronRuneTranscriber implements RuneTranscriber<Certh>
{
    /** Delegate. */
    private final DefaultRuneTranscriber<Certh> delegate = new DefaultRuneTranscriber<Certh>();

    /**
     * Construct this object.
     */
    public CirthDaeronRuneTranscriber()
    {
        put(Phoneme.P, Certh.P);
        put(Phoneme.B, Certh.B);
        put(Phoneme.F, Certh.F);
        put(Phoneme.V, Certh.V);
        put(Phoneme.HW, Certh.HW);
        put(Phoneme.M, Certh.M);
        put(Phoneme.MB, Certh.MB);
        put(Phoneme.T, Certh.T);
        put(Phoneme.D, Certh.D);
        put(Phoneme.TH, Certh.TH);
        put(Phoneme.DH, Certh.DH);
        put(Phoneme.N, Certh.C12);
        put(Phoneme.CH, Certh.CH); // h or s, according to 35
        put(Phoneme.J, Certh.C14);
        put(Phoneme.SH, Certh.SH); // h or s, according to 35

        put(Phoneme.ZH, Certh.C16);
        put(Phoneme.NJ, Certh.C17);
        put(Phoneme.K, Certh.K);
        put(Phoneme.G, Certh.G);
        put(Phoneme.KH, Certh.KH);
        put(Phoneme.GH, Certh.GH);
        put(Phoneme.NG2, Certh.C22);
        put(Phoneme.KW, Certh.KW);
        put(Phoneme.GW, Certh.GW);
        put(Phoneme.KHW, Certh.KHW);
        put(Phoneme.GHW, Certh.GHW);
        put(Phoneme.NGW, Certh.NGW);
        put(Phoneme.NW, Certh.NW);
        put(Phoneme.R, Certh.C29);
        put(Phoneme.RH, Certh.C30);

        put(Phoneme.L, Certh.L);
        put(Phoneme.LH, Certh.C32);
        put(Phoneme.NG, Certh.C33);
        put(Phoneme.S, Certh.C34);
        put(Phoneme.S, Certh.C35); // s or h
        put(Phoneme.Z, Certh.C36);
        // 37 n/a
        put(Phoneme.ND, Certh.C38);
        put(Phoneme.I, Certh.I); // vowel
        // 40 n/a
        // 41 n/a
        put(Phoneme.U, Certh.U); // vowel
        put(Phoneme.UU, Certh.C43);
        put(Phoneme.W, Certh.W);
        put(Phoneme.UE, Certh.UE);

        put(Phoneme.E, Certh.E); // vowel
        put(Phoneme.EE, Certh.EE);
        put(Phoneme.A, Certh.A);
        put(Phoneme.AA, Certh.AA);
        put(Phoneme.O, Certh.O); // vowel
        put(Phoneme.OO, Certh.OO);
        put(Phoneme.O_DIARESIS, Certh.OE);
        // 53 n/a
        put(Phoneme.H, Certh.C54);
        // 55 n/a
        // 56 n/a
        // 57 n/a
        // 58 n/a
        put(Phoneme.PLUS_H, Certh.C59);
        put(Phoneme.AMP, Certh.C60);

        /** Punctuation. */
        put(Phoneme.SPACE, Certh.SPACE);
        put(Phoneme.COMMA, Certh.COMMA);
        put(Phoneme.PERIOD, Certh.PERIOD);
        put(Phoneme.NEWLINE, Certh.NEWLINE);
    }

    @Override
    public PhonemeList getFromSequence()
    {
        return new PhonemeList(delegate.getFromSequence());
    }

    @Override
    public RuneList<Certh> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final Phoneme phoneme, final Certh rune)
    {
        delegate.put(phoneme, rune);
    }

    @Override
    public void put(final PhonemeList fromSequence, final RuneList<Certh> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final Phoneme phoneme, final Certh rune)
    {
        delegate.putForward(phoneme, rune);
    }

    @Override
    public void putForward(final PhonemeList fromSequence, final RuneList<Certh> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final Phoneme phoneme, final Certh rune)
    {
        delegate.putReverse(phoneme, rune);
    }

    @Override
    public void putReverse(final PhonemeList fromSequence, final RuneList<Certh> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public RuneList<Certh> transcribeForward(final PhonemeList fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public PhonemeList transcribeReverse(final RuneList<Certh> toSequence)
    {
        return new PhonemeList(delegate.transcribeReverse(toSequence));
    }
}