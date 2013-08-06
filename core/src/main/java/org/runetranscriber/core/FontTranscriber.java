package org.runetranscriber.core;

import java.awt.Font;

/**
 * Defines methods required by a rune to font letter transcriber.
 * 
 * @param <R> Rune type parameter.
 */
public interface FontTranscriber<R extends Rune> extends Transcriber<RuneList<R>, R, FontLetterList, String>
{
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
