package org.runetranscriber.core;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Test;

/**
 * Provides tests for the <code>FullTranscriber</code> class.
 */
public final class DefaultFullTranscriberTest
{
    /** Transcriber. */
    private final FullTranscriber<MyTestRune> transcriber = new DefaultFullTranscriber<MyTestRune>("MyTestRune",
            "MyTestRune runes.", new MyTestPhoneticTranscriber(), new MyTestRuneTranscriber(),
            new MyTestFontTranscriber()/* , MyTestRune.class */);

    /**
     * Test the <code>transcribeForward()</code> method.
     */
    @Test
    public void transcribeForward()
    {
        final LanguageLetterList languageLetters = new LanguageLetterList("the hobbit,\nor there and back again");

        final FontLetterList result = transcriber.transcribeForward(languageLetters);

        assertNotNull(result);
        assertThat(result.size(), is(35));
        assertThat(result.toString(), is("the hobbit,\nor there and bakk again"));
    }

    /**
     * Test the <code>transcribeReverse()</code> method.
     */
    @Test
    public void transcribeReverse()
    {
        final FontLetterList fontLetters = new FontLetterList("the hobbit,\nor there and bakk again");

        final LanguageLetterList result = transcriber.transcribeReverse(fontLetters);

        assertNotNull(result);
        assertThat(result.size(), is(35));
        assertThat(result.toString(), is("the hobbit,\nor there and bakk again"));
    }
}
