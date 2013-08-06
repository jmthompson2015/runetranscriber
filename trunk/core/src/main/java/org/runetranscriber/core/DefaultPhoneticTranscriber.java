package org.runetranscriber.core;

import org.apache.commons.collections.CollectionUtils;

/**
 * Provides default functionality for a string to phoneme transcriber.
 */
public final class DefaultPhoneticTranscriber implements PhoneticTranscriber
{
    /** Delegate. */
    protected final DefaultTranscriber<LanguageLetterList, String, PhonemeList, Phoneme> delegate;

    /**
     * Construct this object.
     */
    public DefaultPhoneticTranscriber()
    {
        delegate = new DefaultTranscriber<LanguageLetterList, String, PhonemeList, Phoneme>(
                new LanguageLetterListFactory(), new PhonemeListFactory());
    }

    @Override
    public LanguageLetterList getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public PhonemeList getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final LanguageLetterList fromSequence, final PhonemeList toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void put(final String fromString, final Phoneme... toSequence)
    {
        final LanguageLetterList fromSequence = new LanguageLetterList(fromString);
        final PhonemeList myToSequence = new PhonemeList(toSequence);

        delegate.put(fromSequence, myToSequence);
    }

    @Override
    public void putForward(final LanguageLetterList fromSequence, final PhonemeList toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putForward(final String string, final Phoneme phoneme)
    {
        final LanguageLetterList fromSequence = new LanguageLetterList(string);
        final PhonemeList toSequence = new PhonemeList(phoneme);

        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final LanguageLetterList fromSequence, final PhonemeList toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final String string, final Phoneme... phonemes)
    {
        final LanguageLetterList fromSequence = new LanguageLetterList(string);
        final PhonemeList toSequence = new PhonemeList(phonemes);

        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public PhonemeList transcribeForward(final LanguageLetterList fromSequence)
    {
        PhonemeList answer = null;

        if (CollectionUtils.isNotEmpty(fromSequence))
        {
            // Convert to lower case.
            final LanguageLetterList myFromSequence = new LanguageLetterList();

            for (final String element : fromSequence)
            {
                myFromSequence.add(element.toLowerCase());
            }

            answer = delegate.transcribeForward(myFromSequence);
        }

        return answer;
    }

    @Override
    public LanguageLetterList transcribeReverse(final PhonemeList toSequence)
    {
        LanguageLetterList answer = null;

        if (CollectionUtils.isNotEmpty(toSequence))
        {
            answer = delegate.transcribeReverse(toSequence);

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
