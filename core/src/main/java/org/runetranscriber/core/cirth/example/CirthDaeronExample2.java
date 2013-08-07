package org.runetranscriber.core.cirth.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.Certh;

/**
 * <a href="http://ring-lord.tripod.com/cirth/ex_swords.htm">Troll Hoard Sword Orcrist inscription</a>
 */
public final class CirthDaeronExample2 extends AbstractExample<Certh>
{
    @Override
    protected FontLetterList createFontLetters()
    {
        final String answer = "oJkJist";

        return new FontLetterList(answer);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "orcrist";

        return new LanguageLetterList(text);
    }

    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = { Phoneme.O, Phoneme.R, Phoneme.K, Phoneme.R, Phoneme.I, Phoneme.S, Phoneme.T, };

        return new PhonemeList(myPhonemes);
    }

    @Override
    protected RuneList<Certh> createRunes()
    {
        final Certh[] myRunes = { Certh.O, Certh.C29, Certh.K, Certh.C29, Certh.I, Certh.C35, Certh.T, };

        return new RuneList<Certh>(myRunes);
    }
}
