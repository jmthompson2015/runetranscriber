package org.runetranscriber.swingui;

import java.awt.BorderLayout;
import java.awt.Component;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BorderFactory;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextPane;
import javax.swing.WindowConstants;
import javax.swing.text.DefaultStyledDocument;
import javax.swing.text.Style;
import javax.swing.text.StyleConstants;
import javax.swing.text.StyleContext;
import javax.swing.text.StyledDocument;

import org.runetranscriber.core.FontLetter;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.Rune;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.CerthFontLetter;
import org.runetranscriber.core.cirth.CerthRune;

/**
 * Provides a language to rune transcriber user interface.
 * 
 * @param <R> Rune type parameter.
 * @param <F> Font letter type parameter.
 */
public final class LanguageToRuneTranscriberUI<R extends Rune, F extends FontLetter> extends
        AbstractTranscriberUI<R, F>
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
                final LanguageToRuneTranscriberUI<?, ?> panel = new LanguageToRuneTranscriberUI<CerthRune, CerthFontLetter>(
                        TranscriberGroup.CIRTH_EREBOR);

                frame = new JFrame("Language To Rune Transcriber");
                frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
                frame.getContentPane().add(panel, BorderLayout.CENTER);
                frame.setLocationByPlatform(true);
                frame.setVisible(true);
                frame.pack();
            }
        });
    }

    /** Background color widget. */
    private JComboBox backgroundUI;

    /** Font size widget. */
    private JComboBox fontSizeUI;

    /** Foreground color widget. */
    private JComboBox foregroundUI;

    /**
     * Construct this object.
     * 
     * @param transcriberGroup Transcriber group.
     */
    public LanguageToRuneTranscriberUI(final TranscriberGroup<R, F> transcriberGroup)
    {
        super(transcriberGroup);
    }

    /**
     * @param fontLetter Font letter.
     */
    void appendToInputText(final String fontLetter)
    {
        String inputText = inputUI.getText();
        inputText += fontLetter;
        inputUI.setText(inputText);
    }

    /**
     * @return font size.
     */
    float getFontSize()
    {
        float answer = getTranscriberGroup().getFontTranscriber().getDefaultFontSize();

        if (fontSizeUI != null)
        {
            final Integer selectedItem = (Integer)fontSizeUI.getSelectedItem();
            answer = selectedItem.floatValue();
        }

        return answer;
    }

    /**
     * Perform the transcribe action.
     */
    @Override
    void transcribeActionPerformed()
    {
        // Get input text.
        final String inputString = inputUI.getText();
        final LanguageLetterList inputList = new LanguageLetterList(inputString);
        System.out.println("inputList  = " + inputList);

        // Transcribe to phonemes.
        final PhonemeList phonemes = getPhoneticTranscriber().transcribeForward(inputList);
        phonemeOutputUI.setText(phonemes.toString());
        System.out.println("phonemes   = " + phonemes);

        // Transcribe to runes.
        final RuneList<R> runes = getRuneTranscriber().transcribeForward(phonemes);
        runeOutputUI.setText(runes.toString());
        System.out.println("runes      = " + runes);

        // Transcribe to text.
        final FontLetterList<F> outputList = getFontTranscriber().transcribeForward(runes);
        System.out.println("outputList = " + outputList);
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
        inputUI = createInputUI();

        return wrapInPanel("Input", inputUI);
    }

    /**
     * @return a new output panel.
     */
    @Override
    protected JPanel createOutputPanel()
    {
        runeOutputUI = createOutputUI();
        phonemeOutputUI = createOutputUI();

        final JPanel panel = new JPanel(new GridLayout2(0, 2, GAP, GAP));

        panel.add(new JLabel("Phonemes"));
        panel.add(phonemeOutputUI);
        panel.add(new JLabel("Runes"));
        panel.add(runeOutputUI);
        panel.add(new JLabel("Font"));
        panel.add(createOutputPanel2());

        panel.setBorder(BorderFactory.createTitledBorder("Output"));

        return panel;
    }

    /**
     * @return a new background widget.
     */
    private JComboBox createBackgroundUI()
    {
        final JComboBox answer = new JComboBox();

        final ColorItem initialSelection = ColorItem.WHITE;

        for (final ColorItem colorItem : ColorItem.values())
        {
            answer.addItem(colorItem);
        }

        answer.addActionListener(new ActionListener()
        {
            @Override
            public void actionPerformed(final ActionEvent event)
            {
                final JComboBox comboBox = (JComboBox)event.getSource();
                final ColorItem selectedItem = (ColorItem)comboBox.getSelectedItem();
                outputUI.setBackground(selectedItem.getColor());
            }
        });

        answer.setSelectedItem(initialSelection);

        return answer;
    }

    /**
     * @return a new font output text area.
     */
    private JTextPane createFontOutputUI()
    {
        final StyleContext context = new StyleContext();
        final StyledDocument document = new DefaultStyledDocument(context);
        final Style style = context.getStyle(StyleContext.DEFAULT_STYLE);
        StyleConstants.setAlignment(style, StyleConstants.ALIGN_CENTER);
        final JTextPane answer = new JTextPane(document);

        answer.setEditable(false);
        answer.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(HIGHLIGHT_COLOR, BORDER_THICKNESS),
                BorderFactory.createEmptyBorder(GAP, GAP, GAP, GAP)));
        answer.setFont(getFontTranscriber().getFont());

        return answer;
    }

    /**
     * @return a new font size widget.
     */
    private JComboBox createFontSizeUI()
    {
        final JComboBox answer = new JComboBox();

        final Integer initialSelection = Integer.valueOf((int)getTranscriberGroup().getFontTranscriber()
                .getDefaultFontSize());

        for (int i = 10; i <= 64; i += 2)
        {
            answer.addItem(Integer.valueOf(i));
        }

        answer.addActionListener(new ActionListener()
        {
            @Override
            public void actionPerformed(final ActionEvent event)
            {
                final float fontSize = getFontSize();
                final TranscriberGroup<?, ?> transcriberGroup = getTranscriberGroup();

                if (transcriberGroup != null)
                {
                    final Font font = transcriberGroup.getFontTranscriber().getFont(fontSize);
                    outputUI.setFont(font);
                }
            }
        });

        answer.setSelectedItem(initialSelection);

        return answer;
    }

    /**
     * @return a new foreground widget.
     */
    private JComboBox createForegroundUI()
    {
        final JComboBox answer = new JComboBox();

        final ColorItem initialSelection = ColorItem.BLACK;

        for (final ColorItem colorItem : ColorItem.values())
        {
            answer.addItem(colorItem);
        }

        answer.addActionListener(new ActionListener()
        {
            @Override
            public void actionPerformed(final ActionEvent event)
            {
                final JComboBox comboBox = (JComboBox)event.getSource();
                final ColorItem selectedItem = (ColorItem)comboBox.getSelectedItem();
                outputUI.setForeground(selectedItem.getColor());
            }
        });

        answer.setSelectedItem(initialSelection);

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
        answer.setRows(ROW_COUNT);

        answer.setText(INITIAL_TEXT);

        return answer;
    }

    /**
     * @return a new output control panel.
     */
    private JPanel createOutputControlPanel()
    {
        foregroundUI = createForegroundUI();
        backgroundUI = createBackgroundUI();
        fontSizeUI = createFontSizeUI();

        final JLabel foregroundLabel = new JLabel("Foreground Color");
        final JLabel backgroundLabel = new JLabel("Background Color");
        final JLabel fontSizeLabel = new JLabel("Font Size");

        final JPanel controlPanel = new JPanel(new GridLayout2(1, 0));

        controlPanel.add(foregroundLabel);
        controlPanel.add(foregroundUI);
        controlPanel.add(backgroundLabel);
        controlPanel.add(backgroundUI);
        controlPanel.add(fontSizeLabel);
        controlPanel.add(fontSizeUI);

        final JPanel answer = new JPanel();

        answer.add(controlPanel);

        return answer;
    }

    /**
     * @return a new output panel.
     */
    private JPanel createOutputPanel2()
    {
        outputUI = createFontOutputUI();
        outputUI.setAlignmentX(Component.CENTER_ALIGNMENT);
        outputUI.setAlignmentY(Component.CENTER_ALIGNMENT);
        final JPanel controlPanel = createOutputControlPanel();

        final JPanel answer = new JPanel();

        answer.setBorder(BorderFactory.createTitledBorder("Output Runes"));
        answer.setLayout(new BorderLayout());
        answer.add(outputUI, BorderLayout.CENTER);
        answer.add(controlPanel, BorderLayout.SOUTH);

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
}
