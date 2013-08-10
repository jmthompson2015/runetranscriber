package org.runetranscriber.core.viking;

import java.awt.Font;

import org.runetranscriber.core.DefaultFontTranscriber;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.RuneList;

/**
 * Provides a rune to font letter transcriber.
 */
public final class AngloSaxonFontTranscriber implements FontTranscriber<AngloSaxonRune, AngloSaxonFontLetter>
{
    /** Delegate. */
    private final DefaultFontTranscriber<AngloSaxonRune, AngloSaxonFontLetter> delegate = new DefaultFontTranscriber<AngloSaxonRune, AngloSaxonFontLetter>(
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
    public RuneList<AngloSaxonRune> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public FontLetterList<AngloSaxonFontLetter> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final AngloSaxonRune rune, final AngloSaxonFontLetter fontLetter)
    {
        delegate.put(rune, fontLetter);
    }

    @Override
    public void put(final RuneList<AngloSaxonRune> fromSequence, final FontLetterList<AngloSaxonFontLetter> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final RuneList<AngloSaxonRune> fromSequence,
            final FontLetterList<AngloSaxonFontLetter> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final RuneList<AngloSaxonRune> fromSequence,
            final FontLetterList<AngloSaxonFontLetter> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public FontLetterList<AngloSaxonFontLetter> transcribeForward(final RuneList<AngloSaxonRune> fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public RuneList<AngloSaxonRune> transcribeReverse(final FontLetterList<AngloSaxonFontLetter> toSequence)
    {
        return new RuneList<AngloSaxonRune>(delegate.transcribeReverse(toSequence));
    }
}
