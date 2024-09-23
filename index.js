console.log('<----- INDEX ----->')

// Declaracion de un objeto estándar

const person = {
  age: 20,
  name: 'Pablo',
  greeting: () => console.log('hola'),
  friends: ['pepe', 'maría', 'juan'],
  address: {
    addressNumber: 20,
    streetName: 'Paseo de la Chopera'
  },
  'hola como estas': 'string',
  100: 'test'
}

// Acceso a valores
const keyToAccess = 'age';

// console.log(person.address.addressNumber)
// console.log(person['address']['addressNumber'])
// console.log(person[keyToAccess])


// AÑADIR VALORES
console.log(person.city);

if (person.sayCity) {
  person.sayCity()
}

person.city = 'Madrid'
person.sayCity = () => console.log('Madrid')
if (person.sayCity) {
  person.sayCity()
}
// console.log(person.city);

const animalKey = 'animal'

person[animalKey] = 'dog'
// person.animal = 'dog'

//console.log(person[animalKey])


// DELETE KEY-VALUE

console.log(person.age)
delete person.age
console.log(person.age)
person.name = `${person.name} Laso`
console.log(person.name)


// COMPROBAR SI UNA KEY EXISTE / key in object

if ('city' in person) {
  console.log('city existe')
} 

