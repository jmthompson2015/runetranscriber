package org.runetranscriber.swingui;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.EventQueue;
import java.awt.Font;

import javax.swing.BorderFactory;
import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTabbedPane;
import javax.swing.JTextArea;
import javax.swing.ScrollPaneConstants;
import javax.swing.WindowConstants;

import org.runetranscriber.core.Example;
import org.runetranscriber.core.FontLetter;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.PhoneticTranscriber;
import org.runetranscriber.core.Rune;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.RuneTranscriber;

/**
 * Provides a user interface which displays the example translations.
 */
public final class ExamplesUI extends JPanel
{
    /** Frame. */
    static JFrame frame;

    /** Columns. */
    private static final int COLUMNS = 40;

    /** Default label background color. */
    private static final Color DEFAULT_LABEL_BACKGROUND;

    /** Default label font. */
    private static final Font DEFAULT_LABEL_FONT;

    static
    {
        final JLabel label = new JLabel();

        DEFAULT_LABEL_FONT = label.getFont();
        DEFAULT_LABEL_BACKGROUND = label.getBackground();
    }

    /** Horizontal gap. */
    private static final int HGAP = 10;

    /** Vertical gap. */
    private static final int VGAP = 10;

    /** Margin. */
    private static final int MARGIN = 10;

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
                final ExamplesUI panel = new ExamplesUI();

                frame = new JFrame("Rune Transcriber Examples");
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
    public ExamplesUI()
    {
        final JTabbedPane panel = new JTabbedPane();

        panel.addTab("Viking", createVikingExamplePanel());
        panel.addTab("Cirth", createCirthExamplePanel());
        panel.addTab("Tengwar", createTengwarExamplePanel());

        setLayout(new BorderLayout());
        final JScrollPane scrollPane = new JScrollPane(panel, ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED,
                ScrollPaneConstants.HORIZONTAL_SCROLLBAR_NEVER);
        add(scrollPane, BorderLayout.CENTER);
    }

    /**
     * @return a new example panel.
     */
    private JComponent createCirthExamplePanel()
    {
        final org.runetranscriber.core.cirth.example.Examples examples = new org.runetranscriber.core.cirth.example.Examples();

        final JTabbedPane panel = new JTabbedPane();

        panel.addTab("Example 1",
                wrapInPanel(createExamplePanel(1, TranscriberGroup.CIRTH_DAERON, examples.getCirthDaeron1())));
        panel.addTab("Example 2",
                wrapInPanel(createExamplePanel(2, TranscriberGroup.CIRTH_DAERON, examples.getCirthDaeron2())));
        panel.addTab("Example 3",
                wrapInPanel(createExamplePanel(1, TranscriberGroup.KHUZDUL_CIRTH_MORIA, examples.getCirthMoria1())));
        panel.addTab("Example 4",
                wrapInPanel(createExamplePanel(1, TranscriberGroup.CIRTH_EREBOR, examples.getCirthErebor1())));
        panel.addTab("Example 5",
                wrapInPanel(createExamplePanel(2, TranscriberGroup.CIRTH_EREBOR, examples.getCirthErebor2())));

        final JPanel answer = new JPanel();

        answer.add(panel);

        return answer;
    }

    /**
     * @param exampleNumber Example number.
     * @param transcriberGroup Transcriber group.
     * @param example Example.
     * 
     * @return a new panel.
     */
    private <R extends Rune, F extends FontLetter> JPanel createExamplePanel(final int exampleNumber,
            final TranscriberGroup<R, F> transcriberGroup, final Example<R, F> example)
    {
        final PhoneticTranscriber phoneticTranscriber = transcriberGroup.getPhoneticTranscriber();
        final RuneTranscriber<R> runeTranscriber = transcriberGroup.getRuneTranscriber();
        final FontTranscriber<R, F> fontTranscriber = transcriberGroup.getFontTranscriber();

        final LanguageLetterList languageLetters = example.getLanguageLetters();
        final PhonemeList expectedPhonemes = example.getPhonemes();
        final RuneList<R> expectedRunes = example.getRunes();
        final FontLetterList<F> expectedFontLetters = example.getFontLetters();

        final PhonemeList resultPhonemes0 = phoneticTranscriber.transcribeForward(languageLetters);
        final RuneList<R> resultRunes0 = runeTranscriber.transcribeForward(expectedPhonemes);
        final RuneList<R> resultRunes1 = runeTranscriber.transcribeForward(resultPhonemes0);
        final PhonemeList resultPhonemes1 = runeTranscriber.transcribeReverse(expectedRunes);

        final FontLetterList<F> resultFontLetters0 = fontTranscriber.transcribeForward(expectedRunes);
        final FontLetterList<F> resultFontLetters1 = fontTranscriber.transcribeForward(resultRunes0);
        final FontLetterList<F> resultFontLetters2 = fontTranscriber.transcribeForward(resultRunes1);

        final JComponent textUI = createLabel(languageLetters.toString());

        final JComponent expectedPhonemesUI = createLabel(expectedPhonemes.toString());
        final JComponent resultPhonemesUI0 = createLabel(resultPhonemes0.toString());
        final JComponent resultPhonemesUI1 = createLabel(resultPhonemes1.toString());

        final JComponent expectedRunesUI = createLabel(expectedRunes.toString());
        final JComponent resultRunesUI0 = createLabel(resultRunes0.toString());
        final JComponent resultRunesUI1 = createLabel(resultRunes1.toString());

        final JComponent expectedFontLettersUI = createFontLetterLabel(expectedFontLetters, fontTranscriber);
        final JComponent resultFontLettersUI0 = createFontLetterLabel(resultFontLetters0, fontTranscriber);
        final JComponent resultFontLettersUI1 = createFontLetterLabel(resultFontLetters1, fontTranscriber);
        final JComponent resultFontLettersUI2 = createFontLetterLabel(resultFontLetters2, fontTranscriber);

        final JPanel answer = new JPanel(new GridLayout2(0, 2, HGAP, VGAP));

        final String title = transcriberGroup.getDisplayName() + " Example " + exampleNumber;

        answer.setBorder(BorderFactory.createTitledBorder(title));

        answer.add(new JLabel("Text"));
        answer.add(textUI);
        answer.add(new JLabel("Expected Phonemes"));
        answer.add(expectedPhonemesUI);
        answer.add(new JLabel("Result Phonemes"));
        answer.add(resultPhonemesUI0);
        answer.add(new JLabel("Phonemes from expected runes"));
        answer.add(resultPhonemesUI1);

        answer.add(new JLabel("Expected Runes"));
        answer.add(expectedRunesUI);
        answer.add(new JLabel("Result Runes"));
        answer.add(resultRunesUI0);
        answer.add(new JLabel("Runes from expected phonemes"));
        answer.add(resultRunesUI1);

        answer.add(new JLabel("Expected font letters"));
        answer.add(expectedFontLettersUI);
        answer.add(new JLabel("Font letters from expected runes"));
        answer.add(resultFontLettersUI0);
        answer.add(new JLabel("Font letters from result runes from expected phonemes"));
        answer.add(resultFontLettersUI1);
        answer.add(new JLabel("Font letters from result runes from result phonemes"));
        answer.add(resultFontLettersUI2);

        return answer;
    }

    /**
     * @param fontLetters Font letters.
     * @param fontTranscriber Font transcriber.
     * 
     * @return a new label.
     */
    private JComponent createFontLetterLabel(final FontLetterList<?> fontLetters,
            final FontTranscriber<?, ?> fontTranscriber)
    {
        final String text = fontLetters.toString();
        final JTextArea answer = new JTextArea(text);

        answer.setBackground(Color.WHITE);
        answer.setBorder(BorderFactory.createCompoundBorder(BorderFactory.createLineBorder(Color.BLACK),
                BorderFactory.createEmptyBorder(MARGIN, MARGIN, MARGIN, MARGIN)));
        answer.setColumns(COLUMNS);
        answer.setEditable(false);
        answer.setFont(fontTranscriber.getFont());
        answer.setLineWrap(true);
        answer.setWrapStyleWord(true);

        return answer;
    }

    /**
     * @param text Text.
     * 
     * @return a new label.
     */
    private JComponent createLabel(final String text)
    {
        final JTextArea answer = new JTextArea(text);

        answer.setBackground(DEFAULT_LABEL_BACKGROUND);
        answer.setColumns(COLUMNS);
        answer.setEditable(false);
        answer.setFont(DEFAULT_LABEL_FONT);
        answer.setLineWrap(true);
        answer.setWrapStyleWord(true);

        return answer;
    }

    /**
     * @return a new example panel.
     */
    private JComponent createTengwarExamplePanel()
    {
        final org.runetranscriber.core.tengwar.example.Examples examples = new org.runetranscriber.core.tengwar.example.Examples();

        final JTabbedPane panel = new JTabbedPane();

        panel.addTab("Example 1", wrapInPanel(createExamplePanel(1, TranscriberGroup.TENGWAR, examples.getTengwar1())));
        panel.addTab("Example 2", wrapInPanel(createExamplePanel(2, TranscriberGroup.TENGWAR, examples.getTengwar2())));
        panel.addTab("Example 3", wrapInPanel(createExamplePanel(3, TranscriberGroup.TENGWAR, examples.getTengwar3())));
        panel.addTab("Example 4", wrapInPanel(createExamplePanel(4, TranscriberGroup.TENGWAR, examples.getTengwar4())));

        return wrapInPanel(panel);
    }

    /**
     * @return a new example panel.
     */
    private JComponent createVikingExamplePanel()
    {
        final org.runetranscriber.core.viking.example.Examples examples = new org.runetranscriber.core.viking.example.Examples();

        final JTabbedPane panel = new JTabbedPane();

        panel.addTab("Example 1",
                wrapInPanel(createExamplePanel(1, TranscriberGroup.ANGLO_SAXON, examples.getAngloSaxon1())));
        panel.addTab("Example 2",
                wrapInPanel(createExamplePanel(2, TranscriberGroup.ANGLO_SAXON, examples.getAngloSaxon2())));
        panel.addTab("Example 3",
                wrapInPanel(createExamplePanel(3, TranscriberGroup.ANGLO_SAXON, examples.getAngloSaxon3())));
        panel.addTab("Example 4",
                wrapInPanel(createExamplePanel(4, TranscriberGroup.ANGLO_SAXON, examples.getAngloSaxon4())));
        panel.addTab("Example 5",
                wrapInPanel(createExamplePanel(5, TranscriberGroup.ANGLO_SAXON, examples.getAngloSaxon5())));
        panel.addTab("Example 6",
                wrapInPanel(createExamplePanel(6, TranscriberGroup.ANGLO_SAXON, examples.getAngloSaxon6())));
        panel.addTab("Example 7",
                wrapInPanel(createExamplePanel(7, TranscriberGroup.ANGLO_SAXON, examples.getAngloSaxon7())));

        return wrapInPanel(panel);
    }

    /**
     * @param component Component to wrap.
     * 
     * @return a new panel containing the given parameter.
     */
    private JPanel wrapInPanel(final JComponent component)
    {
        final JPanel answer = new JPanel();

        answer.add(component);

        return answer;
    }
}
