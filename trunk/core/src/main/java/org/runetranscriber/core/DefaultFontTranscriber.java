package org.runetranscriber.core;

import java.awt.Font;
import java.awt.FontFormatException;
import java.io.IOException;
import java.io.InputStream;

/**
 * Provides default functionality for a rune to font character transcriber.
 * 
 * @param <R> Rune type parameter.
 */
public final class DefaultFontTranscriber<R extends Rune> implements FontTranscriber<R>
{
    /** Delegate. */
    private final DefaultTranscriber<RuneList<R>, R, FontLetterList, String> delegate;

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
        delegate = new DefaultTranscriber<RuneList<R>, R, FontLetterList, String>(new RuneListFactory<R>(),
                new FontLetterListFactory());
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
    public RuneList<R> getFromSequence()
    {
        return new RuneList<R>(delegate.getFromSequence());
    }

    @Override
    public FontLetterList getToSequence()
    {
        return new FontLetterList(delegate.getToSequence());
    }

    /**
     * @param rune From rune.
     * @param fontLetter To font letter.
     */
    @Override
    public void put(final R rune, final String fontLetter)
    {
        final RuneList<R> fromSequence = new RuneList<R>(rune);
        final FontLetterList toSequence = new FontLetterList(fontLetter);

        putForward(fromSequence, toSequence);
        putReverse(fromSequence, toSequence);
    }

    @Override
    public void put(final RuneList<R> fromSequence, final FontLetterList toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final RuneList<R> fromSequence, final FontLetterList toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final RuneList<R> fromSequence, final FontLetterList toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public FontLetterList transcribeForward(final RuneList<R> fromSequence)
    {
        return new FontLetterList(delegate.transcribeForward(fromSequence));
    }

    @Override
    public RuneList<R> transcribeReverse(final FontLetterList toSequence)
    {
        return new RuneList<R>(delegate.transcribeReverse(toSequence));
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
