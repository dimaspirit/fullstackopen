const { v1: uuid } = require('uuid')
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

const { authors } = require('./db/authors')
const { books } = require('./db/books')

const typeDefs = `
  type Author {
    name: String!
    id: ID!
    born: Int
    bookCount: Int
  }

  type Book {
    title: String!
    published: Int!
    author: String!
    id: ID!
    genres: [String!]!
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]!
    ): Book

    editAuthor(
      name: String!
      born: Int!
    ): Author
  }
`

const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allBooks: (object, args) => {
      const { author, genre } = args

      if (author) {
        books = books.filter(book => book.author === author)
      } else if (genre) {
        books = books.filter(book => book.genres.includes(genre))
      }

      return books
    },
    allAuthors: () => {
      return authors.map(author => {
        const bookCount = books.filter(book => book.author === author.name).length
        return {
          ...author,
          bookCount
        }
      })
    },
  },
  Mutation: {
    addBook: (object, args) => {
      const { title, author, published, genres } = args
      const book = { title, author, published, genres, id: uuid() }
      books = books.concat(book)
      return book
    },
    editAuthor: (object, args) => {
      const { name, born } = args
      const author = authors.find(author => author.name === name)
      if (!author) return null

      const updatedAuthor = { ...author, born }
      authors = authors.map(author => author.name === name ? updatedAuthor : author)
      return updatedAuthor
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})