const romanCipher = {
    '1000' : 'M',
    '900' : 'CM',
    '500' : 'D',
    '400' : 'CD',
    '100' : 'C',
    '90' : 'XC',
    '50' : 'L',
    '40' : 'XL',
    '10' : 'X',
    '9' : 'IX',
    '5' : 'V',
    '4' : 'IV',
    '1' : 'I', 
};

const keys = Object.keys(romanCipher).reverse();

function convertToRoman(num) {
    let res = "";
    let tmp = num;
    let val;
    keys.forEach(key => {
        val = Number(key);
        while (tmp >= val) {
            tmp -= val;
            res += romanCipher[key]
        }
    })
    return res;
}

console.log(convertToRoman(3999))

   