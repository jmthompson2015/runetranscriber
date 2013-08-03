package org.runetranscriber.core;

import java.util.List;

/**
 * Provides a factory to create a phoneme list.
 */
public final class PhonemeListFactory implements ListFactory<PhonemeList, Phoneme>
{
    @Override
    public PhonemeList create()
    {
        return new PhonemeList();
    }

    @Override
    public PhonemeList create(final List<Phoneme> another)
    {
        return new PhonemeList(another);
    }
}
