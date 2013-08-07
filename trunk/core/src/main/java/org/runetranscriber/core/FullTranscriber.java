package org.runetranscriber.core;

/**
 * Defines methods required by a full transcriber from language letters to font letters.
 * 
 * @param <R> Rune type parameter.
 */
public interface FullTranscriber<R extends Rune> extends
        Transcriber<LanguageLetterList, String, FontLetterList, String>
{
    /**
     * @return the description
     */
    public String getDescription();

    /**
     * @return the displayName
     */
    public String getDisplayName();

    /**
     * @return the fontLetters
     */
    public FontLetterList getFontLetters();

    /**
     * @return the fontTranscriber
     */
    public FontTranscriber<R> getFontTranscriber();

    /**
     * @return the languageLetters
     */
    public LanguageLetterList getLanguageLetters();

    /**
     * @return the phonemes
     */
    public PhonemeList getPhonemes();

    /**
     * @return the phoneticTranscriber
     */
    public PhoneticTranscriber getPhoneticTranscriber();

    /**
     * @return the runes
     */
    public RuneList<R> getRunes();

    /**
     * @return the runeTranscriber
     */
    public RuneTranscriber<R> getRuneTranscriber();
}
