console.log('<----- METHODS ----->')

const olympicRecords = {
  athletics100Men: 'Usain Bolt',
  athleticsLongJumpMen: 'Mike Powel',
  swimming200Men: 'Michael Phelps',
  swimming400Women: 'Katie Ledecky',
  swimming200Women: 'Katie Ledecky'
};

// OBJECTS.KEYS()

const olympicRecordsKeys = Object.keys(olympicRecords)
// console.log(Object.keys(olympicRecords))
// console.log(Object.values(olympicRecords))
// console.log(Object.entries(olympicRecords))

console.log('<-- Con for -->')
for (let index = 0; index < olympicRecordsKeys.length; index++) {
  const element = olympicRecordsKeys[index]; // athletics100Men - athleticsLongJumpMen
  console.log(olympicRecords[element])
}

console.log('<-- Con forEach -->')
olympicRecordsKeys.forEach((key) => {
  console.log(olympicRecords[key])
})

console.log('<-- Con for in -->')
for (let key in olympicRecords) {
  console.log(key);
}

console.log('<--Practica 1 -->')

const user = { name: 'Nick', id: 7 };

const book1 = { title: 'The Catcher in the Rye', author: 'J.D Salinger', isbn: '0316769487', category: 'Classic Literature' };
const book2 = { title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '0446310786', category: 'Classic Literature' };

user.books = [book1, book2]


const library = [];

library.push(user)

console.log(library) // [ { name, id, books } ]

const book3 = { title: 'To Kill a Mockingbird 2', author: 'Harper Lee', isbn: '0446310786', category: 'Classic Literature' };

user.books.push(book3)

console.log(library) // [ { name, id, books } ]



library.forEach(user => {
  console.log('user: ', user.name)
  user.books.forEach(book => {
    console.log('----> ', book.title)
  })
})