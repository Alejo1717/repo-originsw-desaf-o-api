const userController = {};
const bcrypt = require('bcrypt-nodejs');
const db = require("../database");
const User = db.users;

userController.getUsers = async (req, res) => {
    try {
        users = await User.findAll()
        console.log(users)
        res.status(200).json(users);
    }
    catch (ex) {
        res.status(500).json(ex);
    }
};

userController.createUser = async (req, res) => {
    
    if((req.body.email == undefined) || req.body.password == undefined) {
        res.status(400).send({
            message: 'Please provide all required fields.'
        });
        return;
    }
    const passwordCod = await bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    const newUser = {
        username: req.body.username,
        password: passwordCod,
        email: req.body.email,        
        firstname: req.body.firstname ? req.body.firstname : '',
        lastname: req.body.lastname ? req.body.lastname : '',
    }

    try {
        const user = await User.create(newUser)
        console.log(user)
        res.status(200).json(user);
    }
    catch (ex) {
        if (ex.errors[0].type === 'unique violation') {
            res.status(409).json(ex.errors[0].message);
            return;
        }
        res.status(500).json(ex.errors[0].message);
    }
};

userController.getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({ where: { id } });
        res.status(200).json(user);
    }
    catch (ex) {
        res.status(500).json(ex);
    }
};

module.exports = userController;