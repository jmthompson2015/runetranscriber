package org.runetranscriber.core.tengwar;

import org.runetranscriber.core.DefaultRune;
import org.runetranscriber.core.Rune;
import org.runetranscriber.core.RuneList;

/**
 * Provides an enumeration of letters in the Tengwar alphabet.
 */
public final class TengwaRune implements Rune
{
    /** Primary letters. */
    /** Rune. */
    public static final TengwaRune TINCO = new TengwaRune("TINCO", "metal");

    /** Rune. */
    public static final TengwaRune PARMA = new TengwaRune("PARMA", "book");

    /** Rune. */
    public static final TengwaRune CALMA = new TengwaRune("CALMA", "lamp");

    /** Rune. */
    public static final TengwaRune QUESSE = new TengwaRune("QUESSE", "feather");

    /** 5-8 */
    public static final TengwaRune ANDO = new TengwaRune("ANDO", "gate");

    /** Rune. */
    public static final TengwaRune UMBAR = new TengwaRune("UMBAR", "fate");

    /** Rune. */
    public static final TengwaRune ANGA = new TengwaRune("ANGA", "iron");

    /** Rune. */
    public static final TengwaRune UNGWE = new TengwaRune("UNGWE", "spider's web");

    /** 9-12 */
    public static final TengwaRune THULE = new TengwaRune("THULE", "spirit or wind");

    /** Rune. */
    public static final TengwaRune FORMEN = new TengwaRune("FORMEN", "north");

    /** Rune. */
    public static final TengwaRune HARMA = new TengwaRune("HARMA", "treasure or rage");

    /** Rune. */
    public static final TengwaRune HWESTA = new TengwaRune("HWESTA", "breeze");

    /** 13-16 */
    public static final TengwaRune ANTO = new TengwaRune("ANTO", "mouth");

    /** Rune. */
    public static final TengwaRune AMPA = new TengwaRune("AMPA", "hook");

    /** Rune. */
    public static final TengwaRune ANCA = new TengwaRune("ANCA", "jaws");

    /** Rune. */
    public static final TengwaRune UNQUE = new TengwaRune("UNQUE", "a hollow");

    /** 17-20 */
    public static final TengwaRune NUMEN = new TengwaRune("NUMEN", "west");

    /** Rune. */
    public static final TengwaRune MALTA = new TengwaRune("MALTA", "gold");

    /** Rune. */
    public static final TengwaRune NGOLDO = new TengwaRune("NGOLDO", "one of the Noldor");

    /** Rune. */
    public static final TengwaRune NGWALME = new TengwaRune("NGWALME", "torment");

    /** 21-24 */
    public static final TengwaRune ORE = new TengwaRune("ORE", "heart or inner mind");

    /** Rune. */
    public static final TengwaRune VALA = new TengwaRune("VALA", "angelic power");

    /** Rune. */
    public static final TengwaRune ANNA = new TengwaRune("ANNA", "gift");

    /** Rune. */
    public static final TengwaRune VILYA = new TengwaRune("VILYA", "air or sky");

    /** Additional letters 25-28 */
    public static final TengwaRune ROMEN = new TengwaRune("ROMEN", "east");

    /** Rune. */
    public static final TengwaRune ARDA = new TengwaRune("ARDA", "region");

    /** Rune. */
    public static final TengwaRune LAMBE = new TengwaRune("LAMBE", "tongue");

    /** Rune. */
    public static final TengwaRune ALDA = new TengwaRune("ALDA", "tree");

    /** 29-32 */
    public static final TengwaRune SILME = new TengwaRune("SILME", "starlight");

    /** Rune. */
    public static final TengwaRune SILME_NUQUERNA = new TengwaRune("SILME_NUQUERNA", "silme reversed");

    /** Rune. */
    public static final TengwaRune ESSE = new TengwaRune("ESSE", "sunlight or name");

    /** Rune. */
    public static final TengwaRune ESSE_NUQUERNA = new TengwaRune("ESSE_NUQUERNA", "aze reversed");

    /** 33-36 */
    public static final TengwaRune HYARMEN = new TengwaRune("HYARMEN", "south");

    /** Rune. */
    public static final TengwaRune HWESTA_SINDARINWA = new TengwaRune("HWESTA_SINDARINWA", "sindarin hwesta");

    /** Rune. */
    public static final TengwaRune YANTA = new TengwaRune("YANTA", "bridge");

    /** Rune. */
    public static final TengwaRune URE = new TengwaRune("URE", "heat");

    /** Shorthand for 'the'. */
    public static final TengwaRune THE = new TengwaRune("THE", "the");

    /** Shorthand for 'of'. */
    public static final TengwaRune OF = new TengwaRune("OF", "of");

    /** Shorthand for 'of the'. */
    public static final TengwaRune OF_THE = new TengwaRune("OF_THE", "of the");

    /** Vowels. */
    /** Rune. */
    public static final TengwaRune SHORT_CARRIER = new TengwaRune("SHORT_CARRIER", "short vowel carrier");

    /** Rune. */
    public static final TengwaRune LONG_CARRIER = new TengwaRune("LONG_CARRIER", "long vowel carrier");

    /** A. */
    public static final TengwaRune THREE_DOTS = new TengwaRune("THREE_DOTS", "three dots");

    /** A. */
    public static final TengwaRune THREE_UNDER_DOTS = new TengwaRune("THREE_UNDER_DOTS", "three under dots");

    /** A. */
    public static final TengwaRune CIRCUMFLEX = new TengwaRune("CIRCUMFLEX", "circumflex");

    /** E. */
    public static final TengwaRune ACUTE = new TengwaRune("ACUTE", "acute");

    /** I. */
    public static final TengwaRune DOT = new TengwaRune("DOT", "dot");

    /** I. */
    public static final TengwaRune UNDER_DOT = new TengwaRune("UNDER_DOT", "under dot");

    /** O. */
    public static final TengwaRune LEFT_CURL = new TengwaRune("LEFT_CURL", "left curl");

    /** O. */
    public static final TengwaRune LEFT_UNDER_CURL = new TengwaRune("LEFT_UNDER_CURL", "left under curl");

    /** U. */
    public static final TengwaRune TOP_CURL = new TengwaRune("TOP_CURL", "top curl");

    /** U. */
    public static final TengwaRune RIGHT_CURL = new TengwaRune("RIGHT_CURL", "right curl");

    /** Y. */
    public static final TengwaRune CHEVRON = new TengwaRune("CHEVRON", "chevron");

    /** Punctuation. */
    /** Rune. */
    public static final TengwaRune SPACE = new TengwaRune("SPACE", "space");

    /** Rune. */
    public static final TengwaRune COMMA = new TengwaRune("COMMA", "comma");

    /** Rune. */
    public static final TengwaRune PERIOD = new TengwaRune("PERIOD", "period");

    /** Rune. */
    public static final TengwaRune NEWLINE = new TengwaRune("NEWLINE", "newline");

    /** Tehtar. (diacritic marks) */
    public static final RuneList<TengwaRune> TEHTAR = new RuneList<TengwaRune>();

    static
    {
        TEHTAR.add(THREE_DOTS);
        TEHTAR.add(THREE_UNDER_DOTS);
        TEHTAR.add(CIRCUMFLEX);
        TEHTAR.add(ACUTE);
        TEHTAR.add(DOT);
        TEHTAR.add(UNDER_DOT);
        TEHTAR.add(LEFT_CURL);
        TEHTAR.add(LEFT_UNDER_CURL);
        TEHTAR.add(TOP_CURL);
        TEHTAR.add(RIGHT_CURL);
        TEHTAR.add(CHEVRON);
    }

    /** Ordinal count. */
    private static int ordinalCount = 0;

    /** Values. */
    private static RuneList<TengwaRune> VALUES;

    /**
     * @param number Rune number.
     * 
     * @return rune.
     */
    public final static TengwaRune valueOfNumber(final int number)
    {
        TengwaRune answer = null;

        final RuneList<TengwaRune> values = values();

        if ((0 < number) && (number <= values.size()))
        {
            answer = values.get(number - 1);
        }

        return answer;
    }

    /**
     * @return a copy of the list of rune values.
     */
    public static final RuneList<TengwaRune> values()
    {
        return new RuneList<TengwaRune>(VALUES);
    }

    /** Delegate. */
    private final DefaultRune delegate;

    /**
     * Construct this object.
     * 
     * @param name Name.
     * @param nameMeaning Name meaning.
     */
    private TengwaRune(final String name, final String nameMeaning)
    {
        final String displayName = name.toLowerCase();
        delegate = new DefaultRune(ordinalCount, name, displayName, nameMeaning);

        if (VALUES == null)
        {
            VALUES = new RuneList<TengwaRune>();
        }

        VALUES.add(this);
        ordinalCount++;
    }

    @Override
    public String displayName()
    {
        return delegate.displayName();
    }

    @Override
    public boolean equals(final Object object)
    {
        boolean answer = false;

        if (object == this)
        {
            answer = true;
        }
        else if (object == null)
        {
            answer = false;
        }
        else if (getClass() != object.getClass())
        {
            answer = false;
        }
        else
        {
            final TengwaRune another = (TengwaRune)object;

            answer = delegate.equals(another.delegate);
        }

        return answer;
    }

    /**
     * @return the display name.
     */
    public String getDisplayName()
    {
        String answer = name().toLowerCase();

        answer = answer.replaceAll("[_]", " ");

        return answer;
    }

    @Override
    public int hashCode()
    {
        return delegate.hashCode();
    }

    @Override
    public String name()
    {
        return delegate.name();
    }

    @Override
    public String nameMeaning()
    {
        return delegate.nameMeaning();
    }

    @Override
    public int ordinal()
    {
        return delegate.ordinal();
    }

    @Override
    public String toDebugString()
    {
        return delegate.toDebugString();
    }

    @Override
    public String toString()
    {
        return delegate.toString();
    }
}
