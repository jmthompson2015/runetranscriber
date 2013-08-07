package org.runetranscriber.core.cirth;

import org.runetranscriber.core.DefaultRuneTranscriber;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.RuneTranscriber;

/**
 * Provides a transcriber for <a href="http://ring-lord.tripod.com/cirth/angerthaserebor.htm">Cirth Angerthas Erebor
 * runes</a>.
 */
public final class CirthEreborRuneTranscriber implements RuneTranscriber<Certh>
{
    /** Delegate. */
    private final DefaultRuneTranscriber<Certh> delegate = new DefaultRuneTranscriber<Certh>();

    /**
     * Construct this object.
     */
    public CirthEreborRuneTranscriber()
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
        put(Phoneme.R, Certh.C12);
        put(Phoneme.CH, Certh.C13);
        put(Phoneme.J, Certh.C14);
        put(Phoneme.SH, Certh.C15);

        put(Phoneme.ZH, Certh.C16);
        put(Phoneme.KS, Certh.C17);
        put(Phoneme.K, Certh.C18);
        put(Phoneme.G, Certh.C19);
        put(Phoneme.KH, Certh.C20);
        put(Phoneme.GH, Certh.C21);
        put(Phoneme.N, Certh.C22);
        put(Phoneme.KW, Certh.C23);
        put(Phoneme.GW, Certh.C24);
        put(Phoneme.KHW, Certh.C25);
        put(Phoneme.GHW, Certh.C26);
        put(Phoneme.NGW, Certh.C27);
        put(Phoneme.NW, Certh.C28);
        put(Phoneme.G, Certh.C29);
        put(Phoneme.GH, Certh.C30);

        put(Phoneme.L, Certh.C31);
        // 32 n/a
        put(Phoneme.ND, Certh.C33);
        put(Phoneme.S, Certh.C34);
        putReverse(Phoneme.S, Certh.C35);
        put(Phoneme.NG2, Certh.C36);
        put(Phoneme.NG, Certh.C37);
        put(Phoneme.OU, Certh.C38);
        put(Phoneme.I, Certh.C39); // vowel
        put(Phoneme.Y, Certh.C40);
        put(Phoneme.HY, Certh.C41);
        put(Phoneme.U, Certh.C42); // vowel
        put(Phoneme.Z, Certh.C43);
        put(Phoneme.W, Certh.C44);
        put(Phoneme.UE, Certh.C45);

        put(Phoneme.E, Certh.C46); // vowel
        put(Phoneme.EE, Certh.C47);
        put(Phoneme.A, Certh.C48);
        put(Phoneme.AA, Certh.C49);
        put(Phoneme.O, Certh.C50); // vowel
        put(Phoneme.OO, Certh.C51);
        put(Phoneme.O_DIARESIS, Certh.C52);
        put(Phoneme.N, Certh.valueOfNumber(53));
        put(Phoneme.H, Certh.C54);
        put(Phoneme.SCHWA, Certh.C55);
        put(Phoneme.SCHWA2, Certh.C56);
        put(Phoneme.PS, Certh.valueOfNumber(57));
        put(Phoneme.TS, Certh.valueOfNumber(58));
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
        return delegate.getFromSequence();
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
        return delegate.transcribeReverse(toSequence);
    }
}