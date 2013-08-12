package org.runetranscriber.swingui;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.WindowConstants;

import org.runetranscriber.core.viking.AngloSaxonFontLetter;
import org.runetranscriber.core.viking.AngloSaxonRune;

/**
 * Provides an Anglo-saxon Rune table display.
 */
public final class AngloSaxonTableUI extends JScrollPane
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
                final AngloSaxonTableUI panel = new AngloSaxonTableUI();

                frame = new JFrame("Anglo-Saxon Rune Table");
                frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
                frame.getContentPane().add(panel, BorderLayout.CENTER);
                frame.setLocationByPlatform(true);
                frame.setVisible(true);
                frame.pack();
            }
        });
    }

    /**
     * Construct this object.
     */
    public AngloSaxonTableUI()
    {
        final JPanel table = new RuneTable<AngloSaxonRune, AngloSaxonFontLetter>(TranscriberGroup.ANGLO_SAXON);
        getViewport().setView(table);
    }
}
