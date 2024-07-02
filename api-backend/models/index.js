const config = require("../db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("mysql://root:Rahul_270204@localhost:3306/zoomcar");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.js")(sequelize, Sequelize);
db.role = require("../models/role.js")(sequelize, Sequelize);
db.car=require("../models/car.js")(sequelize,Sequelize)

db.role.belongsToMany(db.user, {
    through: "user_roles"
  });
db.user.belongsToMany(db.role, {
    through: "user_roles"
});
// db.car.hasOne(db.user,{
//     through:"user_roles"
// })

db.car.belongsTo(db.user);

db.ROLES = ["user", "admin"];
  
module.exports = db;

