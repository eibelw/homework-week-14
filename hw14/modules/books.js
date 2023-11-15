const { Book } = require('../database/models/books');

async function createBook(formData) {
  try {
    const book = await Book.create(formData);
    return book;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong');
  }
}

async function getAllBooks() {
  try {
    const books = await Book.findAll();
    return books;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong');
  }
}

async function editBook(id, title, author, publisher, year, pages) {
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      throw new Error('Book not found');
    }

    // Update book attributes
    await book.update({
      title,
      author,
      publisher,
      year,
      pages,
    });

    return book;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong');
  }
}

async function deleteBook(id) {
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      throw new Error('Book not found');
    }

    await book.destroy();
    return { message: 'Book deleted successfully' };
  } catch (error) {
    throw new Error(error.message || 'Something went wrong');
  }
}

async function getBookDetailById(id) {
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      throw new Error('Book not found');
    }

    return book;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong');
  }
}

module.exports = {
  createBook,
  getAllBooks,
  editBook,
  deleteBook,
  getBookDetailById,
};
