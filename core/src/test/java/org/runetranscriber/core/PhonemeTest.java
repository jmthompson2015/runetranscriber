package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;

/**
 * Provides tests for the <code>Phoneme</code> class.
 */
public final class PhonemeTest
{
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
