package org.runetranscriber.core;

import java.awt.Font;
import java.util.List;

/**
 * Provides a test implementation of a font transcriber.
 */
public class MyTestFontTranscriber implements FontTranscriber<MyTestRune>
{
    /** Delegate. */
    private final DefaultFontTranscriber<MyTestRune> delegate = new DefaultFontTranscriber<MyTestRune>("");

    /**
     * Construct this object.
     */
    public MyTestFontTranscriber()
    {
        put(MyTestRune.T, "t");
        put(MyTestRune.H, "h");
        put(MyTestRune.E, "e");
        put(MyTestRune.O, "o");
        put(MyTestRune.B, "b");
        put(MyTestRune.I, "i");
        put(MyTestRune.R, "r");
        put(MyTestRune.A, "a");
        put(MyTestRune.N, "n");
        put(MyTestRune.D, "d");
        put(MyTestRune.K, "k");
        put(MyTestRune.G, "g");

        put(MyTestRune.SPACE, " ");
        put(MyTestRune.COMMA, ",");
        put(MyTestRune.PERIOD, ".");
        put(MyTestRune.NEWLINE, "\n");
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
    public List<MyTestRune> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public List<String> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final List<MyTestRune> fromSequence, final List<String> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void put(final MyTestRune rune, final String fontLetter)
    {
        delegate.put(rune, fontLetter);
    }

    @Override
    public void putForward(final List<MyTestRune> fromSequence, final List<String> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final List<MyTestRune> fromSequence, final List<String> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public List<String> transcribeForward(final List<MyTestRune> fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public List<MyTestRune> transcribeReverse(final List<String> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
