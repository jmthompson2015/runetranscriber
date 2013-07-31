package org.runetranscriber.core;

import java.util.ArrayList;
import java.util.List;

/**
 * Provides base functionality for an example.
 * 
 * @param <R> Rune type parameter.
 */
public abstract class AbstractExample<R extends Rune> implements Example<R>
{
    /** Font letters. */
    protected List<String> fontLetters;

    /** Language letters. */
    protected List<String> languageLetters;

    /** Phonemes. */
    protected List<Phoneme> phonemes;

    /** Runes. */
    protected List<R> runes;

    @Override
    public List<String> getFontLetters()
    {
        if (fontLetters == null)
        {
            fontLetters = createFontLetters();
        }

        return fontLetters;
    }

    @Override
    public List<String> getLanguageLetters()
    {
        if (languageLetters == null)
        {
            languageLetters = createLanguageLetters();
        }

        return languageLetters;
    }

    @Override
    public List<Phoneme> getPhonemes()
    {
        if (phonemes == null)
        {
            phonemes = createPhonemes();
        }

        return phonemes;
    }

    /**
     * @return runes.
     */
    @Override
    public List<R> getRunes()
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
    protected abstract List<String> createFontLetters();

    /**
     * @return a new list.
     */
    protected abstract List<String> createLanguageLetters();

    /**
     * @param runes Runes.
     * 
     * @return a new list.
     */
    @SuppressWarnings("hiding")
    protected List<R> createList(final R[] runes)
    {
        final List<R> answer = new ArrayList<R>();

        for (final R rune : runes)
        {
            answer.add(rune);
        }

        return answer;
    }

    /**
     * @return a new list.
     */
    protected abstract List<Phoneme> createPhonemes();

    /**
     * @return a new list.
     */
    protected abstract List<R> createRunes();
}
