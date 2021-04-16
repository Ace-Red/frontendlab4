'use strict'; //  это установка, которая заставляет код обрабатываться в современном режиме.

//Продемонструвати роботу з функціями:

//1) оголошення функції function declaration
//
function sayHelloWorldDeclaration(){
    return "Hello world Declaration!";
}
console.log(sayHelloWorldDeclaration());
//2) function expression
let sayHelloWorldExpression = function() {
    return("Hello world Expression!");
};
console.log(sayHelloWorldExpression());

//3) параметри

function calcSum(x1, x2){
    return (x1 + " + " + x2 + " = " + (x1+x2));
}
console.log(calcSum(3,4));

function calcDiff(x1, x2){
    return (x1 + " - " + x2 + " = " + (x1-x2));
}
console.log(calcDiff(3,4));

function calcMultiply(x1, x2){
    return (x1 + " * " + x2 + " = " + (x1*x2));
}
console.log(calcMultiply(3,4));

function calcDivide(x1, x2){
    return (x1 + " / " + x2 + " = " + (x1/x2));
}
console.log(calcDivide(12,4));

//4) дефолтні значення параметрів

function showFNameLName(fName = "Неизвестный", lName= "Неизвестный"){
    return ("Здравствуйте! " + fName + " " + lName);
}
console.log(showFNameLName("Алексей"));

//5) анонімні функції

let anonFunction = function (){
    console.log("Это анонимная функция!У неё нет имени)Да оно и не нужно");
}

//6) передача анонімних функцій як параметрів

function test(answer,anonFunction1,anonFunction2){
    console.log("Здесь есть анонимная функция? ДА/НЕТ");
    if(answer === "ДА"){
        anonFunction1();
    }
    else {
        anonFunction2();
    }
}
test("НЕТ",function (){
    console.log("Ответ правильный!");
},function (){
    console.log("Ну как нет,если она тут есть)");
})

//7) присвоєння функцій та їх подальший виклик

let originalFunction = function (x1,x2){
    console.log("Параметры данной функции: " + x1 + " " + x2);
}

let copyFunction = originalFunction;
copyFunction(2,"строка");

//8) стрілочні функції та особливості ES6

let funcConcat = (x1,x2)=>{
    let str = x1 + " " + x2;
    console.log("Конкатенация строк дала результат: " + str);
}
funcConcat("первая часть лабораторной 4", "выполнена");
//====================== 2 Часть ================================
// Продемонструвати роботу із замиканнями:

// 1) продемонструвати різні варіанти замикань

function example1(start = 0) {
    let value = start;
    return function () {
        return value++;
    }
}
let res = example1();
console.log(res()); //0
console.log(res()); //1
console.log(res()) //2

function example2() {
    let fName = "Nikita";

    return function showFName() {
        return fName;
    };
}
let myFName = example2();
console.log(myFName()); //"Nikita"

function divide(x1) {
    return function (x2) {
        return x1 / x2;
    };
}
let divideRes = divide(30);
console.log(divideRes(6)); //5

// 2) продемонструвати паттерн "модуль"

let car = (function () {
    let info = { carPlateNumber: "KA0000ММ", owner: "Nikita Sakun", color: "black"};

    return {
        renumber: function (newNumber) {
            info.carPlateNumber = newNumber;
        },
        rename: function (newOwner) {
            info.owner = newOwner;
        },
        repaire: function (newColor) {
            info.color = newColor;
        },
        showAllInfo: function () {
            console.log("Авто з номером: " + info.carPlateNumber + " Принадлежить: " + info.owner + " І має колір: " + info.color);
        },
    };
})();
car.showAllInfo(); //info которое указано
car.repaire("blue"); //поменяем цвет
car.rename("Oksana Gladysh"); //поменяем владельца
car.renumber("КА1111СН"); //поменяем владельца
car.showAllInfo(); //выведем новую информацию

// 3) продемонструвати замикання як обробник деякої події на html-сторінці; анонімна функція-обробник замикає в собі деякі дані і працює з ними.

function clickAndShow(elemId){
    elemId.addEventListener("click", function (){
        elemId.style.backgroundColor='yellow';
        elemId.style.color='red';
    })
}
let divId = document.getElementById('idButton')
clickAndShow(divId);