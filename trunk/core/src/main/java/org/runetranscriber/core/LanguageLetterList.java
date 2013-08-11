package org.runetranscriber.core;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import org.apache.commons.collections.CollectionUtils;

/**
 * Provides a list of language letters.
 */
public final class LanguageLetterList implements List<String>
{
    /** Delegate. */
    private final List<String> delegate;

    /**
     * Construct this object.
     */
    public LanguageLetterList()
    {
        delegate = new ArrayList<String>();
    }

    /**
     * Construct this object.
     * 
     * @param list Initial list.
     */
    public LanguageLetterList(final List<String> list)
    {
        if (CollectionUtils.isNotEmpty(list))
        {
            delegate = new ArrayList<String>(list);
        }
        else
        {
            delegate = new ArrayList<String>();
        }
    }

    /**
     * Construct this object.
     * 
     * @param languageLetters Initial language letters.
     */
    public LanguageLetterList(final String languageLetters)
    {
        this();
        addAll(ListUtilities.convert(languageLetters));
    }

    @Override
    public void add(final int index, final String element)
    {
        delegate.add(index, element);
    }

    @Override
    public boolean add(final String e)
    {
        return delegate.add(e);
    }

    @Override
    public boolean addAll(final Collection<? extends String> c)
    {
        return delegate.addAll(c);
    }

    @Override
    public boolean addAll(final int index, final Collection<? extends String> c)
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
            final LanguageLetterList another = (LanguageLetterList)object;

            answer = (delegate == another.delegate) || delegate.equals(another.delegate);
        }

        return answer;
    }

    @Override
    public String get(final int index)
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
    public Iterator<String> iterator()
    {
        return delegate.iterator();
    }

    @Override
    public int lastIndexOf(final Object o)
    {
        return delegate.lastIndexOf(o);
    }

    @Override
    public ListIterator<String> listIterator()
    {
        return delegate.listIterator();
    }

    @Override
    public ListIterator<String> listIterator(final int index)
    {
        return delegate.listIterator(index);
    }

    @Override
    public String remove(final int index)
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
    public String set(final int index, final String element)
    {
        return delegate.set(index, element);
    }

    @Override
    public int size()
    {
        return delegate.size();
    }

    @Override
    public List<String> subList(final int fromIndex, final int toIndex)
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
        return ListUtilities.convert(delegate);
    }
}
