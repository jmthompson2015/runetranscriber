package org.runetranscriber.core.tengwar;

import static org.junit.Assert.assertNull;

import org.junit.Ignore;
import org.junit.Test;
import org.runetranscriber.core.DefaultPhoneticTranscriberTest;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.PhoneticTranscriber;
import org.runetranscriber.core.tengwar.example.Examples;

/**
 * Provides tests for the <code>EnglishTengwarPhoneticTranscriber</code> class.
 */
public final class EnglishTengwarPhoneticTranscriberTest extends DefaultPhoneticTranscriberTest
{
    /** Flag indicating if the output should be verbose. */
    private static final boolean IS_VERBOSE = false;

    /** Examples. */
    private final Examples examples = new Examples();

    /** Phonetic transcriber. */
    private final PhoneticTranscriber phoneticTranscriber = new EnglishTengwarPhoneticTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward1()
    {
        final PhonemeList result = phoneticTranscriber.transcribeForward(examples.getTengwar1().getLanguageLetters());
        final PhonemeList expected = examples.getTengwar1().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward2()
    {
        final PhonemeList result = phoneticTranscriber.transcribeForward(examples.getTengwar2().getLanguageLetters());
        final PhonemeList expected = examples.getTengwar2().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Ignore
    @Test
    public void transcribeForward3()
    {
        final PhonemeList result = phoneticTranscriber.transcribeForward(examples.getTengwar3().getLanguageLetters());
        final PhonemeList expected = examples.getTengwar3().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Ignore
    @Test
    public void transcribeForward4()
    {
        final PhonemeList result = phoneticTranscriber.transcribeForward(examples.getTengwar4().getLanguageLetters());
        final PhonemeList expected = examples.getTengwar4().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForwardNull()
    {
        final PhonemeList phonemes = phoneticTranscriber.transcribeForward(null);
        assertNull(phonemes);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse1()
    {
        final LanguageLetterList result = phoneticTranscriber.transcribeReverse(examples.getTengwar1().getPhonemes());
        final LanguageLetterList expected = examples.getTengwar1().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse2()
    {
        final LanguageLetterList result = phoneticTranscriber.transcribeReverse(examples.getTengwar2().getPhonemes());
        final LanguageLetterList expected = examples.getTengwar2().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Ignore
    @Test
    public void transcribeReverse3()
    {
        final LanguageLetterList result = phoneticTranscriber.transcribeReverse(examples.getTengwar3().getPhonemes());
        final LanguageLetterList expected = examples.getTengwar3().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Ignore
    @Test
    public void transcribeReverse4()
    {
        final LanguageLetterList result = phoneticTranscriber.transcribeReverse(examples.getTengwar4().getPhonemes());
        final LanguageLetterList expected = examples.getTengwar4().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }
}
