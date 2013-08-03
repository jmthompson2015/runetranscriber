package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * Provides tests for the <code>PhonemeList</code> class.
 */
public final class PhonemeListTest
{
    /** Test data. */
    private static final Phoneme[] THE_HOBBIT = new Phoneme[] { Phoneme.TH, Phoneme.E, Phoneme.SPACE, Phoneme.H,
            Phoneme.O, Phoneme.B, Phoneme.B, Phoneme.I, Phoneme.T, };

    /** List. */
    private final PhonemeList list0 = new PhonemeList(THE_HOBBIT);

    /** List. */
    private final PhonemeList list1 = new PhonemeList(new Phoneme[] { Phoneme.O, Phoneme.R, Phoneme.SPACE, Phoneme.TH,
            Phoneme.E, Phoneme.R, Phoneme.E, Phoneme.SPACE, Phoneme.A, Phoneme.N, Phoneme.D, Phoneme.SPACE, Phoneme.B,
            Phoneme.A, Phoneme.K, Phoneme.K, Phoneme.SPACE, Phoneme.A, Phoneme.G, Phoneme.A, Phoneme.I, Phoneme.N, });

    /** List. */
    private final PhonemeList list2 = new PhonemeList(THE_HOBBIT);

    /**
     * Test the <code>PhonemeList()</code> method.
     */
    @Test
    public void constructor0()
    {
        final PhonemeList list = new PhonemeList();

        assertTrue(list.isEmpty());
    }

    /**
     * Test the <code>PhonemeList()</code> method.
     */
    @Test
    public void constructor1()
    {
        assertThat(list0.size(), is(9));

        for (int i = 0; i < 9; i++)
        {
            assertThat(list0.get(i), is(THE_HOBBIT[i]));
        }
    }

    /**
     * Test the <code>PhonemeList()</code> method.
     */
    @Test
    public void constructor1Null()
    {
        final PhonemeList list = new PhonemeList((PhonemeList)null);
        assertTrue(list.isEmpty());
    }

    /**
     * Test the <code>equals()</code> method.
     */
    @Test
    public void testEquals()
    {
        assertTrue(list0.equals(list0));
        assertFalse(list0.equals(list1));
        assertTrue(list0.equals(list2));
    }

    /**
     * Test the <code>hashCode()</code> method.
     */
    @Test
    public void testHashCode()
    {
        assertTrue(list0.hashCode() == list0.hashCode());
        assertFalse(list0.hashCode() == list1.hashCode());
        assertTrue(list0.hashCode() == list2.hashCode());
    }

    /**
     * Test the <code>toString()</code> method.
     */
    @Test
    public void testToString()
    {
        assertThat(list0.toString(), is("th-e- -h-o-b-b-i-t"));
    }
}
