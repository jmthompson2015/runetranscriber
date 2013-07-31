package org.runetranscriber.core;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;

/**
 * Provides default functionality for a string to phoneme transcriber.
 */
public final class DefaultPhoneticTranscriber implements PhoneticTranscriber
{
    /** Delegate. */
    private final DefaultTranscriber<String, Phoneme> delegate = new DefaultTranscriber<String, Phoneme>();

    @Override
    public List<String> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public List<Phoneme> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final List<String> fromSequence, final List<Phoneme> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void put(final String fromString, final Phoneme... toSequence)
    {
        final List<String> fromSequence = ListUtilities.convert(fromString);
        final List<Phoneme> myToSequence = Phoneme.asList(toSequence);

        delegate.putForward(fromSequence, myToSequence);
        delegate.putReverse(fromSequence, myToSequence);
    }

    @Override
    public void putForward(final List<String> fromSequence, final List<Phoneme> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putForward(final String string, final Phoneme phoneme)
    {
        final List<String> list = ListUtilities.convert(string);
        delegate.putForward(list, Collections.singletonList(phoneme));
    }

    @Override
    public void putReverse(final List<String> fromSequence, final List<Phoneme> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final String string, final Phoneme... phonemes)
    {
        final List<String> list = ListUtilities.convert(string);
        final List<Phoneme> toSequence = Phoneme.asList(phonemes);

        delegate.putReverse(list, toSequence);
    }

    @Override
    public List<Phoneme> transcribeForward(final List<String> input)
    {
        List<Phoneme> answer = null;

        if (CollectionUtils.isNotEmpty(input))
        {
            // Convert to lower case.
            final List<String> myInput = new ArrayList<String>();

            for (final String element : input)
            {
                myInput.add(element.toLowerCase());
            }

            answer = delegate.transcribeForward(myInput);
        }

        return answer;
    }

    @Override
    public List<String> transcribeReverse(final List<Phoneme> input)
    {
        List<String> answer = null;

        if (CollectionUtils.isNotEmpty(input))
        {
            answer = delegate.transcribeReverse(input);

            // Trim a trailing space.
            if (CollectionUtils.isNotEmpty(answer))
            {
                if (" ".equals(answer.get(answer.size() - 1)))
                {
                    answer.remove(answer.size() - 1);
                }
            }
        }

        return answer;
    }
}
