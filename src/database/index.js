const databaseConfig = require("./databese.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(databaseConfig.DB, databaseConfig.USER, databaseConfig.PASSWORD, {
  host: databaseConfig.HOST,
  dialect: databaseConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: databaseConfig.pool.max,
    min: databaseConfig.pool.min,
    acquire: databaseConfig.pool.acquire,
    idle: databaseConfig.pool.idle
  }
});

const database = {};

database.Sequelize = Sequelize;
database.connection = sequelize;

database.users = require('../models/user.model.js')(database.connection, database.Sequelize);
database.actions = require('../models/action.model.js')(database.connection, database.Sequelize);
database.users.belongsToMany(database.actions, {
  through: "user_action",
  as: "actions",
  foreignKey: "action_id",
});
database.actions.belongsToMany(database.users, {
  through: "user_action",
  as: "users",
  foreignKey: "user_id",
});
module.exports = database;