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
 * Provides an example for Anglo-Saxon runes from LEGO 9473 Sticker #1.
 */
public final class AngloSaxonExample8 extends AbstractExample<AngloSaxonRune, AngloSaxonFontLetter>
{
    @Override
    protected FontLetterList<AngloSaxonFontLetter> createFontLetters()
    {
        final AngloSaxonFontLetter[] myFontLetters = {
                // djordje
                AngloSaxonFontLetter.DAEG, AngloSaxonFontLetter.IS, AngloSaxonFontLetter.OS, AngloSaxonFontLetter.RAD,
                AngloSaxonFontLetter.DAEG, AngloSaxonFontLetter.IS, AngloSaxonFontLetter.EH,
                AngloSaxonFontLetter.SPACE,
                // was
                AngloSaxonFontLetter.WYNN, AngloSaxonFontLetter.AESC, AngloSaxonFontLetter.SIGEL,
                AngloSaxonFontLetter.SPACE,
                // here
                AngloSaxonFontLetter.HAEGL, AngloSaxonFontLetter.EH, AngloSaxonFontLetter.RAD, AngloSaxonFontLetter.EH, };

        return new FontLetterList<AngloSaxonFontLetter>(myFontLetters);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "Djordje was here";

        return new LanguageLetterList(text);
    }

    /**
     * @return phonemes.
     */
    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = {
                // djordje
                Phoneme.D, Phoneme.J, Phoneme.O, Phoneme.R, Phoneme.D, Phoneme.J, Phoneme.E, Phoneme.SPACE,
                // was
                Phoneme.W, Phoneme.AE, Phoneme.S, Phoneme.SPACE,
                // here
                Phoneme.H, Phoneme.E, Phoneme.R, Phoneme.E, };

        return new PhonemeList(myPhonemes);
    }

    /**
     * @return runes.
     */
    @Override
    protected RuneList<AngloSaxonRune> createRunes()
    {
        final AngloSaxonRune[] myRunes = {
                // djordje
                AngloSaxonRune.DAEG, AngloSaxonRune.IS, AngloSaxonRune.OS, AngloSaxonRune.RAD, AngloSaxonRune.DAEG,
                AngloSaxonRune.IS, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // was
                AngloSaxonRune.WYNN, AngloSaxonRune.AESC, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                // here
                AngloSaxonRune.HAEGL, AngloSaxonRune.EH, AngloSaxonRune.RAD, AngloSaxonRune.EH, };

        return new RuneList<AngloSaxonRune>(myRunes);
    }
}
