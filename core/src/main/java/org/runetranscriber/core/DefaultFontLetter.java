package org.runetranscriber.core;

/**
 * Provides a default implementation of a font letter.
 */
public final class DefaultFontLetter implements FontLetter
{
    /** Name. */
    private final String name;

    /** Ordinal. */
    private final int ordinal;

    /** Value. */
    private final String value;

    /**
     * Construct this object.
     * 
     * @param ordinal Ordinal.
     * @param name Name.
     * @param value Value.
     */
    @SuppressWarnings("hiding")
    public DefaultFontLetter(final int ordinal, final String name, final String value)
    {
        this.ordinal = ordinal;
        this.name = name;
        this.value = value;
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
            final DefaultFontLetter another = (DefaultFontLetter)object;

            answer = (ordinal == another.ordinal) && name.equals(another.name) && (value.equals(another.value));
        }

        return answer;
    }

    @Override
    public int hashCode()
    {
        int answer = (2 * ordinal);
        answer += (3 * name.hashCode());
        answer += (5 * value.hashCode());

        return answer;
    }

    @Override
    public String name()
    {
        return name;
    }

    @Override
    public int ordinal()
    {
        return ordinal;
    }

    @Override
    public String toString()
    {
        return name();
    }

    @Override
    public String value()
    {
        return value;
    }
}
