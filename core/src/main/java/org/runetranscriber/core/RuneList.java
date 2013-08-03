package org.runetranscriber.core;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import org.apache.commons.collections.CollectionUtils;

/**
 * Provides a list of runes.
 * 
 * @param <R> Rune type parameter.
 */
public final class RuneList<R extends Rune> implements List<R>
{
    /** Delegate. */
    private final List<R> delegate;

    /**
     * Construct this object.
     */
    public RuneList()
    {
        delegate = new ArrayList<R>();
    }

    /**
     * Construct this object.
     * 
     * @param list Initial list.
     */
    public RuneList(final List<R> list)
    {
        if (CollectionUtils.isNotEmpty(list))
        {
            delegate = new ArrayList<R>(list);
        }
        else
        {
            delegate = new ArrayList<R>();
        }
    }

    /**
     * Construct this object.
     * 
     * @param runes Runes.
     */
    public RuneList(final R... runes)
    {
        this();

        if (runes != null)
        {
            for (int i = 0; i < runes.length; i++)
            {
                if (runes[i] != null)
                {
                    add(runes[i]);
                }
            }
        }
    }

    /**
     * Construct this object.
     * 
     * @param rune Initial rune.
     */
    public RuneList(final R rune)
    {
        this();
        add(rune);
    }

    @Override
    public void add(final int index, final R element)
    {
        delegate.add(index, element);
    }

    @Override
    public boolean add(final R e)
    {
        return delegate.add(e);
    }

    @Override
    public boolean addAll(final Collection<? extends R> c)
    {
        return delegate.addAll(c);
    }

    @Override
    public boolean addAll(final int index, final Collection<? extends R> c)
    {
        return delegate.addAll(index, c);
    }

    @Override
    public void clear()
    {
        delegate.clear();
    }

    @Override
    public boolean contains(final Object o)
    {
        return delegate.contains(o);
    }

    @Override
    public boolean containsAll(final Collection<?> c)
    {
        return delegate.containsAll(c);
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
            @SuppressWarnings("unchecked")
            final RuneList<R> another = (RuneList<R>)object;

            answer = (delegate == another.delegate) || delegate.equals(another.delegate);
        }

        return answer;
    }

    @Override
    public R get(final int index)
    {
        return delegate.get(index);
    }

    @Override
    public int hashCode()
    {
        return delegate.hashCode();
    }

    @Override
    public int indexOf(final Object o)
    {
        return delegate.indexOf(o);
    }

    @Override
    public boolean isEmpty()
    {
        return delegate.isEmpty();
    }

    @Override
    public Iterator<R> iterator()
    {
        return delegate.iterator();
    }

    @Override
    public int lastIndexOf(final Object o)
    {
        return delegate.lastIndexOf(o);
    }

    @Override
    public ListIterator<R> listIterator()
    {
        return delegate.listIterator();
    }

    @Override
    public ListIterator<R> listIterator(final int index)
    {
        return delegate.listIterator(index);
    }

    @Override
    public R remove(final int index)
    {
        return delegate.remove(index);
    }

    @Override
    public boolean remove(final Object o)
    {
        return delegate.remove(o);
    }

    @Override
    public boolean removeAll(final Collection<?> c)
    {
        return delegate.removeAll(c);
    }

    @Override
    public boolean retainAll(final Collection<?> c)
    {
        return delegate.retainAll(c);
    }

    @Override
    public R set(final int index, final R element)
    {
        return delegate.set(index, element);
    }

    @Override
    public int size()
    {
        return delegate.size();
    }

    @Override
    public List<R> subList(final int fromIndex, final int toIndex)
    {
        return delegate.subList(fromIndex, toIndex);
    }

    @Override
    public Object[] toArray()
    {
        return delegate.toArray();
    }

    @Override
    public <T> T[] toArray(final T[] a)
    {
        return delegate.toArray(a);
    }

    @Override
    public String toString()
    {
        final StringBuilder sb = new StringBuilder();

        if (!isEmpty())
        {
            for (int i = 0; i < size(); i++)
            {
                final R element = get(i);

                if (element == null)
                {
                    sb.append("null");
                }
                else
                {
                    sb.append(element.toString());
                }

                if (i < (size() - 1))
                {
                    sb.append("-");
                }
            }
        }

        return sb.toString();
    }
}
