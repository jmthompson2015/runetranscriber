package org.runetranscriber.core.viking;

import static org.junit.Assert.assertNull;

import org.junit.Test;
import org.runetranscriber.core.DefaultPhoneticTranscriberTest;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.PhoneticTranscriber;
import org.runetranscriber.core.viking.example.Examples;

/**
 * Provides tests for the <code>EnglishAngloSaxonPhoneticTranscriber</code> class.
 */
public final class EnglishAngloSaxonPhoneticTranscriberTest extends DefaultPhoneticTranscriberTest
{
    /** Flag indicating if the output should be verbose. */
    private static final boolean IS_VERBOSE = false;

    /** Examples. */
    private final Examples examples = new Examples();

    /** Phonetic transcriber. */
    private final PhoneticTranscriber transcriber = new EnglishAngloSaxonPhoneticTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward1()
    {
        final PhonemeList result = transcriber.transcribeForward(examples.getAngloSaxon1().getLanguageLetters());
        final PhonemeList expected = examples.getAngloSaxon1().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward2()
    {
        final PhonemeList result = transcriber.transcribeForward(examples.getAngloSaxon2().getLanguageLetters());
        final PhonemeList expected = examples.getAngloSaxon2().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward3()
    {
        final PhonemeList result = transcriber.transcribeForward(examples.getAngloSaxon3().getLanguageLetters());
        final PhonemeList expected = examples.getAngloSaxon3().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward4()
    {
        final PhonemeList result = transcriber.transcribeForward(examples.getAngloSaxon4().getLanguageLetters());
        final PhonemeList expected = examples.getAngloSaxon4().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward5()
    {
        final PhonemeList result = transcriber.transcribeForward(examples.getAngloSaxon5().getLanguageLetters());
        final PhonemeList expected = examples.getAngloSaxon5().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward6()
    {
        final PhonemeList result = transcriber.transcribeForward(examples.getAngloSaxon6().getLanguageLetters());
        final PhonemeList expected = examples.getAngloSaxon6().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward7()
    {
        final PhonemeList result = transcriber.transcribeForward(examples.getAngloSaxon7().getLanguageLetters());
        final PhonemeList expected = examples.getAngloSaxon7().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward8()
    {
        final PhonemeList result = transcriber.transcribeForward(examples.getAngloSaxon8().getLanguageLetters());
        final PhonemeList expected = examples.getAngloSaxon8().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForwardNull()
    {
        final PhonemeList phonemes = transcriber.transcribeForward(null);
        assertNull(phonemes);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse1()
    {
        final LanguageLetterList result = transcriber.transcribeReverse(examples.getAngloSaxon1().getPhonemes());
        final LanguageLetterList expected = examples.getAngloSaxon1().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse2()
    {
        final LanguageLetterList result = transcriber.transcribeReverse(examples.getAngloSaxon2().getPhonemes());
        final LanguageLetterList expected = examples.getAngloSaxon2().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse3()
    {
        final LanguageLetterList result = transcriber.transcribeReverse(examples.getAngloSaxon3().getPhonemes());
        final LanguageLetterList expected = examples.getAngloSaxon3().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse4()
    {
        final LanguageLetterList result = transcriber.transcribeReverse(examples.getAngloSaxon4().getPhonemes());
        final LanguageLetterList expected = examples.getAngloSaxon4().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse5()
    {
        final LanguageLetterList result = transcriber.transcribeReverse(examples.getAngloSaxon5().getPhonemes());
        final LanguageLetterList expected = examples.getAngloSaxon5().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse6()
    {
        final LanguageLetterList result = transcriber.transcribeReverse(examples.getAngloSaxon6().getPhonemes());
        final LanguageLetterList expected = examples.getAngloSaxon6().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse7()
    {
        final LanguageLetterList result = transcriber.transcribeReverse(examples.getAngloSaxon7().getPhonemes());
        final LanguageLetterList expected = examples.getAngloSaxon7().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse8()
    {
        final LanguageLetterList result = transcriber.transcribeReverse(examples.getAngloSaxon8().getPhonemes());
        final LanguageLetterList expected = examples.getAngloSaxon8().getLanguageLetters();

        verifyLanguageLetters(result, expected, IS_VERBOSE);
    }
}
