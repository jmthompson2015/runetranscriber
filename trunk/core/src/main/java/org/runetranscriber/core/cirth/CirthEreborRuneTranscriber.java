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
public final class CirthEreborRuneTranscriber implements RuneTranscriber<CerthRune>
{
    /** Delegate. */
    private final DefaultRuneTranscriber<CerthRune> delegate = new DefaultRuneTranscriber<CerthRune>();

    /**
     * Construct this object.
     */
    public CirthEreborRuneTranscriber()
    {
        put(Phoneme.P, CerthRune.C1);
        put(Phoneme.B, CerthRune.C2);
        put(Phoneme.F, CerthRune.C3);
        put(Phoneme.V, CerthRune.C4);
        put(Phoneme.HW, CerthRune.C5);
        put(Phoneme.M, CerthRune.C6);
        put(Phoneme.MB, CerthRune.C7);
        put(Phoneme.T, CerthRune.C8);
        put(Phoneme.D, CerthRune.C9);
        put(Phoneme.TH, CerthRune.C10);

        put(Phoneme.DH, CerthRune.C11);
        put(Phoneme.R, CerthRune.C12);
        put(Phoneme.CH, CerthRune.C13);
        put(Phoneme.J, CerthRune.C14);
        put(Phoneme.SH, CerthRune.C15);

        put(Phoneme.ZH, CerthRune.C16);
        put(Phoneme.KS, CerthRune.C17);
        put(Phoneme.K, CerthRune.C18);
        put(Phoneme.G, CerthRune.C19);
        put(Phoneme.KH, CerthRune.C20);
        put(Phoneme.GH, CerthRune.C21);
        put(Phoneme.N, CerthRune.C22);
        put(Phoneme.KW, CerthRune.C23);
        put(Phoneme.GW, CerthRune.C24);
        put(Phoneme.KHW, CerthRune.C25);
        put(Phoneme.GHW, CerthRune.C26);
        put(Phoneme.NGW, CerthRune.C27);
        put(Phoneme.NW, CerthRune.C28);
        put(Phoneme.G, CerthRune.C29);
        put(Phoneme.GH, CerthRune.C30);

        put(Phoneme.L, CerthRune.C31);
        // 32 n/a
        put(Phoneme.ND, CerthRune.C33);
        put(Phoneme.S, CerthRune.C34);
        putReverse(Phoneme.S, CerthRune.C35);
        put(Phoneme.NG2, CerthRune.C36);
        put(Phoneme.NG, CerthRune.C37);
        put(Phoneme.OU, CerthRune.C38);
        put(Phoneme.I, CerthRune.C39); // vowel
        put(Phoneme.Y, CerthRune.C40);
        put(Phoneme.HY, CerthRune.C41);
        put(Phoneme.U, CerthRune.C42); // vowel
        put(Phoneme.Z, CerthRune.C43);
        put(Phoneme.W, CerthRune.C44);
        put(Phoneme.UE, CerthRune.C45);

        put(Phoneme.E, CerthRune.C46); // vowel
        put(Phoneme.EE, CerthRune.C47);
        put(Phoneme.A, CerthRune.C48);
        put(Phoneme.AA, CerthRune.C49);
        put(Phoneme.O, CerthRune.C50); // vowel
        put(Phoneme.OO, CerthRune.C51);
        put(Phoneme.O_DIARESIS, CerthRune.C52);
        put(Phoneme.N, CerthRune.valueOfNumber(53));
        put(Phoneme.H, CerthRune.C54);
        put(Phoneme.SCHWA, CerthRune.C55);
        put(Phoneme.SCHWA2, CerthRune.C56);
        put(Phoneme.PS, CerthRune.valueOfNumber(57));
        put(Phoneme.TS, CerthRune.valueOfNumber(58));
        put(Phoneme.PLUS_H, CerthRune.C59);
        put(Phoneme.AMP, CerthRune.C60);

        /** Punctuation. */
        put(Phoneme.SPACE, CerthRune.SPACE);
        put(Phoneme.COMMA, CerthRune.COMMA);
        put(Phoneme.PERIOD, CerthRune.PERIOD);
        put(Phoneme.NEWLINE, CerthRune.NEWLINE);
    }

    @Override
    public PhonemeList getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public RuneList<CerthRune> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final Phoneme phoneme, final CerthRune rune)
    {
        delegate.put(phoneme, rune);
    }

    @Override
    public void put(final PhonemeList fromSequence, final RuneList<CerthRune> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final Phoneme phoneme, final CerthRune rune)
    {
        delegate.putForward(phoneme, rune);
    }

    @Override
    public void putForward(final PhonemeList fromSequence, final RuneList<CerthRune> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final Phoneme phoneme, final CerthRune rune)
    {
        delegate.putReverse(phoneme, rune);
    }

    @Override
    public void putReverse(final PhonemeList fromSequence, final RuneList<CerthRune> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public RuneList<CerthRune> transcribeForward(final PhonemeList fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public PhonemeList transcribeReverse(final RuneList<CerthRune> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
