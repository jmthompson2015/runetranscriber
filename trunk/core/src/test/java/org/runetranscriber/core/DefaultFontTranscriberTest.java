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
        final FontTranscriber<MyTestRune> transcriber = new MyTestFontTranscriber();

        final FontLetterList result = transcriber.transcribeForward(fromSequence);

        assertNotNull(result);
        final FontLetterList expected = createToSequence();
        assertThat(result, is(expected));
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse()
    {
        final FontLetterList toSequence = createToSequence();
        final FontTranscriber<MyTestRune> transcriber = new MyTestFontTranscriber();

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
    private FontLetterList createToSequence()
    {
        return new FontLetterList("the hobbit,\nor there and bakk again.");
    }
}
