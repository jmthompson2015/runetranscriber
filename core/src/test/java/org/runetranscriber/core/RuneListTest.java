package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * Provides tests for the <code>RuneList</code> class.
 */
public final class RuneListTest
{
    /** Test data. */
    private static final MyTestRune[] THE_HOBBIT = new MyTestRune[] { MyTestRune.T, MyTestRune.H, MyTestRune.E,
            MyTestRune.SPACE, MyTestRune.H, MyTestRune.O, MyTestRune.B, MyTestRune.B, MyTestRune.I, MyTestRune.T, };

    /** List. */
    private final RuneList<MyTestRune> list0 = new RuneList<MyTestRune>(THE_HOBBIT);

    /** List. */
    private final RuneList<MyTestRune> list1 = new RuneList<MyTestRune>(new MyTestRune[] { MyTestRune.O, MyTestRune.R,
            MyTestRune.SPACE, MyTestRune.T, MyTestRune.H, MyTestRune.E, MyTestRune.R, MyTestRune.E, MyTestRune.SPACE,
            MyTestRune.A, MyTestRune.N, MyTestRune.D, MyTestRune.SPACE, MyTestRune.B, MyTestRune.A, MyTestRune.K,
            MyTestRune.K, MyTestRune.SPACE, MyTestRune.A, MyTestRune.G, MyTestRune.A, MyTestRune.I, MyTestRune.N, });

    /** List. */
    private final RuneList<MyTestRune> list2 = new RuneList<MyTestRune>(THE_HOBBIT);

    /**
     * Test the <code>RuneList()</code> method.
     */
    @Test
    public void constructor0()
    {
        final RuneList<MyTestRune> list = new RuneList<MyTestRune>();

        assertTrue(list.isEmpty());
    }

    /**
     * Test the <code>RuneList()</code> method.
     */
    @Test
    public void constructor1()
    {
        assertThat(list0.size(), is(10));

        for (int i = 0; i < 10; i++)
        {
            assertThat(list0.get(i), is(THE_HOBBIT[i]));
        }
    }

    /**
     * Test the <code>RuneList()</code> method.
     */
    @Test
    public void constructor1Null()
    {
        final RuneList<MyTestRune> list = new RuneList<MyTestRune>((RuneList<MyTestRune>)null);
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
        assertThat(list0.toString(), is("T-H-E-*-H-O-B-B-I-T"));
    }
}
