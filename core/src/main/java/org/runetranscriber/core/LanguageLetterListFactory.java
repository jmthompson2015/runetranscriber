package org.runetranscriber.core;

import java.util.List;

/**
 * Provides a factory to create a language letter list.
 */
public final class LanguageLetterListFactory implements ListFactory<LanguageLetterList, String>
{
    @Override
    public LanguageLetterList create()
    {
        return new LanguageLetterList();
    }

    @Override
    public LanguageLetterList create(final List<String> list)
    {
        return new LanguageLetterList(list);
    }
}
