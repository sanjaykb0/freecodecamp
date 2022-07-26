function dropElements(arr, func) {
    let conditionMet = false;
    let res = [];
    arr.forEach(n => {
        if (func(n) && !conditionMet) {
            res.push(n);
            conditionMet = true;
        } else if (conditionMet){
            res.push(n);
        }
    })
    return res;
}

var x = dropElements([0, 1, 0, 1], function(n) {return n === 1;});
console.log(x);