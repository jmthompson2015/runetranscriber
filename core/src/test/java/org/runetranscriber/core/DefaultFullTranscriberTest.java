package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;

/**
 * Provides tests for the <code>FullTranscriber</code> class.
 */
public final class DefaultFullTranscriberTest
{
    /** Transcriber. */
    private final FullTranscriber<MyTestRune, MyTestFontLetter> transcriber = new DefaultFullTranscriber<MyTestRune, MyTestFontLetter>(
            "MyTestRune", "MyTestRune runes.", new MyTestPhoneticTranscriber(), new MyTestRuneTranscriber(),
            new MyTestFontTranscriber()/* , MyTestRune.class */);

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward()
    {
        final LanguageLetterList languageLetters = new LanguageLetterList("the hobbit,\nor there and back again");

        final FontLetterList<MyTestFontLetter> result = transcriber.transcribeForward(languageLetters);

        assertNotNull(result);
        assertThat(result.size(), is(35));
        assertThat(
                result.toString(),
                is("T-H-E-SPACE-H-O-B-B-I-T-COMMA-NEWLINE-O-R-SPACE-T-H-E-R-E-SPACE-A-N-D-SPACE-B-A-K-K-SPACE-A-G-A-I-N"));
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse()
    {
        // "the hobbit,\nor there and bakk again"
        final FontLetterList<MyTestFontLetter> fontLetters = new FontLetterList<MyTestFontLetter>(
                new MyTestFontLetter[] { MyTestFontLetter.T, MyTestFontLetter.H, MyTestFontLetter.E,
                        MyTestFontLetter.SPACE, MyTestFontLetter.H, MyTestFontLetter.O, MyTestFontLetter.B,
                        MyTestFontLetter.B, MyTestFontLetter.I, MyTestFontLetter.T, MyTestFontLetter.COMMA,
                        MyTestFontLetter.NEWLINE, MyTestFontLetter.O, MyTestFontLetter.R, MyTestFontLetter.SPACE,
                        MyTestFontLetter.T, MyTestFontLetter.H, MyTestFontLetter.E, MyTestFontLetter.R,
                        MyTestFontLetter.E, MyTestFontLetter.SPACE, MyTestFontLetter.A, MyTestFontLetter.N,
                        MyTestFontLetter.D, MyTestFontLetter.SPACE, MyTestFontLetter.B, MyTestFontLetter.A,
                        MyTestFontLetter.K, MyTestFontLetter.K, MyTestFontLetter.SPACE, MyTestFontLetter.A,
                        MyTestFontLetter.G, MyTestFontLetter.A, MyTestFontLetter.I, MyTestFontLetter.N, });

        final LanguageLetterList result = transcriber.transcribeReverse(fontLetters);

        assertNotNull(result);
        assertThat(result.size(), is(35));
        assertThat(result.toString(), is("the hobbit,\nor there and bakk again"));
    }
}
