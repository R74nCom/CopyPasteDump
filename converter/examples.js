// CONVERTER SETTINGS

charMap = { // replace SINGLE characters anywhere in the string
    "a": "4",
    "e": ["3", "€"],
    "t": "7", // takes priority over "y" for reverse
    "y": "7",
}
textMap = { // replace text anywhere in the string
    ":(": ":)",
}
wordMap = { // replace whole words only
    "suspicious": "sus",
}
phraseMap = {
    "not ryan": "imposter",
}
prefixMap = { // replace text at the start of words
    "multi": "uni"
}
suffixMap = { // replace text at the end of words
    "verse": "world"
}

function forward(text) {
    text = mapPhrases(text, phraseMap);
    text = mapWords(text, wordMap);
    text = mapCharacters(text, charMap);
    text = mapPrefixes(text, prefixMap);
    text = mapSuffixes(text, suffixMap);
    text = toBase(text,null,2) // null for plain text
    return text;
}

function backward(text) {
    // reverse order of operations
    // reverseMap will flip keys with values; specify name for performance
    text = toBase(text,2,null);
    text = mapSuffixes(text, reverseMap(suffixMap, "suffixMap"));
    text = mapPrefixes(text, reverseMap(prefixMap, "prefixMap"));
    text = mapCharacters(text, reverseMap(charMap, "charMap"));
    text = mapWords(text, reverseMap(wordMap, "wordMap"));
    text = mapPhrases(text, reverseMap(phraseMap, "phraseMap"));
    return text;
}

function backward(text) { // disable backward conversion
    return false;
}

settings = {
    // choose which examples to show
    examples: [defaultExamples.names, defaultExamples.greetings]
}