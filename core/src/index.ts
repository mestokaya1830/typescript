//expicit types

//string----------------------------------
let user: string = 'Mesto Kaya'
console.log(user)


//number----------------------------------
let age: number = 50
console.log(age)


//array string----------------------------
let lang: string[] = ['Html', 'Css', 'Jabascript']
console.log(lang)


//array number----------------------------
let num: number[] = [1, 2, 3]
console.log(num)

//array empty----------------------------
let lang2: string[] = []
lang2.push('Html')
console.log(lang2)

//union types
let mixed: (string | number )[] = ['Html', 'Css', 'Jabascript', 1, 2, 3]
console.log(mixed)



//object----------------------------------
let person:object = {
  name:'Mesto',
  age:50
}
console.log(person)

//array object----------------------------
let users: {name: string, age: number}[] = [
  {name:'Mesto', age:50},
  {name:'Ali', age:30},
  {name:'Deniz', age:20}
]
console.log(users)

//array object or with alias----------------------------
type obc = {name: string, age: number}//alias
let users2: obc[] = [
  {name:'Mesto', age:50},
  {name:'Ali', age:30},
  {name:'Deniz', age:20}
]
console.log(users2)

//functions
const getUser = (name: string, age: number) => {
  return name +' '+ age
}

console.log(getUser('Mesto', 40))

//with default
const getUser2 = (name: string = 'Mustafa') => {
  return name
}

console.log(getUser2())//if you need type name

//with return type (viod)
const getUser3 = (name: string): string => {
  return name
}

console.log(getUser3('Mesto'))

//dom
const tagh2 = document.querySelector('h2')!
console.log(tagh2) //this works
console.log(tagh2.style)//but this need !(mean not null) punction at the end of query

//or without ! punction use if
const tagp = document.querySelector('p')
console.log(tagp) //this works
if(tagp){
  console.log(tagp.style)
}

//or with as proprty
const title = document.getElementById('title') as HTMLHeadElement
console.log(title.style)

const par = document.getElementById('par') as HTMLParagraphElement
console.log(par.style)

//form
const form = document.getElementById('submit') as HTMLFormElement
const formName = document.getElementById('name') as HTMLFormElement
const formAge = document.getElementById('age') as HTMLFormElement

form.addEventListener('click', (e: Event) => {
  e.preventDefault
  console.log(formName.value)
  console.log(formAge.value)
})