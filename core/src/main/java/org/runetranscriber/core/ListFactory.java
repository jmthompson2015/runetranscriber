package org.runetranscriber.core;

import java.util.List;

/**
 * Defines methods required by a list factory.
 * 
 * @param <L> List type.
 * @param <E> Element type.
 */
public interface ListFactory<L extends List<E>, E>
{
    /**
     * @return a new empty list.
     */
    L create();

    /**
     * @param list Another list.
     * 
     * @return a new list filled with the contents of the parameter.
     */
    L create(List<E> list);
}
