package org.runetranscriber.swingui;

import java.awt.BorderLayout;
import java.awt.EventQueue;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;
import javax.swing.WindowConstants;

/**
 * Provides a user interface for a rune transcriber.
 */
public final class RuneTranscriberUI extends JPanel
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
                final RuneTranscriberUI panel = new RuneTranscriberUI();

                frame = new JFrame("Rune Transcriber");
                frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
                frame.getContentPane().add(panel, BorderLayout.CENTER);
                frame.setLocationByPlatform(true);
                frame.setVisible(true);
                frame.pack();
            }
        });
    }

    /** Language to rune transcriber widget. */
    private LanguageToRuneTranscriberUI<?, ?> languageToRuneTranscriberUI;

    /** Rune to language transcriber widget. */
    private RuneToLanguageTranscriberUI<?, ?> runeToLanguageTranscriberUI;

    /** Tabbed pane. */
    private JTabbedPane tabbedPane;

    /**
     * Construct this object.
     */
    public RuneTranscriberUI()
    {
        tabbedPane = new JTabbedPane();

        setLayout(new BorderLayout());

        add(createNorthPane(), BorderLayout.NORTH);
        add(tabbedPane, BorderLayout.CENTER);

        setTranscriberGroup(TranscriberGroup.ANGLO_SAXON);
    }

    /**
     * @param transcriberGroup the transcriberGroup to set
     */
    void setTranscriberGroup(final TranscriberGroup<?, ?> transcriberGroup)
    {
        if (languageToRuneTranscriberUI != null)
        {
            tabbedPane.remove(languageToRuneTranscriberUI);
        }

        if (runeToLanguageTranscriberUI != null)
        {
            tabbedPane.remove(runeToLanguageTranscriberUI);
        }

        @SuppressWarnings({ "unchecked", "rawtypes" })
        final LanguageToRuneTranscriberUI<?, ?> lToRTranscriber = new LanguageToRuneTranscriberUI(transcriberGroup);
        languageToRuneTranscriberUI = lToRTranscriber;

        @SuppressWarnings({ "unchecked", "rawtypes" })
        final RuneToLanguageTranscriberUI<?, ?> rToLTranscriber = new RuneToLanguageTranscriberUI(transcriberGroup);
        runeToLanguageTranscriberUI = rToLTranscriber;

        tabbedPane.add("Language to Rune", languageToRuneTranscriberUI);
        tabbedPane.add("Rune to Language", runeToLanguageTranscriberUI);

        if (frame != null)
        {
            frame.pack();
        }
    }

    /**
     * @return a new north pane.
     */
    private JPanel createNorthPane()
    {
        final JPanel answer = new JPanel();

        answer.add(createRuneSetUI());

        return answer;
    }

    /**
     * @return a new rune set widget.
     */
    private JComboBox createRuneSetUI()
    {
        final JComboBox answer = new JComboBox();

        for (final TranscriberGroup<?, ?> runeSet : TranscriberGroup.values())
        {
            answer.addItem(runeSet);
        }

        answer.addActionListener(new ActionListener()
        {
            @Override
            public void actionPerformed(final ActionEvent event)
            {
                final JComboBox source = (JComboBox)event.getSource();
                final TranscriberGroup<?, ?> group = (TranscriberGroup<?, ?>)source.getSelectedItem();
                setTranscriberGroup(group);
            }
        });

        return answer;
    }
}
