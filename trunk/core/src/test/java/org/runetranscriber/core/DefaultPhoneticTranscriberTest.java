package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

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
        final LanguageLetterList fromSequence = createFromSequence();
        final PhoneticTranscriber transcriber = new MyTestPhoneticTranscriber();

        final PhonemeList result = transcriber.transcribeForward(fromSequence);

        assertNotNull(result);
        final PhonemeList expected = createToSequence();
        assertThat(result, is(expected));
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse()
    {
        final PhonemeList toSequence = createToSequence();
        final PhoneticTranscriber transcriber = new MyTestPhoneticTranscriber();

        final LanguageLetterList result = transcriber.transcribeReverse(toSequence);

        assertNotNull(result);
        // Capital letters and apostrophes are lost in transcription.
        assertThat(result.toString(), is("the hobbit,\nor there and bakk again."));
    }

    /**
     * @param list List.
     * @param key Key.
     * @param replacement Replacement.
     */
    protected void replaceAll(final LanguageLetterList list, final String key, final String replacement)
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
     * @return a new from sequence.
     */
    private LanguageLetterList createFromSequence()
    {
        return new LanguageLetterList("The hobbit,\nor there and back again.");
    }

    /**
     * @return a new to sequence.
     */
    private PhonemeList createToSequence()
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
}
