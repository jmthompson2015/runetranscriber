package org.runetranscriber.core;

import java.util.List;

/**
 * Provides a list of language letters.
 */
public final class LanguageLetterList extends StringList
{
    /**
     * Construct this object.
     */
    public LanguageLetterList()
    {
        super();
    }

    /**
     * Construct this object.
     * 
     * @param list Initial list.
     */
    public LanguageLetterList(final List<String> list)
    {
        super(list);
    }

    /**
     * Construct this object.
     * 
     * @param languageLetters Initial language letters.
     */
    public LanguageLetterList(final String languageLetters)
    {
        super(languageLetters);
    }
}
