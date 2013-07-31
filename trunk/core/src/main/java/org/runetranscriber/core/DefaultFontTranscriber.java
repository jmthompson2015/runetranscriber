package org.runetranscriber.core;

import java.awt.Font;
import java.awt.FontFormatException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.List;

/**
 * Provides default functionality for a rune to font character transcriber.
 * 
 * @param <R> Rune type parameter.
 */
public final class DefaultFontTranscriber<R extends Rune> implements FontTranscriber<R>
{
    /** Delegate. */
    private final DefaultTranscriber<R, String> delegate = new DefaultTranscriber<R, String>();

    /** Original font. */
    private Font originalFont;

    /** Font. */
    private Font font;

    /** Font filename. */
    private final String fontFilename;

    /**
     * Construct this object.
     * 
     * @param fontFilename Font filename.
     */
    @SuppressWarnings("hiding")
    public DefaultFontTranscriber(final String fontFilename)
    {
        this.fontFilename = fontFilename;
    }

    @Override
    public float getDefaultFontSize()
    {
        return 24f;
    }

    @Override
    public Font getFont()
    {
        if (font == null)
        {
            font = getFont(getDefaultFontSize());
        }

        return font;
    }

    @Override
    public Font getFont(final float fontSize)
    {
        if (originalFont == null)
        {
            originalFont = loadFont(getFontFilename());
        }

        font = originalFont.deriveFont(fontSize);

        return font;
    }

    @Override
    public List<R> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public List<String> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final List<R> fromSequence, final List<String> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    /**
     * @param rune From rune.
     * @param fontLetter To font letter.
     */
    @Override
    public void put(final R rune, final String fontLetter)
    {
        final List<R> fromSequence = Collections.singletonList(rune);
        final List<String> toSequence = Collections.singletonList(fontLetter);

        putForward(fromSequence, toSequence);
        putReverse(fromSequence, toSequence);
    }

    @Override
    public void putForward(final List<R> fromSequence, final List<String> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final List<R> fromSequence, final List<String> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public List<String> transcribeForward(final List<R> fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public List<R> transcribeReverse(final List<String> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }

    /**
     * @return the fontFilename
     */
    private String getFontFilename()
    {
        return fontFilename;
    }

    /**
     * @param fontFilename Font filename.
     * 
     * @return the font loaded from the file.
     */
    @SuppressWarnings("hiding")
    private Font loadFont(final String fontFilename)
    {
        Font answer = null;

        InputStream inputStream = null;

        try
        {
            inputStream = getClass().getResourceAsStream(fontFilename);

            if (inputStream == null)
            {
                throw new RuntimeException("can't find font");
            }

            try
            {
                answer = Font.createFont(Font.TRUETYPE_FONT, inputStream);
            }
            catch (final FontFormatException e)
            {
                throw new RuntimeException(e);
            }
            catch (final IOException e)
            {
                throw new RuntimeException(e);
            }
        }
        finally
        {
            if (inputStream != null)
            {
                try
                {
                    inputStream.close();
                }
                catch (final IOException e)
                {
                    throw new RuntimeException(e);
                }
            }
        }

        return answer;
    }
}
