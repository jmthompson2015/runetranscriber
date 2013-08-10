package org.runetranscriber.core.cirth;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.runetranscriber.core.Example;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FullTranscriber;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.cirth.example.Examples;

/**
 * Provides tests for the <code>KhuzdulCirthMoriaFullTranscriber</code> class.
 */
public final class KhuzdulCirthMoriaFullTranscriberTest
{
    /** Examples. */
    private final Examples examples = new Examples();

    /** Transcriber. */
    private final FullTranscriber<CerthRune, CerthFontLetter> transcriber = new KhuzdulCirthMoriaFullTranscriber();

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward1()
    {
        verifyTranscribeForward(examples.getCirthMoria1());
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse1()
    {
        verifyTranscribeReverse(examples.getCirthMoria1());
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
        answer = answer.replaceAll("c", "k");
        answer = answer.replaceAll("j", "i");

        return answer;
    }

    /**
     * Test the <code>transcribeForward()</code> method.
     * 
     * @param example Example.
     */
    private void verifyTranscribeForward(final Example<CerthRune, CerthFontLetter> example)
    {
        final FontLetterList<CerthFontLetter> result = transcriber.transcribeForward(example.getLanguageLetters());

        assertNotNull(result);
        assertThat(result, is(example.getFontLetters()));
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     * 
     * @param example Example.
     */
    private void verifyTranscribeReverse(final Example<CerthRune, CerthFontLetter> example)
    {
        final LanguageLetterList result = transcriber.transcribeReverse(example.getFontLetters());

        assertNotNull(result);

        final String expected = convert(example.getLanguageLetters());

        assertThat(result.toString(), is(expected));
    }
}
