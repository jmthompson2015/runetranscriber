package org.runetranscriber.core;

/**
 * Defines methods required by a phoneme to rune transcriber.
 * 
 * @param <R> Rune type parameter.
 */
public interface RuneTranscriber<R extends Rune> extends Transcriber<Phoneme, R>
{
    /**
     * @param phoneme From phoneme.
     * @param rune To rune.
     */
    void put(final Phoneme phoneme, final R rune);

    /**
     * @param phoneme From phoneme.
     * @param rune To rune.
     */
    void putForward(final Phoneme phoneme, final R rune);

    /**
     * @param phoneme From phoneme.
     * @param rune To rune.
     */
    void putReverse(final Phoneme phoneme, final R rune);
}
