package org.runetranscriber.core.cirth.example;

/**
 * Provides a collection of Cirth examples.
 * <p>
 * Cirth (Daeron)
 * </p>
 * <ol>
 * <li><a href="http://ring-lord.tripod.com/cirth/ex_swords.htm">Troll Hoard Sword Glamdring inscription</a></li>
 * <li><a href="http://ring-lord.tripod.com/cirth/ex_swords.htm">Troll Hoard Sword Orcrist inscription</a></li>
 * </ol>
 * <p>
 * Cirth (Moria)
 * </p>
 * <ol>
 * <li><a href="http://ring-lord.tripod.com/cirth/ex_lotr.htm">From the title page, upper inscription, Lord of the
 * Rings</a></li>
 * <li><a href="http://ring-lord.tripod.com/cirth/ex_moria1.htm">Balin's Tomb, upper inscription</a></li>
 * Rings</a></li>
 * </ol>
 * <p>
 * Cirth (Erebor)
 * </p>
 * <ol>
 * <li><a href="http://ring-lord.tripod.com/cirth/ex_moria2.htm">Balin's tomb, lower inscription</a></li>
 * </ol>
 */
public final class Examples
{
    /** Cirth example. */
    private final CirthDaeronExample1 cirthDaeron1 = new CirthDaeronExample1();

    /** Cirth example. */
    private final CirthDaeronExample2 cirthDaeron2 = new CirthDaeronExample2();

    /** Cirth example. */
    private final CirthMoriaExample1 cirthMoria1 = new CirthMoriaExample1();

    /** Cirth example. */
    private final CirthEreborExample1 cirthErebor1 = new CirthEreborExample1();

    /** Cirth example. */
    private final CirthEreborExample2 cirthErebor2 = new CirthEreborExample2();

    /**
     * @return the cirthDaeron1
     */
    public CirthDaeronExample1 getCirthDaeron1()
    {
        return cirthDaeron1;
    }

    /**
     * @return the cirthDaeron2
     */
    public CirthDaeronExample2 getCirthDaeron2()
    {
        return cirthDaeron2;
    }

    /**
     * @return the cirthErebor1
     */
    public CirthEreborExample1 getCirthErebor1()
    {
        return cirthErebor1;
    }

    /**
     * @return the cirthErebor2
     */
    public CirthEreborExample2 getCirthErebor2()
    {
        return cirthErebor2;
    }

    /**
     * @return the cirthMoria1
     */
    public CirthMoriaExample1 getCirthMoria1()
    {
        return cirthMoria1;
    }
}
