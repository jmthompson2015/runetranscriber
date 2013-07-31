package org.runetranscriber.core;

import java.util.List;

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
    List<String> getFontLetters();

    /**
     * @return language letters.
     */
    List<String> getLanguageLetters();

    /**
     * @return phonemes.
     */
    List<Phoneme> getPhonemes();

    /**
     * @return runes.
     */
    List<R> getRunes();
}
