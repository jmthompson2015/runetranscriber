package org.runetranscriber.core;

import java.util.List;

/**
 * Defines methods required by a bi-directional transcriber.
 * 
 * @param <A> From sequence type.
 * @param <B> To sequence type.
 */
public interface Transcriber<A, B>
{
    /**
     * @return a copy of the last fromSequence
     */
    List<A> getFromSequence();

    /**
     * @return a copy of the last toSequence
     */
    List<B> getToSequence();

    /**
     * @param fromSequence From sequence.
     * @param toSequence To sequence.
     */
    void put(final List<A> fromSequence, final List<B> toSequence);

    /**
     * @param fromSequence From sequence.
     * @param toSequence To sequence.
     */
    void putForward(final List<A> fromSequence, final List<B> toSequence);

    /**
     * @param fromSequence From sequence.
     * @param toSequence To sequence.
     */
    void putReverse(final List<A> fromSequence, final List<B> toSequence);

    /**
     * @param fromSequence From sequence.
     * 
     * @return a list of elements representing the input.
     */
    List<B> transcribeForward(List<A> fromSequence);

    /**
     * @param toSequence To sequence.
     * 
     * @return a list of elements representing the input.
     */
    List<A> transcribeReverse(List<B> toSequence);
}
