package org.runetranscriber.core.cirth;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;

/**
 * Provides a JavaScript writer for Cirth runes.
 */
public final class CirthJSWriter
{
    /**
     * Application method.
     * 
     * @param args Application arguments.
     */
    public static final void main(final String[] args)
    {
        FileWriter writer = null;

        final String directory = "core/target/generated-js";
        final String filepath = directory + "/CerthFontLetter.js";

        try
        {
            final File file = new File(directory);
            file.mkdirs();
            writer = new FileWriter(filepath);
            final CirthJSWriter jsWriter = new CirthJSWriter();
            jsWriter.write(writer);
            System.out.println("Data written to file " + filepath);
        }
        catch (final IOException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        finally
        {
            if (writer != null)
            {
                try
                {
                    writer.flush();
                    writer.close();
                }
                catch (final IOException ignore)
                {
                    // Nothing to do.
                }
            }
        }
    }

    /**
     * @param writer Writer.
     */
    public void write(final Writer writer)
    {
        try
        {
            writer.write("var E_DIAERESIS = \"\\u00EB\";\n");
            writer.write("var O_DIAERESIS = \"\\u00F6\";\n");
            writer.write("var SMALL_LETTER_ETH = \"\\u00F0\";\n");
            writer.write("var SMALL_LETTER_THORN = \"\\u00FE\";\n");
            writer.write("var U_DIAERESIS = \"\\u00FC\";\n");
        }
        catch (final IOException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        for (final CerthFontLetter letter : CerthFontLetter.values())
        {
            writeFunction(writer, letter);
        }
    }

    /**
     * @param writer Writer.
     * @param letter Font letter.
     */
    private void writeFunction(final Writer writer, final CerthFontLetter letter)
    {
        try
        {
            writer.write("\nfunction ");
            writer.write(letter.name());
            writer.write("()\n");
            writer.write("{\n");
            writer.write("\tdocument.write(");

            if ("C10".equals(letter.name()))
            {
                writer.write("SMALL_LETTER_THORN");
            }
            else if ("C11".equals(letter.name()))
            {
                writer.write("SMALL_LETTER_ETH");
            }
            else if ("C38".equals(letter.name()))
            {
                writer.write("\"\\\\\"");
            }
            else if ("C45".equals(letter.name()))
            {
                writer.write("U_DIAERESIS");
            }
            else if ("C52".equals(letter.name()))
            {
                writer.write("O_DIAERESIS");
            }
            else if ("C55".equals(letter.name()))
            {
                writer.write("E_DIAERESIS");
            }
            else if ("NEWLINE".equals(letter.name()))
            {
                writer.write("\"<br/>\"");
            }
            else
            {
                writer.write("\"");
                writer.write(letter.value());
                writer.write("\"");
            }

            writer.write(");\n");
            writer.write("}\n");
        }
        catch (final IOException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
