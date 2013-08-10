package org.runetranscriber.core.viking.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.viking.AngloSaxonFontLetter;
import org.runetranscriber.core.viking.AngloSaxonRune;

/**
 * Provides an example for Anglo-Saxon runes from The Hobbit, Thror's Map #1.
 */
public final class AngloSaxonExample2 extends AbstractExample<AngloSaxonRune, AngloSaxonFontLetter>
{
    @Override
    protected FontLetterList<AngloSaxonFontLetter> createFontLetters()
    {
        final AngloSaxonFontLetter[] myFontLetters = { AngloSaxonFontLetter.EH, AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.WYNN, AngloSaxonFontLetter.NYD, };

        return new FontLetterList<AngloSaxonFontLetter>(myFontLetters);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "ESWN";

        return new LanguageLetterList(text);
    }

    /**
     * @return phonemes.
     */
    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // e
                Phoneme.E,
                // s
                Phoneme.S,
                // w
                Phoneme.W,
                // n
                Phoneme.N, };

        return new PhonemeList(myPhonemes);
    }

    /**
     * @return runes.
     */
    @Override
    protected RuneList<AngloSaxonRune> createRunes()
    {
        final AngloSaxonRune[] myRunes = {
                // e
                AngloSaxonRune.EH,
                // s
                AngloSaxonRune.SIGEL,
                // w
                AngloSaxonRune.WYNN,
                // n
                AngloSaxonRune.NYD, };

        return new RuneList<AngloSaxonRune>(myRunes);
    }
}
