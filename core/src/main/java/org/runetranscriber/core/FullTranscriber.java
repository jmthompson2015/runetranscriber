package org.runetranscriber.core;

import java.util.List;

/**
 * Provides a full transcriber from language to font letters.
 * 
 * @param <R> Rune type parameter.
 */
public final class FullTranscriber<R extends Rune> implements Transcriber<String, String>
{
    /** Description. */
    private final String description;

    /** Display name. */
    private final String displayName;

    /** Font letters. */
    private List<String> fontLetters;

    /** Font transcriber. */
    private final FontTranscriber<R> fontTranscriber;

    /** Language letters. */
    private List<String> languageLetters;

    /** Phonemes. */
    private List<Phoneme> phonemes;

    /** Phonetic transcriber. */
    private final PhoneticTranscriber phoneticTranscriber;

    /** Runes. */
    private List<R> runes;

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
    public FullTranscriber(final String displayName, final String description,
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
    public String getDescription()
    {
        return description;
    }

    /**
     * @return the displayName
     */
    public String getDisplayName()
    {
        return displayName;
    }

    /**
     * @return the fontLetters
     */
    public List<String> getFontLetters()
    {
        return fontLetters;
    }

    /**
     * @return the fontTranscriber
     */
    public FontTranscriber<R> getFontTranscriber()
    {
        return fontTranscriber;
    }

    @Override
    public List<String> getFromSequence()
    {
        throw new RuntimeException("method not implemented");
    }

    /**
     * @return the languageLetters
     */
    public List<String> getLanguageLetters()
    {
        return languageLetters;
    }

    /**
     * @return the phonemes
     */
    public List<Phoneme> getPhonemes()
    {
        return phonemes;
    }

    /**
     * @return the phoneticTranscriber
     */
    public PhoneticTranscriber getPhoneticTranscriber()
    {
        return phoneticTranscriber;
    }

    /**
     * @return the runes
     */
    public List<R> getRunes()
    {
        return runes;
    }

    /**
     * @return the runeTranscriber
     */
    public RuneTranscriber<R> getRuneTranscriber()
    {
        return runeTranscriber;
    }

    @Override
    public List<String> getToSequence()
    {
        throw new RuntimeException("method not implemented");
    }

    @Override
    public void put(final List<String> fromSequence, final List<String> toSequence)
    {
        throw new RuntimeException("method not implemented");

    }

    @Override
    public void putForward(final List<String> fromSequence, final List<String> toSequence)
    {
        throw new RuntimeException("method not implemented");
    }

    @Override
    public void putReverse(final List<String> fromSequence, final List<String> toSequence)
    {
        throw new RuntimeException("method not implemented");
    }

    @Override
    public List<String> transcribeForward(final List<String> input)
    {
        languageLetters = input;
        phonemes = phoneticTranscriber.transcribeForward(languageLetters);
        runes = runeTranscriber.transcribeForward(phonemes);
        fontLetters = fontTranscriber.transcribeForward(runes);

        return fontLetters;
    }

    @Override
    public List<String> transcribeReverse(final List<String> input)
    {
        fontLetters = input;
        runes = fontTranscriber.transcribeReverse(fontLetters);
        phonemes = runeTranscriber.transcribeReverse(runes);
        languageLetters = phoneticTranscriber.transcribeReverse(phonemes);

        return languageLetters;
    }
}