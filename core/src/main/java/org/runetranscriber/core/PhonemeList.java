package org.runetranscriber.core;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

import org.apache.commons.collections.CollectionUtils;

/**
 * Provides a list of phonemes.
 */
public final class PhonemeList implements List<Phoneme>
{
    /** Delegate. */
    private final List<Phoneme> delegate;

    /**
     * Construct this object.
     */
    public PhonemeList()
    {
        delegate = new ArrayList<Phoneme>();
    }

    /**
     * Construct this object.
     * 
     * @param list Initial list.
     */
    public PhonemeList(final List<Phoneme> list)
    {
        if (CollectionUtils.isNotEmpty(list))
        {
            delegate = new ArrayList<Phoneme>(list);
        }
        else
        {
            delegate = new ArrayList<Phoneme>();
        }
    }

    /**
     * Construct this object.
     * 
     * @param phonemes Phonemes.
     */
    public PhonemeList(final Phoneme... phonemes)
    {
        this();

        if (phonemes != null)
        {
            for (int i = 0; i < phonemes.length; i++)
            {
                if (phonemes[i] != null)
                {
                    add(phonemes[i]);
                }
            }
        }
    }

    /**
     * Construct this object.
     * 
     * @param phoneme Initial phoneme.
     */
    public PhonemeList(final Phoneme phoneme)
    {
        this();
        add(phoneme);
    }

    @Override
    public void add(final int index, final Phoneme element)
    {
        delegate.add(index, element);
    }

    @Override
    public boolean add(final Phoneme e)
    {
        return delegate.add(e);
    }

    @Override
    public boolean addAll(final Collection<? extends Phoneme> c)
    {
        return delegate.addAll(c);
    }

    @Override
    public boolean addAll(final int index, final Collection<? extends Phoneme> c)
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
            final PhonemeList another = (PhonemeList)object;

            answer = (delegate == another.delegate) || delegate.equals(another.delegate);
        }

        return answer;
    }

    @Override
    public Phoneme get(final int index)
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
    public Iterator<Phoneme> iterator()
    {
        return delegate.iterator();
    }

    @Override
    public int lastIndexOf(final Object o)
    {
        return delegate.lastIndexOf(o);
    }

    @Override
    public ListIterator<Phoneme> listIterator()
    {
        return delegate.listIterator();
    }

    @Override
    public ListIterator<Phoneme> listIterator(final int index)
    {
        return delegate.listIterator(index);
    }

    @Override
    public Phoneme remove(final int index)
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
    public Phoneme set(final int index, final Phoneme element)
    {
        return delegate.set(index, element);
    }

    @Override
    public int size()
    {
        return delegate.size();
    }

    @Override
    public List<Phoneme> subList(final int fromIndex, final int toIndex)
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
                sb.append(get(i).getMeaning());

                if (i < (size() - 1))
                {
                    sb.append("-");
                }
            }
        }

        return sb.toString();
    }
}
