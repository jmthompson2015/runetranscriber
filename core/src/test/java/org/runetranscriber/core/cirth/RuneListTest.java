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
    private Example<Certh, CerthFontLetter> example = new CirthEreborExample1();

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
                is("C11-C55-SPACE-C31-C50-C12-C9-SPACE-C50-C4-SPACE-C11-C55-SPACE-C12-C39-C36-C34-SPACE-C8-C12-C48-C53-C34-C31-C48-C8-C56-C9-SPACE-C3-C12-C50-C6-SPACE-C11-C55-SPACE-C12-C46-C9-SPACE-C2-C51-C18"));
    }
}
