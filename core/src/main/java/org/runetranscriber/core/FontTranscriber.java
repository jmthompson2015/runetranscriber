package org.runetranscriber.core;

import java.awt.Font;

/**
 * Defines methods required by a rune to font letter transcriber.
 * 
 * @param <R> Rune type parameter.
 * @param <F> Font letter type parameter.
 */
public interface FontTranscriber<R extends Rune, F extends FontLetter> extends
        Transcriber<RuneList<R>, R, FontLetterList<F>, F>
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
    void put(final R rune, final F fontLetter);
}
