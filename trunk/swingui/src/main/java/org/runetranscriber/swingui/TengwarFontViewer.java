package org.runetranscriber.swingui;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.WindowConstants;

import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.tengwar.TengwaRune;
import org.runetranscriber.core.tengwar.TengwaFontLetter;
import org.runetranscriber.core.tengwar.TengwarFontTranscriber;

/**
 * Provides a font viewer for Tengwar runes.
 */
public final class TengwarFontViewer
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
                final FontTranscriber<TengwaRune, TengwaFontLetter> fontTranscriber = new TengwarFontTranscriber();
                final FontViewer<TengwaRune, TengwaFontLetter> panel = new FontViewer<TengwaRune, TengwaFontLetter>(
                        fontTranscriber, 0);

                frame = new JFrame("Tengwar Font Display");
                frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
                frame.getContentPane().add(panel, BorderLayout.CENTER);
                frame.setSize(1280, 700);
                frame.setLocationByPlatform(true);
                frame.setVisible(true);
            }
        });
    }
}
