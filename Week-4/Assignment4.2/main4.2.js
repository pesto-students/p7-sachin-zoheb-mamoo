var Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.printName = function () {
  return this.name;
};

function Teacher(name, age) {
  Person.call(this, name);
  Person.call(this, age);
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function (subject) {
  console.log(this.printName() + " is teaching " + subject);
};

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");
