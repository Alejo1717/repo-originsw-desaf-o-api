const authController = {};
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const db = require("../database");
const User = db.users;

authController.login = async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.body.username } });
        if (!user) return res.status(400).json({ error: 'Usuario o Clave Incorrecta' });
        await bcrypt.compare(req.body.password, user.dataValues.password, (error, isValid) => {
            if (isValid) {
                const token = jwt.sign({ id: user.dataValues.id, email: user.dataValues.email, username:user.dataValues.username }, process.env.TOKEN_SECRET);
                return res.status(200).json({ token: token });
            } else {
                return res.status(400).json({ err: 'Email or password incorrect' })
            }
        });
    }
    catch (ex) {
        return res.status(500).json(ex.errors);
    }
}
module.exports = authController;