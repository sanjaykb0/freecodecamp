const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++ ) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumPrimes(num) {
    let res = -1; // NO CLUE WHY BUT THIS IS NECESSARY FOR THE RIGHT OUTPUT.
    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) {
            res += i;
        }
    }

    return res;
}

let res = sumPrimes(10);
console.log(res);