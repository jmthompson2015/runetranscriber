package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

/**
 * Provides tests for the <code>DefaultPhoneticTranscriber</code> class.
 */
public class DefaultPhoneticTranscriberTest extends DefaultTranscriberTest
{
    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward()
    {
        final List<String> fromSequence = createFromSequence();
        final PhoneticTranscriber transcriber = new MyTestPhoneticTranscriber();

        final List<Phoneme> result = transcriber.transcribeForward(fromSequence);

        assertNotNull(result);
        final List<Phoneme> expected = createToSequence();
        assertThat(result, is(expected));
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse()
    {
        final List<Phoneme> toSequence = createToSequence();
        final PhoneticTranscriber transcriber = new MyTestPhoneticTranscriber();

        final List<String> result = transcriber.transcribeReverse(toSequence);

        assertNotNull(result);
        // Capital letters and apostrophes are lost in transcription.
        assertThat(ListUtilities.convert(result), is("the hobbit,\nor there and bakk again."));
    }

    /**
     * @param list List.
     * @param key Key.
     * @param replacement Replacement.
     */
    protected void replaceAll(final List<String> list, final String key, final String replacement)
    {
        for (int i = 0; i < list.size(); i++)
        {
            if (key.equals(list.get(i)))
            {
                list.set(i, replacement);
            }
        }
    }

    /**
     * @param result Result.
     * @param expected Expected.
     * @param isVerbose Flag indicating if the output should be verbose.
     */
    protected void verifyReverse(final List<String> result, final List<String> expected, final boolean isVerbose)
    {
        // Capital letters and apostrophes are lost in transcription.
        String expectedString = ListUtilities.convert(expected).toLowerCase();
        expectedString = expectedString.replaceAll("[']", "");
        final String resultString = ListUtilities.convert(result);

        if (isVerbose)
        {
            System.out.println("expected = [" + expectedString + "]");
            System.out.println("result   = [" + resultString + "]");
        }

        assertNotNull(result);
        assertThat(resultString, is(expectedString));
    }

    /**
     * @return a new from sequence.
     */
    private List<String> createFromSequence()
    {
        return ListUtilities.convert("The hobbit,\nor there and back again.");
    }

    /**
     * @return a new to sequence.
     */
    private List<Phoneme> createToSequence()
    {
        final List<Phoneme> answer = new ArrayList<Phoneme>();
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
}
