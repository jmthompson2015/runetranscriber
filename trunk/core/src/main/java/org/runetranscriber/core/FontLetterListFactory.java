package org.runetranscriber.core;

import java.util.List;

/**
 * Provides a factory to create a font letter list.
 */
public final class FontLetterListFactory implements ListFactory<FontLetterList, String>
{
    @Override
    public FontLetterList create()
    {
        return new FontLetterList();
    }

    @Override
    public FontLetterList create(final List<String> list)
    {
        return new FontLetterList(list);
    }
}
