package org.runetranscriber.core.viking;

import static org.junit.Assert.assertNull;

import java.util.List;

import org.junit.Test;
import org.runetranscriber.core.DefaultPhoneticTranscriberTest;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhoneticTranscriber;
import org.runetranscriber.core.viking.example.Examples;

/**
 * Provides tests for the <code>EnglishAngloSaxonPhoneticTranscriber2</code> class.
 */
public class EnglishAngloSaxonPhoneticTranscriberTest extends DefaultPhoneticTranscriberTest
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
        final List<Phoneme> result = transcriber.transcribeForward(examples.getAngloSaxon1().getLanguageLetters());
        final List<Phoneme> expected = examples.getAngloSaxon1().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward2()
    {
        final List<Phoneme> result = transcriber.transcribeForward(examples.getAngloSaxon2().getLanguageLetters());
        final List<Phoneme> expected = examples.getAngloSaxon2().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward3()
    {
        final List<Phoneme> result = transcriber.transcribeForward(examples.getAngloSaxon3().getLanguageLetters());
        final List<Phoneme> expected = examples.getAngloSaxon3().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward4()
    {
        final List<Phoneme> result = transcriber.transcribeForward(examples.getAngloSaxon4().getLanguageLetters());
        final List<Phoneme> expected = examples.getAngloSaxon4().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward5()
    {
        final List<Phoneme> result = transcriber.transcribeForward(examples.getAngloSaxon5().getLanguageLetters());
        final List<Phoneme> expected = examples.getAngloSaxon5().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward6()
    {
        final List<Phoneme> result = transcriber.transcribeForward(examples.getAngloSaxon6().getLanguageLetters());
        final List<Phoneme> expected = examples.getAngloSaxon6().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward7()
    {
        final List<Phoneme> result = transcriber.transcribeForward(examples.getAngloSaxon7().getLanguageLetters());
        final List<Phoneme> expected = examples.getAngloSaxon7().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForwardNull()
    {
        final List<Phoneme> phonemes = transcriber.transcribeForward(null);
        assertNull(phonemes);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse1()
    {
        final List<String> result = transcriber.transcribeReverse(examples.getAngloSaxon1().getPhonemes());
        final List<String> expected = examples.getAngloSaxon1().getLanguageLetters();

        verifyReverse(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse2()
    {
        final List<String> result = transcriber.transcribeReverse(examples.getAngloSaxon2().getPhonemes());
        final List<String> expected = examples.getAngloSaxon2().getLanguageLetters();

        verifyReverse(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse3()
    {
        final List<String> result = transcriber.transcribeReverse(examples.getAngloSaxon3().getPhonemes());
        final List<String> expected = examples.getAngloSaxon3().getLanguageLetters();

        verifyReverse(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse4()
    {
        final List<String> result = transcriber.transcribeReverse(examples.getAngloSaxon4().getPhonemes());
        final List<String> expected = examples.getAngloSaxon4().getLanguageLetters();

        verifyReverse(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse5()
    {
        final List<String> result = transcriber.transcribeReverse(examples.getAngloSaxon5().getPhonemes());
        final List<String> expected = examples.getAngloSaxon5().getLanguageLetters();

        verifyReverse(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse6()
    {
        final List<String> result = transcriber.transcribeReverse(examples.getAngloSaxon6().getPhonemes());
        final List<String> expected = examples.getAngloSaxon6().getLanguageLetters();

        verifyReverse(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse7()
    {
        final List<String> result = transcriber.transcribeReverse(examples.getAngloSaxon7().getPhonemes());
        final List<String> expected = examples.getAngloSaxon7().getLanguageLetters();

        verifyReverse(result, expected, IS_VERBOSE);
    }
}
