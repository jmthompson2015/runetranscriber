package org.runetranscriber.core.cirth;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Ignore;
import org.junit.Test;
import org.runetranscriber.core.DefaultRuneTranscriberTest;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.RuneTranscriber;
import org.runetranscriber.core.cirth.example.Examples;

/**
 * Provides tests for the <code>CirthMoriaTranscriber</code> class.
 */
public final class CirthMoriaRuneTranscriberTest extends DefaultRuneTranscriberTest
{
    /** Flag indicating if the output should be verbose. */
    private static final boolean IS_VERBOSE = false;

    /** Examples. */
    private final Examples examples = new Examples();

    /** Transcriber. */
    private RuneTranscriber<CerthRune> transcriber = new CirthMoriaRuneTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward1()
    {
        final PhonemeList phonemes = examples.getCirthMoria1().getPhonemes();
        final RuneList<CerthRune> result = transcriber.transcribeForward(phonemes);
        final RuneList<CerthRune> expected = examples.getCirthMoria1().getRunes();

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward2()
    {
        final PhonemeList phonemes = examples.getCirthMoria2().getPhonemes();
        final RuneList<CerthRune> result = transcriber.transcribeForward(phonemes);
        final RuneList<CerthRune> expected = examples.getCirthMoria2().getRunes();

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Ignore
    @Test
    public void transcribeForward3()
    {
        final PhonemeList phonemes = examples.getCirthMoria3().getPhonemes();
        final RuneList<CerthRune> result = transcriber.transcribeForward(phonemes);
        final RuneList<CerthRune> expected = examples.getCirthMoria3().getRunes();

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse1()
    {
        final RuneList<CerthRune> runes = examples.getCirthMoria1().getRunes();
        final PhonemeList result = transcriber.transcribeReverse(runes);
        final PhonemeList expected = examples.getCirthMoria1().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse2()
    {
        final RuneList<CerthRune> runes = examples.getCirthMoria2().getRunes();
        final PhonemeList result = transcriber.transcribeReverse(runes);
        final PhonemeList expected = examples.getCirthMoria2().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Ignore
    @Test
    public void transcribeReverse3()
    {
        final RuneList<CerthRune> runes = examples.getCirthMoria3().getRunes();
        final PhonemeList result = transcriber.transcribeReverse(runes);
        final PhonemeList expected = examples.getCirthMoria3().getPhonemes();

        verifyPhonemes(result, expected, IS_VERBOSE);
    }

    /**
     * @param result Result.
     * @param expected Expected.
     */
    protected void verifyRunes(final RuneList<CerthRune> result, final RuneList<CerthRune> expected)
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
