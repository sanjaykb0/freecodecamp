function steamrollArray(arr, res = []) {
    arr.forEach(item => {
        if (!item.isPrototypeOf(Array)) {
            res.push(item);
        }
    })
    return res;
}
  
steamrollArray([1, [2], [3, [[4]]]]);

