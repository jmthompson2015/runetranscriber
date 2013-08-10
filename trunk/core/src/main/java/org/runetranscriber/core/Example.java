package org.runetranscriber.core;

/**
 * Defines methods required by an example.
 * 
 * @param <R> Rune type parameter.
 * @param <F> Font letter type parameter.
 */
public interface Example<R extends Rune, F extends FontLetter>
{
    /**
     * @return font letters.
     */
    FontLetterList<F> getFontLetters();

    /**
     * @return language letters.
     */
    LanguageLetterList getLanguageLetters();

    /**
     * @return phonemes.
     */
    PhonemeList getPhonemes();

    /**
     * @return runes.
     */
    RuneList<R> getRunes();
}
