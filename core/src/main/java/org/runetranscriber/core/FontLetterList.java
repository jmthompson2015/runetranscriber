package org.runetranscriber.core;

import java.util.List;

/**
 * Provides a list of font letters.
 */
public final class FontLetterList extends StringList
{
    /**
     * Construct this object.
     */
    public FontLetterList()
    {
        super();
    }

    /**
     * Construct this object.
     * 
     * @param list Initial list.
     */
    public FontLetterList(final List<String> list)
    {
        super(list);
    }

    /**
     * Construct this object.
     * 
     * @param fontLetters Initial font letters.
     */
    public FontLetterList(final String fontLetters)
    {
        super(fontLetters);
    }
}
