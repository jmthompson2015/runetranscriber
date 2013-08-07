package org.runetranscriber.core.cirth;

import org.runetranscriber.core.DefaultRune;
import org.runetranscriber.core.Rune;
import org.runetranscriber.core.RuneList;

/**
 * Provides an enumeration of runes in the Cirth alphabet.
 */
public final class Certh implements Rune
{
    /** Rune. */
    public static final Certh C1 = new Certh("P");

    /** Rune. */
    public static final Certh C2 = new Certh("B");

    /** Rune. */
    public static final Certh C3 = new Certh("F");

    /** Rune. */
    public static final Certh C4 = new Certh("V");

    /** Rune. */
    public static final Certh C5 = new Certh("HW");

    /** Rune. */
    public static final Certh C6 = new Certh("M");

    /** Rune. */
    public static final Certh C7 = new Certh("MB");

    /** Rune. */
    public static final Certh C8 = new Certh("T");

    /** Rune. */
    public static final Certh C9 = new Certh("D");

    /** Rune. */
    public static final Certh C10 = new Certh("TH");

    /** Rune. */
    public static final Certh C11 = new Certh("DH");

    /** Rune. */
    public static final Certh C12 = new Certh("C12");

    /** Rune. */
    public static final Certh C13 = new Certh("CH");

    /** Rune. */
    public static final Certh C14 = new Certh("C14");

    /** Rune. */
    public static final Certh C15 = new Certh("SH");

    /** Rune. */
    public static final Certh C16 = new Certh("C16");

    /** Rune. */
    public static final Certh C17 = new Certh("C17");

    /** Rune. */
    public static final Certh C18 = new Certh("K");

    /** Rune. */
    public static final Certh C19 = new Certh("G");

    /** Rune. */
    public static final Certh C20 = new Certh("KH");

    /** Rune. */
    public static final Certh C21 = new Certh("GH");

    /** Rune. */
    public static final Certh C22 = new Certh("C22");

    /** Rune. */
    public static final Certh C23 = new Certh("KW");

    /** Rune. */
    public static final Certh C24 = new Certh("GW");

    /** Rune. */
    public static final Certh C25 = new Certh("KHW");

    /** Rune. */
    public static final Certh C26 = new Certh("GHW");

    /** Rune. */
    public static final Certh C27 = new Certh("NGW");

    /** Rune. */
    public static final Certh C28 = new Certh("NW");

    /** Rune. */
    public static final Certh C29 = new Certh("C29");

    /** Rune. */
    public static final Certh C30 = new Certh("C30");

    /** 31-45 */
    public static final Certh C31 = new Certh("L");

    /** Rune. */
    public static final Certh C32 = new Certh("C32");

    /** Rune. */
    public static final Certh C33 = new Certh("C33");

    /** Rune. */
    public static final Certh C34 = new Certh("H");

    /** Rune. */
    public static final Certh C35 = new Certh("C35");

    /** Rune. */
    public static final Certh C36 = new Certh("C36");

    /** Rune. */
    public static final Certh C37 = new Certh("C37");

    /** Rune. */
    public static final Certh C38 = new Certh("C38");

    /** Rune. */
    public static final Certh C39 = new Certh("I");

    /** Rune. */
    public static final Certh C40 = new Certh("C40");

    /** Rune. */
    public static final Certh C41 = new Certh("C41");

    /** Rune. */
    public static final Certh C42 = new Certh("U");

    /** Rune. */
    public static final Certh C43 = new Certh("C43");

    /** Rune. */
    public static final Certh C44 = new Certh("W");

    /** Rune. */
    public static final Certh C45 = new Certh("UE");

    /** Rune. */
    public static final Certh C46 = new Certh("E");

    /** Rune. */
    public static final Certh C47 = new Certh("EE");

    /** Rune. */
    public static final Certh C48 = new Certh("A");

    /** Rune. */
    public static final Certh C49 = new Certh("AA");

    /** Rune. */
    public static final Certh C50 = new Certh("O");

    /** Rune. */
    public static final Certh C51 = new Certh("OO");

    /** Rune. */
    public static final Certh C52 = new Certh("OE");

    /** Rune. */
    public static final Certh C53 = new Certh("C53");

    /** Rune. */
    public static final Certh C54 = new Certh("C54");

    /** Rune. */
    public static final Certh C55 = new Certh("C55");

    /** Rune. */
    public static final Certh C56 = new Certh("C56");

    /** Rune. */
    public static final Certh C57 = new Certh("C57");

    /** Rune. */
    public static final Certh C58 = new Certh("C58");

    /** Rune. */
    public static final Certh C59 = new Certh("C59");

    /** Rune. */
    public static final Certh C60 = new Certh("C60");

    /** Punctuation. */
    /** Rune. */
    public static final Certh SPACE = new Certh("SPACE");

    /** Rune. */
    public static final Certh COMMA = new Certh("COMMA");

    /** Rune. */
    public static final Certh PERIOD = new Certh("PERIOD");

    /** Rune. */
    public static final Certh NEWLINE = new Certh("NEWLINE");

    /** Ordinal count. */
    private static int ordinalCount = 0;

    /** Values. */
    private static RuneList<Certh> VALUES;

    /**
     * @param number Cirth number.
     * 
     * @return certh.
     */
    public final static Certh valueOfNumber(final int number)
    {
        Certh answer = null;

        final RuneList<Certh> values = values();

        if ((0 < number) && (number <= values.size()))
        {
            answer = values.get(number - 1);
        }

        return answer;
    }

    /**
     * @return a copy of the list of rune values.
     */
    public static final RuneList<Certh> values()
    {
        return new RuneList<Certh>(VALUES);
    }

    /** Delegate. */
    private final DefaultRune delegate;

    /**
     * Construct this object.
     * 
     * @param name Name.
     */
    private Certh(final String name)
    {
        final String displayName = name.toLowerCase();
        delegate = new DefaultRune(ordinalCount, name, displayName, name);

        if (VALUES == null)
        {
            VALUES = new RuneList<Certh>();
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
            final Certh another = (Certh)object;

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
