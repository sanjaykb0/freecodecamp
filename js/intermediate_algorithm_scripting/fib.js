function sumFibs(num) {
    let n1 = 0, n2 = 1, nextTerm = 0;
    let sum = 0;
    if (num == 0) {
      return 0;
    }
  
    if (num == 1) {
      return 1;
    }
    
    while (nextTerm <= num) {
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
  
      if ((n1 % 2 != 0)) {
        sum += n1;
      }
    }
    return sum;
  }
  
  let x = sumFibs(75025);
  console.log(x)