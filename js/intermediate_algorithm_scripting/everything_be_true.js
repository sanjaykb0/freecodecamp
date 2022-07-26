function truthCheck(collection, pre) {
  let res = true;
  collection.forEach(obj => {
    console.log(obj[pre])
    if (!obj[pre]) {
      res = false;
    }
  });
  return res;
}
 
var x = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
