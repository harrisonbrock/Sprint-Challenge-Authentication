const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
    if (!username) {
      res.status(404).send({error: 'You must include a username'});
      return;
    }
    if(!password) {
      res.status(404).send({error: 'Your must include a password'})
        return;
    }

    const user = new User({username, password});
    console.log(user);
    user
        .save()
        .then(newUser => {
          res.status(201).send(newUser);
        })
        .catch(err => {
          res.status(500).send({error: 'Error saving user to database'});
        })

};

module.exports = {
  createUser
};
