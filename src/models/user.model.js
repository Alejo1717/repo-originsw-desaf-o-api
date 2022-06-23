const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING,
            isEmail: true,
            notEmpty: true,
            notNull: true,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            get() {
                return () => this.getDataValue('password')
            },
            notEmpty: true,
            notNull: true,
            unique: false
        },
        email: {
            type: Sequelize.STRING,
            set: function (val) {
                this.setDataValue('email', val.toLowerCase());
            },
            isEmail: true,
            notEmpty: true,
            notNull: true,
            unique: true
        },        
        firstname: {
            type: Sequelize.STRING,
            notEmpty: false,
            notNull: false,
            unique: false
        },
        lastname: {
            type: Sequelize.STRING,
            notEmpty: false,
            notNull: false,
            unique: false
        }
    });

    return User;
};