package org.runetranscriber.core.cirth;

import org.runetranscriber.core.DefaultFullTranscriber;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.FullTranscriber;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.PhoneticTranscriber;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.RuneTranscriber;

/**
 * Provides a full transcriber for English language to Cirth (Daeron) runes.
 */
public final class EnglishCirthDaeronFullTranscriber implements FullTranscriber<CerthRune, CerthFontLetter>
{
    /** Delegate. */
    private final FullTranscriber<CerthRune, CerthFontLetter> delegate;

    /**
     * Construct this object.
     */
    public EnglishCirthDaeronFullTranscriber()
    {
        final String displayName = "English to Cirth (Daeron) rune transcriber";
        final String description = "Transcribes English to Cirth (Daeron) runes and back.";
        final PhoneticTranscriber phoneticTranscriber = new EnglishCirthPhoneticTranscriber();
        final RuneTranscriber<CerthRune> runeTranscriber = new CirthDaeronRuneTranscriber();
        final FontTranscriber<CerthRune, CerthFontLetter> fontTranscriber = new CirthFontTranscriber();

        delegate = new DefaultFullTranscriber<CerthRune, CerthFontLetter>(displayName, description, phoneticTranscriber,
                runeTranscriber, fontTranscriber);
    }

    @Override
    public String getDescription()
    {
        return delegate.getDescription();
    }

    @Override
    public String getDisplayName()
    {
        return delegate.getDisplayName();
    }

    @Override
    public FontLetterList<CerthFontLetter> getFontLetters()
    {
        return delegate.getFontLetters();
    }

    @Override
    public FontTranscriber<CerthRune, CerthFontLetter> getFontTranscriber()
    {
        return delegate.getFontTranscriber();
    }

    @Override
    public LanguageLetterList getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public LanguageLetterList getLanguageLetters()
    {
        return delegate.getLanguageLetters();
    }

    @Override
    public PhonemeList getPhonemes()
    {
        return delegate.getPhonemes();
    }

    @Override
    public PhoneticTranscriber getPhoneticTranscriber()
    {
        return delegate.getPhoneticTranscriber();
    }

    @Override
    public RuneList<CerthRune> getRunes()
    {
        return delegate.getRunes();
    }

    @Override
    public RuneTranscriber<CerthRune> getRuneTranscriber()
    {
        return delegate.getRuneTranscriber();
    }

    @Override
    public FontLetterList<CerthFontLetter> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final LanguageLetterList fromSequence, final FontLetterList<CerthFontLetter> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final LanguageLetterList fromSequence, final FontLetterList<CerthFontLetter> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final LanguageLetterList fromSequence, final FontLetterList<CerthFontLetter> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public FontLetterList<CerthFontLetter> transcribeForward(final LanguageLetterList fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public LanguageLetterList transcribeReverse(final FontLetterList<CerthFontLetter> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
