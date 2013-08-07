package org.runetranscriber.core.cirth;

import static org.junit.Assert.assertNull;

import org.junit.Ignore;
import org.junit.Test;
import org.runetranscriber.core.DefaultPhoneticTranscriberTest;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.PhoneticTranscriber;
import org.runetranscriber.core.cirth.example.Examples;

/**
 * Provides tests for the <code>EnglishCirthPhoneticTranscriber</code> class.
 */
public final class EnglishCirthPhoneticTranscriberTest extends DefaultPhoneticTranscriberTest
{
    /** Flag indicating if the output should be verbose. */
    private static final boolean IS_VERBOSE = false;

    /** Examples. */
    private final Examples examples = new Examples();

    /** Transcriber. */
    private final PhoneticTranscriber transcriber = new EnglishCirthPhoneticTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForwardCirthDaeron1()
    {
        final PhonemeList result = transcriber.transcribeForward(examples.getCirthDaeron1().getLanguageLetters());
        final PhonemeList expected = examples.getCirthDaeron1().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForwardCirthDaeron2()
    {
        final PhonemeList result = transcriber.transcribeForward(examples.getCirthDaeron2().getLanguageLetters());
        final PhonemeList expected = examples.getCirthDaeron2().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Ignore
    @Test
    public void transcribeForwardCirthErebor1()
    {
        final PhonemeList result = transcriber.transcribeForward(examples.getCirthErebor1().getLanguageLetters());
        final PhonemeList expected = examples.getCirthErebor1().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForwardCirthErebor2()
    {
        final PhonemeList result = transcriber.transcribeForward(examples.getCirthErebor2().getLanguageLetters());
        final PhonemeList expected = examples.getCirthErebor2().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
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
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverseCirthDaeron1()
    {
        final LanguageLetterList result = transcriber.transcribeReverse(examples.getCirthDaeron1().getPhonemes());
        final LanguageLetterList expected = examples.getCirthDaeron1().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverseCirthDaeron2()
    {
        final LanguageLetterList result = transcriber.transcribeReverse(examples.getCirthDaeron2().getPhonemes());
        final LanguageLetterList expected = examples.getCirthDaeron2().getLanguageLetters();

        // C to K knowledge lost.
        replaceAll(expected, "c", "k");

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Ignore
    @Test
    public void transcribeReverseCirthErebor1()
    {
        final LanguageLetterList result = transcriber.transcribeReverse(examples.getCirthErebor1().getPhonemes());
        final LanguageLetterList expected = examples.getCirthErebor1().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverseCirthErebor2()
    {
        final LanguageLetterList result = transcriber.transcribeReverse(examples.getCirthErebor2().getPhonemes());
        final LanguageLetterList expected = examples.getCirthErebor2().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * @param list List.
     * @param key Key.
     * @param replacement Replacement.
     */
    @Override
    protected void replaceAll(final LanguageLetterList list, final String key, final String replacement)
    {
        for (int i = 0; i < list.size(); i++)
        {
            if (key.equals(list.get(i)))
            {
                list.set(i, replacement);
            }
        }
    }
}
