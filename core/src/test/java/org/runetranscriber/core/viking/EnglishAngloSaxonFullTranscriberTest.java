package org.runetranscriber.core.viking;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.runetranscriber.core.Example;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FullTranscriber;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.viking.example.Examples;

/**
 * Provides tests for the <code>EnglishAngloSaxonFullTranscriber</code> class.
 */
public final class EnglishAngloSaxonFullTranscriberTest
{
    /** Examples. */
    private final Examples examples = new Examples();

    /** Transcriber. */
    private final FullTranscriber<AngloSaxonRune, AngloSaxonFontLetter> transcriber = new EnglishAngloSaxonFullTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward1()
    {
        verifyTranscribeForward(examples.getAngloSaxon1());
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward2()
    {
        verifyTranscribeForward(examples.getAngloSaxon2());
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward3()
    {
        verifyTranscribeForward(examples.getAngloSaxon2());
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward4()
    {
        verifyTranscribeForward(examples.getAngloSaxon2());
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward5()
    {
        verifyTranscribeForward(examples.getAngloSaxon2());
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward6()
    {
        verifyTranscribeForward(examples.getAngloSaxon2());
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward7()
    {
        verifyTranscribeForward(examples.getAngloSaxon2());
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse1()
    {
        verifyTranscribeReverse(examples.getAngloSaxon1());
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse2()
    {
        verifyTranscribeReverse(examples.getAngloSaxon2());
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse3()
    {
        verifyTranscribeReverse(examples.getAngloSaxon2());
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse4()
    {
        verifyTranscribeReverse(examples.getAngloSaxon2());
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse5()
    {
        verifyTranscribeReverse(examples.getAngloSaxon2());
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse6()
    {
        verifyTranscribeReverse(examples.getAngloSaxon2());
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse7()
    {
        verifyTranscribeReverse(examples.getAngloSaxon2());
    }

    /**
     * @param expected Expected language letters.
     * 
     * @return a string representation of the given parameter.
     */
    private String convert(final LanguageLetterList expected)
    {
        // Capital letters, apostrophes, and 'j' are lost in transcription.
        String answer = expected.toString().toLowerCase();

        answer = answer.replaceAll("[']", "");
        answer = answer.replaceAll("j", "i");

        return answer;
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     * 
     * @param example Example.
     */
    private void verifyTranscribeForward(final Example<AngloSaxonRune, AngloSaxonFontLetter> example)
    {
        final FontLetterList<AngloSaxonFontLetter> result = transcriber.transcribeForward(example.getLanguageLetters());

        assertNotNull(result);
        assertThat(result, is(example.getFontLetters()));
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     * 
     * @param example Example.
     */
    private void verifyTranscribeReverse(final Example<AngloSaxonRune, AngloSaxonFontLetter> example)
    {
        final LanguageLetterList result = transcriber.transcribeReverse(example.getFontLetters());

        assertNotNull(result);

        final String expected = convert(example.getLanguageLetters());

        assertThat(result.toString(), is(expected));
    }
}
