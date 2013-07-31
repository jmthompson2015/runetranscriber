package org.runetranscriber.core.viking.example;

import java.util.Arrays;
import java.util.List;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.ListUtilities;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.viking.AngloSaxonFontLetter;
import org.runetranscriber.core.viking.AngloSaxonRune;

/**
 * Provides an example for Anglo-Saxon runes from The Hobbit, Thror's Map #1.
 */
public final class AngloSaxonExample2 extends AbstractExample<AngloSaxonRune>
{
    @Override
    protected List<String> createFontLetters()
    {
        final String[] myFontLetters = { AngloSaxonFontLetter.EH, AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.WYNN, AngloSaxonFontLetter.NYD, };

        return Arrays.asList(myFontLetters);
    }

    @Override
    protected List<String> createLanguageLetters()
    {
        final String text = "ESWN";

        return ListUtilities.convert(text);
    }

    /**
     * @return phonemes.
     */
    @Override
    protected List<Phoneme> createPhonemes()
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

        return Phoneme.asList(myPhonemes);
    }

    /**
     * @return runes.
     */
    @Override
    protected List<AngloSaxonRune> createRunes()
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

        return AngloSaxonRune.asList(myRunes);
    }
}
