function convertHTML(str) {
    var strArr = str.split("");
    var res = "";

    strArr.forEach(char => {
        switch(char) {
            case '&':
                res += '&amp;';
                break;
            case '<':
                res += '&lt;';
                break;
            case '>':
                res += '&gt;';
                break;
            case '\"':
                res += '&quot;';
                break;
            case "\'":
                res += '&apos;';
                break;
            default: 
                res += char;
                break;
        }
    })
    return res;
}
