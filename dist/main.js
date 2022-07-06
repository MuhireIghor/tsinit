let ighor = {
    name: "ighor"
};
console.log(ighor);
const person = {
    fname: "Muhire",
    lname: "Ighor",
    age: 12
};
console.log(person);
function addNumber(p) {
    console.log(`${p.num1}, ${p.num2}`);
}
const point = {
    num1: 12, num2: 23
};
addNumber(point);
class UserAccount {
    constructor(name, address, number) {
        this.name = name;
        this.address = address;
        this.number = number;
    }
}
const user2 = new UserAccount("Muhire Ighor", "Kibagabaga", 5);
console.log(user2.name);
const students = ['Muhire', 'Ighor', 'Manzi'];
console.log(students[2]);
