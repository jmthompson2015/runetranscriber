package org.runetranscriber.core;

import java.awt.Font;

/**
 * Provides a test implementation of a font transcriber.
 */
public final class MyTestFontTranscriber implements FontTranscriber<MyTestRune, MyTestFontLetter>
{
    /** Delegate. */
    private final DefaultFontTranscriber<MyTestRune, MyTestFontLetter> delegate = new DefaultFontTranscriber<MyTestRune, MyTestFontLetter>(
            "");

    /**
     * Construct this object.
     */
    public MyTestFontTranscriber()
    {
        put(MyTestRune.T, MyTestFontLetter.T);
        put(MyTestRune.H, MyTestFontLetter.H);
        put(MyTestRune.E, MyTestFontLetter.E);
        put(MyTestRune.O, MyTestFontLetter.O);
        put(MyTestRune.B, MyTestFontLetter.B);
        put(MyTestRune.I, MyTestFontLetter.I);
        put(MyTestRune.R, MyTestFontLetter.R);
        put(MyTestRune.A, MyTestFontLetter.A);
        put(MyTestRune.N, MyTestFontLetter.N);
        put(MyTestRune.D, MyTestFontLetter.D);
        put(MyTestRune.K, MyTestFontLetter.K);
        put(MyTestRune.G, MyTestFontLetter.G);

        put(MyTestRune.SPACE, MyTestFontLetter.SPACE);
        put(MyTestRune.COMMA, MyTestFontLetter.COMMA);
        put(MyTestRune.PERIOD, MyTestFontLetter.PERIOD);
        put(MyTestRune.NEWLINE, MyTestFontLetter.NEWLINE);
    }

    @Override
    public float getDefaultFontSize()
    {
        return delegate.getDefaultFontSize();
    }

    @Override
    public Font getFont()
    {
        return delegate.getFont();
    }

    @Override
    public Font getFont(final float fontSize)
    {
        return delegate.getFont(fontSize);
    }

    @Override
    public RuneList<MyTestRune> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public FontLetterList<MyTestFontLetter> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final MyTestRune rune, final MyTestFontLetter fontLetter)
    {
        delegate.put(rune, fontLetter);
    }

    @Override
    public void put(final RuneList<MyTestRune> fromSequence, final FontLetterList<MyTestFontLetter> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final RuneList<MyTestRune> fromSequence, final FontLetterList<MyTestFontLetter> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final RuneList<MyTestRune> fromSequence, final FontLetterList<MyTestFontLetter> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public FontLetterList<MyTestFontLetter> transcribeForward(final RuneList<MyTestRune> fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public RuneList<MyTestRune> transcribeReverse(final FontLetterList<MyTestFontLetter> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
