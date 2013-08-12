package org.runetranscriber.swingui;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

import javax.swing.BorderFactory;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.SwingConstants;
import javax.swing.WindowConstants;

import org.apache.commons.collections.CollectionUtils;
import org.runetranscriber.core.FontLetter;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.Rune;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.CerthFontLetter;
import org.runetranscriber.core.cirth.CerthRune;

/**
 * Provides a rune to language transcriber user interface.
 * 
 * @param <R> Rune type parameter.
 * @param <F> Font letter type parameter.
 */
public final class RuneToLanguageTranscriberUI<R extends Rune, F extends FontLetter> extends
        AbstractTranscriberUI<R, F>
{
    /** Frame. */
    static JFrame frame;

    /** Font letter property. */
    private static final String FONT_LETTER_PROPERTY = "fontLetter";

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
                final RuneToLanguageTranscriberUI<?, ?> panel = new RuneToLanguageTranscriberUI<CerthRune, CerthFontLetter>(
                        TranscriberGroup.CIRTH_EREBOR);

                frame = new JFrame("Rune To Language Transcriber");
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
     * 
     * @param transcriberGroup Transcriber group.
     */
    public RuneToLanguageTranscriberUI(final TranscriberGroup<R, F> transcriberGroup)
    {
        super(transcriberGroup);
    }

    /**
     * @param fontLetter Font letter.
     */
    void insertToInputText(final String fontLetter)
    {
        final int pos = inputUI.getCaretPosition();
        inputUI.insert(fontLetter, pos);
    }

    /**
     * Perform the transcribe action.
     */
    @Override
    void transcribeActionPerformed()
    {
        // Get input text.
        final String inputString = inputUI.getText();
        // System.out.println("inputString = [" + inputString + "]");
        final FontLetterList<F> inputList = convert(inputString);
        // System.out.println("inputList  = " + inputList);

        // Transcribe to runes.
        final RuneList<R> runes = getFontTranscriber().transcribeReverse(inputList);
        runeOutputUI.setText(runes.toString());
        // System.out.println("runes      = " + runes);

        // Transcribe to phonemes.
        final PhonemeList phonemes = getRuneTranscriber().transcribeReverse(runes);
        phonemeOutputUI.setText(phonemes.toString());
        // System.out.println("phonemes   = " + phonemes);

        // Transcribe to text.
        final LanguageLetterList outputList = getPhoneticTranscriber().transcribeReverse(phonemes);
        // System.out.println("outputList = " + outputList);
        final String outputString = outputList.toString();

        // Display output text.
        outputUI.setText(outputString);
    }

    /**
     * @return a new input panel.
     */
    @Override
    protected JPanel createInputPanel()
    {
        final JPanel panel = new JPanel(new GridLayout2(0, 1, GAP, GAP));

        panel.add(createInputText());
        panel.add(createInputKeyboard());

        return wrapInPanel("Input", panel);
    }

    /**
     * @return a new output panel.
     */
    @Override
    protected JPanel createOutputPanel()
    {
        runeOutputUI = createOutputUI();
        phonemeOutputUI = createOutputUI();
        outputUI = createOutputUI();

        final JPanel panel = new JPanel(new GridLayout2(0, 2, GAP, GAP));

        panel.add(new JLabel("Runes"));
        panel.add(runeOutputUI);
        panel.add(new JLabel("Phonemes"));
        panel.add(phonemeOutputUI);
        panel.add(new JLabel("Text"));
        panel.add(outputUI);

        panel.setBorder(BorderFactory.createTitledBorder("Output"));

        return panel;
    }

    /**
     * @param string String.
     * 
     * @return a new font letter list from the given parameter.
     */
    private FontLetterList<F> convert(final String string)
    {
        final FontLetterList<F> answer = new FontLetterList<F>();

        for (int i = 0; i < string.length(); i++)
        {
            final String value = string.substring(i, i + 1);
            final F fontLetter = valueOf(value);

            if (fontLetter != null)
            {
                answer.add(fontLetter);
            }
        }

        return answer;
    }

    /**
     * @return a new input keyboard click listener.
     */
    private MouseListener createClickListener()
    {
        final MouseListener answer = new MouseAdapter()
        {
            @Override
            public void mouseClicked(final MouseEvent event)
            {
                final JLabel label = (JLabel)event.getSource();
                final String fontLetter = (String)label.getClientProperty(FONT_LETTER_PROPERTY);
                System.out.println("clicked on fontLetter " + fontLetter);
                insertToInputText(fontLetter);
            }
        };

        return answer;
    }

    /**
     * @return a new input panel.
     */
    private JPanel createInputKeyboard()
    {
        final RuneList<R> values = getTranscriberGroup().runeValues();
        final int size = values.size();
        final int columnCount = (int)Math.ceil(1.5 * Math.sqrt(size));
        final int rowCount = (int)Math.ceil(size / columnCount);

        final JPanel panel = new JPanel(new GridLayout(rowCount, columnCount, GAP, GAP));
        panel.setBorder(BorderFactory.createCompoundBorder(BorderFactory.createTitledBorder("Keyboard"),
                BorderFactory.createEmptyBorder(GAP, GAP, GAP, GAP)));
        final Font font = getFontTranscriber().getFont();

        for (final R rune : values)
        {
            final FontLetterList<F> list = getFontTranscriber().transcribeForward(new RuneList<R>(rune));

            if (CollectionUtils.isNotEmpty(list))
            {
                final String fontLetter = list.get(0).value();
                final String meaning = rune.toString();
                final JLabel label = createKeyUI(fontLetter, font, meaning);
                panel.add(label);
            }
        }

        return wrapInPanel(panel);
    }

    /**
     * @return a new input panel.
     */
    private JPanel createInputText()
    {
        inputUI = createInputUI();

        final JPanel answer = new JPanel();

        answer.add(inputUI);

        return answer;
    }

    /**
     * @return a new input text area.
     */
    private JTextArea createInputUI()
    {
        final JTextArea answer = new JTextArea();

        answer.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(HIGHLIGHT_COLOR, BORDER_THICKNESS),
                BorderFactory.createEmptyBorder(GAP, GAP, GAP, GAP)));
        answer.setColumns(COLUMN_COUNT);
        answer.setEditable(true);
        answer.setFont(getFontTranscriber().getFont());
        answer.setRows(4);

        final PhonemeList phonemes = getPhoneticTranscriber().transcribeForward(new LanguageLetterList(INITIAL_TEXT));
        final RuneList<R> runes = getRuneTranscriber().transcribeForward(phonemes);
        final FontLetterList<F> inputList = getFontTranscriber().transcribeForward(runes);
        final String inputString = inputList.toString();

        answer.setText(inputString);

        return answer;
    }

    /**
     * @param fontLetter Font letter.
     * @param font Font.
     * @param toolTip Tool tip text.
     * 
     * @return a new key widget.
     */
    private JLabel createKeyUI(final String fontLetter, final Font font, final String toolTip)
    {
        final JLabel answer = new JLabel(fontLetter);

        answer.setBackground(Color.WHITE);
        answer.setBorder(BorderFactory.createLineBorder(HIGHLIGHT_COLOR, 1));
        answer.setFont(font);
        answer.setHorizontalAlignment(SwingConstants.CENTER);
        answer.putClientProperty(FONT_LETTER_PROPERTY, fontLetter);
        answer.addMouseListener(createClickListener());
        answer.setToolTipText(toolTip);

        return answer;
    }

    /**
     * @return a new output text area.
     */
    private JTextArea createOutputUI()
    {
        final JTextArea answer = new JTextArea();

        answer.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(HIGHLIGHT_COLOR, BORDER_THICKNESS),
                BorderFactory.createEmptyBorder(GAP, GAP, GAP, GAP)));
        answer.setEditable(false);
        answer.setLineWrap(true);
        answer.setWrapStyleWord(true);

        return answer;
    }

    /**
     * @param value Value.
     * 
     * @return the font letter with the given value.
     */
    private F valueOf(final String value)
    {
        F answer = null;

        final FontLetterList<F> values = getTranscriberGroup().fontLetterValues();

        for (final F letter : values)
        {
            if (letter.value().equals(value))
            {
                answer = letter;
                break;
            }
        }

        return answer;
    }
}
