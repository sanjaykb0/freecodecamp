// Function to shift the first consonant group to the end
function translatePigLatin(str) {
    var newStr = str.split("");
    var wasFirstVowel = true;

    if (!str.match(/a|e|i|o|u/)) {
        return str + "ay";
    }   

    while (!newStr[0].match(/a|e|i|o|u/)) {
        wasFirstVowel = false;
        newStr.push(newStr[0])
        newStr.shift();
    }

    newStr = newStr.join("");

    if (wasFirstVowel) {
        newStr += "way";
    } else {
        newStr += "ay";
    }

    return newStr;
}

var res = translatePigLatin('glove');
console.log(res);
