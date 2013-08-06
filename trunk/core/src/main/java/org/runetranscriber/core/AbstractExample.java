package org.runetranscriber.core;

/**
 * Provides base functionality for an example.
 * 
 * @param <R> Rune type parameter.
 */
public abstract class AbstractExample<R extends Rune> implements Example<R>
{
    /** Font letters. */
    protected FontLetterList fontLetters;

    /** Language letters. */
    protected LanguageLetterList languageLetters;

    /** Phonemes. */
    protected PhonemeList phonemes;

    /** Runes. */
    protected RuneList<R> runes;

    @Override
    public FontLetterList getFontLetters()
    {
        if (fontLetters == null)
        {
            fontLetters = createFontLetters();
        }

        return fontLetters;
    }

    @Override
    public LanguageLetterList getLanguageLetters()
    {
        if (languageLetters == null)
        {
            languageLetters = createLanguageLetters();
        }

        return languageLetters;
    }

    @Override
    public PhonemeList getPhonemes()
    {
        if (phonemes == null)
        {
            phonemes = createPhonemes();
        }

        return phonemes;
    }

    @Override
    public RuneList<R> getRunes()
    {
        if (runes == null)
        {
            runes = createRunes();
        }

        return runes;
    }

    /**
     * @return a new list.
     */
    protected abstract FontLetterList createFontLetters();

    /**
     * @return a new list.
     */
    protected abstract LanguageLetterList createLanguageLetters();

    /**
     * @return a new list.
     */
    protected abstract PhonemeList createPhonemes();

    /**
     * @return a new list.
     */
    protected abstract RuneList<R> createRunes();
}
