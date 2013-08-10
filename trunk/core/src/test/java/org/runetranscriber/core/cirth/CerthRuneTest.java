package org.runetranscriber.core.cirth;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import org.junit.Test;

/**
 * Provides tests for the <code>CirthRune</code> class.
 */
public final class CerthRuneTest
{
    /**
     * Test the <code>valueOfNumber()</code> method.
     */
    @Test
    public void valueOfNumber()
    {
        assertThat(CerthRune.valueOfNumber(1), is(CerthRune.C1));
        assertThat(CerthRune.valueOfNumber(10), is(CerthRune.C10));
        assertThat(CerthRune.valueOfNumber(20), is(CerthRune.C20));
        assertThat(CerthRune.valueOfNumber(30), is(CerthRune.C30));
        assertThat(CerthRune.valueOfNumber(40), is(CerthRune.C40));
        assertThat(CerthRune.valueOfNumber(50), is(CerthRune.C50));
        assertThat(CerthRune.valueOfNumber(60), is(CerthRune.C60));
    }
}
