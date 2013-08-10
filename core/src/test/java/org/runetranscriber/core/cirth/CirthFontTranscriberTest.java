package org.runetranscriber.core.cirth;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.runetranscriber.core.DefaultFontTranscriberTest;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.example.Examples;

/**
 * Provides tests for the <code>CirthFontTranscriber</code> class.
 */
public final class CirthFontTranscriberTest extends DefaultFontTranscriberTest
{
    /** Flag indicating if the output should be verbose. */
    private static final boolean IS_VERBOSE = false;

    /** Examples. */
    private final Examples examples = new Examples();

    /** Transcriber. */
    private FontTranscriber<CerthRune, CerthFontLetter> transcriber = new CirthFontTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward1()
    {
        final RuneList<CerthRune> runes = examples.getCirthDaeron1().getRunes();
        final FontLetterList<CerthFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<CerthFontLetter> expected = examples.getCirthDaeron1().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward2()
    {
        final RuneList<CerthRune> runes = examples.getCirthDaeron2().getRunes();
        final FontLetterList<CerthFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<CerthFontLetter> expected = examples.getCirthDaeron2().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward3()
    {
        final RuneList<CerthRune> runes = examples.getCirthMoria1().getRunes();
        final FontLetterList<CerthFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<CerthFontLetter> expected = examples.getCirthMoria1().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward4()
    {
        final RuneList<CerthRune> runes = examples.getCirthErebor1().getRunes();
        final FontLetterList<CerthFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<CerthFontLetter> expected = examples.getCirthErebor1().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward5()
    {
        final RuneList<CerthRune> runes = examples.getCirthErebor2().getRunes();
        final FontLetterList<CerthFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<CerthFontLetter> expected = examples.getCirthErebor2().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse1()
    {
        final FontLetterList<CerthFontLetter> fontLetters = examples.getCirthDaeron1().getFontLetters();
        final RuneList<CerthRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<CerthRune> expected = examples.getCirthDaeron1().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + expected.toString() + "]");
            System.out.println("result   = [" + result.toString() + "]");
        }

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse2()
    {
        final FontLetterList<CerthFontLetter> fontLetters = examples.getCirthDaeron2().getFontLetters();
        final RuneList<CerthRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<CerthRune> expected = examples.getCirthDaeron2().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + expected.toString() + "]");
            System.out.println("result   = [" + result.toString() + "]");
        }

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse3()
    {
        final FontLetterList<CerthFontLetter> fontLetters = examples.getCirthMoria1().getFontLetters();
        final RuneList<CerthRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<CerthRune> expected = examples.getCirthMoria1().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + expected.toString() + "]");
            System.out.println("result   = [" + result.toString() + "]");
        }

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse4()
    {
        final FontLetterList<CerthFontLetter> fontLetters = examples.getCirthErebor1().getFontLetters();
        final RuneList<CerthRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<CerthRune> expected = examples.getCirthErebor1().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + expected.toString() + "]");
            System.out.println("result   = [" + result.toString() + "]");
        }

        verifyRunes(result, expected);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse5()
    {
        final FontLetterList<CerthFontLetter> fontLetters = examples.getCirthErebor2().getFontLetters();
        final RuneList<CerthRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<CerthRune> expected = examples.getCirthErebor2().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + expected.toString() + "]");
            System.out.println("result   = [" + result.toString() + "]");
        }

        verifyRunes(result, expected);
    }

    /**
     * @param result Result.
     * @param expected Expected.
     */
    protected void verifyRunes(final RuneList<CerthRune> result, final RuneList<CerthRune> expected)
    {
        assertNotNull(result);
        assertThat(result.size(), is(expected.size()));

        for (int i = 0; i < result.size(); i++)
        {
            assertThat(result.get(i) + " != " + expected.get(i), result.get(i), is(expected.get(i)));
        }
    }
}
