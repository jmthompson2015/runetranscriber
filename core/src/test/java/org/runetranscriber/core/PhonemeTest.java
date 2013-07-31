package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThat;

import java.util.List;

import org.junit.Ignore;
import org.junit.Test;
import org.runetranscriber.core.cirth.Certh;
import org.runetranscriber.core.cirth.example.CirthEreborExample1;
import org.runetranscriber.core.cirth.example.CirthEreborExample2;

/**
 * Provides tests for the <code>Phoneme</code> class.
 */
public class PhonemeTest
{
    /** Example. */
    private Example<Certh> example1 = new CirthEreborExample1();

    /** Example. */
    private Example<Certh> example2 = new CirthEreborExample2();

    /**
     * Test the <code>asList()</code> method.
     */
    @Test
    public void asList1()
    {
        final List<Phoneme> result = Phoneme.asList(Phoneme.A);

        assertNotNull(result);
        assertThat(result.size(), is(1));
        assertThat(result.get(0), is(Phoneme.A));
    }

    /**
     * Test the <code>asList()</code> method.
     */
    @Test
    public void asList3()
    {
        final List<Phoneme> result = Phoneme.asList(Phoneme.A, Phoneme.B, Phoneme.CH);

        assertNotNull(result);
        assertThat(result.size(), is(3));
        assertThat(result.get(0), is(Phoneme.A));
        assertThat(result.get(1), is(Phoneme.B));
        assertThat(result.get(2), is(Phoneme.CH));
    }

    /**
     * Test the <code>asList()</code> method.
     */
    @Test
    public void asListNull()
    {
        List<Phoneme> result = Phoneme.asList();

        assertNotNull(result);
        assertThat(result.size(), is(0));

        result = Phoneme.asList((Phoneme)null);

        assertNotNull(result);
        assertThat(result.size(), is(0));
    }

    /**
     * Test the <code>getMeaning()</code> method.
     */
    @Test
    public void getMeaning()
    {
        assertThat(Phoneme.P.getMeaning(), is("p"));
        assertThat(Phoneme.NG2.getMeaning(), is(Constants.VELAR_NASAL));

        assertThat(Phoneme.AA.getMeaning(), is(Constants.A_MACRON));
        assertThat(Phoneme.EE.getMeaning(), is(Constants.E_MACRON));
        assertThat(Phoneme.O_DIARESIS.getMeaning(), is(Constants.O_DIAERESIS));
        assertThat(Phoneme.OO.getMeaning(), is(Constants.O_MACRON));
        assertThat(Phoneme.UE.getMeaning(), is(Constants.U_DIAERESIS));
        assertThat(Phoneme.UU.getMeaning(), is(Constants.U_MACRON));

        assertThat(Phoneme.SCHWA.getMeaning(), is("e"));
        assertThat(Phoneme.SCHWA2.getMeaning(), is("u"));
        assertThat(Phoneme.PLUS_H.getMeaning(), is("+h"));
        assertThat(Phoneme.AMP.getMeaning(), is("&"));
    }

    /**
     * Test the <code>toString()</code> method.
     */
    @Ignore
    @Test
    public void test1ToString()
    {
        final List<Phoneme> phonemes = example1.getPhonemes();

        final String result = Phoneme.toString(phonemes);
        assertNotNull(result);

        final String expected = "dh-e- -l-o-r-d- -o-v- -dh-e- -r-i-" + Constants.VELAR_NASAL
                + "-s- -t-r-a-n-s-l-a-t-e-d- -f-r-o-m- -dh-e- -r-e-d- -b-" + Constants.O_MACRON + "-k";

        assertThat(result, is(expected));
    }

    /**
     * Test the <code>toString()</code> method.
     */
    @Test
    public void test2ToString()
    {
        final List<Phoneme> phonemes = example2.getPhonemes();

        final String result = Phoneme.toString(phonemes);

        assertNotNull(result);
        assertThat(result, is("b-a-l-i-n- -s-u-n- -o-v- -f-u-nd-i-n- -l-o-r-d- -o-v- -m-o-r-i-a"));
    }

    /**
     * Test the <code>valueOfMeaning()</code> method.
     */
    @Test
    public void valueOfMeaning()
    {
        assertThat(Phoneme.valueOfMeaning("p"), is(Phoneme.P));

        assertThat(Phoneme.valueOfMeaning(" "), is(Phoneme.SPACE));
        assertThat(Phoneme.valueOfMeaning(","), is(Phoneme.COMMA));
        assertThat(Phoneme.valueOfMeaning("."), is(Phoneme.PERIOD));
        assertThat(Phoneme.valueOfMeaning("\n"), is(Phoneme.NEWLINE));

        assertNull(Phoneme.valueOfMeaning(null));
    }

    /**
     * Test the <code>valueOfMeaning()</code> method.
     */
    @Test
    public void valueOfMeaningNull()
    {
        assertNull(Phoneme.valueOfMeaning(null));
        assertNull(Phoneme.valueOfMeaning(""));
        assertNull(Phoneme.valueOfMeaning("bogus"));
    }
}
