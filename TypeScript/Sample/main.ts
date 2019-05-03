export {}
let message = 'hello world hi';
console.log(message);

let x = 10;
const y = 20;

let a;

//var declaration. 
//  JS 
//you have gloabal and function level declarations, you can redeclare same variable name
// TS
// you have global , function level, and block level also (if, while...). you can not redeclare same variable.
//variable types in TS
// boolean, number , string

let isBeginener:boolean = true;
let total:number = 10;
let name:string = 'Kishore';

//template strings
let sentence: string = `My name is ${name}
I am a beginner in TS`;
console.log(sentence);

//null and undefined
let n:null = null;
let u:undefined = undefined;
let isNew : boolean = null;// or undefined
let myName:string=undefined;

//arrays
let list1:number[] = [1,2,3,4];
let list2:Array<number> = [2,3,4];

//mixed types,, tuples
let person1:[string,number] = ['chris',1];
let person2:[string,string] = null; // or undefined
person2 = ['chris','bob'];

//enums
enum colors{Red,Green,Blue};
let c : colors = colors.Green;
console.log(c);

enum newColors{Red=2,Green,Blue};
let m:newColors = newColors.Blue;
console.log(m);

//any type
//if we are not sure the type from a library.. we use it
let randomvalue:any = 10;
randomvalue = true;
randomvalue = 'Anything';
 

console.log(randomvalue.name); //we can have any  property for any

//unknown type
let anotherType : unknown = 10;
//anotherType.ToUpper();  // error
//assertion 
//console.log((anotherType as string).toUpperCase()); //its not compiled error.. its runtime assertion failed
//its called type assertion its like type casting
// console.log(anotherType + 1); // for unknow types, we need to type assertion . for any type we do't need it.
console.log((anotherType as number) + 20);

//to assert it as userdefined type and has some user defined properyt name
function hasName(obj:any):obj is {name:string}{
    return !!obj &&
    typeof obj == 'object' &&
    'name' in obj
}
//here hasName(obj:any) is function name with arguments and obj is {name:string} is return. its going to return the name property as string
if(hasName(randomvalue)){
console.log( randomvalue.name);
}
//any vs unknow is : we need to do type assertion for unknow first before using it. 

//type inference : 
let var1;
var1 = 10;
var1 = 'test';

let var2 = 10; //TS infered the var2 as number
//var2 = 'test'; //error

//union of types for same variable
let mymultitype:number | boolean ;
mymultitype = 10;
mymultitype = true;

//both works fine as its union of types
let myanothermultityp : any;
myanothermultityp = 10;
myanothermultityp = true;
//here any type variable has no restrictions.. but in above union type restricts to number and boolean
//in union types,.. after assinging the value, intellisense give the functions of the type which was assinged to that variable in above statment. 

//functions in TS
function add(num1,num2){
    return num1+num2;
}

console.log(add(1,'2'));
function add1(num1:number, num2:number):number{
    return num1+num2;
}
//console.log(add1(1,'2'));//error we have static type checking
console.log(add1(1,2));

//optional params
function add2(num1:number, num2?:number):number{
    return num1+num2;
}
//num2 is optional,, similarly you can have any number of params,, but they should be after mandatory params

//defaul params
function add3(num1:number, num2:number=10):number{
    return num1+num2;
}
//here num2 is defaulted to 10

//interfaces
//its possilbe to specify an obj as variable in TS

function fullName(person:{firstName:string, lastName:string}){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName:'bruce',
    lastName:'wayne'
}

console.log(fullName(p));
//if we have many properties in our objects person.. then we can not put all properites in function argument. so we need 
//to use interfaces.

interface person{
    firstName:string;
    lastName:string;
}
function newFullName(person:person){

}
//now we can add any number of properties in person interface
//we can make option properites in interface
interface newPerson{
    firstName:string;
    lastName?:string;
}
//now lastname in newPerson is optional when we use it function
 

//classes
//in JS is no classes.. 

class Employee{
    employeeName:string;

    constructor(name:string){
        this.employeeName=name;
    }

    greet(){
        console.log(`good morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Kishore');
//here   defualt constructor will be there if we don't mention any constructor similar to C#
emp1.greet();

//inheritence

class Manager extends Employee{
    constructor(managerName:string){
        super(managerName); // employee constructor
    }

    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('bruce');
m1.greet(); // its from parent
m1.delegateWork();

//access modifiers
//public , private, protected.. smae like C#
//public by default is TS , you can mention public also. (C# by default private)
//private : can not access outside of class, not even in derived class
//protected : you can access them in derived class
