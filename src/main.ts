type User={
    name:string
}
let ighor:User={
    name:"ighor"
}

console.log(ighor);
interface Person{
    fname:string;
    lname:string;
    age:number

}
const person:Person = {
    fname:"Muhire",
    lname:"Ighor",
    age:12
}
interface Point{
    num1:number;
    num2:number;
}
console.log(person);
function addNumber(p:Point){
    console.log(`${p.num1}, ${p.num2}`);
    
}
const point = {
    num1:12,num2:23
}

addNumber(point);
type Userinfo = {
    name:string;
    address:string;
    number:number;
}
class UserAccount{
    name:string;
    address:string;
    number:number
    constructor(name:string,address:string,number:number){
        this.name = name;
        this.address = address;
        this.number = number
    }
}
const user2:Userinfo = new UserAccount("Muhire Ighor","Kibagabaga",5);
console.log(user2.name);
const students : string[] = ['Muhire','Ighor','Manzi'];
console.log(students[2]);
function ageSelector


