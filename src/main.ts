type User={
    name:string
}
let ighor:User={
    name:"ighor"
}

console.log(ighor.name);
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
function addNumber(p:Point)
