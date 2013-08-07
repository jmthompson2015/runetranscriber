package org.runetranscriber.core;

/**
 * Provides a full transcriber from language letters to font letters.
 * 
 * @param <R> Rune type parameter.
 */
public final class DefaultFullTranscriber<R extends Rune> implements FullTranscriber<R>
{
    /** Description. */
    private final String description;

    /** Display name. */
    private final String displayName;

    /** Font letters. */
    private FontLetterList fontLetters;

    /** Font transcriber. */
    private final FontTranscriber<R> fontTranscriber;

    /** Language letters. */
    private LanguageLetterList languageLetters;

    /** Phonemes. */
    private PhonemeList phonemes;

    /** Phonetic transcriber. */
    private final PhoneticTranscriber phoneticTranscriber;

    /** Runes. */
    private RuneList<R> runes;

    /** Rune transcriber. */
    private final RuneTranscriber<R> runeTranscriber;

    /**
     * Construct this object with the given parameters.
     * 
     * @param displayName Display name.
     * @param description Description.
     * @param phoneticTranscriber Phonetic transcriber.
     * @param runeTranscriber Rune transcriber.
     * @param fontTranscriber Font transcriber.
     */
    @SuppressWarnings("hiding")
    public DefaultFullTranscriber(final String displayName, final String description,
            final PhoneticTranscriber phoneticTranscriber, final RuneTranscriber<R> runeTranscriber,
            final FontTranscriber<R> fontTranscriber)
    {
        this.displayName = displayName;
        this.description = description;
        this.phoneticTranscriber = phoneticTranscriber;
        this.runeTranscriber = runeTranscriber;
        this.fontTranscriber = fontTranscriber;
    }

    /**
     * @return the description
     */
    @Override
    public String getDescription()
    {
        return description;
    }

    /**
     * @return the displayName
     */
    @Override
    public String getDisplayName()
    {
        return displayName;
    }

    /**
     * @return the fontLetters
     */
    @Override
    public FontLetterList getFontLetters()
    {
        return fontLetters;
    }

    /**
     * @return the fontTranscriber
     */
    @Override
    public FontTranscriber<R> getFontTranscriber()
    {
        return fontTranscriber;
    }

    @Override
    public LanguageLetterList getFromSequence()
    {
        return languageLetters;
    }

    /**
     * @return the languageLetters
     */
    @Override
    public LanguageLetterList getLanguageLetters()
    {
        return languageLetters;
    }

    /**
     * @return the phonemes
     */
    @Override
    public PhonemeList getPhonemes()
    {
        return phonemes;
    }

    /**
     * @return the phoneticTranscriber
     */
    @Override
    public PhoneticTranscriber getPhoneticTranscriber()
    {
        return phoneticTranscriber;
    }

    /**
     * @return the runes
     */
    @Override
    public RuneList<R> getRunes()
    {
        return runes;
    }

    /**
     * @return the runeTranscriber
     */
    @Override
    public RuneTranscriber<R> getRuneTranscriber()
    {
        return runeTranscriber;
    }

    @Override
    public FontLetterList getToSequence()
    {
        return fontLetters;
    }

    @Override
    public void put(final LanguageLetterList fromSequence, final FontLetterList toSequence)
    {
        throw new RuntimeException("method not implemented");
    }

    @Override
    public void putForward(final LanguageLetterList fromSequence, final FontLetterList toSequence)
    {
        throw new RuntimeException("method not implemented");
    }

    @Override
    public void putReverse(final LanguageLetterList fromSequence, final FontLetterList toSequence)
    {
        throw new RuntimeException("method not implemented");
    }

    @Override
    public FontLetterList transcribeForward(final LanguageLetterList fromSequence)
    {
        languageLetters = fromSequence;
        phonemes = phoneticTranscriber.transcribeForward(languageLetters);
        runes = runeTranscriber.transcribeForward(phonemes);
        fontLetters = fontTranscriber.transcribeForward(runes);

        return fontLetters;
    }

    @Override
    public LanguageLetterList transcribeReverse(final FontLetterList toSequence)
    {
        fontLetters = toSequence;
        runes = fontTranscriber.transcribeReverse(fontLetters);
        phonemes = runeTranscriber.transcribeReverse(runes);
        languageLetters = phoneticTranscriber.transcribeReverse(phonemes);

        return languageLetters;
    }
}
