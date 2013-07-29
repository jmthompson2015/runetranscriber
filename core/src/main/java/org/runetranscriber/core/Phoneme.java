package org.runetranscriber.core;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;

/**
 * Provides an enumeration of phonemes.
 */
public enum Phoneme
{
    /** Consonants. */

    /** Phoneme. */
    B,

    /** Phoneme. */
    // C,

    /** Phoneme. */
    D,

    /** Phoneme. */
    F,

    /** Phoneme. */
    G,

    /** Phoneme. */
    H,

    /** Phoneme. */
    J,

    /** Phoneme. */
    K,

    /** 31-45 */
    L,

    /** Phoneme. */
    M,

    /** Phoneme. */
    N,

    /** Phoneme. */
    P,

    /** Phoneme. */
    // Q,

    /** Phoneme. */
    R,

    /** Phoneme. */
    S,

    /** Phoneme. */
    T,

    /** Phoneme. */
    V,

    /** Phoneme. */
    W,

    /** Phoneme. */
    // X,

    /** Phoneme. */
    Y,

    /** Phoneme. */
    Z,

    /** Vowels. */

    /** Phoneme. */
    A,

    /** Phoneme. */
    E,

    /** Phoneme. */
    I,

    /** Phoneme. */
    O,

    /** Phoneme. */
    U,

    /** Combinations. */

    /** Phoneme. */
    CH,

    /** Phoneme. */
    DH,

    /** Phoneme. */
    GH,

    /** Phoneme. */
    GHW,

    /** Phoneme. */
    GW,

    /** Phoneme. */
    HW,

    /** Phoneme. */
    HY,

    /** Phoneme. */
    KH,

    /** Phoneme. */
    KHW,

    /** Phoneme. */
    KS,

    /** Phoneme. */
    KW,

    /** Phoneme. */
    LH,

    /** Phoneme. */
    MB,

    /** Phoneme. */
    ND,

    /** Phoneme. */
    NG,

    /** Phoneme. */
    NG2(Constants.VELAR_NASAL),

    /** Phoneme. */
    NGW,

    /** Phoneme. */
    NJ,

    /** Phoneme. */
    NW,

    /** Phoneme. */
    PS,

    /** Phoneme. */
    RH,

    /** Phoneme. */
    SH,

    /** Phoneme. */
    TH,

    /** Phoneme. */
    TS,

    /** Phoneme. */
    ZH,

    /** Combination vowels. */

    /** Phoneme. */
    AA(Constants.A_MACRON),

    /** Phoneme. */
    AE(Constants.SMALL_LETTER_AE),

    /** Phoneme. */
    EA("ea"),

    /** Phoneme. */
    EE(Constants.E_MACRON),

    /** Phoneme. */
    EO("eo"),

    /** Phoneme. */
    IA("ia"),

    /** Phoneme. */
    OO(Constants.O_MACRON),

    /** Phoneme. */
    O_DIARESIS(Constants.O_DIAERESIS),

    /** Phoneme. */
    OE(Constants.SMALL_LETTER_OE),

    /** Phoneme. */
    OU("ou"),

    /** Phoneme. */
    SCHWA("e"),

    /** Phoneme. */
    SCHWA2("u"),

    /** Phoneme. */
    UE(Constants.U_DIAERESIS),

    /** Phoneme. */
    UU(Constants.U_MACRON),

    /** Other. */

    /** Phoneme. */
    PLUS_H("+h"),

    /** Phoneme. */
    AMP("&"),

    /** Phoneme. */
    GLOTTAL("'"),

    /** Punctuation. */

    /** Phoneme. */
    SPACE(" "),

    /** Phoneme. */
    COMMA(","),

    /** Phoneme. */
    PERIOD("."),

    /** Phoneme. */
    NEWLINE("\n"),

    /** Phoneme. */
    HYPHEN("-"),

    ;

    /** List of special characters. */
    public static final List<String> SPECIAL_CHARACTERS = new ArrayList<String>();

    static
    {
        SPECIAL_CHARACTERS.add(SPACE.getMeaning());
        SPECIAL_CHARACTERS.add(COMMA.getMeaning());
        SPECIAL_CHARACTERS.add(PERIOD.getMeaning());
        SPECIAL_CHARACTERS.add(NEWLINE.getMeaning());
    }

    // static
    // {
    // System.out.println("Phoneme count = " + Phoneme.values().length);
    // }

    /**
     * @param phonemes Phonemes.
     * 
     * @return a list containing the given parameters.
     */
    public static final List<Phoneme> asList(final Phoneme... phonemes)
    {
        final List<Phoneme> answer = new ArrayList<Phoneme>();

        if (phonemes != null)
        {
            for (int i = 0; i < phonemes.length; i++)
            {
                if (phonemes[i] != null)
                {
                    answer.add(phonemes[i]);
                }
            }
        }

        return answer;
    }

    /**
     * @param text phoneme text.
     * 
     * @return a string representation of the given parameter.
     */
    public final static String toString(final List<Phoneme> text)
    {
        final StringBuilder sb = new StringBuilder();

        if (CollectionUtils.isNotEmpty(text))
        {
            for (int i = 0; i < text.size(); i++)
            {
                sb.append(text.get(i).getMeaning());

                if (i < (text.size() - 1))
                {
                    sb.append("-");
                }
            }
        }

        return sb.toString();
    }

    /**
     * @param meaning Meaning.
     * 
     * @return phoneme.
     */
    public final static Phoneme valueOfMeaning(final String meaning)
    {
        Phoneme answer = null;

        for (final Phoneme phoneme : values())
        {
            if (phoneme.getMeaning().equals(meaning))
            {
                answer = phoneme;
            }
        }

        return answer;
    }

    /** Meaning. */
    private final String meaning;

    /**
     * @param meaning Meaning.
     */
    // @SuppressWarnings("hiding")
    // private Phoneme(final String meaning)
    // {
    // this.meaning = meaning;
    // }

    /**
     * @param meanings Meanings. (optional)
     */
    private Phoneme(final String... meanings)
    {
        if ((meanings != null) && (meanings.length > 0))
        {
            this.meaning = meanings[0];
        }
        else
        {
            this.meaning = name().toLowerCase();
        }
    }

    /**
     * @return the meaning
     */
    public String getMeaning()
    {
        return meaning;
    }
}
