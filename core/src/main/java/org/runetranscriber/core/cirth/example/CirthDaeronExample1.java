package org.runetranscriber.core.cirth.example;

import org.runetranscriber.core.AbstractExample;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.Phoneme;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.cirth.Certh;
import org.runetranscriber.core.cirth.CerthFontLetter;

/**
 * <a href="http://ring-lord.tripod.com/cirth/ex_swords.htm">Troll Hoard Sword Glamdring inscription</a>
 */
public final class CirthDaeronExample1 extends AbstractExample<Certh, CerthFontLetter>
{
    @Override
    protected FontLetterList<CerthFontLetter> createFontLetters()
    {
        final CerthFontLetter[] myLetters = { CerthFontLetter.C19, CerthFontLetter.C31, CerthFontLetter.C48,
                CerthFontLetter.C6, CerthFontLetter.C9, CerthFontLetter.C29, CerthFontLetter.C39, CerthFontLetter.C22, };

        return new FontLetterList<CerthFontLetter>(myLetters);
    }

    @Override
    protected LanguageLetterList createLanguageLetters()
    {
        final String text = "glamdring";

        return new LanguageLetterList(text);
    }

    @Override
    protected PhonemeList createPhonemes()
    {
        final Phoneme[] myPhonemes = { Phoneme.G, Phoneme.L, Phoneme.A, Phoneme.M, Phoneme.D, Phoneme.R, Phoneme.I,
                Phoneme.NG2 };

        return new PhonemeList(myPhonemes);
    }

    @Override
    protected RuneList<Certh> createRunes()
    {
        final Certh[] myRunes = { Certh.C19, Certh.C31, Certh.C48, Certh.C6, Certh.C9, Certh.C29, Certh.C39, Certh.C22, };

        return new RuneList<Certh>(myRunes);
    }
}
