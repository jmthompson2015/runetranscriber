package org.runetranscriber.core;

import java.util.List;

/**
 * Defines methods required by a bi-directional transcriber.
 * 
 * @param <A> From sequence type.
 * @param <E> From element type.
 * @param <B> To sequence type.
 * @param <F> To element type.
 */
public interface Transcriber<A extends List<E>, E, B extends List<F>, F>
{
    /**
     * @return a copy of the last fromSequence
     */
    A getFromSequence();

    /**
     * @return a copy of the last toSequence
     */
    B getToSequence();

    /**
     * @param fromSequence From sequence.
     * @param toSequence To sequence.
     */
    void put(final A fromSequence, final B toSequence);

    /**
     * @param fromSequence From sequence.
     * @param toSequence To sequence.
     */
    void putForward(final A fromSequence, final B toSequence);

    /**
     * @param fromSequence From sequence.
     * @param toSequence To sequence.
     */
    void putReverse(final A fromSequence, final B toSequence);

    /**
     * @param fromSequence From sequence.
     * 
     * @return a list of elements representing the input.
     */
    B transcribeForward(A fromSequence);

    /**
     * @param toSequence To sequence.
     * 
     * @return a list of elements representing the input.
     */
    A transcribeReverse(B toSequence);
}
