define([ "example/TengwarExampleTS1", "example/TengwarExampleTS2", "example/TengwarExampleUTONAME1",
        "example/TengwarExampleUTONAME2", "example/TengwarExampleTROTS1", "example/TengwarExampleTROTS2",
        "example/TengwarExampleTTOI1", "example/TengwarExampleTTOI2", "example/TengwarExampleTWOTR1",
        "example/TengwarExampleTWOTR2", "example/TengwarExampleSD1", "example/TengwarExampleSD2",
        "example/TengwarExampleTLOTR2" ], function(TengwarExampleTS1, TengwarExampleTS2, TengwarExampleUTONAME1,
        TengwarExampleUTONAME2, TengwarExampleTROTS1, TengwarExampleTROTS2, TengwarExampleTTOI1, TengwarExampleTTOI2,
        TengwarExampleTWOTR1, TengwarExampleTWOTR2, TengwarExampleSD1, TengwarExampleSD2, TengwarExampleTLOTR2)
{
    "use strict";
    var EnglishToPhoneticForTengwarTranscriber = function()
    {
        // var languageToPhonemeMap = this.createLanguageToPhonemeMap();

        var languageToPhonemeMap = {};

        languageToPhonemeMap["\n"] = "\n";
        languageToPhonemeMap[" "] = " ";
        languageToPhonemeMap[","] = ",";
        languageToPhonemeMap["."] = ".";
        languageToPhonemeMap["account"] = [ [ "a", "k", "k" ], [ "o", "u" ], "n", "t" ];
        languageToPhonemeMap["afterwards"] = [ [ "a", "f" ], "t", [ "e", "r" ], "w", [ "a", "r" ], "d", "s" ];
        languageToPhonemeMap["age"] = [ [ "a", "j", "e" ] ];
        languageToPhonemeMap["an"] = [ [ "a", "n" ] ];
        languageToPhonemeMap["anadune"] = [ [ "a", "n" ], [ "a", "d" ], [ "u", "n", "e" ] ];
        languageToPhonemeMap["and"] = "and";
        languageToPhonemeMap["anduin"] = [ [ "a", "n" ], "d", [ "u", "i" ], "n" ];
        languageToPhonemeMap["appended"] = [ [ "a", "p", "p" ], [ "e", "n" ], "d", [ "e", "d" ] ];
        languageToPhonemeMap["aragorn"] = [ [ "a", "r" ], [ "a", "g" ], [ "o", "r" ], "n" ];
        languageToPhonemeMap["are"] = [ [ "a", "r", "e" ] ];
        languageToPhonemeMap["as"] = [ [ "a", "z" ] ];
        languageToPhonemeMap["at"] = [ [ "a", "t" ] ];
        languageToPhonemeMap["balin"] = [ "b", [ "a", "l" ], [ "i", "n" ] ];
        languageToPhonemeMap["battle"] = [ "b", [ "a", "t", "t" ], [ "l", "e" ] ];
        languageToPhonemeMap["before"] = [ [ "b", "e" ], "f", [ "o", "r", "e" ] ];
        languageToPhonemeMap["beleriand"] = [ "b", [ "e", "l" ], [ "e", "r" ], "i", [ "a", "n" ], "d" ];
        languageToPhonemeMap["beside"] = [ [ "b", "e" ], "s", [ "i", "d", "e" ] ];
        languageToPhonemeMap["bingo"] = [ "b", [ "i", "ng" ], "o" ];
        languageToPhonemeMap["book"] = [ "b", "oo", "k" ];
        languageToPhonemeMap["bore"] = [ "b", [ "o", "r", "e" ] ];
        languageToPhonemeMap["brought"] = [ "b", "r", [ "o", "u" ], "gh", "t" ];
        languageToPhonemeMap["but"] = [ "b", [ "u", "t" ] ];
        languageToPhonemeMap["by"] = [ "b", "y" ];
        languageToPhonemeMap["calembel"] = [ "c", [ "a", "l" ], [ "e", "m" ], "b", [ "e", "l" ] ];
        languageToPhonemeMap["cataclysm"] = [ "k", [ "a", "t" ], [ "a", "k" ], "l", "y", "s", "m" ];
        languageToPhonemeMap["certain"] = [ "c", [ "e", "r" ], "t", "a", "n" ];
        languageToPhonemeMap["christopher"] = [ "k", "r", [ "i", "s" ], "t", [ "o", "f" ], [ "e", "r" ] ];
        languageToPhonemeMap["cirith"] = [ "k", [ "i", "r" ], [ "i", "th" ] ];
        languageToPhonemeMap["come"] = [ "k", [ "o", "m", "e" ] ];
        languageToPhonemeMap["coming"] = [ "c", [ "o", "m" ], [ "i", "ng" ] ];
        languageToPhonemeMap["days"] = [ "d", [ "a", "y" ], "s" ];
        languageToPhonemeMap["deep"] = [ "d", [ "e", "e", "p" ] ];
        languageToPhonemeMap["deliberations"] = [ "d", [ "e", "l" ], [ "i", "b" ], [ "e", "r" ], "a", "t", "i",
                [ "o", "n" ], "s" ];
        languageToPhonemeMap["destruction"] = [ "d", [ "e", "s" ], "t", "r", [ "u", "k" ], "t", "i", [ "o", "n" ] ];
        languageToPhonemeMap["downfall"] = [ "d", [ "o", "w" ], "n", "f", [ "a", "l", "l" ] ];
        languageToPhonemeMap["drowning"] = [ "d", "r", [ "o", "w" ], "n", [ "i", "ng" ] ];
        languageToPhonemeMap["druedain"] = [ "d", "r", [ "u", "e" ], "d", "ai", [ "i", "n" ] ];
        languageToPhonemeMap["dwarf-lord"] = [ "d", "w", [ "a", "r" ], "f", "-", "l", [ "o", "r" ], "d" ];
        languageToPhonemeMap["dwelt"] = [ "d", "w", [ "e", "l" ], "t" ];
        languageToPhonemeMap["earth"] = [ [ "e", "a" ], "r", "th" ];
        languageToPhonemeMap["elder"] = [ [ "e", "l" ], "d", [ "e", "r" ] ];
        languageToPhonemeMap["elves"] = [ [ "e", "l" ], [ "v", "e" ], "s" ];
        languageToPhonemeMap["end"] = [ [ "e", "n" ], "d" ];
        languageToPhonemeMap["ending"] = [ [ "e", "n" ], "d", [ "i", "ng" ] ];
        languageToPhonemeMap["ends"] = [ [ "e", "n" ], "d", "s" ];
        languageToPhonemeMap["ents"] = [ [ "e", "n" ], "t", "s" ];
        languageToPhonemeMap["fall"] = [ "f", [ "a", "l", "l" ] ];
        languageToPhonemeMap["fangorn"] = [ "f", [ "a", "ng" ], [ "o", "r" ], "n" ];
        languageToPhonemeMap["faramir"] = [ "f", [ "a", "r" ], [ "a", "m" ], [ "i", "r" ] ];
        languageToPhonemeMap["fellowship"] = [ "f", [ "e", "l", "l" ], [ "o", "w" ], "sh", [ "i", "p" ] ];
        languageToPhonemeMap["fields"] = [ "f", [ "i", "e" ], "l", "d", "s" ];
        languageToPhonemeMap["first"] = [ "f", [ "i", "r" ], "s", "t" ];
        languageToPhonemeMap["fleet"] = [ "f", "l", [ "e", "e", "t" ] ];
        languageToPhonemeMap["followed"] = [ "f", [ "o", "l", "l" ], [ "o", "w", "e" ], "d" ];
        languageToPhonemeMap["follows"] = [ "f", [ "o", "l", "l" ], [ "o", "w" ], "s" ];
        languageToPhonemeMap["for"] = [ "f", [ "o", "r" ] ];
        languageToPhonemeMap["forest"] = [ "f", [ "o", "r" ], [ "e", "s" ], "t" ];
        languageToPhonemeMap["forms"] = [ "f", [ "o", "r" ], "m", "s" ];
        languageToPhonemeMap["forth"] = [ "f", [ "o", "r" ], "th" ];
        languageToPhonemeMap["frodo"] = [ "f", "r", [ "o", "d" ], "o" ];
        languageToPhonemeMap["from"] = [ "f", "r", [ "o", "m" ] ];
        languageToPhonemeMap["gandalf"] = [ "g", [ "a", "n" ], "d", [ "a", "l" ], "f" ];
        languageToPhonemeMap["given"] = [ "g", [ "i", "v" ], [ "e", "n" ] ];
        languageToPhonemeMap["gollum"] = [ "g", [ "o", "l", "l" ], [ "u", "m" ] ];
        languageToPhonemeMap["great"] = [ "g", "r", [ "e", "a" ], "t" ];
        languageToPhonemeMap["helms"] = [ "h", [ "e", "l" ], "m", "s" ];
        languageToPhonemeMap["herein"] = [ "h", [ "e", "r", "e" ], [ "i", "n" ] ];
        languageToPhonemeMap["him"] = [ "h", [ "i", "m" ] ];
        languageToPhonemeMap["his"] = [ "h", [ "i", "s" ] ];
        languageToPhonemeMap["history"] = [ "h", [ "i", "s" ], "t", [ "o", "r" ], "y" ];
        languageToPhonemeMap["hobbit"] = [ "h", [ "o", "b", "b" ], [ "i", "t" ] ];
        languageToPhonemeMap["hobbiton"] = [ "h", [ "o", "b", "b" ], [ "i", "t" ], [ "o", "n" ] ];
        languageToPhonemeMap["hobbits"] = [ "h", [ "o", "b", "b" ], [ "i", "t" ], "s" ];
        languageToPhonemeMap["in"] = [ [ "i", "n" ] ];
        languageToPhonemeMap["into"] = [ [ "i", "n" ], "t", "o" ];
        languageToPhonemeMap["intrusion"] = [ [ "i", "n" ], "t", "r", [ "u", "s" ], [ "i" ], [ "o", "n" ] ];
        languageToPhonemeMap["is"] = [ [ "i", "s" ] ];
        languageToPhonemeMap["isengard"] = [ [ "i", "s" ], [ "e", "n" ], "g", [ "a", "r" ], "d" ];
        languageToPhonemeMap["istari"] = [ [ "i", "s" ], "t", [ "a", "r" ], "i" ];
        languageToPhonemeMap["its"] = [ [ "i", "t" ], "s" ];
        languageToPhonemeMap["john"] = [ "j", "o", "h", "n" ];
        languageToPhonemeMap["journey"] = [ "j", [ "o", "u" ], "r", "n", [ "e", "y" ] ];
        languageToPhonemeMap["king"] = [ "k", [ "e", "ng" ] ];
        languageToPhonemeMap["land"] = [ "l", [ "a", "n" ], "d" ];
        languageToPhonemeMap["lord"] = [ "l", [ "o", "r" ], "d" ];
        languageToPhonemeMap["lothlorien"] = [ "l", [ "o", "th" ], "l", [ "o", "r" ], [ "i", "e" ], "n" ];
        languageToPhonemeMap["made"] = [ "m", [ "a", "d", "e" ] ];
        languageToPhonemeMap["many"] = [ "m", [ "a", "n" ], "y" ];
        languageToPhonemeMap["meeting"] = [ "m", [ "e", "e", "t" ], [ "i", "ng" ] ];
        languageToPhonemeMap["men"] = [ "m", [ "e", "n" ] ];
        languageToPhonemeMap["middle"] = [ "m", [ "i", "d", "d" ], [ "l", "e" ] ];
        languageToPhonemeMap["mithrandir"] = [ "m", [ "i", "th" ], "r", [ "a", "n" ], "d", [ "i", "r" ] ];
        languageToPhonemeMap["morannon"] = [ "m", [ "o", "r" ], [ "a", "n", "n" ], [ "o", "n" ] ];
        languageToPhonemeMap["morgoth"] = [ "m", [ "o", "r" ], "g", [ "o", "th" ] ];
        languageToPhonemeMap["moria"] = [ "m", [ "o", "r" ], [ "i", "a" ] ];
        languageToPhonemeMap["named"] = [ "n", [ "a", "m" ], [ "e", "d" ] ];
        languageToPhonemeMap["numenor"] = [ "n", [ "u", "m" ], [ "e", "n" ], [ "o", "r" ] ];
        languageToPhonemeMap["of"] = "of";
        languageToPhonemeMap["of the"] = "of the";
        languageToPhonemeMap["old"] = [ [ "o", "l" ], "d" ];
        languageToPhonemeMap["one"] = [ [ "o", "n", "e" ] ];
        languageToPhonemeMap["oxford"] = [ [ "o", "k" ], "s", "f", [ "o", "r" ], "d" ];
        languageToPhonemeMap["palantiri"] = [ "p", [ "a", "l" ], [ "a", "n" ], "t", [ "i", "r" ], "i" ];
        languageToPhonemeMap["pelennor"] = [ "p", [ "e", "l" ], [ "e", "n", "n" ], [ "o", "r" ] ];
        languageToPhonemeMap["power"] = [ "p", [ "o", "w" ], "r" ];
        languageToPhonemeMap["recovery"] = [ "r", [ "e", "k" ], [ "o", "v" ], [ "e", "r" ], "y" ];
        languageToPhonemeMap["return"] = [ "r", [ "e", "t" ], [ "u", "r" ], "n" ];
        languageToPhonemeMap["reuel"] = [ "r", "e", "u", [ "e", "l" ] ];
        languageToPhonemeMap["riders"] = [ "r", [ "i", "d" ], [ "e", "r" ], "s" ];
        languageToPhonemeMap["ring"] = [ "r", [ "i", "ng" ] ];
        languageToPhonemeMap["rings"] = [ "r", [ "i", "ng" ], "s" ];
        languageToPhonemeMap["rivendell"] = [ "r", [ "i", "v" ], [ "e", "n" ], "d", [ "e", "l", "l" ] ];
        languageToPhonemeMap["river"] = [ "r", [ "i", "v" ], [ "e", "r" ] ];
        languageToPhonemeMap["rohan"] = [ "r", "o", "h", [ "a", "n" ] ];
        languageToPhonemeMap["ronald"] = [ "r", [ "o", "n" ], [ "a", "l" ], "d" ];
        languageToPhonemeMap["samwise"] = [ "s", [ "a", "m" ], "w", [ "i", "s", "e" ] ];
        languageToPhonemeMap["saruman"] = [ "s", [ "a", "r" ], [ "u", "m" ], [ "a", "n" ] ];
        languageToPhonemeMap["sauron"] = [ "s", "a", [ "u", "r" ], [ "o", "n" ] ];
        languageToPhonemeMap["scholars"] = [ "s", "k", [ "o", "l" ], [ "a", "r" ], "s" ];
        languageToPhonemeMap["seen"] = [ "s", "e", "e", "n" ];
        languageToPhonemeMap["set"] = [ "s", [ "e", "t" ] ];
        languageToPhonemeMap["shadow"] = [ "sh", [ "a", "d" ], [ "o", "w" ] ];
        languageToPhonemeMap["shire"] = [ "sh", [ "i", "r", "e" ] ];
        languageToPhonemeMap["silmarils"] = [ "s", [ "i", "l" ], "m", [ "a", "r" ], [ "i", "l" ], "s" ];
        languageToPhonemeMap["son"] = [ "s", [ "o", "n" ] ];
        languageToPhonemeMap["stairs"] = [ "s", "t", "ai", "r", "s" ];
        languageToPhonemeMap["story"] = [ "s", "t", [ "o", "r" ], "y" ];
        languageToPhonemeMap["tales"] = [ "t", [ "a", "l", "e" ], "s" ];
        languageToPhonemeMap["the"] = "the";
        languageToPhonemeMap["their"] = [ "th", [ "e", "i" ], "r" ];
        languageToPhonemeMap["then"] = [ "th", [ "e", "n" ] ];
        languageToPhonemeMap["these"] = [ "th", [ "e", "s", "e" ] ];
        languageToPhonemeMap["things"] = [ "th", [ "i", "ng" ], "s" ];
        languageToPhonemeMap["third"] = [ "th", [ "i", "r" ], "d" ];
        languageToPhonemeMap["this"] = [ "th", [ "i", "s" ] ];
        languageToPhonemeMap["through"] = [ "th", "r", [ "o", "u" ], "gh" ];
        languageToPhonemeMap["to"] = [ "t", "o" ];
        languageToPhonemeMap["together"] = [ "t", [ "o", "g" ], [ "e", "th" ], [ "e", "r" ] ];
        languageToPhonemeMap["told"] = [ "t", [ "o", "l" ], "d" ];
        languageToPhonemeMap["tolkien"] = [ "t", [ "o", "l" ], "k", "i", [ "e", "n" ] ];
        languageToPhonemeMap["tomb"] = [ "t", [ "o", "m" ], "b" ];
        languageToPhonemeMap["traced"] = [ "t", "r", [ "a", "c", "e" ], "d" ];
        languageToPhonemeMap["traitor"] = [ "t", "r", "ai", "t", [ "o", "r" ] ];
        languageToPhonemeMap["treason"] = [ "t", "r", [ "e", "a" ], "s", [ "o", "n" ] ];
        languageToPhonemeMap["umbar"] = [ [ "u", "m" ], "b", [ "a", "r" ] ];
        languageToPhonemeMap["unfinished"] = [ [ "u", "n" ], "f", [ "i", "n" ], [ "i", "sh" ], [ "e", "d" ] ];
        languageToPhonemeMap["ungol"] = [ [ "u", "ng" ], [ "o", "l" ] ];
        languageToPhonemeMap["upon"] = [ [ "u", "p" ], [ "o", "n" ] ];
        languageToPhonemeMap["victory"] = [ "v", [ "i", "c" ], "t", [ "o", "r" ], "y" ];
        languageToPhonemeMap["volume"] = [ "v", [ "o", "l" ], [ "u", "m", "e" ] ];
        languageToPhonemeMap["war"] = [ "w", [ "a", "r" ] ];
        languageToPhonemeMap["was"] = [ [ "w", "a" ], "s" ];
        languageToPhonemeMap["weathertop"] = [ "w", [ "e", "a" ], "th", [ "e", "r" ], "t", [ "o", "p" ] ];
        languageToPhonemeMap["west"] = [ "w", [ "e", "s" ], "t" ];
        languageToPhonemeMap["westmarch"] = [ "w", [ "i", "s" ], "t", "m", [ "a", "r" ], "ch" ];
        languageToPhonemeMap["when"] = [ "wh", [ "e", "n" ] ];
        languageToPhonemeMap["which"] = [ "wh", [ "i", "ch" ] ];
        languageToPhonemeMap["who"] = [ "wh", "o" ];
        languageToPhonemeMap["with"] = [ "w", [ "i", "th" ] ];
        languageToPhonemeMap["zigur"] = [ "z", [ "i", "g" ], [ "u", "r" ] ];

        this.getLanguageToPhonemeMap = function()
        {
            return languageToPhonemeMap;
        }
    }

    EnglishToPhoneticForTengwarTranscriber.prototype.PUNCTUATION = [ " ", ",", ".", "\n" ];

    EnglishToPhoneticForTengwarTranscriber.prototype.VOWELS = [ "a", "e", "i", "o", "u" ];

    EnglishToPhoneticForTengwarTranscriber.prototype.createLanguageToPhonemeMap = function()
    {
        var answer = {};

        // Inconsistencies.
        answer["named"] = [ "n", [ "a", "m" ], [ "e", "d" ] ];
        answer["return"] = [ "r", [ "e", "t" ], [ "u", "r" ], "n" ];
        answer["set"] = [ "s", [ "e", "t" ] ];
        answer["to"] = [ "t", "o" ];
        answer["war"] = [ "w", [ "a", "r" ] ];

        var examples = [ TengwarExampleTS1, TengwarExampleTS2, TengwarExampleUTONAME1, TengwarExampleUTONAME2,
                TengwarExampleTROTS1, TengwarExampleTROTS2, TengwarExampleTTOI1, TengwarExampleTTOI2,
                TengwarExampleTWOTR1, TengwarExampleTWOTR2, TengwarExampleSD1, TengwarExampleSD2,
                // TLOTR last because J.R.R. uses a different approach than
                // Christopher.
                TengwarExampleTLOTR2 ];

        for (var i = 0; i < examples.length; i++)
        {
            var example = examples[i];
            var languageWords = example.LANGUAGE_WORDS;
            var phonemeWords = this.phonemesToPhonemeWords(example.PHONEMES);

            for (var j = 0; j < languageWords.length; j++)
            {
                var languageWord = languageWords[j];
                var phonemeWord = phonemeWords[j];

                if (answer[languageWord] === undefined)
                {
                    answer[languageWord] = phonemeWord;
                }
                // else if (answer[languageWord] !== phonemeWord)
                // {
                // LOGGER.warn("different entry for _" + languageWord + "_: _"
                // + answer[languageWord] + "_ or _" + phonemeWord + "_");
                // }
            }
        }

        return answer;
    }

    EnglishToPhoneticForTengwarTranscriber.prototype.isConsonant = function(letter)
    {
        return letter !== "" && !this.isVowel(letter) && !this.isPunctuation(letter);
    }

    EnglishToPhoneticForTengwarTranscriber.prototype.isPunctuation = function(letter)
    {
        return this.PUNCTUATION.contains(letter);
    }

    EnglishToPhoneticForTengwarTranscriber.prototype.isVowel = function(letter)
    {
        return this.VOWELS.contains(letter);
    }

    EnglishToPhoneticForTengwarTranscriber.prototype.languageStringToWords = function(string)
    {
        var answer = [];
        var word = "";

        for (var i = 0; i < string.length; i++)
        {
            var letter = string.charAt(i);

            if (word === "of" && string.substring(i, i + 4) === " the")
            {
                answer[answer.length] = "of the";
                i += 4;

                if (i < string.length)
                {
                    letter = string.charAt(i);
                    answer[answer.length] = letter;
                    word = "";
                }
            }
            else if (letter === " " || letter === "," || letter === "." || letter === "\n")
            {
                if (word !== "")
                {
                    answer[answer.length] = word;
                    answer[answer.length] = letter;
                    word = "";
                }
            }
            else if (i === string.length - 1 && word !== "")
            {
                word += letter;
                answer[answer.length] = word;
            }
            else
            {
                word += letter;
            }
        }

        return answer;
    }

    EnglishToPhoneticForTengwarTranscriber.prototype.languageWordsToPhonemes = function(words)
    {
        var answer = [];
        var map = this.getLanguageToPhonemeMap();

        for (var i = 0; i < words.length; i++)
        {
            var word = words[i].toLowerCase();

            if (this.isPunctuation(word))
            {
                answer[answer.length] = word;
            }
            else
            {
                for (var start = 0; start < word.length; start++)
                {
                    var isDone = false;

                    for (var end = word.length; end > 0; end--)
                    {
                        var word2 = word.substring(start, end);
                        var phoneme = map[word2];

                        if (phoneme !== undefined)
                        {
                            if (Array.isArray(phoneme))
                            {
                                for (var j = 0; j < phoneme.length; j++)
                                {
                                    answer[answer.length] = phoneme[j];
                                }
                            }
                            else
                            {
                                answer[answer.length] = phoneme;
                            }

                            // End loops.
                            start += end - 1;
                            end = -1;
                            isDone = true;
                        }
                    }

                    if (!isDone)
                    {
                        var letter0 = word.charAt(start);
                        var letter1 = word.charAt(start + 1);
                        var letter2 = word.charAt(start + 2);
                        var letter3 = word.charAt(start + 3);

                        if (this.isVowel(letter0) && this.isConsonant(letter1) && this.isVowel(letter2) &&
                                (letter3 === "s" || letter3 === ""))
                        {
                            // group vowel-consonant-vowel at end of word or
                            // followed by s.
                            answer[answer.length] = [ letter0, letter1, letter2 ];
                            start += 2;
                        }
                        else if (this.isVowel(letter0) && this.isConsonant(letter1) && this.isConsonant(letter2) &&
                                letter1 === letter2)
                        {
                            // group vowel-double consonants
                            answer[answer.length] = [ letter0, letter1, letter2 ];
                            start += 2;
                        }
                        else if (this.isVowel(letter0) && this.isConsonant(letter1))
                        {
                            // group vowel-consonant
                            answer[answer.length] = [ letter0, letter1 ];
                            start++;
                        }
                        else
                        {
                            answer[answer.length] = letter0;
                        }
                    }
                }
            }
        }

        return answer;
    }

    EnglishToPhoneticForTengwarTranscriber.prototype.phonemesToPhonemeWords = function(phonemes)
    {
        var answer = [];
        var word = [];

        for (var i = 0; i < phonemes.length; i++)
        {
            var letter = phonemes[i];

            if (letter === "and" || letter === "of" || letter === "of the" || letter === "the")
            {
                answer[answer.length] = letter;
                word = [];
            }
            else if (this.isPunctuation(letter))
            {
                if (word.length > 0)
                {
                    answer[answer.length] = word;
                }

                answer[answer.length] = letter;
                word = [];
            }
            else if (i === phonemes.length - 1 && word.length > 0)
            {
                word[word.length] = letter;
                answer[answer.length] = word;
            }
            else
            {
                word[word.length] = letter;
            }
        }

        return answer;
    }

    EnglishToPhoneticForTengwarTranscriber.prototype.arrayToString = function(value)
    {
        var answer = "";

        if (value === "\n")
        {
            answer = "\"\\n\"";
        }
        else if (typeof value === "string")
        {
            answer = "\"" + value + "\"";
        }
        else if (Array.isArray(value))
        {
            answer += "[";

            for (var j = 0; j < value.length; j++)
            {
                if (Array.isArray(value[j]))
                {
                    answer += this.arrayToString(value[j]);
                }
                else
                {
                    answer += "\"" + value[j] + "\"";
                }

                if (j < value.length - 1)
                {
                    answer += ", ";
                }
            }

            answer += "]";
        }

        return answer;
    }

    EnglishToPhoneticForTengwarTranscriber.prototype.mapToString = function(result)
    {
        var answer = "";
        var properties = Object.getOwnPropertyNames(result);
        properties.sort();

        for (var i = 0; i < properties.length; i++)
        {
            var property = properties[i];
            var propertyString;

            if (property === "\n")
            {
                propertyString = "\"\\n\"";
            }
            else
            {
                propertyString = "\"" + property + "\"";
            }

            var value = result[property];
            var valueString;

            if (value === "\n")
            {
                valueString = "\"\\n\"";
            }
            else if (typeof value === "string")
            {
                valueString = "\"" + value + "\"";
            }
            else if (Array.isArray(value))
            {
                valueString = this.arrayToString(value);
            }
            else
            {
                valueString = value;
            }

            answer += "languageToPhonemeMap[" + propertyString + "] = " + valueString + ";\n";
        }

        return answer;
    }

    if (Object.freeze)
    {
        Object.freeze(EnglishToPhoneticForTengwarTranscriber);
    }

    return EnglishToPhoneticForTengwarTranscriber;
});
