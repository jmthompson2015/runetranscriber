package org.runetranscriber.core.cirth;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.runetranscriber.core.DefaultRuneTranscriberTest;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.RuneTranscriber;
import org.runetranscriber.core.cirth.example.Examples;

/**
 * Provides tests for the <code>CirthEreborRuneTranscriber</code> class.
 */
public final class CirthEreborRuneTranscriberTest extends DefaultRuneTranscriberTest
{
    /** Flag indicating if the output should be verbose. */
    private static final boolean IS_VERBOSE = false;

    /** Examples. */
    private final Examples examples = new Examples();

    /** Transcriber. */
    private RuneTranscriber<Certh> transcriber = new CirthEreborRuneTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward1()
    {
        final PhonemeList phonemes = examples.getCirthErebor1().getPhonemes();
        final RuneList<Certh> result = transcriber.transcribeForward(phonemes);
        final RuneList<Certh> expected = examples.getCirthErebor1().getRunes();

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward2()
    {
        final PhonemeList phonemes = examples.getCirthErebor2().getPhonemes();
        final RuneList<Certh> result = transcriber.transcribeForward(phonemes);
        final RuneList<Certh> expected = examples.getCirthErebor2().getRunes();

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse1()
    {
        final RuneList<Certh> runes = examples.getCirthErebor1().getRunes();
        final PhonemeList result = transcriber.transcribeReverse(runes);
        final PhonemeList expected = examples.getCirthErebor1().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse2()
    {
        final RuneList<Certh> runes = examples.getCirthErebor2().getRunes();
        final PhonemeList result = transcriber.transcribeReverse(runes);
        final PhonemeList expected = examples.getCirthErebor2().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * @param result Result.
     * @param expected Expected.
     */
    protected void verifyRunes(final RuneList<Certh> result, final RuneList<Certh> expected)
    {
        if (IS_VERBOSE)
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

    /**
     * @param result Result.
     * @param expected Expected.
     */
    // @Override
    // protected void verify(final RuneList<Certh> result, final RuneList<Certh> expected)
    // {
    // if (IS_VERBOSE)
    // {
    // System.out.println("expectedFinal = [" + Certh.toString(expected) + "]");
    // System.out.println("finalResult   = [" + Certh.toString(result) + "]");
    // }
    //
    // super.verify(result, expected);
    // }
}
