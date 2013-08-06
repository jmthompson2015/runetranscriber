package org.runetranscriber.core;

/**
 * Provides a test implementation of a rune.
 */
public final class MyTestRune implements Rune
{
    /** Rune. */
    public static final MyTestRune A = new MyTestRune("A");

    /** Rune. */
    public static final MyTestRune B = new MyTestRune("B");

    /** Rune. */
    public static final MyTestRune C = new MyTestRune("C");

    /** Rune. */
    public static final MyTestRune D = new MyTestRune("D");

    /** Rune. */
    public static final MyTestRune E = new MyTestRune("E");

    /** Rune. */
    public static final MyTestRune F = new MyTestRune("F");

    /** Rune. */
    public static final MyTestRune G = new MyTestRune("G");

    /** Rune. */
    public static final MyTestRune H = new MyTestRune("H");

    /** Rune. */
    public static final MyTestRune I = new MyTestRune("I");

    /** Rune. */
    public static final MyTestRune J = new MyTestRune("J");

    /** Rune. */
    public static final MyTestRune K = new MyTestRune("K");

    /** Rune. */
    public static final MyTestRune L = new MyTestRune("L");

    /** Rune. */
    public static final MyTestRune M = new MyTestRune("M");

    /** Rune. */
    public static final MyTestRune N = new MyTestRune("N");

    /** Rune. */
    public static final MyTestRune O = new MyTestRune("O");

    /** Rune. */
    public static final MyTestRune P = new MyTestRune("P");

    /** Rune. */
    public static final MyTestRune Q = new MyTestRune("Q");

    /** Rune. */
    public static final MyTestRune R = new MyTestRune("R");

    /** Rune. */
    public static final MyTestRune S = new MyTestRune("S");

    /** Rune. */
    public static final MyTestRune T = new MyTestRune("T");

    /** Rune. */
    public static final MyTestRune U = new MyTestRune("U");

    /** Rune. */
    public static final MyTestRune V = new MyTestRune("V");

    /** Rune. */
    public static final MyTestRune W = new MyTestRune("W");

    /** Rune. */
    public static final MyTestRune X = new MyTestRune("X");

    /** Rune. */
    public static final MyTestRune Y = new MyTestRune("Y");

    /** Rune. */
    public static final MyTestRune Z = new MyTestRune("Z");

    /** Rune. */
    public static final MyTestRune SPACE = new MyTestRune("*");

    /** Rune. */
    public static final MyTestRune COMMA = new MyTestRune(",");

    /** Rune. */
    public static final MyTestRune PERIOD = new MyTestRune(".");

    /** Rune. */
    public static final MyTestRune NEWLINE = new MyTestRune(":");

    /** Ordinal count. */
    private static int ordinalCount = 0;

    /**
     * @param number Rune number.
     * 
     * @return rune.
     */
    public final static MyTestRune valueOfNumber(final int number)
    {
        MyTestRune answer = null;

        final RuneList<MyTestRune> values = values();

        if ((0 < number) && (number <= values.size()))
        {
            answer = values.get(number - 1);
        }

        return answer;
    }

    /**
     * @return a copy of the list of rune values.
     */
    public static final RuneList<MyTestRune> values()
    {
        return new RuneList<MyTestRune>(VALUES);
    }

    /** Delegate. */
    private final DefaultRune delegate;

    /** Values. */
    private static RuneList<MyTestRune> VALUES;

    /**
     * Construct this object.
     * 
     * @param name Name.
     */
    public MyTestRune(final String name)
    {
        delegate = new DefaultRune(ordinalCount, name, name, name);

        if (VALUES == null)
        {
            VALUES = new RuneList<MyTestRune>();
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
            final MyTestRune another = (MyTestRune)object;

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
