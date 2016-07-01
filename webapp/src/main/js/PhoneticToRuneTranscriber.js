define([ "util/InputValidator" ], function(InputValidator)
{
    "use strict";
    var PhoneticToRuneTranscriber = function(runeCollection, phonemeToRuneMap, runeToPhonemeMap)
    {
        InputValidator.validateNotNull("runeCollection", runeCollection);
        InputValidator.validateNotNull("phonemeToRuneMap", phonemeToRuneMap);
        InputValidator.validateNotNull("runeToPhonemeMap", runeToPhonemeMap);

        this.runesToFontLetters = function(runeKeys)
        {
            InputValidator.validateNotNull("runeKeys", runeKeys);

            var answer = [];

            runeKeys.forEach(function(runeKey)
            {
                answer.push(determineFontLetter(runeKey));
            }, this);

            return answer;
        };

        this.transcribeForward = function(phonemes)
        {
            InputValidator.validateNotNull("phonemes", phonemes);

            var answer = [];
            var start = 0;
            var end = phonemes.length;
            var myMaxKeyLength = maxKeyLength(phonemeToRuneMap);

            for (var i = start; i < end; i++)
            {
                for (var j = Math.min(end - i, myMaxKeyLength); j > 0; j--)
                {
                    var segment = phonemes.slice(i, i + j);
                    var word = segment.join("");

                    if (phonemeToRuneMap[word] != null)
                    {
                        // addAll
                        Array.prototype.push.apply(answer, phonemeToRuneMap[word]);
                        i += j - 1;
                        j = -1;
                    }

                    if (j == 1)
                    {
                        LOGGER.info("Missing transcription for phoneme '" + word + "'");
                    }
                }
            }

            return answer;
        };

        this.transcribeReverse = function(runeKeys)
        {
            InputValidator.validateNotNull("runeKeys", runeKeys);

            var answer = [];
            var start = 0;
            var end = runeKeys.length;
            var myMaxKeyLength = maxKeyLength(runeToPhonemeMap);

            for (var i = start; i < end; i++)
            {
                for (var j = Math.min(end - i, myMaxKeyLength); j > 0; j--)
                {
                    var segment = runeKeys.slice(i, i + j);
                    var word = segment.join("");

                    if (runeToPhonemeMap[word] != null)
                    {
                        // addAll
                        Array.prototype.push.apply(answer, runeToPhonemeMap[word]);
                        i += j - 1;
                        j = -1;
                    }

                    if (j == 1)
                    {
                        LOGGER.info("Missing transcription for rune '" + word + "'");
                    }
                }
            }

            return answer;
        };

        function determineFontLetter(runeKey)
        {
            InputValidator.validateNotNull("runeKey", runeKey);

            var answer;

            if (Array.isArray(runeKey))
            {
                answer = [];

                for (var i = 0; i < runeKey.length; i++)
                {
                    var rune2 = runeKey[i];
                    answer.push(this.determineFontLetter(rune2));
                }
            }
            else
            {
                try
                {
                    var fontLetter = runeCollection.properties[runeKey].fontLetter;

                    if (fontLetter !== undefined)
                    {
                        answer = fontLetter;
                    }
                }
                catch (e)
                {
                    LOGGER.error("Unknown runeKey " + runeKey);
                }
            }

            return answer;
        };

        // function determinePhoneme(runeKey)
        // {
        // InputValidator.validateNotNull("runeKey", runeKey);
        //
        // var answer = "?";
        // var letter = runeToPhonemeMap[runeKey];
        //
        // if (letter)
        // {
        // answer = letter;
        // }
        // else
        // {
        // if (Array.isArray(runeKey))
        // {
        // answer = [];
        //
        // for (var i = 0; i < runeKey.length; i++)
        // {
        // answer.push(this.determinePhoneme(runeKey[i]));
        // }
        // }
        // else
        // {
        // var properties = runeCollection.properties;
        // if (!properties[runeKey]) { throw "No properties found for runeKey: " + runeKey; }
        // var phoneme = properties[runeKey].phoneme;
        //
        // answer = phoneme;
        // }
        // }
        //
        // return answer;
        // };

        // function determineRune(phoneme)
        // {
        // InputValidator.validateNotNull("phoneme", phoneme);
        //
        // var answer = "?";
        // var runeKey = phonemeToRuneMap[phoneme];
        //
        // if (runeKey)
        // {
        // answer = runeKey;
        // }
        // else
        // {
        // if (Array.isArray(phoneme))
        // {
        // answer = [];
        //
        // for (var i = 0; i < phoneme.length; i++)
        // {
        // answer.push(this.determineRune(phoneme[i]));
        // }
        // }
        // }
        //
        // return answer;
        // };

        function maxKeyLength(map)
        {
            return Object.getOwnPropertyNames(map).reduce(function(previousValue, currentValue)
            {
                return Math.max(previousValue, currentValue.length);
            }, 0);
        }
    };

    return PhoneticToRuneTranscriber;
});
