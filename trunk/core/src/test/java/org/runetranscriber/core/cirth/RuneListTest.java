package org.runetranscriber.core.cirth;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.runetranscriber.core.Example;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.example.CirthEreborExample1;

/**
 * Provides tests for the <code>Cirth</code> class.
 */
public final class RuneListTest
{
    /** Example. */
    private Example<Certh> example = new CirthEreborExample1();

    /**
     * Test the <code>toString()</code> method.
     */
    @Test
    public void testToString()
    {
        final RuneList<Certh> cirth = example.getRunes();
        final String result = cirth.toString();
        assertNotNull(result);
        assertThat(
                result,
                is("DH-C55-SPACE-L-O-C12-D-SPACE-O-V-SPACE-DH-C55-SPACE-C12-I-C36-C35-SPACE-T-C12-A-C22-C35-L-A-T-C55-D-SPACE-F-C12-O-M-SPACE-DH-C55-SPACE-C12-E-D-SPACE-B-OO-K"));
    }
}
