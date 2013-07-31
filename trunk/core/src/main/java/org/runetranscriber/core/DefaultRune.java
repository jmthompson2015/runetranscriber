package org.runetranscriber.core;

/**
 * Provides a default implementation of a rune.
 */
public final class DefaultRune implements Rune
{
    /** Name. */
    private final String name;

    /** Display name. */
    private final String displayName;

    /** Name meaning. */
    private final String nameMeaning;

    /** Ordinal. */
    private final int ordinal;

    /**
     * Construct this object.
     * 
     * @param ordinal Ordinal.
     * @param name Name.
     * @param displayName Display name.
     * @param nameMeaning Name meaning.
     */
    @SuppressWarnings("hiding")
    public DefaultRune(final int ordinal, final String name, final String displayName, final String nameMeaning)
    {
        this.ordinal = ordinal;
        this.name = name;
        this.displayName = displayName;
        this.nameMeaning = nameMeaning;
    }

    @Override
    public String displayName()
    {
        return displayName;
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
            final DefaultRune another = (DefaultRune)object;

            answer = (ordinal == another.ordinal) && name.equals(another.name)
                    && (displayName.equals(another.displayName)) && nameMeaning.equals(another.nameMeaning);
        }

        return answer;
    }

    @Override
    public int hashCode()
    {
        int answer = (2 * ordinal);
        answer += (3 * name.hashCode());
        answer += (5 * displayName.hashCode());
        answer += (7 * nameMeaning.hashCode());

        return answer;
    }

    @Override
    public String name()
    {
        return name;
    }

    @Override
    public String nameMeaning()
    {
        return nameMeaning;
    }

    @Override
    public int ordinal()
    {
        return ordinal;
    }

    @Override
    public String toDebugString()
    {
        final StringBuilder sb = new StringBuilder();

        sb.append(ordinal);
        sb.append(" ");
        sb.append(name);
        sb.append(" ");
        sb.append(displayName);
        sb.append(" ");
        sb.append(nameMeaning);

        return sb.toString();
    }

    @Override
    public String toString()
    {
        return name;
    }
}
