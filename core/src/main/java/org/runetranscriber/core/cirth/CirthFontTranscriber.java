package org.runetranscriber.core.cirth;

import java.awt.Font;

import org.runetranscriber.core.DefaultFontTranscriber;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.RuneList;

/**
 * Provides a rune to font character transcriber.
 */
public final class CirthFontTranscriber implements FontTranscriber<CerthRune, CerthFontLetter>
{
    /** Delegate. */
    private final DefaultFontTranscriber<CerthRune, CerthFontLetter> delegate = new DefaultFontTranscriber<CerthRune, CerthFontLetter>(
            "/ANGERTH.TTF");

    /**
     * Construct this object.
     */
    public CirthFontTranscriber()
    {
        put(CerthRune.C1, CerthFontLetter.C1);
        put(CerthRune.C2, CerthFontLetter.C2);
        put(CerthRune.C3, CerthFontLetter.C3);
        put(CerthRune.C4, CerthFontLetter.C4);
        put(CerthRune.C5, CerthFontLetter.C5);
        put(CerthRune.C6, CerthFontLetter.C6);
        put(CerthRune.C7, CerthFontLetter.C7);
        put(CerthRune.C8, CerthFontLetter.C8);
        put(CerthRune.C9, CerthFontLetter.C9);
        put(CerthRune.C10, CerthFontLetter.C10);
        put(CerthRune.C11, CerthFontLetter.C11);
        put(CerthRune.C12, CerthFontLetter.C12);
        put(CerthRune.C13, CerthFontLetter.C13);
        put(CerthRune.C14, CerthFontLetter.C14);
        put(CerthRune.C15, CerthFontLetter.C15);

        put(CerthRune.C16, CerthFontLetter.C16);
        put(CerthRune.C17, CerthFontLetter.C17);
        put(CerthRune.C18, CerthFontLetter.C18);
        put(CerthRune.C19, CerthFontLetter.C19);
        put(CerthRune.C20, CerthFontLetter.C20);
        put(CerthRune.C21, CerthFontLetter.C21);
        put(CerthRune.C22, CerthFontLetter.C22);
        put(CerthRune.C23, CerthFontLetter.C23);
        put(CerthRune.C24, CerthFontLetter.C24);
        put(CerthRune.C25, CerthFontLetter.C25);
        put(CerthRune.C26, CerthFontLetter.C26);
        put(CerthRune.C27, CerthFontLetter.C27);
        put(CerthRune.C28, CerthFontLetter.C28);
        put(CerthRune.C29, CerthFontLetter.C29);
        put(CerthRune.C30, CerthFontLetter.C30);

        put(CerthRune.C31, CerthFontLetter.C31);
        put(CerthRune.C32, CerthFontLetter.C32);
        put(CerthRune.C33, CerthFontLetter.C33);
        put(CerthRune.C34, CerthFontLetter.C34);
        put(CerthRune.C35, CerthFontLetter.C35);
        put(CerthRune.C36, CerthFontLetter.C36);
        put(CerthRune.C37, CerthFontLetter.C37);
        put(CerthRune.C38, CerthFontLetter.C38);
        put(CerthRune.C39, CerthFontLetter.C39);
        put(CerthRune.C40, CerthFontLetter.C40);
        put(CerthRune.C41, CerthFontLetter.C41);
        put(CerthRune.C42, CerthFontLetter.C42);
        put(CerthRune.C43, CerthFontLetter.C43);
        put(CerthRune.C44, CerthFontLetter.C44);
        put(CerthRune.C45, CerthFontLetter.C45);

        put(CerthRune.C46, CerthFontLetter.C46);
        put(CerthRune.C47, CerthFontLetter.C47);
        put(CerthRune.C48, CerthFontLetter.C48);
        put(CerthRune.C49, CerthFontLetter.C49);
        put(CerthRune.C50, CerthFontLetter.C50);
        put(CerthRune.C51, CerthFontLetter.C51);
        put(CerthRune.C52, CerthFontLetter.C52);
        put(CerthRune.C53, CerthFontLetter.C53);
        put(CerthRune.C54, CerthFontLetter.C54);
        put(CerthRune.C55, CerthFontLetter.C55);
        put(CerthRune.C56, CerthFontLetter.C56);
        put(CerthRune.C57, CerthFontLetter.C57);
        put(CerthRune.C58, CerthFontLetter.C58);
        put(CerthRune.C59, CerthFontLetter.C59);
        put(CerthRune.C60, CerthFontLetter.C60);

        /** Punctuation. */
        put(CerthRune.SPACE, CerthFontLetter.SPACE);
        put(CerthRune.COMMA, CerthFontLetter.COMMA);
        put(CerthRune.PERIOD, CerthFontLetter.PERIOD);
        put(CerthRune.NEWLINE, CerthFontLetter.NEWLINE);
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
    public RuneList<CerthRune> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public FontLetterList<CerthFontLetter> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final CerthRune rune, final CerthFontLetter fontLetter)
    {
        delegate.put(rune, fontLetter);
    }

    @Override
    public void put(final RuneList<CerthRune> fromSequence, final FontLetterList<CerthFontLetter> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final RuneList<CerthRune> fromSequence, final FontLetterList<CerthFontLetter> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final RuneList<CerthRune> fromSequence, final FontLetterList<CerthFontLetter> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public FontLetterList<CerthFontLetter> transcribeForward(final RuneList<CerthRune> fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public RuneList<CerthRune> transcribeReverse(final FontLetterList<CerthFontLetter> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
