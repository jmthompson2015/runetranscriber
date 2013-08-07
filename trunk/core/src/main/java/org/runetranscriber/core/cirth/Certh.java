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
    public static final Certh C1 = new Certh("C1");

    /** Rune. */
    public static final Certh C2 = new Certh("C2");

    /** Rune. */
    public static final Certh C3 = new Certh("C3");

    /** Rune. */
    public static final Certh C4 = new Certh("C4");

    /** Rune. */
    public static final Certh C5 = new Certh("C5");

    /** Rune. */
    public static final Certh C6 = new Certh("C6");

    /** Rune. */
    public static final Certh C7 = new Certh("C7");

    /** Rune. */
    public static final Certh C8 = new Certh("C8");

    /** Rune. */
    public static final Certh C9 = new Certh("C9");

    /** Rune. */
    public static final Certh C10 = new Certh("C10");

    /** Rune. */
    public static final Certh C11 = new Certh("C11");

    /** Rune. */
    public static final Certh C12 = new Certh("C12");

    /** Rune. */
    public static final Certh C13 = new Certh("C13");

    /** Rune. */
    public static final Certh C14 = new Certh("C14");

    /** Rune. */
    public static final Certh C15 = new Certh("C15");

    /** Rune. */
    public static final Certh C16 = new Certh("C16");

    /** Rune. */
    public static final Certh C17 = new Certh("C17");

    /** Rune. */
    public static final Certh C18 = new Certh("C18");

    /** Rune. */
    public static final Certh C19 = new Certh("C19");

    /** Rune. */
    public static final Certh C20 = new Certh("C20");

    /** Rune. */
    public static final Certh C21 = new Certh("C21");

    /** Rune. */
    public static final Certh C22 = new Certh("C22");

    /** Rune. */
    public static final Certh C23 = new Certh("C23");

    /** Rune. */
    public static final Certh C24 = new Certh("C24");

    /** Rune. */
    public static final Certh C25 = new Certh("C25");

    /** Rune. */
    public static final Certh C26 = new Certh("C26");

    /** Rune. */
    public static final Certh C27 = new Certh("C27");

    /** Rune. */
    public static final Certh C28 = new Certh("C28");

    /** Rune. */
    public static final Certh C29 = new Certh("C29");

    /** Rune. */
    public static final Certh C30 = new Certh("C30");

    /** 31-45 */
    public static final Certh C31 = new Certh("C31");

    /** Rune. */
    public static final Certh C32 = new Certh("C32");

    /** Rune. */
    public static final Certh C33 = new Certh("C33");

    /** Rune. */
    public static final Certh C34 = new Certh("C34");

    /** Rune. */
    public static final Certh C35 = new Certh("C35");

    /** Rune. */
    public static final Certh C36 = new Certh("C36");

    /** Rune. */
    public static final Certh C37 = new Certh("C37");

    /** Rune. */
    public static final Certh C38 = new Certh("C38");

    /** Rune. */
    public static final Certh C39 = new Certh("C39");

    /** Rune. */
    public static final Certh C40 = new Certh("C40");

    /** Rune. */
    public static final Certh C41 = new Certh("C41");

    /** Rune. */
    public static final Certh C42 = new Certh("C42");

    /** Rune. */
    public static final Certh C43 = new Certh("C43");

    /** Rune. */
    public static final Certh C44 = new Certh("C44");

    /** Rune. */
    public static final Certh C45 = new Certh("C45");

    /** Rune. */
    public static final Certh C46 = new Certh("C46");

    /** Rune. */
    public static final Certh C47 = new Certh("C47");

    /** Rune. */
    public static final Certh C48 = new Certh("C48");

    /** Rune. */
    public static final Certh C49 = new Certh("C49");

    /** Rune. */
    public static final Certh C50 = new Certh("C50");

    /** Rune. */
    public static final Certh C51 = new Certh("C51");

    /** Rune. */
    public static final Certh C52 = new Certh("C52");

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
