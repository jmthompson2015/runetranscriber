package org.runetranscriber.swingui;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.GridLayout;
import java.util.ArrayList;
import java.util.List;

import javax.swing.BorderFactory;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JSpinner;
import javax.swing.SwingConstants;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;

import org.runetranscriber.core.FontLetter;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.Rune;

/**
 * Provides a font viewer.
 * 
 * @param <R> Rune type parameter.
 * @param <F> Font letter type parameter.
 */
public final class FontViewer<R extends Rune, F extends FontLetter> extends JPanel
{
    /** Tengwar diacritics. */
    private static final List<String> DIACRITICS = new ArrayList<String>();

    static
    {
        DIACRITICS.add("B");
        DIACRITICS.add("C");
        DIACRITICS.add("D");
        DIACRITICS.add("E");
        DIACRITICS.add("F");
        DIACRITICS.add("G");
        DIACRITICS.add("H");
        DIACRITICS.add("J");
        DIACRITICS.add("L");
        DIACRITICS.add("M");
        DIACRITICS.add("N");
        DIACRITICS.add("O");
        DIACRITICS.add("P");
        DIACRITICS.add("R");
        DIACRITICS.add("T");
        DIACRITICS.add("U");
        DIACRITICS.add("V");
        DIACRITICS.add("Y");

        DIACRITICS.add("[");
        DIACRITICS.add("^");
        DIACRITICS.add("p");
        DIACRITICS.add("{");
        DIACRITICS.add("|");
        DIACRITICS.add("}");
        DIACRITICS.add("0");
        DIACRITICS.add(":");
        DIACRITICS.add(";");
    }

    /** Page length. */
    private static final int PAGE_LENGTH = 256;

    /** Font panel. */
    private JPanel fontPanel;

    /** Font transcriber. */
    private final FontTranscriber<R, F> fontTranscriber;

    /** Flag indicating if this is using the Tengwar font. */
    private boolean isTengwar;

    /** Page number widget. */
    private JSpinner pageNumberUI;

    /**
     * Construct this object.
     * 
     * @param fontTranscriber Font transcriber.
     * @param initialPageNumber Initial page number.
     */
    @SuppressWarnings("hiding")
    public FontViewer(final FontTranscriber<R, F> fontTranscriber, final int initialPageNumber)
    {
        this.fontTranscriber = fontTranscriber;

        System.out.println("family name = " + fontTranscriber.getFont().getFamily());
        System.out.println("font name   = " + fontTranscriber.getFont().getFontName());
        isTengwar = "TengwarSindarin".equals(fontTranscriber.getFont().getName());

        fontPanel = createFontPanel();
        pageNumberUI = createPageNumberUI();

        final JPanel pagePanel = new JPanel();
        pagePanel.add(pageNumberUI);

        setLayout(new BorderLayout());
        add(new JScrollPane(fontPanel), BorderLayout.CENTER);
        add(pagePanel, BorderLayout.SOUTH);

        fillFontPanel(initialPageNumber);
        pageNumberUI.setValue(initialPageNumber);
    }

    /**
     * @param pageNum Page number.
     */
    void fillFontPanel(final int pageNum)
    {
        fontPanel.removeAll();

        final int step = 16;

        for (int i = 0; i < 256; i += step)
        {
            final int start = (pageNum * PAGE_LENGTH) + i;
            final JPanel panel0 = createSubpanel(start, step);
            fontPanel.add(panel0);
        }

        fontPanel.revalidate();
        fontPanel.repaint();
    }

    /**
     * @return a new font panel.
     */
    private JPanel createFontPanel()
    {
        final JPanel answer = new JPanel(new GridLayout2(1, 0, 10, 10));

        return answer;
    }

    /**
     * @param text Text.
     * 
     * @return a new label.
     */
    private JLabel createLabel(final String text)
    {
        final JLabel answer = new JLabel(text);
        final int gap = 2;
        answer.setBorder(BorderFactory.createCompoundBorder(BorderFactory.createLineBorder(Color.BLACK),
                BorderFactory.createEmptyBorder(gap, gap, gap, gap)));
        answer.setHorizontalAlignment(SwingConstants.CENTER);

        return answer;
    }

    /**
     * @return a new page number widget.
     */
    private JSpinner createPageNumberUI()
    {
        final JSpinner answer = new JSpinner();

        final Dimension minSize = answer.getMinimumSize();
        answer.setPreferredSize(new Dimension(100, minSize.height));
        answer.addChangeListener(new ChangeListener()
        {
            @Override
            public void stateChanged(final ChangeEvent event)
            {
                final JSpinner spinner = (JSpinner)event.getSource();
                final int pageNum = (Integer)spinner.getValue();
                fillFontPanel(pageNum);
            }
        });

        return answer;
    }

    /**
     * @param start Start index.
     * @param length Length.
     * 
     * @return a new panel.
     */
    private JPanel createSubpanel(final int start, final int length)
    {
        final JPanel answer = new JPanel();
        answer.setBorder(BorderFactory.createLineBorder(Color.BLUE));
        answer.setLayout(new GridLayout(0, 3));

        for (int i = 0; i < length; i++)
        {
            final int letterInt = start + i;
            final String letter = Character.toString((char)letterInt);
            final JLabel label0 = createLabel(letter);
            final JLabel label1;
            if (isTengwar && DIACRITICS.contains(letter))
            {
                label1 = createLabel("`" + letter);
            }
            else
            {
                label1 = createLabel(letter);
            }
            label1.setFont(fontTranscriber.getFont());
            final JLabel label2 = createLabel(Integer.toString(letterInt));

            answer.add(label0);
            answer.add(label1);
            answer.add(label2);
        }

        return answer;
    }
}
