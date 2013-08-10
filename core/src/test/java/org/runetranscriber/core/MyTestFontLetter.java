package org.runetranscriber.core;

/**
 * Provides a test implementation of a rune.
 */
public final class MyTestFontLetter implements FontLetter
{
    /** Font letter. */
    public static final MyTestFontLetter A = new MyTestFontLetter("A", "a");

    /** Font letter. */
    public static final MyTestFontLetter B = new MyTestFontLetter("B", "b");

    /** Font letter. */
    public static final MyTestFontLetter C = new MyTestFontLetter("C", "c");

    /** Font letter. */
    public static final MyTestFontLetter D = new MyTestFontLetter("D", "d");

    /** Font letter. */
    public static final MyTestFontLetter E = new MyTestFontLetter("E", "e");

    /** Font letter. */
    public static final MyTestFontLetter F = new MyTestFontLetter("F", "f");

    /** Font letter. */
    public static final MyTestFontLetter G = new MyTestFontLetter("G", "g");

    /** Font letter. */
    public static final MyTestFontLetter H = new MyTestFontLetter("H", "h");

    /** Font letter. */
    public static final MyTestFontLetter I = new MyTestFontLetter("I", "i");

    /** Font letter. */
    public static final MyTestFontLetter J = new MyTestFontLetter("J", "j");

    /** Font letter. */
    public static final MyTestFontLetter K = new MyTestFontLetter("K", "k");

    /** Font letter. */
    public static final MyTestFontLetter L = new MyTestFontLetter("L", "l");

    /** Font letter. */
    public static final MyTestFontLetter M = new MyTestFontLetter("M", "m");

    /** Font letter. */
    public static final MyTestFontLetter N = new MyTestFontLetter("N", "n");

    /** Font letter. */
    public static final MyTestFontLetter O = new MyTestFontLetter("O", "o");

    /** Font letter. */
    public static final MyTestFontLetter P = new MyTestFontLetter("P", "p");

    /** Font letter. */
    public static final MyTestFontLetter Q = new MyTestFontLetter("Q", "q");

    /** Font letter. */
    public static final MyTestFontLetter R = new MyTestFontLetter("R", "r");

    /** Font letter. */
    public static final MyTestFontLetter S = new MyTestFontLetter("S", "s");

    /** Font letter. */
    public static final MyTestFontLetter T = new MyTestFontLetter("T", "t");

    /** Font letter. */
    public static final MyTestFontLetter U = new MyTestFontLetter("U", "u");

    /** Font letter. */
    public static final MyTestFontLetter V = new MyTestFontLetter("V", "v");

    /** Font letter. */
    public static final MyTestFontLetter W = new MyTestFontLetter("W", "w");

    /** Font letter. */
    public static final MyTestFontLetter X = new MyTestFontLetter("X", "x");

    /** Font letter. */
    public static final MyTestFontLetter Y = new MyTestFontLetter("Y", "y");

    /** Font letter. */
    public static final MyTestFontLetter Z = new MyTestFontLetter("Z", "z");

    /** Font letter. */
    public static final MyTestFontLetter SPACE = new MyTestFontLetter("SPACE", "*");

    /** Font letter. */
    public static final MyTestFontLetter COMMA = new MyTestFontLetter("COMMA", ",");

    /** Font letter. */
    public static final MyTestFontLetter PERIOD = new MyTestFontLetter("PERIOD", ".");

    /** Font letter. */
    public static final MyTestFontLetter NEWLINE = new MyTestFontLetter("NEWLINE", ":");

    /** Ordinal count. */
    private static int ordinalCount = 0;

    /**
     * @param number Rune number.
     * 
     * @return rune.
     */
    public final static MyTestFontLetter valueOfNumber(final int number)
    {
        MyTestFontLetter answer = null;

        final FontLetterList<MyTestFontLetter> values = values();

        if ((0 < number) && (number <= values.size()))
        {
            answer = values.get(number - 1);
        }

        return answer;
    }

    /**
     * @return a copy of the list of rune values.
     */
    public static final FontLetterList<MyTestFontLetter> values()
    {
        return new FontLetterList<MyTestFontLetter>(VALUES);
    }

    /** Delegate. */
    private final DefaultFontLetter delegate;

    /** Values. */
    private static FontLetterList<MyTestFontLetter> VALUES;

    /**
     * Construct this object.
     * 
     * @param name Name.
     * @param value Value.
     */
    public MyTestFontLetter(final String name, final String value)
    {
        delegate = new DefaultFontLetter(ordinalCount, name, value);

        if (VALUES == null)
        {
            VALUES = new FontLetterList<MyTestFontLetter>();
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
            final MyTestFontLetter another = (MyTestFontLetter)object;

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
