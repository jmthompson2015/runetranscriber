package org.runetranscriber.core;

import java.util.ArrayList;
import java.util.List;

/**
 * Provides utility methods to convert between a String and a List.
 */
final class ListUtilities
{
    /**
     * @param list List.
     * 
     * @return a String version of the contents of the list.
     */
    public static final String convert(final List<String> list)
    {
        final StringBuilder answer = new StringBuilder();

        if (list != null)
        {
            for (final String letter : list)
            {
                answer.append(letter);
            }
        }

        return answer.toString();
    }

    /**
     * @param string String.
     * 
     * @return a list of the contents of the string.
     */
    public static final List<String> convert(final String string)
    {
        final List<String> answer = new ArrayList<String>();

        if (string != null)
        {
            for (int i = 0; i < string.length(); i++)
            {
                answer.add(String.valueOf(string.charAt(i)));
            }
        }

        return answer;
    }

    /**
     * @param fromList From list.
     * @param key Key.
     * @param start Start index.
     * 
     * @return true if the key appears in fromList at the given start index.
     */
    public static final <T> boolean equals(final List<T> fromList, final List<T> key, final int start)
    {
        boolean answer = false;

        if ((fromList != null) && (key != null))
        {
            final int size = fromList.size();
            final int end = start + key.size();

            if ((0 <= start) && (end <= size))
            {
                answer = key.equals(fromList.subList(start, end));
            }
        }

        return answer;
    }
}
