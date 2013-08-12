package org.runetranscriber.swingui;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.EventQueue;
import java.awt.GridLayout;

import javax.swing.BorderFactory;
import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.WindowConstants;

import org.apache.commons.collections.CollectionUtils;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.RuneTranscriber;
import org.runetranscriber.core.cirth.CerthFontLetter;
import org.runetranscriber.core.cirth.CerthRune;

/**
 * Provides an Cirth Rune table display.
 */
public final class CirthTableUI extends JScrollPane
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
                final CirthTableUI panel = new CirthTableUI();

                frame = new JFrame("Cirth Rune Table");
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
    public CirthTableUI()
    {
        // Extends RuneTable to display multiple mode meanings.
        final JPanel table = new RuneTable<CerthRune, CerthFontLetter>(TranscriberGroup.CIRTH_DAERON)
        {
            protected JLabel createInnerLabel(final String text)
            {
                final JLabel answer = createLabel(text);

                answer.setOpaque(true);
                answer.setBackground(Color.WHITE);

                return answer;
            }

            @Override
            protected JComponent createMeaningUI(final RuneTranscriber<CerthRune> transcriber, final CerthRune rune)
            {
                // final Phoneme phoneme0 = TranscriberGroup3.CIRTH_DAERON.getRuneTranscriber().getPhoneme(rune);
                // final Phoneme phoneme1 = TranscriberGroup3.CIRTH_MORIA.getRuneTranscriber().getPhoneme(rune);
                // final Phoneme phoneme2 = TranscriberGroup3.CIRTH_EREBOR.getRuneTranscriber().getPhoneme(rune);
                final Phoneme phoneme0 = getPhoneme(TranscriberGroup.CIRTH_DAERON.getRuneTranscriber(), rune);
                final Phoneme phoneme1 = getPhoneme(TranscriberGroup.ENGLISH_CIRTH_MORIA.getRuneTranscriber(), rune);
                final Phoneme phoneme2 = getPhoneme(TranscriberGroup.CIRTH_EREBOR.getRuneTranscriber(), rune);

                final String meaning0 = determineMeaning(phoneme0);
                final String meaning1 = determineMeaning(phoneme1);
                final String meaning2 = determineMeaning(phoneme2);

                final boolean isSame = meaning0.equals(meaning1) && meaning0.equals(meaning2);

                JComponent answer = null;

                if (isSame)
                {
                    answer = createLabel(meaning0);
                }
                else
                {
                    answer = new JPanel(new GridLayout(1, 3));
                    final int margin = 3;
                    answer.setBorder(BorderFactory.createCompoundBorder(BorderFactory.createLineBorder(Color.BLACK),
                            BorderFactory.createEmptyBorder(margin, margin, margin, margin)));
                    answer.add(createInnerLabel(meaning0));
                    answer.add(createInnerLabel(meaning1));
                    answer.add(createInnerLabel(meaning2));
                }

                return answer;
            }

            private Phoneme getPhoneme(final RuneTranscriber<CerthRune> transcriber, final CerthRune rune)
            {
                Phoneme phoneme = null;
                final PhonemeList phonemes = transcriber.transcribeReverse(new RuneList<CerthRune>(rune));

                if (CollectionUtils.isNotEmpty(phonemes))
                {
                    phoneme = phonemes.get(0);
                }

                return phoneme;
            }
        };

        getViewport().setView(table);
    }
}
