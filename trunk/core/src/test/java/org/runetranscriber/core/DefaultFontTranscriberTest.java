package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.List;

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
        final List<MyTestRune> fromSequence = createFromSequence();
        final FontTranscriber<MyTestRune> transcriber = new MyTestFontTranscriber();

        final List<String> result = transcriber.transcribeForward(fromSequence);

        assertNotNull(result);
        final List<String> expected = createToSequence();
        assertThat(result, is(expected));
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse()
    {
        final List<String> toSequence = createToSequence();
        final FontTranscriber<MyTestRune> transcriber = new MyTestFontTranscriber();

        final List<MyTestRune> result = transcriber.transcribeReverse(toSequence);

        assertNotNull(result);
        // Capital letters and apostrophes are lost in transcription.
        final List<MyTestRune> expected = createFromSequence();
        assertThat(result, is(expected));
    }

    /**
     * @return a new from sequence.
     */
    private List<MyTestRune> createFromSequence()
    {
        final List<MyTestRune> answer = new ArrayList<MyTestRune>();

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
    private List<String> createToSequence()
    {
        return ListUtilities.convert("the hobbit,\nor there and bakk again.");
    }
}
