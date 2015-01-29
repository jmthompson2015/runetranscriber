package org.runetranscriber.core.tengwar;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Ignore;
import org.junit.Test;
import org.runetranscriber.core.DefaultFontTranscriberTest;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.tengwar.example.Examples;

/**
 * Provides tests for the <code>TengwarFontTranscriber</code> class.
 */
public final class TengwarFontTranscriberTest extends DefaultFontTranscriberTest
{
    /** Flag indicating if the output should be verbose. */
    private static final boolean IS_VERBOSE = false;

    /** Examples. */
    private final Examples examples = new Examples();

    /** Transcriber. */
    private FontTranscriber<TengwaRune, TengwaFontLetter> transcriber = new TengwarFontTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Ignore
    @Test
    public void transcribeForward1()
    {
        final RuneList<TengwaRune> runes = examples.getTengwar1().getRunes();
        final FontLetterList<TengwaFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<TengwaFontLetter> expected = examples.getTengwar1().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward2()
    {
        final RuneList<TengwaRune> runes = examples.getTengwar2().getRunes();
        final FontLetterList<TengwaFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<TengwaFontLetter> expected = examples.getTengwar2().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward3()
    {
        final RuneList<TengwaRune> runes = examples.getTengwar3().getRunes();
        final FontLetterList<TengwaFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<TengwaFontLetter> expected = examples.getTengwar3().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward4()
    {
        final RuneList<TengwaRune> runes = examples.getTengwar4().getRunes();
        final FontLetterList<TengwaFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<TengwaFontLetter> expected = examples.getTengwar4().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Ignore
    @Test
    public void transcribeReverse1()
    {
        final FontLetterList<TengwaFontLetter> fontLetters = examples.getTengwar1().getFontLetters();
        final RuneList<TengwaRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<TengwaRune> expected = examples.getTengwar1().getRunes();

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
        final FontLetterList<TengwaFontLetter> fontLetters = examples.getTengwar2().getFontLetters();
        final RuneList<TengwaRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<TengwaRune> expected = examples.getTengwar2().getRunes();

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
        final FontLetterList<TengwaFontLetter> fontLetters = examples.getTengwar3().getFontLetters();
        final RuneList<TengwaRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<TengwaRune> expected = examples.getTengwar3().getRunes();

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
        final FontLetterList<TengwaFontLetter> fontLetters = examples.getTengwar4().getFontLetters();
        final RuneList<TengwaRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<TengwaRune> expected = examples.getTengwar4().getRunes();

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
    protected void verifyRunes(final RuneList<TengwaRune> result, final RuneList<TengwaRune> expected)
    {
        assertNotNull(result);
        assertThat(result.size(), is(expected.size()));

        for (int i = 0; i < result.size(); i++)
        {
            assertThat(result.get(i) + " != " + expected.get(i), result.get(i), is(expected.get(i)));
        }
    }
}
