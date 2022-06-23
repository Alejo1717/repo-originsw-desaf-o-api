module.exports = (sequelize, Sequelize) => {
    const Action = sequelize.define("actions", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        symbol: {
            type: Sequelize.STRING,
            notEmpty: true,
            notNull: true,
            unique: true
        },      
        name: {
            type: Sequelize.STRING,
        },
        currency: {
            type: Sequelize.STRING,
        },
        exchange: {
            type: Sequelize.STRING,
        },      
        mic_code: {
            type: Sequelize.STRING,
        },
        country: {
            type: Sequelize.STRING,
        },
        type: {
            type: Sequelize.STRING,
        }
    });

    return Action;
};