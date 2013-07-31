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
 * Provides tests for the <code>ListUtilities</code> class.
 */
public class ListUtilitiesTest
{
    /**
     * Test the <code>convert()</code> method.
     */
    @Test
    public void convertList()
    {
        final List<String> list = new ArrayList<String>();
        list.add("s");
        list.add("o");
        list.add("m");
        list.add("e");
        list.add("t");
        list.add("h");
        list.add("i");
        list.add("n");
        list.add("g");

        final String result = ListUtilities.convert(list);

        assertNotNull(result);
        assertThat(result.length(), is(list.size()));
        assertThat(result, is("something"));
    }

    /**
     * Test the <code>convert()</code> method.
     */
    @Test
    public void convertListNull()
    {
        final List<String> list = null;

        final String result = ListUtilities.convert(list);

        assertNotNull(result);
        assertThat(result.length(), is(0));
        assertThat(result, is(""));
    }

    /**
     * Test the <code>convert()</code> method.
     */
    @Test
    public void convertString()
    {
        final String string = "something";

        final List<String> result = ListUtilities.convert(string);

        assertNotNull(result);
        assertThat(result.size(), is(string.length()));
        assertThat(result.get(0), is("s"));
        assertThat(result.get(1), is("o"));
        assertThat(result.get(2), is("m"));
        assertThat(result.get(3), is("e"));
        assertThat(result.get(4), is("t"));
        assertThat(result.get(5), is("h"));
        assertThat(result.get(6), is("i"));
        assertThat(result.get(7), is("n"));
        assertThat(result.get(8), is("g"));
    }

    /**
     * Test the <code>convert()</code> method.
     */
    @Test
    public void convertStringNull()
    {
        String string = null;

        List<String> result = ListUtilities.convert(string);

        assertNotNull(result);
        assertThat(result.size(), is(0));

        string = "";

        result = ListUtilities.convert(string);

        assertNotNull(result);
        assertThat(result.size(), is(0));
    }

    /**
     * Test the <code>equals()</code> method.
     */
    @Test
    public void testEquals()
    {
        final List<String> fromList = new ArrayList<String>();
        fromList.add("s");
        fromList.add("o");
        fromList.add("m");
        fromList.add("e");
        fromList.add("t");
        fromList.add("h");
        fromList.add("i");
        fromList.add("n");
        fromList.add("g");

        final List<String> key = new ArrayList<String>();
        key.add("t");
        key.add("h");

        assertFalse(ListUtilities.equals(fromList, key, 0));
        assertFalse(ListUtilities.equals(fromList, key, 1));
        assertFalse(ListUtilities.equals(fromList, key, 2));
        assertFalse(ListUtilities.equals(fromList, key, 3));
        assertTrue(ListUtilities.equals(fromList, key, 4));
        assertFalse(ListUtilities.equals(fromList, key, 5));
        assertFalse(ListUtilities.equals(fromList, key, 6));
        assertFalse(ListUtilities.equals(fromList, key, 7));
    }

    /**
     * Test the <code>equals()</code> method.
     */
    @Test
    public void testEqualsNull()
    {
        // fromList is null
        List<String> fromList = null;
        List<String> key = null;
        int start = -1;
        ListUtilities.equals(fromList, key, start);

        // key is null
        fromList = new ArrayList<String>();
        ListUtilities.equals(fromList, key, start);

        // start below range
        key = new ArrayList<String>();
        ListUtilities.equals(fromList, key, start);

        // start above range
        start = 100;
        ListUtilities.equals(fromList, key, start);
    }
}
