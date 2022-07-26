function fearNotLetter(str) {
    var strArr = str.split("");
    var res;
    const cipher = "abcdefghijklmnopqrstuvwxyz";
    var comparedArr = cipher.slice(cipher.indexOf(str[0])).split("")

    for (var i = 0; i < comparedArr.length; i++) {
        if (i > strArr.length - 1) {
            break;
        }

        if (strArr[i] != comparedArr[i]) {
            res = comparedArr[i];
            break;
        }
    }

    return res;
}
