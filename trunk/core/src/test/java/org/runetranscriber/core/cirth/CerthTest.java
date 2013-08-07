package org.runetranscriber.core.cirth;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Test;

/**
 * Provides tests for the <code>Cirth</code> class.
 */
public final class CerthTest
{
    /**
     * Test the <code>valueOfNumber()</code> method.
     */
    @Test
    public void valueOfNumber()
    {
        assertThat(Certh.valueOfNumber(1), is(Certh.C1));
        assertThat(Certh.valueOfNumber(10), is(Certh.C10));
        assertThat(Certh.valueOfNumber(20), is(Certh.C20));
        assertThat(Certh.valueOfNumber(30), is(Certh.C30));
        assertThat(Certh.valueOfNumber(40), is(Certh.C40));
        assertThat(Certh.valueOfNumber(50), is(Certh.C50));
        assertThat(Certh.valueOfNumber(60), is(Certh.C60));
    }
}
