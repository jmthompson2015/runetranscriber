package org.runetranscriber.core.viking;

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
 * Provides a full transcriber for English language to Anglo-Saxon runes.
 */
public class EnglishAngloSaxonFullTranscriber implements FullTranscriber<AngloSaxonRune>
{
    /** Delegate. */
    private final FullTranscriber<AngloSaxonRune> delegate;

    /**
     * Construct this object.
     */
    public EnglishAngloSaxonFullTranscriber()
    {
        final String displayName = "English to Anglo-Saxon rune transcriber";
        final String description = "Transcribes English to Anglo-Saxon runes and back.";
        final PhoneticTranscriber phoneticTranscriber = new EnglishAngloSaxonPhoneticTranscriber();
        final RuneTranscriber<AngloSaxonRune> runeTranscriber = new AngloSaxonRuneTranscriber();
        final FontTranscriber<AngloSaxonRune> fontTranscriber = new AngloSaxonFontTranscriber();

        delegate = new DefaultFullTranscriber<AngloSaxonRune>(displayName, description, phoneticTranscriber,
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
    public FontLetterList getFontLetters()
    {
        return delegate.getFontLetters();
    }

    @Override
    public FontTranscriber<AngloSaxonRune> getFontTranscriber()
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
    public RuneList<AngloSaxonRune> getRunes()
    {
        return delegate.getRunes();
    }

    @Override
    public RuneTranscriber<AngloSaxonRune> getRuneTranscriber()
    {
        return delegate.getRuneTranscriber();
    }

    @Override
    public FontLetterList getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final LanguageLetterList fromSequence, final FontLetterList toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final LanguageLetterList fromSequence, final FontLetterList toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final LanguageLetterList fromSequence, final FontLetterList toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public FontLetterList transcribeForward(final LanguageLetterList fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public LanguageLetterList transcribeReverse(final FontLetterList toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
