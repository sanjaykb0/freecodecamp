function addTogether() {
  let args = [...arguments];
  if (typeof args[0] !== "number" || typeof args[1] !== "number" && args.length > 1) {
    return undefined;
  }
 
  if (args[1] === undefined) {
    return (second) => addTogether(args[0], second);
  }
 
  return args[0] + args[1];
}
console.log(addTogether(5)(7))
