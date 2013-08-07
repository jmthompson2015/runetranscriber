package org.runetranscriber.core.cirth.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.Certh;
import org.runetranscriber.core.cirth.CirthFontLetter;

/**
 * <a href="http://ring-lord.tripod.com/cirth/ex_swords.htm">Troll Hoard Sword Orcrist inscription</a>
 */
public final class CirthDaeronExample2 extends AbstractExample<Certh>
{
    @Override
    protected FontLetterList createFontLetters()
    {
        final String[] myLetters = { CirthFontLetter.C50, CirthFontLetter.C29, CirthFontLetter.C18,
                CirthFontLetter.C29, CirthFontLetter.C39, CirthFontLetter.C35, CirthFontLetter.C8, };

        return new FontLetterList(myLetters);
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
        final Certh[] myRunes = { Certh.C50, Certh.C29, Certh.C18, Certh.C29, Certh.C39, Certh.C35, Certh.C8, };

        return new RuneList<Certh>(myRunes);
    }
}
