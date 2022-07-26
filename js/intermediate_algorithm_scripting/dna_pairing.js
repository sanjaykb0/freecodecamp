function pairElement(str) {
    var strArr = str.split("");
    var resArray = [];
    var tmp;
    strArr.forEach(char => {
        tmp = [];
        switch(char) {
            case 'G':
                tmp.push('G','C');
                break;

            case 'C':
                tmp.push('C','G');
                break;

            case 'A':
                tmp.push('A', 'T');
                break;

            case 'T':
                tmp.push('T', 'A');
                break;

            default:
                break;
        }

        resArray.push(tmp);
    })

    return resArray;
};

var res = pairElement('ATTCGA');
console.log(res)


