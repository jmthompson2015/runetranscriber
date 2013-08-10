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
public class EnglishAngloSaxonFullTranscriber implements FullTranscriber<AngloSaxonRune, AngloSaxonFontLetter>
{
    /** Delegate. */
    private final FullTranscriber<AngloSaxonRune, AngloSaxonFontLetter> delegate;

    /**
     * Construct this object.
     */
    public EnglishAngloSaxonFullTranscriber()
    {
        final String displayName = "English to Anglo-Saxon rune transcriber";
        final String description = "Transcribes English to Anglo-Saxon runes and back.";
        final PhoneticTranscriber phoneticTranscriber = new EnglishAngloSaxonPhoneticTranscriber();
        final RuneTranscriber<AngloSaxonRune> runeTranscriber = new AngloSaxonRuneTranscriber();
        final FontTranscriber<AngloSaxonRune, AngloSaxonFontLetter> fontTranscriber = new AngloSaxonFontTranscriber();

        delegate = new DefaultFullTranscriber<AngloSaxonRune, AngloSaxonFontLetter>(displayName, description,
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
    public FontLetterList<AngloSaxonFontLetter> getFontLetters()
    {
        return delegate.getFontLetters();
    }

    @Override
    public FontTranscriber<AngloSaxonRune, AngloSaxonFontLetter> getFontTranscriber()
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
    public FontLetterList<AngloSaxonFontLetter> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final LanguageLetterList fromSequence, final FontLetterList<AngloSaxonFontLetter> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final LanguageLetterList fromSequence, final FontLetterList<AngloSaxonFontLetter> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final LanguageLetterList fromSequence, final FontLetterList<AngloSaxonFontLetter> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public FontLetterList<AngloSaxonFontLetter> transcribeForward(final LanguageLetterList fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public LanguageLetterList transcribeReverse(final FontLetterList<AngloSaxonFontLetter> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
