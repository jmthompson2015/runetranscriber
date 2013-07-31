package org.runetranscriber.core.viking;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import java.util.List;

import org.junit.Test;
import org.runetranscriber.core.DefaultRuneTranscriberTest;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.RuneTranscriber;
import org.runetranscriber.core.viking.example.Examples;

/**
 * Provides tests for the <code>CirthDaeronTranscriber</code> class.
 */
public class AngloSaxonRuneTranscriberTest extends DefaultRuneTranscriberTest
{
    /** Flag indicating if the output should be verbose. */
    private static final boolean IS_VERBOSE = false;

    /** Examples. */
    private final Examples examples = new Examples();

    /** Rune transcriber. */
    private RuneTranscriber<AngloSaxonRune> transcriber = new AngloSaxonRuneTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward1()
    {
        final List<Phoneme> phonemes = examples.getAngloSaxon1().getPhonemes();
        final List<AngloSaxonRune> result = transcriber.transcribeForward(phonemes);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon1().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + AngloSaxonRune.toString(expected) + "]");
            System.out.println("result   = [" + AngloSaxonRune.toString(result) + "]");
        }

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward2()
    {
        final List<Phoneme> phonemes = examples.getAngloSaxon2().getPhonemes();
        final List<AngloSaxonRune> result = transcriber.transcribeForward(phonemes);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon2().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + AngloSaxonRune.toString(expected) + "]");
            System.out.println("result   = [" + AngloSaxonRune.toString(result) + "]");
        }

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward3()
    {
        final List<Phoneme> phonemes = examples.getAngloSaxon3().getPhonemes();
        final List<AngloSaxonRune> result = transcriber.transcribeForward(phonemes);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon3().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + AngloSaxonRune.toString(expected) + "]");
            System.out.println("result   = [" + AngloSaxonRune.toString(result) + "]");
        }

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward4()
    {
        final List<Phoneme> phonemes = examples.getAngloSaxon4().getPhonemes();
        final List<AngloSaxonRune> result = transcriber.transcribeForward(phonemes);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon4().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + AngloSaxonRune.toString(expected) + "]");
            System.out.println("result   = [" + AngloSaxonRune.toString(result) + "]");
        }

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward5()
    {
        final List<Phoneme> phonemes = examples.getAngloSaxon5().getPhonemes();
        final List<AngloSaxonRune> result = transcriber.transcribeForward(phonemes);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon5().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + AngloSaxonRune.toString(expected) + "]");
            System.out.println("result   = [" + AngloSaxonRune.toString(result) + "]");
        }

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward6()
    {
        final List<Phoneme> phonemes = examples.getAngloSaxon6().getPhonemes();
        final List<AngloSaxonRune> result = transcriber.transcribeForward(phonemes);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon6().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + AngloSaxonRune.toString(expected) + "]");
            System.out.println("result   = [" + AngloSaxonRune.toString(result) + "]");
        }

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward7()
    {
        final List<Phoneme> phonemes = examples.getAngloSaxon7().getPhonemes();
        final List<AngloSaxonRune> result = transcriber.transcribeForward(phonemes);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon7().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + AngloSaxonRune.toString(expected) + "]");
            System.out.println("result   = [" + AngloSaxonRune.toString(result) + "]");
        }

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse1()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon1().getRunes();
        final List<Phoneme> result = transcriber.transcribeReverse(runes);
        final List<Phoneme> expected = examples.getAngloSaxon1().getPhonemes();

        // J to I knowledge lost.
        replaceAll(expected, Phoneme.J, Phoneme.I);

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse2()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon2().getRunes();
        final List<Phoneme> result = transcriber.transcribeReverse(runes);
        final List<Phoneme> expected = examples.getAngloSaxon2().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse3()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon3().getRunes();
        final List<Phoneme> result = transcriber.transcribeReverse(runes);
        final List<Phoneme> expected = examples.getAngloSaxon3().getPhonemes();

        // V to U knowledge lost.
        replaceAll(expected, Phoneme.V, Phoneme.U);

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse4()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon4().getRunes();
        final List<Phoneme> result = transcriber.transcribeReverse(runes);
        final List<Phoneme> expected = examples.getAngloSaxon4().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse5()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon5().getRunes();
        final List<Phoneme> result = transcriber.transcribeReverse(runes);
        final List<Phoneme> expected = examples.getAngloSaxon5().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse6()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon6().getRunes();
        final List<Phoneme> result = transcriber.transcribeReverse(runes);
        final List<Phoneme> expected = examples.getAngloSaxon6().getPhonemes();

        // V to U knowledge lost.
        replaceAll(expected, Phoneme.V, Phoneme.U);

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse7()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon7().getRunes();
        final List<Phoneme> result = transcriber.transcribeReverse(runes);
        final List<Phoneme> expected = examples.getAngloSaxon7().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * @param result Result.
     * @param expected Expected.
     */
    protected void verifyRunes(final List<AngloSaxonRune> result, final List<AngloSaxonRune> expected)
    {
        assertNotNull(result);
        assertThat(result.size(), is(expected.size()));

        for (int i = 0; i < result.size(); i++)
        {
            assertThat(result.get(i) + " != " + expected.get(i), result.get(i), is(expected.get(i)));
        }
    }
}
