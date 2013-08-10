package org.runetranscriber.core.cirth;

import java.awt.Font;

import org.runetranscriber.core.DefaultFontTranscriber;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.RuneList;

/**
 * Provides a rune to font character transcriber.
 */
public final class CirthFontTranscriber implements FontTranscriber<Certh, CerthFontLetter>
{
    /** Delegate. */
    private final DefaultFontTranscriber<Certh, CerthFontLetter> delegate = new DefaultFontTranscriber<Certh, CerthFontLetter>(
            "/ANGERTH.TTF");

    /**
     * Construct this object.
     */
    public CirthFontTranscriber()
    {
        put(Certh.C1, CerthFontLetter.C1);
        put(Certh.C2, CerthFontLetter.C2);
        put(Certh.C3, CerthFontLetter.C3);
        put(Certh.C4, CerthFontLetter.C4);
        put(Certh.C5, CerthFontLetter.C5);
        put(Certh.C6, CerthFontLetter.C6);
        put(Certh.C7, CerthFontLetter.C7);
        put(Certh.C8, CerthFontLetter.C8);
        put(Certh.C9, CerthFontLetter.C9);
        put(Certh.C10, CerthFontLetter.C10);
        put(Certh.C11, CerthFontLetter.C11);
        put(Certh.C12, CerthFontLetter.C12);
        put(Certh.C13, CerthFontLetter.C13);
        put(Certh.C14, CerthFontLetter.C14);
        put(Certh.C15, CerthFontLetter.C15);

        put(Certh.C16, CerthFontLetter.C16);
        put(Certh.C17, CerthFontLetter.C17);
        put(Certh.C18, CerthFontLetter.C18);
        put(Certh.C19, CerthFontLetter.C19);
        put(Certh.C20, CerthFontLetter.C20);
        put(Certh.C21, CerthFontLetter.C21);
        put(Certh.C22, CerthFontLetter.C22);
        put(Certh.C23, CerthFontLetter.C23);
        put(Certh.C24, CerthFontLetter.C24);
        put(Certh.C25, CerthFontLetter.C25);
        put(Certh.C26, CerthFontLetter.C26);
        put(Certh.C27, CerthFontLetter.C27);
        put(Certh.C28, CerthFontLetter.C28);
        put(Certh.C29, CerthFontLetter.C29);
        put(Certh.C30, CerthFontLetter.C30);

        put(Certh.C31, CerthFontLetter.C31);
        put(Certh.C32, CerthFontLetter.C32);
        put(Certh.C33, CerthFontLetter.C33);
        put(Certh.C34, CerthFontLetter.C34);
        put(Certh.C35, CerthFontLetter.C35);
        put(Certh.C36, CerthFontLetter.C36);
        put(Certh.C37, CerthFontLetter.C37);
        put(Certh.C38, CerthFontLetter.C38);
        put(Certh.C39, CerthFontLetter.C39);
        put(Certh.C40, CerthFontLetter.C40);
        put(Certh.C41, CerthFontLetter.C41);
        put(Certh.C42, CerthFontLetter.C42);
        put(Certh.C43, CerthFontLetter.C43);
        put(Certh.C44, CerthFontLetter.C44);
        put(Certh.C45, CerthFontLetter.C45);

        put(Certh.C46, CerthFontLetter.C46);
        put(Certh.C47, CerthFontLetter.C47);
        put(Certh.C48, CerthFontLetter.C48);
        put(Certh.C49, CerthFontLetter.C49);
        put(Certh.C50, CerthFontLetter.C50);
        put(Certh.C51, CerthFontLetter.C51);
        put(Certh.C52, CerthFontLetter.C52);
        put(Certh.C53, CerthFontLetter.C53);
        put(Certh.C54, CerthFontLetter.C54);
        put(Certh.C55, CerthFontLetter.C55);
        put(Certh.C56, CerthFontLetter.C56);
        put(Certh.C57, CerthFontLetter.C57);
        put(Certh.C58, CerthFontLetter.C58);
        put(Certh.C59, CerthFontLetter.C59);
        put(Certh.C60, CerthFontLetter.C60);

        /** Punctuation. */
        put(Certh.SPACE, CerthFontLetter.SPACE);
        put(Certh.COMMA, CerthFontLetter.COMMA);
        put(Certh.PERIOD, CerthFontLetter.PERIOD);
        put(Certh.NEWLINE, CerthFontLetter.NEWLINE);
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
    public RuneList<Certh> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public FontLetterList<CerthFontLetter> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final Certh rune, final CerthFontLetter fontLetter)
    {
        delegate.put(rune, fontLetter);
    }

    @Override
    public void put(final RuneList<Certh> fromSequence, final FontLetterList<CerthFontLetter> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final RuneList<Certh> fromSequence, final FontLetterList<CerthFontLetter> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final RuneList<Certh> fromSequence, final FontLetterList<CerthFontLetter> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public FontLetterList<CerthFontLetter> transcribeForward(final RuneList<Certh> fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public RuneList<Certh> transcribeReverse(final FontLetterList<CerthFontLetter> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
