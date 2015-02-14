Array.prototype.contains = function(obj)
{
    var isArray = Array.isArray(obj);
    var i = this.length;

    while (i--)
    {
        if (isArray && Array.isArray(this[i]) && this[i].equals(obj))
        {
            return true;
        }
        else if (this[i] === obj) { return true; }
    }

    return false;
}

Array.prototype.equals = function(obj)
{
    if (this === obj) { return true; }

    if (this == null || obj == null)
    {
        LOGGER.trace("fail on null check");
        return false;
    }

    if (this.length != obj.length)
    {
        LOGGER.trace("fail on length check");
        return false;
    }

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (var i = 0; i < this.length; ++i)
    {
        if (Array.isArray(this[i]))
        {
            if (!this[i].equals(obj[i]))
            {
                LOGGER.trace("fail on subarray check: this[" + i + "] = "
                        + this[i] + ", obj[" + i + "] = " + obj[i]);
                return false;
            }
        }
        else
        {
            if (this[i] !== obj[i])
            {
                LOGGER.trace("fail on element check: this[" + i + "] = "
                        + this[i] + ", obj[" + i + "] = " + obj[i]);
                return false;
            }
        }
    }

    return true;
}
