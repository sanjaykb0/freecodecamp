function binaryAgent(str) {
  let strArr = str.split(" ");
  return strArr.map(ele => String.fromCharCode(parseInt(ele, 2))).join("");
}
