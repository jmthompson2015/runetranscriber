package org.runetranscriber.core.viking;

import java.awt.Font;
import java.util.List;

import org.runetranscriber.core.DefaultFontTranscriber;
import org.runetranscriber.core.FontTranscriber;

/**
 * Provides a rune to font letter transcriber.
 */
public final class AngloSaxonFontTranscriber implements FontTranscriber<AngloSaxonRune>
{
    /** Delegate. */
    private final DefaultFontTranscriber<AngloSaxonRune> delegate = new DefaultFontTranscriber<AngloSaxonRune>(
            "/Junicode-Bold.ttf");

    /**
     * Construct this object.
     */
    public AngloSaxonFontTranscriber()
    {
        put(AngloSaxonRune.FEOH, AngloSaxonFontLetter.FEOH);
        put(AngloSaxonRune.UR, AngloSaxonFontLetter.UR);
        put(AngloSaxonRune.THORN, AngloSaxonFontLetter.THORN);
        put(AngloSaxonRune.OS, AngloSaxonFontLetter.OS);
        put(AngloSaxonRune.RAD, AngloSaxonFontLetter.RAD);
        put(AngloSaxonRune.CEN, AngloSaxonFontLetter.CEN);
        put(AngloSaxonRune.GYFU, AngloSaxonFontLetter.GYFU);
        put(AngloSaxonRune.WYNN, AngloSaxonFontLetter.WYNN);
        put(AngloSaxonRune.HAEGL, AngloSaxonFontLetter.HAEGL);
        put(AngloSaxonRune.NYD, AngloSaxonFontLetter.NYD);
        put(AngloSaxonRune.IS, AngloSaxonFontLetter.IS);
        put(AngloSaxonRune.GER, AngloSaxonFontLetter.GER);
        put(AngloSaxonRune.EOH, AngloSaxonFontLetter.EOH);
        put(AngloSaxonRune.PEORD, AngloSaxonFontLetter.PEORD);
        put(AngloSaxonRune.EOLH, AngloSaxonFontLetter.EOLH);
        put(AngloSaxonRune.SIGEL, AngloSaxonFontLetter.SIGEL);
        put(AngloSaxonRune.TIW, AngloSaxonFontLetter.TIW);
        put(AngloSaxonRune.BEORC, AngloSaxonFontLetter.BEORC);
        put(AngloSaxonRune.EH, AngloSaxonFontLetter.EH);
        put(AngloSaxonRune.MANN, AngloSaxonFontLetter.MANN);
        put(AngloSaxonRune.LAGU, AngloSaxonFontLetter.LAGU);
        put(AngloSaxonRune.ING, AngloSaxonFontLetter.ING);
        put(AngloSaxonRune.EOEL, AngloSaxonFontLetter.EOEL);
        put(AngloSaxonRune.DAEG, AngloSaxonFontLetter.DAEG);
        put(AngloSaxonRune.AC, AngloSaxonFontLetter.AC);
        put(AngloSaxonRune.AESC, AngloSaxonFontLetter.AESC);
        put(AngloSaxonRune.YR, AngloSaxonFontLetter.YR);
        put(AngloSaxonRune.IOR, AngloSaxonFontLetter.IOR);
        put(AngloSaxonRune.EAR, AngloSaxonFontLetter.EAR);

        put(AngloSaxonRune.SPACE, AngloSaxonFontLetter.SPACE);
        put(AngloSaxonRune.COMMA, AngloSaxonFontLetter.COMMA);
        put(AngloSaxonRune.PERIOD, AngloSaxonFontLetter.PERIOD);
        put(AngloSaxonRune.NEWLINE, AngloSaxonFontLetter.NEWLINE);
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
    public List<AngloSaxonRune> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public List<String> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final AngloSaxonRune rune, final String fontLetter)
    {
        delegate.put(rune, fontLetter);
    }

    @Override
    public void put(final List<AngloSaxonRune> fromSequence, final List<String> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final List<AngloSaxonRune> fromSequence, final List<String> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final List<AngloSaxonRune> fromSequence, final List<String> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public List<String> transcribeForward(final List<AngloSaxonRune> fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public List<AngloSaxonRune> transcribeReverse(final List<String> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
