package org.runetranscriber.core;

import java.awt.Font;

/**
 * Defines methods required by a rune to font character transcriber.
 * 
 * @param <R> Rune type parameter.
 */
public interface FontTranscriber<R> extends Transcriber<R, String>
{
    /** Default font size. */
    // float DEFAULT_FONT_SIZE = 24f;

    /**
     * @return the default font size.
     */
    float getDefaultFontSize();

    /**
     * @return font.
     */
    Font getFont();

    /**
     * @param fontSize Font size.
     * 
     * @return font.
     */
    Font getFont(float fontSize);

    /**
     * @param rune From rune.
     * @param fontLetter To font letter.
     */
    void put(final R rune, final String fontLetter);
}
