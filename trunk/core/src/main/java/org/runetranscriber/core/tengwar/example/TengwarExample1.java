package org.runetranscriber.core.tengwar.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.tengwar.TengwaFontLetter;
import org.runetranscriber.core.tengwar.TengwaRune;

/**
 * Provides an example for Tengwar runes from <a href="http://en.wikipedia.org/wiki/Tengwar">Wikipedia</a>.
 */
public final class TengwarExample1 extends AbstractExample<TengwaRune, TengwaFontLetter>
{
    @Override
    protected FontLetterList<TengwaFontLetter> createFontLetters()
    {
        final TengwaFontLetter[] myFontLetters = { TengwaFontLetter.TINCO, TengwaFontLetter.ACUTE2,
                TengwaFontLetter.UNGWE, TengwaFontLetter.THREE_DOTS2, TengwaFontLetter.ORE, };

        return new FontLetterList<TengwaFontLetter>(myFontLetters);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "tengwar";

        return new LanguageLetterList(text);
    }

    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = { Phoneme.T, Phoneme.E, Phoneme.NG, Phoneme.W, Phoneme.A, Phoneme.R, };

        return new PhonemeList(myPhonemes);
    }

    @Override
    protected RuneList<TengwaRune> createRunes()
    {
        final TengwaRune[] myRunes = { TengwaRune.TINCO, TengwaRune.ACUTE, TengwaRune.UNGWE, TengwaRune.THREE_DOTS,
                TengwaRune.ORE, };

        return new RuneList<TengwaRune>(myRunes);
    }
}
