"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'hello world hi';
console.log(message);
var x = 10;
var y = 20;
var a;
//var declaration. 
//  JS 
//you have gloabal and function level declarations, you can redeclare same variable name
// TS
// you have global , function level, and block level also (if, while...). you can not redeclare same variable.
//variable types in TS
// boolean, number , string
var isBeginener = true;
var total = 10;
var name = 'Kishore';
//template strings
var sentence = "My name is " + name + "\nI am a beginner in TS";
console.log(sentence);
//null and undefined
var n = null;
var u = undefined;
var isNew = null; // or undefined
var myName = undefined;
//arrays
var list1 = [1, 2, 3, 4];
var list2 = [2, 3, 4];
//mixed types,, tuples
var person1 = ['chris', 1];
var person2 = null; // or undefined
person2 = ['chris', 'bob'];
//enums
var colors;
(function (colors) {
    colors[colors["Red"] = 0] = "Red";
    colors[colors["Green"] = 1] = "Green";
    colors[colors["Blue"] = 2] = "Blue";
})(colors || (colors = {}));
;
var c = colors.Green;
console.log(c);
var newColors;
(function (newColors) {
    newColors[newColors["Red"] = 2] = "Red";
    newColors[newColors["Green"] = 3] = "Green";
    newColors[newColors["Blue"] = 4] = "Blue";
})(newColors || (newColors = {}));
;
var m = newColors.Blue;
console.log(m);
//any type
//if we are not sure the type from a library.. we use it
var randomvalue = 10;
randomvalue = true;
randomvalue = 'Anything';
console.log(randomvalue.name); //we can have any  property for any
//unknown type
var anotherType = 10;
//anotherType.ToUpper();  // error
//assertion 
//console.log((anotherType as string).toUpperCase()); //its not compiled error.. its runtime assertion failed
//its called type assertion its like type casting
// console.log(anotherType + 1); // for unknow types, we need to type assertion . for any type we do't need it.
console.log(anotherType + 20);
//to assert it as userdefined type and has some user defined properyt name
function hasName(obj) {
    return !!obj &&
        typeof obj == 'object' &&
        'name' in obj;
}
//here hasName(obj:any) is function name with arguments and obj is {name:string} is return. its going to return the name property as string
if (hasName(randomvalue)) {
    console.log(randomvalue.name);
}
//any vs unknow is : we need to do type assertion for unknow first before using it. 
//type inference : 
var var1;
var1 = 10;
var1 = 'test';
var var2 = 10; //TS infered the var2 as number
//var2 = 'test'; //error
//union of types for same variable
var mymultitype;
mymultitype = 10;
mymultitype = true;
//both works fine as its union of types
var myanothermultityp;
myanothermultityp = 10;
myanothermultityp = true;
//here any type variable has no restrictions.. but in above union type restricts to number and boolean
//in union types,.. after assinging the value, intellisense give the functions of the type which was assinged to that variable in above statment. 
//functions in TS
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, '2'));
function add1(num1, num2) {
    return num1 + num2;
}
//console.log(add1(1,'2'));//error we have static type checking
console.log(add1(1, 2));
//optional params
function add2(num1, num2) {
    return num1 + num2;
}
//num2 is optional,, similarly you can have any number of params,, but they should be after mandatory params
//defaul params
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
//here num2 is defaulted to 10
//interfaces
//its possilbe to specify an obj as variable in TS
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'bruce',
    lastName: 'wayne'
};
console.log(fullName(p));
function newFullName(person) {
}
//now lastname in newPerson is optional when we use it function
//classes
//in JS is no classes.. 
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Kishore');
//here   defualt constructor will be there if we don't mention any constructor similar to C#
emp1.greet();
//inheritence
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('bruce');
m1.greet(); // its from parent
m1.delegateWork();
//access modifiers
//public , private, protected.. smae like C#
//public by default is TS , you can mention public also. (C# by default private)
//private : can not access outside of class, not even in derived class
//protected : you can access them in derived class
