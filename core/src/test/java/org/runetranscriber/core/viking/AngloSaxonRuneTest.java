package org.runetranscriber.core.viking;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.Test;

/**
 * Provides tests for the <code>AngloSaxonRune</code> class.
 */
public final class AngloSaxonRuneTest
{
    /**
     * Test the <code>equals()</code> method.
     */
    @Test
    public void testEquals()
    {
        assertTrue(AngloSaxonRune.FEOH.equals(AngloSaxonRune.FEOH));
        assertFalse(AngloSaxonRune.FEOH.equals(AngloSaxonRune.UR));
    }

    /**
     * Test the <code>hashCode()</code> method.
     */
    @Test
    public void testHashCode()
    {
        assertTrue(AngloSaxonRune.FEOH.hashCode() == AngloSaxonRune.FEOH.hashCode());
        assertFalse(AngloSaxonRune.FEOH.hashCode() == AngloSaxonRune.UR.hashCode());
    }

    /**
     * Test the <code>toDebugString()</code> method.
     */
    @Test
    public void toDebugString()
    {
        assertThat(AngloSaxonRune.FEOH.toDebugString(), is("0 FEOH feoh wealth"));
        assertThat(AngloSaxonRune.UR.toDebugString(), is("1 UR ur aurochs"));
    }

    /**
     * Test the <code>valueOfNumber()</code> method.
     */
    @Test
    public void valueOfNumber()
    {
        assertNull(AngloSaxonRune.valueOfNumber(0));
        assertThat(AngloSaxonRune.valueOfNumber(1), is(AngloSaxonRune.FEOH));
        assertThat(AngloSaxonRune.valueOfNumber(33), is(AngloSaxonRune.NEWLINE));
    }

    /**
     * Test the <code>values()</code> method.
     */
    @Test
    public void values()
    {
        final List<AngloSaxonRune> values = AngloSaxonRune.values();

        assertNotNull(values);
        assertThat(values.size(), is(33));
        assertThat(values.get(0), is(AngloSaxonRune.FEOH));
        assertThat(values.get(32), is(AngloSaxonRune.NEWLINE));
    }
}
