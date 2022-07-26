function isStrCapitalized(str) {
    if (str[0] == str[0].toUpperCase()) {
        return true;
    }
    return false;
}


function myReplace(str, before, after) {
    if (isStrCapitalized(before)) {
        after = after[0].toUpperCase() + after.slice(1);
    } else {
        after = after[0].toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
}

var x =myReplace("Let us go to the store", "store", "mall");
console.log(x);