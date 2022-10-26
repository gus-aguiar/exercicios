const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
const array = books.map(
  (element) => `${element.name} - ${element.genre} - ${element.author.name}`
);
//   console.log (array)
//=====================1====================//

function nameAndAge() {
  return books
    .map((element) => ({
      age: element.releaseYear - element.author.birthYear,
      author: element.author.name,
    }))
    .sort((obj1, obj2) => obj1.age - obj2.age);
}
//   console.log(nameAndAge())
//======================2=====================//

function fantasyOrScienceFiction() {
  return books.filter(
    (element) =>
      element.genre === "Fantasia" || element.genre === "Ficção Científica"
  );
}

// console.log(fantasyOrScienceFiction())
//========================3==================================//

function oldBooksOrdered() {
// const dates = new Date().getFullYear();
  return books.filter((element) => (
    2022 - element.releaseYear >  60
  )
  ).sort((obj1, obj2) => (
    obj1.releaseYear - obj2.releaseYear
  ))
}

// console.log(oldBooksOrdered())
//==========================4===================================//

function fantasyOrScienceFictionAuthors() {
  return books
  .filter((element) => ( element.genre === "Fantasia" || element.genre === "Ficção Científica"))
  .map((elementous) => (elementous.author.name)).sort()
}
// console.log(fantasyOrScienceFictionAuthors());  
//===========================5===============================//
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
return books
.filter((element) => ( 2022 - element.releaseYear > 60))
.map((book => (
  book.name
)))
}
// console.log(oldBooks());