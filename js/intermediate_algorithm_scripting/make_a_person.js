const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;
  this.getFirstName = () => fullName.split(" ")[0];
  this.getLastName = () => fullName.split(" ")[1];
  this.getFullName = () => fullName;
  this.setFirstName = str => fullName = str +   + fullName.split(" ")[1];
  this.setLastName = str => fullName = fullName.split(" ")[0] +   + str;
  this.setFullName = str => fullName = str;
};
 
const bob = new Person("Bob Ross");
console.log(bob.getLastName());
 
