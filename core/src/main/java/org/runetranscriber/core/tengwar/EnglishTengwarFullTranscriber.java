package org.runetranscriber.core.tengwar;

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
 * Provides a full transcriber for English language to Tengwar runes.
 */
public final class EnglishTengwarFullTranscriber implements FullTranscriber<TengwaRune, TengwaFontLetter>
{
    /** Delegate. */
    private final FullTranscriber<TengwaRune, TengwaFontLetter> delegate;

    /**
     * Construct this object.
     */
    public EnglishTengwarFullTranscriber()
    {
        final String displayName = "English to Tengwar rune transcriber";
        final String description = "Transcribes English to Tengwar runes and back.";
        final PhoneticTranscriber phoneticTranscriber = new EnglishTengwarPhoneticTranscriber();
        final RuneTranscriber<TengwaRune> runeTranscriber = new TengwarRuneTranscriber();
        final FontTranscriber<TengwaRune, TengwaFontLetter> fontTranscriber = new TengwarFontTranscriber();

        delegate = new DefaultFullTranscriber<TengwaRune, TengwaFontLetter>(displayName, description,
                phoneticTranscriber, runeTranscriber, fontTranscriber);
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
    public FontLetterList<TengwaFontLetter> getFontLetters()
    {
        return delegate.getFontLetters();
    }

    @Override
    public FontTranscriber<TengwaRune, TengwaFontLetter> getFontTranscriber()
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
    public RuneList<TengwaRune> getRunes()
    {
        return delegate.getRunes();
    }

    @Override
    public RuneTranscriber<TengwaRune> getRuneTranscriber()
    {
        return delegate.getRuneTranscriber();
    }

    @Override
    public FontLetterList<TengwaFontLetter> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final LanguageLetterList fromSequence, final FontLetterList<TengwaFontLetter> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final LanguageLetterList fromSequence, final FontLetterList<TengwaFontLetter> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final LanguageLetterList fromSequence, final FontLetterList<TengwaFontLetter> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public FontLetterList<TengwaFontLetter> transcribeForward(final LanguageLetterList fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public LanguageLetterList transcribeReverse(final FontLetterList<TengwaFontLetter> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
