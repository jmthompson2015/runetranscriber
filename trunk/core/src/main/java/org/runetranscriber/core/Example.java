package org.runetranscriber.core;


/**
 * Defines methods required by an example.
 * 
 * @param <R> Rune type parameter.
 */
public interface Example<R extends Rune>
{
    /**
     * @return font letters.
     */
    FontLetterList getFontLetters();

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
