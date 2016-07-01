/*
 * <a href="http://ring-lord.tripod.com/cirth/ex_lotr.htm">From the title page, upper inscription, Lord of the Rings</a>
 */
define(
        [ "AngloSaxonRune" ],
        function(AngloSaxonRune)
        {
            "use strict";
            var AngloSaxonExample1 =
            {
                NAME: "Anglo-Saxon Example 1",

                IMAGE: "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/hobbit/TheHobbit_TitlePage1_Top_Line1.jpg",

                IMAGES: [
                        "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/hobbit/TheHobbit_TitlePage1_Top_Line1.jpg",
                        "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/hobbit/TheHobbit_TitlePage2_Top_Line1.jpg",
                        "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/hobbit/TheHobbit_TitlePage1_Top_Line2.jpg",
                        "https://rawgit.com/jmthompson2015/runetranscriber/master/core/doc/images/hobbit/TheHobbit_TitlePage2_Top_Line2.jpg", ],

                LANGUAGE_STRING:
                // Top 1 line 1
                "The hobbit, or, there and \n"
                // Top 2 line 1
                + "back again. Being the \n"
                // Top 1 line 2
                + "record of a year's journey \n"
                // Top 2 line 2
                + "made by Bilbo Baggins of \n"
                // Bottom 1 line 1
                + "Hobbiton. Compiled from his \n"
                // Bottom 2 line 1
                + "memoirs by J R R Tolkien. \n"
                // Bottom 1 line 2
                + "And published by George \n"
                // Bottom 2 line 2
                + "Allen and Unwin Ltd.",

                LANGUAGE_WORDS: [
                // Top 1 line 1
                "the", " ", "hobbit", ",", " ", "or", ",", " ", "there", " ", "and", " ", "\n",
                // Top 2 line 1
                "back", " ", "again", ".", " ", "being", " ", "the", " ", "\n",
                // Top 1 line 2
                "record", " ", "of", " ", "a", " ", "year", "'", "s", " ", "journey", " ", "\n",
                // Top 2 line 2
                "made", " ", "by", " ", "bilbo", " ", "baggins", " ", "of", " ", "\n",
                // Bottom 1 line 1
                "hobbiton", ".", " ", "compiled", " ", "from", " ", "his", " ", "\n",
                // Bottom 2 line 1
                "memoirs", " ", "by", " ", "j", " ", "r", " ", "r", " ", "tolkien", ".", " ", "\n",
                // Bottom 1 line 2
                "and", " ", "published", " ", "by", " ", "george", " ", "\n",
                // Bottom 2 line 2
                "allen", " ", "and", " ", "unwin", " ", "ltd", "." ],

                PHONEMES: [
                // Top 1 line 1
                "th", "e", " ", "h", "o", "b", "b", "i", "t", ",", " ", "o", "r", ",", " ", "th", "e", "r", "e", " ",
                        "ae", "n", "d", " ", "\n",
                        // Top 2 line 1
                        "b", "ae", "k", "k", " ", "ae", "g", "ae", "i", "n", ".", " ", "b", "e", "i", "ng", " ", "th",
                        "e", " ", "\n",
                        // Top 1 line 2
                        "r", "e", "k", "o", "r", "d", " ", "o", "f", " ", "ae", " ", "y", "ea", "r", "'", "s", " ",
                        "i", "o", "u", "r", "n", "e", "y", " ", "\n",
                        // Top 2 line 2
                        "m", "ae", "d", "e", " ", "b", "y", " ", "b", "i", "l", "b", "o", " ", "b", "ae", "g", "g",
                        "i", "n", "s", " ", "o", "f", " ", "\n",
                        // Bottom 1 line 1
                        "h", "o", "b", "b", "i", "t", "o", "n", ".", " ", "k", "o", "m", "p", "i", "l", "e", "d", " ",
                        "f", "r", "o", "m", " ", "h", "i", "s", " ", "\n",
                        // Bottom 2 line 1
                        "m", "e", "m", "o", "i", "r", "s", " ", "b", "y", " ", "i", " ", "r", " ", "r", " ", "t", "o",
                        "l", "k", "i", "e", "n", ".", " ", "\n",
                        // Bottom 1 line 2
                        "ae", "n", "d", " ", "p", "u", "b", "l", "i", "s", "h", "e", "d", " ", "b", "y", " ", "g",
                        "eo", "r", "g", "e", " ", "\n",
                        // Bottom 2 line 2
                        "ae", "l", "l", "e", "n", " ", "ae", "n", "d", " ", "u", "n", "w", "i", "n", " ", "l", "t",
                        "d", "." ],

                RUNES: [
                // Top 1 line 1
                // the
                AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE,
                // hobbit
                AngloSaxonRune.HAEGL, AngloSaxonRune.OS, AngloSaxonRune.BEORC, AngloSaxonRune.BEORC, AngloSaxonRune.IS,
                        AngloSaxonRune.TIW, AngloSaxonRune.COMMA, AngloSaxonRune.SPACE,
                        // or
                        AngloSaxonRune.OS, AngloSaxonRune.RAD, AngloSaxonRune.COMMA, AngloSaxonRune.SPACE,
                        // there
                        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.RAD, AngloSaxonRune.EH,
                        AngloSaxonRune.SPACE,
                        // and
                        AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                        AngloSaxonRune.NEWLINE,

                        // Top 2 line 1
                        // back
                        AngloSaxonRune.BEORC, AngloSaxonRune.AESC, AngloSaxonRune.CEN, AngloSaxonRune.CEN,
                        AngloSaxonRune.SPACE,
                        // again
                        AngloSaxonRune.AESC, AngloSaxonRune.GYFU, AngloSaxonRune.AESC, AngloSaxonRune.IS,
                        AngloSaxonRune.NYD, AngloSaxonRune.PERIOD, AngloSaxonRune.SPACE,
                        // being
                        AngloSaxonRune.BEORC, AngloSaxonRune.EH, AngloSaxonRune.IS, AngloSaxonRune.ING,
                        AngloSaxonRune.SPACE,
                        // the
                        AngloSaxonRune.THORN, AngloSaxonRune.EH, AngloSaxonRune.SPACE, AngloSaxonRune.NEWLINE,

                        // Top 1 line 2
                        // record
                        AngloSaxonRune.RAD, AngloSaxonRune.EH, AngloSaxonRune.CEN, AngloSaxonRune.OS,
                        AngloSaxonRune.RAD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                        // of
                        AngloSaxonRune.OS, AngloSaxonRune.FEOH, AngloSaxonRune.SPACE,
                        // a
                        AngloSaxonRune.AESC, AngloSaxonRune.SPACE,
                        // year's
                        AngloSaxonRune.YR, AngloSaxonRune.EAR, AngloSaxonRune.RAD, AngloSaxonRune.APOSTROPHE,
                        AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                        // journey
                        AngloSaxonRune.IS, AngloSaxonRune.OS, AngloSaxonRune.UR, AngloSaxonRune.RAD,
                        AngloSaxonRune.NYD, AngloSaxonRune.EH, AngloSaxonRune.YR, AngloSaxonRune.SPACE,
                        AngloSaxonRune.NEWLINE,

                        // Top 2 line 2
                        // made
                        AngloSaxonRune.MANN, AngloSaxonRune.AESC, AngloSaxonRune.DAEG, AngloSaxonRune.EH,
                        AngloSaxonRune.SPACE,
                        // by
                        AngloSaxonRune.BEORC, AngloSaxonRune.YR, AngloSaxonRune.SPACE,
                        // bilbo
                        AngloSaxonRune.BEORC, AngloSaxonRune.IS, AngloSaxonRune.LAGU, AngloSaxonRune.BEORC,
                        AngloSaxonRune.OS, AngloSaxonRune.SPACE,
                        // baggins
                        AngloSaxonRune.BEORC, AngloSaxonRune.AESC, AngloSaxonRune.GYFU, AngloSaxonRune.GYFU,
                        AngloSaxonRune.IS, AngloSaxonRune.NYD, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                        // of
                        AngloSaxonRune.OS, AngloSaxonRune.FEOH, AngloSaxonRune.SPACE, AngloSaxonRune.NEWLINE,

                        // Bottom 1 line 1
                        // hobbiton
                        AngloSaxonRune.HAEGL, AngloSaxonRune.OS, AngloSaxonRune.BEORC, AngloSaxonRune.BEORC,
                        AngloSaxonRune.IS, AngloSaxonRune.TIW, AngloSaxonRune.OS, AngloSaxonRune.NYD,
                        AngloSaxonRune.PERIOD, AngloSaxonRune.SPACE,
                        // compiled
                        AngloSaxonRune.CEN, AngloSaxonRune.OS, AngloSaxonRune.MANN, AngloSaxonRune.PEORD,
                        AngloSaxonRune.IS, AngloSaxonRune.LAGU, AngloSaxonRune.EH, AngloSaxonRune.DAEG,
                        AngloSaxonRune.SPACE,
                        // from
                        AngloSaxonRune.FEOH, AngloSaxonRune.RAD, AngloSaxonRune.OS, AngloSaxonRune.MANN,
                        AngloSaxonRune.SPACE,
                        // his
                        AngloSaxonRune.HAEGL, AngloSaxonRune.IS, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                        AngloSaxonRune.NEWLINE,

                        // Bottom 2 line 1
                        // memoirs
                        AngloSaxonRune.MANN, AngloSaxonRune.EH, AngloSaxonRune.MANN, AngloSaxonRune.OS,
                        AngloSaxonRune.IS, AngloSaxonRune.RAD, AngloSaxonRune.SIGEL, AngloSaxonRune.SPACE,
                        // by
                        AngloSaxonRune.BEORC, AngloSaxonRune.YR, AngloSaxonRune.SPACE,
                        // j r r
                        AngloSaxonRune.IS, AngloSaxonRune.SPACE, AngloSaxonRune.RAD, AngloSaxonRune.SPACE,
                        AngloSaxonRune.RAD, AngloSaxonRune.SPACE,
                        // tolkien.
                        AngloSaxonRune.TIW, AngloSaxonRune.OS, AngloSaxonRune.LAGU, AngloSaxonRune.CEN,
                        AngloSaxonRune.IS, AngloSaxonRune.EH, AngloSaxonRune.NYD, AngloSaxonRune.PERIOD,
                        AngloSaxonRune.SPACE, AngloSaxonRune.NEWLINE,

                        // Bottom 1 line 2
                        // and
                        AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                        // published
                        AngloSaxonRune.PEORD, AngloSaxonRune.UR, AngloSaxonRune.BEORC, AngloSaxonRune.LAGU,
                        AngloSaxonRune.IS, AngloSaxonRune.SIGEL, AngloSaxonRune.HAEGL, AngloSaxonRune.EH,
                        AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                        // by
                        AngloSaxonRune.BEORC, AngloSaxonRune.YR, AngloSaxonRune.SPACE,
                        // george
                        AngloSaxonRune.GYFU, AngloSaxonRune.EOH, AngloSaxonRune.RAD, AngloSaxonRune.GYFU,
                        AngloSaxonRune.EH, AngloSaxonRune.SPACE, AngloSaxonRune.NEWLINE,

                        // Bottom 2 line 2
                        // allen
                        AngloSaxonRune.AESC, AngloSaxonRune.LAGU, AngloSaxonRune.LAGU, AngloSaxonRune.EH,
                        AngloSaxonRune.NYD, AngloSaxonRune.SPACE,
                        // and
                        AngloSaxonRune.AESC, AngloSaxonRune.NYD, AngloSaxonRune.DAEG, AngloSaxonRune.SPACE,
                        // unwin
                        AngloSaxonRune.UR, AngloSaxonRune.NYD, AngloSaxonRune.WYNN, AngloSaxonRune.IS,
                        AngloSaxonRune.NYD, AngloSaxonRune.SPACE,
                        // ltd.
                        AngloSaxonRune.LAGU, AngloSaxonRune.TIW, AngloSaxonRune.DAEG, AngloSaxonRune.PERIOD, ],

                FONT_LETTERS: [ AngloSaxonRune.properties["thorn"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["haegl"].fontLetter, AngloSaxonRune.properties["os"].fontLetter,
                        AngloSaxonRune.properties["beorc"].fontLetter, AngloSaxonRune.properties["beorc"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["tiw"].fontLetter,
                        AngloSaxonRune.properties["comma"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["rad"].fontLetter,
                        AngloSaxonRune.properties["comma"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["thorn"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["rad"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["daeg"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["newline"].fontLetter,
                        AngloSaxonRune.properties["beorc"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["cen"].fontLetter, AngloSaxonRune.properties["cen"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["gyfu"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["period"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["beorc"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["ing"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["thorn"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["newline"].fontLetter, AngloSaxonRune.properties["rad"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["cen"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["rad"].fontLetter,
                        AngloSaxonRune.properties["daeg"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["feoh"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["yr"].fontLetter,
                        AngloSaxonRune.properties["ear"].fontLetter, AngloSaxonRune.properties["rad"].fontLetter,
                        AngloSaxonRune.properties["apostrophe"].fontLetter,
                        AngloSaxonRune.properties["sigel"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["os"].fontLetter,
                        AngloSaxonRune.properties["ur"].fontLetter, AngloSaxonRune.properties["rad"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["yr"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["newline"].fontLetter, AngloSaxonRune.properties["mann"].fontLetter,
                        AngloSaxonRune.properties["aesc"].fontLetter, AngloSaxonRune.properties["daeg"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["beorc"].fontLetter, AngloSaxonRune.properties["yr"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["beorc"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["lagu"].fontLetter,
                        AngloSaxonRune.properties["beorc"].fontLetter, AngloSaxonRune.properties["os"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["beorc"].fontLetter,
                        AngloSaxonRune.properties["aesc"].fontLetter, AngloSaxonRune.properties["gyfu"].fontLetter,
                        AngloSaxonRune.properties["gyfu"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["os"].fontLetter,
                        AngloSaxonRune.properties["feoh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["newline"].fontLetter, AngloSaxonRune.properties["haegl"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["beorc"].fontLetter,
                        AngloSaxonRune.properties["beorc"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["tiw"].fontLetter, AngloSaxonRune.properties["os"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["period"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["cen"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["mann"].fontLetter,
                        AngloSaxonRune.properties["peord"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["lagu"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["daeg"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["feoh"].fontLetter, AngloSaxonRune.properties["rad"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["mann"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["haegl"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["sigel"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["newline"].fontLetter,
                        AngloSaxonRune.properties["mann"].fontLetter, AngloSaxonRune.properties["eh"].fontLetter,
                        AngloSaxonRune.properties["mann"].fontLetter, AngloSaxonRune.properties["os"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["rad"].fontLetter,
                        AngloSaxonRune.properties["sigel"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["beorc"].fontLetter, AngloSaxonRune.properties["yr"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["rad"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["rad"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["tiw"].fontLetter,
                        AngloSaxonRune.properties["os"].fontLetter, AngloSaxonRune.properties["lagu"].fontLetter,
                        AngloSaxonRune.properties["cen"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["period"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["newline"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["daeg"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["peord"].fontLetter,
                        AngloSaxonRune.properties["ur"].fontLetter, AngloSaxonRune.properties["beorc"].fontLetter,
                        AngloSaxonRune.properties["lagu"].fontLetter, AngloSaxonRune.properties["is"].fontLetter,
                        AngloSaxonRune.properties["sigel"].fontLetter, AngloSaxonRune.properties["haegl"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["daeg"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["beorc"].fontLetter,
                        AngloSaxonRune.properties["yr"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["gyfu"].fontLetter, AngloSaxonRune.properties["eoh"].fontLetter,
                        AngloSaxonRune.properties["rad"].fontLetter, AngloSaxonRune.properties["gyfu"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["space"].fontLetter,
                        AngloSaxonRune.properties["newline"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["lagu"].fontLetter, AngloSaxonRune.properties["lagu"].fontLetter,
                        AngloSaxonRune.properties["eh"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["aesc"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["daeg"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["ur"].fontLetter,
                        AngloSaxonRune.properties["nyd"].fontLetter, AngloSaxonRune.properties["wynn"].fontLetter,
                        AngloSaxonRune.properties["is"].fontLetter, AngloSaxonRune.properties["nyd"].fontLetter,
                        AngloSaxonRune.properties["space"].fontLetter, AngloSaxonRune.properties["lagu"].fontLetter,
                        AngloSaxonRune.properties["tiw"].fontLetter, AngloSaxonRune.properties["daeg"].fontLetter,
                        AngloSaxonRune.properties["period"].fontLetter ],
            };

            if (Object.freeze)
            {
                Object.freeze(AngloSaxonExample1);
            }

            return AngloSaxonExample1;
        });
