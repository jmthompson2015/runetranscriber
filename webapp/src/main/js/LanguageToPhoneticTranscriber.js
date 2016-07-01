define([ "util/InputValidator" ], function(InputValidator)
{
    var LanguageToPhoneticTranscriber = function(languageToPhonemeMap, phonemeToLanguageMap)
    {
        InputValidator.validateNotNull("languageToPhonemeMap", languageToPhonemeMap);
        InputValidator.validateNotNull("phonemeToLanguageMap", phonemeToLanguageMap);

        this.languageStringToWords = function(languageString)
        {
            InputValidator.validateNotNull("languageString", languageString);

            var myLanguageString = languageString.toLowerCase();
            var answer = [];
            var word = "";

            for (var i = 0; i < myLanguageString.length; i++)
            {
                var letter = myLanguageString.substr(i, 1);

                if ([ " ", ",", ".", "'", "\n" ].includes(letter))
                {
                    if (word !== "")
                    {
                        answer.push(word)
                    };
                    answer.push(letter);
                    word = "";
                }
                else
                {
                    word += letter;
                }
            }

            if (word !== "")
            {
                answer.push(word)
            };

            return answer;
        };

        this.languageWordsToString = function(languageWords)
        {
            InputValidator.validateNotNull("languageWords", languageWords);

            return languageWords.join("");
        };

        this.transcribeForward = function(languageWords)
        {
            InputValidator.validateNotNull("languageWords", languageWords);

            var answer = [];

            var forwardMap = languageToPhonemeMap;
            var myMaxKeyLength = maxKeyLength(forwardMap);

            for (var h = 0; h < languageWords.length; h++)
            {
                var fromSequence = languageWords[h];
                var start = 0;
                var end = fromSequence.length;

                for (var i = start; i < end; i++)
                {
                    for (var j = Math.min(end - i, myMaxKeyLength); j > 0; j--)
                    {
                        var word = fromSequence.slice(i, i + j).toLowerCase();

                        if (forwardMap[word] !== undefined)
                        {
                            // addAll
                            Array.prototype.push.apply(answer, forwardMap[word]);
                            i += j - 1;
                            j = -1;
                        }

                        if (j == 1)
                        {
                            LOGGER.info("Missing transcription for language letter '" + word + "'");
                        }
                    }
                }
            }

            return answer;
        },

        this.transcribeReverse = function(phonemes)
        {
            InputValidator.validateNotNull("phonemes", phonemes);

            var languageString = "";
            var reverseMap = phonemeToLanguageMap;
            var start = 0;
            var end = phonemes.length;
            var myMaxKeyLength = maxKeyLength(reverseMap);

            for (var i = start; i < end; i++)
            {
                for (var j = Math.min(end - i, myMaxKeyLength); j > 0; j--)
                {
                    var segment = phonemes.slice(i, i + j);
                    var word = segment.join("").toLowerCase();

                    if (reverseMap[word] !== undefined)
                    {
                        languageString += reverseMap[word];
                        i += j - 1;
                        j = -1;
                    }

                    if (j == 1)
                    {
                        LOGGER.info("Missing transcription for phoneme '" + word + "'");
                    }
                }
            }

            return this.languageStringToWords(languageString);
        };

        function maxKeyLength(map)
        {
            return Object.getOwnPropertyNames(map).reduce(function(previousValue, currentValue)
            {
                return Math.max(previousValue, currentValue.length);
            }, 0);
        }
    };

    return LanguageToPhoneticTranscriber;
});
