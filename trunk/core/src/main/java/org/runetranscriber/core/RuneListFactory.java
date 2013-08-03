package org.runetranscriber.core;

import java.util.List;

/**
 * Provides a factory to create a rune list.
 * 
 * @param <R> Rune type parameter.
 */
public final class RuneListFactory<R extends Rune> implements ListFactory<RuneList<R>, R>
{
    @Override
    public RuneList<R> create()
    {
        return new RuneList<R>();
    }

    @Override
    public RuneList<R> create(final List<R> another)
    {
        return new RuneList<R>(another);
    }
}
