package org.runetranscriber.core.cirth;

import org.runetranscriber.core.DefaultFullTranscriber;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.FullTranscriber;
import org.runetranscriber.core.LanguageLetterList;
import org.runetranscriber.core.PhonemeList;
import org.runetranscriber.core.PhoneticTranscriber;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.RuneTranscriber;

/**
 * Provides a full transcriber for English language to Cirth (Daeron) runes.
 */
public final class KhuzdulCirthMoriaFullTranscriber implements FullTranscriber<Certh, CerthFontLetter>
{
    /** Delegate. */
    private final FullTranscriber<Certh, CerthFontLetter> delegate;

    /**
     * Construct this object.
     */
    public KhuzdulCirthMoriaFullTranscriber()
    {
        final String displayName = "Khuzdul to Cirth (Moria) rune transcriber";
        final String description = "Transcribes Khuzdul to Cirth (Moria) runes and back.";
        final PhoneticTranscriber phoneticTranscriber = new KhuzdulCirthPhoneticTranscriber();
        final RuneTranscriber<Certh> runeTranscriber = new CirthMoriaRuneTranscriber();
        final FontTranscriber<Certh, CerthFontLetter> fontTranscriber = new CirthFontTranscriber();

        delegate = new DefaultFullTranscriber<Certh, CerthFontLetter>(displayName, description, phoneticTranscriber,
                runeTranscriber, fontTranscriber);
    }

    @Override
    public String getDescription()
    {
        return delegate.getDescription();
    }

    @Override
    public String getDisplayName()
    {
        return delegate.getDisplayName();
    }

    @Override
    public FontLetterList<CerthFontLetter> getFontLetters()
    {
        return delegate.getFontLetters();
    }

    @Override
    public FontTranscriber<Certh, CerthFontLetter> getFontTranscriber()
    {
        return delegate.getFontTranscriber();
    }

    @Override
    public LanguageLetterList getFromSequence()
    {
        return delegate.getFromSequence();
    }

    @Override
    public LanguageLetterList getLanguageLetters()
    {
        return delegate.getLanguageLetters();
    }

    @Override
    public PhonemeList getPhonemes()
    {
        return delegate.getPhonemes();
    }

    @Override
    public PhoneticTranscriber getPhoneticTranscriber()
    {
        return delegate.getPhoneticTranscriber();
    }

    @Override
    public RuneList<Certh> getRunes()
    {
        return delegate.getRunes();
    }

    @Override
    public RuneTranscriber<Certh> getRuneTranscriber()
    {
        return delegate.getRuneTranscriber();
    }

    @Override
    public FontLetterList<CerthFontLetter> getToSequence()
    {
        return delegate.getToSequence();
    }

    @Override
    public void put(final LanguageLetterList fromSequence, final FontLetterList<CerthFontLetter> toSequence)
    {
        delegate.put(fromSequence, toSequence);
    }

    @Override
    public void putForward(final LanguageLetterList fromSequence, final FontLetterList<CerthFontLetter> toSequence)
    {
        delegate.putForward(fromSequence, toSequence);
    }

    @Override
    public void putReverse(final LanguageLetterList fromSequence, final FontLetterList<CerthFontLetter> toSequence)
    {
        delegate.putReverse(fromSequence, toSequence);
    }

    @Override
    public FontLetterList<CerthFontLetter> transcribeForward(final LanguageLetterList fromSequence)
    {
        return delegate.transcribeForward(fromSequence);
    }

    @Override
    public LanguageLetterList transcribeReverse(final FontLetterList<CerthFontLetter> toSequence)
    {
        return delegate.transcribeReverse(toSequence);
    }
}
