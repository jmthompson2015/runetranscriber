package org.runetranscriber.core;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.collections.CollectionUtils;

/**
 * Provides default functionality for a transcriber.
 * 
 * @param <A> From sequence type.
 * @param <E> From element type.
 * @param <B> To sequence type.
 * @param <F> To element type.
 */
public final class DefaultTranscriber<A extends List<E>, E, B extends List<F>, F> implements Transcriber<A, E, B, F>
{
    /** Map of fromSequence to toSequence. */
    private final Map<A, B> forwardMap = new LinkedHashMap<A, B>();

    /** Last from sequence. */
    private A fromSequence;

    /** Map of toSequence to fromSequence. */
    private final Map<B, A> reverseMap = new LinkedHashMap<B, A>();

    /** Last to sequence. */
    private B toSequence;

    /** A list factory. */
    private final ListFactory<A, E> aListFactory;

    /** B list factory. */
    private final ListFactory<B, F> bListFactory;

    /**
     * Construct this object.
     * 
     * @param aListFactory A list factory.
     * @param bListFactory B list factory.
     */
    @SuppressWarnings("hiding")
    public DefaultTranscriber(final ListFactory<A, E> aListFactory, final ListFactory<B, F> bListFactory)
    {
        this.aListFactory = aListFactory;
        this.bListFactory = bListFactory;
    }

    @Override
    public A getFromSequence()
    {
        A answer = null;

        if (fromSequence != null)
        {
            answer = aListFactory.create(fromSequence);
        }

        return answer;
    }

    @Override
    public B getToSequence()
    {
        B answer = null;

        if (toSequence != null)
        {
            answer = bListFactory.create(toSequence);
        }

        return answer;
    }

    @Override
    @SuppressWarnings("hiding")
    public void put(final A fromSequence, final B toSequence)
    {
        forwardMap.put(fromSequence, toSequence);
        reverseMap.put(toSequence, fromSequence);
    }

    @Override
    @SuppressWarnings("hiding")
    public void putForward(final A fromSequence, final B toSequence)
    {
        forwardMap.put(fromSequence, toSequence);
    }

    @Override
    @SuppressWarnings("hiding")
    public void putReverse(final A fromSequence, final B toSequence)
    {
        reverseMap.put(toSequence, fromSequence);
    }

    @SuppressWarnings("hiding")
    @Override
    public B transcribeForward(final A fromSequence)
    {
        B answer = null;

        this.fromSequence = fromSequence;

        if (CollectionUtils.isNotEmpty(fromSequence))
        {
            final int size = fromSequence.size();
            answer = bListFactory.create();

            for (int i = 0; i < size; i++)
            {
                @SuppressWarnings("unchecked")
                final A inputSubList = (A)fromSequence.subList(i, size);
                final Entry<A, B> entry = getEntryForward(inputSubList);

                if (entry != null)
                {
                    final A fromElements = entry.getKey();
                    final B toElements = entry.getValue();
                    answer.addAll(toElements);
                    i += fromElements.size() - 1;
                }
                else
                {
                    System.err.println(getClass().getSimpleName() + " missing toSequence for inputSubList: "
                            + inputSubList);
                }
            }
        }

        return answer;
    }

    @SuppressWarnings("hiding")
    @Override
    public A transcribeReverse(final B toSequence)
    {
        A answer = null;

        this.toSequence = toSequence;

        if (CollectionUtils.isNotEmpty(toSequence))
        {
            final int size = toSequence.size();
            answer = aListFactory.create();

            for (int i = 0; i < size; i++)
            {
                @SuppressWarnings("unchecked")
                final B inputSubList = (B)toSequence.subList(i, size);
                final Entry<B, A> entry = getEntryReverse(inputSubList);

                if (entry != null)
                {
                    final B fromElements = entry.getKey();
                    final A toElements = entry.getValue();
                    answer.addAll(toElements);
                    i += fromElements.size() - 1;
                }
                else
                {
                    System.err.println(getClass().getSimpleName() + " missing fromSequence for inputSubList: "
                            + inputSubList);
                }
            }
        }

        return answer;
    }

    /**
     * @param fromSequence From sequence.
     * 
     * @return the map entry for the given parameter.
     */
    @SuppressWarnings("hiding")
    protected Entry<A, B> getEntryForward(final A fromSequence)
    {
        Entry<A, B> answer = null;

        for (final Entry<A, B> entry : forwardMap.entrySet())
        {
            final int end = entry.getKey().size();

            if (end <= fromSequence.size())
            {
                final A inputSequence = aListFactory.create(fromSequence.subList(0, end));

                if (entry.getKey().equals(inputSequence))
                {
                    answer = entry;
                    break;
                }
            }
        }

        return answer;
    }

    /**
     * @param toSequence Input.
     * 
     * @return the map entry for the given parameter.
     */
    @SuppressWarnings("hiding")
    protected Entry<B, A> getEntryReverse(final B toSequence)
    {
        Entry<B, A> answer = null;

        for (final Entry<B, A> entry : reverseMap.entrySet())
        {
            final int end = entry.getKey().size();

            if (end <= toSequence.size())
            {
                final B inputSequence = bListFactory.create(toSequence.subList(0, end));

                if (entry.getKey().equals(inputSequence))
                {
                    answer = entry;
                    break;
                }
            }
        }

        return answer;
    }
}
