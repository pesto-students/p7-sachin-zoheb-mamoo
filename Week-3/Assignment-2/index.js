
let customer = {
  fName: "Sakar",
  lName: "Chauhan",
  city: "Dehradun",
  state: "Uttarakhand",
};

let merchant = {
  fName: "Jetha",
  lName: "Lal",
  city: "Surat",
  state: "Gujrat",
};

function printBill(name,address) {
    let bill = '';
  if (name) {
    bill+=`${this.fName} ${this.lName}. `;
  }
  if (address) {
    bill+= `Lives in ${this.city}, ${this.state}`;
  }
  return bill
}

console.log(" \n < Example for Bind  : It will bind this keyword permanently to customer object and returns a functions which is stored as customerName />  \n");
const customerName = printBill.bind(customer, true , false);
console.log(customerName());

console.log(" \n < Example for Call :  binds this keyword to customer object for single call . Doesn't returns a function .  Takes comma separated arguments starting from second parameter  /> \n");
console.log(printBill.call(customer,false,true));

console.log(" \n < Example for Apply : binds this keyword to merchant object for single call . It also doesn't returns a function. Takes array of arguments as second parameter />");
console.log(printBill.apply(merchant, [true,true]));
