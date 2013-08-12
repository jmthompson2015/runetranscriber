package org.runetranscriber.swingui;

import java.awt.Color;

/**
 * Provides an enumeration of color items for a GUI.
 */
public enum ColorItem
{
    /** Primary colors. */
    RED("red", new Color(255, 0, 0)),

    /** Color. */
    GREEN("green", new Color(0, 255, 0)),

    /** Color. */
    BLUE("blue", new Color(0, 0, 255)),

    /** Color. */
    MAROON("maroon", new Color(127, 0, 0)),

    /** Color. */
    DARK_GREEN("dark green", new Color(0, 127, 0)),

    /** Color. */
    NAVY("navy", new Color(0, 0, 127)),

    /** Secondary Colors */
    YELLOW("yellow", new Color(255, 255, 0)),

    /** Color. */
    MAGENTA("magenta", new Color(255, 0, 255)),

    /** Color. */
    CYAN("cyan", new Color(0, 255, 255)),

    /** Color. */
    OLIVE("olive", new Color(127, 127, 0)),

    /** Color. */
    PURPLE("purple", new Color(127, 0, 127)),

    /** Color. */
    TEAL("teal", new Color(0, 127, 127)),

    /** Tertiary colors. */
    ORANGE("orange", new Color(255, 127, 0)),

    /** Color. */
    ROSE("rose", new Color(255, 0, 127)),

    /** Color. */
    CHARTREUSE("chartreuse", new Color(127, 255, 0)),

    /** Color. */
    SPRING_GREEN("spring green", new Color(0, 255, 127)),

    /** Color. */
    VIOLET("violet", new Color(127, 0, 255)),

    /** Color. */
    AZURE("azure", new Color(0, 127, 255)),

    /** Grayscale. */
    BLACK("black", new Color(0, 0, 0)),

    /** Color. */
    IRON("iron", new Color(63, 63, 63)),

    /** Color. */
    GRAY("gray", new Color(127, 127, 127)),

    /** Color. */
    SILVER("silver", new Color(191, 191, 191)),

    /** Color. */
    WHITE("white", new Color(255, 255, 255)),

    ;

    /**
     * @return the dark primary colors.
     */
    public static ColorItem[] darkPrimary()
    {
        final ColorItem[] answer = { MAROON, DARK_GREEN, NAVY, };
        return answer;
    }

    /**
     * @return the dark secondary colors.
     */
    public static ColorItem[] darkSecondary()
    {
        final ColorItem[] answer = { OLIVE, PURPLE, TEAL, };
        return answer;
    }

    /**
     * @return the primary colors.
     */
    public static ColorItem[] primary()
    {
        final ColorItem[] answer = { RED, GREEN, BLUE, };
        return answer;
    }

    /**
     * @return the secondary colors.
     */
    public static ColorItem[] secondary()
    {
        final ColorItem[] answer = { YELLOW, MAGENTA, CYAN, };
        return answer;
    }

    /**
     * @return the tertiary colors.
     */
    public static ColorItem[] tertiary()
    {
        final ColorItem[] answer = { ORANGE, ROSE, CHARTREUSE, SPRING_GREEN, VIOLET, AZURE, };
        return answer;
    }

    /** Color. */
    private final Color color;

    /** Display name. */
    private final String displayName;

    /**
     * Construct this object with the given parameters.
     * 
     * @param displayName Display name.
     * @param color Color.
     */
    @SuppressWarnings("hiding")
    private ColorItem(final String displayName, final Color color)
    {
        this.displayName = displayName;
        this.color = color;
    }

    /**
     * @return the color
     */
    public Color getColor()
    {
        return color;
    }

    @Override
    public String toString()
    {
        return displayName;
    }
}
