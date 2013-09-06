package org.runetranscriber.core.tengwar;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Ignore;
import org.junit.Test;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.RuneTranscriber;
import org.runetranscriber.core.tengwar.example.Examples;

/**
 * Provides tests for the <code>TengwarRuneTranscriber3</code> class.
 */
public final class TengwarRuneTranscriberTest
{
    /** Flag indicating if the output should be verbose. */
    private static final boolean IS_VERBOSE = false;

    /** Examples. */
    private final Examples examples = new Examples();

    /** Transcriber. */
    private RuneTranscriber<TengwaRune> transcriber = new TengwarRuneTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Ignore
    @Test
    public void transcribeForward1()
    {
        final PhonemeList phonemes = examples.getTengwar1().getPhonemes();
        final RuneList<TengwaRune> result = transcriber.transcribeForward(phonemes);
        assertNotNull(result);
        final RuneList<TengwaRune> expected = examples.getTengwar1().getRunes();

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward2()
    {
        final PhonemeList phonemes = examples.getTengwar2().getPhonemes();
        final RuneList<TengwaRune> result = transcriber.transcribeForward(phonemes);
        assertNotNull(result);
        final RuneList<TengwaRune> expected = examples.getTengwar2().getRunes();

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Ignore
    @Test
    public void transcribeForward3()
    {
        final PhonemeList phonemes = examples.getTengwar3().getPhonemes();
        final RuneList<TengwaRune> result = transcriber.transcribeForward(phonemes);
        assertNotNull(result);
        final RuneList<TengwaRune> expected = examples.getTengwar3().getRunes();

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Ignore
    @Test
    public void transcribeForward4()
    {
        final PhonemeList phonemes = examples.getTengwar4().getPhonemes();
        final RuneList<TengwaRune> result = transcriber.transcribeForward(phonemes);
        assertNotNull(result);
        final RuneList<TengwaRune> expected = examples.getTengwar4().getRunes();

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Ignore
    @Test
    public void transcribeReverse1()
    {
        final RuneList<TengwaRune> runes = examples.getTengwar1().getRunes();
        final PhonemeList result = transcriber.transcribeReverse(runes);
        final PhonemeList expected = examples.getTengwar1().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse2()
    {
        final RuneList<TengwaRune> runes = examples.getTengwar2().getRunes();
        final PhonemeList result = transcriber.transcribeReverse(runes);
        final PhonemeList expected = examples.getTengwar2().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Ignore
    @Test
    public void transcribeReverse3()
    {
        final RuneList<TengwaRune> runes = examples.getTengwar3().getRunes();
        final PhonemeList result = transcriber.transcribeReverse(runes);
        final PhonemeList expected = examples.getTengwar3().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Ignore
    @Test
    public void transcribeReverse4()
    {
        final RuneList<TengwaRune> runes = examples.getTengwar4().getRunes();
        final PhonemeList result = transcriber.transcribeReverse(runes);
        final PhonemeList expected = examples.getTengwar4().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
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

    /**
     * @param result Result.
     * @param expected Expected.
     */
    protected void verifyRunes(final RuneList<TengwaRune> result, final RuneList<TengwaRune> expected)
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
}
