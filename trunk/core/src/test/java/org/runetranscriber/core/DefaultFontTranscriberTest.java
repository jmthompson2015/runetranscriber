package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;

/**
 * Provides tests for the <code>DefaultFontTranscriber</code> class.
 */
public class DefaultFontTranscriberTest extends DefaultTranscriberTest
{
    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward()
    {
        final RuneList<MyTestRune> fromSequence = createFromSequence();
        final FontTranscriber<MyTestRune, MyTestFontLetter> transcriber = new MyTestFontTranscriber();

        final FontLetterList<MyTestFontLetter> result = transcriber.transcribeForward(fromSequence);

        assertNotNull(result);
        final FontLetterList<MyTestFontLetter> expected = createToSequence();
        assertThat(result, is(expected));
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse()
    {
        final FontLetterList<MyTestFontLetter> toSequence = createToSequence();
        final FontTranscriber<MyTestRune, MyTestFontLetter> transcriber = new MyTestFontTranscriber();

        final RuneList<MyTestRune> result = transcriber.transcribeReverse(toSequence);

        assertNotNull(result);
        // Capital letters and apostrophes are lost in transcription.
        final RuneList<MyTestRune> expected = createFromSequence();
        assertThat(result, is(expected));
    }

    /**
     * @return a new from sequence.
     */
    private RuneList<MyTestRune> createFromSequence()
    {
        final RuneList<MyTestRune> answer = new RuneList<MyTestRune>();

        answer.add(MyTestRune.T);
        answer.add(MyTestRune.H);
        answer.add(MyTestRune.E);
        answer.add(MyTestRune.SPACE);
        answer.add(MyTestRune.H);
        answer.add(MyTestRune.O);
        answer.add(MyTestRune.B);
        answer.add(MyTestRune.B);
        answer.add(MyTestRune.I);
        answer.add(MyTestRune.T);
        answer.add(MyTestRune.COMMA);
        answer.add(MyTestRune.NEWLINE);
        answer.add(MyTestRune.O);
        answer.add(MyTestRune.R);
        answer.add(MyTestRune.SPACE);
        answer.add(MyTestRune.T);
        answer.add(MyTestRune.H);
        answer.add(MyTestRune.E);
        answer.add(MyTestRune.R);
        answer.add(MyTestRune.E);
        answer.add(MyTestRune.SPACE);
        answer.add(MyTestRune.A);
        answer.add(MyTestRune.N);
        answer.add(MyTestRune.D);
        answer.add(MyTestRune.SPACE);
        answer.add(MyTestRune.B);
        answer.add(MyTestRune.A);
        answer.add(MyTestRune.K);
        answer.add(MyTestRune.K);
        answer.add(MyTestRune.SPACE);
        answer.add(MyTestRune.A);
        answer.add(MyTestRune.G);
        answer.add(MyTestRune.A);
        answer.add(MyTestRune.I);
        answer.add(MyTestRune.N);
        answer.add(MyTestRune.PERIOD);

        return answer;
    }

    /**
     * @return a new to sequence.
     */
    private FontLetterList<MyTestFontLetter> createToSequence()
    {
        // "the hobbit,\nor there and bakk again."
        return new FontLetterList<MyTestFontLetter>(new MyTestFontLetter[] { MyTestFontLetter.T, MyTestFontLetter.H,
                MyTestFontLetter.E, MyTestFontLetter.SPACE, MyTestFontLetter.H, MyTestFontLetter.O, MyTestFontLetter.B,
                MyTestFontLetter.B, MyTestFontLetter.I, MyTestFontLetter.T, MyTestFontLetter.COMMA,
                MyTestFontLetter.NEWLINE, MyTestFontLetter.O, MyTestFontLetter.R, MyTestFontLetter.SPACE,
                MyTestFontLetter.T, MyTestFontLetter.H, MyTestFontLetter.E, MyTestFontLetter.R, MyTestFontLetter.E,
                MyTestFontLetter.SPACE, MyTestFontLetter.A, MyTestFontLetter.N, MyTestFontLetter.D,
                MyTestFontLetter.SPACE, MyTestFontLetter.B, MyTestFontLetter.A, MyTestFontLetter.K, MyTestFontLetter.K,
                MyTestFontLetter.SPACE, MyTestFontLetter.A, MyTestFontLetter.G, MyTestFontLetter.A, MyTestFontLetter.I,
                MyTestFontLetter.N, MyTestFontLetter.PERIOD, });
    }
}
