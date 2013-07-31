package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import java.util.List;

import org.junit.Test;

/**
 * Provides tests for the <code>FullTranscriber</code> class.
 */
public class FullTranscriberTest
{
    /** Transcriber. */
    private final FullTranscriber<MyTestRune> transcriber = new FullTranscriber<MyTestRune>("MyTestRune",
            "MyTestRune runes.", new MyTestPhoneticTranscriber(), new MyTestRuneTranscriber(),
            new MyTestFontTranscriber()/* , MyTestRune.class */);

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward()
    {
        final List<String> languageLetters = ListUtilities.convert("the hobbit,\nor there and back again");

        final List<String> result = transcriber.transcribeForward(languageLetters);

        assertNotNull(result);
        assertThat(result.size(), is(35));
        assertThat(ListUtilities.convert(result), is("the hobbit,\nor there and bakk again"));
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse()
    {
        final List<String> fontLetters = ListUtilities.convert("the hobbit,\nor there and bakk again");

        final List<String> result = transcriber.transcribeReverse(fontLetters);

        assertNotNull(result);
        assertThat(result.size(), is(35));
        assertThat(ListUtilities.convert(result), is("the hobbit,\nor there and bakk again"));
    }
}
