const countInstances = (arr, val) => arr.reduce((sum, v) => v == val ? sum += 1 : sum, 0);

function diffArray(arr1, arr2) {
    var resultArray = [];

    if (arr1 === arr2) {
        return resultArray;
    }

    var currentArray = arr1.concat(arr2);
    currentArray.forEach(item => {
        if (countInstances(currentArray, item) == 1) {
            resultArray.push(item)
        }
    })

    return resultArray;
}
