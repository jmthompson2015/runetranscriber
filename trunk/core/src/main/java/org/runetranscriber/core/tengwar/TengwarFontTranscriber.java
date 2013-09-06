package org.runetranscriber.core.tengwar;

import java.awt.Font;

import org.apache.commons.collections.CollectionUtils;
import org.runetranscriber.core.DefaultFontTranscriber;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.RuneList;

/**
 * Provides a rune to font character transcriber.
 */
public final class TengwarFontTranscriber implements FontTranscriber<TengwaRune, TengwaFontLetter>
{
    /** Delegate. */
    private final DefaultFontTranscriber<TengwaRune, TengwaFontLetter> delegate = new DefaultFontTranscriber<TengwaRune, TengwaFontLetter>(
            "/TengwarSindarin.ttf");

    /**
     * Construct this object.
     */
    public TengwarFontTranscriber()
    {
        // Consonants.
        put(TengwaRune.TINCO, TengwaFontLetter.TINCO);
        put(TengwaRune.PARMA, TengwaFontLetter.PARMA);
        put(TengwaRune.CALMA, TengwaFontLetter.CALMA);
        put(TengwaRune.QUESSE, TengwaFontLetter.QUESSE);
        put(TengwaRune.ANDO, TengwaFontLetter.ANDO);
        put(TengwaRune.UMBAR, TengwaFontLetter.UMBAR);
        put(TengwaRune.ANGA, TengwaFontLetter.ANGA);
        put(TengwaRune.UNGWE, TengwaFontLetter.UNGWE);
        put(TengwaRune.THULE, TengwaFontLetter.THULE);
        put(TengwaRune.FORMEN, TengwaFontLetter.FORMEN);
        put(TengwaRune.HARMA, TengwaFontLetter.HARMA);
        put(TengwaRune.HWESTA, TengwaFontLetter.HWESTA);
        put(TengwaRune.ANTO, TengwaFontLetter.ANTO);
        put(TengwaRune.AMPA, TengwaFontLetter.AMPA);
        put(TengwaRune.ANCA, TengwaFontLetter.ANCA);
        put(TengwaRune.UNQUE, TengwaFontLetter.UNQUE);
        put(TengwaRune.NUMEN, TengwaFontLetter.NUMEN);
        put(TengwaRune.MALTA, TengwaFontLetter.MALTA);
        put(TengwaRune.NGOLDO, TengwaFontLetter.NGOLDO);
        put(TengwaRune.NGWALME, TengwaFontLetter.NGWALME);
        put(TengwaRune.ORE, TengwaFontLetter.ORE);
        put(TengwaRune.VALA, TengwaFontLetter.VALA);
        put(TengwaRune.ANNA, TengwaFontLetter.ANNA);
        put(TengwaRune.VILYA, TengwaFontLetter.VILYA);

        // Additional letters.
        put(TengwaRune.ROMEN, TengwaFontLetter.ROMEN);
        put(TengwaRune.ARDA, TengwaFontLetter.ARDA);
        put(TengwaRune.LAMBE, TengwaFontLetter.LAMBE);
        put(TengwaRune.ALDA, TengwaFontLetter.ALDA);
        put(TengwaRune.SILME, TengwaFontLetter.SILME);
        put(TengwaRune.SILME_NUQUERNA, TengwaFontLetter.SILME_NUQUERNA);
        put(TengwaRune.ESSE, TengwaFontLetter.ESSE);
        put(TengwaRune.ESSE_NUQUERNA, TengwaFontLetter.ESSE_NUQUERNA);
        put(TengwaRune.HYARMEN, TengwaFontLetter.HYARMEN);
        put(TengwaRune.HWESTA_SINDARINWA, TengwaFontLetter.HWESTA_SINDARINWA);
        put(TengwaRune.YANTA, TengwaFontLetter.YANTA);
        put(TengwaRune.URE, TengwaFontLetter.URE);

        // Shorthand letters.
        put(TengwaRune.OF_THE, TengwaFontLetter.OF_THE);
        put(TengwaRune.OF, TengwaFontLetter.OF);
        put(TengwaRune.THE, TengwaFontLetter.THE);

        // Vowels.
        put(TengwaRune.SHORT_CARRIER, TengwaFontLetter.SHORT_CARRIER);
        put(TengwaRune.LONG_CARRIER, TengwaFontLetter.LONG_CARRIER);

        put(TengwaRune.THREE_DOTS, TengwaFontLetter.THREE_DOTS2);
        put(TengwaRune.THREE_UNDER_DOTS, TengwaFontLetter.THREE_UNDER_DOTS2);
        put(TengwaRune.CIRCUMFLEX, TengwaFontLetter.CIRCUMFLEX2);

        put(TengwaRune.ACUTE, TengwaFontLetter.ACUTE2);

        put(TengwaRune.DOT, TengwaFontLetter.DOT2);
        put(TengwaRune.UNDER_DOT, TengwaFontLetter.UNDER_DOT2);

        put(TengwaRune.LEFT_CURL, TengwaFontLetter.LEFT_CURL2);
        put(TengwaRune.LEFT_UNDER_CURL, TengwaFontLetter.LEFT_UNDER_CURL2);

        put(TengwaRune.TOP_CURL, TengwaFontLetter.TOP_CURL2);
        put(TengwaRune.RIGHT_CURL, TengwaFontLetter.RIGHT_CURL2);

        put(TengwaRune.CHEVRON, TengwaFontLetter.CHEVRON2);

        // Punctuation.
        put(TengwaRune.SPACE, TengwaFontLetter.SPACE);
        put(TengwaRune.COMMA, TengwaFontLetter.COMMA);
        put(TengwaRune.PERIOD, TengwaFontLetter.PERIOD);
        put(TengwaRune.NEWLINE, TengwaFontLetter.NEWLINE);
    }

    @Override
    public float getDefaultFontSize()
    {
        return delegate.getDefaultFontSize();
    }

    @Override
    public Font getFont()
    {
        return delegate.getFont();
    }

    @Override
    public Font getFont(final float fontSize)
    {
        return delegate.getFont(fontSize);
    }

    @Override
    public RuneList<TengwaRune> getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public FontLetterList<TengwaFontLetter> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final RuneList<TengwaRune> fromSequence, final FontLetterList<TengwaFontLetter> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void put(final TengwaRune rune, final TengwaFontLetter fontLetter)
    {
        delegate.put(rune, fontLetter);
    }

    @Override
    public void putForward(final RuneList<TengwaRune> fromSequence, final FontLetterList<TengwaFontLetter> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final RuneList<TengwaRune> fromSequence, final FontLetterList<TengwaFontLetter> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public FontLetterList<TengwaFontLetter> transcribeForward(final RuneList<TengwaRune> input)
    {
        FontLetterList<TengwaFontLetter> answer = null;

        if (CollectionUtils.isNotEmpty(input))
        {
            // Pre-process vowels.
            final int size = input.size();
            final RuneList<TengwaRune> myInput = new RuneList<TengwaRune>();

            for (int i = 0; i < size; i++)
            {
                if (TengwaRune.TEHTAR.contains(input.get(i)))
                {
                    if ((i < (size - 1)) && !TengwaRune.TEHTAR.contains(input.get(i + 1)))
                    {
                        // Switch order.
                        myInput.add(input.get(i + 1));
                        myInput.add(input.get(i));
                        i++;
                    }
                    else
                    {
                        myInput.add(input.get(i));
                    }
                }
                else
                {
                    myInput.add(input.get(i));
                }
            }

            answer = delegate.transcribeForward(myInput);
        }

        return answer;
    }

    @Override
    public RuneList<TengwaRune> transcribeReverse(final FontLetterList<TengwaFontLetter> input)
    {
        RuneList<TengwaRune> answer = null;

        if (CollectionUtils.isNotEmpty(input))
        {
            // Pre-process vowels.
            final int size = input.size();
            final FontLetterList<TengwaFontLetter> myInput = new FontLetterList<TengwaFontLetter>();

            for (int i = 0; i < size; i++)
            {
                if (!TengwaFontLetter.TEHTAR.contains(input.get(i)))
                {
                    if ((i < (size - 1)) && TengwaFontLetter.TEHTAR.contains(input.get(i + 1)))
                    {
                        // Switch order.
                        myInput.add(input.get(i + 1));
                        myInput.add(input.get(i));
                        i++;
                    }
                    else
                    {
                        myInput.add(input.get(i));
                    }
                }
                else
                {
                    myInput.add(input.get(i));
                }
            }

            answer = delegate.transcribeReverse(myInput);
        }

        return answer;
    }
}
