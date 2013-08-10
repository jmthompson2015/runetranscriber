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
    public static final AngloSaxonFontLetter FEOH = new AngloSaxonFontLetter("FEOH", Character.toString((char)5792));

    /** Font letter. */
    public static final AngloSaxonFontLetter UR = new AngloSaxonFontLetter("UR", Character.toString((char)5794));

    /** Font letter. */
    public static final AngloSaxonFontLetter THORN = new AngloSaxonFontLetter("THORN", Character.toString((char)5798));

    /** Font letter. */
    public static final AngloSaxonFontLetter OS = new AngloSaxonFontLetter("OS", Character.toString((char)5801));

    /** Font letter. */
    public static final AngloSaxonFontLetter RAD = new AngloSaxonFontLetter("RAD", Character.toString((char)5809));

    /** Font letter. */
    public static final AngloSaxonFontLetter CEN = new AngloSaxonFontLetter("CEN", Character.toString((char)5811));

    /** Font letter. */
    public static final AngloSaxonFontLetter GYFU = new AngloSaxonFontLetter("GYFU", Character.toString((char)5815));

    /** Font letter. */
    public static final AngloSaxonFontLetter WYNN = new AngloSaxonFontLetter("WYNN", Character.toString((char)5817));

    /** Font letter. */
    public static final AngloSaxonFontLetter HAEGL = new AngloSaxonFontLetter("HAEGL", Character.toString((char)5819));

    /** Font letter. */
    public static final AngloSaxonFontLetter NYD = new AngloSaxonFontLetter("NYD", Character.toString((char)5822));

    /** Font letter. */
    public static final AngloSaxonFontLetter IS = new AngloSaxonFontLetter("IS", Character.toString((char)5825));

    /** Font letter. */
    public static final AngloSaxonFontLetter GER = new AngloSaxonFontLetter("GER", Character.toString((char)5828));

    /** Font letter. */
    public static final AngloSaxonFontLetter EOH = new AngloSaxonFontLetter("EOH", Character.toString((char)5831));

    /** Font letter. */
    public static final AngloSaxonFontLetter PEORD = new AngloSaxonFontLetter("PEORD", Character.toString((char)5832));

    /** Font letter. */
    public static final AngloSaxonFontLetter EOLH = new AngloSaxonFontLetter("EOLH", Character.toString((char)5833));

    /** Font letter. */
    public static final AngloSaxonFontLetter SIGEL = new AngloSaxonFontLetter("SIGEL", Character.toString((char)5835));

    /** Font letter. */
    public static final AngloSaxonFontLetter TIW = new AngloSaxonFontLetter("TIW", Character.toString((char)5839));

    /** Font letter. */
    public static final AngloSaxonFontLetter BEORC = new AngloSaxonFontLetter("BEORC", Character.toString((char)5842));

    /** Font letter. */
    public static final AngloSaxonFontLetter EH = new AngloSaxonFontLetter("EH", Character.toString((char)5846));

    /** Font letter. */
    public static final AngloSaxonFontLetter MANN = new AngloSaxonFontLetter("MANN", Character.toString((char)5847));

    /** Font letter. */
    public static final AngloSaxonFontLetter LAGU = new AngloSaxonFontLetter("LAGU", Character.toString((char)5850));

    /** Font letter. */
    public static final AngloSaxonFontLetter ING = new AngloSaxonFontLetter("ING", Character.toString((char)5853));

    /** Font letter. */
    public static final AngloSaxonFontLetter EOEL = new AngloSaxonFontLetter("EOEL", Character.toString((char)5855));

    /** Font letter. */
    public static final AngloSaxonFontLetter DAEG = new AngloSaxonFontLetter("DAEG", Character.toString((char)5854));

    /** Font letter. */
    public static final AngloSaxonFontLetter AC = new AngloSaxonFontLetter("AC", Character.toString((char)5802));

    /** Font letter. */
    public static final AngloSaxonFontLetter AESC = new AngloSaxonFontLetter("AESC", Character.toString((char)5803));

    /** Font letter. */
    public static final AngloSaxonFontLetter YR = new AngloSaxonFontLetter("YR", Character.toString((char)5795));

    /** Font letter. */
    public static final AngloSaxonFontLetter IOR = new AngloSaxonFontLetter("IOR", Character.toString((char)5820));

    /** Font letter. */
    public static final AngloSaxonFontLetter EAR = new AngloSaxonFontLetter("EAR", Character.toString((char)5856));

    /** Punctuation. */
    /** Font letter. */
    public static final AngloSaxonFontLetter SPACE = new AngloSaxonFontLetter("SPACE", Character.toString((char)5867));

    /** Font letter. */
    public static final AngloSaxonFontLetter COMMA = new AngloSaxonFontLetter("COMMA", Character.toString((char)5868));

    /** Font letter. */
    public static final AngloSaxonFontLetter PERIOD = new AngloSaxonFontLetter("PERIOD", Character.toString((char)5010));

    /** Font letter. */
    public static final AngloSaxonFontLetter NEWLINE = new AngloSaxonFontLetter("NEWLINE", "\n");

    /** Ordinal count. */
    private static int ordinalCount = 0;

    /** Values. */
    private static FontLetterList<AngloSaxonFontLetter> VALUES;

    /** Delegate. */
    private final DefaultFontLetter delegate;

    /**
     * Construct this object.
     * 
     * @param name Name.
     * @param value Value.
     */
    public AngloSaxonFontLetter(final String name, final String value)
    {
        delegate = new DefaultFontLetter(ordinalCount, name, value);

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
