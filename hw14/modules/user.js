// userOperations.js
const { User } = require('../database/models/user');
const bcrypt = require('bcrypt');

async function registerUser(name, email, password) {
  try {
    const user = await User.create({ name, email, password });
    return user;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong');
  }
}

async function loginUser(email, password) {
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        throw new Error('Invalid credentials');
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        throw new Error('Invalid credentials');
      }
  
      return user;
    } catch (error) {
      throw new Error(error.message || 'Something went wrong');
    }
  }

module.exports = {
  registerUser,
  loginUser,
};
