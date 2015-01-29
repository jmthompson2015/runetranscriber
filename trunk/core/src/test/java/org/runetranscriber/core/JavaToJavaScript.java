package org.runetranscriber.core;

import org.runetranscriber.core.cirth.CerthFontLetter;
import org.runetranscriber.core.cirth.CerthRune;
import org.runetranscriber.core.cirth.CirthFontTranscriber;
import org.runetranscriber.core.tengwar.TengwaFontLetter;
import org.runetranscriber.core.tengwar.TengwaRune;
import org.runetranscriber.core.tengwar.TengwarFontTranscriber;
import org.runetranscriber.core.viking.AngloSaxonFontLetter;
import org.runetranscriber.core.viking.AngloSaxonFontTranscriber;
import org.runetranscriber.core.viking.AngloSaxonRune;

/**
 * Convert Java into JavaScript.
 */
public final class JavaToJavaScript
{
    /**
     * Application method.
     *
     * @param args Application arguments.
     */
    public static final void main(final String[] args)
    {
        final JavaToJavaScript app = new JavaToJavaScript();

        app.convertAngloSaxon();
        // app.convertCirth();
        // app.convertTengwa();
    }

    /**
     * Convert Anglo Saxon data to JavaScript.
     */
    public void convertAngloSaxon()
    {
        final RuneList<AngloSaxonRune> values = AngloSaxonRune.values();
        final FontTranscriber<AngloSaxonRune, AngloSaxonFontLetter> transcriber = new AngloSaxonFontTranscriber();
        final RuneList<AngloSaxonRune> fromSequence = new RuneList<AngloSaxonRune>();
        final StringBuilder sb = new StringBuilder();

        for (final AngloSaxonRune rune : values)
        {
            final String name = toCamelCase(rune.name());
            sb.append(rune.name()).append(": \"").append(name).append("\",\n");
        }

        sb.append("properties: \n{\n");

        for (final AngloSaxonRune rune : values)
        {
            final String name = toCamelCase(rune.name());
            fromSequence.clear();
            fromSequence.add(rune);
            final FontLetterList<AngloSaxonFontLetter> fontLetter = transcriber.transcribeForward(fromSequence);
            sb.append("\"").append(name).append("\":\n{\n");
            sb.append("name: \"").append(rune.name()).append("\",\n");
            sb.append("displayName: \"").append(rune.displayName()).append("\",\n");
            if ("NEWLINE".equals(rune.name()))
            {
                sb.append("fontLetter: \"\\n\",\n");
            }
            // else if ("C38".equals(rune.name()))
            // {
            // sb.append("fontLetter: \"\\\\\",\n");
            // }
            else
            {
                final String fontString = "\\u" + Integer.toHexString(fontLetter.get(0).getIntValue());
                sb.append("fontLetter: \"").append(fontString).append("\",\n");
            }
            sb.append("},\n");
        }

        sb.append("},\n");

        sb.append("values: \n[\n");

        for (final AngloSaxonRune rune : values)
        {
            final String name = toCamelCase(rune.name());
            sb.append("\"").append(name).append("\", ");
        }

        sb.append("],\n");

        System.out.println(sb.toString());
    }

    /**
     * Convert Cirth data to JavaScript.
     */
    public void convertCirth()
    {
        final RuneList<CerthRune> values = CerthRune.values();
        final FontTranscriber<CerthRune, CerthFontLetter> transcriber = new CirthFontTranscriber();
        final RuneList<CerthRune> fromSequence = new RuneList<CerthRune>();
        final StringBuilder sb = new StringBuilder();

        for (final CerthRune rune : values)
        {
            final String name = toCamelCase(rune.name());
            sb.append(rune.name()).append(": \"").append(name).append("\",\n");
        }

        sb.append("properties: \n{\n");

        for (final CerthRune rune : values)
        {
            final String name = toCamelCase(rune.name());
            fromSequence.clear();
            fromSequence.add(rune);
            final FontLetterList<CerthFontLetter> fontLetter = transcriber.transcribeForward(fromSequence);
            sb.append("\"").append(name).append("\":\n{\n");
            sb.append("name: \"").append(rune.name()).append("\",\n");
            sb.append("displayName: \"").append(rune.displayName()).append("\",\n");
            if ("NEWLINE".equals(rune.name()))
            {
                sb.append("fontLetter: \"\\n\",\n");
            }
            else if ("C38".equals(rune.name()))
            {
                sb.append("fontLetter: \"\\\\\",\n");
            }
            else
            {
                sb.append("fontLetter: \"").append(fontLetter).append("\",\n");
            }
            sb.append("},\n");
        }

        sb.append("},\n");

        sb.append("values: \n[\n");

        for (final CerthRune rune : values)
        {
            final String name = toCamelCase(rune.name());
            sb.append("\"").append(name).append("\", ");
        }

        sb.append("],\n");

        System.out.println(sb.toString());
    }

    /**
     * Convert Tengwa data to JavaScript.
     */
    public void convertTengwa()
    {
        final RuneList<TengwaRune> values = TengwaRune.values();
        final FontTranscriber<TengwaRune, TengwaFontLetter> transcriber = new TengwarFontTranscriber();
        final RuneList<TengwaRune> fromSequence = new RuneList<TengwaRune>();
        final StringBuilder sb = new StringBuilder();

        for (final TengwaRune rune : values)
        {
            final String name = toCamelCase(rune.name());
            sb.append(rune.name()).append(": \"").append(name).append("\",\n");
        }

        sb.append("properties: \n{\n");

        for (final TengwaRune rune : values)
        {
            final String name = toCamelCase(rune.name());
            fromSequence.clear();
            fromSequence.add(rune);
            final FontLetterList<TengwaFontLetter> fontLetter = transcriber.transcribeForward(fromSequence);
            sb.append("\"").append(name).append("\":\n{\n");
            sb.append("name: \"").append(rune.name()).append("\",\n");
            sb.append("displayName: \"").append(rune.displayName()).append("\",\n");
            sb.append("nameMeaning: \"").append(rune.nameMeaning()).append("\",\n");
            if ("NEWLINE".equals(rune.name()))
            {
                sb.append("fontLetter: \"\\n\",\n");
            }
            else
            {
                sb.append("fontLetter: \"").append(fontLetter).append("\",\n");
            }
            sb.append("},\n");
        }

        sb.append("},\n");

        sb.append("values: \n[\n");

        for (final TengwaRune rune : values)
        {
            final String name = toCamelCase(rune.name());
            sb.append("\"").append(name).append("\", ");
        }

        sb.append("],\n");

        System.out.println(sb.toString());
    }

    /**
     * @param string String.
     *
     * @return the string in camel case.
     */
    private String toCamelCase(final String string)
    {
        String answer = string.toLowerCase();

        answer = answer.replaceAll("[\"]", "");
        answer = answer.replaceAll("[\']", "");
        answer = answer.replaceAll("[!]", "");

        for (char i = 'a'; i <= 'z'; i++)
        {
            answer = answer.replaceAll("[ ]" + i, String.valueOf(Character.toUpperCase(i)));
            answer = answer.replaceAll("[_]" + i, String.valueOf(Character.toUpperCase(i)));
            answer = answer.replaceAll("[-]" + i, String.valueOf(Character.toUpperCase(i)));
            answer = answer.replaceAll("[(]" + i, String.valueOf(Character.toUpperCase(i)));
        }

        answer = answer.replaceAll("[ ]", "");
        answer = answer.replaceAll("[_]", "");
        answer = answer.replaceAll("[-]", "");
        answer = answer.replaceAll("[)]", "");

        return answer;
    }
}
