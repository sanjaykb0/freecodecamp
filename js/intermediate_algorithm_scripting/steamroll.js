function steamrollArray(arr) {
  let res = [];
  let tmp;
  arr.forEach(ele => {
    tmp = ele;
    if (Array.isArray(tmp) && tmp.length > 1) {
      tmp = steamrollArray(tmp);
    }
 
    if (ele === {}) {
      res.push(ele);
    } else {
    console.log("BEFORE", tmp)
    while (Array.isArray(tmp) && tmp.length > 0) {
      if (tmp.length > 1) {
        console.log("DOGFISH", tmp);
        tmp.forEach(e => res.push(e))
        tmp = [];
        break;
      }
      tmp = tmp.pop();
      console.log("DURING", tmp)
    }
    console.log(tmp);
    if (tmp.length != 0) {
      res.push(tmp);
    }
    console.log(res)
  }})
  return res;
}
 
steamrollArray([1, [2], [3, [[[4]]]]]);
