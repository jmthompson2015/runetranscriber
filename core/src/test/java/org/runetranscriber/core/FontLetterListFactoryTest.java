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
    private final FontLetterListFactory factory = new FontLetterListFactory();

    /**
     * Test the <code>create()</code> method.
     */
    @Test
    public void create0()
    {
        final FontLetterList list = factory.create();

        assertTrue(list.isEmpty());
        assertThat(list.size(), is(0));
    }

    /**
     * Test the <code>create()</code> method.
     */
    @Test
    public void create1()
    {
        final List<String> inputList = new ArrayList<String>();
        inputList.add("t");
        inputList.add("h");
        inputList.add("e");
        inputList.add(" ");
        inputList.add("h");
        inputList.add("o");
        inputList.add("b");
        inputList.add("b");
        inputList.add("i");
        inputList.add("t");

        final FontLetterList list = factory.create(inputList);

        assertNotNull(list);
        assertFalse(list.isEmpty());
        assertThat(list.size(), is(10));
        assertThat(list.get(0), is("t"));
        assertThat(list.get(1), is("h"));
        assertThat(list.get(2), is("e"));
        assertThat(list.get(3), is(" "));
        assertThat(list.get(4), is("h"));
        assertThat(list.get(5), is("o"));
        assertThat(list.get(6), is("b"));
        assertThat(list.get(7), is("b"));
        assertThat(list.get(8), is("i"));
        assertThat(list.get(9), is("t"));
    }
}
