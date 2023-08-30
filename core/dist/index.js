"use strict";
//expicit types
//string----------------------------------
let user = 'Mesto Kaya';
console.log(user);
//number----------------------------------
let age = 50;
console.log(age);
//array string----------------------------
let lang = ['Html', 'Css', 'Jabascript'];
console.log(lang);
//array number----------------------------
let num = [1, 2, 3];
console.log(num);
//array empty----------------------------
let lang2 = [];
lang2.push('Html');
console.log(lang2);
//union types
let mixed = ['Html', 'Css', 'Jabascript', 1, 2, 3];
console.log(mixed);
//object----------------------------------
let person = {
    name: 'Mesto',
    age: 50
};
console.log(person);
//array object----------------------------
let users = [
    { name: 'Mesto', age: 50 },
    { name: 'Ali', age: 30 },
    { name: 'Deniz', age: 20 }
];
console.log(users);
let users2 = [
    { name: 'Mesto', age: 50 },
    { name: 'Ali', age: 30 },
    { name: 'Deniz', age: 20 }
];
console.log(users2);
//functions
const getUser = (name, age) => {
    return name + ' ' + age;
};
console.log(getUser('Mesto', 40));
//with default
const getUser2 = (name = 'Mustafa') => {
    return name;
};
console.log(getUser2()); //if you need type name
//with return type (viod)
const getUser3 = (name) => {
    return name;
};
console.log(getUser3('Mesto'));
//dom
const tagh2 = document.querySelector('h2');
console.log(tagh2); //this works
console.log(tagh2.style); //but this need !(mean not null) punction at the end of query
//or without ! punction use if
const tagp = document.querySelector('p');
console.log(tagp); //this works
if (tagp) {
    console.log(tagp.style);
}
//or with as proprty
const title = document.getElementById('title');
console.log(title.style);
const par = document.getElementById('par');
console.log(par.style);
//form
const form = document.getElementById('submit');
const formName = document.getElementById('name');
const formAge = document.getElementById('age');
form.addEventListener('click', (e) => {
    e.preventDefault;
    console.log(formName.value);
    console.log(formName.value);
});
