function uniteUnique(arr) {
    const set = new Set();
    for (var arg of arguments) {
        arg.forEach(ele => set.add(ele));
    }
    return Array.from(set);
}

let test = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
console.log(test);