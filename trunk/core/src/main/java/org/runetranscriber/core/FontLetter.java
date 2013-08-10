package org.runetranscriber.core;

/**
 * Defines methods required by a font letter.
 */
public interface FontLetter
{
    /**
     * @return the name.
     */
    String name();

    /**
     * @return the ordinal.
     */
    int ordinal();

    /**
     * @return the value.
     */
    String value();
}
