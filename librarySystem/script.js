/*buscando e concatenando dados em Arrays

baseado no Array de livros por categoria abaixo, faça os seguintes desafios

- contar o número de categorias e o número de livros em cada categoria
- contar o número de autores
- mostrar livros do autor augusto Cury
- transformar a função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    category: ' Riqueza',
    books: [
      {
        title: 'os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George s. Classon'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Swtephen R. Covey'
      }
    ]
  }
]

const totalCategory = booksByCategory.length
console.log('Total de categorias: ', totalCategory)

for (let category of booksByCategory) {
  console.log('Total de livros dentro da categoria: ', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }
  console.log('total de autores: ', authors.length)
}

countAuthors()

function booksOfAuthor(author) {
  let books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title)
      }
    }
  }
  console.log(`Livros autor ${author}: ${books.join(' / ')}`)
}

booksOfAuthor('Augusto Cury')
booksOfAuthor('George s. Classon')
