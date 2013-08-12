package org.runetranscriber.swingui;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import org.runetranscriber.core.FontLetter;
import org.runetranscriber.core.FontLetterList;
import org.runetranscriber.core.FontTranscriber;
import org.runetranscriber.core.FullTranscriber;
import org.runetranscriber.core.PhoneticTranscriber;
import org.runetranscriber.core.Rune;
import org.runetranscriber.core.RuneList;
import org.runetranscriber.core.RuneTranscriber;
import org.runetranscriber.core.cirth.CerthFontLetter;
import org.runetranscriber.core.cirth.CerthRune;
import org.runetranscriber.core.cirth.EnglishCirthDaeronFullTranscriber;
import org.runetranscriber.core.cirth.EnglishCirthEreborFullTranscriber;
import org.runetranscriber.core.cirth.KhuzdulCirthMoriaFullTranscriber;
import org.runetranscriber.core.tengwar.EnglishTengwarFullTranscriber;
import org.runetranscriber.core.tengwar.TengwaFontLetter;
import org.runetranscriber.core.tengwar.TengwaRune;
import org.runetranscriber.core.viking.AngloSaxonFontLetter;
import org.runetranscriber.core.viking.AngloSaxonRune;
import org.runetranscriber.core.viking.EnglishAngloSaxonFullTranscriber;

/**
 * Provides an enumeration of transcriber groups.
 * 
 * @param <R> Rune type parameter.
 * @param <F> Font letter type parameter.
 */
public final class TranscriberGroup<R extends Rune, F extends FontLetter>
{
    /** Anglo-Saxon transcriber group. */
    public static final TranscriberGroup<AngloSaxonRune, AngloSaxonFontLetter> ANGLO_SAXON = new TranscriberGroup<AngloSaxonRune, AngloSaxonFontLetter>(
            new EnglishAngloSaxonFullTranscriber(), AngloSaxonRune.class, AngloSaxonFontLetter.class);

    /** Cirth Daeron transcriber group. */
    public static final TranscriberGroup<CerthRune, CerthFontLetter> CIRTH_DAERON = new TranscriberGroup<CerthRune, CerthFontLetter>(
            new EnglishCirthDaeronFullTranscriber(), CerthRune.class, CerthFontLetter.class);

    /** Khuzdul Cirth Moria transcriber group. */
    public static final TranscriberGroup<CerthRune, CerthFontLetter> KHUZDUL_CIRTH_MORIA = new TranscriberGroup<CerthRune, CerthFontLetter>(
            new KhuzdulCirthMoriaFullTranscriber(), CerthRune.class, CerthFontLetter.class);

    /** English Cirth Moria transcriber group. */
    public static final TranscriberGroup<CerthRune, CerthFontLetter> ENGLISH_CIRTH_MORIA = new TranscriberGroup<CerthRune, CerthFontLetter>(
            new KhuzdulCirthMoriaFullTranscriber(), CerthRune.class, CerthFontLetter.class);

    /** Cirth Erebor transcriber group. */
    public static final TranscriberGroup<CerthRune, CerthFontLetter> CIRTH_EREBOR = new TranscriberGroup<CerthRune, CerthFontLetter>(
            new EnglishCirthEreborFullTranscriber(), CerthRune.class, CerthFontLetter.class);

    /** Tengwar transcriber group. */
    public static final TranscriberGroup<TengwaRune, TengwaFontLetter> TENGWAR = new TranscriberGroup<TengwaRune, TengwaFontLetter>(
            new EnglishTengwarFullTranscriber(), TengwaRune.class, TengwaFontLetter.class);

    /** List of transcriber values. */
    private static final List<TranscriberGroup<?, ?>> VALUES = new ArrayList<TranscriberGroup<?, ?>>();

    static
    {
        VALUES.add(ANGLO_SAXON);
        VALUES.add(CIRTH_DAERON);
        VALUES.add(KHUZDUL_CIRTH_MORIA);
        VALUES.add(ENGLISH_CIRTH_MORIA);
        VALUES.add(CIRTH_EREBOR);
        VALUES.add(TENGWAR);
    }

    /**
     * @return transcriber values.
     */
    public static List<TranscriberGroup<?, ?>> values()
    {
        return VALUES;
    }

    /** Full transcriber. */
    private final FullTranscriber<R, F> transcriber;

    /** Font letter class. */
    private final Class<F> fontLetterClass;

    /** Rune class. */
    private final Class<R> runeClass;

    /**
     * Construct this object with the given parameters.
     * 
     * @param transcriber Full transcriber.
     * @param runeClass Rune class.
     * @param fontLetterClass Font letter class.
     */
    @SuppressWarnings("hiding")
    private TranscriberGroup(final FullTranscriber<R, F> transcriber, final Class<R> runeClass,
            final Class<F> fontLetterClass)
    {
        this.transcriber = transcriber;
        this.runeClass = runeClass;
        this.fontLetterClass = fontLetterClass;
    }

    /**
     * @return an array of font letter values.
     */
    public FontLetterList<F> fontLetterValues()
    {
        FontLetterList<F> answer = null;

        Method method;
        try
        {
            method = getFontLetterClass().getMethod("values");

            if (method != null)
            {
                @SuppressWarnings("unchecked")
                final FontLetterList<F> values = (FontLetterList<F>)method.invoke(getFontLetterClass());
                answer = values;
            }
        }
        catch (final SecurityException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        catch (final NoSuchMethodException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        catch (final IllegalArgumentException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        catch (final IllegalAccessException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        catch (final InvocationTargetException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return answer;
    }

    /**
     * @return the description
     */
    public String getDescription()
    {
        return transcriber.getDescription();
    }

    /**
     * @return the displayName
     */
    public String getDisplayName()
    {
        return transcriber.getDisplayName();
    }

    /**
     * @return the fontLetterClass
     */
    public Class<F> getFontLetterClass()
    {
        return fontLetterClass;
    }

    /**
     * @return the fontTranscriber
     */
    public FontTranscriber<R, F> getFontTranscriber()
    {
        return transcriber.getFontTranscriber();
    }

    /**
     * @return the phoneticTranscriber
     */
    public PhoneticTranscriber getPhoneticTranscriber()
    {
        return transcriber.getPhoneticTranscriber();
    }

    /**
     * @return the runeClass
     */
    public Class<R> getRuneClass()
    {
        return runeClass;
    }

    /**
     * @return the runeTranscriber
     */
    public RuneTranscriber<R> getRuneTranscriber()
    {
        return transcriber.getRuneTranscriber();
    }

    /**
     * @return an array of rune values.
     */
    public RuneList<R> runeValues()
    {
        RuneList<R> answer = null;

        Method method;
        try
        {
            method = getRuneClass().getMethod("values");

            if (method != null)
            {
                @SuppressWarnings("unchecked")
                final RuneList<R> values = (RuneList<R>)method.invoke(getRuneClass());
                answer = values;
            }
        }
        catch (final SecurityException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        catch (final NoSuchMethodException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        catch (final IllegalArgumentException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        catch (final IllegalAccessException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        catch (final InvocationTargetException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return answer;
    }

    @Override
    public String toString()
    {
        return getDisplayName();
    }
}
