package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * Provides tests for the <code>LanguageLetterList</code> class.
 */
public final class LanguageLetterListTest
{
    /** List. */
    private final LanguageLetterList list0 = new LanguageLetterList("the hobbit");

    /** List. */
    private final LanguageLetterList list1 = new LanguageLetterList("or there and back again");

    /** List. */
    private final LanguageLetterList list2 = new LanguageLetterList("the hobbit");

    /**
     * Test the <code>LanguageLetterList()</code> method.
     */
    @Test
    public void constructor0()
    {
        final LanguageLetterList list = new LanguageLetterList();

        assertTrue(list.isEmpty());
    }

    /**
     * Test the <code>LanguageLetterList()</code> method.
     */
    @Test
    public void constructor1()
    {
        assertThat(list0.size(), is(10));
        assertThat(list0.get(0), is("t"));
        assertThat(list0.get(1), is("h"));
        assertThat(list0.get(2), is("e"));
        assertThat(list0.get(3), is(" "));
        assertThat(list0.get(4), is("h"));
        assertThat(list0.get(5), is("o"));
        assertThat(list0.get(6), is("b"));
        assertThat(list0.get(7), is("b"));
        assertThat(list0.get(8), is("i"));
        assertThat(list0.get(9), is("t"));
    }

    /**
     * Test the <code>LanguageLetterList()</code> method.
     */
    @Test
    public void constructor1Null()
    {
        final LanguageLetterList list = new LanguageLetterList((LanguageLetterList)null);
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
        assertThat(list0.toString(), is("the hobbit"));
    }
}
