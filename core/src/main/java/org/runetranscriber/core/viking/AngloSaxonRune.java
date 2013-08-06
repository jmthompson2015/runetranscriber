package org.runetranscriber.core.viking;

import org.runetranscriber.core.DefaultRune;
import org.runetranscriber.core.Rune;
import org.runetranscriber.core.RuneList;

/**
 * Provides an enumeration of runes in the Anglo-Saxon runic alphabet.
 */
public final class AngloSaxonRune implements Rune
{
    /** Rune. */
    public static final AngloSaxonRune FEOH = new AngloSaxonRune("FEOH", "wealth");

    /** Rune. */
    public static final AngloSaxonRune UR = new AngloSaxonRune("UR", "aurochs");

    /** Rune. */
    public static final AngloSaxonRune THORN = new AngloSaxonRune("THORN", "thorn");

    /** Rune. */
    public static final AngloSaxonRune OS = new AngloSaxonRune("OS", "[a] god");

    /** Rune. */
    public static final AngloSaxonRune RAD = new AngloSaxonRune("RAD", "ride");

    /** Rune. */
    public static final AngloSaxonRune CEN = new AngloSaxonRune("CEN", "torch");

    /** Rune. */
    public static final AngloSaxonRune GYFU = new AngloSaxonRune("GYFU", "gift");

    /** Rune. */
    public static final AngloSaxonRune WYNN = new AngloSaxonRune("WYNN", "joy");

    /** Rune. */
    public static final AngloSaxonRune HAEGL = new AngloSaxonRune("HAEGL", "hail (precipitation)");

    /** Rune. */
    public static final AngloSaxonRune NYD = new AngloSaxonRune("NYD", "need, distress");

    /** Rune. */
    public static final AngloSaxonRune IS = new AngloSaxonRune("IS", "ice");

    /** Rune. */
    public static final AngloSaxonRune GER = new AngloSaxonRune("GER", "year, harvest");

    /** Rune. */
    public static final AngloSaxonRune EOH = new AngloSaxonRune("EOH", "yew");

    /** Rune. */
    public static final AngloSaxonRune PEORD = new AngloSaxonRune("PEORD", "(Unknown)");

    /** Rune. */
    public static final AngloSaxonRune EOLH = new AngloSaxonRune("EOLH", "elk-sedge");

    /** Rune. */
    public static final AngloSaxonRune SIGEL = new AngloSaxonRune("SIGEL", "Sun");

    /** Rune. */
    public static final AngloSaxonRune TIW = new AngloSaxonRune("TIW", "Tiw");

    /** Rune. */
    public static final AngloSaxonRune BEORC = new AngloSaxonRune("BEORC", "birch");

    /** Rune. */
    public static final AngloSaxonRune EH = new AngloSaxonRune("EH", "horse");

    /** Rune. */
    public static final AngloSaxonRune MANN = new AngloSaxonRune("MANN", "man");

    /** 21 */
    public static final AngloSaxonRune LAGU = new AngloSaxonRune("LAGU", "lake");

    /** 22 */
    public static final AngloSaxonRune ING = new AngloSaxonRune("ING", "Ing (a hero)");

    /** 23 */
    public static final AngloSaxonRune EOEL = new AngloSaxonRune("EOEL", "estate");

    /** 24 */
    public static final AngloSaxonRune DAEG = new AngloSaxonRune("DAEG", "day");

    /** 25 */
    public static final AngloSaxonRune AC = new AngloSaxonRune("AC", "oak");

    /** Rune. */
    public static final AngloSaxonRune AESC = new AngloSaxonRune("AESC", "ash-tree");

    /** Rune. */
    public static final AngloSaxonRune YR = new AngloSaxonRune("YR", "bow");

    /** Rune. */
    public static final AngloSaxonRune IOR = new AngloSaxonRune("IOR", "eel");

    /** Rune. */
    public static final AngloSaxonRune EAR = new AngloSaxonRune("EAR", "grave");

    /** Punctuation. */
    /** Rune. */
    public static final AngloSaxonRune SPACE = new AngloSaxonRune("SPACE", "space");

    /** Rune. */
    public static final AngloSaxonRune COMMA = new AngloSaxonRune("COMMA", "comma");

    /** Rune. */
    public static final AngloSaxonRune PERIOD = new AngloSaxonRune("PERIOD", "period");

    /** Rune. */
    public static final AngloSaxonRune NEWLINE = new AngloSaxonRune("NEWLINE", "newline");

    /** Ordinal count. */
    private static int ordinalCount = 0;

    /** Values. */
    private static RuneList<AngloSaxonRune> VALUES;

    /**
     * @param number Rune number.
     * 
     * @return rune.
     */
    public final static AngloSaxonRune valueOfNumber(final int number)
    {
        AngloSaxonRune answer = null;

        final RuneList<AngloSaxonRune> values = values();

        if ((0 < number) && (number <= values.size()))
        {
            answer = values.get(number - 1);
        }

        return answer;
    }

    /**
     * @return a copy of the list of rune values.
     */
    public static final RuneList<AngloSaxonRune> values()
    {
        return new RuneList<AngloSaxonRune>(VALUES);
    }

    /** Delegate. */
    private final DefaultRune delegate;

    /**
     * Construct this object.
     * 
     * @param name Name.
     * @param nameMeaning Name meaning.
     */
    private AngloSaxonRune(final String name, final String nameMeaning)
    {
        final String displayName = name.toLowerCase();
        delegate = new DefaultRune(ordinalCount, name, displayName, nameMeaning);

        if (VALUES == null)
        {
            VALUES = new RuneList<AngloSaxonRune>();
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
            final AngloSaxonRune another = (AngloSaxonRune)object;

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
