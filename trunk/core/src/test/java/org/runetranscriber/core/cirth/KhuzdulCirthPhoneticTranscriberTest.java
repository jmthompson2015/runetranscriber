package org.runetranscriber.core.cirth;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.runetranscriber.core.Example;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.PhoneticTranscriber;
import org.runetranscriber.core.cirth.example.Examples;

/**
 * Provides tests for the <code>KhuzdulCirthPhoneticTranscriber</code> class.
 */
public final class KhuzdulCirthPhoneticTranscriberTest
{
    /** Flag indicating if the output should be verbose. */
    private static final boolean IS_VERBOSE = false;

    /** Examples. */
    private final Examples examples = new Examples();

    /** Transcriber. */
    private final PhoneticTranscriber transcriber = new KhuzdulCirthPhoneticTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForwardCirthMoria1()
    {
        verify(examples.getCirthMoria1());
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForwardNull()
    {
        final String text = null;
        final PhonemeList phonemes = transcriber.transcribeForward(new LanguageLetterList(text));
        assertNull(phonemes);
    }

    /**
     * @param example Example.
     */
    private void verify(final Example<?> example)
    {
        final LanguageLetterList text = example.getLanguageLetters();
        final PhonemeList result = transcriber.transcribeForward(text);
        final PhonemeList expected = example.getPhonemes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + expected.toString() + "]");
            System.out.println("result   = [" + result.toString() + "]");
        }

        assertNotNull(result);

        assertThat(result.size(), is(expected.size()));

        for (int i = 0; i < result.size(); i++)
        {
            assertThat(result.get(i), is(expected.get(i)));
        }
    }
}
