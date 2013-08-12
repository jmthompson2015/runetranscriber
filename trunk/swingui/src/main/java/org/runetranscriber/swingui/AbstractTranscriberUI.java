package org.runetranscriber.swingui;

import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;

import javax.swing.AbstractAction;
import javax.swing.Action;
import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JComponent;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.text.JTextComponent;

import org.runetranscriber.core.FontLetter;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.PhoneticTranscriber;
import org.runetranscriber.core.Rune;
import org.runetranscriber.core.RuneTranscriber;

/**
 * Provides base functionality for a transcriber user interface.
 * 
 * @param <R> Rune type parameter.
 * @param <F> Font letter type parameter.
 */
public abstract class AbstractTranscriberUI<R extends Rune, F extends FontLetter> extends JPanel
{
    /** Border line thickness. */
    protected static final int BORDER_THICKNESS = 2;

    /** Column count for text areas. */
    protected static final int COLUMN_COUNT = 60;

    /** Gap for widgets. */
    protected static final int GAP = 5;

    /** Highlight color. */
    protected static final Color HIGHLIGHT_COLOR = Color.BLUE;

    /** Initial text. */
    protected static final String INITIAL_TEXT = "the lord of the rings";

    /** Row count for text areas. */
    protected static int ROW_COUNT = 4;

    /** Input widget. */
    protected JTextArea inputUI;

    /** Output widget. */
    protected JTextComponent outputUI;

    /** Phoneme output widget. */
    protected JTextArea phonemeOutputUI;

    /** Rune output widget. */
    protected JTextArea runeOutputUI;

    /** Transcriber group. */
    private final TranscriberGroup<R, F> transcriberGroup;

    /**
     * Construct this object.
     * 
     * @param transcriberGroup Transcriber group.
     */
    @SuppressWarnings("hiding")
    public AbstractTranscriberUI(final TranscriberGroup<R, F> transcriberGroup)
    {
        this.transcriberGroup = transcriberGroup;

        final JPanel inputPanel = createInputPanel();
        final JPanel buttonPanel = createButtonPanel();
        final JPanel outputPanel = createOutputPanel();

        setLayout(new GridLayout2(0, 1));
        add(inputPanel);
        add(buttonPanel);
        add(outputPanel);
    }

    /**
     * Perform the clear action.
     */
    void clearActionPerformed()
    {
        inputUI.setText("");
        transcribeActionPerformed();
    }

    /**
     * Perform the transcribe action.
     */
    abstract void transcribeActionPerformed();

    /**
     * @return a new transcribe panel.
     */
    protected JPanel createButtonPanel()
    {
        final JButton transcribeButton = new JButton(createTranscribeAction());
        final JButton clearButton = new JButton(createClearAction());

        final JPanel panel = new JPanel(new GridLayout(1, 0, GAP, GAP));

        panel.setBackground(HIGHLIGHT_COLOR);

        panel.add(transcribeButton);
        panel.add(clearButton);

        return wrapInPanel(panel);
    }

    /**
     * @return a new input panel.
     */
    protected abstract JPanel createInputPanel();

    /**
     * @return a new output panel.
     */
    protected abstract JPanel createOutputPanel();

    /**
     * @return the fontTranscriber
     */
    protected FontTranscriber<R, F> getFontTranscriber()
    {
        return transcriberGroup.getFontTranscriber();
    }

    /**
     * @return the phoneticTranscriber
     */
    protected PhoneticTranscriber getPhoneticTranscriber()
    {
        return transcriberGroup.getPhoneticTranscriber();
    }

    /**
     * @return the runeTranscriber
     */
    protected RuneTranscriber<R> getRuneTranscriber()
    {
        return transcriberGroup.getRuneTranscriber();
    }

    /**
     * @return the transcriberGroup
     */
    protected TranscriberGroup<R, F> getTranscriberGroup()
    {
        return transcriberGroup;
    }

    /**
     * @param component Component to wrap.
     * 
     * @return a new panel containing the given parameter.
     */
    protected JPanel wrapInPanel(final JComponent component)
    {
        final JPanel answer = new JPanel(new FlowLayout(FlowLayout.CENTER, GAP, GAP));

        answer.add(component);

        return answer;
    }

    /**
     * @param title Border title.
     * @param component Component to wrap.
     * 
     * @return a new panel containing the given parameter.
     */
    protected JPanel wrapInPanel(final String title, final JComponent component)
    {
        final JPanel answer = wrapInPanel(component);

        answer.setBorder(BorderFactory.createTitledBorder(title));

        return answer;
    }

    /**
     * @return a new clear action.
     */
    private Action createClearAction()
    {
        final Action answer = new AbstractAction("Clear")
        {
            @Override
            public void actionPerformed(final ActionEvent e)
            {
                System.out.println("Clear action performed");

                clearActionPerformed();
            }
        };

        return answer;
    }

    /**
     * @return a new transcribe action.
     */
    private Action createTranscribeAction()
    {
        final Action answer = new AbstractAction("Transcribe")
        {
            @Override
            public void actionPerformed(final ActionEvent e)
            {
                System.out.println("Transcribe action performed");

                transcribeActionPerformed();
            }
        };

        return answer;
    }
}
