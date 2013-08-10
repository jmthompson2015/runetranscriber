package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * Provides tests for the <code>FontLetterList</code> class.
 */
public final class FontLetterListTest
{
    /** List. */
    private final FontLetterList<MyTestFontLetter> list0 = new FontLetterList<MyTestFontLetter>(new MyTestFontLetter[] {
            MyTestFontLetter.T, MyTestFontLetter.H, MyTestFontLetter.E, MyTestFontLetter.SPACE, MyTestFontLetter.H,
            MyTestFontLetter.O, MyTestFontLetter.B, MyTestFontLetter.B, MyTestFontLetter.I, MyTestFontLetter.T, });

    /** List. */
    private final FontLetterList<MyTestFontLetter> list1 = new FontLetterList<MyTestFontLetter>(new MyTestFontLetter[] {
            MyTestFontLetter.O, MyTestFontLetter.R, MyTestFontLetter.SPACE, MyTestFontLetter.T, MyTestFontLetter.H,
            MyTestFontLetter.E, MyTestFontLetter.R, MyTestFontLetter.E, MyTestFontLetter.SPACE, MyTestFontLetter.A,
            MyTestFontLetter.N, MyTestFontLetter.D, MyTestFontLetter.SPACE, MyTestFontLetter.B, MyTestFontLetter.A,
            MyTestFontLetter.C, MyTestFontLetter.K, MyTestFontLetter.SPACE, MyTestFontLetter.A, MyTestFontLetter.G,
            MyTestFontLetter.A, MyTestFontLetter.I, MyTestFontLetter.N, });

    /** List. */
    private final FontLetterList<MyTestFontLetter> list2 = new FontLetterList<MyTestFontLetter>(new MyTestFontLetter[] {
            MyTestFontLetter.T, MyTestFontLetter.H, MyTestFontLetter.E, MyTestFontLetter.SPACE, MyTestFontLetter.H,
            MyTestFontLetter.O, MyTestFontLetter.B, MyTestFontLetter.B, MyTestFontLetter.I, MyTestFontLetter.T, });

    /**
     * Test the <code>FontLetterList()</code> method.
     */
    @Test
    public void constructor0()
    {
        final FontLetterList<MyTestFontLetter> list = new FontLetterList<MyTestFontLetter>();

        assertTrue(list.isEmpty());
    }

    /**
     * Test the <code>FontLetterList()</code> method.
     */
    @Test
    public void constructor1()
    {
        assertThat(list0.size(), is(10));
        assertThat(list0.get(0), is(MyTestFontLetter.T));
        assertThat(list0.get(1), is(MyTestFontLetter.H));
        assertThat(list0.get(2), is(MyTestFontLetter.E));
        assertThat(list0.get(3), is(MyTestFontLetter.SPACE));
        assertThat(list0.get(4), is(MyTestFontLetter.H));
        assertThat(list0.get(5), is(MyTestFontLetter.O));
        assertThat(list0.get(6), is(MyTestFontLetter.B));
        assertThat(list0.get(7), is(MyTestFontLetter.B));
        assertThat(list0.get(8), is(MyTestFontLetter.I));
        assertThat(list0.get(9), is(MyTestFontLetter.T));
    }

    /**
     * Test the <code>FontLetterList()</code> method.
     */
    @Test
    public void constructor1Null()
    {
        final FontLetterList<MyTestFontLetter> list = new FontLetterList<MyTestFontLetter>(
                (FontLetterList<MyTestFontLetter>)null);
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
        assertThat(list0.toString(), is("T-H-E-SPACE-H-O-B-B-I-T"));
    }
}
