function palindrome(str) {
    let cleanstr = str.replace(/[#*_\/":\-.|&;$%@"<>()+,/\s/g]/g, "");
    cleanstr = cleanstr.toLowerCase()
  
    let arr = cleanstr.split("");
    arr = arr.reverse();
    console.log(arr.join(""))
    console.log(cleanstr)
    return cleanstr === arr.join("");
  
  }
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"));