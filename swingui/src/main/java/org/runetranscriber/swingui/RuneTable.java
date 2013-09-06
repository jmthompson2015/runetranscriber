package org.runetranscriber.swingui;

import java.awt.Color;
import java.awt.FlowLayout;
import java.lang.reflect.Method;

import javax.swing.BorderFactory;
import javax.swing.JComponent;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingConstants;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.runetranscriber.core.FontLetter;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.Rune;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.RuneTranscriber;

/**
 * Provides a rune table display.
 * 
 * @param <R> Rune type parameter.
 * @param <F> Font letter type parameter.
 */
public class RuneTable<R extends Rune, F extends FontLetter> extends JPanel
{
    /** Column count. */
    private final int columnCount;

    /** Row count. */
    private final int rowCount;

    /** getDisplayName method, if any. */
    private Method getDisplayNameMethod;

    /** getNameMeaning method, if any. */
    private Method getNameMeaningMethod;

    /**
     * Construct this object.
     * 
     * @param transcriberGroup Transcriber group.
     */
    public RuneTable(final TranscriberGroup<R, F> transcriberGroup)
    {
        this(transcriberGroup, 4);
    }

    /**
     * Construct this object.
     * 
     * @param transcriberGroup Transcriber group.
     * @param columnCount Column count.
     */
    @SuppressWarnings("hiding")
    public RuneTable(final TranscriberGroup<R, F> transcriberGroup, final int columnCount)
    {
        this.columnCount = columnCount;

        final int gap = 10;
        setLayout(new GridLayout2(0, columnCount, gap, gap));
        setBorder(BorderFactory.createEmptyBorder(gap, gap, gap, gap));

        final RuneTranscriber<R> runeTranscriber = transcriberGroup.getRuneTranscriber();
        final FontTranscriber<R, F> fontTranscriber = transcriberGroup.getFontTranscriber();
        final RuneList<R> values = transcriberGroup.runeValues();

        this.rowCount = (int)Math.ceil((double)values.size() / columnCount);

        for (int column = 0; column < columnCount; column++)
        {
            final JPanel columnPanel = createColumnPanel(runeTranscriber, fontTranscriber, values, column);
            final JPanel panel = new JPanel(new FlowLayout(FlowLayout.CENTER, 0, 0));
            panel.add(columnPanel);
            add(panel);
        }
    }

    /**
     * @return the columnCount
     */
    public int getColumnCount()
    {
        return columnCount;
    }

    /**
     * @return the rowCount
     */
    public int getRowCount()
    {
        return rowCount;
    }

    /**
     * @param text Text.
     * 
     * @return a new label.
     */
    protected JLabel createLabel(final String text)
    {
        final JLabel answer = new JLabel(text);

        answer.setHorizontalAlignment(SwingConstants.CENTER);
        final int margin = 3;
        answer.setBorder(BorderFactory.createCompoundBorder(BorderFactory.createLineBorder(Color.BLACK),
                BorderFactory.createEmptyBorder(margin, margin, margin, margin)));

        return answer;
    }

    /**
     * @param transcriber Transcriber.
     * @param rune Rune.
     * 
     * @return a component which displays the meaning.
     */
    protected JComponent createMeaningUI(final RuneTranscriber<R> transcriber, final R rune)
    {
        final PhonemeList phonemes = transcriber.transcribeReverse(new RuneList<R>(rune));

        String meaning = "n/a";

        if (CollectionUtils.isNotEmpty(phonemes))
        {
            meaning = determineMeaning(phonemes);
        }

        return createLabel(meaning);
    }

    /**
     * @param fontTranscriber Font transcriber.
     * @param rune Rune.
     * 
     * @return a component which displays the rune.
     */
    protected JComponent createRuneUI(final FontTranscriber<R, F> fontTranscriber, final R rune)
    {
        final FontLetterList<F> fontLetters = fontTranscriber.transcribeForward(new RuneList<R>(rune));
        final String text = (CollectionUtils.isNotEmpty(fontLetters) ? fontLetters.get(0).value() : "?");
        final JLabel answer = createLabel(text);
        answer.setFont(fontTranscriber.getFont());

        return answer;
    }

    /**
     * @param phonemes Phonemes.
     * 
     * @return the meaning of the given phonemes.
     */
    protected String determineMeaning(final PhonemeList phonemes)
    {
        final StringBuilder sb = new StringBuilder();

        for (final Phoneme phoneme : phonemes)
        {
            sb.append(phoneme == null ? "" : phoneme.getMeaning());
        }

        return sb.toString();
    }

    /**
     * Add the name meaning, if any, as a tool tip.
     * 
     * @param component Label.
     * @param rune Rune.
     */
    private void addNameMeaningToUI(final JComponent component, final R rune)
    {
        final String nameMeaning = getNameMeaning(rune);

        if (StringUtils.isNotEmpty(nameMeaning))
        {
            component.setToolTipText(nameMeaning);
        }
    }

    /**
     * @param transcriber Rune transcriber.
     * @param fontTranscriber Font transcriber.
     * @param values Rune values.
     * @param column Column.
     * 
     * @return a new column panel.
     */
    private JPanel createColumnPanel(final RuneTranscriber<R> transcriber, final FontTranscriber<R, F> fontTranscriber,
            final RuneList<R> values, final int column)
    {
        final JPanel columnPanel = new JPanel(new GridLayout2(0, 4));
        columnPanel.setBackground(Color.WHITE);

        for (int row = 0; row < rowCount; row++)
        {
            final int index = (column * rowCount) + row;

            if (index < values.size())
            {
                final R rune = values.get(index);

                columnPanel.add(createNumberUI(rune));
                columnPanel.add(createRuneUI(fontTranscriber, rune));
                columnPanel.add(createNameUI(rune));
                columnPanel.add(createMeaningUI(transcriber, rune));
            }
        }

        return columnPanel;
    }

    /**
     * @param rune Rune.
     * 
     * @return a component which displays the name.
     */
    private JComponent createNameUI(final R rune)
    {
        final JLabel answer = createLabel(getDisplayName(rune));
        addNameMeaningToUI(answer, rune);

        return answer;
    }

    /**
     * @param rune Rune.
     * 
     * @return a component which displays the number.
     */
    private JComponent createNumberUI(final R rune)
    {
        return createLabel(String.valueOf(rune.ordinal() + 1));
    }

    /**
     * @param rune Rune.
     * 
     * @return the display name, if any.
     */
    private String getDisplayName(final R rune)
    {
        String answer = null;

        final Method method = getDisplayNameMethod(rune);

        try
        {
            if (method != null)
            {
                answer = (String)method.invoke(rune);
            }
        }
        catch (final Exception ignore)
        {
            // Nothing to do.
        }

        if (answer == null)
        {
            answer = rune.name();
        }

        return answer;
    }

    /**
     * @param rune Rune.
     * 
     * @return a method.
     */
    private Method getDisplayNameMethod(final R rune)
    {
        if (getDisplayNameMethod == null)
        {
            try
            {
                getDisplayNameMethod = rune.getClass().getMethod("getDisplayName");
            }
            catch (final Exception ignore)
            {
                // Nothing to do.
            }
        }

        return getDisplayNameMethod;
    }

    /**
     * @param rune Rune.
     * 
     * @return the name meaning, if any.
     */
    private String getNameMeaning(final R rune)
    {
        String answer = null;

        final Method method = getNameMeaningMethod(rune);

        try
        {
            if (method != null)
            {
                answer = (String)method.invoke(rune);
            }
        }
        catch (final Exception ignore)
        {
            // Nothing to do.
        }

        return answer;
    }

    /**
     * @param rune Rune.
     * 
     * @return a method.
     */
    private Method getNameMeaningMethod(final R rune)
    {
        if (getNameMeaningMethod == null)
        {
            try
            {
                getNameMeaningMethod = rune.getClass().getMethod("getNameMeaning");
            }
            catch (final Exception ignore)
            {
                // Nothing to do.
            }
        }

        return getNameMeaningMethod;
    }
}
