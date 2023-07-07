const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userDataPath = path.join(path.dirname(__dirname), 'data', 'users.json');

module.exports = class User {
  constructor(username, password) {
    this.id= Math.random().toString()
    this.username = username;
    this.password = password;
  }

  static getUsers() {
    try {
      const usersData = fs.readFileSync(userDataPath, 'utf-8');
      return JSON.parse(usersData);
    } catch (err) {
      console.error('Error reading users data:', err);
      return [];
    }
  }

  static saveUsers(users) {
    try {
      fs.writeFileSync(userDataPath, JSON.stringify(users));
      console.log('Users data saved successfully.');
    } catch (err) {
      console.error('Error saving users data:', err);
    }
  }

  static getUserByUsername(username) {
    const users = User.getUsers();
    return users.find((user) => user.username === username);
  }

  static createUser(username, password) {
    const users = User.getUsers();
    const newUser = new User(username, password);
    users.push(newUser);
    User.saveUsers(users);
    return newUser;
  }

  static getUserByToken(token) {
    const decodedToken = jwt.verify(token, 'secret123');
    const username = decodedToken.username;
    const loggedInUser = User.getUserByUsername(username);
    return loggedInUser
  }

  static updateUser(user) {
    const users = User.getUsers();
    const index = users.findIndex((u) => u.username === user.username);
    if (index !== -1) {
      users[index] = user;
      User.saveUsers(users);
      return true;
    }
    return false;
  }
};
