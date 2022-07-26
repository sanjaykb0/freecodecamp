const getMultiple = (a, b) => {
    const _gcd = (a, b) => {
        return !b ? a : _gcd(b, a % b);
    }

    return (a * b / _gcd(a, b));
}

function smallestCommons(arr) {

    if (arr[0] == arr[1]) {
        return arr[0];
    }
    arr.sort((a, b) => a - b); // Sorting the array so that [0] < [1]
    let num = arr[0];

    for (let i = arr[0]; i < arr[1]; i++) {
        num = getMultiple(num, i + 1);
    }

    return num;

}

var x = smallestCommons([23, 18]);
console.log(x)