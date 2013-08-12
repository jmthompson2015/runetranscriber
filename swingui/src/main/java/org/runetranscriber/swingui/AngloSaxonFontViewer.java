package org.runetranscriber.swingui;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.WindowConstants;

import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.viking.AngloSaxonFontLetter;
import org.runetranscriber.core.viking.AngloSaxonFontTranscriber;
import org.runetranscriber.core.viking.AngloSaxonRune;

/**
 * Provides a font viewer for Anglo-Saxon runes.
 */
public final class AngloSaxonFontViewer
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
                final FontTranscriber<AngloSaxonRune, AngloSaxonFontLetter> fontTranscriber = new AngloSaxonFontTranscriber();
                final FontViewer<AngloSaxonRune, AngloSaxonFontLetter> panel = new FontViewer<AngloSaxonRune, AngloSaxonFontLetter>(
                        fontTranscriber, 22);

                frame = new JFrame("Anglo-Saxon Font Display");
                frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
                frame.getContentPane().add(panel, BorderLayout.CENTER);
                frame.setSize(1280, 700);
                frame.setLocationByPlatform(true);
                frame.setVisible(true);
            }
        });
    }
}
