package org.runetranscriber.core.viking;

import org.runetranscriber.core.DefaultFontLetter;
import org.runetranscriber.core.FontLetter;
import org.runetranscriber.core.FontLetterList;

/**
 * Provides an enumeration of Anglo-Saxon font letters.
 */
public final class AngloSaxonFontLetter implements FontLetter
{
    /** Font letter. */
    public static final AngloSaxonFontLetter FEOH = new AngloSaxonFontLetter("FEOH", 5792);

    /** Font letter. */
    public static final AngloSaxonFontLetter UR = new AngloSaxonFontLetter("UR", 5794);

    /** Font letter. */
    public static final AngloSaxonFontLetter THORN = new AngloSaxonFontLetter("THORN", 5798);

    /** Font letter. */
    public static final AngloSaxonFontLetter OS = new AngloSaxonFontLetter("OS", 5801);

    /** Font letter. */
    public static final AngloSaxonFontLetter RAD = new AngloSaxonFontLetter("RAD", 5809);

    /** Font letter. */
    public static final AngloSaxonFontLetter CEN = new AngloSaxonFontLetter("CEN", 5811);

    /** Font letter. */
    public static final AngloSaxonFontLetter GYFU = new AngloSaxonFontLetter("GYFU", 5815);

    /** Font letter. */
    public static final AngloSaxonFontLetter WYNN = new AngloSaxonFontLetter("WYNN", 5817);

    /** Font letter. */
    public static final AngloSaxonFontLetter HAEGL = new AngloSaxonFontLetter("HAEGL", 5819);

    /** Font letter. */
    public static final AngloSaxonFontLetter NYD = new AngloSaxonFontLetter("NYD", 5822);

    /** Font letter. */
    public static final AngloSaxonFontLetter IS = new AngloSaxonFontLetter("IS", 5825);

    /** Font letter. */
    public static final AngloSaxonFontLetter GER = new AngloSaxonFontLetter("GER", 5828);

    /** Font letter. */
    public static final AngloSaxonFontLetter EOH = new AngloSaxonFontLetter("EOH", 5831);

    /** Font letter. */
    public static final AngloSaxonFontLetter PEORD = new AngloSaxonFontLetter("PEORD", 5832);

    /** Font letter. */
    public static final AngloSaxonFontLetter EOLH = new AngloSaxonFontLetter("EOLH", 5833);

    /** Font letter. */
    public static final AngloSaxonFontLetter SIGEL = new AngloSaxonFontLetter("SIGEL", 5835);

    /** Font letter. */
    public static final AngloSaxonFontLetter TIW = new AngloSaxonFontLetter("TIW", 5839);

    /** Font letter. */
    public static final AngloSaxonFontLetter BEORC = new AngloSaxonFontLetter("BEORC", 5842);

    /** Font letter. */
    public static final AngloSaxonFontLetter EH = new AngloSaxonFontLetter("EH", 5846);

    /** Font letter. */
    public static final AngloSaxonFontLetter MANN = new AngloSaxonFontLetter("MANN", 5847);

    /** Font letter. */
    public static final AngloSaxonFontLetter LAGU = new AngloSaxonFontLetter("LAGU", 5850);

    /** Font letter. */
    public static final AngloSaxonFontLetter ING = new AngloSaxonFontLetter("ING", 5853);

    /** Font letter. */
    public static final AngloSaxonFontLetter EOEL = new AngloSaxonFontLetter("EOEL", 5855);

    /** Font letter. */
    public static final AngloSaxonFontLetter DAEG = new AngloSaxonFontLetter("DAEG", 5854);

    /** Font letter. */
    public static final AngloSaxonFontLetter AC = new AngloSaxonFontLetter("AC", 5802);

    /** Font letter. */
    public static final AngloSaxonFontLetter AESC = new AngloSaxonFontLetter("AESC", 5803);

    /** Font letter. */
    public static final AngloSaxonFontLetter YR = new AngloSaxonFontLetter("YR", 5795);

    /** Font letter. */
    public static final AngloSaxonFontLetter IOR = new AngloSaxonFontLetter("IOR", 5820);

    /** Font letter. */
    public static final AngloSaxonFontLetter EAR = new AngloSaxonFontLetter("EAR", 5856);

    /** Punctuation. */
    /** Font letter. */
    public static final AngloSaxonFontLetter SPACE = new AngloSaxonFontLetter("SPACE", 5867);

    /** Font letter. */
    public static final AngloSaxonFontLetter COMMA = new AngloSaxonFontLetter("COMMA", 5868);

    /** Font letter. */
    public static final AngloSaxonFontLetter PERIOD = new AngloSaxonFontLetter("PERIOD", 5010);

    /** Font letter. */
    public static final AngloSaxonFontLetter NEWLINE = new AngloSaxonFontLetter("NEWLINE", "\n");

    /** Ordinal count. */
    private static int ordinalCount = 0;

    /** Values. */
    private static FontLetterList<AngloSaxonFontLetter> VALUES;

    /**
     * @return a copy of the list of font letter values.
     */
    public static final FontLetterList<AngloSaxonFontLetter> values()
    {
        return new FontLetterList<AngloSaxonFontLetter>(VALUES);
    }

    /** Delegate. */
    private final DefaultFontLetter delegate;

    /** Integer value. */
    private final int intValue;

    /**
     * Construct this object.
     * 
     * @param name Name.
     * @param intValue Integer value.
     */
    @SuppressWarnings("hiding")
    public AngloSaxonFontLetter(final String name, final int intValue)
    {
        this.intValue = intValue;

        final String value = Character.toString((char)intValue);
        delegate = new DefaultFontLetter(ordinalCount, name, value);

        if (VALUES == null)
        {
            VALUES = new FontLetterList<AngloSaxonFontLetter>();
        }

        VALUES.add(this);
        ordinalCount++;
    }

    /**
     * Construct this object.
     * 
     * @param name Name.
     * @param value String value.
     */
    public AngloSaxonFontLetter(final String name, final String value)
    {
        delegate = new DefaultFontLetter(ordinalCount, name, value);

        this.intValue = Character.getNumericValue("\n".charAt(0));

        if (VALUES == null)
        {
            VALUES = new FontLetterList<AngloSaxonFontLetter>();
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
            final AngloSaxonFontLetter another = (AngloSaxonFontLetter)object;

            answer = delegate.equals(another.delegate);
        }

        return answer;
    }

    /**
     * @return the intValue
     */
    public int getIntValue()
    {
        return intValue;
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
