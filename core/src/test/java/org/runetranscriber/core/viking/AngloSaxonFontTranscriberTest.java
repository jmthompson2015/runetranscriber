package org.runetranscriber.core.viking;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.runetranscriber.core.DefaultFontTranscriberTest;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.viking.example.Examples;

/**
 * Provides tests for the <code>AngloSaxonFontTranscriber</code> class.
 */
public final class AngloSaxonFontTranscriberTest extends DefaultFontTranscriberTest
{
    /** Flag indicating if the output should be verbose. */
    private static final boolean IS_VERBOSE = false;

    /** Examples. */
    private final Examples examples = new Examples();

    /** Transcriber. */
    private FontTranscriber<AngloSaxonRune, AngloSaxonFontLetter> transcriber = new AngloSaxonFontTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward1()
    {
        final RuneList<AngloSaxonRune> runes = examples.getAngloSaxon1().getRunes();
        final FontLetterList<AngloSaxonFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<AngloSaxonFontLetter> expected = examples.getAngloSaxon1().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward2()
    {
        final RuneList<AngloSaxonRune> runes = examples.getAngloSaxon2().getRunes();
        final FontLetterList<AngloSaxonFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<AngloSaxonFontLetter> expected = examples.getAngloSaxon2().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward3()
    {
        final RuneList<AngloSaxonRune> runes = examples.getAngloSaxon3().getRunes();
        final FontLetterList<AngloSaxonFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<AngloSaxonFontLetter> expected = examples.getAngloSaxon3().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward4()
    {
        final RuneList<AngloSaxonRune> runes = examples.getAngloSaxon4().getRunes();
        final FontLetterList<AngloSaxonFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<AngloSaxonFontLetter> expected = examples.getAngloSaxon4().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward5()
    {
        final RuneList<AngloSaxonRune> runes = examples.getAngloSaxon5().getRunes();
        final FontLetterList<AngloSaxonFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<AngloSaxonFontLetter> expected = examples.getAngloSaxon5().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward6()
    {
        final RuneList<AngloSaxonRune> runes = examples.getAngloSaxon6().getRunes();
        final FontLetterList<AngloSaxonFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<AngloSaxonFontLetter> expected = examples.getAngloSaxon6().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward7()
    {
        final RuneList<AngloSaxonRune> runes = examples.getAngloSaxon7().getRunes();
        final FontLetterList<AngloSaxonFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<AngloSaxonFontLetter> expected = examples.getAngloSaxon7().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward8()
    {
        final RuneList<AngloSaxonRune> runes = examples.getAngloSaxon8().getRunes();
        final FontLetterList<AngloSaxonFontLetter> result = transcriber.transcribeForward(runes);
        final FontLetterList<AngloSaxonFontLetter> expected = examples.getAngloSaxon8().getFontLetters();

        verifyFontLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse1()
    {
        final FontLetterList<AngloSaxonFontLetter> fontLetters = examples.getAngloSaxon1().getFontLetters();
        final RuneList<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<AngloSaxonRune> expected = examples.getAngloSaxon1().getRunes();

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
        final FontLetterList<AngloSaxonFontLetter> fontLetters = examples.getAngloSaxon2().getFontLetters();
        final RuneList<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<AngloSaxonRune> expected = examples.getAngloSaxon2().getRunes();

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
        final FontLetterList<AngloSaxonFontLetter> fontLetters = examples.getAngloSaxon3().getFontLetters();
        final RuneList<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<AngloSaxonRune> expected = examples.getAngloSaxon3().getRunes();

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
        final FontLetterList<AngloSaxonFontLetter> fontLetters = examples.getAngloSaxon4().getFontLetters();
        final RuneList<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<AngloSaxonRune> expected = examples.getAngloSaxon4().getRunes();

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
        final FontLetterList<AngloSaxonFontLetter> fontLetters = examples.getAngloSaxon5().getFontLetters();
        final RuneList<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<AngloSaxonRune> expected = examples.getAngloSaxon5().getRunes();

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
    public void transcribeReverse6()
    {
        final FontLetterList<AngloSaxonFontLetter> fontLetters = examples.getAngloSaxon6().getFontLetters();
        final RuneList<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<AngloSaxonRune> expected = examples.getAngloSaxon6().getRunes();

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
    public void transcribeReverse7()
    {
        final FontLetterList<AngloSaxonFontLetter> fontLetters = examples.getAngloSaxon7().getFontLetters();
        final RuneList<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<AngloSaxonRune> expected = examples.getAngloSaxon7().getRunes();

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
    public void transcribeReverse8()
    {
        final FontLetterList<AngloSaxonFontLetter> fontLetters = examples.getAngloSaxon8().getFontLetters();
        final RuneList<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final RuneList<AngloSaxonRune> expected = examples.getAngloSaxon8().getRunes();

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
    protected void verifyRunes(final RuneList<AngloSaxonRune> result, final RuneList<AngloSaxonRune> expected)
    {
        assertNotNull(result);
        assertThat(result.size(), is(expected.size()));

        for (int i = 0; i < result.size(); i++)
        {
            assertThat(result.get(i) + " != " + expected.get(i), result.get(i), is(expected.get(i)));
        }
    }
}
