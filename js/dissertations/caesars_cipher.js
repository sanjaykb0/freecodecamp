let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
alph = alph.split("");

const rot13 = (str) => {
    let newString = ""
    let index;
    let charr = str.split("");
    charr.forEach(char => {
        index = alph.indexOf(char)
        if (index == -1) {
            newString += char;
        } else {
            index += 13;
            if (index > 25) {
                newString += alph[(index % 25) - 1]
            } else if (index < 25) {
                newString += alph[(index % 25)];
            } else {
                newString += alph[index];
            }
        }
    })

    return newString;
}