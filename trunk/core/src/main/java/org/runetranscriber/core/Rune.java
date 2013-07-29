package org.runetranscriber.core;

/**
 * Defines methods required by a rune.
 */
public interface Rune
{
    /**
     * @return the display name.
     */
    String displayName();

    /**
     * @return the name.
     */
    String name();

    /**
     * @return the name meaning.
     */
    String nameMeaning();

    /**
     * @return the ordinal.
     */
    int ordinal();

    /**
     * @return a string representation of this object.
     */
    String toDebugString();
}
