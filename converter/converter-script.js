defaultSeeMore = {
    // "bold": "Bold Text Converter",
}
defaultExamples = {
    // https://github.com/aruljohn/popular-baby-names - MIT License
    names: ["Liam","Noah","Oliver","Elijah","James","William","Benjamin","Lucas","Henry","Theodore","Jack","Levi","Alexander","Jackson","Mateo","Daniel","Michael","Mason","Sebastian","Ethan","Logan","Owen","Samuel","Jacob","Asher","Aiden","John","Joseph","Wyatt","David","Leo","Luke","Julian","Hudson","Grayson","Matthew","Ezra","Gabriel","Carter","Isaac","Jayden","Luca","Anthony","Dylan","Lincoln","Thomas","Maverick","Elias","Josiah","Charles","Caleb","Christopher","Ezekiel","Miles","Jaxon","Isaiah","Andrew","Joshua","Nathan","Nolan","Adrian","Cameron","Santiago","Eli","Aaron","Ryan","Angel","Cooper","Waylon","Easton","Kai","Christian","Landon","Colton","Roman","Axel","Brooks","Jonathan","Robert","Jameson","Ian","Everett","Greyson","Wesley","Jeremiah","Hunter","Leonardo","Jordan","Jose","Bennett","Silas","Nicholas","Parker","Beau","Weston","Austin","Connor","Olivia","Emma","Charlotte","Amelia","Ava","Sophia","Isabella","Mia","Evelyn","Harper","Luna","Camila","Gianna","Elizabeth","Eleanor","Ella","Abigail","Sofia","Avery","Scarlett","Emily","Aria","Penelope","Chloe","Layla","Mila","Nora","Hazel","Madison","Ellie","Lily","Nova","Isla","Grace","Violet","Aurora","Riley","Zoey","Willow","Emilia","Stella","Zoe","Victoria","Hannah","Addison","Leah","Lucy","Eliana","Ivy","Everly","Lillian","Paisley","Elena","Naomi","Maya","Natalie","Kinsley","Delilah","Claire","Audrey","Aaliyah","Ruby","Brooklyn","Alice","Aubrey","Autumn","Leilani","Savannah","Valentina","Kennedy","Madelyn","Josephine","Bella","Skylar","Genesis","Sophie","Hailey","Sadie","Natalia","Quinn","Caroline","Allison","Gabriella","Anna","Serenity","Nevaeh","Cora","Ariana","Emery","Lydia","Jade","Sarah","Eva","Adeline","Madeline","Piper","Rylee"],
    countries: ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua & Deps","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Rep","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","East Timor","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea North","Korea South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Burma","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Nigeria","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","St Kitts & Nevis","St Lucia","Saint Vincent & the Grenadines","Samoa","San Marino","Sao Tome & Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"],
    greetings: ["Merry Christmas!","Happy Halloween!","Happy Easter!","Hello!","Good morning!","Have a nice day!","Goodnight, sleep tight!","Happy New Year!","Merry Christmas Eve!","Happy Valentine's Day!","Good afternoon!","Happy Independence Day!","Happy St. Patrick's Day!","Happy Hanukkah!","Happy Kwanzaa!","Happy Pride Month!","Happy Father's Day!","Happy Flag Day!","Happy Juneteenth!","Happy 4th of July!","As-salaam Alaykum","Shana Tova!","Happy Labor Day!","Happy Thanksgiving!","Happy Valentine's Day!","Season's Greetings","Happy Birthday","Ramadan Mubarak","Eid Mubarak!","Welcome!","Happy Tax Day?","Happy April Fools' Day!","¡Feliz Cinco de Mayo!","¡Feliz Navidad!"],
    general: ["Black Lives Matter","Thanks for everything","I'm sorry...","c.R74n.com","ABCDEFGHIJKLMNOPQRSTUVWXYZ","1234567890","The quick brown fox jumps over the lazy dog.","I love you!","Aesthetic","Be yourself","Keep calm","ATTENTION","WARNING","Announcement","he/him","he/they","she/her","she/they","they/them","Rules","Roles","Hello, world!","Any Pronouns","Pronouns","Server Rules","Tutorial","IMPORTANT","Cool","Awesome","Fancy","Help","Trigger Warning","Content Warning","Pride"],
    platforms: ["Instagram","Twitter","TikTok","YouTube","Twitch","Discord","Minecraft","Reddit","Among Us","WhatsApp","Apple","Windows","Zoom","Slack","GitHub","Snapchat","Facebook","Pinterest","iOS","Android","Google","Clubhouse","House Party"],
}

// old browser support
if (!String.prototype.replaceAll) {String.prototype.replaceAll = function(str, newStr){if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {return this.replace(str, newStr);}return this.replace(new RegExp(str, 'g'), newStr);};}

const whitespaceRegex = /[\s\uFEFF\u200B]+/g;
const punctuationRegex = /[`~!¡¿‼‽⁇⁈⁉！@#$¢£€¥%\^&\*\(\)\-‐‑‒–—―_\+×÷=\[\]\{\}\|\\;:：；'‘’"“”„＂＇‚‛❛❜❟‟«»<>,\.…\/⁄\?¶⁋❡§†‡°]+/g;
// combine both regexes into one programmatically
const whitespacePuncRegex = new RegExp(whitespaceRegex.source + "|" + punctuationRegex.source, "g");

mapCache = {};
defaultSettings = {};

function choose(a) {
    // if a is an array, choose a random item from it
    if (Array.isArray(a)) {
        return a[Math.floor(Math.random() * a.length)];
    }
    return a;
}
function toBase(text, inputBase, outputBase, sep, zeros) {
    if (sep===undefined) { sep = " "; }
    // null = plain text
    if (inputBase == null) {
        text = text.split("");
        for (var i = 0; i < text.length; i++) {
            text[i] = text[i].charCodeAt(0);
        }
        inputBase = 10;
    }
    else { text = text.split(sep); }
    for (var i = 0; i < text.length; i++) {
        text[i] = parseInt(text[i], inputBase);
        if (outputBase == null) { text[i] = String.fromCharCode(text[i]); }
        else { text[i] = text[i].toString(outputBase); }
        // if base is 2, add leading zeros
        if (zeros) { text[i] = text[i].padStart(8, "0"); }
    }
    if (outputBase == null) { text = text.join(""); }
    else { text = text.join(sep); }
    return text;
}
function mapCharacters(text, map, sep) {
    var newtext = "";
    text = [...text];
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        if (sep && i !== 0) { newtext += sep; }
        if (map[char]) {
            newtext += choose(map[char]);
        }
        else if (map[char.toLowerCase()]) {
            newtext += choose(map[char.toLowerCase()]).toUpperCase();
        }
        else { newtext += char; }
    }
    return newtext;
}
function mapText(text, map) {
    // replace each key in map with its value, case insensitive
    for (var key in map) {
        var regex = new RegExp(key, "gi");
        text = text.replaceAll(regex, choose(map[key]));
    }
    return text;
}
function normalize(text) {
    text = text.toLowerCase();
    return text;
}
function forEachWord(text, func) {
    // store the whitespace/punctuation matches and split the text
    var tempWhitespace = text.match(whitespacePuncRegex);
    text = text.split(whitespacePuncRegex);
    // loop through each word in the text
    for (var i = 0; i < text.length; i++) {
        var textWord = text[i];
        text[i] = func(textWord);
    }
    var newtext = "";
    // join the text back together with the correct whitespace/punctuation
    for (var i = 0; i < text.length; i++) {
        if (i !== 0) { newtext += tempWhitespace[i-1]; }
        newtext += text[i];
    }
    return newtext;
}
function mapWords(text, map) {
    var normalizedMap = {};
    for (var word in map) {
        normalizedMap[normalize(word)] = map[word];
    }
    return forEachWord(text, function(word){
        normalizedWord = normalize(word);
        if (normalizedMap[normalizedWord]) { return choose(normalizedMap[normalizedWord]); }
        return word;
    });
}
function mapPrefixes(text, map) {
    var normalizedMap = {};
    for (var prefix in map) {
        normalizedMap[normalize(prefix)] = map[prefix];
    }
    return forEachWord(text, function(word){
        // change prefixes to their mapped values
        for (var prefix in normalizedMap) {
            // use substring to see if the word starts with the prefix
            if (normalize(word).substring(0, prefix.length) === prefix) {
                return choose(normalizedMap[prefix]) + word.substring(prefix.length);
            }
        }
        return word;
    });
}
function mapSuffixes(text, map) {
    var normalizedMap = {};
    for (var suffix in map) {
        normalizedMap[normalize(suffix)] = map[suffix];
    }
    return forEachWord(text, function(word){
        // change suffixes to their mapped values
        for (var suffix in normalizedMap) {
            // use substring to see if the word ends with the suffix
            if (normalize(word).substring(word.length - suffix.length) === suffix) {
                return word.substring(0, word.length - suffix.length) + choose(normalizedMap[suffix]);
            }
        }
        return word;
    });
}
function mapPhrases(text, map) {
    // replace multiple words, separated by whitespace or at ends
    for (var phrase in map) {
        // regex that replaces spaces with the whitespace regex
        var tempregex = phrase.replace(/ /g, whitespaceRegex.source);
        // find this regex between whitespace, or at the start/end of the string
        var regex = new RegExp("(^|"+whitespacePuncRegex.source+")("+tempregex+")($|"+whitespacePuncRegex.source+")", "gi");
        // loop through each match, and replace it with the random choose() mapped value
        var matches = text.match(regex, "gi");
        var tempregex = new RegExp(tempregex, "gi");
        if (matches) {
            for (var i = 0; i < matches.length; i++) {
                var match = matches[i];
                var matchtext = match.match(tempregex)[0];
                console.log(matchtext);
                text = text.replace(matchtext, choose(map[phrase]));
            }
        }
        console.log(tempregex);
    }
    return text;
}

function reverseMap(map, name) {
    if (name && mapCache[name+"-rv"]) { return mapCache[name+"-rv"]; }
    var newmap = {};
    for (var key in map) {
        // if the value is an array, add each item in the array to the new map
        if (Array.isArray(map[key])) {
            for (var i = 0; i < map[key].length; i++) {
                if (newmap[map[key][i]]) { continue }
                newmap[map[key][i]] = key;
            } continue;
        }
        // skip if already exists
        if (newmap[map[key]]) { continue }
        newmap[map[key]] = key;
    }
    if (name) {
        name = name+"-rv";
        mapCache[name] = newmap;
    }
    return newmap;
}

function modeButtonPress(button) {
    if (button.getAttribute("selected") == "true") { return; }
    var optionGroup = button.parentElement;
    if (optionGroup.id) {
        settings[optionGroup.id] = button.id;
    }
    var buttons = optionGroup.querySelectorAll("input[type=button]");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("selected", "false");
    }
    button.setAttribute("selected", "true");
    updateForward(undefined,true);
}
function checkboxPress(checkbox) {
    if (checkbox.id) { settings[checkbox.id] = checkbox.checked; }
    updateForward(undefined,true);
}
function textInputChange(textInput) {
    if (textInput.id) { settings[textInput.id] = textInput.value; }
    updateForward();
}
function rangeChange(range) {
    if (range.id) { settings[range.id] = parseInt(range.value); }
    updateForward();
}
function langSelectChange(select) {
    if (select.id) { settings[select.id] = select.value; }
    updateForward(undefined,true);
}

timeout = null;
function updateForward(newinput,force) {
    if (timeout) {
        clearTimeout(timeout);
    }
    if (newinput) {
        document.getElementById("inputArea").value = newinput;
    }
    timeout = setTimeout(function() {
        var inputArea = document.getElementById("inputArea");
        var outputArea = document.getElementById("outputArea");
        var newOutput = "";
        if (typeof forward === "undefined") { newOutput = inputArea.value; }
        else { newOutput = forward(inputArea.value); }
        outputArea.value = newOutput;
        // remove converterLoading class from converter sides
        document.getElementById("converterLeft").classList.remove("converterLoading");
        document.getElementById("converterRight").classList.remove("converterLoading");
    }, (force ? 100 : 250) );
    // add converterLoading class to converterRight
    document.getElementById("converterRight").classList.add("converterLoading");
    document.getElementById("arrow").innerHTML = "⇄";
}
function updateBackward(newinput,force) {
    if (timeout) {
        clearTimeout(timeout);
    }
    if (newinput) {
        document.getElementById("outputArea").value = newinput;
    }
    timeout = setTimeout(function() {
        var inputArea = document.getElementById("inputArea");
        var outputArea = document.getElementById("outputArea");
        var newInput = "";
        if (typeof backward === "undefined") { newInput = outputArea.value; }
        else { newInput = backward(outputArea.value); }
        inputArea.value = newInput;
        // remove converterLoading class from converter sides
        document.getElementById("converterLeft").classList.remove("converterLoading");
        document.getElementById("converterRight").classList.remove("converterLoading");
    }, (force ? 100 : 250) );
    // add converterLoading class to converterLeft
    document.getElementById("converterLeft").classList.add("converterLoading");
    document.getElementById("arrow").innerHTML = "⇆";
}

function updateURL(reverse) {
    var params = "";
    if (!reverse) {
        params += "?text="+encodeURIComponent(document.getElementById("inputArea").value);
    }
    else {
        params += "?output="+encodeURIComponent(document.getElementById("outputArea").value);
    }
    var inputs = document.querySelectorAll("input");
    // loop through inputs and selects
    for (var i = 0; i < inputs.length; i++) {
        var element = inputs[i];
        if (element.type === "button") {
            if (settings[element.parentElement.id] !== undefined && element.getAttribute("selected") === "true") {
                // skip if defaultSettings value is the same
                if (settings[element.parentElement.id] === defaultSettings[element.parentElement.id]) { continue; }
                params += "&"+element.parentElement.id+"="+element.id;
            }
            continue;
        }
        if (element.type === "checkbox") {
            if (settings[element.id] !== undefined && element.checked === defaultSettings[element.id]) {
                // skip if defaultSettings value is the same
                if (settings[element.id] === defaultSettings[element.id]) { continue; }
                params += "&"+element.id+"="+element.checked;
            }
        }
        if (settings[element.id] === undefined || element.value === defaultSettings[element.id]) { continue; }
        params += "&"+element.id+"="+element.value;
    }
    var selects = document.querySelectorAll("select");
    for (var i = 0; i < selects.length; i++) {
        var element = selects[i];
        if (settings[element.id] === undefined || element.value === defaultSettings[element.id]) { continue; }
        params += "&"+element.id+"="+element.value;
    }
    window.history.replaceState({}, "", params);
}


function initConverter() {
    loaded = true;

    if (typeof settings === "undefined") {
        settings = {};
    }
    // loop through .optionGroup elements
    var optionGroups = document.getElementsByClassName("optionGroup");
    for (var i = 0; i < optionGroups.length; i++) {
        var optionGroup = optionGroups[i];
        if (optionGroup.id) {
            // find input type=button selected=true
            var selectedButton = optionGroup.querySelector("input[type=button][selected=true]");
            if (selectedButton) {
                settings[optionGroup.id] = selectedButton.id;
                defaultSettings[optionGroup.id] = selectedButton.id;
            }
        }
        var buttons = optionGroup.querySelectorAll("input[type=button]");
        for (var j = 0; j < buttons.length; j++) {
            var button = buttons[j];
            button.addEventListener("click", function(){ modeButtonPress(this); });
        }
        var checkboxes = optionGroup.querySelectorAll("input[type=checkbox]");
        for (var j = 0; j < checkboxes.length; j++) {
            var checkbox = checkboxes[j];
            if (checkbox.id) {
                settings[checkbox.id] = checkbox.checked;
                defaultSettings[checkbox.id] = checkbox.checked;
            }
            checkbox.addEventListener("change", function(){ checkboxPress(this); });
        }
        var textInputs = optionGroup.querySelectorAll("input[type=text]");
        for (var j = 0; j < textInputs.length; j++) {
            var textInput = textInputs[j];
            if (textInput.id) {
                settings[textInput.id] = textInput.value;
                defaultSettings[textInput.id] = textInput.value;
            }
            textInput.addEventListener("input", function(){ textInputChange(this); });
        }
        var ranges = optionGroup.querySelectorAll("input[type=range]");
        for (var j = 0; j < ranges.length; j++) {
            var range = ranges[j];
            if (range.id) {
                settings[range.id] = parseInt(range.value);
                defaultSettings[range.id] = range.value;
            }
            range.addEventListener("input", function(){ rangeChange(this); });
        }
    }
    // selects in converterLeft and converterRight
    var selects = document.querySelectorAll("#converterLeft select, #converterRight select");
    for (var i = 0; i < selects.length; i++) {
        var select = selects[i];
        if (select.id) {
            settings[select.id] = select.value;
            defaultSettings[select.id] = select.value;
        }
        select.addEventListener("change", function(){ langSelectChange(this); });
        // extra spacing for text areas with selects
        var textarea = select.parentElement.querySelector("textarea");
        if (textarea) { textarea.style.paddingBottom = "50px"; }
    }

    // inputArea and outputArea
    var inputArea = document.getElementById("inputArea");
    var outputArea = document.getElementById("outputArea");
    if (inputArea) {inputArea.addEventListener("input", function(){ updateForward(); }); }
    if (outputArea) { outputArea.addEventListener("input", function(){ updateBackward(); }); }
    var arrow = document.getElementById("arrow");
    if (arrow) {
        arrow.addEventListener("click", function(){
            if (arrow.innerHTML === "⇄") {
                updateForward();
                updateURL();
            }
            else {
                updateBackward();
                updateURL(true);
            }
        });
    }

    var seeMoreList = document.getElementById("seeMoreList");
    // if there are no children
    if (seeMoreList && seeMoreList.children.length === 0) {
        // add 5 randomly from defaultSeeMore
        var keys = Object.keys(defaultSeeMore);
        if (keys.length === 0) {
            seeMoreList.insertAdjacentHTML("beforebegin", "<p>Check out more of our converters <a href='.'>on the main page</a>!</p>\n");
            seeMoreList.style.display = "none";
        }
        for (var i = 0; i < 5; i++) {
            if (keys.length === 0) { break; }
            var key = choose(keys);
            seeMoreList.insertAdjacentHTML("beforeend", "<li><a href='"+key+"'>"+defaultSeeMore[key]+"</a></li>\n");
            keys.splice(keys.indexOf(key), 1);
        }
    }

    var exampleList = document.getElementById("exampleList");
    // if there are no children
    if (exampleList && exampleList.children.length === 0) {
        // add 7 randomly from defaultExamples
        for (var i = 0; i < 7; i++) {
            if (settings.examples) {
                var example = choose(choose(settings.examples));
            }
            else {
                // random key from defaultExamples
                var example = choose(defaultExamples[choose(Object.keys(defaultExamples))]);
            }
            exampleList.insertAdjacentHTML("beforeend", "<li>“<a href='?text="+encodeURIComponent(example).replaceAll("'","%27")+"'>"+example+"</a>„</li>\n");
        }
    }

    console.log("Loaded converter script");

    // update inputs, controls, and settings with URL parameters
    if (window.location.search) {
    if (window.location.search.indexOf("=") === -1) {
        updateForward(window.location.search.substring(1));
    }
    else if (typeof URLSearchParams !== "undefined") { // if supported
        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("text")) {
            updateForward(urlParams.get("text"));
        }
        if (urlParams.has("output")) {
            updateBackward(urlParams.get("output"));
        }
        // loop through urlParams
        var keys = urlParams.keys();
        for (var key of keys) {
            var value = urlParams.get(key);
            if (settings[key] !== undefined) {
                settings[key] = value;
            }
            var element = document.getElementById(key);
            // update inputs
            if (element) {
                var tagName = element.tagName.toLowerCase();
                switch (tagName) {
                case "input":
                    if (element.type === "checkbox") {
                        element.checked = (value === "true");
                        checkboxPress(element);
                    }
                    else {
                        element.value = value;
                        if (element.type === "range") {
                            element.value = value;
                            rangeChange(element);
                        }
                        else if (element.type === "text") {
                            element.value = value;
                            textInputChange(element);
                        }
                    }
                    break;
                case "select":
                    element.value = value;
                    // check if option exists
                    if (element.value !== value) {
                        // select first option
                        element.value = element.options[0].value;
                    }
                    langSelectChange(element);
                    break;
                case "div":
                    if (element.classList.contains("optionGroup")) {
                        // make button with id value selected=true
                        var button = element.querySelector("input[type=button][id="+value+"]");
                        if (button) {
                            modeButtonPress(button);
                        }
                        else {
                            // select first button
                            button = element.querySelector("input[type=button]");
                            settings[element.id] = button.id;
                            console.log(button)
                            modeButtonPress(button);
                        }
                    }
                }
            }
        }
    }
    }
    console.log(settings)
    // end initialization
}

var loaded = false;

document.addEventListener("DOMContentLoaded", function(){
    if (!loaded) { initConverter() }
});
document.addEventListener("load", function(){
    if (!loaded) { initConverter() }
});