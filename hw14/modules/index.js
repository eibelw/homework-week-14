const userOperations = require('./user');
const bookOperations = require('./books');

async function registerAndLogin() {
  try {
    const newUser = await userOperations.registerUser('John Doe', 'john@example.com', 'password123');
    console.log('Registered user:', newUser);

    const loggedInUser = await userOperations.loginUser('john@example.com', 'password123');
    console.log('Logged in user:', loggedInUser);
  } catch (error) {
    console.error(error.message);
  }
}


async function books() {
  const books = await bookOperations.getAllBooks();
  console.log(books);
}

registerAndLogin();
books()
