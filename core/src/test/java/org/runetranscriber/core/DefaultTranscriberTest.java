package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

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
    protected void replaceAll(final PhonemeList list, final Phoneme key, final Phoneme replacement)
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
    protected void verifyFontLetters(final FontLetterList result, final FontLetterList expected, final boolean isVerbose)
    {
        final String expectedString = expected.toString();
        final String resultString = result.toString();

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
    protected void verifyLanguageLetters(final LanguageLetterList result, final LanguageLetterList expected,
            final boolean isVerbose)
    {
        // Capital letters and apostrophes are lost in transcription.
        String expectedString = expected.toString().toLowerCase();
        expectedString = expectedString.replaceAll("[']", "");
        final String resultString = result.toString();

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
    protected void verifyPhonemes(final PhonemeList result, final PhonemeList expected, final boolean isVerbose)
    {
        if (isVerbose)
        {
            System.out.println("expected = [" + expected.toString() + "]");
            System.out.println("result   = [" + result.toString() + "]");
        }

        assertNotNull(result);
        assertThat(result.size(), is(expected.size()));

        for (int i = 0; i < result.size(); i++)
        {
            assertThat(result.get(i) + " != " + expected.get(i), result.get(i), is(expected.get(i)));
        }
    }
}
