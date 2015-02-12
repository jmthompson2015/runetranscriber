var PhoneticToEnglishForTengwarTranscriber = function()
{
    var phonemeToLanguageMap = {};

    // The Lord Of The Rings
    // Christopher reversed 'e' and 'i' from J.R.R.?
    phonemeToLanguageMap["az"] = "as";
    phonemeToLanguageMap["hireen"] = "herein";
    phonemeToLanguageMap["hobbets"] = "hobbits";
    phonemeToLanguageMap["iz"] = "is";
    phonemeToLanguageMap["jhon"] = "john";
    phonemeToLanguageMap["keng"] = "king";
    phonemeToLanguageMap["riuil"] = "reuel";
    phonemeToLanguageMap["reng"] = "ring";
    phonemeToLanguageMap["sit"] = "set";
    phonemeToLanguageMap["tolkein"] = "tolkien";
    phonemeToLanguageMap["wor"] = "war";
    phonemeToLanguageMap["wistmarch"] = "westmarch";

    // The Silmarillion
    phonemeToLanguageMap["aje"] = "age";
    phonemeToLanguageMap["kome"] = "come";
    phonemeToLanguageMap["powr"] = "power";
    phonemeToLanguageMap["rekovery"] = "recovery";

    // Unfinished Tales Of Numenor And Middle-Earth
    phonemeToLanguageMap["akkount"] = "account";
    phonemeToLanguageMap["kristofer"] = "christopher";
    phonemeToLanguageMap["druedaiin"] = "druedain";

    // The War Of The Ring
    phonemeToLanguageMap["kirith"] = "cirith";

    // Sauron Defeated
    phonemeToLanguageMap["akownt"] = "account";
    phonemeToLanguageMap["kataklysm"] = "cataclysm";
    phonemeToLanguageMap["certan"] = "certain";
    phonemeToLanguageMap["destruktion"] = "destruction";
    phonemeToLanguageMap["oksford"] = "oxford";
    phonemeToLanguageMap["skolars"] = "scholars";

    this.getPhonemeToLanguageMap = function()
    {
        return phonemeToLanguageMap;
    }
}

PhoneticToEnglishForTengwarTranscriber.prototype.convertWord = function(word)
{
    var answer = word;
    var map = this.getPhonemeToLanguageMap();
    var word2 = map[word];

    if (word2)
    {
        answer = word2;
    }

    return answer;
}

PhoneticToEnglishForTengwarTranscriber.prototype.determineLanguageLetter = function(
        phoneme)
{
    var answer;

    if (Array.isArray(phoneme))
    {
        answer = "";

        for (var i = 0; i < phoneme.length; i++)
        {
            answer += this.determineLanguageLetter(phoneme[i]);
        }
    }
    else
    {
        answer = phoneme;
    }

    return answer;
}

PhoneticToEnglishForTengwarTranscriber.prototype.phonemesToLanguageWords = function(
        phonemes)
{
    var answer = [];

    var word = "";

    for (var i = 0; i < phonemes.length; i++)
    {
        var phoneme = phonemes[i];

        if (phoneme === " " || phoneme === "," || phoneme === "."
                || phoneme === "\n")
        {
            answer[answer.length] = this.convertWord(word);
            answer[answer.length] = phoneme;
            word = "";
        }
        else if (i === phonemes.length - 1)
        {
            word += this.determineLanguageLetter(phoneme);
            answer[answer.length] = this.convertWord(word);
        }
        else
        {
            word += this.determineLanguageLetter(phoneme);
        }
    }

    return answer;
}

PhoneticToEnglishForTengwarTranscriber.prototype.languageWordsToString = function(
        words)
{
    var answer = "";

    for (var i = 0; i < words.length; i++)
    {
        var word = words[i];
        answer += word;

        if ((word === "," || word === ".") && i < words.length - 1)
        {
            answer += " ";
        }
    }

    return answer;
}

if (Object.freeze)
{
    Object.freeze(PhoneticToEnglishForTengwarTranscriber);
}
