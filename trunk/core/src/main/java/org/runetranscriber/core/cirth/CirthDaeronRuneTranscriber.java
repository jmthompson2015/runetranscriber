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
        put(Phoneme.P, Certh.C1);
        put(Phoneme.B, Certh.C2);
        put(Phoneme.F, Certh.C3);
        put(Phoneme.V, Certh.C4);
        put(Phoneme.HW, Certh.C5);
        put(Phoneme.M, Certh.C6);
        put(Phoneme.MB, Certh.C7);
        put(Phoneme.T, Certh.C8);
        put(Phoneme.D, Certh.C9);
        put(Phoneme.TH, Certh.C10);
        put(Phoneme.DH, Certh.C11);
        put(Phoneme.N, Certh.C12);
        put(Phoneme.CH, Certh.C13);
        put(Phoneme.J, Certh.C14);
        put(Phoneme.SH, Certh.C15);

        put(Phoneme.ZH, Certh.C16);
        put(Phoneme.NJ, Certh.C17);
        put(Phoneme.K, Certh.C18);
        put(Phoneme.G, Certh.C19);
        put(Phoneme.KH, Certh.C20);
        put(Phoneme.GH, Certh.C21);
        put(Phoneme.NG2, Certh.C22);
        put(Phoneme.KW, Certh.C23);
        put(Phoneme.GW, Certh.C24);
        put(Phoneme.KHW, Certh.C25);
        put(Phoneme.GHW, Certh.C26);
        put(Phoneme.NGW, Certh.C27);
        put(Phoneme.NW, Certh.C28);
        put(Phoneme.R, Certh.C29);
        put(Phoneme.RH, Certh.C30);

        put(Phoneme.L, Certh.C31);
        put(Phoneme.LH, Certh.C32);
        put(Phoneme.NG, Certh.C33);
        put(Phoneme.S, Certh.C34);
        put(Phoneme.S, Certh.C35);
        put(Phoneme.Z, Certh.C36);
        // 37 n/a
        put(Phoneme.ND, Certh.C38);
        put(Phoneme.I, Certh.C39); // vowel
        // 40 n/a
        // 41 n/a
        put(Phoneme.U, Certh.C42); // vowel
        put(Phoneme.UU, Certh.C43);
        put(Phoneme.W, Certh.C44);
        put(Phoneme.UE, Certh.C45);

        put(Phoneme.E, Certh.C46); // vowel
        put(Phoneme.EE, Certh.C47);
        put(Phoneme.A, Certh.C48);
        put(Phoneme.AA, Certh.C49);
        put(Phoneme.O, Certh.C50); // vowel
        put(Phoneme.OO, Certh.C51);
        put(Phoneme.O_DIARESIS, Certh.C52);
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
