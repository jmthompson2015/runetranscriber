package org.runetranscriber.core.viking;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;

/**
 * Provides a JavaScript writer for Anglo-Saxon runes.
 */
public final class AngloSaxonJSWriter
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
        final String filepath = directory + "/AngloSaxonFontLetter.js";

        try
        {
            final File file = new File(directory);
            file.mkdirs();
            writer = new FileWriter(filepath);
            final AngloSaxonJSWriter jsWriter = new AngloSaxonJSWriter();
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
        for (final AngloSaxonFontLetter letter : AngloSaxonFontLetter.values())
        {
            writeFunction(writer, letter);
        }
    }

    /**
     * @param writer Writer.
     * @param letter Font letter.
     */
    private void writeFunction(final Writer writer, final AngloSaxonFontLetter letter)
    {
        try
        {
            writer.write("\n// ");
            writer.write(Integer.toString(letter.ordinal() + 1));
            writer.write("\nfunction ");
            writer.write(letter.name());
            writer.write("()\n");
            writer.write("{\n");
            writer.write("\tdocument.write(");

            if ("NEWLINE".equals(letter.name()))
            {
                writer.write("\"<br/>\"");
            }
            else
            {
                writer.write("\"&#");
                writer.write(Integer.toString(letter.getIntValue()));
                writer.write(";\"");
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
