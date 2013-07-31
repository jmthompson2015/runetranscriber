package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import java.util.List;

/**
 * Provides tests for the <code>DefaultTranscriber</code> class.
 */
public class DefaultTranscriberTest
{
    /**
     * @param list List.
     * @param key Key.
     * @param replacement Replacement.
     */
    protected void replaceAll(final List<Phoneme> list, final Phoneme key, final Phoneme replacement)
    {
        for (int i = 0; i < list.size(); i++)
        {
            if (key == list.get(i))
            {
                list.set(i, replacement);
            }
        }
    }

    /**
     * @param result Result.
     * @param expected Expected.
     * @param isVerbose Flag indicating if the output should be verbose.
     */
    protected void verifyLetters(final List<String> result, final List<String> expected, final boolean isVerbose)
    {
        final String expectedString = ListUtilities.convert(expected);
        final String resultString = ListUtilities.convert(result);

        if (isVerbose)
        {
            System.out.println("expected = [" + expectedString + "]");
            System.out.println("result   = [" + resultString + "]");
        }

        assertNotNull(result);
        assertThat(resultString, is(expectedString));
    }

    /**
     * @param result Result.
     * @param expected Expected.
     * @param isVerbose Flag indicating if the output should be verbose.
     */
    protected void verifyPhonemes(final List<Phoneme> result, final List<Phoneme> expected, final boolean isVerbose)
    {
        if (isVerbose)
        {
            System.out.println("expected = [" + Phoneme.toString(expected) + "]");
            System.out.println("result   = [" + Phoneme.toString(result) + "]");
        }

        assertNotNull(result);
        assertThat(result.size(), is(expected.size()));

        for (int i = 0; i < result.size(); i++)
        {
            assertThat(result.get(i) + " != " + expected.get(i), result.get(i), is(expected.get(i)));
        }
    }
}
