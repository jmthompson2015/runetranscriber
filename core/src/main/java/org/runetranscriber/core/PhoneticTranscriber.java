package org.runetranscriber.core;

/**
 * Defines methods required by a language letter to phonetic transcriber.
 */
public interface PhoneticTranscriber extends Transcriber<LanguageLetterList, String, PhonemeList, Phoneme>
{
    /**
     * @param fromString From string.
     * @param toSequence To sequence.
     */
    void put(final String fromString, final Phoneme... toSequence);

    /**
     * @param phoneme Phoneme.
     * @param string String.
     */
    void putForward(final String string, final Phoneme phoneme);

    /**
     * @param phonemes Phonemes.
     * @param string String.
     */
    void putReverse(final String string, final Phoneme... phonemes);
}
