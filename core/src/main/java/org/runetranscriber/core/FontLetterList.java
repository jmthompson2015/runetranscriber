package org.runetranscriber.core;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import org.apache.commons.collections.CollectionUtils;

/**
 * Provides a list of font letters.
 * 
 * @param <F> Font letter type parameter.
 */
public final class FontLetterList<F extends FontLetter> implements List<F>
{
    /** Delegate. */
    private final List<F> delegate;

    /**
     * Construct this object.
     */
    public FontLetterList()
    {
        delegate = new ArrayList<F>();
    }

    /**
     * Construct this object.
     * 
     * @param letters Letters.
     */
    public FontLetterList(final F... letters)
    {
        this();

        if (letters != null)
        {
            for (int i = 0; i < letters.length; i++)
            {
                if (letters[i] != null)
                {
                    add(letters[i]);
                }
            }
        }
    }

    /**
     * Construct this object.
     * 
     * @param letter Initial letter.
     */
    public FontLetterList(final F letter)
    {
        this();
        add(letter);
    }

    /**
     * Construct this object.
     * 
     * @param list Initial list.
     */
    public FontLetterList(final List<F> list)
    {
        if (CollectionUtils.isNotEmpty(list))
        {
            delegate = new ArrayList<F>(list);
        }
        else
        {
            delegate = new ArrayList<F>();
        }
    }

    @Override
    public boolean add(final F e)
    {
        return delegate.add(e);
    }

    @Override
    public void add(final int index, final F element)
    {
        delegate.add(index, element);
    }

    @Override
    public boolean addAll(final Collection<? extends F> c)
    {
        return delegate.addAll(c);
    }

    @Override
    public boolean addAll(final int index, final Collection<? extends F> c)
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
            final FontLetterList<F> another = (FontLetterList<F>)object;

            answer = (delegate == another.delegate) || delegate.equals(another.delegate);
        }

        return answer;
    }

    @Override
    public F get(final int index)
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
    public Iterator<F> iterator()
    {
        return delegate.iterator();
    }

    @Override
    public int lastIndexOf(final Object o)
    {
        return delegate.lastIndexOf(o);
    }

    @Override
    public ListIterator<F> listIterator()
    {
        return delegate.listIterator();
    }

    @Override
    public ListIterator<F> listIterator(final int index)
    {
        return delegate.listIterator(index);
    }

    @Override
    public F remove(final int index)
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
    public F set(final int index, final F element)
    {
        return delegate.set(index, element);
    }

    @Override
    public int size()
    {
        return delegate.size();
    }

    @Override
    public List<F> subList(final int fromIndex, final int toIndex)
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
                final F element = get(i);

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
