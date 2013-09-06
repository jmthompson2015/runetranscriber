package org.runetranscriber.core.tengwar;

import org.runetranscriber.core.DefaultFontLetter;
import org.runetranscriber.core.FontLetter;
import org.runetranscriber.core.FontLetterList;

/**
 * Provides an enumeration of Tengwa font letters.
 */
public final class TengwaFontLetter implements FontLetter
{
    /** Font letter. */
    public static final TengwaFontLetter TINCO = new TengwaFontLetter("TINCO", "1");

    /** Font letter. */
    public static final TengwaFontLetter PARMA = new TengwaFontLetter("PARMA", "q");

    /** Font letter. */
    public static final TengwaFontLetter CALMA = new TengwaFontLetter("CALMA", "a");

    /** Font letter. */
    public static final TengwaFontLetter QUESSE = new TengwaFontLetter("QUESSE", "z");

    /** Font letter. */
    public static final TengwaFontLetter ANDO = new TengwaFontLetter("ANDO", "2");

    /** Font letter. */
    public static final TengwaFontLetter UMBAR = new TengwaFontLetter("UMBAR", "w");

    /** Font letter. */
    public static final TengwaFontLetter ANGA = new TengwaFontLetter("ANGA", "s");

    /** Font letter. */
    public static final TengwaFontLetter UNGWE = new TengwaFontLetter("UNGWE", "x");

    /** Font letter. */
    public static final TengwaFontLetter THULE = new TengwaFontLetter("THULE", "3");

    /** Font letter. */
    public static final TengwaFontLetter FORMEN = new TengwaFontLetter("FORMEN", "e");

    /** Font letter. */
    public static final TengwaFontLetter HARMA = new TengwaFontLetter("HARMA", "d");

    /** Font letter. */
    public static final TengwaFontLetter HWESTA = new TengwaFontLetter("HWESTA", "c");

    /** Font letter. */
    public static final TengwaFontLetter ANTO = new TengwaFontLetter("ANTO", "4");

    /** Font letter. */
    public static final TengwaFontLetter AMPA = new TengwaFontLetter("AMPA", "r");

    /** Font letter. */
    public static final TengwaFontLetter ANCA = new TengwaFontLetter("ANCA", "f");

    /** Font letter. */
    public static final TengwaFontLetter UNQUE = new TengwaFontLetter("UNQUE", "v");

    /** Font letter. */
    public static final TengwaFontLetter NUMEN = new TengwaFontLetter("NUMEN", "5");

    /** Font letter. */
    public static final TengwaFontLetter MALTA = new TengwaFontLetter("MALTA", "t");

    /** Font letter. */
    public static final TengwaFontLetter NGOLDO = new TengwaFontLetter("NGOLDO", "g");

    /** Font letter. */
    public static final TengwaFontLetter NGWALME = new TengwaFontLetter("NGWALME", "b");

    /** Font letter. */
    public static final TengwaFontLetter ORE = new TengwaFontLetter("ORE", "6");

    /** Font letter. */
    public static final TengwaFontLetter VALA = new TengwaFontLetter("VALA", "y");

    /** Font letter. */
    public static final TengwaFontLetter ANNA = new TengwaFontLetter("ANNA", "h");

    /** Font letter. */
    public static final TengwaFontLetter VILYA = new TengwaFontLetter("VILYA", "n");

    /** Font letter. */
    public static final TengwaFontLetter ROMEN = new TengwaFontLetter("ROMEN", "7");

    /** Font letter. */
    public static final TengwaFontLetter ARDA = new TengwaFontLetter("ARDA", "u");

    /** Font letter. */
    public static final TengwaFontLetter LAMBE = new TengwaFontLetter("LAMBE", "j");

    /** Font letter. */
    public static final TengwaFontLetter ALDA = new TengwaFontLetter("ALDA", "m");

    /** Font letter. */
    public static final TengwaFontLetter SILME = new TengwaFontLetter("SILME", "8");

    /** Font letter. */
    public static final TengwaFontLetter SILME_NUQUERNA = new TengwaFontLetter("SILME_NUQUERNA", "i");

    /** Font letter. */
    public static final TengwaFontLetter ESSE = new TengwaFontLetter("ESSE", "k");

    /** Font letter. */
    public static final TengwaFontLetter ESSE_NUQUERNA = new TengwaFontLetter("ESSE_NUQUERNA", ",");

    /** Font letter. */
    public static final TengwaFontLetter HYARMEN = new TengwaFontLetter("HYARMEN", "9");

    /** Font letter. */
    public static final TengwaFontLetter HWESTA_SINDARINWA = new TengwaFontLetter("HWESTA_SINDARINWA", "o");

    /** Font letter. */
    public static final TengwaFontLetter YANTA = new TengwaFontLetter("YANTA", "l");

    /** Font letter. */
    public static final TengwaFontLetter URE = new TengwaFontLetter("URE", ".");

    /** Font letter. */
    public static final TengwaFontLetter THE = new TengwaFontLetter("THE", "@");

    /** Font letter. */
    public static final TengwaFontLetter OF = new TengwaFontLetter("OF", "W");

    /** Font letter. */
    public static final TengwaFontLetter OF_THE = new TengwaFontLetter("OF_THE", "W?");

    /** Font letter. */
    public static final TengwaFontLetter SHORT_CARRIER = new TengwaFontLetter("SHORT_CARRIER", "`");

    /** Font letter. */
    public static final TengwaFontLetter LONG_CARRIER = new TengwaFontLetter("LONG_CARRIER", "~");

    /** Font letter. */
    public static final TengwaFontLetter THREE_DOTS1 = new TengwaFontLetter("THREE_DOTS1", "E");

    /** Font letter. */
    public static final TengwaFontLetter THREE_DOTS2 = new TengwaFontLetter("THREE_DOTS2", "D");

    /** Font letter. */
    public static final TengwaFontLetter THREE_DOTS3 = new TengwaFontLetter("THREE_DOTS3", "C");

    /** Font letter. */
    public static final TengwaFontLetter THREE_UNDER_DOTS1 = new TengwaFontLetter("THREE_UNDER_DOTS1",
            Character.toString((char)208));

    /** Font letter. */
    public static final TengwaFontLetter THREE_UNDER_DOTS2 = new TengwaFontLetter("THREE_UNDER_DOTS2",
            Character.toString((char)209));

    /** Font letter. */
    public static final TengwaFontLetter THREE_UNDER_DOTS3 = new TengwaFontLetter("THREE_UNDER_DOTS3",
            Character.toString((char)210));

    /** Font letter. */
    public static final TengwaFontLetter THREE_UNDER_DOTS4 = new TengwaFontLetter("THREE_UNDER_DOTS4",
            Character.toString((char)211));

    /** Font letter. */
    public static final TengwaFontLetter THREE_UNDER_DOTS5 = new TengwaFontLetter("THREE_UNDER_DOTS5", ">");

    /** Font letter. */
    public static final TengwaFontLetter CIRCUMFLEX1 = new TengwaFontLetter("CIRCUMFLEX1",
            Character.toString((char)220));

    /** Font letter. */
    public static final TengwaFontLetter CIRCUMFLEX2 = new TengwaFontLetter("CIRCUMFLEX2",
            Character.toString((char)221));

    /** Font letter. */
    public static final TengwaFontLetter CIRCUMFLEX3 = new TengwaFontLetter("CIRCUMFLEX3",
            Character.toString((char)222));

    /** Font letter. */
    public static final TengwaFontLetter CIRCUMFLEX4 = new TengwaFontLetter("CIRCUMFLEX4",
            Character.toString((char)223));

    /** Font letter. */
    public static final TengwaFontLetter ACUTE1 = new TengwaFontLetter("ACUTE1", "R");

    /** Font letter. */
    public static final TengwaFontLetter ACUTE2 = new TengwaFontLetter("ACUTE2", "F");

    /** Font letter. */
    public static final TengwaFontLetter ACUTE3 = new TengwaFontLetter("ACUTE3", "V");

    /** Font letter. */
    public static final TengwaFontLetter DOT1 = new TengwaFontLetter("DOT1", "T");

    /** Font letter. */
    public static final TengwaFontLetter DOT2 = new TengwaFontLetter("DOT2", "G");

    /** Font letter. */
    public static final TengwaFontLetter DOT3 = new TengwaFontLetter("DOT3", "B");

    /** Font letter. */
    public static final TengwaFontLetter UNDER_DOT1 = new TengwaFontLetter("UNDER_DOT1", Character.toString((char)200));

    /** Font letter. */
    public static final TengwaFontLetter UNDER_DOT2 = new TengwaFontLetter("UNDER_DOT2", Character.toString((char)201));

    /** Font letter. */
    public static final TengwaFontLetter UNDER_DOT3 = new TengwaFontLetter("UNDER_DOT3", Character.toString((char)202));

    /** Font letter. */
    public static final TengwaFontLetter UNDER_DOT4 = new TengwaFontLetter("UNDER_DOT4", Character.toString((char)203));

    /** Font letter. */
    public static final TengwaFontLetter UNDER_DOT5 = new TengwaFontLetter("UNDER_DOT5", "O");

    /** Font letter. */
    public static final TengwaFontLetter LEFT_CURL1 = new TengwaFontLetter("LEFT_CURL1", "^");

    /** Font letter. */
    public static final TengwaFontLetter LEFT_CURL2 = new TengwaFontLetter("LEFT_CURL2", "Y");

    /** Font letter. */
    public static final TengwaFontLetter LEFT_CURL3 = new TengwaFontLetter("LEFT_CURL3", "N");

    /** Font letter. */
    public static final TengwaFontLetter LEFT_CURL4 = new TengwaFontLetter("LEFT_CURL4", "H");

    /** Font letter. */
    public static final TengwaFontLetter LEFT_UNDER_CURL1 = new TengwaFontLetter("LEFT_UNDER_CURL1",
            Character.toString((char)228));

    /** Font letter. */
    public static final TengwaFontLetter LEFT_UNDER_CURL2 = new TengwaFontLetter("LEFT_UNDER_CURL2",
            Character.toString((char)229));

    /** Font letter. */
    public static final TengwaFontLetter LEFT_UNDER_CURL3 = new TengwaFontLetter("LEFT_UNDER_CURL3",
            Character.toString((char)230));

    /** Font letter. */
    public static final TengwaFontLetter LEFT_UNDER_CURL4 = new TengwaFontLetter("LEFT_UNDER_CURL4",
            Character.toString((char)231));

    /** Font letter. */
    public static final TengwaFontLetter TOP_CURL1 = new TengwaFontLetter("TOP_CURL1", "U");

    /** Font letter. */
    public static final TengwaFontLetter TOP_CURL2 = new TengwaFontLetter("TOP_CURL2", "J");

    /** Font letter. */
    public static final TengwaFontLetter TOP_CURL3 = new TengwaFontLetter("TOP_CURL3", "M");

    /** Font letter. */
    public static final TengwaFontLetter RIGHT_CURL1 = new TengwaFontLetter("RIGHT_CURL1",
            Character.toString((char)224));

    /** Font letter. */
    public static final TengwaFontLetter RIGHT_CURL2 = new TengwaFontLetter("RIGHT_CURL2",
            Character.toString((char)225));

    /** Font letter. */
    public static final TengwaFontLetter RIGHT_CURL3 = new TengwaFontLetter("RIGHT_CURL3",
            Character.toString((char)226));

    /** Font letter. */
    public static final TengwaFontLetter RIGHT_CURL4 = new TengwaFontLetter("RIGHT_CURL4",
            Character.toString((char)227));

    /** Font letter. */
    public static final TengwaFontLetter CHEVRON1 = new TengwaFontLetter("CHEVRON1", Character.toString((char)216));

    /** Font letter. */
    public static final TengwaFontLetter CHEVRON2 = new TengwaFontLetter("CHEVRON2", Character.toString((char)217));

    /** Font letter. */
    public static final TengwaFontLetter CHEVRON3 = new TengwaFontLetter("CHEVRON3", Character.toString((char)218));

    /** Font letter. */
    public static final TengwaFontLetter CHEVRON4 = new TengwaFontLetter("CHEVRON4", Character.toString((char)219));

    /** Punctuation. */
    /** Font letter. */
    public static final TengwaFontLetter SPACE = new TengwaFontLetter("SPACE", " ");

    /** Font letter. */
    public static final TengwaFontLetter COMMA = new TengwaFontLetter("COMMA", Character.toString((char)183));

    /** Font letter. */
    public static final TengwaFontLetter PERIOD = new TengwaFontLetter("PERIOD", "-");

    /** Font letter. */
    public static final TengwaFontLetter NEWLINE = new TengwaFontLetter("NEWLINE", "\n");

    /** Tehtar. (diacritic marks) */
    public static final FontLetterList<TengwaFontLetter> TEHTAR = new FontLetterList<TengwaFontLetter>();

    static
    {
        TEHTAR.add(THREE_DOTS2);
        TEHTAR.add(THREE_UNDER_DOTS2);
        TEHTAR.add(CIRCUMFLEX2);
        TEHTAR.add(ACUTE2);
        TEHTAR.add(DOT2);
        TEHTAR.add(UNDER_DOT2);
        TEHTAR.add(LEFT_CURL2);
        TEHTAR.add(LEFT_UNDER_CURL2);
        TEHTAR.add(TOP_CURL2);
        TEHTAR.add(RIGHT_CURL2);
        TEHTAR.add(CHEVRON2);
    }

    /** Ordinal count. */
    private static int ordinalCount = 0;

    /** Values. */
    private static FontLetterList<TengwaFontLetter> VALUES;

    /**
     * @return a copy of the list of font letter values.
     */
    public static final FontLetterList<TengwaFontLetter> values()
    {
        return new FontLetterList<TengwaFontLetter>(VALUES);
    }

    /** Delegate. */
    private final DefaultFontLetter delegate;

    /**
     * Construct this object.
     * 
     * @param name Name.
     * @param value Value.
     */
    public TengwaFontLetter(final String name, final String value)
    {
        delegate = new DefaultFontLetter(ordinalCount, name, value);

        if (VALUES == null)
        {
            VALUES = new FontLetterList<TengwaFontLetter>();
        }

        VALUES.add(this);
        ordinalCount++;
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
            final TengwaFontLetter another = (TengwaFontLetter)object;

            answer = delegate.equals(another.delegate);
        }

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
    public int ordinal()
    {
        return delegate.ordinal();
    }

    @Override
    public String toString()
    {
        return delegate.toString();
    }

    @Override
    public String value()
    {
        return delegate.value();
    }
}
