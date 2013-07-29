package org.runetranscriber.core;

/**
 * Defines methods required by a language to phonetic transcriber.
 */
public interface PhoneticTranscriber extends Transcriber<String, Phoneme>
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
