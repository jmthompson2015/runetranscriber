package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;

/**
 * Provides tests for the <code>DefaultRuneTranscriber</code> class.
 */
public class DefaultRuneTranscriberTest extends DefaultTranscriberTest
{
    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward()
    {
        final PhonemeList fromSequence = createFromSequence();
        final RuneTranscriber<MyTestRune> transcriber = new MyTestRuneTranscriber();

        final RuneList<MyTestRune> result = transcriber.transcribeForward(fromSequence);

        assertNotNull(result);
        final RuneList<MyTestRune> expected = createToSequence();
        assertThat(result, is(expected));
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse()
    {
        final RuneList<MyTestRune> toSequence = createToSequence();
        final RuneTranscriber<MyTestRune> transcriber = new MyTestRuneTranscriber();

        final PhonemeList result = transcriber.transcribeReverse(toSequence);

        assertNotNull(result);
        // Capital letters and apostrophes are lost in transcription.
        final PhonemeList expected = createFromSequence();
        assertThat(result, is(expected));
    }

    /**
     * @return a new from sequence.
     */
    private PhonemeList createFromSequence()
    {
        final PhonemeList answer = new PhonemeList();
        answer.add(Phoneme.TH);
        answer.add(Phoneme.E);
        answer.add(Phoneme.SPACE);
        answer.add(Phoneme.H);
        answer.add(Phoneme.O);
        answer.add(Phoneme.B);
        answer.add(Phoneme.B);
        answer.add(Phoneme.I);
        answer.add(Phoneme.T);
        answer.add(Phoneme.COMMA);
        answer.add(Phoneme.NEWLINE);
        answer.add(Phoneme.O);
        answer.add(Phoneme.R);
        answer.add(Phoneme.SPACE);
        answer.add(Phoneme.TH);
        answer.add(Phoneme.E);
        answer.add(Phoneme.R);
        answer.add(Phoneme.E);
        answer.add(Phoneme.SPACE);
        answer.add(Phoneme.A);
        answer.add(Phoneme.N);
        answer.add(Phoneme.D);
        answer.add(Phoneme.SPACE);
        answer.add(Phoneme.B);
        answer.add(Phoneme.A);
        answer.add(Phoneme.K);
        answer.add(Phoneme.K);
        answer.add(Phoneme.SPACE);
        answer.add(Phoneme.A);
        answer.add(Phoneme.G);
        answer.add(Phoneme.A);
        answer.add(Phoneme.I);
        answer.add(Phoneme.N);
        answer.add(Phoneme.PERIOD);

        return answer;
    }

    /**
     * @return a new to sequence.
     */
    private RuneList<MyTestRune> createToSequence()
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
}
