package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

/**
 * Provides tests for the <code>FontLetterListFactory</code> class.
 */
public final class FontLetterListFactoryTest
{
    /** Factory. */
    private final FontLetterListFactory<MyTestFontLetter> factory = new FontLetterListFactory<MyTestFontLetter>();

    /**
     * Test the <code>create()</code> method.
     */
    @Test
    public void create0()
    {
        final FontLetterList<MyTestFontLetter> list = factory.create();

        assertTrue(list.isEmpty());
        assertThat(list.size(), is(0));
    }

    /**
     * Test the <code>create()</code> method.
     */
    @Test
    public void create1()
    {
        final List<MyTestFontLetter> inputList = new ArrayList<MyTestFontLetter>();
        inputList.add(MyTestFontLetter.T);
        inputList.add(MyTestFontLetter.H);
        inputList.add(MyTestFontLetter.E);
        inputList.add(MyTestFontLetter.SPACE);
        inputList.add(MyTestFontLetter.H);
        inputList.add(MyTestFontLetter.O);
        inputList.add(MyTestFontLetter.B);
        inputList.add(MyTestFontLetter.B);
        inputList.add(MyTestFontLetter.I);
        inputList.add(MyTestFontLetter.T);

        final FontLetterList<MyTestFontLetter> list = factory.create(inputList);

        assertNotNull(list);
        assertFalse(list.isEmpty());
        assertThat(list.size(), is(10));
        assertThat(list.get(0), is(MyTestFontLetter.T));
        assertThat(list.get(1), is(MyTestFontLetter.H));
        assertThat(list.get(2), is(MyTestFontLetter.E));
        assertThat(list.get(3), is(MyTestFontLetter.SPACE));
        assertThat(list.get(4), is(MyTestFontLetter.H));
        assertThat(list.get(5), is(MyTestFontLetter.O));
        assertThat(list.get(6), is(MyTestFontLetter.B));
        assertThat(list.get(7), is(MyTestFontLetter.B));
        assertThat(list.get(8), is(MyTestFontLetter.I));
        assertThat(list.get(9), is(MyTestFontLetter.T));
    }
}
