package org.runetranscriber.core.viking;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import java.util.List;

import org.junit.Test;
import org.runetranscriber.core.DefaultFontTranscriberTest;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.viking.example.Examples;

/**
 * Provides tests for the <code>AngloSaxonFontTranscriber</code> class.
 */
public class AngloSaxonFontTranscriberTest extends DefaultFontTranscriberTest
{
    /** Flag indicating if the output should be verbose. */
    private static final boolean IS_VERBOSE = false;

    /** Examples. */
    private final Examples examples = new Examples();

    /** Transcriber. */
    private FontTranscriber<AngloSaxonRune> transcriber = new AngloSaxonFontTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward1()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon1().getRunes();
        final List<String> result = transcriber.transcribeForward(runes);
        final List<String> expected = examples.getAngloSaxon1().getFontLetters();

        verifyLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward2()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon2().getRunes();
        final List<String> result = transcriber.transcribeForward(runes);
        final List<String> expected = examples.getAngloSaxon2().getFontLetters();

        verifyLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward3()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon3().getRunes();
        final List<String> result = transcriber.transcribeForward(runes);
        final List<String> expected = examples.getAngloSaxon3().getFontLetters();

        verifyLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward4()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon4().getRunes();
        final List<String> result = transcriber.transcribeForward(runes);
        final List<String> expected = examples.getAngloSaxon4().getFontLetters();

        verifyLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward5()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon5().getRunes();
        final List<String> result = transcriber.transcribeForward(runes);
        final List<String> expected = examples.getAngloSaxon5().getFontLetters();

        verifyLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward6()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon6().getRunes();
        final List<String> result = transcriber.transcribeForward(runes);
        final List<String> expected = examples.getAngloSaxon6().getFontLetters();

        verifyLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward7()
    {
        final List<AngloSaxonRune> runes = examples.getAngloSaxon7().getRunes();
        final List<String> result = transcriber.transcribeForward(runes);
        final List<String> expected = examples.getAngloSaxon7().getFontLetters();

        verifyLetters(result, expected, IS_VERBOSE);
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse1()
    {
        final List<String> fontLetters = examples.getAngloSaxon1().getFontLetters();
        final List<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon1().getRunes();

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
    public void transcribeReverse2()
    {
        final List<String> fontLetters = examples.getAngloSaxon2().getFontLetters();
        final List<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon2().getRunes();

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
    public void transcribeReverse3()
    {
        final List<String> fontLetters = examples.getAngloSaxon3().getFontLetters();
        final List<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon3().getRunes();

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
    public void transcribeReverse4()
    {
        final List<String> fontLetters = examples.getAngloSaxon4().getFontLetters();
        final List<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon4().getRunes();

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
    public void transcribeReverse5()
    {
        final List<String> fontLetters = examples.getAngloSaxon5().getFontLetters();
        final List<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon5().getRunes();

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
    public void transcribeReverse6()
    {
        final List<String> fontLetters = examples.getAngloSaxon6().getFontLetters();
        final List<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon6().getRunes();

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
    public void transcribeReverse7()
    {
        final List<String> fontLetters = examples.getAngloSaxon7().getFontLetters();
        final List<AngloSaxonRune> result = transcriber.transcribeReverse(fontLetters);
        final List<AngloSaxonRune> expected = examples.getAngloSaxon7().getRunes();

        if (IS_VERBOSE)
        {
            System.out.println("expected = [" + AngloSaxonRune.toString(expected) + "]");
            System.out.println("result   = [" + AngloSaxonRune.toString(result) + "]");
        }

        verifyRunes(result, expected);
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
