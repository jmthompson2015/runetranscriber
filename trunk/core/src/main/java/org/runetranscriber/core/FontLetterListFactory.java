package org.runetranscriber.core;

import java.util.List;

/**
 * Provides a factory to create a font letter list.
 * 
 * @param <F> Font letter type parameter.
 */
public final class FontLetterListFactory<F extends FontLetter> implements ListFactory<FontLetterList<F>, F>
{
    @Override
    public FontLetterList<F> create()
    {
        return new FontLetterList<F>();
    }

    @Override
    public FontLetterList<F> create(final List<F> list)
    {
        return new FontLetterList<F>(list);
    }
}
