define(function()
{
    Array.prototype.split = function(delimiter)
    {
        var answer = [];
        var myDelimiter = (delimiter ? delimiter : "\n");

        var index = this.indexOf(myDelimiter);

        if (index < 0)
        {
            answer.push(this);
        }
        else
        {
            var fromIndex = 0;

            while (index >= 0)
            {
                answer.push(this.slice(fromIndex, index));
                fromIndex = index + 1;
                index = this.indexOf(myDelimiter, fromIndex);
            }

            answer.push(this.slice(fromIndex));
        }

        return answer;
    };
});
