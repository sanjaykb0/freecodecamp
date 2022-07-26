function destroyer(arr) {
    const filters = [...arguments].slice(1);
    var resultArr = [];

    resultArr = arr.filter(item => {
        return !filters.includes(item) 
   })
    return resultArr;
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));