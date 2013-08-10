package org.runetranscriber.core;

/**
 * Provides base functionality for an example.
 * 
 * @param <R> Rune type parameter.
 * @param <F> Font letter type parameter.
 */
public abstract class AbstractExample<R extends Rune, F extends FontLetter> implements Example<R, F>
{
    /** Font letters. */
    protected FontLetterList<F> fontLetters;

    /** Language letters. */
    protected LanguageLetterList languageLetters;

    /** Phonemes. */
    protected PhonemeList phonemes;

    /** Runes. */
    protected RuneList<R> runes;

    @Override
    public FontLetterList<F> getFontLetters()
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
    protected abstract FontLetterList<F> createFontLetters();

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
