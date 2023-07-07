const Users = require('../models/userModel')

exports.getUsers=(req, res)=>{
    const users = Users.getUsers();
        res.send(users)
}