package org.runetranscriber.core;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.apache.commons.collections.CollectionUtils;

/**
 * Provides default functionality for a transcriber.
 * 
 * @param <A> From sequence type.
 * @param <B> To sequence type.
 */
public final class DefaultTranscriber<A, B> implements Transcriber<A, B>
{
    /** Map of fromSequence to toSequence. */
    private final Map<List<A>, List<B>> forwardMap = new LinkedHashMap<List<A>, List<B>>();

    /** Last from sequence. */
    private List<A> fromSequence;

    /** Map of toSequence to fromSequence. */
    private final Map<List<B>, List<A>> reverseMap = new LinkedHashMap<List<B>, List<A>>();

    /** Last to sequence. */
    private List<B> toSequence;

    @Override
    public List<A> getFromSequence()
    {
        List<A> answer = null;

        if (fromSequence != null)
        {
            answer = new ArrayList<A>(fromSequence);
        }

        return answer;
    }

    @Override
    public List<B> getToSequence()
    {
        List<B> answer = null;

        if (toSequence != null)
        {
            answer = new ArrayList<B>(toSequence);
        }

        return answer;
    }

    @Override
    @SuppressWarnings("hiding")
    public void put(final List<A> fromSequence, final List<B> toSequence)
    {
        forwardMap.put(fromSequence, toSequence);
        reverseMap.put(toSequence, fromSequence);
    }

    @Override
    @SuppressWarnings("hiding")
    public void putForward(final List<A> fromSequence, final List<B> toSequence)
    {
        forwardMap.put(fromSequence, toSequence);
    }

    @Override
    @SuppressWarnings("hiding")
    public void putReverse(final List<A> fromSequence, final List<B> toSequence)
    {
        reverseMap.put(toSequence, fromSequence);
    }

    @SuppressWarnings("hiding")
    @Override
    public List<B> transcribeForward(final List<A> fromSequence)
    {
        List<B> answer = null;

        this.fromSequence = fromSequence;

        if (CollectionUtils.isNotEmpty(fromSequence))
        {
            final int size = fromSequence.size();
            answer = new ArrayList<B>();

            for (int i = 0; i < size; i++)
            {
                final List<A> inputSubList = fromSequence.subList(i, size);
                final Entry<List<A>, List<B>> entry = getEntryForward(inputSubList);

                if (entry != null)
                {
                    final List<A> fromElements = entry.getKey();
                    final List<B> toElements = entry.getValue();
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
    public List<A> transcribeReverse(final List<B> toSequence)
    {
        List<A> answer = null;

        this.toSequence = toSequence;

        if (CollectionUtils.isNotEmpty(toSequence))
        {
            final int size = toSequence.size();
            answer = new ArrayList<A>();

            for (int i = 0; i < size; i++)
            {
                final List<B> inputSubList = toSequence.subList(i, size);
                final Entry<List<B>, List<A>> entry = getEntryReverse(inputSubList);

                if (entry != null)
                {
                    final List<B> fromElements = entry.getKey();
                    final List<A> toElements = entry.getValue();
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
    protected Entry<List<A>, List<B>> getEntryForward(final List<A> fromSequence)
    {
        Entry<List<A>, List<B>> answer = null;

        for (final Entry<List<A>, List<B>> entry : forwardMap.entrySet())
        {
            final int end = entry.getKey().size();

            if (end <= fromSequence.size())
            {
                final List<A> inputSequence = new ArrayList<A>(fromSequence.subList(0, end));

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
    protected Entry<List<B>, List<A>> getEntryReverse(final List<B> toSequence)
    {
        Entry<List<B>, List<A>> answer = null;

        for (final Entry<List<B>, List<A>> entry : reverseMap.entrySet())
        {
            final int end = entry.getKey().size();

            if (end <= toSequence.size())
            {
                final List<B> inputSequence = new ArrayList<B>(toSequence.subList(0, end));

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
