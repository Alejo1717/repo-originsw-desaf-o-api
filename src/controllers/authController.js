const authController = {};
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');

// login
authController.login = async (req, res) => { 
    const user = await User.findOne({email: req.body.email});
    // if (!user) return res.status(400).json({ err: 'Email or password incorrect' });
    // await bcrypt.compare(req.body.password, user.password, (error, isValid) => {
    //     if (isValid) {
    //         const token = jwt.sign({_id : user._id, email: user.email}, process.env.TOKEN_SECRET );
    //         return res.status(200).json({ token: token });
    //     } else {
    //         return res.status(400).json({ err: 'Email or password incorrect' })
    //     }
    // });
}

module.exports = authController;