package org.runetranscriber.swingui;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JComponent;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.WindowConstants;

import org.apache.commons.collections.CollectionUtils;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.tengwar.TengwaRune;
import org.runetranscriber.core.tengwar.TengwaFontLetter;

/**
 * Provides a Tengwar Rune table display.
 */
public final class TengwarTableUI extends JScrollPane
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
                final TengwarTableUI panel = new TengwarTableUI();

                frame = new JFrame("Tengwar Rune Table");
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
    public TengwarTableUI()
    {
        final JPanel table = new RuneTable<TengwaRune, TengwaFontLetter>(TranscriberGroup.TENGWAR)
        {
            @Override
            protected JComponent createRuneUI(final FontTranscriber<TengwaRune, TengwaFontLetter> fontTranscriber,
                    final TengwaRune rune)
            {
                JComponent answer = null;
                if (TengwaRune.TEHTAR.contains(rune))
                {
                    final RuneList<TengwaRune> runes = new RuneList<TengwaRune>();
                    runes.add(TengwaRune.SHORT_CARRIER);
                    runes.add(rune);
                    final FontLetterList<TengwaFontLetter> fontLetters = fontTranscriber.transcribeForward(runes);
                    if (CollectionUtils.isNotEmpty(fontLetters) && (fontLetters.size() >= 2))
                    {
                        answer = createLabel(fontLetters.get(0).value() + fontLetters.get(1).value());
                        answer.setFont(fontTranscriber.getFont());
                    }
                }
                else
                {
                    answer = super.createRuneUI(fontTranscriber, rune);
                }

                return answer;
            }
        };
        getViewport().setView(table);
    }
}
