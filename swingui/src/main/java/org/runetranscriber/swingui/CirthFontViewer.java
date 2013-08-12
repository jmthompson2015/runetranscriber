package org.runetranscriber.swingui;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.WindowConstants;

import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.cirth.CerthRune;
import org.runetranscriber.core.cirth.CerthFontLetter;
import org.runetranscriber.core.cirth.CirthFontTranscriber;

/**
 * Provides a font viewer for Cirth runes.
 */
public final class CirthFontViewer
{
    /** Frame. */
    static JFrame frame;

    /**
     * Application method.
     * 
     * @param args Application arguments.
     */
    public static void main(final String[] args)
    {
        EventQueue.invokeLater(new Runnable()
        {
            @Override
            public void run()
            {
                final FontTranscriber<CerthRune, CerthFontLetter> fontTranscriber = new CirthFontTranscriber();
                final FontViewer<CerthRune, CerthFontLetter> panel = new FontViewer<CerthRune, CerthFontLetter>(
                        fontTranscriber, 0);

                frame = new JFrame("Cirth Font Display");
                frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
                frame.getContentPane().add(panel, BorderLayout.CENTER);
                frame.setSize(1280, 700);
                frame.setLocationByPlatform(true);
                frame.setVisible(true);
            }
        });
    }
}
