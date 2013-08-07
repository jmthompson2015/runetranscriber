package org.runetranscriber.core.cirth;

import java.awt.Font;

import org.runetranscriber.core.DefaultFontTranscriber;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.RuneList;

/**
 * Provides a rune to font character transcriber.
 */
public final class CirthFontTranscriber implements FontTranscriber<Certh>
{
    /** Delegate. */
    private final DefaultFontTranscriber<Certh> delegate = new DefaultFontTranscriber<Certh>("/ANGERTH.TTF");

    /**
     * Construct this object.
     */
    public CirthFontTranscriber()
    {
        put(Certh.C1, CirthFontLetter.C1);
        put(Certh.C2, CirthFontLetter.C2);
        put(Certh.C3, CirthFontLetter.C3);
        put(Certh.C4, CirthFontLetter.C4);
        put(Certh.C5, CirthFontLetter.C5);
        put(Certh.C6, CirthFontLetter.C6);
        put(Certh.C7, CirthFontLetter.C7);
        put(Certh.C8, CirthFontLetter.C8);
        put(Certh.C9, CirthFontLetter.C9);
        put(Certh.C10, CirthFontLetter.C10);
        put(Certh.C11, CirthFontLetter.C11);
        put(Certh.C12, CirthFontLetter.C12);
        put(Certh.C13, CirthFontLetter.C13);
        put(Certh.C14, CirthFontLetter.C14);
        put(Certh.C15, CirthFontLetter.C15);

        put(Certh.C16, CirthFontLetter.C16);
        put(Certh.C17, CirthFontLetter.C17);
        put(Certh.C18, CirthFontLetter.C18);
        put(Certh.C19, CirthFontLetter.C19);
        put(Certh.C20, CirthFontLetter.C20);
        put(Certh.C21, CirthFontLetter.C21);
        put(Certh.C22, CirthFontLetter.C22);
        put(Certh.C23, CirthFontLetter.C23);
        put(Certh.C24, CirthFontLetter.C24);
        put(Certh.C25, CirthFontLetter.C25);
        put(Certh.C26, CirthFontLetter.C26);
        put(Certh.C27, CirthFontLetter.C27);
        put(Certh.C28, CirthFontLetter.C28);
        put(Certh.C29, CirthFontLetter.C29);
        put(Certh.C30, CirthFontLetter.C30);

        put(Certh.C31, CirthFontLetter.C31);
        put(Certh.C32, CirthFontLetter.C32);
        put(Certh.C33, CirthFontLetter.C33);
        put(Certh.C34, CirthFontLetter.C34);
        put(Certh.C35, CirthFontLetter.C35);
        put(Certh.C36, CirthFontLetter.C36);
        put(Certh.C37, CirthFontLetter.C37);
        put(Certh.C38, CirthFontLetter.C38);
        put(Certh.C39, CirthFontLetter.C39);
        put(Certh.C40, CirthFontLetter.C40);
        put(Certh.C41, CirthFontLetter.C41);
        put(Certh.C42, CirthFontLetter.C42);
        put(Certh.C43, CirthFontLetter.C43);
        put(Certh.C44, CirthFontLetter.C44);
        put(Certh.C45, CirthFontLetter.C45);

        put(Certh.C46, CirthFontLetter.C46);
        put(Certh.C47, CirthFontLetter.C47);
        put(Certh.C48, CirthFontLetter.C48);
        put(Certh.C49, CirthFontLetter.C49);
        put(Certh.C50, CirthFontLetter.C50);
        put(Certh.C51, CirthFontLetter.C51);
        put(Certh.C52, CirthFontLetter.C52);
        put(Certh.C53, CirthFontLetter.C53);
        put(Certh.C54, CirthFontLetter.C54);
        put(Certh.C55, CirthFontLetter.C55);
        put(Certh.C56, CirthFontLetter.C56);
        put(Certh.C57, CirthFontLetter.C57);
        put(Certh.C58, CirthFontLetter.C58);
        put(Certh.C59, CirthFontLetter.C59);
        put(Certh.C60, CirthFontLetter.C60);

        /** Punctuation. */
        put(Certh.SPACE, CirthFontLetter.SPACE);
        put(Certh.COMMA, CirthFontLetter.COMMA);
        put(Certh.PERIOD, CirthFontLetter.PERIOD);
        put(Certh.NEWLINE, CirthFontLetter.NEWLINE);
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
    public FontLetterList getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final Certh rune, final String fontLetter)
    {
        delegate.put(rune, fontLetter);
    }

    @Override
    public void put(final RuneList<Certh> fromSequence, final FontLetterList toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final RuneList<Certh> fromSequence, final FontLetterList toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final RuneList<Certh> fromSequence, final FontLetterList toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public FontLetterList transcribeForward(final RuneList<Certh> fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public RuneList<Certh> transcribeReverse(final FontLetterList toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
